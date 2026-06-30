# Starter Prompt Templates

## Project Starter Prompt

```text
请你作为 Vibe Coding 开工助手，帮我基于这个项目做一个适合新手的最小 demo：

项目链接：{{project_url}}
项目目标：{{project_goal}}

请先阅读 README、安装文档、examples、package/dependency 配置和已有 demo 说明。
然后按下面顺序执行：

1. 判断这个项目最短能跑出的可见效果是什么。
2. 列出开始前需要准备的东西：API Key、Docker、数据库、模型、硬件、浏览器权限、网络环境等。
3. 先跑最小 demo，不要一上来重构或重写。
4. 如果原项目太复杂，抽一个轻量 demo，让我先看到效果。
5. 如果报错，先定位原因，再决定是否安装、改配置或改代码。
6. 每一步都用新手能看懂的话解释。
```

## Find Projects Prompt

```text
用 Vibe Coding 雷达帮我找 {{count}} 个适合新手的 {{project_type}} 项目。

每个项目请给我：
1. 项目名
2. 为什么值得做
3. GitHub 或官方来源链接
4. 推荐使用的 Skill / 工具
5. 一段可以直接复制给 Codex 的开工提示词

优先选择有明确来源、能尽快看到 demo、适合 Vibe Coding 新手的项目。
```

## Find Skills Prompt

```text
帮我找适合 {{task_type}} 的 Skill / 工具。

每个推荐请说明：
1. 它解决什么问题
2. 来源链接
3. 什么时候该用
4. 为什么适合 AI Coding 新手

不要只推荐热门 Skill，要说明它和我的任务有什么具体关系。
```
