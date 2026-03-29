# DS Forward-Test Playbook v1

## Purpose

This playbook defines a lightweight manual forward-test for the **Design System Intent Analyzer**.

Use it when a maintainer wants to:
- test one real-world developer prompt against the installed skill
- inspect the answer shape, not exact prose
- record one compact readout
- compare future reruns without building a harness

This playbook is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Default test target

Default forward-test target:
- installed runtime copy at `.agents/skills/ds-intent-analyzer/`

Why:
- this is the closest local stand-in for downstream real-world use
- it proves the synced runtime copy is behaving the way a maintainer expects

Source-of-truth reminder:
- canonical edits still belong in `resources/skills/ds-intent-analyzer/`
- use the installed `.agents` copy as the forward-test target, not as the canonical source

---

## Canonical forward-test flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Open Codex in this repo or a comparable local test repo.
3. Paste one real-world developer prompt.
4. Let `$ds-intent-analyzer` lead the answer.
5. Compare the answer against the expected answer shape.
6. Record one compact readout.

Forward-tests are manual smoke checks.
They are not benchmark runs and they do not require exact wording matches.

---

## Canonical scenario

Reuse `RF-16` from `07-contributor-reference-cases.md` as the default scenario.

### Prompt

```text
Use ds-intent-analyzer to check this design-system reference page:
https://thc.motorway.co.uk/0566ad526/p/652544-the-highway-code

Tell me:
- what this page clearly signals
- what looks useful to borrow carefully
- what you would not overclaim from a single URL
- confidence
```

### Why this scenario leads

It is a good default forward-test because it checks:
- developer-language input rather than design-system jargon
- bounded evidence from a single URL
- page-level audit discipline
- confidence readability for end users

### Expected primary mode

- `UI / DS Audit`

### Expected confidence band

- `E0 - very low` to `E1 - low`
- preferred wording for this exact case:
  - `Confidence: E1 - low, one page only`

### Expected answer shape

The answer should stay compact and page-level.

Expected sections:
- `TL;DR`
- `Intent read`
- `Signal map` or equivalent visible-signal summary
- page-level audit read
- `Borrow carefully`
- `Confidence`
- `Next move`

### Must-have traits

- treats the URL as bounded evidence, not proof of the whole system
- identifies what the page visibly signals
- separates observation from broader inference
- says what is reusable to borrow carefully
- says what it would not overclaim from one page
- uses short user-facing confidence wording
- keeps the answer practical and compact

### Must-not-do failures

- claiming full governance maturity, full token architecture, or full archetype certainty
- drifting into giant design-system theory or component inventory
- using raw `E0-E3` with no plain-language meaning
- sounding system-level certain from one URL

---

## Readout format

Record each forward-test with this shape:

```text
Forward-test name:
Prompt used:
Runtime target:
Observed primary mode:
Observed confidence line:
Strongest pass signal:
Strongest miss:
Outcome: pass | partial pass | regression
```

Keep the readout short.
Do not turn it into a transcript dump.

---

## Comparison rule

Compare answer shape, not exact prose.

A rerun still counts as a pass if it:
- picks the right mode
- stays bounded to the evidence
- preserves the required confidence behavior
- stays practical and compact

It does not need to repeat the same sentences.

---

## Relationship to the evaluation pack

Use this playbook for one-off or occasional smoke checks.

Use the broader evaluation pack when you need:
- recurring acceptance-set checks
- rubric scoring across many cases
- contributor-side cycle summaries in `08-contributor-runtime-evaluation-results.md`

The canonical forward-test scenario in this playbook reuses:
- `RF-16` from `07-contributor-reference-cases.md`

This avoids creating a parallel case taxonomy.

---

## Final rule

The goal of a forward-test is to prove the installed skill still answers like a useful real-world design-system guide.

It is not meant to prove exact wording, benchmark scores, or theoretical completeness.
