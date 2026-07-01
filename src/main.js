const tracks = [
  {
    id: "fun",
    eyebrow: "Play",
    title: "最好玩的项目",
    short: "好玩",
    accent: "#225CFF",
    summary: "即时反馈、强互动、适合用一天做出能给朋友看的版本。",
  },
  {
    id: "useful",
    eyebrow: "Utility",
    title: "最好用的项目",
    short: "好用",
    accent: "#18A058",
    summary: "做完能进入日常工作流，优先解决信息、文档、财务和个人知识管理。",
  },
  {
    id: "hardware",
    eyebrow: "Hardware",
    title: "最好搓的项目",
    short: "好搓",
    nav: "好搓（硬件）",
    accent: "#FF6A3D",
    summary: "小预算也能跑通，硬件反馈明确，适合从 ESP32 和 Raspberry Pi 起步。",
  },
];

const starTrack = {
  id: "stars",
  eyebrow: "GitHub",
  title: "增长最快的 GitHub 项目",
  short: "明星",
  nav: "明星项目",
  accent: "#111827",
  summary: "基于 GitHub Trending weekly 候选池，并按本周新增 stars 重新排序，追踪正在冒头的开源项目。",
};

const boardTabs = [...tracks, starTrack];
const skillRadarUrl = "/skills.html?v=weekly-refresh-20260619";
const codexUsesUrl = "/codex-uses.html?v=cross-nav-20260619";

const skillCatalog = {
  "openai-skills": {
    name: "OpenAI Skills Catalog",
    signal: "Codex 官方目录",
    url: "https://github.com/openai/skills",
    description: "先从官方目录理解 Skill 怎么安装、触发和复用，适合作为所有项目的起点。",
  },
  "openai-docs": {
    name: "OpenAI Cookbook",
    signal: "模型/API 示例",
    url: "https://github.com/openai/openai-cookbook",
    description: "用于参考模型选择、API 调用、流式输出、工具调用和结构化输出等示例。",
  },
  "agent-skills": {
    name: "Addy Osmani Agent Skills",
    signal: "工程 Skill",
    url: "https://github.com/addyosmani/agent-skills",
    description: "生产级 AI coding agent 工程 Skill，适合让 Codex 更稳定地读项目、改代码、跑验收。",
  },
  "skillspector": {
    name: "NVIDIA SkillSpector",
    signal: "安全扫描",
    url: "https://github.com/NVIDIA/SkillSpector",
    description: "安装第三方 Skill 前先扫描危险命令、可疑网络请求和高风险权限。",
  },
  "frontend-design": {
    name: "Vercel Web Guidelines",
    signal: "UI 验收规则",
    url: "https://github.com/vercel-labs/web-interface-guidelines",
    description: "用公开的 Web 界面准则检查布局、焦点态、移动端和可访问性。",
  },
  "playwright-skill": {
    name: "Playwright Skill",
    signal: "真浏览器验收",
    url: "https://github.com/lackeyjb/playwright-skill",
    description: "让 AI 打开页面测试按钮、表单、响应式和关键流程，避免 demo 只在想象里可用。",
  },
  "vercel-deploy": {
    name: "Vercel Deploy Skills",
    signal: "公开链接",
    url: "https://github.com/vercel-labs/agent-skills",
    description: "做完网页后生成预览、部署公开链接，并检查上线前的基础问题。",
  },
  "shadcn-skill": {
    name: "shadcn/ui Skill",
    signal: "常用组件",
    url: "https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/SKILL.md",
    description: "快速把按钮、表单、弹窗、表格等 Web App 常用组件接进项目。",
  },
  "figma-skills": {
    name: "Figma Skills",
    signal: "设计协作",
    url: "https://claude.com/skills",
    description: "把界面、组件库和设计稿整理成 AI 能继续执行的设计上下文。",
  },
  "canva-skills": {
    name: "Canva Skills",
    signal: "素材出图",
    url: "https://claude.com/skills",
    description: "适合做封面、海报、社媒图和视觉素材，不必先学复杂设计软件。",
  },
  "guizang-ppt": {
    name: "归藏 PPT Skill",
    signal: "中文爆款视觉",
    url: "https://github.com/op7418/guizang-ppt-skill",
    description: "适合把项目做成发布会式网页 PPT、长图或可分享的视觉说明。",
  },
  "document-skills": {
    name: "Document Skills",
    signal: "文档表格",
    url: "https://github.com/anthropics/skills",
    description: "处理 Word、Excel、PPT、PDF 和资料整理类项目时最容易马上见效。",
  },
  "opencli": {
    name: "OpenCLI",
    signal: "真实网页操作",
    url: "https://github.com/jackwener/opencli",
    description: "把网页、平台和公开 API 变成 AI 可以稳定调用的命令行工具。",
  },
  "lark-cli": {
    name: "飞书 / Lark CLI",
    signal: "中文团队工作流",
    url: "https://github.com/larksuite/cli",
    description: "适合会议纪要、文档、多维表格、日历和任务流这类中文办公项目。",
  },
  "github-cli": {
    name: "GitHub CLI",
    signal: "复现开源项目",
    url: "https://cli.github.com/",
    description: "让 AI 更顺地 clone、看 issue、开 PR、跑 release 和管理项目来源。",
  },
  "supabase-skills": {
    name: "Supabase Agent Skills",
    signal: "登录数据库",
    url: "https://github.com/supabase/agent-skills",
    description: "新手做账号、权限、数据库、实时数据时，用它减少后端卡点。",
  },
  "huggingface-skills": {
    name: "Hugging Face Skills",
    signal: "AI Demo",
    url: "https://github.com/huggingface/skills",
    description: "适合把模型、数据集、Gradio、Spaces 接进 AI 项目和演示页面。",
  },
  "sentry-skills": {
    name: "Sentry Agent Skills",
    signal: "上线稳定性",
    url: "https://github.com/getsentry/skills",
    description: "公开项目上线后，用来定位错误、修 issue、维护监控接入。",
  },
};

const defaultSkillIds = {
  fun: ["github-cli", "playwright-skill", "frontend-design"],
  useful: ["github-cli", "shadcn-skill", "playwright-skill"],
  hardware: ["github-cli", "opencli"],
  stars: ["github-cli", "openai-skills"],
};

const projectSkillOverrides = {
  "AI 小镇 / NPC 社交游戏": ["github-cli", "openai-docs", "playwright-skill"],
  "手势控制小游戏 / 手势乐器": ["github-cli", "playwright-skill", "frontend-design"],
  "节点式视觉实验室": ["github-cli", "frontend-design", "playwright-skill"],
  "生成式海报 / 壁纸工厂": ["canva-skills", "figma-skills", "frontend-design"],
  "产品发布短片生成器": ["github-cli", "huggingface-skills", "canva-skills"],
  "手绘风白板 / 灵感草图板": ["figma-skills", "frontend-design", "playwright-skill"],
  "24 小时人生拨盘": ["github-cli", "frontend-design", "playwright-skill"],
  "节点流程玩具": ["github-cli", "shadcn-skill", "playwright-skill"],
  "文本生成图表魔法": ["github-cli", "openai-docs", "playwright-skill"],
  "数据可视化玩具箱": ["github-cli", "frontend-design", "playwright-skill"],
  "WebGL 流体玩具": ["github-cli", "playwright-skill", "frontend-design"],
  "代码动画课件": ["github-cli", "playwright-skill", "frontend-design"],
  "闪念备忘录 / 个人微博": ["github-cli", "shadcn-skill", "playwright-skill"],
  "个人 AI 工作台": ["openai-docs", "huggingface-skills", "document-skills"],
  "自动化工作流中枢": ["opencli", "github-cli", "shadcn-skill"],
  "信息雷达 / 周报机器人": ["opencli", "document-skills", "github-cli"],
  "票据合同 OCR 文档库": ["document-skills", "opencli", "github-cli"],
  "PDF 万能工具箱": ["document-skills", "github-cli", "playwright-skill"],
  "私人知识问答库": ["openai-docs", "huggingface-skills", "document-skills"],
  "AI 应用工作流平台": ["openai-docs", "github-cli", "playwright-skill"],
  "网页抓取 / 资料管道": ["opencli", "document-skills", "github-cli"],
  "服务健康监控面板": ["sentry-skills", "github-cli", "playwright-skill"],
  "私人元搜索引擎": ["opencli", "github-cli", "playwright-skill"],
  "跨设备文件同步": ["github-cli", "opencli"],
  "Meshtastic 离线通讯节点": ["github-cli", "opencli"],
  "QMK 宏键盘 / 工作流控制台": ["github-cli", "opencli"],
  "智能植物监测器": ["github-cli", "opencli"],
  "ESPHome 全屋传感器平台": ["github-cli", "opencli"],
  "ratgdo 车库门控制器": ["github-cli", "opencli"],
  "harry0703/MoneyPrinterTurbo": ["github-cli", "openai-docs", "huggingface-skills"],
  "Lum1104/Understand-Anything": ["github-cli", "openai-skills", "playwright-skill"],
  "microsoft/markitdown": ["document-skills", "github-cli", "opencli"],
  "Leonxlnx/taste-skill": ["openai-skills", "document-skills", "github-cli"],
  "colbymchenry/codegraph": ["github-cli", "openai-docs", "playwright-skill"],
  "affaan-m/ECC": ["openai-skills", "openai-docs", "github-cli"],
  "rohitg00/ai-engineering-from-scratch": ["github-cli", "huggingface-skills", "openai-docs"],
  "mukul975/Anthropic-Cybersecurity-Skills": ["openai-skills", "github-cli", "document-skills"],
  "hardikpandya/stop-slop": ["openai-skills", "document-skills", "github-cli"],
  "calesthio/OpenMontage": ["github-cli", "huggingface-skills", "canva-skills"],
  "google-labs-code/design.md": ["frontend-design", "figma-skills", "github-cli"],
  "topoteretes/cognee": ["openai-docs", "github-cli", "document-skills"],
  "JCodesMore/ai-website-cloner-template": ["github-cli", "frontend-design", "playwright-skill"],
  "ZhuLinsen/daily_stock_analysis": ["openai-docs", "github-cli", "document-skills"],
  "addyosmani/agent-skills": ["agent-skills", "github-cli", "playwright-skill"],
  "apple/container": ["github-cli", "openai-docs", "document-skills"],
  "chopratejas/headroom": ["openai-docs", "github-cli", "document-skills"],
  "phuryn/pm-skills": ["openai-skills", "document-skills", "github-cli"],
  "NVIDIA/SkillSpector": ["skillspector", "github-cli", "document-skills"],
  "anthropics/knowledge-work-plugins": ["document-skills", "openai-skills", "github-cli"],
  "EveryInc/compound-engineering-plugin": ["openai-skills", "github-cli", "document-skills"],
  "mvanhorn/last30days-skill": ["openai-skills", "opencli", "document-skills"],
  "DeusData/codebase-memory-mcp": ["github-cli", "openai-docs", "document-skills"],
  "NousResearch/hermes-agent": ["github-cli", "openai-docs", "document-skills"],
  "Panniantong/Agent-Reach": ["opencli", "github-cli", "playwright-skill"],
  "palmier-io/palmier-pro": ["github-cli", "canva-skills", "huggingface-skills"],
  "jamiepine/voicebox": ["github-cli", "huggingface-skills", "openai-docs"],
  "simplex-chat/simplex-chat": ["github-cli", "document-skills", "playwright-skill"],
  "Stirling-Tools/Stirling-PDF": ["document-skills", "github-cli", "playwright-skill"],
  "lfnovo/open-notebook": ["document-skills", "openai-docs", "github-cli"],
  "chatwoot/chatwoot": ["github-cli", "shadcn-skill", "playwright-skill"],
  "kenn-io/agentsview": ["github-cli", "openai-docs", "document-skills"],
  "microsoft/PowerToys": ["github-cli", "document-skills", "playwright-skill"],
  "PaddlePaddle/PaddleOCR": ["document-skills", "github-cli", "huggingface-skills"],
  "pbakaus/impeccable": ["frontend-design", "figma-skills", "playwright-skill"],
  "roboflow/supervision": ["huggingface-skills", "github-cli", "playwright-skill"],
  "Open-LLM-VTuber/Open-LLM-VTuber": ["openai-docs", "huggingface-skills", "github-cli"],
  "CopilotKit/CopilotKit": ["github-cli", "shadcn-skill", "playwright-skill"],
};

const projectSkillLimits = {
  "跨设备文件同步": 2,
  "ESP32 电子墨水日历牌": 2,
  "Meshtastic 离线通讯节点": 2,
  "QMK 宏键盘 / 工作流控制台": 2,
  "智能植物监测器": 2,
  "ESPHome 全屋传感器平台": 2,
  "OpenMQTTGateway 万能网关": 2,
  "Zigbee2MQTT 设备桥": 2,
  "ESP32-CAM 口袋摄像头": 2,
  "ESPresense 房间定位": 2,
  "Marlin 3D 打印机固件": 2,
  "Klipper 高速打印控制器": 2,
  "ZMK 无线机械键盘": 2,
  "KMK CircuitPython 键盘": 2,
  "OpenSprinkler 智能浇灌": 2,
  "OpenAstroTracker 星空追踪器": 2,
  "SmartKnob 触感旋钮": 2,
  "ratgdo 车库门控制器": 2,
  "OpenDTU 太阳能监控": 2,
  "rtl_433 无线传感器雷达": 2,
};

const projectSkillRules = [
  { tracks: ["fun", "stars"], match: /短片|短视频|视频|成片|分镜|配音|字幕|tts|voice|movie|moneyprinter|remotion|ffmpeg/, skills: ["github-cli", "openai-docs", "huggingface-skills"] },
  { tracks: ["fun"], match: /海报|壁纸|封面|字体|素材|视觉稿|typography|blotter/, skills: ["canva-skills", "figma-skills", "frontend-design"] },
  { tracks: ["fun"], match: /three|webgl|canvas|phaser|pixi|p5|kaplay|godot|matter|game|游戏|白板|3d|视觉|动画|音频|音乐|合成器|可视化|图表|节点|流程|拖拽|房间|展厅|粒子|webxr|react three/, skills: ["github-cli", "playwright-skill", "frontend-design"] },
  { tracks: ["fun", "useful"], match: /ppt|网页 ppt|演示稿|发布页|长图|presentation|deck|幻灯/, skills: ["guizang-ppt", "canva-skills", "figma-skills"] },
  { tracks: ["useful", "stars"], match: /pdf|office|word|excel|ppt|markdown|ocr|文档|票据|合同|发票|周报|资料|知识工作|会议|skill file|技能清单/, skills: ["document-skills", "opencli", "github-cli"] },
  { tracks: ["useful", "stars"], match: /hugging face|gradio|spaces|数据集|dataset|model|模型|image search|object tags/, skills: ["huggingface-skills", "github-cli", "playwright-skill"] },
  { tracks: ["fun", "useful", "stars"], match: /\bai\b|rag|llm|问答|知识库|agent|workflow|应用工作流|大模型|总结|提示词/, skills: ["openai-docs", "github-cli", "playwright-skill"] },
  { tracks: ["useful"], match: /数据库|crm|后台|登录|权限|表格|realtime|supabase|台账|内部工具|forms|automation/, skills: ["supabase-skills", "shadcn-skill", "playwright-skill"] },
  { tracks: ["useful"], match: /飞书|lark|微信|会议|多维表格/, skills: ["lark-cli", "opencli", "github-cli"] },
  { tracks: ["useful"], match: /自动化|webhook|opencli|抓取|搜索|api|rss|crawler|元搜索|资料管道/, skills: ["opencli", "github-cli", "document-skills"] },
  { tracks: ["useful"], match: /监控|状态页|报警|健康|uptime|错误|sentry/, skills: ["sentry-skills", "github-cli", "playwright-skill"] },
  { tracks: ["useful"], match: /看板|工作台|仪表盘|表单|按钮|页面|pwa|wiki|知识库|白板|表格|管理器|收件箱|档案馆/, skills: ["github-cli", "shadcn-skill", "playwright-skill"] },
  { tracks: ["hardware"], match: /\bai\b|语音|speech|mcp|coral|frigate|大模型/, skills: ["github-cli", "openai-docs", "opencli"] },
  { tracks: ["hardware"], match: /dashboard|仪表盘|控制台|面板|web ui|网页|home assistant|magicmirror|pi-hole|tasmota|octoprint|mainsail|openhasp|airgradient|状态|统计/, skills: ["github-cli", "opencli", "playwright-skill"] },
  { tracks: ["hardware"], match: /esp32|raspberry|home assistant|esphome|mqtt|zigbee|qmk|zmk|kmk|klipper|marlin|3d 打印|传感器|硬件|门铃|灯带|电子墨水|lora|sdr|firmware|固件|keymap|arduino/, skills: ["github-cli", "opencli"] },
];

