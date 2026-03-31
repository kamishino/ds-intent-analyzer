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
- standing maintainer gate
- full-pack forward-test run
- reference-to-repo handoff check
- recurring-review check
- paired-skill handoff check
- multi-agent sidecar check

Use the one-off mode when:
- you want a fast reality check on one prompt
- you are validating one recent runtime change

Use the standing maintainer gate when:
- you want the default recurring regression check for the installed runtime
- you want one compact builder-usefulness surface instead of a full-pack rerun
- you want to know whether a new slice justifies another runtime patch or not

Use the full-pack mode when:
- you want one installed-runtime pass across all current contributor scenarios
- you want a broad answer-shape read without running full evaluation scoring

Current live contributor scenario surface:
- `AF-01` to `AF-04` from `05-contributor-app-fit-cases.md`
- `PF-01` to `PF-04` plus `PF-02 + frontend-skill` from `18-contributor-app-to-ds-fit-brief-set.md`
- `AU-01` to `AU-25` from `06-contributor-audit-cases.md`
- `RF-01` to `RF-21` from `07-contributor-reference-cases.md`
- total live scenario surfaces: `55`

Keep specialty workflow probes separate from that baseline full-pack count:
- multi-agent sidecar checks
- client-repo dogfood checks
- distribution-proof checks
- structural validation slices that do not rerun prompt transcripts

Use the reference-to-repo handoff mode when:
- you want to see how a reference-led answer behaves when the user clearly wants to apply it to a real repo or application
- you want to check that the answer stays compact, recommendation-first, and emits a bounded `Audit handoff`

Use the recurring-review check mode when:
- you want to see how `ds-intent-analyzer` behaves on a repeated DS health check
- you want to confirm that recurring review stays audit-first, compact, and drift-aware
- you want to check that `review-brief.md` and `review-log.md` stay explicit and opt-in rather than hidden memory

Use the paired-skill handoff mode when:
- you want to see how `ds-intent-analyzer` behaves right before frontend execution
- you want to check that the answer produces a bounded handoff instead of letting build work invent direction

Use the multi-agent sidecar mode when:
- you want to see how `ds-intent-analyzer` behaves when Codex is allowed to use multiple agents or sub-agents
- you want to check that the runtime keeps one lead agent and bounded analysis sidecars instead of hidden orchestration
- you want to validate both proactive sidecar spawning and no-spawn guard behavior

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

Mixed audit/reference note:
- when a prompt includes both current UI evidence and a named reference donor, the current UI still leads the mode unless the user is explicitly asking only for comparison
- in those mixed cases, the reference should stay secondary to the audit rather than replacing it
- prompt-level design-context such as frame links, Dev Mode or MCP summaries, variable notes, annotations, or component-mapping cues should be treated as fresh current evidence rather than as a thin brief
- if `docs/design-system/audit-evidence.md` is part of the prompt bundle, treat it as current-state project context that outranks `docs/design-system/project-memory.md` but not fresher direct artifacts
- if recurring review is explicit and `docs/design-system/review-brief.md` is part of the prompt bundle, treat it as scope context that sits after fresh evidence and before `audit-evidence.md`
- if `docs/design-system/review-log.md` is part of the prompt bundle, treat it as continuity context for drift comparison rather than stronger truth than the current evidence

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

## Reference-to-repo handoff flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Run one existing or new reference-led contributor case that clearly asks how to apply the reference to a real repo or app.
4. Check whether the analyzer answer:
   - stays `Comparative Reference Read` as the primary mode
   - leads with recommendation before deeper theory or taxonomy
   - stays compact when a shorter decision shell is sufficient
   - emits a bounded literal `Audit handoff`
   - offers `docs/design-system/audit-packet.md` only when reusable repo follow-through is clearly wanted
   - keeps `Frontend handoff` separate instead of blending repo inspection with build work
5. Record one compact readout.

Reference-to-repo checks are still answer-shape checks.
They are not implementation benchmarks.

---

## Recurring-review flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Validate the packaged runtime shape.
   - command: `npm run validate`
3. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
4. Run one recurring-review contributor case such as `AU-21` or `AU-22`.
5. Check whether the analyzer answer:
   - stays `UI / DS Audit` as the primary mode
   - uses a compact recurring-review shell rather than a long one-off audit memo
   - compares against prior drift when `review-log.md` is part of the prompt bundle
   - offers `review-brief.md` or `review-log.md` only explicitly and never silently
   - keeps `Audit handoff` and `Frontend handoff` separate unless the user explicitly pivots into one of those next jobs
6. Record one compact readout.

Recurring-review checks are still answer-shape checks.
They are not scheduling or automation benchmarks.

---

## Multi-agent sidecar flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Choose one of these validation paths:
   - explicit-request path using `27-contributor-subagent-prompt-quick-reference.md`
   - proactive path using the raw case prompt bundle only
   - forced single-agent guard using `27-contributor-subagent-prompt-quick-reference.md`
4. Run one existing contributor case through `ds-intent-analyzer`.
5. Check whether the analyzer answer:
   - keeps one explicit lead agent
   - limits sidecars to bounded analysis work
   - emits a structured `Multi-agent coordination` packet only when sidecars are actually useful
   - names the concrete split reason in `Why sidecars now`
   - names the actual chosen sidecar roles instead of generic possibilities
   - caps proactive coordination at `3` sidecars
   - keeps build work waiting until the lead synthesis is stable
   - tells sidecars what they must not decide or invent
   - suppresses the packet entirely on no-spawn guard cases
