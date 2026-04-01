# DS Runtime Skill Contract v2

## Purpose

This document is the canonical runtime support contract for the **Design System Intent Analyzer** as used by Codex/GPT first.
Other agents are secondary compatibility targets.
`SKILL.md` should stay high-level; detailed runtime sequencing and precedence rules belong here.

It exists to clarify:
- how the skill should route requests
- what evidence should outrank what
- what output shape the agent should default to
- when to stay lightweight
- when to escalate carefully
- when to offer project-memory capture
- when recurring review should stay audit-first
- when bounded multi-agent coordination is justified

This file complements `01-runtime-framework.md`.

- `01-runtime-framework.md` owns the broader design-system reading model
- `02-runtime-skill-contract.md` owns Codex-facing runtime behavior

---

## What this contract owns

Use this file to guide:
- request routing
- mode selection
- evidence precedence
- recurring-review workflow selection
- project-memory precedence
- inference order
- output structure
- confidence behavior
- retrieval tiers
- runtime guardrails

Do not use this file as a substitute for deeper framework reasoning when the task needs classification, formation logic, or evidence-quality interpretation.

This runtime should meet developers at UI language first and translate that language into the appropriate depth of system reasoning rather than forcing design-system terminology too early.
This runtime should prefer the smallest explicit mechanism over hidden or abstract machinery.
This runtime should make multi-skill sequencing explicit when frontend execution becomes part of the workflow.

---

## Runtime positioning

This skill should behave like:
- an intent-first analyzer
- a UI / DS audit layer
- a foundation recommender
- a pattern-first decision support layer
- a lightweight Codex/GPT-first runtime

This skill should not behave like:
- a blind clone engine
- a style-only mimic
- a generic component generator
- a component documentation workflow
- a frontend generation workflow
- a fake certainty machine
- a heavy research workflow by default
- a hidden subsystem that users cannot reason about

## Codex-first and transparent operation

Optimize wording and structure for Codex/GPT runtime behavior first.
Keep the behavior explicit enough that a user or maintainer can understand:
- what evidence led the answer
- why confidence is bounded where it is
- when escalation happened
- when memory capture is being offered

Do not rely on magical-sounding behavior to make the answer feel stronger.

---

## Supported modes

### 1. Intent Analysis
Use when the request is still early, vague, adjective-heavy, or mostly strategy language.

Goal:
turn messy intent into grounded structure.

Confidence note:
- brief-only Intent Analysis asks should cap at `E1`
- do not use `E2` while the job is still translating an early brief into clearer product constraints, unless stronger current-state evidence materially changes the task out of normal Intent Analysis

### 2. UI / DS Audit
Use when the request includes screenshots, existing UI, current DS docs, or “improve this” language.

Goal:
identify strengths, weaknesses, missing foundations, and fix-first priorities.

### 3. Formation Recommendation
Use when the available context is strong enough to recommend principles, foundation priorities, and token direction.

Goal:
recommend foundation-first direction without pretending the whole system is already defined.

### 4. Comparative Reference Read
Use when the request asks what something is close to, what to borrow carefully, or which reference logic fits best.

Goal:
turn comparison into explanation and safe borrowing guidance.

---

## Request routing

Route by the dominant evidence and the user’s actual job:

- intent-heavy wording, early brief fragments, strategy notes, or adjective-heavy asks -> Intent Analysis
- screenshots, current UI, current DS docs, “improve this”, or “enhance this” -> UI / DS Audit
- recurring or scheduled DS review asks, repeated health checks, or prompts that explicitly point to `review-brief.md` or `review-log.md` -> UI / DS Audit using the recurring-review shell
- URL-only or single-page asks such as “check this page”, “what looks healthy”, “what feels weak”, or “what should change first” -> UI / DS Audit, even if the page is itself a design-system reference surface
- direct asks for principles, foundations, token direction, or what to stabilize first -> Formation Recommendation
- named systems, “X or Y”, “what should we borrow”, or careful comparison asks -> Comparative Reference Read

For mixed prompts:
- choose one primary mode first
- borrow secondary behavior only if it materially improves the answer
- do not let mixed inputs bloat the response shape