const projectGroups = {
  "fun": [
    {
      "name": "AI 小镇 / NPC 社交游戏",
      "tagline": "一张小地图，几个会记忆、聊天、行动的 AI 角色。",
      "stack": [
        "Next.js",
        "Convex",
        "LLM",
        "Canvas"
      ],
      "mvp": "先做 3 个角色、1 个场景、10 条记忆；角色每天自动生成一段小剧情。",
      "wow": 97,
      "useful": 66,
      "easy": 68,
      "source": "AI Town",
      "url": "https://github.com/a16z-infra/ai-town",
      "demoUrl": "https://www.convex.dev/ai-town"
    },
    {
      "name": "手势控制小游戏 / 手势乐器",
      "tagline": "摄像头识别手势，用手掌控制游戏、节奏和音效。",
      "stack": [
        "MediaPipe",
        "Tone.js",
        "Phaser"
      ],
      "mvp": "握拳暂停，张手发射，左右移动控制音高；5 分钟就能感到魔法发生。",
      "wow": 94,
      "useful": 58,
      "easy": 74,
      "source": "Hand Tracking Demo",
      "url": "https://github.com/collidingScopes/threejs-handtracking-101",
      "demoUrl": "https://collidingscopes.github.io/threejs-handtracking-101/"
    },
    {
      "name": "节点式视觉实验室",
      "tagline": "像搭积木一样连节点，生成海报、动效和可交互图形。",
      "stack": [
        "Graphite",
        "WASM",
        "Node Graph"
      ],
      "mvp": "先复刻一个节点画布：形状、颜色、噪声和导出四个节点能连起来。",
      "wow": 93,
      "useful": 70,
      "easy": 54,
      "source": "Graphite",
      "url": "https://github.com/GraphiteEditor/Graphite",
      "demoUrl": "https://graphite.art"
    },
    {
      "name": "浏览器里的迷你音频工作站",
      "tagline": "上传一段音频，剪切、变声、循环采样，直接导出。",
      "stack": [
        "Web Audio",
        "Waveform",
        "IndexedDB"
      ],
      "mvp": "做波形预览、片段裁切、三种效果器和本地保存。",
      "wow": 91,
      "useful": 72,
      "easy": 62,
      "source": "AudioMass",
      "url": "https://github.com/pkalogiros/AudioMass",
      "demoUrl": "https://audiomass.co"
    },
    {
      "name": "物理沙盒 / 像素炼金术",
      "tagline": "沙子、水、火、植物互相反应，几行规则就能长出一个小宇宙。",
      "stack": [
        "Rust/WASM",
        "Canvas",
        "Cellular"
      ],
      "mvp": "先做 8 种材料、画笔、暂停/单步和分享种子。",
      "wow": 90,
      "useful": 45,
      "easy": 60,
      "source": "Sandspiel",
      "url": "https://github.com/MaxBittker/sandspiel",
      "demoUrl": "https://sandspiel.club"
    },
    {
      "name": "浏览器现场视觉合成器",
      "tagline": "输入一行代码，画面跟着音乐和节奏实时变形。",
      "stack": [
        "Hydra",
        "WebGL",
        "Web Audio"
      ],
      "mvp": "做 6 个 preset、BPM 控制、录屏导出和随机视觉按钮。",
      "wow": 89,
      "useful": 52,
      "easy": 57,
      "source": "Hydra",
      "url": "https://github.com/hydra-synth/hydra",
      "demoUrl": "https://hydra.ojack.xyz"
    },
    {
      "name": "生成式海报 / 壁纸工厂",
      "tagline": "滑动几个参数，就能生成一张有自己审美的海报。",
      "stack": [
        "p5.js",
        "Tweakpane",
        "Canvas"
      ],
      "mvp": "做 6 个参数、3 套版式、PNG 导出和随机种子复现。",
      "wow": 89,
      "useful": 61,
      "easy": 82,
      "source": "p5Catalyst Demo",
      "url": "https://multitude-amsterdam.github.io/p5Catalyst/"
    },
    {
      "name": "多人涂鸦白板游戏",
      "tagline": "多人同时画画、投票、猜词，适合朋友局和团队破冰。",
      "stack": [
        "tldraw",
        "PartyKit",
        "Realtime"
      ],
      "mvp": "先做一个房间码、实时画布、倒计时和投票按钮。",
      "wow": 86,
      "useful": 57,
      "easy": 70,
      "source": "tldraw",
      "url": "https://github.com/tldraw/tldraw",
      "demoUrl": "https://www.tldraw.com"
    },
    {
      "name": "24 小时人生拨盘",
      "tagline": "把一天做成一个可拖拽的圆盘，看见时间正在流向哪里。",
      "stack": [
        "SVG",
        "LocalStorage",
        "Charts"
      ],
      "mvp": "拖拽分配睡眠、工作、娱乐和学习；自动生成日复盘。",
      "wow": 82,
      "useful": 76,
      "easy": 80,
      "source": "Linear Clock Lab",
      "url": "https://github.com/jm5k/jm5k.github.io",
      "demoUrl": "https://linearclocklab.com/"
    },
    {
      "name": "产品发布短片生成器",
      "tagline": "给截图、脚本和几个镜头，让代码代理自动合成发布视频。",
      "stack": [
        "Remotion",
        "LLM",
        "Video"
      ],
      "mvp": "上传 3 张截图，自动生成字幕、镜头运动和 30 秒 MP4。",
      "wow": 84,
      "useful": 67,
      "easy": 46,
      "source": "Montage",
      "url": "https://github.com/simplexlabs/montage"
    },
    {
      "name": "手绘风白板 / 灵感草图板",
      "tagline": "把流程、脑暴、路线图画成手绘质感，可分享也可协作。",
      "stack": [
        "Excalidraw",
        "SVG",
        "Realtime"
      ],
      "mvp": "做无限画布、三种图形、文本贴纸和一键分享链接。",
      "wow": 85,
      "useful": 75,
      "easy": 72,
      "source": "Excalidraw",
      "url": "https://github.com/excalidraw/excalidraw",
      "demoUrl": "https://excalidraw.com"
    },
    {
      "name": "3D 房间 / 作品集小宇宙",
      "tagline": "把个人主页做成可走动的 3D 房间，每个物件都是一个链接。",
      "stack": [
        "Three.js",
        "GLTF",
        "Pointer"
      ],
      "mvp": "放 6 个模型、键盘移动、点击物件打开项目卡。",
      "wow": 92,
      "useful": 64,
      "easy": 45,
      "source": "Room Portfolio",
      "url": "https://github.com/AT010303/Room_Portfolio"
    },
    {
      "name": "WebGL 流体玩具",
      "tagline": "鼠标一划就像墨水在水里散开，适合做背景、封面和装置。",
      "stack": [
        "WebGL",
        "Shaders",
        "Canvas"
      ],
      "mvp": "做流体画布、颜色切换、截图导出和移动端触摸。",
      "wow": 88,
      "useful": 48,
      "easy": 56,
      "source": "WebGL Fluid",
      "url": "https://github.com/PavelDoGreat/WebGL-Fluid-Simulation",
      "demoUrl": "https://paveldogreat.github.io/WebGL-Fluid-Simulation/"
    },
    {
      "name": "算法节奏乐队",
      "tagline": "用短短几行 pattern 生成鼓点、旋律和循环音乐。",
      "stack": [
        "Strudel",
        "Web Audio",
        "Live Coding"
      ],
      "mvp": "做四轨循环、BPM 控制、录音和分享 pattern。",
      "wow": 87,
      "useful": 53,
      "easy": 61,
      "source": "Strudel REPL",
      "url": "https://strudel.cc/"
    },
    {
      "name": "浏览器合成器面板",
      "tagline": "旋钮、键盘、波形和效果器都在网页里，调参就出声。",
      "stack": [
        "Tone.js",
        "Web MIDI",
        "Canvas"
      ],
      "mvp": "做一个双振荡器合成器，支持键盘弹奏、滤波和 delay。",
      "wow": 84,
      "useful": 62,
      "easy": 67,
      "source": "JSS-01 Synthesizer",
      "url": "https://github.com/michaelkolesidis/javascript-software-synthesizer",
      "demoUrl": "https://jss.michaelkolesidis.com"
    },
    {
      "name": "2D 闯关小游戏",
      "tagline": "用地图、角色、碰撞和道具做一关能玩的横版小游戏。",
      "stack": [
        "Phaser",
        "Tilemap",
        "Sprites"
      ],
      "mvp": "做一个地图、一种敌人、三枚金币和终点门。",
      "wow": 83,
      "useful": 49,
      "easy": 73,
      "source": "Phaser Platformer",
      "url": "https://github.com/remarkablegames/phaser-platformer",
      "demoUrl": "https://remarkablegames.org/phaser-platformer/"
    },
    {
      "name": "街机风小游戏原型机",
      "tagline": "用更轻量的游戏库，快速做出弹幕、跳跃或收集类 demo。",
      "stack": [
        "KAPLAY",
        "JavaScript",
        "Sprites"
      ],
      "mvp": "做一个 60 秒挑战关，支持分数、失败和重新开始。",
      "wow": 82,
      "useful": 47,
      "easy": 78,
      "source": "KAPLAY",
      "url": "https://github.com/kaplayjs/kaplay"
    },
    {
      "name": "物理弹球 / 多米诺实验",
      "tagline": "让球、方块、弹簧和重力自己演戏，特别适合做小游戏机制。",
      "stack": [
        "Matter.js",
        "Canvas",
        "Physics"
      ],
      "mvp": "做一个弹球台：挡板、碰撞音效、计分和重力滑杆。",
      "wow": 82,
      "useful": 50,
      "easy": 70,
      "source": "JavaScript Physics",
      "url": "https://github.com/lonekorean/javascript-physics",
      "demoUrl": "https://lonekorean.github.io/javascript-physics/"
    },
    {
      "name": "拖拽式海报编辑器",
      "tagline": "图片、文字、贴纸、滤镜都能拖拽摆放，最后导出 PNG。",
      "stack": [
        "Fabric.js",
        "Canvas",
        "Export"
      ],
      "mvp": "做图层、拖拽缩放、对齐线和一键导出。",
      "wow": 80,
      "useful": 78,
      "easy": 64,
      "source": "vue-fabric-editor",
      "url": "https://github.com/ikuaitu/vue-fabric-editor",
      "demoUrl": "https://ikuaitu.github.io/doc/#/"
    },
    {
      "name": "代码动画课件",
      "tagline": "用动画框架和时间轴生成解释课件，适合做技术视频和课程图解。",
      "stack": [
        "Motion Canvas",
        "TypeScript",
        "Timeline"
      ],
      "mvp": "做一个排序算法动画，带字幕、暂停点和导出。",
      "wow": 81,
      "useful": 73,
      "easy": 52,
      "source": "Motion Canvas",
      "url": "https://github.com/motion-canvas/motion-canvas",
      "demoUrl": "https://motioncanvas.io"
    },
    {
      "name": "React 视频渲染工厂",
      "tagline": "用 React 视频框架把组件渲染成视频，自动生成开场、字幕和产品演示。",
      "stack": [
        "Remotion",
        "React",
        "FFmpeg"
      ],
      "mvp": "用数据生成 5 个镜头，导出一支 15 秒产品短片。",
      "wow": 83,
      "useful": 74,
      "easy": 55,
      "source": "Remotion",
      "url": "https://github.com/remotion-dev/remotion",
      "demoUrl": "https://www.remotion.dev/"
    },
    {
      "name": "节点流程玩具",
      "tagline": "参考 React Flow 示例做拖线流程画布，天然适合可视化 AI agent。",
      "stack": [
        "React Flow",
        "Nodes",
        "Edges"
      ],
      "mvp": "实现输入、处理、输出三类节点，支持保存和重放。",
      "wow": 78,
      "useful": 82,
      "easy": 68,
      "source": "React Flow Example Apps",
      "url": "https://github.com/xyflow/react-flow-example-apps",
      "demoUrl": "https://reactflow.dev/examples"
    },
    {
      "name": "文本生成图表魔法",
      "tagline": "用户写几行文字，就能生成流程图、时序图和项目路线图。",
      "stack": [
        "Mermaid",
        "Markdown",
        "Export"
      ],
      "mvp": "做编辑器、实时预览、主题切换和 PNG/SVG 导出。",
      "wow": 76,
      "useful": 84,
      "easy": 78,
      "source": "Mermaid Live Editor",
      "url": "https://github.com/mermaid-js/mermaid-live-editor",
      "demoUrl": "https://mermaid.live"
    },
    {
      "name": "数据可视化玩具箱",
      "tagline": "把 CSV 拖进可视化工具，快速试气泡图、桑基图、时间线和关系图。",
      "stack": [
        "RAWGraphs",
        "CSV",
        "Charts"
      ],
      "mvp": "上传一份表格，选 3 种图表，调字段映射并导出 SVG/PNG。",
      "wow": 79,
      "useful": 81,
      "easy": 58,
      "source": "RAWGraphs",
      "url": "https://github.com/rawgraphs/rawgraphs-app",
      "demoUrl": "https://app.rawgraphs.io/"
    },
    {
      "name": "手绘风 UI 组件参考",
      "tagline": "一组手绘质感 Web 组件参考，适合快速做 wireframe、草稿原型和趣味控件。",
      "stack": [
        "Rough.js",
        "SVG",
        "Canvas"
      ],
      "mvp": "先挑按钮、输入框、卡片和开关四类组件，做成一个可复用的草稿风组件页。",
      "wow": 75,
      "useful": 67,
      "easy": 80,
      "source": "Wired Elements",
      "url": "https://github.com/rough-stuff/wired-elements",
      "demoUrl": "https://wiredjs.com"
    },
    {
      "name": "浏览器 3D 小展厅 / A-Frame 示例",
      "tagline": "先用普通浏览器搭一个能走动的 3D 展厅，再把 WebXR 当作可选增强。",
      "stack": [
        "A-Frame",
        "Three.js",
        "3D Assets"
      ],
      "mvp": "做一间展厅、五件展品、说明牌和第一人称漫游；确认桌面端可见后再考虑手机 XR。",
      "wow": 84,
      "useful": 55,
      "easy": 66,
      "source": "A-Frame Examples",
      "url": "https://github.com/aframevr/aframe",
      "demoUrl": "https://aframe.io/examples/"
    },
    {
      "name": "像素 / 粒子编辑器",
      "tagline": "用现成粒子编辑器调出火花、烟雾和像素舞台，再把配置接进自己的页面。",
      "stack": [
        "PixiJS",
        "Particles",
        "Sprites"
      ],
      "mvp": "先用编辑器调出 3 个粒子 preset，再接入一个 PixiJS 画布页面。",
      "wow": 84,
      "useful": 56,
      "easy": 62,
      "source": "Pixi Particle Editor",
      "url": "https://userland.pixijs.io/particle-emitter-editor/"
    },
    {
      "name": "React 3D 产品模型参考",
      "tagline": "参考一个 React Three Fiber 产品模型源码，先做本地旋转、热点和动画解释。",
      "stack": [
        "React Three Fiber",
        "Three.js",
        "GLTF"
      ],
      "mvp": "先在本地展示一个模型，做 4 个热点、光照切换和截图按钮。",
      "wow": 82,
      "useful": 76,
      "easy": 50,
      "source": "3D Product Configurator Source",
      "url": "https://github.com/Madewill/3d-product-configurator"
    },
    {
      "name": "字体扭曲效果库",
      "tagline": "一个老牌 WebGL 字体效果库参考，适合做标题封面、动态字效和海报灵感。",
      "stack": [
        "Blotter",
        "GLSL",
        "Typography"
      ],
      "mvp": "先复刻 3 种标题效果，支持改字、换色和截图导出。",
      "wow": 78,
      "useful": 61,
      "easy": 59,
      "source": "Blotter",
      "url": "https://github.com/bradley/Blotter",
      "demoUrl": "https://blotter.js.org"
    },
    {
      "name": "周末游戏引擎原型",
      "tagline": "用 Godot 官方示例在本地引擎里做一个可导出网页的 2D/3D 小游戏切片。",
      "stack": [
        "Godot",
        "GDScript",
        "Web Export"
      ],
      "mvp": "做一个完整循环：开始、玩法、失败、胜利、导出网页。",
      "wow": 80,
      "useful": 60,
      "easy": 57,
      "source": "Godot Demo Projects",
      "url": "https://github.com/godotengine/godot-demo-projects"
    }
  ],
  "useful": [
    {
      "name": "个人 AI 工作台",
      "tagline": "统一聊天、文件问答、网页总结和日常工具调用。",
      "stack": [
        "Open WebUI",
        "RAG",
        "Local LLM"
      ],
      "mvp": "先接一个模型，支持上传 PDF，回答时附来源片段。",
      "wow": 79,
      "useful": 98,
      "easy": 65,
      "source": "Open WebUI",
      "url": "https://github.com/open-webui/open-webui"
    },
    {
      "name": "自动化工作流中枢",
      "tagline": "把表单、邮件、表格、AI 总结和提醒串成一条自动流水线。",
      "stack": [
        "n8n",
        "Webhook",
        "AI Tools"
      ],
      "mvp": "先做一个「收到链接 → 摘要 → 写进表格 → 发通知」流程。",
      "wow": 86,
      "useful": 97,
      "easy": 66,
      "source": "n8n",
      "url": "https://github.com/n8n-io/n8n"
    },
    {
      "name": "信息雷达 / 周报机器人",
      "tagline": "自动扫描 Product Hunt、HN、GitHub 和 RSS，整理成可发布周报。",
      "stack": [
        "Vercel Cron",
        "RSS",
        "LLM"
      ],
      "mvp": "每日抓 30 条链接，去重、打分、生成 5 条推荐。",
      "wow": 82,
      "useful": 96,
      "easy": 72,
      "source": "agents-radar",
      "url": "https://github.com/duanyytop/agents-radar"
    },
    {
      "name": "收藏夹 + AI 阅读收件箱",
      "tagline": "网页、PDF、视频链接统一收藏，自动归档、摘要和全文保存。",
      "stack": [
        "Linkwarden",
        "Crawler",
        "RAG"
      ],
      "mvp": "浏览器扩展收藏链接，抓正文，生成一句摘要和三个标签。",
      "wow": 77,
      "useful": 94,
      "easy": 70,
      "source": "Linkwarden",
      "url": "https://github.com/linkwarden/linkwarden"
    },
    {
      "name": "票据合同 OCR 文档库",
      "tagline": "把合同、发票、截图变成可搜索、可标签化的资料库。",
      "stack": [
        "OCR",
        "Postgres",
        "Search"
      ],
      "mvp": "图片/PDF 上传、OCR 文本、标签、全文搜索。",
      "wow": 73,
      "useful": 94,
      "easy": 63,
      "source": "paperless-ngx",
      "url": "https://github.com/paperless-ngx/paperless-ngx"
    },
    {
      "name": "私人相册 + AI 搜索",
      "tagline": "找照片不再翻一年相册，直接搜地点、人物、事件和画面。",
      "stack": [
        "Image Search",
        "Object Tags",
        "Storage"
      ],
      "mvp": "本地上传 200 张照片，自动生成标签和按月浏览。",
      "wow": 76,
      "useful": 91,
      "easy": 59,
      "source": "Immich",
      "url": "https://github.com/immich-app/immich"
    },
    {
      "name": "个人财务 / 订阅管理器",
      "tagline": "看清每月钱去了哪里，自动提醒快到期的订阅。",
      "stack": [
        "CSV Import",
        "Charts",
        "Reminders"
      ],
      "mvp": "导入账单 CSV，识别订阅，生成月度支出图。",
      "wow": 68,
      "useful": 90,
      "easy": 78,
      "source": "Actual Budget",
      "url": "https://github.com/actualbudget/actual"
    },
    {
      "name": "PDF 万能工具箱",
      "tagline": "合并、压缩、签名、OCR、转图片，所有 PDF 小活都在本地跑。",
      "stack": [
        "Stirling PDF",
        "Docker",
        "OCR"
      ],
      "mvp": "做一个上传区，支持合并、压缩、加水印和转图片四个按钮。",
      "wow": 71,
      "useful": 89,
      "easy": 74,
      "source": "Stirling PDF",
      "url": "https://github.com/Stirling-Tools/Stirling-PDF"
    },
    {
      "name": "服务健康监控面板",
      "tagline": "把网站、接口、自动化脚本都放进一个会报警的状态页。",
      "stack": [
        "Uptime Kuma",
        "Status Page",
        "Alerts"
      ],
      "mvp": "监控 5 个 URL，失败时发邮件/Telegram，并生成公开状态页。",
      "wow": 69,
      "useful": 88,
      "easy": 79,
      "source": "Uptime Kuma",
      "url": "https://github.com/louislam/uptime-kuma"
    },
    {
      "name": "食谱 + 购物清单 + 冰箱库存",
      "tagline": "复制菜谱链接，自动拆成采购清单，顺手管理库存。",
      "stack": [
        "Recipe Parser",
        "Checklist",
        "PWA"
      ],
      "mvp": "菜谱粘贴、食材提取、购物清单勾选、常买项记忆。",
      "wow": 70,
      "useful": 87,
      "easy": 76,
      "source": "Mealie",
      "url": "https://github.com/mealie-recipes/mealie"
    },
    {
      "name": "闪念备忘录 / 个人微博",
      "tagline": "像发微博一样记录想法、链接、截图和今日碎片。",
      "stack": [
        "Memos",
        "Markdown",
        "Tags"
      ],
      "mvp": "做快速输入、标签、日历视图和全文搜索。",
      "wow": 65,
      "useful": 86,
      "easy": 82,
      "source": "Memos",
      "url": "https://github.com/usememos/memos"
    },
    {
      "name": "Bookmark Everything 档案馆",
      "tagline": "链接、图片、笔记全收藏，并用 AI 自动打标签。",
      "stack": [
        "Karakeep",
        "AI Tags",
        "Full Text"
      ],
      "mvp": "浏览器收藏 50 条链接，自动抓取正文、截图和标签。",
      "wow": 73,
      "useful": 88,
      "easy": 69,
      "source": "Karakeep",
      "url": "https://github.com/karakeep-app/karakeep"
    },
    {
      "name": "本地 Notion 式工作台",
      "tagline": "项目、文档、任务和数据库放在一个可离线的工作空间。",
      "stack": [
        "AppFlowy",
        "Kanban",
        "Docs"
      ],
      "mvp": "做一个项目空间：文档、任务看板、数据库和 AI 摘要。",
      "wow": 72,
      "useful": 88,
      "easy": 60,
      "source": "AppFlowy",
      "url": "https://github.com/AppFlowy-IO/AppFlowy"
    },
    {
      "name": "白板 + 知识库混合空间",
      "tagline": "既能写文档，也能用白板整理关系和思路。",
      "stack": [
        "AFFiNE",
        "Canvas",
        "Docs"
      ],
      "mvp": "做一个选题工作区：资料页、白板、任务区互相引用。",
      "wow": 76,
      "useful": 86,
      "easy": 58,
      "source": "AFFiNE",
      "url": "https://github.com/toeverything/AFFiNE"
    },
    {
      "name": "双链知识库 / 学习卡片",
      "tagline": "把读书笔记、会议纪要和灵感连成可回溯的知识网络。",
      "stack": [
        "Logseq",
        "Markdown",
        "Graph"
      ],
      "mvp": "做每日笔记、双链引用、标签图谱和复习清单。",
      "wow": 68,
      "useful": 87,
      "easy": 67,
      "source": "Logseq",
      "url": "https://github.com/logseq/logseq"
    },
    {
      "name": "团队 Wiki / SOP 中心",
      "tagline": "把流程、模板、账号说明和 FAQ 整理成团队知识库。",
      "stack": [
        "Outline",
        "Markdown",
        "Search"
      ],
      "mvp": "搭一个空间，录入 20 篇 SOP，支持权限和搜索。",
      "wow": 64,
      "useful": 89,
      "easy": 71,
      "source": "Outline",
      "url": "https://github.com/outline/outline"
    },
    {
      "name": "私人手册站",
      "tagline": "像一本内部百科，把生活、项目和工具说明分层管理。",
      "stack": [
        "BookStack",
        "Pages",
        "Permissions"
      ],
      "mvp": "建立 3 本书、10 个章节、搜索和公开分享。",
      "wow": 62,
      "useful": 86,
      "easy": 75,
      "source": "BookStack",
      "url": "https://github.com/BookStackApp/BookStack"
    },
    {
      "name": "开源文档协作站",
      "tagline": "给小团队做一个轻量版 Confluence，写需求、规范和复盘。",
      "stack": [
        "Docmost",
        "Docs",
        "Realtime"
      ],
      "mvp": "做一个团队空间、模板库、评论和权限。",
      "wow": 66,
      "useful": 88,
      "easy": 68,
      "source": "Docmost",
      "url": "https://github.com/docmost/docmost"
    },
    {
      "name": "无代码数据库后台",
      "tagline": "把表格变成数据库和内部工具，适合做运营台账。",
      "stack": [
        "NocoDB",
        "Database",
        "Forms"
      ],
      "mvp": "把 CSV 导入成数据库，做表单、视图和筛选。",
      "wow": 69,
      "useful": 90,
      "easy": 74,
      "source": "NocoDB",
      "url": "https://github.com/nocodb/nocodb"
    },
    {
      "name": "表格数据库 / 小型 CRM",
      "tagline": "用 Airtable 式表格管理客户、项目、报价和内容排期。",
      "stack": [
        "Baserow",
        "Tables",
        "Automation"
      ],
      "mvp": "搭 4 张表：客户、项目、任务、报价，并加自动提醒。",
      "wow": 67,
      "useful": 88,
      "easy": 73,
      "source": "Baserow",
      "url": "https://github.com/baserow/baserow"
    },
    {
      "name": "内部工具搭建器",
      "tagline": "拖拽表格、按钮、表单和自动化，做一个自己的运营后台。",
      "stack": [
        "Budibase",
        "Forms",
        "Automations"
      ],
      "mvp": "做一个商单排期后台，支持新建、筛选、状态变更。",
      "wow": 70,
      "useful": 89,
      "easy": 65,
      "source": "Budibase",
      "url": "https://github.com/Budibase/budibase"
    },
    {
      "name": "私人知识问答库",
      "tagline": "把本地文件、网页和笔记接入一个能追问的 AI 助手。",
      "stack": [
        "AnythingLLM",
        "RAG",
        "Workspaces"
      ],
      "mvp": "创建 3 个资料库，上传文件并按空间回答问题。",
      "wow": 76,
      "useful": 91,
      "easy": 67,
      "source": "AnythingLLM",
      "url": "https://github.com/Mintplex-Labs/anything-llm"
    },
    {
      "name": "AI 应用工作流平台",
      "tagline": "把提示词、知识库、工具调用和发布入口做成可复用应用。",
      "stack": [
        "Dify",
        "Agents",
        "Workflow"
      ],
      "mvp": "做一个选题助手：输入链接，输出摘要、角度和标题。",
      "wow": 78,
      "useful": 92,
      "easy": 63,
      "source": "Dify",
      "url": "https://github.com/langgenius/dify"
    },
    {
      "name": "可视化 Agent 编排器",
      "tagline": "用节点方式搭聊天机器人、检索链和工具调用流程。",
      "stack": [
        "Flowise",
        "LangChain",
        "Nodes"
      ],
      "mvp": "拖一个 RAG 流程：输入、检索、LLM、输出四个节点。",
      "wow": 75,
      "useful": 89,
      "easy": 66,
      "source": "Flowise",
      "url": "https://github.com/FlowiseAI/Flowise"
    },
    {
      "name": "深度 RAG 文档助手",
      "tagline": "给大量 PDF、网页和表格做检索增强问答。",
      "stack": [
        "RAGFlow",
        "OCR",
        "Agents"
      ],
      "mvp": "导入 20 份 PDF，支持引用来源和多轮追问。",
      "wow": 73,
      "useful": 91,
      "easy": 54,
      "source": "RAGFlow",
      "url": "https://github.com/infiniflow/ragflow"
    },
    {
      "name": "网页抓取 / 资料管道",
      "tagline": "把网页变成干净 Markdown，供周报、知识库和 AI 流程使用。",
      "stack": [
        "Firecrawl",
        "Markdown",
        "Crawler"
      ],
      "mvp": "输入 URL 列表，抓正文、去重、转摘要并导出。",
      "wow": 72,
      "useful": 90,
      "easy": 62,
      "source": "Firecrawl",
      "url": "https://github.com/firecrawl/firecrawl"
    },
    {
      "name": "私人元搜索引擎",
      "tagline": "聚合多个搜索源，不追踪、不广告，适合当资料入口。",
      "stack": [
        "SearXNG",
        "Docker",
        "Search"
      ],
      "mvp": "部署搜索页，配置 5 个引擎，保存常用查询。",
      "wow": 66,
      "useful": 86,
      "easy": 70,
      "source": "SearXNG",
      "url": "https://github.com/searxng/searxng"
    },
    {
      "name": "跨设备文件同步",
      "tagline": "电脑、NAS、手机之间自动同步文件，不依赖网盘。",
      "stack": [
        "Syncthing",
        "P2P",
        "Folders"
      ],
      "mvp": "同步两个文件夹，设置忽略规则和冲突提示。",
      "wow": 64,
      "useful": 88,
      "easy": 73,
      "source": "Syncthing",
      "url": "https://github.com/syncthing/syncthing"
    },
    {
      "name": "家庭密码库",
      "tagline": "自托管密码管理，给自己和家人统一保存账号。",
      "stack": [
        "Vaultwarden",
        "Bitwarden",
        "Docker"
      ],
      "mvp": "部署服务、创建家庭组织、导入密码并启用 2FA。",
      "wow": 62,
      "useful": 92,
      "easy": 69,
      "source": "Vaultwarden",
      "url": "https://github.com/dani-garcia/vaultwarden"
    },
    {
      "name": "财务火控仪表盘",
      "tagline": "把账户、预算、账单和财务规则做成更完整的个人系统。",
      "stack": [
        "Firefly III",
        "Budgets",
        "Rules"
      ],
      "mvp": "导入账单，自动分类，做预算、标签和月报。",
      "wow": 63,
      "useful": 89,
      "easy": 58,
      "source": "Firefly III",
      "url": "https://github.com/firefly-iii/firefly-iii"
    }
  ],
  "hardware": [
    {
      "name": "ESP32 电子墨水日历牌",
      "tagline": "一块低功耗屏，放在桌面显示日程、天气、待办和提醒。",
      "stack": [
        "ESP32",
        "E-paper",
        "ESPHome"
      ],
      "mvp": "每 30 分钟刷新一次天气和今日待办，晚上自动低功耗。",
      "wow": 90,
      "useful": 91,
      "easy": 73,
      "source": "LilyGo ESPHome Calendar",
      "url": "https://github.com/AppForce1/lilygo-t5-47-plus-esphome"
    },
    {
      "name": "WLED 音乐律动灯",
      "tagline": "用手机网页控制灯带，让房间跟音乐一起动起来。",
      "stack": [
        "ESP32",
        "LED Strip",
        "WLED"
      ],
      "mvp": "三种氛围场景、一个音乐模式、一个睡前暖光模式。",
      "wow": 92,
      "useful": 69,
      "easy": 80,
      "source": "WLED",
      "url": "https://github.com/wled/WLED"
    },
    {
      "name": "Magic Mirror 智能镜子",
      "tagline": "Raspberry Pi + 半透镜，把镜子变成家庭信息面板。",
      "stack": [
        "Raspberry Pi",
        "MagicMirror",
        "Modules"
      ],
      "mvp": "天气、日历、新闻、倒计时四个模块先跑起来。",
      "wow": 93,
      "useful": 82,
      "easy": 61,
      "source": "MagicMirror",
      "url": "https://github.com/MagicMirrorOrg/MagicMirror"
    },
    {
      "name": "Meshtastic 离线通讯节点",
      "tagline": "两块 LoRa 小板就能组一个不用手机信号的文字通讯网。",
      "stack": [
        "LoRa",
        "ESP32",
        "Meshtastic"
      ],
      "mvp": "两台设备互发消息，网页地图显示节点位置，再加一个频道名。",
      "wow": 91,
      "useful": 76,
      "easy": 62,
      "source": "Meshtastic",
      "url": "https://github.com/meshtastic/firmware"
    },
    {
      "name": "QMK 宏键盘 / 工作流控制台",
      "tagline": "几颗按键完成截图、发提示词、开工具、切场景。",
      "stack": [
        "QMK",
        "USB HID",
        "3D Print"
      ],
      "mvp": "6 个键：截图、录音、打开项目、切窗口、提交、部署。",
      "wow": 84,
      "useful": 88,
      "easy": 67,
      "source": "QMK",
      "url": "https://github.com/qmk/qmk_firmware"
    },
    {
      "name": "本地 AI 摄像头门铃",
      "tagline": "门口摄像头本地识别人、车和包裹，只把重要事件推给你。",
      "stack": [
        "Frigate",
        "Coral TPU",
        "Home Assistant"
      ],
      "mvp": "先接一支摄像头，识别人形事件，保存 10 秒片段并推送。",
      "wow": 87,
      "useful": 89,
      "easy": 44,
      "source": "Frigate",
      "url": "https://github.com/blakeblackshear/frigate"
    },
    {
      "name": "小智 ESP32 AI 语音终端",
      "tagline": "一块小板、一只喇叭和麦克风，做成可对话的桌面 AI 伙伴。",
      "stack": [
        "ESP32",
        "MCP",
        "Speech"
      ],
      "mvp": "按键唤醒、语音问答、调用一个本地工具，再在屏幕上显示回复。",
      "wow": 89,
      "useful": 80,
      "easy": 52,
      "source": "xiaozhi-esp32",
      "url": "https://github.com/78/xiaozhi-esp32"
    },
    {
      "name": "Tasmota 家电控制台",
      "tagline": "把插座、灯、传感器刷成统一固件，搭一个完全本地的控制面板。",
      "stack": [
        "Tasmota",
        "MQTT",
        "Web UI"
      ],
      "mvp": "先接一个智能插座，网页开关、定时规则和功耗曲线跑起来。",
      "wow": 78,
      "useful": 86,
      "easy": 63,
      "source": "Tasmota",
      "url": "https://github.com/arendst/Tasmota"
    },
    {
      "name": "Pi-hole 家庭网络护城河",
      "tagline": "一台 Raspberry Pi 变成全家的广告拦截、DNS 和网络统计中心。",
      "stack": [
        "Raspberry Pi",
        "Pi-hole",
        "DNS"
      ],
      "mvp": "接管家庭 DNS，显示今日拦截数，再加常用域名白名单。",
      "wow": 74,
      "useful": 90,
      "easy": 71,
      "source": "Pi-hole",
      "url": "https://github.com/pi-hole/pi-hole"
    },
    {
      "name": "智能植物监测器",
      "tagline": "湿度、温度、光照和缺水提醒，让桌面植物更容易活。",
      "stack": [
        "ESP32",
        "Sensors",
        "Home Assistant"
      ],
      "mvp": "土壤湿度低于阈值时亮灯，并推送一条提醒。",
      "wow": 78,
      "useful": 81,
      "easy": 77,
      "source": "Soil Moisture Sensor",
      "url": "https://github.com/bicycleboy/yet-another-soil-moisture-sensor"
    },
    {
      "name": "ESPHome 全屋传感器平台",
      "tagline": "用 YAML 把温湿度、人体、门磁和灯控接进家庭自动化。",
      "stack": [
        "ESPHome",
        "ESP32",
        "YAML"
      ],
      "mvp": "做一个温湿度节点，接入 Home Assistant 并显示历史曲线。",
      "wow": 76,
      "useful": 90,
      "easy": 75,
      "source": "ESPHome",
      "url": "https://github.com/esphome/esphome"
    },
    {
      "name": "Home Assistant 家庭中枢",
      "tagline": "把灯、门锁、传感器、摄像头和自动化统一管理。",
      "stack": [
        "Home Assistant",
        "Integrations",
        "Dashboard"
      ],
      "mvp": "接入 5 个设备，做一个早安/晚安自动化和手机面板。",
      "wow": 80,
      "useful": 94,
      "easy": 57,
      "source": "Home Assistant",
      "url": "https://github.com/home-assistant/core"
    },
    {
      "name": "OpenMQTTGateway 万能网关",
      "tagline": "把蓝牙、433MHz、红外等设备信号转换成 MQTT。",
      "stack": [
        "MQTT",
        "RF",
        "ESP32"
      ],
      "mvp": "读取一个蓝牙温度计和一个 433 遥控器，发布到 MQTT。",
      "wow": 77,
      "useful": 86,
      "easy": 56,
      "source": "OpenMQTTGateway",
      "url": "https://github.com/1technophile/OpenMQTTGateway"
    },
    {
      "name": "Zigbee2MQTT 设备桥",
      "tagline": "让 Zigbee 传感器不依赖厂商网关，直接接入本地系统。",
      "stack": [
        "Zigbee",
        "MQTT",
        "Coordinator"
      ],
      "mvp": "配对一个门磁和一个按钮，触发灯光或通知。",
      "wow": 76,
      "useful": 88,
      "easy": 54,
      "source": "Zigbee2MQTT",
      "url": "https://github.com/Koenkk/zigbee2mqtt"
    },
    {
      "name": "ESP32-CAM 口袋摄像头",
      "tagline": "几十块钱的小板做延时摄影、门口观察或宠物相机。",
      "stack": [
        "ESP32-CAM",
        "MJPEG",
        "Storage"
      ],
      "mvp": "网页实时预览，按按钮拍照，并保存最近 20 张。",
      "wow": 82,
      "useful": 75,
      "easy": 62,
      "source": "ESP32 Cam Webserver",
      "url": "https://github.com/easytarget/esp32-cam-webserver"
    },
    {
      "name": "ESPresense 房间定位",
      "tagline": "用蓝牙信号判断人在客厅、卧室还是书房。",
      "stack": [
        "ESP32",
        "BLE",
        "Presence"
      ],
      "mvp": "部署两个节点，识别手机/手环所在房间并触发自动化。",
      "wow": 79,
      "useful": 84,
      "easy": 57,
      "source": "ESPresense",
      "url": "https://github.com/ESPresense/ESPresense"
    },
    {
      "name": "Marlin 3D 打印机固件",
      "tagline": "给 3D 打印机刷开源固件，理解温控、步进和限位。",
      "stack": [
        "Marlin",
        "Firmware",
        "3D Printer"
      ],
      "mvp": "编译固件，配置主板、热床、喷头和自动调平。",
      "wow": 76,
      "useful": 82,
      "easy": 43,
      "source": "Marlin",
      "url": "https://github.com/MarlinFirmware/Marlin"
    },
    {
      "name": "Klipper 高速打印控制器",
      "tagline": "Raspberry Pi 负责运动控制，让 3D 打印更快更稳。",
      "stack": [
        "Klipper",
        "Raspberry Pi",
        "Printer"
      ],
      "mvp": "接入一台打印机，完成校准、压力提前和输入整形。",
      "wow": 79,
      "useful": 84,
      "easy": 42,
      "source": "Klipper",
      "url": "https://github.com/Klipper3d/klipper"
    },
    {
      "name": "OctoPrint 打印机监控台",
      "tagline": "远程上传模型、看摄像头、暂停打印和查看进度。",
      "stack": [
        "OctoPrint",
        "Raspberry Pi",
        "Webcam"
      ],
      "mvp": "网页上传 G-code，接摄像头，做打印完成通知。",
      "wow": 73,
      "useful": 85,
      "easy": 66,
      "source": "OctoPrint",
      "url": "https://github.com/OctoPrint/OctoPrint"
    },
    {
      "name": "ZMK 无线机械键盘",
      "tagline": "低功耗蓝牙键盘固件，适合分体键盘和便携键盘。",
      "stack": [
        "ZMK",
        "Bluetooth",
        "Keymap"
      ],
      "mvp": "配置 36 键布局、蓝牙配对、双层快捷键。",
      "wow": 77,
      "useful": 83,
      "easy": 52,
      "source": "ZMK",
      "url": "https://github.com/zmkfirmware/zmk"
    },
    {
      "name": "KMK CircuitPython 键盘",
      "tagline": "用 Python 写键盘固件，更适合快速改键和实验。",
      "stack": [
        "KMK",
        "CircuitPython",
        "HID"
      ],
      "mvp": "做一个 4 键小键盘，支持旋钮、宏和层切换。",
      "wow": 75,
      "useful": 82,
      "easy": 66,
      "source": "KMK",
      "url": "https://github.com/KMKfw/kmk_firmware"
    },
    {
      "name": "OpenSprinkler 智能浇灌",
      "tagline": "根据时间、天气和湿度控制花园或阳台浇水。",
      "stack": [
        "OpenSprinkler",
        "Valves",
        "Weather"
      ],
      "mvp": "控制一路水阀，设置日程和下雨跳过规则。",
      "wow": 74,
      "useful": 84,
      "easy": 49,
      "source": "OpenSprinkler",
      "url": "https://github.com/OpenSprinkler/OpenSprinkler-Firmware"
    },
    {
      "name": "OpenAstroTracker 星空追踪器",
      "tagline": "自制赤道仪追踪星空，拍更清楚的长曝光星野。",
      "stack": [
        "Stepper",
        "Arduino",
        "Astronomy"
      ],
      "mvp": "打印结构件，驱动一步进电机，完成基础极轴校准。",
      "wow": 88,
      "useful": 68,
      "easy": 35,
      "source": "OpenAstroTracker",
      "url": "https://github.com/OpenAstroTech/OpenAstroTracker-Firmware"
    },
    {
      "name": "SmartKnob 触感旋钮",
      "tagline": "一个带屏幕和力反馈的旋钮，可以控制音量、灯光和时间线。",
      "stack": [
        "ESP32",
        "Motor",
        "Display"
      ],
      "mvp": "做音量旋钮、模式切换、屏幕显示和阻尼反馈。",
      "wow": 90,
      "useful": 78,
      "easy": 37,
      "source": "SmartKnob",
      "url": "https://github.com/scottbez1/smartknob"
    },
    {
      "name": "ratgdo 车库门控制器",
      "tagline": "把车库门状态、本地控制和自动化接入 Home Assistant。",
      "stack": [
        "ESPHome",
        "Garage",
        "Home Assistant"
      ],
      "mvp": "读取开关状态，网页控制开关，并设置离家提醒。",
      "wow": 72,
      "useful": 86,
      "easy": 50,
      "source": "ratgdo",
      "url": "https://github.com/ratgdo/esphome-ratgdo"
    },
    {
      "name": "AirGradient 空气质量站",
      "tagline": "监测 PM2.5、CO2、温湿度，做一块家里的空气仪表盘。",
      "stack": [
        "AirGradient",
        "Sensors",
        "Dashboard"
      ],
      "mvp": "接入 CO2 和 PM2.5 传感器，显示曲线和超标提醒。",
      "wow": 76,
      "useful": 88,
      "easy": 59,
      "source": "AirGradient",
      "url": "https://github.com/airgradienthq/arduino"
    },
    {
      "name": "OpenDTU 太阳能监控",
      "tagline": "读取微型逆变器数据，看今天发了多少电。",
      "stack": [
        "ESP32",
        "Solar",
        "MQTT"
      ],
      "mvp": "读取逆变器功率，展示实时曲线和日发电量。",
      "wow": 73,
      "useful": 87,
      "easy": 48,
      "source": "OpenDTU",
      "url": "https://github.com/tbnobody/OpenDTU"
    },
    {
      "name": "rtl_433 无线传感器雷达",
      "tagline": "用 SDR 接收温度计、门铃、轮胎压力等 433MHz 信号。",
      "stack": [
        "SDR",
        "rtl_433",
        "MQTT"
      ],
      "mvp": "识别一个无线温度计，把数据写入 Home Assistant。",
      "wow": 79,
      "useful": 81,
      "easy": 46,
      "source": "rtl_433",
      "url": "https://github.com/merbanan/rtl_433"
    },
    {
      "name": "openHASP 墙面控制屏",
      "tagline": "旧手机或小屏变成 Home Assistant 的墙面控制面板。",
      "stack": [
        "openHASP",
        "MQTT",
        "Touchscreen"
      ],
      "mvp": "做灯光、温度、场景三个页面，并支持触摸控制。",
      "wow": 77,
      "useful": 85,
      "easy": 55,
      "source": "openHASP",
      "url": "https://github.com/HASwitchPlate/openHASP"
    },
    {
      "name": "Mainsail 3D 打印仪表盘",
      "tagline": "给 Klipper 打印机配一个更漂亮的网页控制台。",
      "stack": [
        "Mainsail",
        "Klipper",
        "Dashboard"
      ],
      "mvp": "显示温度、进度、文件列表和摄像头预览。",
      "wow": 72,
      "useful": 84,
      "easy": 62,
      "source": "Mainsail",
      "url": "https://github.com/mainsail-crew/mainsail"
    }
  ]
};

