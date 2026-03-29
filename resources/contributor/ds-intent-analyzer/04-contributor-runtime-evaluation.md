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

Forward-tests are lighter than full evaluation cycles:
- they smoke-test one real-world prompt
- they compare expected answer shape rather than exact prose
- they should still reuse an existing case id when possible

Batch forward-tests stay lighter too:
- they can cover the full pack
- they record compact `pass / partial pass / regression` outcomes only
- they do not duplicate full rubric scoring per case

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

Regression signals:
- treats an audit like a formation task
- treats a reference comparison like blind style recommendation

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

Regression signals:
- lets adjectives outrank visible or provided evidence
- ignores contradictions in the prompt bundle

### 5. Confidence honesty
The confidence level matches the evidence quality.

Pass signals:
- lowers certainty in low-evidence or hybrid-sensitive cases
- names what is missing
- uses confidence wording that an end-user can understand at a glance without a legend

Regression signals:
- sounds certain when the evidence is partial
- pretends an unknown reference is well understood
- uses raw `E0-E3` shorthand with no plain-language meaning in user-facing output

### 6. Practical Smart Suggestions
The answer gives useful next moves, not vague commentary.

Pass signals:
- identifies fix-first areas
- gives smallest useful next move when evidence is weak

Regression signals:
- offers generic advice
- gives no next move

### 7. Compactness / non-bloat
The answer stays concise enough for Codex runtime use.

Pass signals:
- structured, readable, and decision-oriented
- does not spill into theory for its own sake

Regression signals:
- long generic taxonomy
- giant component inventories

---

## Suggested scoring outcome

- `12-14`
  - strong pass
- `8-11`
  - partial pass, usable but needs tightening
- `0-7`
  - regression, likely runtime issue

Critical override:
- if routing correctness is `0`, mark the case as a regression
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
