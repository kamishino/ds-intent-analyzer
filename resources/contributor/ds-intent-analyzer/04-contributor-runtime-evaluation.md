# DS Runtime Evaluation Guide v1

## Purpose

This guide defines a lightweight manual evaluation pack for the **Design System Intent Analyzer** in real-world Codex usage.

The goal is to measure whether the current skill runtime:
- routes to the right mode
- stays constraints-first
- stays pattern-first
- respects evidence precedence
- keeps confidence honest
- produces practical next moves and Smart Suggestions
- produces explicit paired-skill handoff when frontend execution is clearly next
- produces explicit bounded multi-agent sequencing when sidecars are actually useful
- behaves like useful decision help instead of an audit-theory layer
- stays compact instead of bloating

This evaluation pack is contributor-facing only.
It is not part of the shipped skill bundle.

For one-off real-world prompt smoke checks, use:
- `14-contributor-forward-test-playbook.md`

That playbook defines the installed-runtime-first forward-test flow and a compact readout format.

For full-pack forward-test runs across all current contributor scenarios, use:
- `15-contributor-forward-test-results.md`

That file is for answer-shape outcomes only.
It is not a replacement for rubric-based evaluation cycles.

---

## What this pack covers

The evaluation pack is split into three case sets:

- `05-contributor-app-fit-cases.md`
  - intent-analysis and formation-recommendation cases
- `06-contributor-audit-cases.md`
  - UI / DS audit cases
- `07-contributor-reference-cases.md`
  - comparative-reference and ambiguity cases

Coverage target:
- at least 2 meaningful cases per runtime mode
- both straightforward and failure-prone prompts
- low-evidence and conflicting-evidence situations
- real Codex-friendly prompt bundles rather than abstract theory

---

## How to run a case

For each case:

1. Copy the `Prompt bundle` into Codex.
2. Include any stated artifact summary or context packet.
3. Let the current `ds-intent-analyzer` skill handle the request.
4. Score the response against the rubric in this guide.
5. Record:
   - pass
   - partial pass
   - regression
6. Note the strongest miss, not just the final score.

Do not grade on prose style alone.
Grade on decision usefulness and runtime behavior.
The best answer should feel like "here is what matters and what I can do next", not "here is a long audit of foundations".
When style or library direction is vague, the best answer should read evidence first, ask minimally, and only then suggest references if the product-fit read is strong enough.

Forward-tests are lighter than full evaluation cycles:
- they smoke-test one real-world prompt
- they compare expected answer shape rather than exact prose
- they should still reuse an existing case id when possible

Batch forward-tests stay lighter too:
- they can cover the full pack
- they record compact `pass / partial pass / regression` outcomes only
- they do not duplicate full rubric scoring per case

For paired-skill checks with `frontend-skill`:
- score handoff clarity and anti-hallucination discipline mainly inside:
  - `Practical Smart Suggestions`
  - `Decision clarity over audit verbosity`
- do not create a separate scoring framework just for skill coordination

For multi-agent or sub-agent checks:
- score coordination clarity and anti-hidden-orchestration discipline mainly inside:
  - `Evidence precedence`
  - `Practical Smart Suggestions`
  - `Decision clarity over audit verbosity`
- do not create a second rubric just for sidecars

---

## Core scoring rubric

Score each category:
- `2` = pass
- `1` = partial pass
- `0` = regression

### 1. Routing correctness
The answer behaves like the expected primary mode.

Pass signals:
- chooses the right mode implicitly
- does not drift into the wrong job shape

Partial-pass signal:
- preserves boundedness and usefulness but leans into the wrong primary mode for a canonical case

Regression signals:
- treats an audit like a formation task
- treats a reference comparison like blind style recommendation
- contradicts an explicit canonical primary mode and still behaves as if that mismatch is unimportant

### 2. Constraints-first behavior
The answer surfaces user, repeated job, risk, density, scale, or governance before style conclusions.