const projects = tracks.flatMap((track) =>
  projectGroups[track.id].map((project, index) => ({
    id: `${track.id}-${index + 1}`,
    track: track.id,
    rank: index + 1,
    ...project,
  }))
);

const githubTrendingUpdatedAt = new Date("2026-06-29T18:52:00+08:00");

const githubStarProjects = [
  {
    repo: "calesthio/OpenMontage",
    name: "calesthio/OpenMontage",
    tagline: "开源 AI 视频制作系统，把 coding assistant 变成带流水线、工具和 Skill 的视频工作室。",
    language: "Python",
    totalStars: 27908,
    weeklyStars: 18703,
    trendingRank: 1,
    mvp: "先跑通一个 30 秒短片：脚本、素材、字幕和合成四步走完，再替换成自己的选题。",
    wow: 96,
    useful: 88,
    easy: 74,
    url: "https://github.com/calesthio/OpenMontage",
  },
  {
    repo: "DeusData/codebase-memory-mcp",
    name: "DeusData/codebase-memory-mcp",
    tagline: "高性能代码智能 MCP，把代码库索引成持久知识图谱，让 agent 少读文件也能理解项目。",
    language: "C",
    totalStars: 20687,
    weeklyStars: 8926,
    trendingRank: 2,
    mvp: "选一个中型仓库建索引，让 Codex 回答入口文件、模块关系和最短修改路径。",
    wow: 86,
    useful: 93,
    easy: 68,
    url: "https://github.com/DeusData/codebase-memory-mcp",
  },
  {
    repo: "Panniantong/Agent-Reach",
    name: "Panniantong/Agent-Reach",
    tagline: "给 AI agent 一双看见互联网的眼睛：读 Twitter、Reddit、YouTube、GitHub、小红书等。",
    language: "Python",
    totalStars: 45136,
    weeklyStars: 7692,
    trendingRank: 10,
    mvp: "演示让 agent 搜一个产品/技术话题，同时读取 X、Reddit、YouTube、GitHub 和小红书后生成证据摘要。",
    wow: 92,
    useful: 90,
    easy: 72,
    url: "https://github.com/Panniantong/Agent-Reach",
  },
  {
    repo: "ZhuLinsen/daily_stock_analysis",
    name: "ZhuLinsen/daily_stock_analysis",
    tagline: "LLM 驱动的多市场股票分析系统，集成行情、新闻、决策看板和自动推送。",
    language: "Python",
    totalStars: 51517,
    weeklyStars: 7045,
    trendingRank: 8,
    mvp: "先做一个只看 3 支股票的每日分析看板：行情、新闻摘要、风险提示和推送文案。",
    wow: 82,
    useful: 89,
    easy: 65,
    url: "https://github.com/ZhuLinsen/daily_stock_analysis",
  },
  {
    repo: "google-labs-code/design.md",
    name: "google-labs-code/design.md",
    tagline: "面向 coding agent 的设计身份说明格式，让 AI 长期记住品牌、组件和视觉系统。",
    language: "TypeScript",
    totalStars: 23057,
    weeklyStars: 6728,
    trendingRank: 3,
    mvp: "给一个已有网页写 DESIGN.md，再让 Codex 按同一视觉规则新增一个页面。",
    wow: 85,
    useful: 92,
    easy: 84,
    url: "https://github.com/google-labs-code/design.md",
  },
  {
    repo: "topoteretes/cognee",
    name: "topoteretes/cognee",
    tagline: "开源 AI 记忆平台，用自托管知识图谱给 agent 持久长期记忆。",
    language: "Python",
    totalStars: 25268,
    weeklyStars: 6064,
    trendingRank: 16,
    mvp: "导入一组项目笔记或 README，让 agent 跨会话记住背景并回答后续问题。",
    wow: 86,
    useful: 94,
    easy: 70,
    url: "https://github.com/topoteretes/cognee",
  },
  {
    repo: "JCodesMore/ai-website-cloner-template",
    name: "JCodesMore/ai-website-cloner-template",
    tagline: "用 AI coding agent 一条命令克隆任意网站，适合学习页面结构和复刻视觉风格。",
    language: "TypeScript",
    totalStars: 23257,
    weeklyStars: 5317,
    trendingRank: 6,
    mvp: "挑一个公开落地页，生成可运行的复刻版，再把品牌、文案和配色换成自己的项目。",
    wow: 90,
    useful: 86,
    easy: 82,
    url: "https://github.com/JCodesMore/ai-website-cloner-template",
  },
  {
    repo: "mukul975/Anthropic-Cybersecurity-Skills",
    name: "mukul975/Anthropic-Cybersecurity-Skills",
    tagline: "817 个结构化网络安全 Skill，覆盖攻防框架、AI 风险、安全审查和多平台 agent 使用。",
    language: "Python",
    totalStars: 22871,
    weeklyStars: 5212,
    trendingRank: 12,
    mvp: "选一个本地小项目，让 Codex 按安全 Skill 检查暴露密钥、危险依赖和权限风险。",
    wow: 83,
    useful: 91,
    easy: 73,
    url: "https://github.com/mukul975/Anthropic-Cybersecurity-Skills",
  },
  {
    repo: "palmier-io/palmier-pro",
    name: "palmier-io/palmier-pro",
    tagline: "为 AI 而生的 macOS 视频编辑器，适合把剪辑、字幕、素材整理交给 agent 辅助。",
    language: "Swift",
    totalStars: 9430,
    weeklyStars: 5034,
    trendingRank: 13,
    mvp: "围绕一个产品更新做 3 段素材、字幕和封面，验证 AI 辅助剪辑流程是否顺手。",
    wow: 88,
    useful: 84,
    easy: 69,
    url: "https://github.com/palmier-io/palmier-pro",
  },
  {
    repo: "jamiepine/voicebox",
    name: "jamiepine/voicebox",
    tagline: "开源 AI 语音工作室，支持克隆、听写和生成，适合做声音类 demo。",
    language: "TypeScript",
    totalStars: 35652,
    weeklyStars: 3883,
    trendingRank: 20,
    mvp: "做一个 15 秒中文配音 demo：输入文案、生成音频、下载并对比不同声音风格。",
    wow: 89,
    useful: 82,
    easy: 72,
    url: "https://github.com/jamiepine/voicebox",
  },
  {
    repo: "simplex-chat/simplex-chat",
    name: "simplex-chat/simplex-chat",
    tagline: "强调无用户标识的隐私通信网络，覆盖 iOS、Android 和桌面客户端。",
    language: "Haskell",
    totalStars: 15853,
    weeklyStars: 3218,
    trendingRank: 4,
    mvp: "不从零造聊天协议，先复刻一个隐私聊天产品页：解释无 ID 通信、会话邀请和本地加密。",
    wow: 80,
    useful: 87,
    easy: 60,
    url: "https://github.com/simplex-chat/simplex-chat",
  },
  {
    repo: "Stirling-Tools/Stirling-PDF",
    name: "Stirling-Tools/Stirling-PDF",
    tagline: "GitHub 上很火的 PDF 工具箱，可在任意设备上合并、转换、编辑和 OCR PDF。",
    language: "Java",
    totalStars: 85086,
    weeklyStars: 3079,
    trendingRank: 18,
    mvp: "先跑通本地 PDF 合并、压缩和转图片三件套，再加一个中文操作入口。",
    wow: 76,
    useful: 95,
    easy: 74,
    url: "https://github.com/Stirling-Tools/Stirling-PDF",
  },
].map((project, index) => ({
  id: `stars-${index + 1}`,
  track: "stars",
  rank: index + 1,
  source: "GitHub",
  stack: [
    project.language,
    `+${formatCount(project.weeklyStars)} / week`,
    `Trending #${project.trendingRank}`,
  ],
  ...project,
}));