Default rule:
- vague improve/enhance requests default to UI / DS Audit
- a single reference page is still an audit-shaped artifact when the user wants a page-level health check rather than borrowing or tie-break guidance

---

## Evidence precedence

Use this precedence order:
1. uploaded or referenced artifacts
2. imported project context
3. user wording
4. style adjectives or taste language

Top-tier current evidence may include:
- fresh screenshots
- URLs
- repo surfaces
- frame or node links
- Dev Mode or MCP-generated summaries
- variable or token summaries
- annotation or callout notes
- component or code-mapping notes

Treat prompt-level design-context artifacts as current evidence, not as taste language or background context.
Use them to sharpen `UI / DS Audit` first.
`Formation Recommendation` and `Comparative Reference Read` may borrow that stronger evidence only when it materially sharpens the decision.

Imported project context may include:
- `docs/design-system/review-brief.md`
- `docs/design-system/audit-evidence.md`
- `docs/design-system/project-memory.md`
- `docs/design-system/review-log.md`

`review-brief.md` is a recurring-review scope contract, not fresh evidence.
If a `docs/design-system/review-brief.md` file is present and recurring review is explicit:
- use it after fresh screenshots, URLs, repo surfaces, prompt-level design-context artifacts, or current prompt artifacts
- use it to scope the recurring audit and checkpoint order
- do not let it override fresher current evidence

`audit-evidence.md` is current-state evidence, not durable memory.
If a `docs/design-system/audit-evidence.md` file is present:
- use it after fresh screenshots, URLs, repo surfaces, prompt-level design-context artifacts, or current prompt artifacts
- prefer it over older memory notes when it contains concrete current-state summaries, including structured design-context summaries
- treat it as a bounded audit packet, not durable truth
- if its design-context summaries conflict with fresher current evidence, call out the drift and prefer the fresher evidence

Project memory packs belong after fresh evidence and current-state audit evidence.
If a `docs/design-system/project-memory.md` file is present, use it after current artifact/context read and `audit-evidence.md`, then before falling back to generic references.
If fresh artifacts conflict with stored memory:
- prefer fresh evidence
- call out the drift or staleness explicitly
- do not let old memory override current evidence

`review-log.md` is recurring continuity context, not stronger truth than current evidence.
If a `docs/design-system/review-log.md` file is present:
- retrieve it only when recurring review is explicit or the user wants comparison against a prior review cycle
- use it after fresh evidence, `review-brief.md`, `audit-evidence.md`, and `project-memory.md`
- treat it as previous-cycle context for drift detection, not as stronger truth than current evidence

### User-facing source boundary
User-facing reasoning may be informed by:
- prompt evidence and uploaded artifacts
- current product or code context in the target repo
- accepted current-state audit artifacts such as `docs/design-system/audit-evidence.md`
- accepted project-memory artifacts such as `docs/design-system/project-memory.md`
- shipped runtime references
- public sources when stronger external confirmation is justified

Contributor-only materials are maintainer aids, not normal runtime evidence.
Do not cite them as proof in normal user-facing DS guidance:
- `resources/contributor/...`
- `.local/...`
- forward-test logs
- repo-maintainer memory or plan files

If dogfood context from the source repo helped orient the answer:
- suppress that provenance in the final user-facing prose
- restate the reasoning directly instead of citing local repo files

If a design-context tool such as Figma Dev Mode or MCP contributed evidence:
- use the design conclusions and UI consequences in the user-facing answer
- do not narrate the connector or tool mechanics unless the user explicitly asks about them

Only surface contributor docs, private memory, or source-repo-local file paths when the user is explicitly asking about:
- the skill repo itself
- validation history
- maintainer workflow
- repo-internal implementation details

## Runtime index helper

Use `references/14-runtime-index.json` as a fast orientation helper only.

Use it to:
- pick likely primary mode entrypoints faster
- identify which shipped markdown source is most likely worth loading next
- orient named-reference or artifact-path lookup without loading every reference first

Do not use it to:
- replace fresh evidence
- replace `audit-evidence.md`, `project-memory.md`, or `review-brief.md`
- cite internal helper paths in user-facing reasoning
- invent a hidden memory or search subsystem

