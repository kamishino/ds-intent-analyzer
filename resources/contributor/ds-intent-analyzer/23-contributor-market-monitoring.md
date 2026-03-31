# `ds-intent-analyzer` Market Monitoring Guide

## Purpose

This file captures the external market developments that matter most for `ds-intent-analyzer`.

It is intentionally contributor-side only.
The goal is not to turn the repo into a market-research product.
The goal is to keep external strategy signals visible enough that future product work is driven by real ecosystem movement rather than by internal feature curiosity alone.

---

## 1. Recommended Market Lens

Use this overlap as the default product-market lens:

- **AI coding agents**
- **design-system / design-to-code workflows**

Why this lens:

- `ds-intent-analyzer` is not a generic code assistant
- it is not a pure design-generation tool
- its strongest product position is the layer between:
  - product/design intent
  - repo/code reality
  - explicit next actions for agents and teams

Important evidence rule:

- vendor-reported growth numbers are useful as direction-of-travel signals
- they should not be treated as neutral market-share measurements
- survey findings are stronger when they describe persistent workflow pain rather than vendor adoption claims

---

## 2. Main Developments to Monitor

### A. AI coding is shifting from assistant UX to agent operations

Recent signals:

- OpenAI said on **October 6, 2025** that Codex daily usage grew **10x since early August 2025**, GPT-5-Codex served **40T+ tokens in three weeks**, nearly all OpenAI engineers use Codex daily, and its engineers merge **70% more PRs per week** with Codex in use
  - source: [OpenAI — Codex now generally available](https://openai.com/index/codex-now-generally-available/)
- GitHub said in **September 2025** that Copilot had **20M+ users across 77,000 enterprises**
  - source: [GitHub blog — Gartner positions GitHub as a leader in the 2025 Magic Quadrant for AI code assistants](https://github.blog/ai-and-ml/github-copilot/gartner-positions-github-as-a-leader-in-the-2025-magic-quadrant-for-ai-code-assistants-for-the-second-year-in-a-row/)
- OpenAI said on **February 2, 2026** that the Codex app is designed around supervising multiple agents across the software lifecycle
  - source: [OpenAI — Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)

What changed:

- the market is no longer centered on autocomplete quality alone
- the competitive layer is shifting toward:
  - multi-agent coordination
  - worktree and repo-scoped execution
  - review queues
  - explicit orchestration UX

Why this matters for us:

- `ds-intent-analyzer` should keep behaving like a **decision and coordination layer** inside agent workflows
- this supports the repo's current emphasis on `Audit handoff`, explicit artifacts, and visible multi-agent coordination rather than hidden orchestration

### B. Design context is moving directly into developer and agent workflows

Recent signals:

- Figma Dev Mode now explicitly positions itself as a bridge between design context and agentic coding tools, and the Figma MCP server is framed as a way to turn design context into better code
  - source: [Figma Dev Mode](https://www.figma.com/dev-mode/)
- Figma's developer changelog in **June 2025** and **September 2025** highlighted the MCP server beta plus new surfaces such as **Discovery API** and **DEV_MODE_STATUS_UPDATE** events
  - source: [Figma REST API changelog](https://developers.figma.com/docs/rest-api/changelog/)
- Figma said in its **Config 2025** press release that about **two-thirds of monthly active users in Q4 2024 were beyond traditional design roles**, and about **30% identified as developers**
  - source: [Figma Config 2025 press release](https://www.figma.com/blog/config-2025-press-release/)

What changed:

- design tools are becoming richer evidence surfaces for developer workflows
- the frontier is no longer just "turn a mock into code"
- the stronger direction is:
  - design context as agent input
  - variable and component metadata as evidence
  - design updates as workflow events

Why this matters for us:

- artifact-aware audit reasoning is becoming more valuable than generic style advice
- the product should keep monitoring inputs such as:
  - Dev Mode outputs
  - variables and tokens
  - annotations
  - component links
  - design change events

### C. Handoff quality remains badly under-served

Recent signals:

- Figma's **State of the Designer 2025** surveyed **943** designers and front-end developers
- **91% of developers** and **92% of designers** said there is room for improvement in handoffs
- **67% of developers** and **63% of designers** rated collaboration as effective or very effective
  - source: [Figma — State of the Designer 2025](https://static.figma.com/uploads/1b5e45f9a06ce51faceaae0a8669ced7b3e465dc)

What changed:

- collaboration frequency is already high
- the unresolved problem is not "design and engineering never talk"
- the unresolved problem is:
  - translation loss
  - assumption mismatch
  - poor constraint transfer
  - weak next-action clarity

Why this matters for us:

- this is a favorable product gap for `ds-intent-analyzer`
- the strongest opportunity remains:
  - design-system judgment
  - borrowing logic
  - audit prioritization
  - explicit next actions
- this is a stronger product position than generic "AI design generation"

### D. Governance, sandboxing, and safe autonomy are becoming table stakes

Recent signals:

- Anthropic said on **October 20, 2025** that Claude Code sandboxing reduced permission prompts by **84%** in internal usage
  - source: [Anthropic — Claude Code sandboxing](https://www.anthropic.com/engineering/claude-code-sandboxing)
- OpenAI's Codex GA and Codex app materials emphasize security-by-default, enterprise controls, workspace monitoring, and analytics for admins
  - sources:
    - [OpenAI — Codex now generally available](https://openai.com/index/codex-now-generally-available/)
    - [OpenAI — Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
- npm's private package guidance continues to stress package-content review, install-flow testing, and preventing sensitive content from shipping
  - source: [npm Docs — Creating and publishing private packages](https://docs.npmjs.com/creating-and-publishing-private-packages/)

What changed:

- teams increasingly expect:
  - explicit boundaries
  - lean package surfaces
  - auditable distribution
  - safe defaults for autonomy

Why this matters for us:

- current repo direction is aligned with the market:
  - lean install surface
  - explicit artifacts
  - no hidden memory engine
  - no silent writes
- this should remain a differentiator, not be treated as mere maintenance overhead

### E. Background automations are becoming a real product surface

Recent signals:

- OpenAI now presents Automations as a first-class Codex surface with scheduled background work, optional skills, and review queues
  - sources:
    - [OpenAI — Introducing the Codex app](https://openai.com/index/introducing-the-codex-app/)
    - [OpenAI — Codex product page](https://openai.com/codex/)
- Anthropic's **2026 Agentic Coding Trends Report** argues that agents are expanding from minute-scale tasks to work that can span **days or weeks**, while human oversight is shifting from reviewing everything to reviewing what matters most
  - source: [Anthropic — 2026 Agentic Coding Trends Report](https://resources.anthropic.com/hubfs/2026%20Agentic%20Coding%20Trends%20Report.pdf)

What changed:

- recurring workflows are becoming product surfaces in their own right
- buyers and internal teams are increasingly evaluating:
  - scheduled review
  - triage automation
  - queue-based supervision
  - compact review outputs

Why this matters for us:

- recurring DS review, drift detection, and review artifacts are now strategically credible
- the repo should still keep these explicit and prompt-first rather than turning them into hidden scheduling machinery by default

### F. Artifact-rich evaluation is becoming the moat

Recent signals:

- OpenAI's **Harness Engineering** write-up on **February 11, 2026** described Codex working against UI, logs, metrics, and traces, with single runs lasting **six hours or more**
- OpenAI also said it built an internal product of about **1 million lines of code** in roughly **one-tenth** of the expected time by improving the agent environment rather than relying on prompt quality alone
  - source: [OpenAI — Harness engineering](https://openai.com/index/harness-engineering/)

What changed:

- the market is learning that better agent outputs do not come only from smarter models
- they also come from:
  - better evidence surfaces
  - better evaluation loops
  - better execution environments

Why this matters for us:

- the repo should keep pushing toward evidence-rich audit inputs and bounded artifacts such as:
  - screenshots
  - repo summaries
  - audit evidence
  - review logs
  - handoff packets
- this is more defensible than generic "AI UI advice"

---

## 3. Monitoring Priorities for the Next 2 Quarters

### Priority 1 — Design-context ingestion

Watch:

- Figma MCP maturity
- Dev Mode APIs
- Code Connect and code-linked component workflows
- variables and annotations as evidence inputs
- Discovery API and webhook maturity

Why this is first:

- it is the clearest path to better evidence quality for audits and recommendations
- it improves real-user usefulness without requiring the product to become a heavy design platform

### Priority 2 — Recurring review and automation workflows

Watch:

- scheduled DS reviews
- drift logs
- queue-based audit workflows
- automation prompts that remain explicit and safe

Why this is second:

- it aligns with current Codex product direction
- it is already adjacent to the repo's shipped recurring-review artifacts
- it can compound product value without changing the primary audit mode

### Priority 3 — Enterprise-safe team distribution

Watch:

- demand for private team sharing
- admin controls
- auditability
- policy-aware install and update flows

Why this is third:

- broader internal adoption depends on governed distribution
- the repo is already aligned technically, but the market signal should determine how far this evolves beyond current private git-based sharing

### Priority 4 — Multi-agent coordination patterns

Watch:

- lead-agent plus sidecar patterns
- review queues
- backlog reduction flows
- long-running supervised tasks

Why this matters:

- the risk is not missing the phrase "multi-agent"
- the risk is missing the right coordination packet and review loop that makes a DS-analysis skill useful inside those workflows

### Priority 5 — Handoff-quality products, not generic code generation

Watch:

- tools that reduce translation loss between design, product constraints, and code
- products that make next-action clarity explicit
- evidence that buyers are choosing "decision quality and governance" over "generate me components faster"

Why this matters:

- this remains the cleanest category gap for `ds-intent-analyzer`

---

## 4. Signals to Track Quarterly

### Adoption signals

- official enterprise or user counts from OpenAI, GitHub, Anthropic, and Figma
- new workspace-admin, governance, or analytics features
- evidence that skills or reusable agent packages are becoming a stable team surface

### Workflow signals

- new MCP connectors
- new Dev Mode APIs or webhook surfaces
- code-linked component features
- automation triggers, queues, or review surfaces

### Quality signals

- evidence-rich benchmark or case-study claims
- review-loop quality claims
- safety and sandboxing metrics
- customer stories about design-to-code or DS-review usage

### Market-fit signals

- whether buyers increasingly ask for:
  - design-system generation
  - design review automation
  - evidence-grounded DS decisions
  - governed multi-agent execution
- whether handoff pain remains unresolved in fresh survey data

---

## 5. Practical Product Implications for This Repo

Use the market read as a filter for future product decisions:

1. prefer features that improve evidence quality, handoff quality, or recurring review value
2. prefer explicit artifacts and visible coordination over hidden memory or invisible orchestration
3. treat package hygiene, governance, and safe defaults as product value, not only infra maintenance
4. treat generic taxonomy or framework expansion as lower priority unless real-world evidence shows repeated user pain
5. keep the strongest product identity centered on:
   - decision quality
   - evidence-grounded audit
   - practical next actions

---

## 6. Practical Next Move

The most useful next action is:

- keep this file as the contributor-side external strategy watch surface
- revisit it when one of the following changes materially:
  - OpenAI Codex workflow surfaces
  - Figma Dev Mode / MCP maturity
  - enterprise distribution expectations
  - survey evidence about design-to-code handoff pain
- use it to justify future product bets only when the external signal also lines up with repo-native validation evidence