const starterOptions = {
  time: [
    { id: "quick", label: "今天 2 小时", description: "优先推荐马上能跑起来的轻量项目。" },
    { id: "weekend", label: "周末 1-2 天", description: "平衡完成度和惊喜感。" },
    { id: "week", label: "一周慢慢做", description: "允许更多集成、部署和打磨。" },
  ],
  goal: [
    { id: "fun", label: "给朋友演示", description: "偏好互动、视觉、游戏和 wow moment。" },
    { id: "useful", label: "自己日常用", description: "偏好工作流、资料整理和效率工具。" },
    { id: "hardware", label: "动手搓设备", description: "偏好有真实设备反馈的硬件项目。" },
    { id: "frontier", label: "追前沿动态", description: "偏好本周增长最快的新鲜 GitHub 项目。" },
  ],
  skill: [
    { id: "beginner", label: "刚开始", description: "更看重友好度、步骤清晰和少踩坑。" },
    { id: "builder", label: "会一点", description: "可以接受前端、脚本和 API 集成。" },
    { id: "tinkerer", label: "愿意折腾", description: "愿意调环境、接硬件或做复杂流程。" },
  ],
  hardware: [
    { id: "none", label: "不买硬件", description: "只推荐网页、软件和本地工具。" },
    { id: "small", label: "几十块可以", description: "可以接受 ESP32、传感器和小屏。" },
    { id: "ready", label: "已经有设备", description: "可以推荐树莓派、打印机、智能家居。" },
  ],
};

