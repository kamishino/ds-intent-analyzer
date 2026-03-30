# DS Skill Organization Conventions v1

## Purpose

This document defines the maintainer-facing organization rules for `ds-intent-analyzer`.

The goal is to keep the shipped skill:
- lean
- Codex-friendly
- progressively disclosed
- easy to validate
- easy to maintain without duplicate ownership

---

## Core conventions

### 1. `SKILL.md` is trigger-time guidance only

`SKILL.md` should own only:
- identity
- best fit / not for
- discovery ladder
- core rules
- routing
- high-level retrieval guidance
- guardrails

Do not let `SKILL.md` become a second runtime contract or a second output-template file.

### 2. One behavior has one owner

Use single ownership for runtime behavior:
- `02-runtime-skill-contract.md`
  - runtime contract
  - precedence
  - coordination
  - lead/follow behavior
- `06-runtime-output-templates.md`
  - answer shape
  - phrasing
  - confidence wording
  - handoff blocks
- deeper references
  - specialized logic only

If a rule already has a detailed owner, `SKILL.md` should point to it instead of restating it.

### 3. Shipped skill tree is runtime-only

Allowed shipped top-level artifacts:
- `SKILL.md`
- `agents/`
- `references/`
- `assets/`
- `scripts/` only if the shipped skill truly needs runtime scripts

Disallowed shipped top-level auxiliary docs:
- `README.md`
- installation guides
- quick references
- changelogs
- maintainer notes

Package and install docs belong at repo root.
Maintainer and contributor docs belong under `resources/contributor/ds-intent-analyzer/`.

### 4. Progressive disclosure is mandatory

Keep `SKILL.md` short enough for trigger-time use.
Move detailed runtime behavior into shipped references.
Keep reference loading one level deep from `SKILL.md`.
Prefer selective retrieval over loading the full reference pack by default.

### 5. Validation follows runtime change

Every runtime behavior change should be followed by:
- `npm run sync:local`
- `npm run validate`
- one relevant forward-test

Behavior change means any change to:
- trigger wording
- routing
- confidence
- memory capture
- frontend handoff
- multi-agent behavior
- output-shape defaults

---

## Validator-enforced core rules

The validator should enforce only the highest-value structural rules:
- shipped skill tree must contain required runtime artifacts
- shipped skill tree must not contain auxiliary top-level Markdown docs besides `SKILL.md`
- deprecated or contributor-only runtime files must not remain in the shipped reference tree

Do not broaden the validator into a full doctrine checker.

---

## Maintainer rule of thumb

When a slice changes runtime behavior, ask:

1. Does this belong in `SKILL.md`, or only in a reference?
2. Is there already a canonical owner for this rule?
3. Will this make Codex faster to route and easier to guide?
4. Can the change be proven with one small forward-test?

If the answer to `2` is yes, do not duplicate the rule.
