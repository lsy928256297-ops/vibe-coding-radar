import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const likesApi = require("../api/likes.js");

function createResponse() {
  return {
    headers: {},
    statusCode: 200,
    json(body) {
      this.body = body;
      return this;
    },
    setHeader(key, value) {
      this.headers[key] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
  };
}

test("likes API parses Redis hash counts defensively", () => {
  assert.deepEqual(likesApi.parseRedisHash(["fun-1", "3", "stars-2", "0", "bad", "-2"]), {
    "fun-1": 3,
    "stars-2": 0,
  });
});

test("likes API actor key is stable and does not expose raw request identity", () => {
  const request = {
    headers: {
      "user-agent": "Radar Test",
      "x-forwarded-for": "203.0.113.10, 10.0.0.2",
    },
  };

  const first = likesApi.createActorKey(request, "fun-1", "test-secret");
  const second = likesApi.createActorKey(request, "fun-1", "test-secret");

  assert.equal(first, second);
  assert.equal(first.includes("203.0.113.10"), false);
  assert.match(first, /^[a-f0-9]{32}$/);
});

test("likes API returns counts on GET and increments once on POST", async () => {
  const commands = [];
  const redisCommand = async (command) => {
    commands.push(command);
    if (command[0] === "HGETALL") return ["fun-1", "3"];
    if (command[0] === "SET") return "OK";
    if (command[0] === "HINCRBY") return 4;
    throw new Error(`unexpected command ${command[0]}`);
  };

  const getResponse = createResponse();
  await likesApi.handleLikesRequest({ method: "GET" }, getResponse, { redisCommand });
  assert.equal(getResponse.statusCode, 200);
  assert.deepEqual(getResponse.body.counts, { "fun-1": 3 });

  const postResponse = createResponse();
  await likesApi.handleLikesRequest(
    {
      body: { projectId: "fun-1" },
      headers: { "user-agent": "Radar Test", "x-forwarded-for": "203.0.113.10" },
      method: "POST",
    },
    postResponse,
    { redisCommand, secret: "test-secret" },
  );
  assert.equal(postResponse.statusCode, 200);
  assert.deepEqual(postResponse.body, { accepted: true, count: 4 });
  assert.equal(commands.at(-2)[0], "SET");
  assert.match(commands.at(-2)[1], /^vibe-radar:like-cooldown:v1:fun-1:[a-f0-9]{32}$/);
  assert.deepEqual(commands.at(-1), ["HINCRBY", "vibe-radar:project-likes:v1", "fun-1", 1]);
});

test("likes API rejects repeat likes during cooldown", async () => {
  const redisCommand = async (command) => {
    if (command[0] === "SET") return null;
    if (command[0] === "HGET") return "9";
    throw new Error(`unexpected command ${command[0]}`);
  };
  const response = createResponse();

  await likesApi.handleLikesRequest(
    {
      body: { projectId: "fun-1" },
      headers: { "user-agent": "Radar Test", "x-forwarded-for": "203.0.113.10" },
      method: "POST",
    },
    response,
    { redisCommand, secret: "test-secret" },
  );

  assert.equal(response.statusCode, 429);
  assert.equal(response.headers["Retry-After"], "600");
  assert.deepEqual(response.body, { accepted: false, count: 9 });
});