const starterGroupLabels = {
  time: "时间",
  goal: "目标",
  skill: "熟练度",
  hardware: "硬件",
};

const starterGroupHints = {
  time: "这次准备投入多久",
  goal: "做出来主要给谁用",
  skill: "你愿意折腾到哪一步",
  hardware: "是否接受买点小东西",
};

const starterGroupStyles = {
  time: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#225CFF",
    label: { x: 50, y: 31 },
    positions: [
      { x: 27, y: 23 },
      { x: 52, y: 18 },
      { x: 76, y: 26 },
    ],
  },
  goal: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#18A058",
    label: { x: 30, y: 55 },
    positions: [
      { x: 22, y: 38 },
      { x: 14, y: 53 },
      { x: 24, y: 68 },
      { x: 49, y: 72 },
    ],
  },
  skill: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#FF6A3D",
    label: { x: 70, y: 55 },
    positions: [
      { x: 77, y: 38 },
      { x: 86, y: 53 },
      { x: 72, y: 67 },
    ],
  },
  hardware: {
    x: 50,
    y: 50,
    width: 100,
    height: 100,
    tone: "#111827",
    label: { x: 50, y: 71 },
    positions: [
      { x: 29, y: 88 },
      { x: 54, y: 90 },
      { x: 77, y: 86 },
    ],
  },
};

const starterLabels = Object.fromEntries(
  Object.entries(starterOptions).map(([key, options]) => [
    key,
    Object.fromEntries(options.map((option) => [option.id, option.label])),
  ])
);

const starterState = {
  time: "weekend",
  goal: "fun",
  skill: "beginner",
  hardware: "none",
};

const state = {
  track: "all",
  metric: "wow",
  query: "",
};

const boardThemes = {
  all: {
    primary: "#111827",
    soft: "#f8fafc",
    shadow: "rgba(17, 24, 39, 0.08)",
  },
  fun: {
    primary: "#225CFF",
    soft: "#eef4ff",
    shadow: "#d9f85d",
  },
  useful: {
    primary: "#18A058",
    soft: "#ecfdf3",
    shadow: "#b8f7d4",
  },
  hardware: {
    primary: "#FF6A3D",
    soft: "#fff3ea",
    shadow: "#ffe08a",
  },
  stars: {
    primary: "#111827",
    soft: "#f4f6f8",
    shadow: "#d9f85d",
  },
};

const focusHeaderNotes = {
  fun: ["互动反馈优先", "一天内可演示", "适合做给朋友看"],
  useful: ["日常工作流优先", "做完马上能用", "适合长期迭代"],
  hardware: ["真实设备反馈", "桌面可见成果", "适合边买边做"],
  stars: ["本周增长优先", "GitHub Trending 候选", "适合追前沿动态"],
};

const focusPalettes = {
  fun: ["#225CFF", "#4B7BFF", "#0EA5E9"],
  useful: ["#18A058", "#0F766E", "#65A30D"],
  hardware: ["#FF6A3D", "#F59E0B", "#B45309"],
  stars: ["#111827", "#225CFF", "#D9F85D"],
};

const app = document.querySelector("#app");
let stopRadar = null;
let planKeyHandler = null;
let isSearchComposing = false;
let searchRenderTimer = null;

function scheduleSearchRender(delay = 320) {
  if (searchRenderTimer) {
    window.clearTimeout(searchRenderTimer);
  }
  searchRenderTimer = window.setTimeout(() => {
    searchRenderTimer = null;
    if (isSearchComposing) return;
    syncUrlState();
    render({ preserveFocus: true });
  }, delay);
}

function cancelPendingSearchRender() {
  if (!searchRenderTimer) return;
  window.clearTimeout(searchRenderTimer);
  searchRenderTimer = null;
}

function hydrateStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const track = params.get("track");
  const metric = params.get("metric");
  const query = params.get("q");
  if (track === "all" || boardTabs.some((item) => item.id === track)) state.track = track;
  if (["wow", "useful", "easy"].includes(metric)) state.metric = metric;
  if (query) state.query = query;
}

function syncUrlState() {
  const params = new URLSearchParams();
  if (state.track !== "all") params.set("track", state.track);
  if (state.metric !== "wow") params.set("metric", state.metric);
  if (state.query.trim()) params.set("q", state.query.trim());
  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState(null, "", nextUrl);
}

function scoreLabel(project) {
  if (project.track === "stars") return "HOT";
  return "开工包";
}

function projectStack(project) {
  return Array.isArray(project.stack) ? project.stack : [];
}

function projectText(project) {
  return [
    project.name,
    project.tagline,
    project.mvp,
    project.source,
    project.repo ?? "",
    project.language ?? "",
    projectStack(project).join(" "),
  ]
    .join(" ")
    .toLowerCase();
}

function recommendedSkillIds(project, limit = 3) {
  const ids = [];
  const resultLimit = Math.min(limit, projectSkillLimits[project.name] ?? limit);
  const push = (skillId) => {
    if (skillCatalog[skillId] && !ids.includes(skillId)) ids.push(skillId);
  };

  (projectSkillOverrides[project.name] ?? []).forEach(push);

  const text = projectText(project);
  projectSkillRules.forEach((rule) => {
    if (rule.tracks && !rule.tracks.includes(project.track)) return;
    if (rule.match.test(text)) rule.skills.forEach(push);
  });

  (defaultSkillIds[project.track] ?? defaultSkillIds.fun).forEach(push);

  return ids.slice(0, resultLimit);
}

function recommendedSkills(project, limit = 3) {
  return recommendedSkillIds(project, limit).map((skillId) => ({
    id: skillId,
    ...skillCatalog[skillId],
  }));
}

function skillUseReason(project, skill) {
  const sourceName = project.source || project.repo || project.name;
  const useCases = {
    "github-cli": `用来 clone / fork「${sourceName}」、查看 README、issue 和 release，优先把原项目或最小示例跑起来。`,
    "agent-skills": "用来给 Codex 补一套工程化执行流程，适合需要稳定读代码、改代码、跑验收的开源项目复现。",
    "skillspector": "用来在安装或复用第三方 Skill 前先扫一遍风险，避免把危险命令和可疑权限直接交给 AI 执行。",
    "opencli": "用来抓取项目文档、配置教程、网页控制台或公开 API，把分散资料变成 AI 可执行的步骤。",
    "playwright-skill": `用来打开浏览器验收「${project.mvp}」里的关键按钮、上传、导出、移动端和重试流程。`,
    "vercel-deploy": "用来把网页 demo 部署成可分享预览链接，并检查构建、环境变量和上线后的基础状态。",
    "frontend-design": "用来按界面准则检查布局、文字溢出、移动端、焦点态和可访问性，让 demo 不只“能跑”也能交给别人用。",
    "shadcn-skill": "用来快速搭出表单、弹窗、设置面板、数据表格等常见 Web App 控件，减少手写低质量 UI。",
    "figma-skills": "用来整理界面结构、组件状态和设计上下文，适合需要设计稿、组件库或视觉对齐的项目。",
    "canva-skills": "用来快速产出封面、海报、社媒图和展示素材，适合视觉成果型项目。",
    "guizang-ppt": "用来把项目结果包装成网页 PPT、发布页或长图说明，适合需要一眼展示效果的项目。",
    "document-skills": "用来处理 PDF、Office、Markdown、OCR、表格和导出文件，适合资料、文档、报表类项目。",
    "supabase-skills": "用来处理登录、数据库表、权限、实时数据和存储，让需要后端状态的应用更快跑通。",
    "huggingface-skills": "用来处理模型、数据集、Gradio 或 Spaces demo，适合需要 AI 模型能力的项目。",
    "sentry-skills": "用来接入错误监控、定位线上异常和修复 issue，适合已经准备公开发布的项目。",
    "lark-cli": "用来把飞书文档、多维表格、会议纪要、日历和任务接进自动化，适合中文团队工作流项目。",
    "openai-skills": "用来查官方 Skill 安装与触发方式，给 Codex 补工具能力；它不是项目依赖，而是开工前的能力目录。",
    "openai-docs": "用来参考模型调用、流式输出、工具调用和结构化输出示例，适合需要接入 LLM 的项目。",
  };
  return useCases[skill.id] ?? skill.description;
}

function projectScale(project) {
  const text = projectText(project);
  let score = 1;

  if (project.easy < 52) score += 1.55;
  else if (project.easy < 65) score += 1.05;
  else if (project.easy < 78) score += 0.55;

  if (project.track === "hardware") score += 1.15;
  if (project.track === "stars") score += 0.45;
  if (/docker|compose|k8s|kubernetes|数据库|database|postgres|mysql|redis|supabase|auth|权限|登录/.test(text)) score += 0.65;
  if (/llm|rag|agent|openai|模型|gradio|hugging face|tts|voice|语音|大模型/.test(text)) score += 0.55;
  if (/gpu|cuda|本地模型|stable diffusion|vtuber|webxr|frigate|coral/.test(text)) score += 0.95;
  if (/esp32|raspberry|mqtt|zigbee|固件|烧录|传感器|硬件|3d 打印|lora|sdr/.test(text)) score += 0.75;
  if (/webgl|three|canvas|phaser|pixi|p5|音频|音乐|实时|摄像头|hand tracking/.test(text)) score += 0.35;
  if (project.easy >= 82) score -= 0.25;

  const value = Math.max(1, Math.min(5, Math.round(score * 2) / 2));
  const label = value <= 1.5 ? "轻松跑" : value <= 2.5 ? "有点折腾" : value <= 3.5 ? "需要耐心" : "新手慎入";
  const hint =
    value <= 1.5
      ? "适合直接丢给 AI 开始做，先跑一个最小 demo。"
      : value <= 2.5
        ? "适合新手尝试，但开工前要先确认依赖和账号。"
        : value <= 3.5
          ? "建议让 AI 先做体检，再按最短路径跑通示例。"
          : "先别盲目 clone，最好让 AI 把环境、配置和风险讲清楚再动手。";

  return { value, label, hint };
}

function projectVerdict(project) {
  const scale = projectScale(project);
  if (project.easy >= 76 && scale.value <= 2.5) {
    return {
      label: "推荐搓",
      tone: "good",
      reason: `这个项目反馈比较直接，适合先做出「${project.mvp}」这样的可展示 demo。`,
    };
  }
  if (scale.value >= 4 || project.easy <= 50) {
    return {
      label: "新手慎入",
      tone: "warn",
      reason: "它很有吸引力，但开工前最好先让 AI 查清依赖、配置和替代方案。",
    };
  }
  return {
    label: "可以试试",
    tone: "ok",
    reason: "适合用 AI 带着跑，但不要一上来做完整版，先收窄成一个最小可运行效果。",
  };
}

function projectPrepItems(project) {
  const text = projectText(project);
  const items = ["项目链接", "一台电脑"];

  if (/llm|rag|agent|openai|模型|大模型|copilot|chat/.test(text)) items.push("API Key 或模型服务");
  if (/docker|compose|open webui|dify|flowise|ragflow|n8n|paperless|immich/.test(text)) items.push("Docker");
  if (/数据库|database|postgres|mysql|redis|supabase|auth|登录|权限/.test(text)) items.push("数据库/账号配置");
  if (/pdf|office|word|excel|ppt|ocr|markdown|文档|票据|合同|发票/.test(text)) items.push("真实文件样本");
  if (/webgl|three|canvas|phaser|pixi|p5|白板|图表|可视化|音频|音乐|摄像头/.test(text)) items.push("现代浏览器");
  if (/esp32|raspberry|mqtt|zigbee|固件|烧录|传感器|硬件|3d 打印|lora|sdr/.test(text)) items.push("硬件配件和数据线");
  if (/网页抓取|crawler|搜索|opencli|飞书|微信|平台|api|rss/.test(text)) items.push("网络/平台账号");
  if (project.track === "stars") items.push("先读 README");

  return [...new Set(items)].slice(0, 5);
}

function projectRiskItems(project) {
  const text = projectText(project);
  const risks = [];

  if (project.easy < 58) risks.push("不要直接做完整版，先让 AI 找到最小可运行入口。");
  if (/llm|rag|agent|openai|模型|大模型|tts|voice|语音/.test(text)) risks.push("可能会卡在 API Key、模型选择或网络访问上。");
  if (/docker|compose|数据库|database|postgres|mysql|redis|supabase/.test(text)) risks.push("可能会卡在环境变量、端口或数据库连接上。");
  if (/esp32|raspberry|mqtt|zigbee|固件|烧录|传感器|硬件|3d 打印|lora|sdr/.test(text)) risks.push("可能会卡在接线、烧录、设备型号或驱动上。");
  if (/webgl|three|canvas|phaser|pixi|p5|webxr|摄像头|音频|音乐/.test(text)) risks.push("可能会卡在浏览器权限、素材路径或实时性能上。");
  if (/pdf|office|ocr|文档|票据|合同|发票|markdown/.test(text)) risks.push("最好准备真实样本，不然 demo 容易只剩空界面。");
  if (!risks.length) risks.push("先跑通原项目或官方示例，再决定要不要二次开发。");

  return [...new Set(risks)].slice(0, 3);
}

