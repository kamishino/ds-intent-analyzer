# `ds-intent-analyzer` Runtime Feature Prioritization

## Purpose

This document ranks the runtime features most likely to add user-visible value to `ds-intent-analyzer` over the next **12-24 months**.

It is written for:

- maintainers
- PM-style product owners
- contributors making runtime roadmap decisions

It is intentionally narrower than the 5-year product strategy.
The goal is to decide what should be pursued now, what should be monitored, and what should be deferred for runtime work specifically.

---

## 1. Prioritization Lens

This ranking is grounded in:

- `23-contributor-market-monitoring.md`
- `24-contributor-5-year-product-strategy.md`
- repo-native validation and project memory

The lens is locked to:

- **horizon:** next 12-24 months
- **scope:** runtime features only

Use two prioritization tools together:

- **Kano Model**
  - `Must-have`
  - `Performance`
  - `Delighter`
  - `Indifferent`
- **Eisenhower Matrix**
  - `Important / Urgent`
  - `Important / Not Urgent`
  - `Urgent / Not Important`
  - `Neither`

Decision rule:

- rank features highest when they remove current user pain, align with the product doctrine, and have strong support from both market direction and repo-native proof

---

## 2. Top 3 Features to Pursue

### 1. Structured design-context and artifact ingestion

- `Kano`: `Performance`, trending toward `Must-have`
- `Eisenhower`: `Important / Urgent`

### Why it matters

- the product is strongest when it sees real evidence
- the current ceiling is still evidence quality more than mode coverage or taxonomy depth
- richer evidence improves audit quality, reference borrowing, and recurring review at the same time

### Data and repo evidence

- the market-monitoring memo notes that Figma said about **two-thirds** of monthly active users in Q4 2024 were beyond traditional design roles and about **30%** identified as developers
- the same memo identifies Figma MCP, Dev Mode APIs, Discovery API, and design-change events as the clearest next evidence surface
- the 5-year strategy makes **Evidence-native reasoning** the first strategic pillar
- current runtime artifacts such as `docs/design-system/audit-evidence.md` already provide the first product surface for this direction

### Concrete example

- a healthcare-booking audit with screenshots, repo summaries, or Figma context should move beyond thin `brief only` reasoning and produce stronger, more trusted audit direction

### Recommendation

- **pursue now**

### Why it beats the alternatives

- this is the best cross-cutting upgrade because it improves decision quality across multiple existing workflow surfaces without requiring a new mode

### 2. Execution-ready audit and handoff outputs

- `Kano`: `Performance`
- `Eisenhower`: `Important / Urgent`

### Why it matters

- the product cannot stop at diagnosis
- teams need one bounded next action another agent can actually execute
- this is the clearest bridge between analysis quality and real workflow value

### Data and repo evidence

- the market-monitoring memo cites Figma's **State of the Designer 2025**, where **91% of developers** and **92% of designers** said there is room for improvement in handoffs
- the 5-year strategy makes **Execution-ready outputs** the second strategic pillar
- artifact acceptance rate is already named as the clearest leading KPI in the 5-year strategy
- repo memory already locks `Audit handoff`, `audit-packet.md`, `review-log.md`, `review-brief.md`, and `Frontend handoff` as explicit runtime surfaces

### Concrete example

- the runtime already treats `Audit handoff` and `audit-packet.md` as first-class outputs, so the next value move is sharpening acceptance quality and downstream usability rather than inventing a different workflow

### Recommendation

- **pursue now**

### Why it beats the alternatives

- it addresses a well-evidenced market pain and reinforces one of the repo's clearest differentiators

### 3. Recurring review and drift-detection workflows

- `Kano`: `Performance`, with some `Delighter` characteristics today
- `Eisenhower`: `Important / Not Urgent`

### Why it matters

- DS quality is rarely a one-shot problem
- teams need repeatable reviews that detect drift and changed priorities without replaying the original memo

### Data and repo evidence

- the market-monitoring memo highlights OpenAI Automations and Anthropic's agent-trends report as evidence that recurring supervised workflows are becoming real product surfaces
- the 5-year strategy already names recurring review usefulness as a primary KPI
- repo memory already treats recurring review as a compact `UI / DS Audit` workflow surface with `review-brief.md` and `review-log.md`

