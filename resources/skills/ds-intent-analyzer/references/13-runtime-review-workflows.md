# Recurring Review Workflows v1

## Purpose

This document defines the lightweight recurring-review workflow surface for `ds-intent-analyzer`.

Use it when:
- the user explicitly asks for recurring or scheduled DS review
- the repo already keeps a reusable review scope contract
- the goal is to compare current UI/DS health against prior review expectations without creating a new primary mode

This workflow stays inside `UI / DS Audit`.
It is a compact audit variant, not a fifth runtime mode.

---

## Trigger cues

- `recurring review`
- `scheduled review`
- `weekly design-system review`
- `monthly design-system review`
- `review-brief.md`
- `review-log.md`

---

## Review workflow positioning

Keep the primary mode as `UI / DS Audit`.

Use the recurring-review workflow only when the user clearly wants:
- repeatable review scope
- drift detection across cycles
- a compact health read instead of a one-off audit memo

Do not switch into this workflow when:
- the request is still a one-off audit
- the user wants repo follow-through first, which should stay `Audit handoff`
- the next job is frontend execution, which should stay `Frontend handoff`

---

## Optional downstream artifacts

### Review brief

Preferred downstream path:
- `docs/design-system/review-brief.md`

Purpose:
- preserve the recurring review scope, surfaces, evidence sources, and escalation rules

Preferred section shape:
- `Product note`
- `Surfaces in scope`
- `Recurring checkpoints`
- `Evidence sources`
- `Stop conditions`
- `Escalation triggers`

### Review log

Preferred downstream path:
- `docs/design-system/review-log.md`

Purpose:
- preserve compact dated review outcomes across repeated cycles

Preferred section shape:
- `Review date`
- `Current health`
- `Biggest drift`
- `Keep`
- `Fix next`
- `Confidence`
- `Next review action`

---

## Recurring review shell

- `TL;DR`
- `Current health`
- `Biggest drift`
- `Keep`
- `Fix next`
- `Confidence`
- `Next review action`

Keep this shell compact.
Do not let repeated review turn into a long audit memo when the repo mainly needs continuity and drift detection.

If a previous `review-log.md` entry exists and the recurring review is explicit:
- compare the current evidence against the latest logged drift
- say what got healthier, what regressed, and what changed in priority

---

## Retrieval order

When recurring review is explicit and the repo contains recurring-review artifacts, use this order:
1. fresh screenshots, URLs, repo surfaces, or current prompt artifacts
2. `docs/design-system/review-brief.md`
3. `docs/design-system/audit-evidence.md`
4. `docs/design-system/project-memory.md`
5. the latest relevant `docs/design-system/review-log.md` entry
6. generic shipped references

Why:
- fresh evidence stays strongest
- `review-brief.md` defines the recurring review scope
- `audit-evidence.md` is closer to current-state reality than durable memory
- `project-memory.md` preserves continuity without overriding current evidence
- `review-log.md` is continuity context, not stronger truth than fresher evidence

---

## Write rules

### Review brief write gate

Offer create or update only when all of these are true:
- the user explicitly wants a reusable recurring-review contract
- the repo or product has a stable enough scope for repeated review
- the user explicitly approves creating or updating the file

Do not write it silently.

### Review log write gate

Offer append or update only when all of these are true:
- recurring review is explicit
- the current review produced a compact reusable outcome
- the user explicitly approves creating or updating the file

Do not write it silently.
Do not turn the log into durable project memory by default.

---

## Final rule

Recurring review exists to make repeated DS health checks more useful and more compact.

It should help teams detect drift and preserve continuity without turning the skill into a scheduler, hidden memory layer, or generic review framework.