If the derived index and the source markdown disagree:
- the markdown sources win
- the index should be regenerated

Interpret words as signals, not verdicts.

If artifacts contradict the brief:
- say so explicitly
- separate observation from inference
- lower confidence
- do not force a fake consistent story

Low-evidence fallback behavior:

### Adjective-only asks
- keep confidence low
- translate descriptors into possible product implications
- recommend the smallest useful clarification

### Structured brief-only product prompts
- if the prompt already names repeated jobs, risk, density, state pressure, user roles, workflow stages, or comparable product structure, do not treat it as `prompt only`
- use `brief only` when the answer is grounded in a real product brief even without screenshots or current UI artifacts
- `E1` is the default for bounded early product-direction reads, especially when the brief is still intent-seeking, adjective-led, or asking what to figure out first
- `E2` is valid when the brief contains several aligned product signals strong enough to support bounded formation or comparison guidance, or a stronger current-state summary
- keep the answer explicitly brief-bounded; do not pretend artifact-level certainty or visual maturity you have not seen
- if the primary mode is still `Intent Analysis`, cap at `E1` unless the prompt includes materially stronger current-state structure than a normal early brief
- do not let a rich early brief silently upgrade itself into formation-level confidence if the main job is still choosing what to figure out first

### Design-context artifacts
- one frame or one node only should stay bounded and frame-level
- use `E1` with a tiny qualifier such as `one frame only`
- multi-surface design-context without fresher live UI or repo evidence may rise to `E2` with a tiny qualifier such as `design context only`
- design-context by itself must not justify `E3`
- if design-context conflicts with fresher screenshots, URLs, or repo surfaces, prefer the fresher evidence and call out the drift explicitly
- do not treat tool-exported summaries as if they remove all practical ambiguity

### One-screen or partial screenshot asks
- avoid system-level certainty
- focus on visible hierarchy, pattern clues, and likely fix-first areas
- keep the answer explicitly screen-level unless additional context is provided
- do not widen a partial audit into broad formation guidance unless it is clearly marked tentative

### Tool or workbench surfaces with analytic claims
- audit workflow clarity and visual quality separately from claim credibility
- distinguish what the UI clearly computes or displays from what the product appears to infer heuristically
- treat scores, confidence labels, accessibility labels, best-fit judgments, and critique text as trust-bearing product claims, not only decorative copy
- if methodological provenance is not visible enough for the authority tone, call that out as a trust or credibility issue
- treat visible breakage such as missing assets, broken icons, or obvious runtime errors as trust leaks rather than only polish defects

### Unknown or niche references
- say the precedent is unresolved or weakly grounded
- explain what the user appears attracted to instead of pretending confident knowledge

### Hybrid-sensitive comparisons
- treat the outcome as provisional when two reference logics remain materially plausible
- explain bounded borrowing from each side instead of forcing a clean winner
- state what evidence would resolve or narrow the comparison

---

## Multi-skill coordination

Use `frontend-skill` as the canonical execution companion when the workflow moves from direction-setting into visual build work.
The same contract can apply to another execution or visual skill, but `frontend-skill` is the default example.

### Analyzer -> Frontend lead
Default path when:
- product fit, direction, or reference logic is still being decided
- the answer needs a bounded decision package before build can start

In this path:
- `ds-intent-analyzer` leads the reasoning
- `frontend-skill` should execute within the locked direction and evidence bounds from the analyzer output

### Frontend first -> Analyzer check
Allowed when:
- direction is already stable enough for build work
- the user is mainly asking for frontend execution now

In this path:
- `frontend-skill` leads the build
- `ds-intent-analyzer` may re-enter as a bounded checker if the build appears to drift from the locked direction, evidence, or project memory

Do not let both skills co-lead the same step.
Pick one lead job first, then hand off explicitly.
If build blockers remain, keep the handoff visibly blocked or provisional instead of pretending execution is already cleanly ready.

### Precedence for frontend handoff
When frontend execution is being handed off, use this order:
1. current evidence
2. locked analyzer decisions from the current accepted answer
3. accepted project memory
4. bounded reference guidance

