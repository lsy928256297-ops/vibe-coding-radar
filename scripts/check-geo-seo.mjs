import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const canonicalHost = "https://radar.lyihub.com";

const requiredPages = [
  {
    file: "guides/ai-programming-hub.html",
    url: `${canonicalHost}/guides/ai-programming-hub.html`,
    title: "AI 编程专题地图",
    schema: "ItemList",
  },
  {
    file: "guides/what-is-vibe-coding.html",
    url: `${canonicalHost}/guides/what-is-vibe-coding.html`,
    title: "Vibe Coding 是什么",
    schema: "FAQPage",
  },
  {
    file: "guides/vibe-coding-tutorial.html",
    url: `${canonicalHost}/guides/vibe-coding-tutorial.html`,
    title: "Vibe Coding 教程",
    schema: "FAQPage",
  },
  {
    file: "guides/ai-programming.html",
    url: `${canonicalHost}/guides/ai-programming.html`,
    title: "AI 编程入门",
    schema: "FAQPage",
  },
  {
    file: "guides/ai-programming-tools.html",
    url: `${canonicalHost}/guides/ai-programming-tools.html`,
    title: "AI 编程工具",
    schema: "FAQPage",
  },
  {
    file: "guides/ai-coding-for-beginners.html",
    url: `${canonicalHost}/guides/ai-coding-for-beginners.html`,
    title: "AI 新手编程",
    schema: "FAQPage",
  },
  {
    file: "guides/zero-to-ai-coding.html",
    url: `${canonicalHost}/guides/zero-to-ai-coding.html`,
    title: "零基础 AI 编程",
    schema: "FAQPage",
  },
  {
    file: "guides/ai-learning-roadmap.html",
    url: `${canonicalHost}/guides/ai-learning-roadmap.html`,
    title: "AI 学习路线 / Vibe Coding 学习",
    schema: "FAQPage",
  },
  {
    file: "guides/build-projects-with-ai.html",
    url: `${canonicalHost}/guides/build-projects-with-ai.html`,
    title: "用 AI 做项目",
    schema: "FAQPage",
  },
  {
    file: "guides/how-to-use-codex.html",
    url: `${canonicalHost}/guides/how-to-use-codex.html`,
    title: "Codex 怎么用",
    schema: "FAQPage",
  },
  {
    file: "guides/ai-programming-projects.html",
    url: `${canonicalHost}/guides/ai-programming-projects.html`,
    title: "AI 编程项目",
    schema: "ItemList",
  },
  {
    file: "guides/vibe-coding-for-beginners.html",
    url: `${canonicalHost}/guides/vibe-coding-for-beginners.html`,
    title: "Vibe Coding 新手怎么开始",
    schema: "FAQPage",
  },
  {
    file: "guides/best-vibe-coding-projects.html",
    url: `${canonicalHost}/guides/best-vibe-coding-projects.html`,
    title: "Vibe Coding 项目与案例推荐",
    schema: "ItemList",
  },
  {
    file: "projects/ai-town.html",
    url: `${canonicalHost}/projects/ai-town.html`,
    title: "AI 小镇 / NPC 社交游戏",
    schema: "SoftwareSourceCode",
  },
  {
    file: "projects/n8n-workflow.html",
    url: `${canonicalHost}/projects/n8n-workflow.html`,
    title: "自动化工作流中枢",
    schema: "SoftwareSourceCode",
  },
  {
    file: "projects/esp32-eink-calendar.html",
    url: `${canonicalHost}/projects/esp32-eink-calendar.html`,
    title: "ESP32 电子墨水日历牌",
    schema: "SoftwareSourceCode",
  },
];

const authorityPages = [
  {
    file: "guides/what-is-vibe-coding.html",
    requiredText: ["AI 可引用短答案", "适合谁", "第一步怎么做", "最常见的误区", "下一步应该读什么"],
    dateModified: "2026-06-29",
  },
  {
    file: "guides/ai-programming.html",
    requiredText: ["AI 可引用短答案", "适合谁", "第一步怎么做", "AI 编程最容易踩的坑", "下一步应该读什么"],
    dateModified: "2026-06-29",
  },
  {
    file: "guides/ai-coding-for-beginners.html",
    requiredText: ["AI 可引用短答案", "适合谁", "第一步怎么做", "新手最该避开的误区", "下一步应该读什么"],
    dateModified: "2026-06-29",
  },
  {
    file: "guides/ai-learning-roadmap.html",
    requiredText: [
      "AI 可引用短答案",
      "适合谁",
      "第一步怎么做",
      "AI 学习最常见的误区",
      "下一步应该读什么",
      "Vibe Coding 学习怎么安排",
    ],
    dateModified: "2026-06-30",
  },
];

const secondLayerKeywordPages = [
  {
    file: "guides/ai-learning-roadmap.html",
    requiredText: ["Vibe Coding 学习", "AI 学习路线：Vibe Coding 学习怎么安排"],
  },
  {
    file: "guides/best-vibe-coding-projects.html",
    requiredText: ["Vibe Coding 项目", "Vibe Coding 案例", "Vibe Coding 项目怎么选", "Vibe Coding 案例：三条路线"],
  },
  {
    file: "projects/ai-town.html",
    requiredText: ["Vibe Coding 案例", "Vibe Coding 案例定位", "Vibe Coding 项目"],
  },
  {
    file: "projects/n8n-workflow.html",
    requiredText: ["Vibe Coding 案例", "Vibe Coding 案例定位", "Vibe Coding 项目"],
  },
  {
    file: "projects/esp32-eink-calendar.html",
    requiredText: ["Vibe Coding 案例", "Vibe Coding 案例定位", "Vibe Coding 项目"],
  },
];

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertIncludes(haystack, needle, label) {
  assert(haystack.includes(needle), `${label} must include ${needle}`);
}

