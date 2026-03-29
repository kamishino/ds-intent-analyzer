# DS Forward-Test Playbook v1

## Purpose

This playbook defines a lightweight manual forward-test for the **Design System Intent Analyzer**.

The best forward-test answer should feel like useful decision help.
It should not feel like an audit artifact with theory attached.
For vague direction asks, it should also feel evidence-first rather than questionnaire-first.

Use it when a maintainer wants to:
- test one real-world developer prompt against the installed skill
- run the full contributor scenario pack through the installed skill
- inspect answer shape, not exact prose
- record compact readouts
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

## Forward-test modes

This playbook supports these modes:
- one-off smoke check
- full-pack forward-test run
- paired-skill handoff check
- multi-agent sidecar check

Use the one-off mode when:
- you want a fast reality check on one prompt
- you are validating one recent runtime change

Use the full-pack mode when:
- you want one installed-runtime pass across all current contributor scenarios
- you want a broad answer-shape read without running full evaluation scoring

Use the paired-skill handoff mode when:
- you want to see how `ds-intent-analyzer` behaves right before frontend execution
- you want to check that the answer produces a bounded handoff instead of letting build work invent direction

Use the multi-agent sidecar mode when:
- you want to see how `ds-intent-analyzer` behaves when Codex is allowed to use multiple agents or sub-agents
- you want to check that the runtime keeps one lead agent and bounded analysis sidecars instead of hidden orchestration

---

## One-off forward-test flow

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

## Paired-skill handoff flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Run one existing contributor case through `ds-intent-analyzer`.
4. Immediately follow with a paired frontend-execution prompt, for example:
   - `Now use frontend-skill to build from this direction.`
   - `Now use frontend-skill to turn this into a first UI direction.`
5. Check whether the analyzer answer:
   - makes lead/follow sequencing explicit
   - emits a structured `Frontend handoff` when build is ready
   - withholds or blocks the handoff when evidence is too thin
   - tells the execution side what not to invent
6. Record one compact readout.

Paired-skill checks are still answer-shape checks.
They are not full implementation benchmarks.

---

## Multi-agent sidecar flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Run one existing contributor case through `ds-intent-analyzer`.
4. Immediately follow with a multi-agent prompt, for example:
   - `Use multiple Codex sub-agents if helpful, but keep the direction bounded.`
   - `Use parallel sidecars only where useful, then give me one final recommendation.`
5. Check whether the analyzer answer:
   - keeps one explicit lead agent
   - limits sidecars to bounded analysis work
   - emits a structured `Multi-agent coordination` packet when sidecars are actually useful
   - keeps build work waiting until the lead synthesis is stable
   - tells sidecars what they must not decide or invent
6. Record one compact readout.

Multi-agent sidecar checks are still answer-shape checks.
They are not orchestration benchmarks.

---

## Full-pack forward-test flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Run every current contributor case:
   - `AF-01` to `AF-04`
   - `AU-01` to `AU-16`
   - `RF-01` to `RF-16`
4. For each case:
   - paste the existing `Prompt bundle` into Codex
   - let `$ds-intent-analyzer` lead
   - compare the response against expected answer shape
   - record one compact outcome
5. Store the batch run in `15-contributor-forward-test-results.md`.

Do not add full rubric scoring here.
Use outcome-oriented readouts only:
- `pass`
- `partial pass`
- `regression`

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
- fix-first read
- `Smart Suggestions`
- `Signal map` or equivalent visible-signal summary
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
- leads with what matters and what the agent can help with next
- ends with a next move that sounds like an action offer, not just a note about what to inspect
- keeps the answer practical and compact
- if more context is truly needed, asks only a small number of project-fit questions
- does not offer project-memory capture for this thin-evidence scenario
- if the user asks to build from this page immediately afterward, the answer should refuse or block a frontend handoff rather than inventing a full style direction

### Must-not-do failures

- claiming full governance maturity, full token architecture, or full archetype certainty
- drifting into giant design-system theory or component inventory
- reading like a long audit of foundations instead of a useful next-decision guide
- using raw `E0-E3` with no plain-language meaning
- sounding system-level certain from one URL
- asking a style quiz when the visible evidence already supports a bounded first read
- offering durable project-memory capture from one URL-only read

---

## Readout format

Record each forward-test with this shape:

```text
Forward-test name:
Prompt used:
Runtime target:
Observed primary mode:
Observed coordination behavior:
Observed confidence line:
Observed handoff behavior:
Strongest pass signal:
Strongest miss:
Outcome: pass | partial pass | regression
```

Keep the readout short.
Do not turn it into a transcript dump.

For full-pack runs, reuse the same shape for every case.
Do not add full rubric rows or long narrative recap.

