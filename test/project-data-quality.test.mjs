import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const auditReport = readFileSync(new URL("./first-page-project-audit.md", import.meta.url), "utf8");

function loadProjectGroups() {
  const source = readFileSync(new URL("../src/main.js", import.meta.url), "utf8");
  const marker = "const projectGroups = ";
  const start = source.indexOf(marker);
  const end = source.indexOf("\nconst projects = ", start);
  assert.notEqual(start, -1, "projectGroups declaration should exist");
  assert.notEqual(end, -1, "projects declaration should follow projectGroups");

  const objectSource = source
    .slice(start + marker.length, end)
    .trim()
    .replace(/;$/, "");

  return Function(`return (${objectSource});`)();
}

const { fun } = loadProjectGroups();

function project(name) {
  const found = fun.find((item) => item.name === name);
  assert.ok(found, `${name} should exist in the fun project list`);
  return found;
}

test("fun list does not point users to stale or broken showcase sources", () => {
  assert.equal(
    fun.some((item) => item.url === "https://github.com/tidalcycles/strudel"),
    false,
    "Strudel GitHub repo is archived and moved; use the active source or live app",
  );

  assert.equal(
    fun.some((item) => item.url === "https://github.com/dougsillars/ar-with-webxr"),
    false,
    "old WebXR codelab is outdated and its final demo no longer works",
  );

  assert.equal(
    project("生成式海报 / 壁纸工厂").url,
    "https://multitude-amsterdam.github.io/p5Catalyst/",
    "p5Catalyst should use the verified live demo root, not the broken /app path or only the repo",
  );
});

test("library-like recommendations are labeled as examples or references", () => {
  assert.match(project("街机风小游戏原型机").tagline, /示例|库|原型/);
  assert.match(project("手绘风 UI 组件参考").tagline, /组件|参考|wireframe|原型/);
  assert.match(project("像素 / 粒子编辑器").source, /Editor|编辑器/i);
  assert.match(project("字体扭曲效果库").tagline, /效果库|参考|标题/);
});

test("fun list preserves direct demo links for visual recommendations", () => {
  assert.equal(project("浏览器里的迷你音频工作站").demoUrl, "https://audiomass.co");
  assert.equal(project("物理沙盒 / 像素炼金术").demoUrl, "https://sandspiel.club");
  assert.equal(project("浏览器现场视觉合成器").demoUrl, "https://hydra.ojack.xyz");
  assert.equal(project("手绘风白板 / 灵感草图板").demoUrl, "https://excalidraw.com");
  assert.equal(
    project("WebGL 流体玩具").demoUrl,
    "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
  );
});

test("first-page reference projects set beginner expectations clearly", () => {
  assert.equal(
    fun.some((item) => item.url === "https://github.com/alangrafu/radar-chart-d3"),
    false,
    "old radar-chart-d3 is too narrow and outdated for a CSV visualization toybox recommendation",
  );

  assert.equal(
    project("3D 房间 / 作品集小宇宙").demoUrl,
    undefined,
    "Room Portfolio public Vercel demo timed out during audit; keep it as source reference only",
  );
  assert.match(project("代码动画课件").tagline, /框架|课件|动画/);
  assert.match(project("React 视频渲染工厂").tagline, /框架|视频|React/);
  assert.match(project("节点流程玩具").tagline, /示例|画布|流程/);
  assert.match(project("周末游戏引擎原型").tagline, /Godot|示例|本地/);
});

test("first-page audit report covers the first 30 fun projects", () => {
  const auditedRows = auditReport
    .split("\n")
    .filter((line) => /^\|\s*\d+\s*\|/.test(line));

  assert.equal(auditedRows.length, 30);

  fun.slice(0, 30).forEach((item, index) => {
    assert.match(
      auditedRows[index],
      new RegExp(`\\| ${index + 1} \\| ${item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} \\|`),
    );
  });
});
