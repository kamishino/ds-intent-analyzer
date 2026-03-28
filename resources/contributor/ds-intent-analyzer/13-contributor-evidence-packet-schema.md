# Evidence Packet Schema v1

## Purpose

This document defines the minimum contributor-side schema for a design-system evidence packet.

The packet exists to justify a research conclusion.
It should explain why a classification, caution, or borrowing recommendation is reasonable.

It should not become:
- a data warehouse
- a research notebook dump
- a runtime memory engine

Keep it small enough that a contributor could author it by hand.

---

## Design goals

The evidence packet should make these questions easy to answer:
- what source evidence was used
- what the system says about itself
- what the structure and behavior suggest in practice
- what root constraints were inferred
- what classification was chosen
- why confidence is bounded where it is

This supports the current skill jobs by making evidence-weighted reasoning more reusable without making runtime heavier.

---

## Minimum field set

Each evidence packet should define:

- `system_name`
  - canonical system name
- `source_type`
  - one or more source categories such as `official overview`, `principles`, `components`, `accessibility`, `theming`, `governance`, `code repo`
- `evidence_summary`
  - short summary of the most important evidence used
- `declared_signals`
  - what the system explicitly claims or emphasizes
- `structural_signals`
  - what the foundations, components, assets, docs, or implementation surfaces reveal
- `behavioral_signals`
  - what repeated jobs, usage patterns, or operating realities seem most supported
- `inferred_root_constraints`
  - the current best root-constraint read
- `classification_result`
  - posture, primary archetype, and secondary archetype if needed
- `caution_note`
  - why over-copying or over-classifying would be risky
- `confidence_note`
  - why the confidence level is bounded where it is
- `source_pointers`
  - 1-5 source URLs or source handles

---

## Field notes

### `declared_signals`
This is the self-description layer.
Use it to capture principles, positioning, and explicit claims.

### `structural_signals`
This is the “what the system actually exposes” layer.
Use it to record evidence from foundations, tokens, patterns, components, tooling, accessibility assets, or implementation surfaces.

### `behavioral_signals`
This is the “what the system seems built to support” layer.
This field matters because it keeps the reading intent-first rather than component-first.

### `confidence_note`
This should explain uncertainty honestly.

Good:
- `Platform signals are very strong, but the product reality is still enterprise-heavy, so the hybrid boundary should remain explicit.`

Bad:
- `Medium because it feels medium.`

---

## Example packet — IBM Carbon Design System

```yaml
system_name: IBM Carbon Design System
source_type:
  - official overview
  - accessibility documentation
  - component documentation
evidence_summary: Carbon exposes a broad multi-framework ecosystem, explicit accessibility verification guidance, and strong shared-system infrastructure for large IBM product surfaces.
declared_signals:
  - Open-source design system for products and digital experiences
  - Grounded in IBM Design Language
  - Delivered through code, design tools, guidance, and community
structural_signals:
  - Strong multi-framework ecosystem
  - Reusable foundations and component libraries
  - Published accessibility verification and status guidance
behavioral_signals:
  - Supports large-scale enterprise product reuse
  - Serves dense operational workflows across many IBM surfaces
inferred_root_constraints:
  - Cross-product IBM scale
  - Enterprise workflow density
  - Accessibility and compliance expectations
  - Multi-framework implementation reuse
classification_result:
  likely_posture: Platform-first
  primary_archetype: Developer Toolkit / Platform
  secondary_archetype: Enterprise Workflow
caution_note: Carbon’s maturity and platform strength are real, but they can easily be mistaken for a generic default answer; its enterprise heaviness and organizational scale still matter.
confidence_note: Confidence is Medium because the platform evidence is very strong, but the hybrid platform/workflow boundary remains materially important.
source_pointers:
  - https://carbondesignsystem.com/
  - https://carbondesignsystem.com/guidelines/accessibility/overview/
  - https://carbondesignsystem.com/components/overview/accessibility-status/
```

## Example packet — Ant Design

```yaml
system_name: Ant Design
source_type:
  - official overview
  - values and principles
  - theming documentation
evidence_summary: Ant Design combines dense business-UI coverage with tokenized theming and broad reuse signals, but its huge component surface can distort fit judgments if read too literally.
declared_signals:
  - Design values and enterprise-oriented system framing
  - Strong emphasis on design consistency and efficiency
structural_signals:
  - Very broad component coverage
  - Theme customization support
  - Strong business-UI implementation surface
behavioral_signals:
  - Best suited to dense admin and product-tooling workflows
  - Encourages fast enterprise implementation across teams
inferred_root_constraints:
  - Enterprise workflow density
  - Need for fast implementation
  - Theme flexibility
  - Broad reuse across teams and projects
classification_result:
  likely_posture: Workflow-first
  primary_archetype: Enterprise Workflow
  secondary_archetype: Developer Toolkit / Platform
caution_note: The component surface is so broad that teams may copy visible UI patterns instead of reading whether the workflow pressure actually matches their product.
confidence_note: Confidence is Medium because workflow gravity is strong, but platform traits remain material and should not be erased.
source_pointers:
  - https://ant.design/
  - https://ant.design/docs/spec/values/
  - https://ant.design/docs/spec/overview/
  - https://ant.design/docs/react/customize-theme/
```

## Example packet — Porsche Design System

```yaml
system_name: Porsche Design System
source_type:
  - official overview
  - theming documentation
  - accessibility documentation
  - code repository
evidence_summary: Porsche combines strong premium-brand control with explicit implementation assets, theming, and accessibility support across frameworks.
declared_signals:
  - Premium brand consistency across touchpoints
  - Explicit support for accessibility and systemized implementation
structural_signals:
  - Framework-agnostic implementation assets
  - Theming support
  - Published accessibility guidance
behavioral_signals:
  - Designed to preserve strong brand character without losing shared implementation discipline
  - Supports product consistency across multiple surfaces and teams
inferred_root_constraints:
  - Strong brand-expression need
  - Premium quality bar
  - Cross-framework portability
  - Accessibility support
classification_result:
  likely_posture: Brand-first
  primary_archetype: Brand / Consumer / Industry-Specific
  secondary_archetype: Developer Toolkit / Platform
caution_note: Porsche’s system shows how to combine brand control with implementation rigor, but its luxury expression should not be transplanted into unrelated product contexts.
confidence_note: Confidence is Medium because the brand-led reading is strong, while the implementation layer is significant enough to justify a bounded secondary archetype.
source_pointers:
  - https://designsystem.porsche.com/
  - https://github.com/porsche-design-system/porsche-design-system
  - https://designsystem.porsche.com/v3/must-know/accessibility/introduction/
  - https://designsystem.porsche.com/v4/must-know/theme/
```

---

## What this schema should not become

Do not expand this into:
- every workbook score field
- mandatory serialization formats
- runtime packet loading
- automated evidence ingestion
- memory architecture assumptions

The packet is a justification aid, not a new subsystem.
