# Registry Schema v1

## Purpose

This document defines the minimum contributor-side schema for a researched design-system registry entry.

The goal is not to build a runtime database.
The goal is to capture the smallest stable summary that an AI agent could reuse later without rereading the full workbook.

Keep this schema:
- lightweight
- documentation-first
- decision-oriented

Do not treat it as an executable contract yet.

---

## Design goals

The registry schema should answer only these questions:
- what system is this
- what is it most useful as a reference for
- what posture and archetype does it likely lean toward
- how confident is that read
- what should an agent borrow carefully
- what should an agent avoid copying blindly

If a field does not materially help one of the current skill jobs, leave it out.

---

## Minimum field set

Each registry entry should define:

- `system_name`
  - canonical public system name
- `organization`
  - organization or product owner
- `reference_use`
  - what this system is best used as a reference for
- `likely_posture`
  - current best posture read
- `primary_archetype`
  - current best primary archetype
- `secondary_archetype`
  - optional; use only when the secondary force is real and materially useful
- `confidence`
  - `Low | Medium | High`
- `evidence_quality`
  - `E1 | E2 | E3`
- `main_caution`
  - the main reason an agent should avoid over-copying or over-trusting this system
- `main_reusable_lesson`
  - the strongest reusable lesson for Codex runtime guidance
- `source_pointers`
  - 1-5 official or high-quality source pointers

---

## Field notes

### `reference_use`
This should be practical, not taxonomic.

Good:
- `Best used for enterprise workflow pattern coverage with theme flexibility`
- `Best used for premium brand control with implementation portability`

Bad:
- `A very mature design system`

### `secondary_archetype`
Use only when it helps an agent reason better.
Do not add it just because the system is complicated.

### `main_caution`
This field matters because popular systems are easy to over-copy.
The caution should protect against sameness, false fit, or false certainty.

### `source_pointers`
Keep this small.
This schema is not a bibliography.

---

## Example entry — IBM Carbon Design System

```yaml
system_name: IBM Carbon Design System
organization: IBM
reference_use: Best used for ecosystem-level system building with strong multi-framework distribution and explicit accessibility rigor.
likely_posture: Platform-first
primary_archetype: Developer Toolkit / Platform
secondary_archetype: Enterprise Workflow
confidence: Medium
evidence_quality: E3
main_caution: Carbon’s platform strength is unusually high, but its product reality is still enterprise-heavy; do not copy IBM’s visual language or scope without similar organizational scale.
main_reusable_lesson: Excellent reference for ecosystem-level system building: multi-framework distribution, explicit accessibility testing, and strong brand-to-code translation.
source_pointers:
  - https://carbondesignsystem.com/
  - https://carbondesignsystem.com/guidelines/accessibility/overview/
  - https://carbondesignsystem.com/components/overview/accessibility-status/
```

## Example entry — Ant Design

```yaml
system_name: Ant Design
organization: Ant Group
reference_use: Best used for workflow-heavy business UI with broad pattern coverage and tokenized theming flexibility.
likely_posture: Workflow-first
primary_archetype: Enterprise Workflow
secondary_archetype: Developer Toolkit / Platform
confidence: Medium
evidence_quality: E2
main_caution: Its huge component surface can pull teams into component-led copying; the right takeaway is enterprise pattern coverage and theme architecture, not the whole UI aesthetic.
main_reusable_lesson: Useful reference for tokenized theming plus dense enterprise component coverage, especially when you need fast build velocity in admin or product tooling.
source_pointers:
  - https://ant.design/
  - https://ant.design/docs/spec/values/
  - https://ant.design/docs/spec/overview/
  - https://ant.design/docs/react/customize-theme/
```

## Example entry — Porsche Design System

```yaml
system_name: Porsche Design System
organization: Porsche
reference_use: Best used for brand-led system building with strong visual control, framework portability, and explicit accessibility support.
likely_posture: Brand-first
primary_archetype: Brand / Consumer / Industry-Specific
secondary_archetype: Developer Toolkit / Platform
confidence: Medium
evidence_quality: E2
main_caution: Porsche’s luxury-brand surface is unusually strong, so its visual language should not be transplanted into unrelated product contexts.
main_reusable_lesson: Useful reference for combining high brand control with framework-agnostic implementation assets, theming, and explicit accessibility support.
source_pointers:
  - https://designsystem.porsche.com/
  - https://github.com/porsche-design-system/porsche-design-system
  - https://designsystem.porsche.com/v3/must-know/accessibility/introduction/
  - https://designsystem.porsche.com/v4/must-know/theme/
```

---

## What this schema should not become

Do not expand this into:
- full component inventories
- score tables copied from the workbook
- governance process diagrams
- runtime loader requirements
- taxonomy over-engineering

If more detail is needed, put it in an evidence packet, not in the registry entry.
