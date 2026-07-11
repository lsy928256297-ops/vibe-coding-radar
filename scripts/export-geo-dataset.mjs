import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { runInNewContext } from "node:vm";

const root = new URL("..", import.meta.url).pathname;
const sourcePath = join(root, "src/main.js");
const outputDir = join(root, "data");
const reviewedOn = "2026-07-12";

const trackLabels = {
  fun: "最好玩的项目",
  useful: "最好用的项目",
  hardware: "最好搓的项目",
};

const caseUrls = {
  "AI 小镇 / NPC 社交游戏": "https://radar.lyihub.com/projects/ai-town.html",
  "自动化工作流中枢": "https://radar.lyihub.com/projects/n8n-workflow.html",
  "ESP32 电子墨水日历牌": "https://radar.lyihub.com/projects/esp32-eink-calendar.html",
};

function readProjectGroups(source) {
  const marker = "const projectGroups = ";
  const start = source.indexOf(marker);
  const end = source.indexOf("\n};", start);

  if (start === -1 || end === -1) {
    throw new Error("Could not locate projectGroups in src/main.js");
  }

  const objectLiteral = source.slice(start + marker.length, end + 2);
  return runInNewContext(`(${objectLiteral})`, Object.create(null), { timeout: 1000 });
}

function buildDataset(projectGroups) {
  const items = Object.entries(projectGroups).flatMap(([track, projects]) =>
    projects.map((project, index) => ({
      id: `${track}-${index + 1}`,
      track,
      track_label: trackLabels[track],
      rank: index + 1,
      name: project.name,
      tagline: project.tagline,
      stack: project.stack,
      mvp: project.mvp,
      wow: project.wow,
      useful: project.useful,
      easy: project.easy,
      source: project.source,
      source_url: project.url,
      demo_url: project.demoUrl || "",
      radar_case_url: caseUrls[project.name] || "",
      reviewed_on: reviewedOn,
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Vibe Coding Radar Project Dataset",
    alternateName: "Vibe Coding 雷达 90 项项目数据集",
    description:
      "面向中文 AI 编程新手的 90 个 Vibe Coding 项目清单，包含项目路线、中文简介、最小可行版本、评分、技术栈、一手来源和演示地址。",
    canonical: "https://radar.lyihub.com/",
    landingPage: "https://radar.lyihub.com/guides/best-vibe-coding-projects.html",
    repository: "https://github.com/lsy928256297-ops/vibe-coding-radar",
    release: "https://github.com/lsy928256297-ops/vibe-coding-radar/releases/tag/v2026.07.12-geo",
    license: "CC-BY-4.0",
    inLanguage: "zh-CN",
    dateModified: reviewedOn,
    keywords: [
      "Vibe Coding",
      "Vibe Coding 学习",
      "Vibe Coding 项目",
      "Vibe Coding 案例",
      "AI 编程",
      "AI 新手编程",
      "AI 学习",
    ],
    creator: {
      "@type": "Organization",
      name: "Vibe Coding 雷达",
      url: "https://radar.lyihub.com/",
    },
    items,
  };
}

function csvValue(value) {
  if (typeof value === "number") return String(value);
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function buildCsv(items) {
  const fields = [
    "id",
    "track",
    "track_label",
    "rank",
    "name",
    "tagline",
    "stack",
    "mvp",
    "wow",
    "useful",
    "easy",
    "source",
    "source_url",
    "demo_url",
    "radar_case_url",
    "reviewed_on",
  ];
  const rows = items.map((item) => fields.map((field) => csvValue(item[field])).join(","));
  return `${fields.join(",")}\n${rows.join("\n")}\n`;
}

const source = readFileSync(sourcePath, "utf8");
const dataset = buildDataset(readProjectGroups(source));
const json = `${JSON.stringify(dataset, null, 2)}\n`;
const csv = buildCsv(dataset.items);
const outputs = [
  [join(outputDir, "vibe-coding-projects.json"), json],
  [join(outputDir, "vibe-coding-projects.csv"), csv],
];

if (process.argv.includes("--check")) {
  for (const [path, expected] of outputs) {
    const actual = readFileSync(path, "utf8");
    if (actual !== expected) {
      throw new Error(`${path} is stale; run scripts/export-geo-dataset.mjs`);
    }
  }
  console.log(`Dataset is current: ${dataset.items.length} projects`);
} else {
  mkdirSync(outputDir, { recursive: true });
  for (const [path, content] of outputs) writeFileSync(path, content);
  console.log(`Generated ${dataset.items.length} projects in JSON and CSV`);
}