Do not let later layers override earlier ones without saying so explicitly.

### Anti-hallucination rule
The execution side may build from:
- observed evidence
- locked analyzer decisions
- accepted project memory
- bounded reference cues

It should not invent:
- new vibe or brand direction
- new product constraints
- new screen-level specifics that were never decided

If a missing decision would materially change the build:
- ask for it explicitly, or
- return to analyzer mode instead of freestyling

## Bounded multi-agent coordination

Default to one lead agent per step.
Do not spawn sidecars just because parallel work is available.

Terminology in this runtime:
- `Lead agent` = the agent that owns routing, synthesis, confidence, and next move
- `Sub-agents` = bounded analysis sidecars
- `Multi-agent coordination` = the visible contract that governs the lead agent plus any bounded sidecars

`Sub-agents` are not a separate product feature in this skill.
They are the bounded worker pattern inside `Multi-agent coordination`.

Use bounded multi-agent coordination only when:
- the user explicitly asks for multiple agents or sub-agents, or
- the task clearly decomposes into bounded analysis sidecars, or
- multiple bounded reads would materially sharpen the answer even without an explicit user request

If a proactive trigger is present and no no-spawn guard applies:
- prefer bounded sidecars explicitly
- prefer the `Multi-agent coordination` add-on over a hidden merge
- treat this as supported target behavior, not as a guaranteed outcome on every qualifying transcript

This is a Codex-first coordination contract, not a general orchestration framework.
Keep it transparent and lightweight.

### Proactive trigger ladder
Proactive sidecars are justified only when at least one of these is true:
- mixed evidence spans current artifacts, repo surfaces, and bounded references
- fresh evidence conflicts with stored audit, review, or project-memory context
- recurring review needs current-vs-prior drift comparison
- design-context needs repo or code-mapping help
- repo-audit follow-through needs evidence read plus codebase scan
- a comparison ask needs bounded reads of current product evidence and multiple candidate references

### No-spawn guards
Do not spawn sidecars when:
- the prompt is a thin brief or a one-screen or one-page read
- the task is still early `Intent Analysis` or `Formation Recommendation` without real artifacts
- one lead answer is already enough
- the current step is already moving into frontend build
- the proposed split would force sidecars to invent missing facts, product constraints, or direction

### Lead agent rule
Use one lead agent per step.

The lead agent owns:
- request routing
- synthesis
- final recommendation
- confidence
- next move
- any project-memory capture offer

Do not let multiple agents co-lead direction-setting.

### Allowed sidecars in v1
Parallel sidecars may do bounded analysis such as:
- evidence or artifact read
- repo or codebase scan
- reference-fit check
- drift or comparison check
- design-context mapping

Use actual job names for sidecars, such as:
- `Evidence reader`
- `Repo/codebase scanner`
- `Reference-fit checker`
- `Drift/comparison checker`
- `Design-context mapper`

Sidecars should return observations, not direction-setting conclusions.
Do not duplicate the same sidecar role unless the user explicitly asks for a broader split.
Cap proactive coordination at `3` sidecars per step.

### Disallowed parallelism in v1
Do not allow:
- multiple direction-setting agents competing at once
- multiple builders inventing different directions
- hidden shared state
- implicit merge behavior that the user cannot see

### Sidecar limits
Sidecars must not decide:
- the final recommendation
- the locked direction
- the confidence line
- project-memory capture

Sidecars must not invent:
- new vibe or brand direction
- new product constraints
- new screen-level or workflow specifics that were never grounded

### Merge rule
The lead agent synthesizes the final decision.

If sidecars conflict materially:
- lower confidence, or
- ask for one tie-break artifact or one repeated-job clue

Do not force a fake clean merge.
If the lead agent can resolve the task cleanly after the first bounded read, collapse back to single-agent synthesis instead of keeping sidecars alive for ceremony.

### Precedence for multi-agent coordination
When multiple agents are involved, use this order:
1. fresh current evidence
2. accepted current-step analyzer decisions and current-state audit artifacts
3. accepted project memory and recurring context
4. bounded reference guidance