Pass signals:
- identifies actual operating pressures
- makes the product reality legible

Regression signals:
- centers adjectives before constraints
- skips product reality entirely

### 3. Pattern-first behavior
The answer reasons through repeated jobs and flows before components.

Pass signals:
- identifies pattern gravity or repeated flows
- connects those patterns to foundation pressure

Regression signals:
- jumps straight to component lists
- overfocuses on widgets and misses workflow structure

### 4. Evidence precedence
The answer correctly prioritizes artifacts and context over taste wording.

Pass signals:
- references the strongest evidence first
- separates observation from inference
- avoids asking questions that the visible evidence or product context already answers
- if sidecars are used, keeps them bounded to evidence read, current UI/codebase scan, or reference lookup

Regression signals:
- lets adjectives outrank visible or provided evidence
- ignores contradictions in the prompt bundle
- starts with a style quiz or library ranking before reading available evidence
- uses sidecars as an excuse to hide evidence ownership or merge behavior
- treats evaluative claims or confidence labels on a product surface as self-proving instead of checking whether their provenance is visible enough

### 5. Confidence honesty
The confidence level and confidence-line format match the evidence quality.

Pass signals:
- lowers certainty in low-evidence or hybrid-sensitive cases
- names what is missing
- uses confidence wording that an end-user can understand at a glance without a legend
- uses one short inline `Confidence:` line with plain-language strength and only a tiny qualifier when useful
- keeps `E3 / high` rare and reserved for materially strong multi-artifact evidence rather than medium brief-only or one-page cases
- distinguishes `prompt only` from `brief only`, and does not label a structured product brief as if it were a thin prompt

Regression signals:
- sounds certain when the evidence is partial
- pretends an unknown reference is well understood
- uses raw `E0-E3` shorthand with no plain-language meaning in user-facing output
- mirrors the product's own confidence or authority tone without separating visible computation from heuristic or unsupported claims

Format-discipline note:
- if the confidence level is evidence-matched but the wording drifts into a readable non-standard form such as `medium` or `Medium.`, score this category as a partial pass rather than a regression
- if the answer reads the product brief correctly but still calls it `prompt only`, score this category as a partial pass unless the under-confidence materially distorts the recommendation
- reserve regressions for confidence that is materially overstated, misleading, or not user-readable

### 6. Practical Smart Suggestions
The answer gives useful next moves, not vague commentary.

Pass signals:
- identifies fix-first areas
- gives smallest useful next move when evidence is weak
- phrases the next move as something the agent can do next for the user when that would help
- offers project-memory capture only when the workflow has produced stable, reusable decisions
- avoids offering project-memory capture when the evidence is too thin or the result is still unresolved
- when multiple agents are explicitly requested, emits a bounded coordination packet that says who leads, what sidecars may do, and what they must not decide or invent

Regression signals:
- offers generic advice
- gives no next move
- leaves the next move as a passive inspection note when a concrete action offer would be more useful
- offers hidden or automatic memory behavior instead of an explicit capture offer
- offers project-memory capture for screen-level, low-evidence, or hybrid-unresolved results
- invites several agents to work in parallel without making ownership or merge behavior explicit

For direction-seeking prompts, practical guidance may also mean:
- asking only 1-3 project-fit questions when the decision is still blocked
- offering 2-3 matching references with fit and cautions when the evidence is strong enough
- avoiding single-winner prestige answers
- when frontend execution is clearly next, emitting a structured handoff that is explicit about what is locked, what is blocked, and what must not be invented
- when multiple agents are explicitly requested, keeping sidecars analysis-only and build work waiting until synthesis is stable

### 7. Decision clarity over audit verbosity
The answer should make the decision path easier, not just expand the audit.

Pass signals:
- leads with what matters, what to fix first, and what can happen next
- uses audit detail only to support the recommendation
- avoids theory unless it sharpens the decision
- in paired-skill workflows, makes the lead/follow relationship explicit instead of letting analyzer and frontend execution co-lead ambiguously
- in multi-agent workflows, keeps one lead agent responsible for synthesis instead of letting sidecars compete on direction

