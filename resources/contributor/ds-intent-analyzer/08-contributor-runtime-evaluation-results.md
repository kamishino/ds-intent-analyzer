# DS Runtime Evaluation Results v1

## Purpose

This file records the first manual runtime evaluation cycle for the current `ds-intent-analyzer` skill.

Evaluation basis:
- current shipped `SKILL.md`
- current runtime reference pack
- smoke subset defined in `04-contributor-runtime-evaluation.md`

This is a contributor-side review artifact.
It does not change shipped runtime behavior by itself.

---

## Cycle summary

### Smoke subset used
- `AF-01`
- `AF-03`
- `AU-01`
- `RF-02`

### Overall result
- 2 strong passes
- 2 partial passes
- 0 regressions

### Current top strengths
- routing logic is generally aligned with the intended four-mode model
- constraints-first and pattern-first reasoning are now stable in the core runtime contract
- low-evidence handling is materially better than earlier scaffolds

### Current top weaknesses
- confidence scoping is still not sharp enough in hybrid-sensitive comparative reads
- one-screen audit answers still risk drifting slightly upward into formation language instead of staying tightly screen-level

---

## Case results

## AF-01 — Adjective-Heavy Internal Tool Brief

### Expected primary mode
- Intent Analysis

### Observed behavior
- The current runtime is likely to route this correctly into Intent Analysis.
- It should translate `calm`, `premium`, and `modern` into possible operating implications rather than direct token conclusions.
- It should also identify missing product realities and recommend a small next clarification.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `pass`

### Strongest miss
- Pattern gravity may stay slightly abstract because the prompt contains almost no workflow evidence.

### Recommended next action
- Keep this case in the stable acceptance set as the baseline guard against adjective-to-token shortcutting.

---

## AF-03 — Merchant Operations Formation Brief

### Expected primary mode
- Formation Recommendation

### Observed behavior
- The current runtime is likely to route this correctly into Formation Recommendation.
- It should identify merchant/operator repeated jobs, prioritize foundations, and give practical token-direction guidance with anti-overbuild caution.
- The current skill contract is strong on this shape because it explicitly centers foundation-first recommendations.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `1`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `pass`

### Strongest miss
- Confidence language may still read slightly stronger than the medium evidence really supports because no artifact layer is present.

### Recommended next action
- Keep this case in the stable acceptance set as the main check for foundation-first formation quality.

---

## AU-01 — Vague Improve Request With One-Screen Evidence

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should default correctly to UI / DS Audit.
- It should focus on visible hierarchy, density, and fix-first areas rather than claiming full-system maturity.
- The likely remaining weakness is slight drift into broader formation language when discussing “cleaner” or “premium”.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `1`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `12 / 14`
- Result: `partial pass`

### Strongest miss
- Screen-level audits are not yet as tightly bounded as they should be; the runtime may still widen the answer beyond the visible evidence.

### Recommended next action
- Use this case to tighten screen-level audit discipline and reduce formation drift in low-evidence audit prompts.

---

## RF-02 — Hybrid-Sensitive Platform Comparison

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should route this into Comparative Reference Read and recognize the request as hybrid-sensitive.
- It should avoid a fake clean label and explain what is useful from each reference.
- The likely remaining weakness is confidence scoping: the answer may still sound too settled when the archetype boundary is intentionally unresolved.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `1`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `11 / 14`
- Result: `partial pass`

### Strongest miss
- The runtime still needs a sharper way to express “useful but unresolved” comparison outcomes in hybrid-sensitive cases.

### Recommended next action
- Prioritize future hardening around confidence scoping and next-evidence guidance for hybrid comparisons.

---

## Prioritized runtime weaknesses

### Priority 1 — Confidence scoping in hybrid-sensitive comparative reads
Current issue:
- the runtime is good at identifying ambiguity
- it is weaker at staying decisively non-final while still being useful

Why it matters:
- hybrid reference questions are common and high-risk for false certainty

Recommended follow-up:
- harden comparative-read language for “provisional fit”, “bounded borrowing”, and “evidence needed to break the tie”

### Priority 2 — Screen-level audit discipline under low evidence
Current issue:
- one-screen audit prompts route correctly
- but the answer can still drift from visible evidence into broader formation commentary

Why it matters:
- real-world Codex usage will often start from partial screenshots

Recommended follow-up:
- harden the audit path so partial evidence keeps the answer explicitly screen-level unless more context is provided

### Priority 3 — Pattern pressure articulation in low-evidence intent cases
Current issue:
- adjective-only cases no longer collapse into style mimicry
- but pattern gravity can still remain too generic

Why it matters:
- the skill should stay product-oriented even when the brief is vague

Recommended follow-up:
- refine how the runtime translates weak descriptors into tentative repeated-job and workflow hypotheses

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `RF-02`
- `RF-03`

Why this set:
- it covers all four runtime modes
- it includes both low-evidence and medium-evidence prompts
- it stresses contradiction handling, hybrid comparison, and unknown reference handling
- it is small enough to remain practical as a recurring acceptance subset

---

## Decision from cycle 1

Do not expand the dataset or refine the archetype taxonomy next by default.

The next high-leverage hardening slice should focus on:
- hybrid-sensitive confidence scoping
- tighter low-evidence audit discipline

Only after that should the project decide whether deeper dataset work is still the best next investment.