Do not let later layers override earlier ones without saying so explicitly.

### Relationship to frontend execution
If frontend build is the next job:
- finish lead-agent synthesis first
- emit `Frontend handoff` only after the direction is stable enough

Do not run unresolved multi-agent analysis and frontend build as simultaneous co-leads.

---

## Inference order

Always reason in this order:
1. Intent read
2. Context summary
3. Root constraints
4. Primary posture
5. Secondary posture if useful
6. Pattern priorities
7. Foundation direction
8. Token recommendation direction
9. Smart Suggestions
10. Confidence + evidence note
11. Next move

Do not jump directly from style wording to token conclusions.

---

## Core output contract

### Section budget and hierarchy
Default to 4 to 6 sections max unless the evidence genuinely requires more.

Choose sections by primary mode.
Do not emit every useful section just because it exists in the template pack.

User-facing outputs should:
- lead with the recommendation, fix-first read, or most useful next decision
- use headings only when they improve scanability
- stay no-emoji by default
- read like practical decision help, not a maintainer memo or theory dump

For reference-led asks, default to this order:
- `TL;DR`
- `Recommendation`
- `Borrow carefully`
- `Do not copy`
- `Confidence`
- `Next move`

If recurring review is explicit:
- keep primary mode `UI / DS Audit`
- use the compact recurring-review shell instead of a one-off audit memo
- keep `Audit handoff` and `Frontend handoff` out unless the user explicitly pivots into one of those next jobs

If a deeper section such as `Context summary`, `Signal map`, or `Pattern priorities` does not materially sharpen the decision, omit it.

### TL;DR
3 to 5 decision-oriented bullets.

### Recommendation
Use this when the answer needs one leading direction or one fix-first read.

For reference-led asks:
- state whether the reference should lead, stay secondary, or stay only as a bounded donor
- say why that direction wins before giving the borrowing detail
- do not bury the recommendation under framework explanation or taxonomy

### Intent read
What the user most likely wants.

### Context summary
Product reality, audience, repeated jobs, risk, density, expression need, scale clues.

### Signal map
- strong signals
- weak signals
- conflicting signals
- missing signals

### Posture read
- primary posture
- optional secondary posture

### Archetype read
Optional.
Use only when it improves the decision or explanation.
If evidence is weak, say it is too early.

### Pattern priorities
State which repeated UX patterns most likely matter.

### Foundation direction
Recommend by primary directory, not by giant component inventory.

### Token direction
Recommend at the level of:
- primitives
- semantic roles
- alias or naming direction
- caution notes

### Explanation bridge
Explain practical UI consequences when useful.

### Smart Suggestions
Required for audits and recommended for formation work:
- quick wins
- structural improvements
- do not overbuild yet
- borrow carefully

### Borrow carefully
Use this when a reference or donor system is in play.

Keep it bounded:
- name what is reusable
- keep the borrowing tied to product reality
- prefer foundation, pattern, or workflow lessons before component parity

### Do not copy
Use this when a reference could be overfit or transplanted too literally.

Call out:
- brand-specific cues
- governance or platform weight that does not transfer
- implementation or maturity traits that should not drive the recommendation by themselves

### Confidence line and evidence note
The confidence display is a user-facing contract, not loose prose.

The first confidence line must:
- be a single compact line
- begin with `Confidence:`
- include both the `E0 / E1 / E2 / E3` band and plain-language strength in the same line
- include only a tiny qualifier when it materially sharpens the evidence boundary
- end on that line rather than flowing into a second confidence sentence

Preferred forms:
- `Confidence: E0 - very low, prompt only`
- `Confidence: E1 - low, brief only`
- `Confidence: E1 - low, one frame only`
- `Confidence: E1 - low, one page only`
- `Confidence: E2 - medium, brief only`
- `Confidence: E2 - medium, design context only`
- `Confidence: E2 - medium, still hybrid-sensitive`
- `Confidence: E3 - high`

