# Recurring Review Pass v1

## Purpose

This contributor-side pass decides whether recurring DS review creates real user-facing value before the workflow becomes a shipped runtime surface.

The goal is not to add a scheduler or a new primary mode.
The goal is to prove that repeated review can become:
- more compact
- more drift-aware
- more reusable

without turning into maintainer-only process overhead.

---

## Default scenarios

Use these two audit-family anchors:
- `AU-21` healthy recurring review
- `AU-22` drift-detection recurring review

Both cases should keep primary mode `UI / DS Audit`.
The difference is the review shell and continuity behavior, not routing.

---

## Proof flow

1. Sync the installed runtime.
2. Validate the package and shipped runtime.
3. Run `AU-21`.
4. Run `AU-22`.
5. Simulate at least two recurring review cycles on the same synthetic product surface.
6. Check whether the answer:
   - stays compact
   - compares against previous drift when that context exists
   - avoids collapsing into `Audit handoff`
   - avoids collapsing into `Frontend handoff`
   - avoids silent memory mutation

---

## Automation-ready manual prompt shape

Before documenting any automation flow broadly, prove that this prompt shape works well as a normal manual prompt:

```text
Use ds-intent-analyzer to run our recurring design-system review.

Use these repo artifacts if present:
- docs/design-system/review-brief.md
- docs/design-system/audit-evidence.md
- docs/design-system/project-memory.md
- docs/design-system/review-log.md

Keep the answer compact and recurring-review shaped:
- TL;DR
- Current health
- Biggest drift
- Keep
- Fix next
- Confidence
- Next review action

If a reusable recurring review artifact would help, offer to update review-brief.md or review-log.md explicitly instead of writing silently.
```

If this manual prompt is not useful yet, do not promote recurring review into automation guidance.

---

## Acceptance rule

Treat recurring review as justified only if:
- repeated review feels more useful than repeating the same one-off audit prompt
- the answer detects drift across cycles rather than rewriting the same memo
- the review shell stays compact and actionable
- artifact offers stay explicit and opt-in

If only maintainer convenience improves:
- keep the workflow contributor-side
- do not ship it yet