function renderSkillKit(project, options = {}) {
  const skills = recommendedSkills(project, options.compact ? 2 : 3);
  return `
    <div class="skill-kit">
      <div class="skill-kit-head">
        <span>推荐开工 Skill</span>
        <a class="skill-kit-radar-link" href="${skillRadarUrl}">完整榜单</a>
      </div>
      <div class="skill-chip-list">
        ${skills
          .map(
            (skill) => `
              <a class="skill-chip" href="${skill.url}" target="_blank" rel="noreferrer">
                <strong>${escapeHtml(skill.name)}</strong>
                <em>${escapeHtml(skill.signal)}</em>
              </a>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function formatCount(value) {
  return new Intl.NumberFormat("en-US").format(value);
}

function formatUpdatedDate(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function recommendationPool() {
  return [...projects, ...githubStarProjects];
}

function projectById(id) {
  return recommendationPool().find((project) => project.id === id);
}

function starterRecommendations() {
  const scored = recommendationPool()
    .map((project) => ({
      project,
      score: starterScore(project),
    }))
    .sort((a, b) => b.score - a.score || a.project.rank - b.project.rank);

  const picked = [];
  const trackCounts = {};
  for (const item of scored) {
    const track = item.project.track;
    if ((trackCounts[track] ?? 0) >= 2) continue;
    picked.push(item);
    trackCounts[track] = (trackCounts[track] ?? 0) + 1;
    if (picked.length === 3) break;
  }
  return picked;
}

function starterScore(project) {
  let score = project.easy * 1.05 + project.wow * 0.45 + project.useful * 0.45;

  if (starterState.time === "quick") score += project.easy * 0.85;
  if (starterState.time === "weekend") score += (project.easy + project.wow) * 0.35;
  if (starterState.time === "week") score += project.useful * 0.55 + project.wow * 0.25;

  if (starterState.goal === "fun") score += project.wow * 1.05 + (project.track === "fun" ? 40 : 0);
  if (starterState.goal === "useful") {
    score += project.useful * 1.05 + (project.track === "useful" ? 42 : 0);
  }
  if (starterState.goal === "hardware") {
    score += project.track === "hardware" ? 90 : -35;
  }
  if (starterState.goal === "frontier") {
    score += project.track === "stars" ? 96 : 0;
    score += project.weeklyStars ? Math.min(46, project.weeklyStars / 420) : 0;
  }

  if (starterState.skill === "beginner") score += project.easy * 0.75;
  if (starterState.skill === "builder") score += project.useful * 0.35 + project.wow * 0.25;
  if (starterState.skill === "tinkerer") score += project.wow * 0.45 + (project.track === "hardware" ? 26 : 0);

  if (starterState.hardware === "none" && project.track === "hardware") score -= 140;
  if (starterState.hardware === "small" && project.track === "hardware") score += 28;
  if (starterState.hardware === "ready" && project.track === "hardware") score += 62;
  if (starterState.hardware !== "none" && starterState.goal !== "hardware" && project.track === "hardware") {
    score += 12;
  }

  score += Math.max(0, 31 - project.rank) * 0.35;
  return score;
}

function starterReason(project) {
  const track = trackById(project.track);
  const timeText = starterLabels.time[starterState.time];
  const goalText = starterLabels.goal[starterState.goal];
  if (project.track === "stars") {
    return `适合想“${goalText}”的新手：本周增长 +${formatCount(project.weeklyStars)} stars，先复刻一个最小使用场景就能摸到前沿脉搏。`;
  }
  if (project.track === "hardware") {
    return `适合“${timeText}”动手：反馈来自真实设备，按 MVP 做出一个可见/可测的小结果。`;
  }
  return `适合“${timeText}”开工：${track.short}方向匹配“${goalText}”，先把 MVP 做成可演示版本。`;
}

const projectTagOverrides = {
  "AI 小镇 / NPC 社交游戏": ["AI 角色实验", "角色记忆", "小地图剧情"],
  "手势控制小游戏 / 手势乐器": ["摄像头手势", "体感控制", "音效反馈"],
  "节点式视觉实验室": ["节点编排", "参数画布", "导出海报"],
  "浏览器里的迷你音频工作站": ["波形剪辑", "变声采样", "本地导出"],
  "物理沙盒 / 像素炼金术": ["像素沙盒", "材料反应", "规则涌现"],
  "浏览器现场视觉合成器": ["实时视觉", "代码演出", "节奏变形"],
  "生成式海报 / 壁纸工厂": ["参数海报", "随机种子", "PNG 导出"],
  "多人涂鸦白板游戏": ["房间码协作", "涂鸦投票", "破冰游戏"],
  "24 小时人生拨盘": ["拖拽时间盘", "日复盘", "习惯分配"],
  "产品发布短片生成器": ["截图成片", "自动字幕", "发布短片"],
  "手绘风白板 / 灵感草图板": ["手绘流程", "无限画布", "分享草图"],
  "3D 房间 / 作品集小宇宙": ["3D 房间", "物件链接", "漫游主页"],
  "WebGL 流体玩具": ["流体墨水", "触摸涂抹", "截图背景"],
  "算法节奏乐队": ["代码作曲", "四轨循环", "Pattern 分享"],
  "浏览器合成器面板": ["网页合成器", "旋钮调音", "MIDI 弹奏"],
  "2D 闯关小游戏": ["横版关卡", "金币敌人", "完整循环"],
  "街机风小游戏原型机": ["街机挑战", "计分重开", "快速原型"],
  "物理弹球 / 多米诺实验": ["碰撞物理", "弹球计分", "重力滑杆"],
  "拖拽式海报编辑器": ["拖拽排版", "图层编辑", "PNG 导出"],
  "代码动画课件": ["代码动画", "时间轴", "课程图解"],
  "React 视频渲染工厂": ["组件转视频", "数据镜头", "MP4 导出"],
  "节点流程玩具": ["拖线流程", "节点重放", "Agent 画布"],
  "文本生成图表魔法": ["文本出图", "实时预览", "SVG 导出"],
  "数据可视化玩具箱": ["CSV 探索", "关系气泡图", "Hover 详情"],
  "手绘风 UI 组件参考": ["手绘组件", "草稿质感", "原型可视化"],
  "浏览器 3D 小展厅 / A-Frame 示例": ["3D 展厅", "五件展品", "漫游说明牌"],
  "像素 / 粒子编辑器": ["粒子编辑器", "配置导出", "PixiJS 画布"],
  "React 3D 产品模型参考": ["源码参考", "交互热点", "旋转截图"],
  "字体扭曲效果库": ["字体扭曲", "GLSL 标题", "封面效果"],
  "周末游戏引擎原型": ["游戏切片", "Web 导出", "胜负循环"],
  "个人 AI 工作台": ["文件问答", "来源引用", "私人 AI 工作台"],
  "自动化工作流中枢": ["链接到表格", "Webhook 自动化", "AI 通知"],
  "信息雷达 / 周报机器人": ["多源扫描", "去重打分", "周报生成"],
  "收藏夹 + AI 阅读收件箱": ["链接归档", "正文抓取", "AI 标签"],
  "票据合同 OCR 文档库": ["OCR 归档", "合同发票", "全文搜索"],
  "私人相册 + AI 搜索": ["相册 AI 搜索", "人物地点", "家庭照片库"],
  "个人财务 / 订阅管理器": ["订阅识别", "月度预算", "支出图表"],
  "PDF 万能工具箱": ["PDF 合并", "本地 OCR", "文档工具箱"],
  "服务健康监控面板": ["URL 监控", "故障报警", "公开状态页"],
  "食谱 + 购物清单 + 冰箱库存": ["菜谱拆解", "购物清单", "冰箱库存"],
  "闪念备忘录 / 个人微博": ["闪念输入", "日历回看", "全文搜索"],
  "Bookmark Everything 档案馆": ["截图收藏", "AI 标签", "链接档案"],
  "本地 Notion 式工作台": ["离线工作台", "任务看板", "数据库空间"],
  "白板 + 知识库混合空间": ["文档白板", "资料互链", "选题工作区"],
  "双链知识库 / 学习卡片": ["双链笔记", "标签图谱", "复习清单"],
  "团队 Wiki / SOP 中心": ["团队 SOP", "权限搜索", "模板文档"],
  "私人手册站": ["分层手册", "公开分享", "生活百科"],
  "开源文档协作站": ["轻量 Confluence", "评论权限", "团队模板"],
  "无代码数据库后台": ["CSV 变后台", "表单视图", "运营台账"],
  "表格数据库 / 小型 CRM": ["小型 CRM", "报价排期", "自动提醒"],
  "内部工具搭建器": ["拖拽后台", "状态变更", "商单排期"],
  "私人知识问答库": ["空间问答", "文件检索", "私人资料库"],
  "AI 应用工作流平台": ["提示词应用", "工具调用", "选题助手"],
  "可视化 Agent 编排器": ["RAG 节点", "可视化编排", "检索链"],
  "深度 RAG 文档助手": ["深度文档问答", "PDF OCR", "引用追问"],
  "网页抓取 / 资料管道": ["网页转 Markdown", "干净正文", "资料管道"],
  "私人元搜索引擎": ["元搜索", "无广告", "资料入口"],
  "跨设备文件同步": ["跨设备同步", "P2P 文件夹", "冲突提示"],
  "家庭密码库": ["家庭密码库", "2FA 导入", "自托管账号"],
  "财务火控仪表盘": ["账单规则", "预算标签", "月度财务"],
  "ESP32 电子墨水日历牌": ["桌面日历牌", "低功耗刷新", "天气待办"],
  "WLED 音乐律动灯": ["灯带律动", "氛围场景", "手机控制"],
  "Magic Mirror 智能镜子": ["智能镜面", "家庭信息面板", "模块化屏幕"],
  "Meshtastic 离线通讯节点": ["LoRa 离线通讯", "节点地图", "频道消息"],
  "QMK 宏键盘 / 工作流控制台": ["宏键控制台", "HID 快捷键", "工作流按键"],
  "本地 AI 摄像头门铃": ["本地 AI 识别", "门铃事件", "片段推送"],
  "小智 ESP32 AI 语音终端": ["语音终端", "按键唤醒", "工具调用"],
  "Tasmota 家电控制台": ["插座控制", "MQTT 规则", "功耗曲线"],
  "Pi-hole 家庭网络护城河": ["DNS 拦截", "家庭网络", "拦截统计"],
  "智能植物监测器": ["土壤湿度", "缺水提醒", "植物看护"],
  "ESPHome 全屋传感器平台": ["YAML 传感器", "HA 曲线", "温湿度节点"],
  "Home Assistant 家庭中枢": ["全屋中枢", "早晚自动化", "手机面板"],
  "OpenMQTTGateway 万能网关": ["蓝牙 433 网关", "MQTT 桥接", "信号转换"],
  "Zigbee2MQTT 设备桥": ["Zigbee 本地桥", "门磁按钮", "厂商解绑"],
  "ESP32-CAM 口袋摄像头": ["实时预览", "延时摄影", "小板相机"],
  "ESPresense 房间定位": ["BLE 房间定位", "人在何处", "自动化触发"],
  "Marlin 3D 打印机固件": ["打印固件", "温控步进", "自动调平"],
  "Klipper 高速打印控制器": ["高速打印", "输入整形", "树莓派控制"],
  "OctoPrint 打印机监控台": ["G-code 上传", "摄像头监控", "完成通知"],
  "ZMK 无线机械键盘": ["蓝牙键盘", "分体布局", "双层快捷键"],
  "KMK CircuitPython 键盘": ["Python 键盘", "旋钮宏", "层切换"],
  "OpenSprinkler 智能浇灌": ["智能浇灌", "下雨跳过", "水阀日程"],
  "OpenAstroTracker 星空追踪器": ["星空追踪", "步进赤道仪", "长曝光"],
  "SmartKnob 触感旋钮": ["力反馈旋钮", "屏幕模式", "阻尼手感"],
  "ratgdo 车库门控制器": ["车库门状态", "本地控制", "离家提醒"],
  "AirGradient 空气质量站": ["CO2/PM 监测", "空气曲线", "超标提醒"],
  "OpenDTU 太阳能监控": ["太阳能监控", "实时功率", "日发电量"],
  "rtl_433 无线传感器雷达": ["SDR 监听", "433 信号", "传感器雷达"],
  "openHASP 墙面控制屏": ["墙面触屏", "场景面板", "MQTT 页面"],
  "Mainsail 3D 打印仪表盘": ["Klipper 仪表盘", "温度进度", "文件预览"],
  "harry0703/MoneyPrinterTurbo": ["短视频流水线", "本周爆发", "脚本到成片"],
  "Lum1104/Understand-Anything": ["代码图谱", "仓库问答", "模块关系"],
  "microsoft/markitdown": ["文件转 Markdown", "AI 阅读入口", "Office 处理"],
  "Leonxlnx/taste-skill": ["去模板味", "审美增强", "输出对比"],
  "colbymchenry/codegraph": ["本地图谱", "少用 Token", "架构问答"],
  "affaan-m/ECC": ["代理优化", "记忆流程", "开发环境增强"],
  "rohitg00/ai-engineering-from-scratch": ["AI 工程路线", "Notebook 实践", "学习进度板"],
  "mukul975/Anthropic-Cybersecurity-Skills": ["安全技能库", "框架映射", "审查流程"],
  "hardikpandya/stop-slop": ["去 AI 味", "自然改写", "Skill 文件"],
  "calesthio/OpenMontage": ["AI 视频工厂", "脚本到成片", "本周爆发"],
  "google-labs-code/design.md": ["设计记忆", "AI 视觉规范", "DESIGN.md"],
  "topoteretes/cognee": ["长期记忆", "知识图谱", "Agent 记住上下文"],
  "JCodesMore/ai-website-cloner-template": ["网页克隆", "视觉复刻", "一条命令"],
  "ZhuLinsen/daily_stock_analysis": ["行情看板", "新闻摘要", "自动推送"],
  "chopratejas/headroom": ["Token 压缩", "长日志救星", "RAG 节省"],
  "DeusData/codebase-memory-mcp": ["代码库记忆", "少用 Token", "MCP 索引"],
  "Panniantong/Agent-Reach": ["全网搜索", "零 API 费", "多平台证据"],
  "palmier-io/palmier-pro": ["AI 视频编辑", "macOS 剪辑", "字幕素材"],
  "jamiepine/voicebox": ["AI 语音工作室", "声音克隆", "配音生成"],
  "simplex-chat/simplex-chat": ["隐私聊天", "无用户 ID", "端到端通信"],
  "Stirling-Tools/Stirling-PDF": ["PDF 工具箱", "本地处理", "OCR 转换"],
  "anthropics/knowledge-work-plugins": ["知识工作插件", "资料整理", "会议准备"],
  "EveryInc/compound-engineering-plugin": ["工程拆解", "任务切片", "可执行 Prompt"],
};

const projectTagRules = [
  { match: /ai town|npc|小镇|角色每天|角色.*记忆/, tags: ["AI 角色实验", "角色记忆", "小地图剧情"] },
  { match: /手势|gesture|mediapipe|张手|握拳|手掌/, tags: ["摄像头手势", "体感控制", "即时反馈"] },
  { match: /节点式|node graph|graphite|react flow|flowise|拖线|可视化 agent/, tags: ["节点编排", "拖拽搭建", "流程可视化"] },
  { match: /waveform|audiomass|音频工作站|剪切|采样/, tags: ["波形编辑", "声音实验", "本地保存"] },
  { match: /沙子|sandspiel|像素炼金|cellular|材料/, tags: ["规则涌现", "像素沙盒", "参数玩具"] },
  { match: /hydra|流体|fluid|shader|视觉合成|粒子舞台/, tags: ["实时视觉", "鼠标即反馈", "舞台背景"] },
  { match: /海报|壁纸|poster|fabric|rough|blotter|字体|封面|贴纸/, tags: ["可导出作品", "设计玩具", "封面生成"] },
  { match: /tldraw|excalidraw|手绘风白板|涂鸦|猜词|破冰|无限画布/, tags: ["多人协作", "破冰玩法", "画布分享"] },
  { match: /24 小时|拨盘|时间|习惯|复盘|okr/, tags: ["自我复盘", "拖拽规划", "日常可用"] },
  { match: /remotion|motion canvas|montage|视频|短片|字幕|分镜|配音/, tags: ["发布短片", "自动分镜", "可导出视频"] },
  { match: /3d 房间|three|r3f|react three|webxr|a-frame|gltf|展厅|产品模型|模型放进网页/, tags: ["沉浸展示", "3D 作品集", "热点互动"] },
  { match: /phaser|kaplay|godot|matter\.js|闯关|弹球|街机|敌人|金币|横版|挑战关/, tags: ["完整游戏循环", "关卡原型", "失败重开"] },
  { match: /tone|strudel|合成器|节奏|音乐|乐器|bpm|旋钮|midi/, tags: ["调参即出声", "节奏循环", "声音反馈"] },
  { match: /mermaid|d3|csv|图表|流程图|时序图|关系图|时间线|数据可视化/, tags: ["一键图解", "数据探索", "可视化表达"] },
  { match: /open webui|anythingllm|ragflow|rag|文件问答|知识问答|引用来源/, tags: ["文件问答", "引用来源", "私人知识库"] },
  { match: /dify|agent|workflow|提示词|工具调用|应用工作流/, tags: ["AI 应用编排", "工具调用", "可发布应用"] },
  { match: /n8n|webhook|自动化|流水线|提醒|表格/, tags: ["自动流水线", "少手工操作", "工作流串联"] },
  { match: /product hunt|hacker news|hn|rss|周报|信息雷达|github 和 rss/, tags: ["信息雷达", "每周更新", "可发周报"] },
  { match: /linkwarden|karakeep|bookmark|收藏|阅读收件箱|链接/, tags: ["收藏归档", "自动摘要", "资料入口"] },
  { match: /paperless|ocr|票据|合同|发票|报销/, tags: ["票据合同整理", "全文搜索", "省心归档"] },
  { match: /immich|相册|照片|人物|地点/, tags: ["相册搜索", "画面标签", "家庭资料库"] },
  { match: /actual|firefly|财务|预算|订阅|账单/, tags: ["预算看板", "订阅提醒", "钱流可见"] },
  { match: /stirling|markitdown|pdf|office|markdown|文档转换/, tags: ["文档转换", "本地工具箱", "AI 阅读入口"] },
  { match: /uptime|状态页|监控|报警|服务健康/, tags: ["服务报警", "公开状态页", "运维看板"] },
  { match: /mealie|食谱|购物清单|冰箱/, tags: ["购物清单", "菜谱拆解", "家庭流程"] },
  { match: /memos|logseq|appflowy|affine|outline|bookstack|docmost|wiki|sop|笔记|知识库/, tags: ["知识沉淀", "双链整理", "团队 SOP"] },
  { match: /nocodb|baserow|budibase|crm|数据库|运营后台|表单/, tags: ["运营后台", "表格变应用", "客户台账"] },
  { match: /firecrawl|crawler|抓取|searxng|搜索引擎|元搜索/, tags: ["资料管道", "搜索入口", "干净正文"] },
  { match: /syncthing|同步|文件同步/, tags: ["跨设备同步", "不靠网盘", "文件保险"] },
  { match: /vaultwarden|密码|bitwarden/, tags: ["家庭密码库", "账号保险", "自托管"] },
  { match: /moneyprinter|短视频自动生成/, tags: ["短视频流水线", "AI 变现感", "脚本到成片"] },
  { match: /understand-anything|codegraph|代码图谱|仓库|模块关系/, tags: ["代码图谱", "仓库问答", "模块关系"] },
  { match: /taste-skill|stop-slop|ai 文风|文风痕迹|审美 skill|减少无聊/, tags: ["去 AI 味", "审美增强", "文案改造"] },
  { match: /headroom|token|压缩|日志/, tags: ["Token 压缩", "长日志救星", "省上下文"] },
  { match: /claude code|codex|cursor|代理|engineering|compound|skills|插件|学习路线|安全/, tags: ["工程方法", "技能库", "可复用流程"] },
  { match: /电子墨水|e-paper|日历牌|低功耗/, tags: ["桌面信息牌", "低功耗显示", "日程天气"] },
  { match: /wled|灯带|led|律动灯|音乐模式|氛围/, tags: ["房间氛围灯", "音乐律动", "手机控制"] },
  { match: /mirror|镜子|半透镜/, tags: ["家庭信息镜", "一眼查看", "客厅装置"] },
  { match: /meshtastic|lora|离线通讯/, tags: ["离线通讯", "节点地图", "户外可玩"] },
  { match: /qmk|zmk|kmk|键盘|宏键盘|快捷键|hid/, tags: ["工作流按键", "快捷键控制台", "可天天用"] },
  { match: /frigate|门铃|摄像头|人形|包裹|安防/, tags: ["本地识别", "安防提醒", "事件片段"] },
  { match: /xiaozhi|语音终端|speech|麦克风|喇叭/, tags: ["桌面语音终端", "按键唤醒", "本地工具调用"] },
  { match: /tasmota|home assistant|esphome|openmqtt|zigbee|mqtt|智能家居|门磁|传感器/, tags: ["本地智能家居", "设备联动", "自动化场景"] },
  { match: /pi-hole|dns|广告拦截|网络统计/, tags: ["家庭网络净化", "拦截统计", "全家可用"] },
  { match: /智能植物|植物监测|浇灌|sprinkler|土壤湿度|缺水提醒|水阀/, tags: ["植物看护", "自动浇水", "传感提醒"] },
  { match: /3d 打印|marlin|klipper|octoprint|mainsail|打印机/, tags: ["打印机调校", "远程监控", "进度可见"] },
  { match: /astro|星空|赤道仪|长曝光/, tags: ["星空追踪", "机械结构", "摄影增强"] },
  { match: /smartknob|力反馈|旋钮|motor|阻尼/, tags: ["力反馈旋钮", "实体手感", "桌面控制"] },
  { match: /airgradient|空气|co2|pm2.5/, tags: ["空气仪表盘", "超标提醒", "家庭健康"] },
  { match: /opendtu|太阳能|逆变器|发电/, tags: ["发电监控", "实时功率", "能源看板"] },
  { match: /rtl_433|sdr|433mhz|无线信号/, tags: ["无线信号雷达", "传感器监听", "频谱探索"] },
  { match: /openhasp|墙面|触摸控制屏/, tags: ["墙面控制屏", "场景面板", "旧屏复活"] },
];

function projectExperienceTags(project, limit = 4) {
  const text = projectText(project);
  const overrideTags = projectTagOverrides[project.name] ?? [];
  const tags = [...overrideTags];

  if (!overrideTags.length) {
    projectTagRules.forEach((rule) => {
      if (rule.match.test(text)) tags.push(...rule.tags);
    });
  }

  if (project.weeklyStars) tags.push(`本周 +${formatCount(project.weeklyStars)}`);

  if (tags.length < 2 && project.track === "fun") tags.push("互动 Demo");
  if (tags.length < 2 && project.track === "useful") tags.push("真实工作流");
  if (tags.length < 2 && project.track === "hardware") tags.push("实体反馈");
  if (tags.length < 2 && project.track === "stars") tags.push("前沿增长");

  if (project.wow >= 90) tags.push("强演示");
  else if (project.wow >= 82) tags.push("效果直观");
  if (project.useful >= 90) tags.push("能进日常");
  else if (project.useful >= 84) tags.push("长期可用");
  if (project.easy >= 78) tags.push("新手友好");
  else if (project.easy <= 55) tags.push("进阶挑战");

  return [...new Set(tags)].slice(0, limit);
}

function buildStarterPlan(project) {
  const track = trackById(project.track);
  const estimate = project.easy >= 78 ? "2-4 小时" : project.easy >= 62 ? "1-2 天" : "3-7 天";
  const sourceName = project.source || project.repo || project.name;
  const sourceUrl = project.url || "#";
  const demoUrl = project.demoUrl || "";
  const primaryUrl = demoUrl || sourceUrl;
  const sourceType = sourceUrl.includes("github.com") ? "GitHub 项目" : "参考项目/官方文档";
  const skills = recommendedSkills(project);
  const scale = projectScale(project);
  const verdict = projectVerdict(project);
  const prepItems = projectPrepItems(project);
  const risks = projectRiskItems(project);
  const skillPromptLines = skills
    .map((skill, index) => `${index + 1}. ${skill.name}：${skill.url}\n   什么时候用：${skillUseReason(project, skill)}`)
    .join("\n");
  const codexPrompt = [
    "你是 Codex，请帮我判断并复现一个 GitHub / 开源项目。",
    "",
    `项目名称：${project.name}`,
    `项目方向：${track.title}`,
    `项目链接：${sourceUrl}`,
    demoUrl ? `演示入口：${demoUrl}` : "",
    `参考来源：${sourceName}`,
    `我想先做出的效果：${project.mvp}`,
    "",
    "请先不要急着写代码，先做一次项目体检：",
    `1. 阅读这个${sourceType}的 README、安装说明、示例和依赖文件。`,
    "2. 基于项目文档和实际依赖，评估它对新手是否值得搓、难度大概在哪里、开工前需要准备什么。",
    "3. 找出最可能卡住的地方，例如 API Key、Docker、数据库、模型、硬件、浏览器权限或网络问题。",
    "4. 如果没有明显硬阻碍，请优先按原项目文档在我电脑上跑起来，不要一上来重写或缩水成简化版。",
    "5. 只有当原项目因为账号、依赖、网络、硬件或服务限制暂时跑不通时，才做保真降级 demo；降级也要保留它最核心、最好玩的玩法和交互。",
    `6. 对这个项目，降级版至少要保留“${project.mvp}”这类核心效果，不能只做一个普通空壳页面。`,
    "7. 遇到报错时，请先定位原因，再给出修复方案，不要盲目重装。",
    "",
    "可参考的 Skill / 工具链接：",
    skillPromptLines,
  ].join("\n");

  return {
    estimate,
    sourceName,
    sourceUrl,
    demoUrl,
    primaryUrl,
    skills,
    scale,
    verdict,
    prepItems,
    risks,
    codexPrompt,
  };
}

function projectPrimaryUrl(project) {
  return project.demoUrl || project.url || "#";
}

function projectPrimaryActionLabel(project) {
  return project.demoUrl ? "看演示" : "看来源";
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function filteredProjects() {
  if (state.track === "stars") {
    return githubStarProjects.filter(matchesQuery).sort((a, b) => a.rank - b.rank);
  }

  return projects
    .filter((project) => state.track === "all" || project.track === state.track)
    .filter(matchesQuery)
    .sort((a, b) => {
      if (state.track !== "all") return a.rank - b.rank;
      return trackOrder(a.track) - trackOrder(b.track) || a.rank - b.rank;
    });
}

function matchesQuery(project) {
  const haystack = [
    project.name,
    project.tagline,
    projectStack(project).join(" "),
    project.mvp,
    project.source,
    project.repo ?? "",
    project.language ?? "",
    project.weeklyStars ? String(project.weeklyStars) : "",
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(state.query.toLowerCase().trim());
}

function trackOrder(id) {
  return tracks.findIndex((track) => track.id === id);
}

function projectsForTrack(trackId) {
  return projects
    .filter((project) => project.track === trackId)
    .filter(matchesQuery)
    .sort((a, b) => a.rank - b.rank);
}

function trackById(id) {
  return boardTabs.find((track) => track.id === id);
}

function activeTheme() {
  return boardThemes[state.track] ?? boardThemes.all;
}

function render(options = {}) {
  const activeId = options.preserveFocus ? document.activeElement?.id : null;
  const selectionStart =
    options.preserveFocus && document.activeElement?.selectionStart !== undefined
      ? document.activeElement.selectionStart
      : null;
  const visible = filteredProjects();
  const theme = activeTheme();
  const isFocusedBoard = state.track !== "all";
  if (stopRadar) {
    stopRadar();
    stopRadar = null;
  }
  app.innerHTML = `
    <section class="hero">
      <canvas class="radar-canvas" id="radarCanvas" aria-hidden="true"></canvas>
      <div class="hero-shell">
        <header class="topbar">
          <a class="brand" href="#top" aria-label="Vibe Coding 雷达">
            <span class="brand-mark"></span>
            <span>Vibe Coding 雷达</span>
          </a>
          <nav class="topnav" aria-label="榜单分组">
            ${boardTabs
              .map(
                (track) =>
                  `<button class="nav-pill ${state.track === track.id ? "active" : ""}" data-track="${track.id}">${track.nav ?? track.short}</button>`
              )
              .join("")}
            <a class="nav-pill nav-pill-link nav-pill-skill" href="${skillRadarUrl}">必装 Skill</a>
            <a class="nav-pill nav-pill-link nav-pill-skill" href="${codexUsesUrl}">Codex 用法</a>
          </nav>
        </header>

        <div class="hero-grid" id="top">
          <div class="hero-copy">
            <p class="kicker">Beginner-friendly project board · 更新 ${formatUpdatedDate(githubTrendingUpdatedAt)}</p>
            <h1>
              <span>Vibe Coding</span>
              <span>雷达</span>
            </h1>
            <p class="hero-lede">
              给刚开始 Coding 的新手，把好玩、好用、好搓（硬件）三条路线整理成一张 90 项可分享榜单：
              每个项目都有 MVP、体验标签、参考来源和三维评分。现在还能按时间、目标和经验生成适合你的开工清单。
            </p>
            <div class="update-schedule" aria-label="更新时间">
              <span>每周五 12:00 更新</span>
              <strong>趣味项目库清单</strong>
              <strong>必装 Skill</strong>
            </div>
            <div class="hero-actions">
              <a class="primary-link" href="#starter">适合我的项目</a>
              <a class="secondary-link" href="#board">查看榜单</a>
              <a class="secondary-link" href="#star-projects">明星项目</a>
              <a class="secondary-link" href="${skillRadarUrl}">必装 Skill</a>
              <a class="secondary-link" href="${codexUsesUrl}">Codex 用法</a>
            </div>
            <a class="skill-install-card" href="${skillRadarUrl}#vibe-coding-radar-skill" aria-label="查看 Vibe Coding Radar Skill">
              <span>Installable Skill</span>
              <strong>Vibe Coding Radar</strong>
              <em>找项目 · 写开工提示词 · 配 Skill</em>
            </a>
          </div>
          <aside class="hero-panel" aria-label="榜单概览">
            <div class="panel-head">
              <span>Selection Index</span>
              <strong>${projects.length}</strong>
            </div>
            <div class="metric-grid">
              <div>
                <span>Tracks</span>
                <strong>3+1</strong>
              </div>
              <div>
                <span>Top score</span>
                <strong>98</strong>
              </div>
              <div>
                <span>MVP span</span>
                <strong>1-7d</strong>
              </div>
              <div>
                <span>Rising</span>
                <strong>${githubStarProjects.length}</strong>
              </div>
            </div>
            <div class="priority-strip">
              <span style="--size: 97%"></span>
              <span style="--size: 91%"></span>
              <span style="--size: 88%"></span>
            </div>
          </aside>
        </div>
      </div>
    </section>

    ${renderStarShowcase()}

    ${renderStarterAdvisor()}

    <section
      class="section-shell board-shell ${isFocusedBoard ? `board-focus board-${state.track}` : "board-all"}"
      id="board"
      style="--mode-primary: ${theme.primary}; --mode-soft: ${theme.soft}; --mode-shadow: ${theme.shadow};"
    >
      <div class="control-row">
        <div>
          <p class="section-kicker">Project Board</p>
          <h2>按你的目标挑项目</h2>
        </div>
        <div class="controls" aria-label="榜单筛选">
          <div class="segmented" role="tablist" aria-label="分组">
            <button data-filter="all" class="${state.track === "all" ? "active" : ""}">全部</button>
            ${boardTabs
              .map(
                (track) =>
                  `<button data-filter="${track.id}" class="${state.track === track.id ? "active" : ""}">${track.nav ?? track.short}</button>`
              )
              .join("")}
          </div>
          <label class="search-field">
            <span>Search</span>
            <input id="searchInput" name="project-search" autocomplete="off" type="search" value="${state.query}" placeholder="搜 AI、ESP32、财务…" />
          </label>
          ${
            state.track === "all"
              ? `<div class="rank-mode" aria-label="全品类分列">
                  <span>Layout</span>
                  <strong>三列分榜</strong>
                </div>`
              : `<div class="rank-mode" aria-label="当前榜单顺序">
                  <span>Order</span>
                  <strong>1 → ${visible.length}</strong>
                </div>`
          }
        </div>
      </div>

      ${
        isFocusedBoard
          ? renderFocusHeader(trackById(state.track), visible.length)
          : renderAllOverview()
      }

      ${
        state.track === "all"
          ? renderTrackColumns()
          : `<div class="project-grid" aria-live="polite">
              ${visible.map((project, index) => projectCard(project, index)).join("")}
            </div>`
      }
    </section>

    <section class="section-shell source-section" id="sources">
      <div>
        <p class="section-kicker">Reference</p>
        <h2>发现渠道</h2>
      </div>
      <div class="source-grid">
        <a href="https://github.com/topics/creative-coding" target="_blank" rel="noreferrer">GitHub · creative-coding topic</a>
        <a href="https://github.com/topics/game-development" target="_blank" rel="noreferrer">GitHub · game-development topic</a>
        <a href="https://github.com/topics/webgl" target="_blank" rel="noreferrer">GitHub · WebGL topic</a>
        <a href="https://github.com/topics/canvas" target="_blank" rel="noreferrer">GitHub · Canvas topic</a>
        <a href="https://github.com/topics/web-audio" target="_blank" rel="noreferrer">GitHub · Web Audio topic</a>
        <a href="https://github.com/topics/self-hosted" target="_blank" rel="noreferrer">GitHub · self-hosted topic</a>
        <a href="https://github.com/topics/ai-agents" target="_blank" rel="noreferrer">GitHub · AI agents topic</a>
        <a href="https://github.com/topics/rag" target="_blank" rel="noreferrer">GitHub · RAG topic</a>
        <a href="https://github.com/topics/esp32" target="_blank" rel="noreferrer">GitHub · ESP32 topic</a>
        <a href="https://github.com/topics/raspberry-pi" target="_blank" rel="noreferrer">GitHub · Raspberry Pi topic</a>
        <a href="https://github.com/topics/home-automation" target="_blank" rel="noreferrer">GitHub · home-automation topic</a>
        <a href="https://github.com/topics/3d-printing" target="_blank" rel="noreferrer">GitHub · 3D printing topic</a>
        <a href="https://github.com/topics/home-assistant" target="_blank" rel="noreferrer">GitHub · Home Assistant topic</a>
        <a href="https://github.com/awesome-selfhosted/awesome-selfhosted" target="_blank" rel="noreferrer">Awesome · self-hosted list</a>
        <a href="https://github.com/trending?since=weekly" target="_blank" rel="noreferrer">GitHub · Trending weekly</a>
      </div>
    </section>

    <footer class="site-footer" aria-label="网站备案信息">
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">粤ICP备2024250280号-1</a>
      <span>Vibe Coding 雷达</span>
    </footer>
  `;

  wireEvents();
  stopRadar = startRadar();
  if (activeId) {
    const activeElement = document.querySelector(`#${activeId}`);
    activeElement?.focus();
    if (selectionStart !== null && activeElement?.setSelectionRange) {
      activeElement.setSelectionRange(selectionStart, selectionStart);
    }
  }
}

function renderStarShowcase() {
  const lead = githubStarProjects[0];
  const rest = githubStarProjects.slice(1, 6);
  return `
    <section class="star-band" id="star-projects">
      <div class="section-shell star-shell">
        <div class="star-showcase-head">
          <div>
            <p class="section-kicker">Rising This Week</p>
            <h2>明星项目</h2>
            <p>
              本周增长最快的 GitHub 项目，来自 GitHub Trending weekly 候选池，并按 “stars this week” 重新排序。
            </p>
          </div>
          <div class="star-actions">
            <button class="star-tab-button" type="button" data-filter="stars">增长最快的 GitHub 项目</button>
            <a href="https://github.com/trending?since=weekly" target="_blank" rel="noreferrer">查看 GitHub 源</a>
          </div>
        </div>
        <div class="star-showcase-grid" aria-label="明星项目展示">
          ${starShowcaseCard(lead, { lead: true })}
          <div class="star-mini-grid">
            ${rest.map((project) => starShowcaseCard(project)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function starShowcaseCard(project, options = {}) {
  return `
    <a class="star-card ${options.lead ? "star-card-lead" : ""}" href="${project.url}" target="_blank" rel="noreferrer">
      <div class="star-card-top">
        <span>#${project.rank}</span>
        <em>+${formatCount(project.weeklyStars)} / week</em>
      </div>
      <strong>${project.name}</strong>
      <p>${project.tagline}</p>
      <div class="star-card-meta">
        ${projectExperienceTags(project, 3).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    </a>
  `;
}

function renderStarterAdvisor() {
  const recommendations = starterRecommendations();
  return `
    <section class="section-shell starter-section" id="starter">
      <div class="starter-head">
        <div>
          <p class="section-kicker">Starter Picker</p>
          <h2>先挑 3 个最适合你开工的项目</h2>
        </div>
        <p>
          选一下时间、目标和硬件意愿，雷达会从 ${recommendationPool().length} 个候选里给出 3 个更适合现在动手的项目。
        </p>
      </div>
      <div class="starter-layout">
        <div class="starter-picker" aria-label="新手项目选择器">
          ${renderStarterOrb()}
        </div>
        <div class="starter-results" aria-live="polite">
          ${recommendations
            .map(({ project, score }, index) => renderStarterResult(project, score, index))
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderStarterOrb() {
  return `
    <div class="starter-orb-wrap">
      <div class="starter-orb" role="group" aria-label="气泡标签选择器">
        <div class="starter-orb-core">
          <span>4 组气泡</span>
          <strong>实时推荐</strong>
        </div>
        ${Object.entries(starterOptions)
          .map(([key, options], groupIndex) => renderStarterGroup(key, options, groupIndex))
          .join("")}
      </div>
      <div class="starter-active-tags" aria-label="已选标签">
        ${Object.entries(starterState)
          .map(
            ([key, value]) => `
              <span>
                <em>${starterGroupLabels[key]}</em>
                <strong>${starterLabels[key][value]}</strong>
              </span>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderStarterGroup(key, options, groupIndex) {
  const style = starterGroupStyles[key];
  return `
    <section
      class="starter-tag-zone starter-tag-zone-${key}"
      style="--zone-x: ${style.x}%; --zone-y: ${style.y}%; --zone-width: ${style.width}%; --zone-height: ${style.height}%; --head-x: ${style.label.x}%; --head-y: ${style.label.y}%; --zone-tone: ${style.tone}; --zone-delay: ${groupIndex * -0.8}s;"
      aria-label="${starterGroupLabels[key]}选项"
    >
      <div class="starter-zone-head">
        <strong>${starterGroupLabels[key]}</strong>
        <span>${starterGroupHints[key]}</span>
      </div>
      ${options.map((option, index) => renderStarterTag(key, option, index, groupIndex)).join("")}
    </section>
  `;
}

function renderStarterTag(key, option, index, groupIndex) {
  const active = starterState[key] === option.id;
  const position = starterGroupStyles[key].positions[index % starterGroupStyles[key].positions.length];
  const drift = 3 + ((index + groupIndex) % 3);
  const delay = -0.4 * index - 0.7 * groupIndex;
  return `
    <button
      type="button"
      class="starter-tag ${active ? "active" : ""}"
      style="--tag-x: ${position.x}%; --tag-y: ${position.y}%; --tag-tone: ${starterGroupStyles[key].tone}; --drift: ${drift}px; --delay: ${delay}s;"
      data-starter-key="${key}"
      data-starter-option="${option.id}"
      aria-pressed="${active}"
      aria-label="${starterGroupLabels[key]}：${option.label}。${option.description}"
    >
      <span class="starter-tag-bubble">
        <strong>${option.label}</strong>
      </span>
    </button>
  `;
}

function renderStarterResult(project, score, index) {
  const track = trackById(project.track);
  return `
    <article class="starter-result-card" style="--track: ${track.accent}">
      <div class="starter-result-top">
        <span>#${index + 1}</span>
        <em>${track.title}</em>
        <strong>${Math.round(score)}</strong>
      </div>
      <h3>${project.name}</h3>
      <p>${starterReason(project)}</p>
      <div class="feature-list">
        ${projectExperienceTags(project, 3).map((tag) => `<span>${tag}</span>`).join("")}
      </div>
        <div class="starter-result-actions">
          <button type="button" class="plan-button action-tile" data-plan-id="${project.id}">
          <span>能不能搓</span>
          <em>体检 + Prompt</em>
          </button>
          <a class="source-link action-tile" href="${project.url}" target="_blank" rel="noreferrer">
            <span>看来源</span>
            <em>${project.source}</em>
        </a>
      </div>
    </article>
  `;
}

function renderAllOverview() {
  return `
    <div class="track-overview-head" aria-label="分类导览">
      ${tracks
        .map((track, index) => {
          const count = projectsForTrack(track.id).length;
          return `
            <section class="track-overview-head-cell" style="--track: ${track.accent}" aria-label="${track.title}">
              <div class="track-overview-meta">
                <span class="track-index">0${index + 1}</span>
                <span class="track-eyebrow">${track.eyebrow}</span>
                <em>#1 → #${count}</em>
              </div>
              <strong>${track.title}</strong>
              <p>${track.summary}</p>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderTrackColumns() {
  return `
    <div class="project-columns" aria-live="polite">
      ${tracks
        .map((track) => {
          const columnProjects = projectsForTrack(track.id);
          return `
            <section class="project-column" style="--track: ${track.accent}" aria-label="${track.title}">
              <div class="project-column-head">
                <span>${track.eyebrow}</span>
                <strong>${track.title}</strong>
                <em>#1 → #${columnProjects.length}</em>
              </div>
              <div class="project-column-list">
                ${
                  columnProjects.length
                    ? columnProjects
                        .map((project, index) =>
                          projectCard(project, index, { compact: true, displayRank: project.rank })
                        )
                        .join("")
                    : `<div class="empty-column">暂无匹配项目</div>`
                }
              </div>
            </section>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderFocusHeader(track, count) {
  return `
    <div class="track-focus-head" style="--track: ${track.accent}">
      <div class="focus-mark">
        <span>${track.eyebrow}</span>
        <strong>${track.short}</strong>
      </div>
      <div class="focus-copy">
        <h3>${track.title}</h3>
        <p>${track.summary}</p>
      </div>
      <div class="focus-notes">
        ${focusHeaderNotes[track.id].map((note) => `<span>${note}</span>`).join("")}
      </div>
      <div class="focus-count" aria-label="当前榜单顺序">
        <span>Order</span>
        <strong>#1 → #${count}</strong>
      </div>
    </div>
  `;
}

function projectCard(project, index, options = {}) {
  const track = trackById(project.track);
  const displayRank = options.displayRank ?? (state.track === "all" ? project.rank : index + 1);
  const skillCount = recommendedSkills(project, options.compact ? 2 : 3).length;
  const footerLabel = project.track === "stars" ? "Weekly" : "Skills";
  const footerValue =
    project.track === "stars" ? `+${formatCount(project.weeklyStars)}` : `${skillCount} 个`;
  return `
    <article class="project-card ${options.compact ? "project-card-compact" : ""} ${project.track === "stars" ? "project-card-star" : ""}" style="--track: ${track.accent}">
      <div class="card-topline">
        <span class="rank">#${displayRank}</span>
        <span class="track-label">${track.title}</span>
        <span class="grade">${scoreLabel(project)}</span>
      </div>
      <h3>${project.name}</h3>
      <p class="tagline">${project.tagline}</p>
      <div class="feature-list">
        ${projectExperienceTags(project, options.compact ? 3 : 5)
          .map((tag) => `<span>${tag}</span>`)
          .join("")}
      </div>
      <div class="mvp">
        <span>${options.compact ? "演示" : "MVP"}</span>
        <p>${project.mvp}</p>
      </div>
      ${renderSkillKit(project, options)}
      <footer class="card-footer">
        <div class="card-stat">
          <span>${footerLabel}</span>
          <strong>${footerValue}</strong>
        </div>
        <div class="card-actions">
          <button type="button" class="plan-button action-tile" data-plan-id="${project.id}">
            <span>一键开工</span>
            <em>体检 + Prompt</em>
          </button>
          <a class="source-link action-tile" href="${projectPrimaryUrl(project)}" target="_blank" rel="noreferrer">
            <span>${projectPrimaryActionLabel(project)}</span>
            <em>${project.source}</em>
          </a>
        </div>
      </footer>
    </article>
  `;
}

function renderPlanDialog(project) {
  const track = trackById(project.track);
  const plan = buildStarterPlan(project);
  const scalePercent = Math.round((plan.scale.value / 5) * 100);
  return `
    <div class="plan-dialog-shell">
      <div class="plan-backdrop" data-close-plan></div>
      <section class="plan-dialog" role="dialog" aria-modal="true" aria-labelledby="planTitle" tabindex="-1" style="--track: ${track.accent}">
        <header class="plan-dialog-head">
          <div>
            <p class="section-kicker">Project Checkup</p>
            <h2 id="planTitle">${escapeHtml(project.name)}</h2>
            <p>${escapeHtml(project.tagline)} 先看它能不能搓，再把提示词交给 AI 开工。</p>
            <div class="plan-dialog-actions">
              <button type="button" class="copy-plan" data-copy-plan>复制开工提示词</button>
              <a class="plan-header-source" href="${escapeHtml(plan.primaryUrl)}" target="_blank" rel="noreferrer">${plan.demoUrl ? "打开演示入口" : "打开项目来源"}</a>
            </div>
          </div>
          <button type="button" class="plan-close" data-close-plan aria-label="关闭开工计划">×</button>
        </header>

        <div class="plan-diagnosis">
          <section class="plan-verdict-card plan-verdict-${plan.verdict.tone}">
            <span>值不值得搓</span>
            <strong>${escapeHtml(plan.verdict.label)}</strong>
            <p>${escapeHtml(plan.verdict.reason)}</p>
          </section>
          <section class="plan-scale-card">
            <div>
              <span>难不难</span>
              <strong>Scale ${plan.scale.value}/5</strong>
            </div>
            <div class="plan-scale-meter" aria-label="项目难度 Scale ${plan.scale.value}/5">
              <i style="width: ${scalePercent}%"></i>
            </div>
            <p>${escapeHtml(plan.scale.label)}：${escapeHtml(plan.scale.hint)}</p>
          </section>
          <section class="plan-prep-card">
            <span>先准备什么</span>
            <div class="plan-prep-list">
              ${plan.prepItems.map((item) => `<em>${escapeHtml(item)}</em>`).join("")}
            </div>
          </section>
        </div>

        <div class="plan-grid plan-grid-simple">
          <section class="plan-block plan-demo-block">
            <h3>先做这个效果</h3>
            <p>${escapeHtml(project.mvp)}</p>
          </section>
          <section class="plan-block plan-risk-block">
            <h3>可能会卡在这里</h3>
            <ul class="plan-list">
              ${plan.risks.map((risk) => `<li>${escapeHtml(risk)}</li>`).join("")}
            </ul>
          </section>
          <a class="plan-source-card" href="${escapeHtml(plan.sourceUrl)}" target="_blank" rel="noreferrer">
            <span>项目来源</span>
            <strong>${escapeHtml(plan.sourceName)}</strong>
            <em>${escapeHtml(plan.sourceUrl)}</em>
          </a>
          ${
            plan.demoUrl
              ? `<a class="plan-source-card" href="${escapeHtml(plan.demoUrl)}" target="_blank" rel="noreferrer">
                  <span>演示入口</span>
                  <strong>先看能不能跑出效果</strong>
                  <em>${escapeHtml(plan.demoUrl)}</em>
                </a>`
              : ""
          }
          <details class="plan-block plan-skill-block">
            <summary>
              <span>用得上的 Skill / 工具</span>
              <em>可选展开</em>
            </summary>
            <p>这些不是必须先学的技术栈，只是可以和项目链接一起交给 AI 的参考工具。</p>
            <div class="plan-skill-list">
              ${plan.skills
                .map(
                  (skill) => `
                    <a href="${escapeHtml(skill.url)}" target="_blank" rel="noreferrer">
                      <strong>${escapeHtml(skill.name)}</strong>
                      <span>${escapeHtml(skillUseReason(project, skill))}</span>
                    </a>
                  `
                )
                .join("")}
            </div>
            <a class="skill-radar-button" href="${skillRadarUrl}">看完整必装 Skill 榜</a>
          </details>
          <section class="plan-block plan-prompt-block">
            <div class="plan-block-head">
              <h3>复制给 Codex 的开工提示词</h3>
              <button type="button" class="copy-plan" data-copy-plan>复制提示词</button>
            </div>
            <pre id="planPrompt">${escapeHtml(plan.codexPrompt)}</pre>
          </section>
        </div>
      </section>
    </div>
  `;
}

function wireEvents() {
  document.querySelectorAll("[data-plan-id]").forEach((button) => {
    button.addEventListener("click", () => {
      openPlanDialog(button.dataset.planId);
    });
  });

  document.querySelectorAll("[data-starter-option]").forEach((button) => {
    button.addEventListener("click", () => {
      starterState[button.dataset.starterKey] = button.dataset.starterOption;
      render();
      document.querySelector("#starter")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.track = button.dataset.filter;
      syncUrlState();
      render();
      document.querySelector("#board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll("[data-track]").forEach((button) => {
    button.addEventListener("click", () => {
      state.track = button.dataset.track;
      syncUrlState();
      render();
      document.querySelector("#board")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const searchInput = document.querySelector("#searchInput");
  if (searchInput) {
    const holdSearchRenderForIme = () => {
      isSearchComposing = true;
      cancelPendingSearchRender();
    };

    searchInput.addEventListener("keydown", (event) => {
      if (event.isComposing || event.key === "Process" || event.keyCode === 229) {
        holdSearchRenderForIme();
      }
    });

    searchInput.addEventListener("beforeinput", (event) => {
      if (event.isComposing || event.inputType === "insertCompositionText") {
        holdSearchRenderForIme();
      }
    });

    searchInput.addEventListener("compositionstart", () => {
      holdSearchRenderForIme();
    });

    searchInput.addEventListener("compositionend", (event) => {
      isSearchComposing = false;
      state.query = event.target.value;
      scheduleSearchRender(120);
    });

    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      if (isSearchComposing || event.isComposing || event.inputType === "insertCompositionText") {
        return;
      }
      scheduleSearchRender();
    });
  }

  document.querySelector("#metricSelect")?.addEventListener("change", (event) => {
    state.metric = event.target.value;
    syncUrlState();
    render();
  });
}

function openPlanDialog(projectId) {
  const project = projectById(projectId);
  if (!project) return;
  closePlanDialog();
  document.body.insertAdjacentHTML("beforeend", renderPlanDialog(project));
  document.querySelector(".plan-dialog")?.focus();

  document.querySelectorAll("[data-close-plan]").forEach((element) => {
    element.addEventListener("click", closePlanDialog);
  });

  document.querySelectorAll("[data-copy-plan]").forEach((button) => {
    button.addEventListener("click", copyPlanPrompt);
  });
  document.querySelector("[data-download-skills]")?.addEventListener("click", () => {
    downloadSkillBundle(project);
  });

  planKeyHandler = (event) => {
    if (event.key === "Escape") closePlanDialog();
  };
  document.addEventListener("keydown", planKeyHandler);
}

function closePlanDialog() {
  document.querySelector(".plan-dialog-shell")?.remove();
  if (planKeyHandler) {
    document.removeEventListener("keydown", planKeyHandler);
    planKeyHandler = null;
  }
}

async function copyPlanPrompt(event) {
  const prompt = document.querySelector("#planPrompt")?.textContent ?? "";
  const defaultLabel = event.currentTarget.dataset.defaultLabel || event.currentTarget.textContent;
  event.currentTarget.dataset.defaultLabel = defaultLabel;
  event.currentTarget.textContent = "已复制";
  try {
    await navigator.clipboard.writeText(prompt);
  } catch {
    const fallback = document.createElement("textarea");
    fallback.value = prompt;
    fallback.style.position = "fixed";
    fallback.style.opacity = "0";
    document.body.append(fallback);
    fallback.select();
    document.execCommand("copy");
    fallback.remove();
  }
  window.setTimeout(() => {
    event.currentTarget.textContent = defaultLabel;
  }, 1600);
}

function skillBundleMarkdown(project) {
  const plan = buildStarterPlan(project);
  const skillLines = plan.skills
    .map(
      (skill, index) =>
        `${index + 1}. [${skill.name}](${skill.url})\n   - 在这个项目里的用法：${skillUseReason(project, skill)}\n   - 推荐理由：${skill.signal}`
    )
    .join("\n");

  return [
    `# ${project.name} · Skill 开工清单`,
    "",
    `项目来源：${plan.sourceName}`,
    `项目链接：${plan.sourceUrl}`,
    plan.demoUrl ? `演示入口：${plan.demoUrl}` : "",
    `预计用时：${plan.estimate}`,
    "",
    "## 推荐使用的 Skill",
    skillLines,
    "",
    "## 复制给 Codex 的 Prompt",
    "",
    "```text",
    plan.codexPrompt,
    "```",
    "",
    "## 使用方式",
    "1. 先打开项目链接，确认 README、示例和依赖是否适合直接复现。",
    "2. 把上面的 Skill 链接和 Prompt 一起交给 Codex、Claude Code 或 Cursor。",
    "3. 如果当前环境不能安装某个 Skill，就让 AI 阅读对应链接后模拟同样的工作流执行。",
  ].join("\n");
}

function safeDownloadName(value) {
  return String(value)
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "-")
    .slice(0, 72);
}

function downloadSkillBundle(project) {
  const markdown = skillBundleMarkdown(project);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeDownloadName(project.name)}-skill-kit.md`;
  document.body.append(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(url);
    link.remove();
  }, 0);
}

function startRadar() {
  const canvas = document.querySelector("#radarCanvas");
  if (!canvas) return null;
  const context = canvas.getContext("2d");
  const colors = ["#225CFF", "#18A058", "#FF6A3D", "#111827"];
  let frame = 0;
  let width = 0;
  let height = 0;
  let points = [];
  let frameId = 0;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    points = Array.from({ length: Math.max(22, Math.floor(width / 45)) }, (_, index) => ({
      x: (index * 97) % Math.max(width, 1),
      y: 80 + ((index * 139) % Math.max(height - 120, 1)),
      r: 2 + (index % 5),
      c: colors[index % colors.length],
      speed: 0.25 + (index % 4) * 0.08,
    }));
  }

  function draw() {
    frame += 0.012;
    context.clearRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "rgba(255,255,255,0.92)");
    gradient.addColorStop(0.45, "rgba(242,247,255,0.82)");
    gradient.addColorStop(1, "rgba(246,248,251,0.96)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(20, 29, 45, 0.07)";
    context.lineWidth = 1;
    for (let x = 0; x < width; x += 52) {
      context.beginPath();
      context.moveTo(x, 0);
      context.lineTo(x, height);
      context.stroke();
    }
    for (let y = 0; y < height; y += 52) {
      context.beginPath();
      context.moveTo(0, y);
      context.lineTo(width, y);
      context.stroke();
    }

    const moved = points.map((point, index) => ({
      ...point,
      x: (point.x + Math.cos(frame + index) * 16 + width) % width,
      y: point.y + Math.sin(frame * point.speed + index * 0.8) * 18,
    }));

    moved.forEach((a, index) => {
      moved.slice(index + 1, index + 4).forEach((b) => {
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 210) {
          context.globalAlpha = 0.16;
          context.strokeStyle = a.c;
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      });
    });

    context.globalAlpha = 1;
    moved.forEach((point) => {
      context.fillStyle = point.c;
      context.beginPath();
      context.arc(point.x, point.y, point.r, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "rgba(255,255,255,0.8)";
      context.stroke();
    });

    if (!reduceMotion) {
      frameId = requestAnimationFrame(draw);
    }
  }

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  return () => {
    cancelAnimationFrame(frameId);
    window.removeEventListener("resize", resize);
  };
}

hydrateStateFromUrl();
render();
