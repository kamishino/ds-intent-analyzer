# DS Skill Naming Convention Spec v1

## Purpose

This document defines a naming convention for AI Agent Skills used in the Design System project.

The goal is to make skill naming:

- easier for agents to route
- easier for humans to scan
- easier to maintain over time
- easier to scale across multiple skills
- less likely to produce collisions or ambiguity

This convention is designed for:
- Codex Skills
- Claude Code skills
- skill-like bundles used in other coding agents

It is especially important for Codex because:
- Codex starts with skill metadata first
- implicit invocation depends heavily on the skill description
- two skills with the same `name` are not merged automatically

---

## 1. Core naming principle

Use naming to express:

1. **domain**
2. **job**
3. **optional qualifier**
4. **scope only when needed**

A good skill name should tell both a human and an agent:

- what area this belongs to
- what the skill mainly does
- what kind of task it should be used for

---

## 2. Naming layers

### A. Machine-facing name
Use:
- lowercase
- kebab-case
- short
- unique
- stable over time

This is the value used in:
- `SKILL.md` frontmatter `name`
- skill folder name
- explicit invocation references

### B. Human-facing display name
Use:
- Title Case
- readable wording
- slightly more descriptive than machine name

This is the value used in:
- `agents/openai.yaml`
- UI display
- human-facing references

### C. Description
Use the description to define:
- when the skill should trigger
- when it should not trigger
- what kind of task it supports
- what kind of task it should avoid

Do not use the description as a slogan.

---

## 3. Recommended machine-name format

### Default pattern
```text
[domain]-[job]
```

### Extended pattern
```text
[domain]-[qualifier]-[job]
```

### Only use a longer pattern if it adds real clarity
```text
[domain]-[qualifier]-[job]-[mode]
```

Use the shortest name that still remains unambiguous.

---

## 4. Domain prefixes

Use consistent prefixes across the skill library.

### Recommended prefixes
- `ds-` → design system
- `ui-` → UI refactor / UI review
- `ux-` → UX analysis / UX guidance
- `fe-` → frontend implementation
- `ecom-` → ecommerce workflow
- `img-` → image workflow
- `content-` → content/system writing
- `ops-` → operational workflow

### Rule
Prefer a short domain prefix instead of repeating long area names.

Example:
- use `ds-intent-analyzer`
- not `design-system-intent-analyzer-skill`

---

## 5. Standard job terms

Use one core job word consistently.

### Recommended job terms
- `analyzer`
- `auditor`
- `recommender`
- `comparer`
- `validator`
- `refactorer`
- `generator`
- `reviewer`

### Rule
Use one main job word per skill.
Do not stack too many verbs into the machine name.

Bad:
- `ds-analyze-audit-recommend-helper`

Better:
- `ds-intent-analyzer`
- `ds-pattern-auditor`
- `ds-foundation-recommender`

---

## 6. Recommended qualifiers

Use a qualifier only when it helps distinguish the skill’s main logic.

### Good qualifiers
- `intent`
- `pattern`
- `foundation`
- `token`
- `state`
- `layout`
- `interaction`

### Rule
If the job term already makes the role clear, skip the qualifier.

Examples:
- `ds-intent-analyzer`
- `ds-pattern-auditor`
- `ui-layout-refactorer`
- `ds-token-validator`

---

## 7. Folder naming rule

The skill folder name should match the machine-facing skill name exactly.

### Example
```text
.agents/skills/ds-intent-analyzer/
```

### Why
This reduces:
- mapping confusion
- installation errors
- mismatch between folder and metadata
- cognitive overhead during maintenance

---

## 8. `SKILL.md` naming rule

The frontmatter `name` should match the folder name exactly.

### Example
```yaml
---
name: ds-intent-analyzer
description: Use this skill to analyze design-system intent, audit UI or foundations, infer root constraints and pattern priorities, and recommend foundation/token direction. Do not use it for pixel-perfect cloning, generic component generation, or style-only mimicry.
---
```

### Rules
- use lowercase kebab-case
- keep it stable
- do not include decorative wording
- do not include “skill” in the name unless needed
- do not change the name casually once the skill is in use

---

## 9. `agents/openai.yaml` naming rule

Use human-friendly values here.

### Recommended pattern
```yaml
interface:
  display_name: "Design System Intent Analyzer"
  short_description: "Intent-first UI and design-system analysis and audit"
```

### Rules
- `display_name` should be human-readable
- `short_description` should be concise and useful
- these may be more descriptive than the machine-facing name
- do not let display names drift too far from the actual skill purpose

---

## 10. Versioning rule

### Active skill
Do **not** put a version in the active canonical skill name.

Preferred:
- `ds-intent-analyzer`

Avoid:
- `ds-intent-analyzer-v1`

### Parallel or experimental skill
Only add a suffix when you truly need two versions to coexist.

Examples:
- `ds-intent-analyzer-v2`
- `ds-intent-analyzer-exp`
- `ds-intent-analyzer-legacy`

### Why
A stable active name:
- keeps invocation simple
- keeps the skill easier to remember
- reduces naming churn
- lowers risk of duplicate active skills

---

## 11. Reference file naming rule

Inside `references/`, use ordered, readable file names.

### Recommended pattern
```text
NN-[audience]-[topic].md
```

### Examples
- `01-runtime-framework.md`
- `02-runtime-skill-contract.md`
- `03-runtime-signal-dictionary.md`
- `01-contributor-dataset-roadmap.md`
- `03-contributor-naming-conventions.md`

### Rules
- use numeric prefix for reading order
- make the audience explicit
- make the topic explicit
- keep versioning inside the document heading when needed
- keep naming consistent across the pack

---

## 12. Good and bad examples

### Good
- `ds-intent-analyzer`
- `ds-pattern-auditor`
- `ds-foundation-recommender`
- `ui-layout-refactorer`
- `ds-token-validator`

### Bad
- `design-system-skill`
- `my-skill`
- `kami-awesome-design-system-skill-final`
- `uihelper`
- `ds-analyze-audit-recommend-helper`

### Why the good examples work
They are:
- short
- distinct
- interpretable
- easier to route
- easier to expand into a family of related skills

---

## 13. Recommended naming family for this project

### Canonical active skill
- `ds-intent-analyzer`

### Likely future siblings
- `ds-pattern-auditor`
- `ds-foundation-recommender`
- `ds-token-validator`
- `ui-layout-refactorer`
- `ui-state-auditor`

### Human-facing names
- Design System Intent Analyzer
- Design System Pattern Auditor
- Design System Foundation Recommender
- Design System Token Validator
- UI Layout Refactorer
- UI State Auditor

---

## 14. Decision rule for naming new skills

When naming a new skill, ask:

1. What domain does this belong to?
2. What is its one main job?
3. Do I really need a qualifier?
4. Will this still make sense six months from now?
5. Could this collide with an existing skill?
6. Is the machine name shorter than the display name?

If the answer is unclear, simplify the name.

---

## 15. Final recommendation for the current skill

### Recommended machine-facing name
`ds-intent-analyzer`

### Recommended folder
`ds-intent-analyzer/`

### Recommended display name
`Design System Intent Analyzer`

### Recommended short description
`Intent-first UI and design-system analysis and audit`

This is the preferred naming set for the current project because it is:

- short
- distinctive
- aligned with the project’s intent-first model
- broad enough to support analysis and audit
- narrow enough to avoid vague “everything skill” naming

---

## Final rule

A skill name should not try to explain everything.

It should make the skill:
- easy to trigger
- easy to understand
- easy to organize
- easy to grow into a larger skill library
