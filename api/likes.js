const crypto = require("node:crypto");

const likesHashKey = "vibe-radar:project-likes:v1";
const cooldownKeyPrefix = "vibe-radar:like-cooldown:v1";
const cooldownSeconds = 10 * 60;
const projectIdPattern = /^(fun|useful|hardware|stars)-\d{1,3}$/;

function getHeader(request, name) {
  const headers = request.headers ?? {};
  if (typeof headers.get === "function") return headers.get(name);
  return headers[name] ?? headers[name.toLowerCase()] ?? headers[name.toUpperCase()];
}

function isProjectId(value) {
  return typeof value === "string" && projectIdPattern.test(value);
}

function parseRedisHash(value) {
  const entries = Array.isArray(value) ? pairsToEntries(value) : Object.entries(value ?? {});
  return Object.fromEntries(
    entries
      .map(([key, count]) => [key, Number(count)])
      .filter(([key, count]) => isProjectId(key) && Number.isFinite(count) && count >= 0)
      .map(([key, count]) => [key, Math.floor(count)])
  );
}

function pairsToEntries(value) {
  const entries = [];
  for (let index = 0; index < value.length; index += 2) {
    entries.push([value[index], value[index + 1]]);
  }
  return entries;
}

function redisConfig(env = process.env) {
  const url = env.KV_REST_API_URL || env.UPSTASH_REDIS_REST_URL;
  const token = env.KV_REST_API_TOKEN || env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { token, url } : null;
}

async function redisCommand(command, env = process.env) {
  const config = redisConfig(env);
  if (!config) {
    const error = new Error("Likes storage is not configured");
    error.code = "LIKES_STORAGE_UNAVAILABLE";
    throw error;
  }

  const response = await fetch(config.url, {
    body: JSON.stringify(command),
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`Redis command failed with ${response.status}`);
  }
  const data = await response.json();
  return data.result;
}

function createActorKey(request, projectId, secret = process.env.LIKES_SECRET || "vibe-radar-likes-v1") {
  const forwardedFor = String(getHeader(request, "x-forwarded-for") || "")
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean)[0];
  const remoteAddress = request.socket?.remoteAddress || request.connection?.remoteAddress || "";
  const userAgent = getHeader(request, "user-agent") || "";
  const identity = [projectId, forwardedFor || remoteAddress || "unknown-ip", userAgent || "unknown-agent", secret].join(
    "|"
  );
  return crypto.createHash("sha256").update(identity).digest("hex").slice(0, 32);
}

async function readRequestBody(request) {
  if (request.body && typeof request.body === "object") return request.body;
  if (typeof request.body === "string") return JSON.parse(request.body || "{}");
  if (typeof request.on !== "function") return {};

  const chunks = [];
  await new Promise((resolve, reject) => {
    request.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    request.on("end", resolve);
    request.on("error", reject);
  });
  const raw = Buffer.concat(chunks).toString("utf8");
  return raw ? JSON.parse(raw) : {};
}

function sendJson(response, status, body, headers = {}) {
  Object.entries({
    "Cache-Control": "no-store",
    ...headers,
  }).forEach(([key, value]) => response.setHeader(key, value));
  return response.status(status).json(body);
}

function resolveRedisCommand(deps) {
  if (deps.redisCommand) return deps.redisCommand;
  const env = deps.env ?? process.env;
  if (!redisConfig(env)) return null;
  return (command) => redisCommand(command, env);
}

async function handleLikesRequest(request, response, deps = {}) {
  const command = resolveRedisCommand(deps);
  if (!command) {
    return sendJson(response, 503, { counts: {}, error: "likes_storage_unavailable" });
  }

  if (request.method === "GET") {
    const counts = parseRedisHash(await command(["HGETALL", likesHashKey]));
    return sendJson(response, 200, { counts });
  }

  if (request.method !== "POST") {
    return sendJson(response, 405, { error: "method_not_allowed" }, { Allow: "GET, POST" });
  }

  let body;
  try {
    body = await readRequestBody(request);
  } catch {
    return sendJson(response, 400, { error: "invalid_json" });
  }

  const projectId = body.projectId;
  if (!isProjectId(projectId)) {
    return sendJson(response, 400, { error: "invalid_project_id" });
  }

  const actorKey = createActorKey(request, projectId, deps.secret);
  const cooldownKey = `${cooldownKeyPrefix}:${projectId}:${actorKey}`;
  const lock = await command(["SET", cooldownKey, "1", "EX", cooldownSeconds, "NX"]);
  if (lock !== "OK") {
    const count = Math.max(0, Number(await command(["HGET", likesHashKey, projectId])) || 0);
    return sendJson(response, 429, { accepted: false, count }, { "Retry-After": String(cooldownSeconds) });
  }

  const count = Math.max(0, Number(await command(["HINCRBY", likesHashKey, projectId, 1])) || 0);
  return sendJson(response, 200, { accepted: true, count });
}

module.exports = handleLikesRequest;
module.exports.createActorKey = createActorKey;
module.exports.handleLikesRequest = handleLikesRequest;
module.exports.parseRedisHash = parseRedisHash;
