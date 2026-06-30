---
name: vibe-coding-radar
description: Find and recommend beginner-friendly Vibe Coding projects and useful AI coding skills. Use when the user asks for fun projects, useful projects, hardware projects, AI coding project ideas, GitHub projects to build, beginner coding projects, vibe coding ideas, recommended Codex skills, useful agent skills, tools for a project idea, or one-click starter prompts for Codex/Cursor/Claude Code.
---

# Vibe Coding Radar

Help the user find Vibe Coding projects and useful Skills. Treat the user as an AI Coding beginner unless they say otherwise.

Core uses:

- Recommend projects when the user asks "what should I build", "find a fun project", "find a useful project", "find a hardware project", or similar.
- Recommend Skills / tools when the user asks what to install or what would help with a project.
- Generate a copyable starter prompt after recommending a project.

## Workflow

1. Identify the user's intent:
   - `project`: they want a project idea.
   - `skill`: they want Skills / tools.
   - `mixed`: they want a project plus tools and starter prompt.
2. Prefer beginner-friendly options:
   - direct GitHub or official source link
   - clear demo, README, or docs
   - fast path to a visible result
   - limited hidden setup
   - clear reason why it is fun, useful, or worth making
3. Read the relevant reference:
   - Project recommendations: `references/projects.md`
   - Skill recommendations: `references/skills.md`
   - Starter prompts: `references/starter-prompts.md`
4. Output concise recommendations. Do not overload the user with internal reasoning.

## Output Format

For project recommendations, use:

- Project name
- Why it is worth building
- Source link
- Recommended Skills / tools
- Starter prompt for Codex

For Skill recommendations, use:

- Skill / tool name
- What it helps with
- Source link
- When to use it

## Starter Prompt Rules

The starter prompt must:

- include the original project or GitHub link when available
- ask Codex to read README, install docs, examples, and dependency files first
- ask Codex to run the smallest visible demo first
- ask Codex to identify likely blockers before rewriting code
- stay beginner-friendly and avoid unnecessary architecture detail

Do not claim that a project is easy if the source suggests API keys, Docker, databases, model downloads, hardware, paid services, browser permissions, or network constraints.

## Tone

Use plain Chinese by default. Keep recommendations practical, direct, and slightly enthusiastic.
