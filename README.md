# Vibe Coding 雷达

Vibe Coding 雷达是一个给 AI Coding 新手看的项目发现网站：帮你找到值得搓的项目、看清项目亮点、匹配用得上的 Skill / 工具，并复制一段能直接交给 Codex、Cursor 或 Claude Code 的开工提示词。

公开站点：[https://radar.lyihub.com](https://radar.lyihub.com)

## 这个仓库是什么

这是 Vibe Coding 雷达的完整开源项目，不只是一个 Skill。

- `index.html` + `src/main.js`：项目雷达主页，包含好玩、好用、好搓、增长最快 GitHub 项目。
- `skills.html`：必装 Skill 榜单，面向 AI Coding 新手。
- `codex-uses.html`：Codex 趣味用法案例页。
- `guides/`、`projects/`：给搜索引擎和 AI 引用的静态专题页。
- `skills/vibe-coding-radar/`：这个产品的 Codex Skill 版本，负责在对话里推荐项目、推荐 Skill、生成开工提示词。

网站负责让大家浏览和分享，Skill 负责让 Codex 在对话里直接帮你找项目、找 Skill、写开工提示词。

## 适合用来做什么

- 找一个适合新手的 Vibe Coding 项目。
- 找一个好玩、好用、能部署、能发朋友圈或适合周末做的项目。
- 找适合 AI Coding 新手的 Skill / 工具。
- 给某个项目生成一段可以直接复制给 Codex 的开工提示词。
- 维护自己的项目榜单、Skill 榜单或 AI 编程资料站。

## 本地预览

这个项目是静态站点，直接启动一个本地静态服务即可：

```bash
python3 -m http.server 53828
```

然后打开：

```text
http://127.0.0.1:53828/
```

如果改了主页逻辑，可以先跑：

```bash
node --check src/main.js
node --test test/project-data-quality.test.mjs
```

## Skill 用法

仓库内置 Skill 位于：

```text
skills/vibe-coding-radar/
```

可以把这个目录安装到 Codex 的 Skills 目录，或者让支持 Skill 的代理直接读取这个目录。

典型调用：

```text
用 Vibe Coding 雷达帮我找 5 个适合新手的好玩项目。
每个项目给我：为什么值得做、推荐 Skill / 工具、GitHub 或来源链接、复制给 Codex 的开工提示词。
```

```text
我想做一个能发朋友圈的 AI 小网页，帮我找项目并给我开工提示词。
```

```text
我要做网页 / PPT / 部署 / 自动化，有什么 Skill 值得装？
```

## 开源协议

代码、Skill 工作流、提示词模板和项目整理格式使用 MIT License。

`Vibe Coding 雷达` / `Vibe Coding Radar` 名称、`radar.lyihub.com` 域名和项目视觉识别不包含在 MIT 授权中。你可以 fork、改造和二创，但公开衍生版本请使用不同名称，不要暗示官方关联。详见 [TRADEMARK.md](TRADEMARK.md)。

## 贡献

欢迎贡献：

- 新的 Vibe Coding 项目来源。
- 更准确的 GitHub / Demo 链接。
- 更适合新手的 Skill / 工具推荐。
- 更清晰的开工提示词模板。
- 页面排版、可访问性、移动端体验改进。

请尽量附上项目来源、GitHub 链接、Demo 链接或社区热度证据。