Regression signals:
- reads like an audit artifact rather than decision help
- overexplains fundamentals that do not change the recommendation
- buries the recommendation under directory-by-directory commentary
- in paired-skill workflows, leaves frontend execution to infer direction from loose prose instead of a bounded handoff or explicit blocker
- in multi-agent workflows, lets several agents co-lead, silently merge, or drift into parallel build work before direction is locked
- misses visible trust leaks or authority-framing issues when those are the sharper product risk than additional visual commentary

### 8. Compactness / non-bloat
The answer stays concise enough for Codex runtime use.

Pass signals:
- structured, readable, and decision-oriented
- does not spill into theory for its own sake

Regression signals:
- long generic taxonomy
- giant component inventories

---

## Suggested scoring outcome

- `14-16`
  - strong pass
- `9-13`
  - partial pass, usable but needs tightening
- `0-8`
  - regression, likely runtime issue

Critical override:
- if routing correctness is `0`, mark the case as a regression
- if a canonical expected primary mode is explicit and the observed answer picks a different primary mode, do not record the case as `pass`
- if confidence honesty is `0` on a weak-evidence case, mark the case as a regression

---

## Smoke subset

Use these four cases for a fast regression check:

- `AF-01` from `05-contributor-app-fit-cases.md`
- `AF-03` from `05-contributor-app-fit-cases.md`
- `AU-01` from `06-contributor-audit-cases.md`
- `RF-02` from `07-contributor-reference-cases.md`

This subset covers:
- adjective-only ambiguity
- formation recommendation
- audit default routing
- hybrid-sensitive reference comparison

---

## UI-language doctrine subset

Use these cases when checking whether the skill still meets developers at UI language first:

- `AU-05` from `06-contributor-audit-cases.md`
- `AU-06` from `06-contributor-audit-cases.md`
- `AU-07` from `06-contributor-audit-cases.md`
- `AU-08` from `06-contributor-audit-cases.md`
- `AU-09` from `06-contributor-audit-cases.md`

This subset covers:
- bare improve asks with no explicit design-system vocabulary
- style discomfort phrasing
- Storybook inconsistency requests
- anti-sameness pressure
- style-guide and Style Dictionary framing

---

## Common failure patterns to watch for

- adjective -> tokens shortcut
- audit prompt -> formation answer drift
- component-first inventories
- overconfident archetype assignment
- famous-system overfitting
- ignoring contradictions between artifact and brief
- generic next steps that do not change the decision
- forcing design-system terminology before the user needs it
- turning Storybook or Style Dictionary asks into token-first prescriptions
- turning the answer into a long audit report when a shorter decision path would do
- using fundamentals or theory that do not change the recommendation
- ambiguous multi-skill sequencing where frontend execution starts before the direction is locked
- frontend-facing handoff that invents vibe, product constraints, or screen specifics not grounded in the evidence
- ambiguous multi-agent sequencing where several sidecars appear to own direction-setting at once
- hidden shared state or invisible merge logic in an answer that claims to use several agents
- starting with style-direction questions when evidence is already available
- turning a UI-library ask into a prestige ranking instead of top-fit references with cautions
- treating provisional outputs as if they are ready for durable project memory

---

## What this pack should influence next

Use evaluation findings to decide:
- whether routing needs more hardening
- whether confidence language needs tightening
- whether certain references are too weak or too noisy
- whether future dataset expansion should target specific failure modes

For confidence-display checks, prefer at least one case from each of:
- URL-only reference read
- one-screen audit
- hybrid-sensitive comparison

Do not use this pack to justify immediate automation or benchmark tooling.

---

## Final principle

This evaluation pack exists to test whether the skill helps Codex make better design-system decisions under realistic prompt conditions.
It does not exist to manufacture a fake benchmark.