6. Record one compact readout.

Multi-agent sidecar checks are still answer-shape checks.
They are not orchestration benchmarks.

Recommended case mix:
- positive proactive cases:
  - `AU-24`
  - `AU-25`
  - `RF-21`
  - `AU-21` or `AU-22`
- explicit-request cases:
  - `AF-01 + multi-agent follow-up`
  - `AU-01 + multi-agent follow-up`
  - `PF-02 + frontend-skill`
- no-spawn guards:
  - `RF-16`
  - `AF-01`

---

## Standing maintainer gate

Use this as the default recurring regression gate unless a slice specifically touches a narrower specialty surface.

### Gate source packs

- `AF-*` cases come from `05-contributor-app-fit-cases.md`
- `PF-*` cases come from `18-contributor-app-to-ds-fit-brief-set.md`
- `AU-*` cases come from `06-contributor-audit-cases.md`
- `RF-*` cases come from `07-contributor-reference-cases.md`

### Gate cases

- `AF-01` for vague-intent constraint reading
- `PF-02` for formation usefulness
- `PF-03` for toolkit-pressure reframing
- `PF-04` for audit-shaped builder usefulness
- `RF-02` for hybrid-sensitive comparison discipline
- `RF-16` for thin-evidence page-level discipline
- `PF-02 + frontend-skill` for bounded build handoff quality

### Gate flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Validate the packaged runtime shape.
   - command: `npm run validate`
3. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
4. Run the gate cases in the order listed above.
5. Record one compact readout for each case in `15-contributor-forward-test-results.md`.
6. Treat the gate as healthy only if:
   - the answers still feel like practical decision help
   - `PF-02` and `PF-03` keep bounded `brief only` confidence
   - `RF-16` stays `UI / DS Audit` with `Confidence: E1 - low, one page only`
   - the paired `frontend-skill` follow-up stays explicit, bounded, and anti-invention

### What stays out of the default gate

Keep these as targeted reruns only when a slice touches them:
- trust-of-claims audit cases such as `AU-17`
- multi-agent sidecar checks
- extra platform-boundary probes
- recurring-review cases
- broader full-pack answer-shape sweeps

---

## Full-pack forward-test flow

1. Sync the installed skill copy.
   - command: `npm run sync:local`
2. Use the installed runtime at `.agents/skills/ds-intent-analyzer/`.
3. Run every current contributor case:
   - `AF-01` to `AF-04`
   - `PF-01` to `PF-04`
   - `PF-02 + frontend-skill`
   - `AU-01` to `AU-25`
   - `RF-01` to `RF-21`
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
- uses a short recommendation-first shell when a long memo is unnecessary
- keeps a named reference donor secondary when current UI evidence is supposed to lead the audit
- treats structured design-context as stronger than a thin brief and weaker than fresher conflicting artifacts

Do not mark a rerun as `pass` when:
- the case has an explicit canonical expected primary mode
- the observed answer picks a different primary mode
- even if confidence, boundedness, or usefulness remain otherwise healthy
- the answer leaks contributor docs, `.local` memory, forward-test logs, or source-repo-local file paths into normal user-facing DS guidance
- if that leakage is the only miss and the decision logic remains healthy, record the case as `partial pass` rather than `regression`
- a reference-led answer that should be compact instead sprawls into a long memo and buries the recommendation or next action
- a reference-to-repo answer leaves the next inspection step implied instead of emitting a bounded `Audit handoff`
- a mixed audit/reference prompt drifts into pure comparison mode and stops auditing the current UI first
- a recurring-review prompt ignores the repeated-review context and rewrites a long one-off audit instead of a compact drift-aware shell
- a design-context prompt behaves like a thin brief even though the frame, node, variable, annotation, or code-mapping evidence is strong enough to sharpen the audit
- a stale design-context packet overrides fresher screenshot or repo evidence instead of being called out as drift

It does not need to repeat the same sentences.
It should still make the next move read like something the agent can do next for the user.

---

## Relationship to the evaluation pack

Use this playbook for one-off checks and the standing maintainer gate.

Use the broader evaluation pack when you need:
- recurring acceptance-set checks
- rubric scoring across many cases
- contributor-side cycle summaries in `08-contributor-runtime-evaluation-results.md`

Use `15-contributor-forward-test-results.md` when you need:
- one installed-runtime pass across the full 55-surface live pack
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

### AU-24 proactive sidecar check

Prompt shape:

```text
Use the original `AU-24` prompt bundle only.
```

Expected behavior:
- the runtime may proactively use sidecars because multi-surface design-context and audit evidence create multiple bounded reads
- the coordination packet should explain `Why sidecars now`
- sidecar roles should stay concrete, such as evidence read, design-context mapping, or repo/code mapping

### AU-25 proactive sidecar check

Prompt shape:

```text
Use the original `AU-25` prompt bundle only.
```

Expected behavior:
- the runtime may proactively use sidecars because fresher evidence conflicts with stored design-context
- the lead agent should still explicitly prefer the fresher evidence
- the packet should not let stale stored context silently overrule the current artifact

### RF-16 forced single-agent guard

Follow-up prompt:

```text
Keep this single-agent unless the task is truly blocked without sidecars.
```

Expected behavior:
- no `Multi-agent coordination` packet should appear
- the answer should stay a bounded one-page audit
- the runtime should not treat thin evidence as a reason to split the task

---

## Final rule

The goal of a forward-test is to prove the installed skill still answers like a useful real-world design-system guide.

It is not meant to prove exact wording, benchmark scores, or theoretical completeness.