### Concrete example

- the feature is valuable when a second or third review run can identify what drifted, what still holds, and what should change next instead of replaying the first-run audit

### Recommendation

- **pursue next**

### Why it beats the monitor features

- it already has explicit user-facing runtime artifacts and clearer current value than coordination refinements or retrieval growth

---

## 3. Features to Monitor

### 4. Multi-agent coordination packet refinement

- `Kano`: `Delighter` today, likely `Performance` later
- `Eisenhower`: `Important / Not Urgent`

### Why it matters

- agent-heavy teams need better coordination
- but that value is still downstream of stronger evidence and stronger handoffs

### Data and repo evidence

- the market-monitoring memo shows OpenAI positioning Codex around multi-agent supervision, worktrees, and orchestration UX
- repo memory already locks explicit one-lead plus sidecar coordination and visible packets instead of hidden orchestration

### Concrete example

- a repo-audit flow where one lead agent owns the diagnosis and sidecars support evidence gathering is useful, but it only compounds value if the evidence and handoff layers are already strong

### Recommendation

- **monitor**
- fold improvements into handoff work rather than funding this as the primary runtime bet

### 5. Thin retrieval/index growth

- `Kano`: low `Performance` at best for the next 12-24 months
- `Eisenhower`: `Neither`

### Why it matters

- the current thin helper may improve internal orientation
- but there is little evidence that end users are more blocked by retrieval limits than by weak evidence quality

### Data and repo evidence

- the market-monitoring memo says the moat is becoming artifact-rich evaluation, not internal retrieval cleverness
- repo memory explicitly keeps `references/14-runtime-index.json` thin, derived, and subordinate to fresh evidence and repo artifacts

### Concrete example

- a smarter helper index may reduce lookup sprawl, but it will not matter much if the audit still lacks real current-state evidence

### Recommendation

- **monitor**

---

## 4. Feature to Defer

### 6. Runtime taxonomy refinement for `Developer Toolkit / Platform`

- `Kano`: `Indifferent`
- `Eisenhower`: `Neither`

### Why it matters less

- the current docs do not show repeated user-facing failure caused by the current parent bucket
- the value here is mostly classification neatness, not near-term user pain removal

### Data and repo evidence

- the 5-year strategy warns against taxonomy complexity that outgrows user-visible value
- repo memory keeps this as an open question but also states that current runtime does **not** justify a shipped split yet
- the market-monitoring memo says generic taxonomy expansion should stay lower priority unless real-world evidence shows repeated pain

### Concrete example

- clarifying the boundary between toolkit and platform may be intellectually cleaner, but it does not remove a user pain on the same level as evidence quality or handoff quality

### Recommendation

- **defer until repeated real-user misses justify it**

---

## 5. Practical Product Implications

### Public runtime surfaces most likely to change

- `docs/design-system/audit-evidence.md` and future design-context input contracts are the primary surfaces for structured evidence work
- `Audit handoff`, `docs/design-system/audit-packet.md`, and `Frontend handoff` are the primary surfaces for execution-ready outputs
- `docs/design-system/review-brief.md` and `docs/design-system/review-log.md` are the primary surfaces for recurring review and drift detection

### Success signals

For structured evidence:

- richer-evidence audits should stop behaving like thin `brief only` reads
- audit quality and confidence should improve without encouraging cloning or overconfidence

For execution-ready outputs:

- artifact acceptance rate should rise on qualifying sessions
- handoffs should produce clearer next actions with less rewrite

For recurring review:

- repeated reviews should identify meaningful drift or changed priority
- review outputs should stay compact and should not collapse into first-run audit prose

### Guardrails

- no hidden writes
- no hidden memory behavior
- no package-owned scheduler by default
- no regression in standing maintainer gate or client-repo usefulness

---

## 6. Practical Next Move

The most useful next action is:

1. prioritize the next runtime slices around:
   - structured evidence and design-context ingestion
   - stronger execution-ready artifacts
   - recurring review usefulness
2. keep multi-agent coordination refinement as a supporting layer inside handoff work rather than as a separate primary bet
3. keep the runtime index thin and keep taxonomy refinement deferred until repeated user pain proves otherwise
