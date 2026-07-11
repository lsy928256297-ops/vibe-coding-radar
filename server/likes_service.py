#!/usr/bin/env python3
import hashlib
import json
import os
import re
import urllib.request
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


LIKES_HASH_KEY = "vibe-radar:project-likes:v1"
COOLDOWN_KEY_PREFIX = "vibe-radar:like-cooldown:v1"
COOLDOWN_SECONDS = 10 * 60
PROJECT_ID_PATTERN = re.compile(r"^(fun|useful|hardware|stars)-\d{1,3}$")


def is_project_id(value):
    return isinstance(value, str) and PROJECT_ID_PATTERN.fullmatch(value) is not None


def create_actor_key(project_id, headers, remote_address, secret):
    forwarded_for = headers.get("x-forwarded-for", "").split(",")[0].strip()
    user_agent = headers.get("user-agent", "")
    identity = "|".join(
        [
            project_id,
            forwarded_for or remote_address or "unknown-ip",
            user_agent or "unknown-agent",
            secret,
        ]
    )
    return hashlib.sha256(identity.encode("utf-8")).hexdigest()[:32]


def parse_counts(value):
    if isinstance(value, list):
        entries = zip(value[::2], value[1::2])
    elif isinstance(value, dict):
        entries = value.items()
    else:
        entries = []

    counts = {}
    for project_id, raw_count in entries:
        try:
            count = int(raw_count)
        except (TypeError, ValueError):
            continue
        if is_project_id(project_id) and count >= 0:
            counts[project_id] = count
    return counts


class UpstashRedis:
    def __init__(self, url, token):
        self.url = url
        self.token = token

    def command(self, parts):
        request = urllib.request.Request(
            self.url,
            data=json.dumps(parts).encode("utf-8"),
            headers={
                "Authorization": f"Bearer {self.token}",
                "Content-Type": "application/json",
            },
            method="POST",
        )
        with urllib.request.urlopen(request, timeout=6) as response:
            payload = json.load(response)
        return payload.get("result")


class LikesApplication:
    def __init__(self, redis_command, secret):
        self.redis_command = redis_command
        self.secret = secret

    def handle(self, method, body, headers, remote_address):
        response_headers = {"Cache-Control": "no-store"}
        if method == "GET":
            counts = parse_counts(self.redis_command(["HGETALL", LIKES_HASH_KEY]))
            return 200, {"counts": counts}, response_headers

        if method != "POST":
            response_headers["Allow"] = "GET, POST"
            return 405, {"error": "method_not_allowed"}, response_headers

        project_id = body.get("projectId") if isinstance(body, dict) else None
        if not is_project_id(project_id):
            return 400, {"error": "invalid_project_id"}, response_headers

        actor_key = create_actor_key(project_id, headers, remote_address, self.secret)
        cooldown_key = f"{COOLDOWN_KEY_PREFIX}:{project_id}:{actor_key}"
        lock = self.redis_command(["SET", cooldown_key, "1", "EX", COOLDOWN_SECONDS, "NX"])
        if lock != "OK":
            count = max(0, int(self.redis_command(["HGET", LIKES_HASH_KEY, project_id]) or 0))
            response_headers["Retry-After"] = str(COOLDOWN_SECONDS)
            return 429, {"accepted": False, "count": count}, response_headers

        count = max(0, int(self.redis_command(["HINCRBY", LIKES_HASH_KEY, project_id, 1]) or 0))
        return 200, {"accepted": True, "count": count}, response_headers


class LikesRequestHandler(BaseHTTPRequestHandler):
    application = None
    server_version = "VibeRadarLikes/1.0"

    def do_GET(self):
        self._handle({})

    def do_POST(self):
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if length > 4096:
                self._send(413, {"error": "payload_too_large"}, {"Cache-Control": "no-store"})
                return
            body = json.loads(self.rfile.read(length) or b"{}")
        except (TypeError, ValueError):
            self._send(400, {"error": "invalid_json"}, {"Cache-Control": "no-store"})
            return
        self._handle(body)

    def _handle(self, body):
        if self.path != "/api/likes":
            self._send(404, {"error": "not_found"}, {"Cache-Control": "no-store"})
            return
        headers = {key.lower(): value for key, value in self.headers.items()}
        try:
            status, payload, response_headers = self.application.handle(
                self.command, body, headers, self.client_address[0]
            )
        except Exception as error:
            self.log_error("likes backend unavailable: %s", error)
            status, payload, response_headers = (
                503,
                {"counts": {}, "error": "likes_storage_unavailable"},
                {"Cache-Control": "no-store"},
            )
        self._send(status, payload, response_headers)

    def _send(self, status, payload, headers):
        data = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        for key, value in headers.items():
            self.send_header(key, value)
        self.end_headers()
        self.wfile.write(data)


def create_server(application, port=8765):
    class BoundLikesRequestHandler(LikesRequestHandler):
        pass

    BoundLikesRequestHandler.application = application
    server = ThreadingHTTPServer(("127.0.0.1", port), BoundLikesRequestHandler)
    server.daemon_threads = True
    return server


def main():
    url = os.environ.get("KV_REST_API_URL") or os.environ.get("UPSTASH_REDIS_REST_URL")
    token = os.environ.get("KV_REST_API_TOKEN") or os.environ.get("UPSTASH_REDIS_REST_TOKEN")
    secret = os.environ.get("LIKES_SECRET")
    if not url or not token or not secret:
        raise RuntimeError("KV_REST_API_URL, KV_REST_API_TOKEN, and LIKES_SECRET are required")

    application = LikesApplication(UpstashRedis(url, token).command, secret)
    create_server(application, int(os.environ.get("PORT", "8765"))).serve_forever()


if __name__ == "__main__":
    main()
