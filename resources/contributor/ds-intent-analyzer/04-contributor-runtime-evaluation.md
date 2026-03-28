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

Regression signals:
- sounds certain when the evidence is partial
- pretends an unknown reference is well understood

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

## Common failure patterns to watch for

- adjective -> tokens shortcut
- audit prompt -> formation answer drift
- component-first inventories
- overconfident archetype assignment
- famous-system overfitting
- ignoring contradictions between artifact and brief
- generic next steps that do not change the decision

---

## What this pack should influence next

Use evaluation findings to decide:
- whether routing needs more hardening
- whether confidence language needs tightening
- whether certain references are too weak or too noisy
- whether future dataset expansion should target specific failure modes

Do not use this pack to justify immediate automation or benchmark tooling.

---

## Final principle

This evaluation pack exists to test whether the skill helps Codex make better design-system decisions under realistic prompt conditions.
It does not exist to manufacture a fake benchmark.