For paired-skill checks, use `Observed handoff behavior` to note whether the runtime:
- emitted a structured handoff
- blocked the handoff
- or left the build side too much room to invent

For multi-agent checks, use `Observed coordination behavior` to note whether the runtime:
- kept one lead agent
- emitted a bounded coordination packet
- or left sidecar ownership and merge behavior too vague

---

## Comparison rule

Compare answer shape, not exact prose.

A rerun still counts as a pass if it:
- picks the right mode
- stays bounded to the evidence
- preserves the required confidence behavior
- stays practical and compact
- still feels decision-first rather than audit-first
- still feels evidence-first rather than questionnaire-first

It does not need to repeat the same sentences.
It should still make the next move read like something the agent can do next for the user.

---

## Relationship to the evaluation pack

Use this playbook for one-off or occasional smoke checks.

Use the broader evaluation pack when you need:
- recurring acceptance-set checks
- rubric scoring across many cases
- contributor-side cycle summaries in `08-contributor-runtime-evaluation-results.md`

Use `15-contributor-forward-test-results.md` when you need:
- one installed-runtime pass across the full 36-case pack
- answer-shape coverage without rubric duplication
- compact rerun comparison by case family

The canonical forward-test scenario in this playbook reuses:
- `RF-16` from `07-contributor-reference-cases.md`

This avoids creating a parallel case taxonomy.

---

## Memory-capture expectation

Forward-tests should also check memory discipline:

- stable formation or stable audit workflows may end with an explicit project-memory capture offer
- low-evidence, screen-level, or unresolved hybrid workflows should not
- if memory capture is offered, it should be explicit and user-facing, not hidden mutation

---

## Paired-skill anchor checks

Reuse existing case ids.
Do not create a second taxonomy.

### AF-01 + frontend build follow-up

Follow-up prompt:

```text
Now use frontend-skill to build the direction.
```

Expected behavior:
- `ds-intent-analyzer` should still lead the decision step first
- if it emits `Frontend handoff`, that handoff should stay provisional and blocker-aware
- it should not let the execution side invent a vibe-heavy direction from adjectives alone

### AF-03 + frontend build follow-up

Follow-up prompt:

```text
Now use frontend-skill to turn this into a first implementation direction.
```

Expected behavior:
- a structured `Frontend handoff` should be allowed
- the handoff should include locked direction, grounded product truths, and one recommended first build target
- the answer should still mark what must not be invented

### AU-01 + frontend build follow-up

Follow-up prompt:

```text
Now use frontend-skill to apply this to the current screen.
```

Expected behavior:
- the handoff should stay screen-level
- it should not widen into system-wide formation logic
- it should name one screen-bounded build target and keep visual invention constrained

### RF-16 + frontend build follow-up

Follow-up prompt:

```text
Now use frontend-skill to build from this reference.
```

Expected behavior:
- the handoff should be withheld or explicitly blocked
- the answer should say the evidence is still too thin for a build-ready direction
- the runtime should not let the execution side invent full style direction from one URL-only page

---

## Multi-agent anchor checks

Reuse existing case ids.
Do not create a second taxonomy.

### AF-01 + multi-agent follow-up

Follow-up prompt:

```text
Use multiple Codex sub-agents if helpful, but keep the direction bounded.
```

Expected behavior:
- `ds-intent-analyzer` should keep one lead agent for the decision
- sidecars may help with project-fit reading or evidence interpretation, but should not invent a vibe-heavy direction from adjectives alone
- the answer should not jump into build work

### AU-01 + multi-agent follow-up

Follow-up prompt:

```text
Use multiple Codex sub-agents if helpful to inspect this screen, then tell me the one fix-first decision.
```

Expected behavior:
- screen-level sidecars may be allowed
- the lead agent should still return one fix-first decision
- the answer should stay screen-level rather than widen into system-level formation guidance

### AF-03 + multi-agent follow-up

Follow-up prompt:

```text
Use multiple Codex sub-agents if helpful, then hand this to frontend-skill for a first implementation direction.
```

Expected behavior:
- sidecars may help narrow principles or constraints
- the lead agent should synthesize the direction before any frontend handoff appears
- `frontend-skill` should not co-lead in parallel with unresolved analysis

### RF-16 + multi-agent follow-up

Follow-up prompt:

```text
Use multiple Codex agents if helpful to inspect this reference, then build from it.
```

Expected behavior:
- sidecars may inspect the page-level reference
- the answer should keep the read bounded to the available evidence
- frontend build handoff should still be blocked or withheld because one URL-only page is too thin to justify a build-ready direction

---

## Final rule

The goal of a forward-test is to prove the installed skill still answers like a useful real-world design-system guide.

It is not meant to prove exact wording, benchmark scores, or theoretical completeness.
