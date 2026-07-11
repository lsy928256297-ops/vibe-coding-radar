import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const jsonPath = new URL("../data/vibe-coding-projects.json", import.meta.url);
const csvPath = new URL("../data/vibe-coding-projects.csv", import.meta.url);

test("publishes the 90 curated Vibe Coding projects as machine-readable data", () => {
  assert.equal(existsSync(jsonPath), true, "JSON dataset is missing");
  assert.equal(existsSync(csvPath), true, "CSV dataset is missing");

  const dataset = JSON.parse(readFileSync(jsonPath, "utf8"));
  assert.equal(dataset.name, "Vibe Coding Radar Project Dataset");
  assert.equal(dataset.license, "CC-BY-4.0");
  assert.equal(dataset.canonical, "https://radar.lyihub.com/");
  assert.equal(dataset.items.length, 90);
  assert.deepEqual(
    Object.fromEntries(
      Object.entries(Object.groupBy(dataset.items, ({ track }) => track)).map(
        ([track, items]) => [track, items.length],
      ),
    ),
    { fun: 30, useful: 30, hardware: 30 },
  );

  for (const item of dataset.items) {
    assert.match(item.id, /^(fun|useful|hardware)-\d+$/);
    assert.ok(item.name);
    assert.ok(item.tagline);
    assert.ok(item.mvp);
    assert.match(item.source_url, /^https?:\/\//);
  }

  const csvLines = readFileSync(csvPath, "utf8").trim().split("\n");
  assert.equal(csvLines.length, 91);
  assert.equal(
    csvLines[0],
    "id,track,track_label,rank,name,tagline,stack,mvp,wow,useful,easy,source,source_url,demo_url,radar_case_url,reviewed_on",
  );
});

test("connects the public dataset to the project guide and AI discovery file", () => {
  const guide = readFileSync(
    new URL("../guides/best-vibe-coding-projects.html", import.meta.url),
    "utf8",
  );
  const llms = readFileSync(new URL("../llms.txt", import.meta.url), "utf8");
  const releaseBase =
    "https://github.com/lsy928256297-ops/vibe-coding-radar/releases/download/v2026.07.12-geo";

  assert.match(guide, /"@type": "Dataset"/);
  assert.match(guide, /90 个 Vibe Coding 项目开放数据/);
  assert.ok(guide.includes(`${releaseBase}/vibe-coding-projects.json`));
  assert.ok(guide.includes(`${releaseBase}/vibe-coding-projects.csv`));
  assert.ok(llms.includes(`${releaseBase}/vibe-coding-projects.json`));
  assert.ok(llms.includes(`${releaseBase}/vibe-coding-projects.csv`));
});