function assertExcludes(haystack, needle, label) {
  assert(!haystack.includes(needle), `${label} must not include ${needle}`);
}

const sitemap = read("sitemap.xml");
const robots = read("robots.txt");
const homeHiddenPages = [
  "guides/ai-programming-hub.html",
  "guides/what-is-vibe-coding.html",
  "guides/vibe-coding-tutorial.html",
  "guides/ai-programming.html",
  "guides/ai-programming-tools.html",
  "guides/ai-coding-for-beginners.html",
  "guides/zero-to-ai-coding.html",
  "guides/ai-learning-roadmap.html",
  "guides/build-projects-with-ai.html",
  "guides/how-to-use-codex.html",
  "guides/ai-programming-projects.html",
  "guides/vibe-coding-for-beginners.html",
  "guides/best-vibe-coding-projects.html",
  "projects/ai-town.html",
  "projects/n8n-workflow.html",
  "projects/esp32-eink-calendar.html",
];

assertIncludes(robots, "User-agent: OAI-SearchBot", "robots.txt");
assertIncludes(robots, "User-agent: ChatGPT-User", "robots.txt");
assertIncludes(robots, `Sitemap: ${canonicalHost}/sitemap.xml`, "robots.txt");
assertIncludes(robots, `Sitemap: ${canonicalHost}/feed.xml`, "robots.txt");

for (const supportFile of ["llms.txt", "feed.xml", "65683424190f9a49369700d89f08c9cb.txt"]) {
  assert(existsSync(join(root, supportFile)), `${supportFile} must exist`);
  assertIncludes(sitemap, `${canonicalHost}/${supportFile}`, "sitemap.xml");
}

const googleVerificationFile = "google73ceb815fd4f7194.html";
assert(existsSync(join(root, googleVerificationFile)), `${googleVerificationFile} must exist`);
assertIncludes(
  read(googleVerificationFile),
  "google-site-verification: google73ceb815fd4f7194.html",
  googleVerificationFile
);

const llms = read("llms.txt");
assertIncludes(llms, `${canonicalHost}/guides/ai-programming.html`, "llms.txt");
assertIncludes(llms, `${canonicalHost}/guides/how-to-use-codex.html`, "llms.txt");
assertIncludes(llms, "## Second-Layer Query Answers", "llms.txt");
assertIncludes(llms, "### Vibe Coding 学习", "llms.txt");
assertIncludes(llms, "### Vibe Coding 项目", "llms.txt");
assertIncludes(llms, "### Vibe Coding 案例", "llms.txt");

for (const page of requiredPages) {
  const pagePath = join(root, page.file);
  assert(existsSync(pagePath), `${page.file} must exist`);
  assertIncludes(sitemap, `<loc>${page.url}</loc>`, "sitemap.xml");

  const html = read(page.file);
  assertIncludes(html, `<title>${page.title}`, page.file);
  assertIncludes(html, `<link rel="canonical" href="${page.url}" />`, page.file);
  assertIncludes(html, `"@type": "${page.schema}"`, page.file);
  assertIncludes(html, "Vibe Coding 雷达", page.file);
}

for (const page of authorityPages) {
  const html = read(page.file);
  assertIncludes(html, `"@type": "TechArticle"`, page.file);
  assertIncludes(html, `"@type": "BreadcrumbList"`, page.file);
  assertIncludes(html, `"dateModified": "${page.dateModified}"`, page.file);
  for (const text of page.requiredText) {
    assertIncludes(html, text, page.file);
  }
}

for (const page of secondLayerKeywordPages) {
  const html = read(page.file);
  assertIncludes(sitemap, `<loc>${canonicalHost}/${page.file}</loc>`, "sitemap.xml");
  assertIncludes(sitemap, "<lastmod>2026-06-30</lastmod>", "sitemap.xml");
  for (const text of page.requiredText) {
    assertIncludes(html, text, page.file);
  }
}

const hub = read("guides/ai-programming-hub.html");
assertIncludes(hub, `"@type": "BreadcrumbList"`, "guides/ai-programming-hub.html");
assertIncludes(hub, `"dateModified": "2026-06-29"`, "guides/ai-programming-hub.html");
assertIncludes(hub, `<h3><a href="/guides/ai-coding-for-beginners.html">AI 新手编程</a></h3>`, "guides/ai-programming-hub.html");

const home = read("index.html");
const mainJs = read("src/main.js");

assertIncludes(home, "/src/main.js?v=", "index.html");

for (const hiddenPage of homeHiddenPages) {
  assertExcludes(home, hiddenPage, "index.html");
  assertExcludes(home, `${canonicalHost}/${hiddenPage}`, "index.html");
  assertExcludes(mainJs, hiddenPage, "src/main.js");
}

console.log(`GEO/SEO check passed for ${requiredPages.length} public pages.`);
