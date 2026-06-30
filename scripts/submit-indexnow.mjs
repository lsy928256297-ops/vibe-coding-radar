import { request } from "node:https";

const host = "radar.lyihub.com";
const key = "65683424190f9a49369700d89f08c9cb";
const keyLocation = `https://${host}/${key}.txt`;

const urlList = [
  `https://${host}/`,
  `https://${host}/sitemap.xml`,
  `https://${host}/llms.txt`,
  `https://${host}/feed.xml`,
  `https://${host}/guides/ai-programming-hub.html`,
  `https://${host}/guides/what-is-vibe-coding.html`,
  `https://${host}/guides/vibe-coding-tutorial.html`,
  `https://${host}/guides/ai-programming.html`,
  `https://${host}/guides/ai-programming-tools.html`,
  `https://${host}/guides/ai-coding-for-beginners.html`,
  `https://${host}/guides/zero-to-ai-coding.html`,
  `https://${host}/guides/ai-learning-roadmap.html`,
  `https://${host}/guides/build-projects-with-ai.html`,
  `https://${host}/guides/how-to-use-codex.html`,
  `https://${host}/guides/ai-programming-projects.html`,
  `https://${host}/guides/vibe-coding-for-beginners.html`,
  `https://${host}/guides/best-vibe-coding-projects.html`,
  `https://${host}/projects/ai-town.html`,
  `https://${host}/projects/n8n-workflow.html`,
  `https://${host}/projects/esp32-eink-calendar.html`,
];

const body = JSON.stringify({ host, key, keyLocation, urlList });

const req = request(
  {
    hostname: "api.indexnow.org",
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(body),
    },
  },
  (res) => {
    let responseBody = "";
    res.setEncoding("utf8");
    res.on("data", (chunk) => {
      responseBody += chunk;
    });
    res.on("end", () => {
      console.log(`IndexNow status: ${res.statusCode}`);
      if (responseBody.trim()) {
        console.log(responseBody.trim());
      }
      if (![200, 202].includes(res.statusCode)) {
        process.exitCode = 1;
      }
    });
  }
);

req.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});

req.write(body);
req.end();
