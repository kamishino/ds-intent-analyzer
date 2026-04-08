# Contributor Dogfood Feedback Template v1

## Purpose

Use this template after a real `ds-intent-analyzer` session when a contributor wants to turn runtime feedback into a focused maintainer handoff.

Use it for:
- client-repo dogfood sessions
- source-repo dogfood sessions
- downstream install/runtime validation passes
- real transcript follow-up where the skill helped, but parts of the runtime felt heavy, unclear, or overbuilt

This is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Guidance

Keep the handoff narrow.
Do not restate the whole runtime doctrine.

Prefer:
- what helped in the real session
- what felt heavy or confusing
- concrete shipped files or sections to cite
- one clear contributor outcome

Do not use this template to propose a rebuild from scratch when the real issue is wording, prominence, or packaging clarity.

---

## Template

```md
# `ds-intent-analyzer` Contributor Feedback Handoff

## Context

- runtime target:
- task shape:
- evidence used:
- what the user actually needed:

## What Worked

- 

## Primary Issues

### 1.

- what felt heavy, unclear, or over-specified
- where it showed up
- why it mattered in the real session

## Recommended Improvements

### 1.

- the smallest useful change
- the shipped runtime files or maintainer docs most likely involved

## Evidence to Cite

- relevant file paths, sections, counts, or transcript observations
- concrete examples over broad impressions

## Real Session Example

- the short behavior that best shows where the skill helped or felt heavy

## Requested Contributor Outcome

- the exact improvement you want maintainers to make next
```

---

## Final rule

The goal is a practical maintainer handoff, not a broad theory memo.
If one concrete runtime simplification is clearly the main issue, lead with that.
