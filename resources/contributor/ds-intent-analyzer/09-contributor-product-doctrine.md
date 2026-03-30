# DS Product Doctrine v1

## Purpose

This document defines the stable product doctrine for `ds-intent-analyzer`.

It exists to prevent the skill from drifting into:
- token-first default reasoning
- component-first default reasoning
- design-system-management workflow bloat
- generic UI sameness driven by familiar system references

The goal is not to reject design-system rigor.
The goal is to keep rigor downstream of product reality rather than upstream of it.

---

## Core thesis

Meet developers and clients at **UI language first**.
Then infer deeper system meaning only when the evidence justifies it.

The governing defaults for this repo are:
- `KISS`
- `lightweight-first`
- `Codex/GPT preferential`
- `transparent`

This means the skill should work well when the ask sounds like:
- "make it cleaner"
- "make it better"
- "the styles feel off"
- "Storybook feels inconsistent"
- "this UI feels too generic"

The user does not need to say `design system` for the skill to do useful design-system thinking.

---

## Governing principles

### 1. KISS

Meaning:
- use the smallest useful contract
- prefer the smallest useful explanation
- prefer the smallest useful artifact

Operationally:
- do not add new layers when a wording or contract fix is enough
- do not turn one useful behavior into a heavy subsystem
- do not let the answer sprawl into theory or framework language when a clear decision path is enough

### 2. Lightweight-first

Meaning:
- use the current layer until it clearly fails
- add structure only when existing structure cannot safely hold the behavior

Operationally:
- prefer docs, contracts, and small reference packs over automation or hidden machinery
- prefer one compact artifact over multiple moving parts
- keep retrieval selective, not full-pack by default

### 3. Codex/GPT preferential

Meaning:
- optimize the repo and runtime for Codex/GPT behavior first
- treat other agents as secondary compatibility, not co-equal design targets

Operationally:
- make metadata and first-screen wording legible to Codex/GPT first
- prefer output shapes that are practical in Codex conversations
- prefer runtime contracts that support fast, explicit, high-signal agent behavior

### 4. Transparent

Meaning:
- no hidden behavior when the behavior materially affects user trust or maintainer understanding

Operationally:
- memory capture should be explicit
- confidence should be explicit
- evidence limits should be explicit
- escalation should be explicit when it materially affects the answer
- the skill should never sound magical, automatic, or invisible when its behavior is actually conditional

### When these principles compete

Use this priority order:
1. transparent
2. KISS
3. lightweight-first
4. Codex/GPT preferential

Why:
- hidden behavior breaks trust first
- unnecessary complexity is the next risk
- lightweight should win unless transparency requires one more explicit artifact
- Codex/GPT preference should guide presentation and defaults, but not justify hidden or bloated behavior

### Packaging exception

Strict `skill-creator` guidance prefers a shipped skill tree without extra docs such as `README.md`.
This repo keeps `resources/skills/ds-intent-analyzer/README.md` intentionally because the skill is also packaged for client-repo install flows.

Operationally:
- treat the shipped README as distribution metadata, not runtime guidance
- keep runtime behavior in `SKILL.md` plus `references/`
- do not use the README as a second instruction surface for agent behavior

---

## Principle 1 — UI-language input first

Developers and clients often express the problem through:
- UI quality
- styles
- consistency
- Storybook
- vibes
- visual discomfort

Treat this as the normal entrypoint.
Do not treat it as misuse or as an inferior prompt style.

The skill should be able to start from:
- UI discomfort
- visual inconsistency
- style-guide friction
- "make it feel better" language

without forcing design-system terminology too early.

---

## Principle 2 — System reasoning underneath

The skill should translate UI-language asks into the right depth of reasoning:

1. style or vibe issue
2. style-guide issue
3. foundation inconsistency
4. pattern or system issue
5. true design-system maturity issue

Not every UI-quality complaint is a full design-system problem.
The skill should diagnose the right layer before escalating.

That is how the skill stays lightweight and useful.

---

## Principle 3 — Reflect archetypes, do not clone systems

Archetypes and popular design systems should be used as:
- reflection tools
- posture comparators
- borrowing references
- caution sources

They should not be used as:
- clone targets
- default solutions
- aesthetic shortcuts

The job is to extract:
- posture
- constraints
- repeated jobs
- borrowing logic
- caution boundaries

The job is not to reproduce a familiar UI formula.

---

## Principle 4 — Fight sameness

Consistency is useful.
But consistency alone should not flatten product-specific character.

Do not let:
- token systems
- component inventories
- popular reference systems
- implementation familiarity

erase:
- product reality
- repeated jobs
- information density
- trust level
- expression balance
- user consequences

The skill should help developers avoid making every product feel like the same dashboard, the same admin app, or the same polished but contextless interface.

---

## Principle 5 — Teach developers without forcing DS vocabulary

The skill should help developers understand deeper system implications gradually.

Good behavior:
- respond to UI/style/Storybook language directly
- reveal the deeper system issue progressively
- teach through practical consequences
- connect visual discomfort to foundations, patterns, and constraints only when justified

Bad behavior:
- immediately reframing every ask as a design-system lecture
- forcing token architecture before understanding the product
- insisting on full DS vocabulary before giving useful help

---

## What this doctrine rejects as the default starting point

The following are often useful downstream, but should not be the default entrypoint:
- token-first reasoning
- component-first reasoning
- component documentation workflows
- design-rule generation as the first move
- tailwind/theme configuration as the first answer
- Storybook cleanup as the entire diagnosis

These are implementation or scaling layers.
They are not the primary reading model for this skill.

---

## What this doctrine preserves

This doctrine is fully compatible with:
- constraints first
- context before style
- pattern-first reasoning
- foundation-first recommendations
- evidence-weighted confidence
- KISS and lightweight-first operation

It strengthens the product identity rather than replacing it.

---

## Product promise

`ds-intent-analyzer` should help a developer say:

> I asked about the UI, but the skill helped me understand the deeper system issue without forcing jargon or giving me a generic cloned answer.

That is the intended product outcome.