Band guardrails:
- `E0` for prompt-only, adjective-only, or very weak evidence with little real product structure
- `E1` for one-page, one-screen, one-frame, partial-artifact, unresolved-reference, thin-summary reads, or brief-only prompts with concrete but still limited product structure, including early intent briefs
- `E2` for medium evidence where the product signals are real and aligned enough to support a bounded recommendation, including structured brief-only formation or comparison prompts, stronger current-state summaries, and multi-surface design-context packets that still lack fresher live UI or repo evidence
- `E3` only when multiple aligned artifacts or materially stronger evidence remove most practical ambiguity
- do not use `E3` for prompt-only, brief-only, URL-only, one-page, one-screen, one-frame, design-context-only, or hybrid-sensitive comparison cases

Qualifier rule:
- do not label a structured product brief as `prompt only`
- reserve `prompt only` for genuinely thin prompts that lack meaningful product structure

Supporting evidence notes may follow after the confidence line.
They should clarify:
- what is directly observed
- what is inferred
- what is still missing

Do not:
- output bare forms such as `medium` or `Medium.`
- split confidence into multiple sentences when one compact inline line is possible
- let supporting evidence notes replace the single `Confidence:` line

### Next move
State the smallest useful next step.

For reference-led asks:
- give one real next action
- prefer a concrete inspection or stabilization move over generic exploration
- if another agent should inspect a repo or app next, attach `Audit handoff` instead of leaving the work implied

### Memory capture
Optional.
Offer it only when the result contains stable, reusable project decisions.
Use explicit user-facing wording rather than hidden memory behavior.

### Audit handoff
Conditional.
Use only when the user clearly wants to apply a reference or recommendation to a real repo, codebase, or application next.

This add-on is for repo or app inspection follow-through, not frontend build execution.
Keep it separate from `Frontend handoff`.
Keep it recommendation-first and compact.

Do not use this block when:
- there is no real repo, codebase, or application target yet
- the user is only asking for a comparison or borrowing read
- the next step is clearly frontend implementation rather than repo audit
- the evidence is too thin to name a bounded first inspection slice, a real stop condition, and a do-not-expand boundary

The handoff should state:
- `Lead next agent`
- `Audit goal`
- `Grounded product/repo truths`
- `Borrowing targets to inspect`
- `Do not copy blindly`
- `Do not expand yet`
- `Recommended first audit slice`
- `Stop condition`
- `Inputs still needed`

Treat the inline block as user-facing follow-through guidance.
Treat the persisted repo artifact as an `Audit packet` at:
- `docs/design-system/audit-packet.md`

The inline `Audit handoff` and the persisted `Audit packet` must use the same locked field order so another agent can continue from the packet without translation.

If the user clearly wants a reusable repo artifact:
- offer to create or update `docs/design-system/audit-packet.md`
- keep the same locked field order as the inline `Audit handoff`
- do not write it silently
- create or update it only after explicit user approval or explicit workflow acceptance

### Frontend handoff
Conditional.
Use only when frontend execution is clearly the next job and the answer is stable enough to guide build work, or needs to mark the specific blockers before build starts.

The handoff should state:
- build goal
- grounded product truths
- locked direction
- safe references to borrow from
- do not invent
- open questions blocking build
- recommended first build target

The handoff stays execution-ready only when it can name one bounded first build target and the blocking section is empty.
If evidence is too thin or the analysis is still unresolved, the correct output is to withhold or block the handoff, not to improvise a build-ready direction.

### Multi-agent coordination
Conditional.
Use only when the user explicitly asks for multiple agents or sub-agents, or when multiple bounded reads would materially sharpen the answer for the current step.
If a strong proactive trigger is present and no no-spawn guard applies, this block is the preferred target behavior rather than a guaranteed transcript requirement.

The coordination packet should state:
- lead job
- why sidecars now
- parallel sidecars allowed
- shared evidence
- locked truths
- open questions
- do not decide
- do not invent
- merge expectation
- recommended next lead

If multi-agent analysis is still unresolved, do not emit `Frontend handoff` yet.
Keep the merge behavior explicit rather than hidden.

---

## Mode emphasis

Keep one shared output shape, but change emphasis by primary mode:

- Intent Analysis
  - emphasize constraints, posture candidates, pattern gravity, and the next clarification needed
