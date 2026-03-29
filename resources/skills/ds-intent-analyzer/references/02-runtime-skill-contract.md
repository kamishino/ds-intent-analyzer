# DS Runtime Skill Contract v2

## Purpose

This document is the canonical runtime support contract for the **Design System Intent Analyzer** as used by Codex/GPT first.
Other agents are secondary compatibility targets.

It exists to clarify:
- how the skill should route requests
- what evidence should outrank what
- what output shape the agent should default to
- when to stay lightweight
- when to escalate carefully
- when to offer project-memory capture

This file complements `01-runtime-framework.md`.

- `01-runtime-framework.md` owns the broader design-system reading model
- `02-runtime-skill-contract.md` owns Codex-facing runtime behavior

---

## What this contract owns

Use this file to guide:
- request routing
- mode selection
- evidence precedence
- project-memory precedence
- inference order
- output structure
- confidence behavior
- retrieval tiers
- runtime guardrails

Do not use this file as a substitute for deeper framework reasoning when the task needs classification, formation logic, or evidence-quality interpretation.

This runtime should meet developers at UI language first and translate that language into the appropriate depth of system reasoning rather than forcing design-system terminology too early.
This runtime should prefer the smallest explicit mechanism over hidden or abstract machinery.

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
- direct asks for principles, foundations, token direction, or what to stabilize first -> Formation Recommendation
- named systems, “X or Y”, “what should we borrow”, or careful comparison asks -> Comparative Reference Read

For mixed prompts:
- choose one primary mode first
- borrow secondary behavior only if it materially improves the answer
- do not let mixed inputs bloat the response shape

Default rule:
- vague improve/enhance requests default to UI / DS Audit

---

## Evidence precedence

Use this precedence order:
1. uploaded or referenced artifacts
2. imported project context
3. user wording
4. style adjectives or taste language

Project memory packs belong inside imported project context.
If a `docs/design-system/project-memory.md` file is present, use it after current artifact/context read and before falling back to generic references.
If fresh artifacts conflict with stored memory:
- prefer fresh evidence
- call out the drift or staleness explicitly
- do not let old memory override current evidence

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

### One-screen or partial screenshot asks
- avoid system-level certainty
- focus on visible hierarchy, pattern clues, and likely fix-first areas
- keep the answer explicitly screen-level unless additional context is provided
- do not widen a partial audit into broad formation guidance unless it is clearly marked tentative

### Unknown or niche references
- say the precedent is unresolved or weakly grounded
- explain what the user appears attracted to instead of pretending confident knowledge

### Hybrid-sensitive comparisons
- treat the outcome as provisional when two reference logics remain materially plausible
- explain bounded borrowing from each side instead of forcing a clean winner
- state what evidence would resolve or narrow the comparison

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

### TL;DR
3 to 5 decision-oriented bullets.

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

### Confidence note
Use E0 / E1 / E2 / E3.
Separate observation from inference and missing evidence.

### Next move
State the smallest useful next step.

### Memory capture
Optional.
Offer it only when the result contains stable, reusable project decisions.
Use explicit user-facing wording rather than hidden memory behavior.

---

## Mode emphasis

Keep one shared output shape, but change emphasis by primary mode:

- Intent Analysis
  - emphasize constraints, posture candidates, pattern gravity, and the next clarification needed
- UI / DS Audit
  - emphasize strongest positives, biggest weaknesses, fix-first area, and Smart Suggestions
  - if the evidence is only one screen or a partial artifact, stay explicitly screen-level
- Formation Recommendation
  - emphasize principle stack, foundation priorities, token direction, and anti-overbuild warnings
- Comparative Reference Read
  - emphasize what to borrow carefully, what not to copy blindly, confidence limits, and what evidence would break the tie when the fit is still unresolved

---

## Retrieval tiers

Do not read every runtime document automatically.
Retrieve selectively by tier:

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

Contributor docs are not part of normal runtime retrieval.

### Project memory artifact
If the target repo already has `docs/design-system/project-memory.md` or an obvious equivalent:
- retrieve it after current evidence and before generic reference lookup
- prefer active truths and decisions over stale summaries
- if the artifact conflicts with current evidence, treat that as drift to be resolved, not as a reason to force the old answer

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

When confidence is low, the correct response is the smallest useful next move, not a louder answer.

---

## Final principle

The job of this skill is not to sound comprehensive.
The job is to help the next design-system decision become more grounded, more explainable, more lightweight, and more actionable.
