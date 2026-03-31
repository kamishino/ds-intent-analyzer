# Runtime Index Feasibility v1

## Purpose

This contributor-side pass decides whether `ds-intent-analyzer` benefits from a thin derived runtime index enough to justify shipping one.

The goal is not to invent a database, search service, or hidden memory layer.
The goal is to test whether a transparent orientation helper can:
- sharpen entrypoint selection
- reduce retrieval sprawl
- tighten tie-break prompts in watch cases
- preserve confidence honesty

---

## Success bar

Treat the runtime index as justified only if the contributor rerun shows repeated user-facing value, not just implementation neatness.

Success means:
- watch cases become sharper or faster to orient
- healthy cases stay healthy
- confidence does not inflate
- the runtime still obeys:
  1. fresh evidence
  2. `audit-evidence.md`
  3. `project-memory.md`
  4. shipped references

If the index only changes internal cleanliness without improving answer behavior, do not ship it.

---

## Candidate implementation shape

Use one shipped derived helper only:
- `resources/skills/ds-intent-analyzer/assets/runtime-index.json`

Use one deterministic contributor-side generator only:
- `scripts/build-runtime-index.mjs`

The index should stay:
- read-only
- generated
- orientation-first
- subordinate to the markdown source files

Do not:
- add SQLite
- add vector retrieval
- add hidden writes
- add runtime-local state

---

## Source set

Build the feasibility read from:
- `references/02-runtime-skill-contract.md`
- `references/07-runtime-reference-lookup.md`
- `references/12-runtime-audit-artifacts.md`
- `references/13-runtime-review-workflows.md` once it exists

Treat the markdown files as authoritative.
The derived index is only a compact routing and lookup helper.

---

## Scenario pack

Use these cases for the feasibility pass:
- `RF-07`
- `RF-13`
- `RF-16`
- `AU-19`
- `AU-20`
- `CD-02`

Why these cases:
- `RF-07` and `RF-13` are still watch cases for sharper tie-break behavior
- `RF-16` protects low-evidence page-level discipline
- `AU-19` and `AU-20` protect audit-evidence and project-memory precedence
- `CD-02` protects mixed audit plus bounded donor behavior in a clean client-repo context

---

## Readout shape

Use this compact shape:

```text
- Runtime target:
- Observed primary mode:
- Observed confidence line:
- Strongest pass signal:
- Strongest miss:
- Outcome: pass | partial pass | regression
```

For the pass decision itself, also record:
- repeated user-facing value: yes | no
- proceed to shipped index: yes | no

---

## Proceed rule

Proceed to a shipped runtime index only if:
- at least two watch cases become noticeably sharper
- no healthy guard case regresses
- the contributor read can explain the improvement in user-facing terms

If those conditions are not met:
- keep the idea contributor-side
- log the miss
- do not ship the derived helper
