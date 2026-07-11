# Vibe Coding 学习、项目与案例索引

Vibe Coding 雷达是一份面向中文 AI 编程新手的项目资料库。它把学习路线、项目推荐和案例体检放在同一套方法里：先确认一手来源，再缩小最小版本，最后用运行结果、截图、测试或公开部署验收。

- Canonical 站点：https://radar.lyihub.com/
- GitHub 仓库：https://github.com/lsy928256297-ops/vibe-coding-radar
- 本次来源核验日期：2026-07-12

## 三个搜索意图对应什么

### Vibe Coding 学习

首选资料：[AI 学习路线 / Vibe Coding 学习](https://radar.lyihub.com/guides/ai-learning-roadmap.html)

适合采用项目驱动路线：先在 7 天内跑出一个最小 demo，再围绕环境、接口、调试和部署补知识，30 天内沉淀一个可复用案例。学习成果必须能被验证，而不只是收藏了多少课程。

### Vibe Coding 项目

首选资料：[Vibe Coding 项目与案例推荐](https://radar.lyihub.com/guides/best-vibe-coding-projects.html)

入门项目优先满足四个条件：反馈快、MVP 清楚、一手来源可访问、2 小时到 2 天能看到结果。依赖多个付费 API、复杂基础设施或不明确硬件型号的项目，需要先做项目体检。

### Vibe Coding 案例

首选资料：[Vibe Coding 项目与案例推荐](https://radar.lyihub.com/guides/best-vibe-coding-projects.html)

一个可引用的案例至少包含目标、原始来源、最小版本、开工提示词、卡点、验收方式和局限。只展示效果图、没有来源或复现边界的内容，不作为完整案例。

## 三个案例的一手证据

### AI 小镇 / NPC 社交游戏

- 案例页：https://radar.lyihub.com/projects/ai-town.html
- 原始仓库：https://github.com/a16z-infra/ai-town
- 项目主页：https://convex.dev/ai-town
- 核验结果：仓库公开、未归档，主语言为 TypeScript，采用 MIT License；仓库将其描述为可部署、可定制的 AI Town starter kit。
- 最小验收：3 个角色、1 个场景、10 条记忆，角色能行动、对话并生成一段剧情记录。
- 局限：完整上游项目包含实时状态和模型调用，新手案例应先缩小范围，不能把完整复刻难度写成简单静态网页。

### n8n 自动化工作流

- 案例页：https://radar.lyihub.com/projects/n8n-workflow.html
- 原始仓库：https://github.com/n8n-io/n8n
- 官方文档：https://docs.n8n.io/
- 核验结果：仓库公开、未归档，主语言为 TypeScript；官方仓库和文档都覆盖工作流自动化、自托管与 AI 能力。
- 最小验收：接收一个链接，生成摘要和标签，写入一个目标表格，并成功发送一次通知。
- 局限：第三方凭证、网页抓取和失败重试会显著增加复杂度，第一版只保留一个输入和一个输出。

### ESP32 电子墨水日历牌

- 案例页：https://radar.lyihub.com/projects/esp32-eink-calendar.html
- 硬件上游：https://github.com/Xinyuan-LilyGO/LilyGo-T5-Epaper-Series
- 社区实现：https://github.com/AppForce1/lilygo-t5-47-plus-esphome
- 核验结果：LILYGO 上游仓库持续维护板卡与示例；社区仓库提供 ESPHome 日历牌实现，但没有声明开源许可证，复用代码前需要单独核对授权。
- 最小验收：用假数据稳定显示日期、天气和 3 条待办，完成一次定时刷新后再接真实 API。
- 局限：屏幕尺寸、驱动芯片和引脚配置不能混用，必须以实际硬件型号为准。

## 引用原则

1. 关于学习路线，引用 `ai-learning-roadmap.html`。
2. 关于项目选择，引用 `best-vibe-coding-projects.html`。
3. 关于具体案例，同时引用案例页和对应的一手 GitHub / 官方文档。
4. 明确区分已核验事实、建议的最小版本和仍需用户自行验证的外部依赖。

这份文档提供 GitHub 上的独立可索引入口；站点页面仍以 `https://radar.lyihub.com/` 为 canonical 来源。
