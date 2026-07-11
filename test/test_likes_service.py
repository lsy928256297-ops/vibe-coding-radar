import unittest
import json
import threading
import urllib.request

from server.likes_service import LikesApplication, create_actor_key, create_server


class FakeRedis:
    def __init__(self):
        self.counts = {"fun-1": 2, "invalid": 99}
        self.locks = set()

    def command(self, parts):
        operation = parts[0]
        if operation == "HGETALL":
            values = []
            for key, count in self.counts.items():
                values.extend([key, str(count)])
            return values
        if operation == "SET":
            key = parts[1]
            if key in self.locks:
                return None
            self.locks.add(key)
            return "OK"
        if operation == "HGET":
            return str(self.counts.get(parts[2], 0))
        if operation == "HINCRBY":
            project_id = parts[2]
            self.counts[project_id] = self.counts.get(project_id, 0) + int(parts[3])
            return self.counts[project_id]
        raise AssertionError(f"Unexpected Redis command: {parts}")


class LikesApplicationTest(unittest.TestCase):
    def setUp(self):
        self.redis = FakeRedis()
        self.app = LikesApplication(self.redis.command, secret="test-secret")
        self.headers = {"x-forwarded-for": "203.0.113.8", "user-agent": "test-browser"}

    def test_get_returns_only_valid_project_counts(self):
        status, payload, headers = self.app.handle("GET", {}, self.headers, "")

        self.assertEqual(status, 200)
        self.assertEqual(payload, {"counts": {"fun-1": 2}})
        self.assertEqual(headers["Cache-Control"], "no-store")

    def test_post_increments_once_then_enforces_cooldown(self):
        first_status, first_payload, _ = self.app.handle(
            "POST", {"projectId": "fun-1"}, self.headers, ""
        )
        second_status, second_payload, second_headers = self.app.handle(
            "POST", {"projectId": "fun-1"}, self.headers, ""
        )

        self.assertEqual(first_status, 200)
        self.assertEqual(first_payload, {"accepted": True, "count": 3})
        self.assertEqual(second_status, 429)
        self.assertEqual(second_payload, {"accepted": False, "count": 3})
        self.assertEqual(second_headers["Retry-After"], "600")

    def test_actor_key_is_stable_without_exposing_request_identity(self):
        first = create_actor_key("fun-1", self.headers, "", "test-secret")
        second = create_actor_key("fun-1", self.headers, "", "test-secret")

        self.assertEqual(first, second)
        self.assertNotIn("203.0.113.8", first)
        self.assertNotIn("test-browser", first)

    def test_http_server_exposes_the_likes_contract(self):
        server = create_server(self.app, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        try:
            url = f"http://127.0.0.1:{server.server_port}/api/likes"
            with urllib.request.urlopen(url) as response:
                payload = json.load(response)

            self.assertEqual(response.status, 200)
            self.assertEqual(payload, {"counts": {"fun-1": 2}})
            self.assertEqual(response.headers["Cache-Control"], "no-store")
        finally:
            server.shutdown()
            server.server_close()
            thread.join(timeout=2)


if __name__ == "__main__":
    unittest.main()