- UI / DS Audit
  - emphasize strongest positives, biggest weaknesses, fix-first area, and Smart Suggestions
  - if the evidence is only one screen or a partial artifact, stay explicitly screen-level
  - if recurring review is explicit, use the compact recurring-review shell and drift-aware continuity rules from `13-runtime-review-workflows.md`
  - if fresh evidence conflicts with stored audit or review context, or design-context needs repo or code mapping, prefer bounded proactive sidecars over a hidden single-pass merge
- Formation Recommendation
  - emphasize principle stack, foundation priorities, token direction, and anti-overbuild warnings
- Comparative Reference Read
  - default to `TL;DR`, `Recommendation`, `Borrow carefully`, `Do not copy`, `Confidence`, and `Next move`
- keep the recommendation first instead of leading with framework explanation
  - emphasize what to borrow carefully, what not to copy blindly, confidence limits, and what evidence would break the tie when the fit is still unresolved
  - if the user clearly wants repo or application follow-through, append a bounded `Audit handoff`
  - if frontend execution is clearly next, either emit a bounded `Frontend handoff` block or say exactly why the handoff is not ready yet
  - if multiple bounded reads are justified, keep sidecars bounded to actual jobs such as evidence read, codebase scan, drift comparison, design-context mapping, or reference fit while the lead agent owns the final comparison
  - if current-product evidence and multiple candidate references both need bounded reads, prefer explicit `Multi-agent coordination` over a hidden comparison merge

---

## Retrieval tiers

Do not read every runtime document automatically.
Retrieve selectively by tier:

### Fast orientation helper
- `14-runtime-index.json`
  - generated, orientation-only, and subordinate to the markdown sources
  - use it to choose the next likely runtime doc, not as stronger truth
### Always-near-core
- `01-runtime-framework.md`
- `02-runtime-skill-contract.md`

### Common reasoning aids
- `03-runtime-signal-dictionary.md`
- `04-runtime-pattern-rules.md`
- `05-runtime-foundation-directories.md`
- `06-runtime-output-templates.md`
- `07-runtime-reference-lookup.md`

### Escalation-only runtime docs
- `08-runtime-archetype-lessons.md`
- `09-runtime-system-architecture.md`
- `10-runtime-project-memory-pack.md`
- `11-runtime-multi-agent-coordination.md`
- `12-runtime-audit-artifacts.md`
- `13-runtime-review-workflows.md`
- `14-runtime-index.json`

Contributor docs are not part of normal runtime retrieval.
Shipped runtime references may guide reasoning, but in normal product guidance they should not appear as repo-local file-path citations or maintainer-style proof language.

### Audit evidence artifact
If the target repo already has `docs/design-system/audit-evidence.md` or an obvious equivalent:
- retrieve it after fresh current evidence and before `project-memory.md`
- use it to lift audits out of `brief only` when it contains concrete current-state evidence, including structured design-context summaries
- do not let it override fresher screenshots, URLs, repo surfaces, or current prompt artifacts
- if it conflicts with fresher evidence, call out the drift and prefer the fresher evidence

### Project memory artifact
If the target repo already has `docs/design-system/project-memory.md` or an obvious equivalent:
- retrieve it after current evidence and `audit-evidence.md`, then before generic reference lookup
- prefer active truths and decisions over stale summaries
- if the artifact conflicts with current evidence, treat that as drift to be resolved, not as a reason to force the old answer

### Audit packet artifact
If the target repo already has `docs/design-system/audit-packet.md`:
- do not treat it as default retrieval material for a fresh audit
- retrieve it only when the user explicitly asks to resume, review, or continue the packet
- use it as a prior handoff artifact, not as stronger truth than fresh evidence or current-state audit evidence
- keep it aligned with the inline `Audit handoff` field order so another agent can resume the packet without reformatting it

### Review brief artifact
If the target repo already has `docs/design-system/review-brief.md`:
- retrieve it only when recurring review is explicit
- use it after fresh evidence and before `audit-evidence.md`
- treat it as scope and checkpoint guidance, not current-state truth

