import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

function loadStarterRuntime(initialLikeState) {
  const source = readFileSync(new URL("../src/main.js", import.meta.url), "utf8");
  const storage = new Map();
  if (initialLikeState) {
    storage.set("vibe-radar-project-likes-v1", JSON.stringify(initialLikeState));
  }
  const sandbox = {
    Blob: function Blob() {},
    Intl,
    URL: {
      createObjectURL: () => "",
      revokeObjectURL: () => {},
    },
    URLSearchParams,
    cancelAnimationFrame: () => {},
    clearTimeout,
    console,
    document: {
      activeElement: null,
      addEventListener: () => {},
      body: {
        append: () => {},
        insertAdjacentHTML: () => {},
      },
      createElement: () => ({
        click: () => {},
        remove: () => {},
        select: () => {},
        style: {},
      }),
      execCommand: () => {},
      querySelector: (selector) => (selector === "#app" ? { innerHTML: "" } : null),
      querySelectorAll: () => [],
      removeEventListener: () => {},
    },
    navigator: {
      clipboard: {
        writeText: async () => {},
      },
    },
    requestAnimationFrame: () => 0,
    setTimeout,
    window: {
      addEventListener: () => {},
      clearTimeout,
      devicePixelRatio: 1,
      history: {
        replaceState: () => {},
      },
      localStorage: {
        getItem: (key) => storage.get(key) ?? null,
        setItem: (key, value) => {
          storage.set(key, String(value));
        },
      },
      location: {
        pathname: "/",
        search: "",
      },
      matchMedia: () => ({ matches: true }),
      removeEventListener: () => {},
      setTimeout,
    },
  };
  sandbox.globalThis = sandbox;

  vm.runInNewContext(
    `${source}
	globalThis.__starter = {
  getProjectLikeCount: typeof getProjectLikeCount === "undefined" ? undefined : getProjectLikeCount,
  canLikeProject: typeof canLikeProject === "undefined" ? undefined : canLikeProject,
  handleProjectLike: typeof handleProjectLike === "undefined" ? undefined : handleProjectLike,
  hydrateProjectLikes: typeof hydrateProjectLikes === "undefined" ? undefined : hydrateProjectLikes,
  projectById,
  projectCard,
  projectLikeCooldownMs: typeof projectLikeCooldownMs === "undefined" ? undefined : projectLikeCooldownMs,
  recordProjectLike: typeof recordProjectLike === "undefined" ? undefined : recordProjectLike,
  renderStarterResult,
  starterScore,
  starterOptions,
  starterRecommendations,
  starterState,
  setFetch: (fetchImpl) => { window.fetch = fetchImpl; }
};`,
    sandbox,
  );

  return sandbox.__starter;
}

function optionIds(options, key) {
  return Array.from(options[key], (option) => option.id);
}

test("starter selector offers intent, medium, and comfort choices", () => {
  const { starterOptions } = loadStarterRuntime();

  assert.deepEqual(Object.keys(starterOptions), ["time", "goal", "medium", "comfort"]);
  assert.deepEqual(optionIds(starterOptions, "goal"), ["show", "personal", "work", "explore"]);
  assert.deepEqual(optionIds(starterOptions, "medium"), ["web", "data", "agent", "device"]);
  assert.deepEqual(optionIds(starterOptions, "comfort"), ["beginner", "deps", "api", "hardware"]);
});

test("starter recommendations expose a broad project pool across tag combinations", () => {
  const { starterOptions, starterRecommendations, starterState } = loadStarterRuntime();
  const optionEntries = Object.entries(starterOptions).map(([key, options]) => [
    key,
    options.map((option) => option.id),
  ]);
  const signatures = new Set();
  const recommendedIds = new Set();
  const appearancesByProject = new Map();
  let combinationCount = 0;

  function visit(index, statePatch) {
    if (index === optionEntries.length) {
      combinationCount += 1;
      Object.assign(starterState, statePatch);
      const ids = starterRecommendations().map(({ project }) => project.id);
      signatures.add(ids.join(","));
      ids.forEach((id) => {
        recommendedIds.add(id);
        appearancesByProject.set(id, (appearancesByProject.get(id) ?? 0) + 1);
      });
      return;
    }

    const [key, ids] = optionEntries[index];
    ids.forEach((id) => visit(index + 1, { ...statePatch, [key]: id }));
  }

  visit(0, {});

  assert.ok(
    recommendedIds.size >= 24,
    `expected at least 24 distinct recommended projects, got ${recommendedIds.size}`,
  );
  assert.ok(
    signatures.size >= 72,
    `expected at least 72 distinct recommendation signatures, got ${signatures.size}`,
  );

  const maxAppearances = Math.max(...appearancesByProject.values());
  assert.ok(
    maxAppearances <= combinationCount * 0.45,
    `one project appears in ${maxAppearances}/${combinationCount} tag combinations`,
  );
});

test("changing only the medium tag materially changes the recommended cards", () => {
  const { starterOptions, starterRecommendations, starterState } = loadStarterRuntime();
  const signatures = new Set();

  optionIds(starterOptions, "medium").forEach((medium) => {
    Object.assign(starterState, {
      comfort: "beginner",
      goal: "show",
      medium,
      time: "weekend",
    });
    signatures.add(starterRecommendations().map(({ project }) => project.id).join(","));
  });

  assert.ok(signatures.size >= 3, `expected at least 3 medium-specific signatures, got ${signatures.size}`);
});

test("project likes render on cards and enforce a ten minute cooldown", () => {
  const runtime = loadStarterRuntime();
  const project = runtime.projectById("fun-1");

  assert.equal(runtime.projectLikeCooldownMs, 10 * 60 * 1000);
  assert.match(runtime.projectCard(project, 0), /data-like-id="fun-1"/);
  assert.match(runtime.renderStarterResult(project, runtime.starterScore(project), 0), /data-like-id="fun-1"/);

  assert.equal(runtime.canLikeProject("fun-1", 1_000), true);
  const firstCount = runtime.recordProjectLike("fun-1", 1_000);
  assert.equal(firstCount, 1);
  assert.equal(runtime.getProjectLikeCount("fun-1"), 1);
  assert.equal(runtime.canLikeProject("fun-1", 1_000 + 60_000), false);
  assert.equal(runtime.recordProjectLike("fun-1", 1_000 + 60_000), 1);

  assert.equal(runtime.canLikeProject("fun-1", 1_000 + 10 * 60 * 1000 + 1), true);
  const secondCount = runtime.recordProjectLike("fun-1", 1_000 + 10 * 60 * 1000 + 1);
  assert.equal(secondCount, 2);
});

test("a failed shared like rolls back the optimistic count and cooldown", async () => {
  const runtime = loadStarterRuntime();
  runtime.setFetch(async () => ({ ok: false, status: 503 }));

  await runtime.handleProjectLike("fun-1");

  assert.equal(runtime.getProjectLikeCount("fun-1"), 0);
  assert.equal(runtime.canLikeProject("fun-1"), true);
});

test("shared hydration replaces stale local-only counts", async () => {
  const runtime = loadStarterRuntime({
    counts: { "fun-1": 1 },
    likedAt: { "fun-1": Date.now() },
  });
  runtime.setFetch(async () => ({
    json: async () => ({ counts: { "stars-6": 1 } }),
    ok: true,
    status: 200,
  }));

  await runtime.hydrateProjectLikes();

  assert.equal(runtime.getProjectLikeCount("fun-1"), 0);
  assert.equal(runtime.canLikeProject("fun-1"), true);
  assert.equal(runtime.getProjectLikeCount("stars-6"), 1);
});