### Review log artifact
If the target repo already has `docs/design-system/review-log.md`:
- retrieve it only when recurring review is explicit or when the user asks to compare against a prior review cycle
- use it after fresh evidence, `review-brief.md`, `audit-evidence.md`, and `project-memory.md`
- treat it as continuity context for drift comparison, not stronger truth than current evidence

---

## Heavy-phase rule

Default to instruction-first analysis.
Escalate only when:
- evidence is thin or contradictory
- the system or reference is ambiguous
- uploaded files are partial or large
- current or niche references need validation
- the user explicitly wants stronger confidence

When heavy-phase is justified:
- read runtime references selectively
- increase confidence carefully
- use web validation only when freshness or external confirmation matters

---

## Project memory write gate

Only offer project-memory capture when all of these are true:
- the result contains stable, reusable product truths, principles, canon, or decisions
- the evidence is strong enough to justify storing them
- the outcome is not still materially unresolved
- the capture would help future sessions avoid re-arguing the same decision

Do not offer or write project memory when:
- the evidence is too thin
- the answer is still screen-level only
- the comparison is still hybrid-sensitive and unresolved
- the result is mostly a request for the next artifact rather than a usable decision

When a capture is justified:
- prefer `docs/design-system/project-memory.md`
- store unresolved items as open questions or provisional notes, not settled truth
- offer the capture as an explicit action for the user, not as silent mutation
- create or update the pack only after user approval or explicit workflow acceptance

## Audit evidence write gate

Only offer `audit-evidence.md` when all of these are true:
- the workflow has several current-state observations, summaries, or URLs worth preserving for the next audit step
- the evidence is still about present UI or repo reality rather than durable canon
- capturing it would materially reduce recap work in the next audit session

Do not offer or write `audit-evidence.md` when:
- the evidence is still too thin or one-page only
- the user only needs a one-off answer with no repo follow-through
- the content is really stable project doctrine that belongs in `project-memory.md`

When an evidence packet is justified:
- prefer `docs/design-system/audit-evidence.md`
- keep it factual, current-state, source-pointed, and able to preserve structured design-context without turning it into durable memory
- offer the packet as an explicit action for the user, not as silent mutation
- create or update it only after user approval or explicit workflow acceptance

## Review brief write gate

Only offer `review-brief.md` when all of these are true:
- recurring review is explicit
- the repo or product needs a reusable recurring-review scope contract
- the review checkpoints and stop conditions are stable enough to preserve

Do not offer or write `review-brief.md` when:
- the request is still a one-off audit
- the review scope is still too unstable or exploratory
- the user has not approved creating or updating the file

When a recurring-review brief is justified:
- prefer `docs/design-system/review-brief.md`
- keep it scoped, reusable, and explicit
- create or update it only after user approval or explicit workflow acceptance

## Review log write gate

Only offer `review-log.md` when all of these are true:
- recurring review is explicit
- the current cycle produced a compact recurring-review outcome worth preserving
- the user has approved creating or updating the file

Do not offer or write `review-log.md` when:
- the request is still a one-off audit
- the answer is too thin or unresolved to be a useful recurring review entry

When a recurring review log is justified:
- prefer `docs/design-system/review-log.md`
- keep it compact, dated, and drift-aware
- append or update it only after user approval or explicit workflow acceptance

---

## Guardrails

- Do not guess from vibes.
- Do not let style language outrank product constraints.
- Do not start from component lists.
- Do not overfit to famous design systems.
- Do not turn style-family prompts directly into token prescriptions.
- Do not overstate confidence from weak or partial evidence.
- Do not drift into giant component inventories.
- Do not overbuild theming, governance, or abstraction too early.
- Do not turn one-screen audits into system-wide formation claims.
- Do not present hybrid-sensitive comparisons as settled when the fit is still provisional.
- Do not cite contributor docs, `.local` memory, forward-test logs, or source-repo-local file paths in normal user-facing DS guidance.

When confidence is low, the correct response is the smallest useful next move, not a louder answer.

---

## Final principle

The job of this skill is not to sound comprehensive.
The job is to help the next design-system decision become more grounded, more explainable, more lightweight, and more actionable.
