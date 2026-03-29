# DS Quick Lookup Pack v1

## Purpose

This file provides a **lightweight lookup layer** for common, high-value design systems.

Use it when:
- a user references a popular design system
- a fast comparison is enough
- the goal is orientation, not deep research
- the agent needs a strong precedent quickly

Do **not** use this file as a replacement for deeper evidence when:
- the task needs high-confidence classification
- the system is ambiguous or hybrid-sensitive
- the user wants a deeper audit or formation recommendation

---

## How to use this pack

Each lookup card should answer quickly:
- what the system is most useful as a reference for
- what posture / archetype it likely leans toward
- what its strongest reusable lesson is
- what to borrow carefully
- what not to copy blindly
- what short developer-decision cue is most useful when the ask is implementation-shaped

Treat these systems as developer-decision references, not prestige defaults.
Use them to explain tradeoffs, fit, and caution.
Do not use them to shortcut product judgment.
Use them after the strongest available evidence has already been read.
Do not start with this pack if screenshots, codebase clues, docs, or product context already provide a stronger read.

---

## Lookup cards

### GOV.UK
- **Best used for:** public-service clarity and trust-heavy guidance
- **Likely posture:** Trust-first
- **Likely archetype:** Public Trust Service
- **Strongest reusable lesson:** plain-language hierarchy and safe comprehension
- **Borrow carefully:** content-first structure, clear form guidance, restrained interaction
- **Do not copy blindly:** extreme restraint for products that need stronger identity or denser workflows

### USWDS
- **Best used for:** accessible public-sector patterns and stable service UI
- **Likely posture:** Trust-first / Accessibility-first
- **Likely archetype:** Public Trust Service
- **Strongest reusable lesson:** accessible defaults and predictable system behavior
- **Borrow carefully:** semantics, contrast discipline, service clarity
- **Do not copy blindly:** government tone in commercial or expressive contexts

### Shopify Polaris
- **Best used for:** merchant operations and revenue-adjacent workflows
- **Likely posture:** Commerce-first
- **Likely archetype:** Commerce Enablement
- **Strongest reusable lesson:** operational clarity for products, orders, settings, and decisions
- **Borrow carefully:** state clarity, risk/value cues, management patterns
- **Do not copy blindly:** merchant logic for generic dashboards or consumer-first journeys

### GitHub Primer
- **Best used for:** scalable system structure and design-to-code alignment
- **Likely posture:** Platform-first
- **Likely archetype:** Developer Toolkit / Platform
- **Strongest reusable lesson:** reusable primitives, documentation discipline, semantic consistency
- **Borrow carefully:** token discipline, naming, adoption patterns
- **Do not copy blindly:** platform-scale abstraction before product patterns are stable

### Atlassian Design System
- **Best used for:** product-scale consistency across teams and complex software surfaces
- **Likely posture:** Platform-first with workflow gravity
- **Likely archetype:** Developer Toolkit / Platform
- **Strongest reusable lesson:** strong implementation support with mature documentation
- **Borrow carefully:** contribution thinking, composability, foundation consistency
- **Do not copy blindly:** governance overhead that a smaller team cannot sustain

### Salesforce Lightning
- **Best used for:** dense operational software and enterprise workflow support
- **Likely posture:** Workflow-first
- **Likely archetype:** Enterprise Workflow
- **Strongest reusable lesson:** structured patterns for heavy, repeated work
- **Borrow carefully:** workflow clarity, data-heavy hierarchy, state handling
- **Do not copy blindly:** enterprise density for lightweight or brand-led products

### Uber Base
- **Best used for:** internal/product workflow systems with practical operational gravity
- **Likely posture:** Workflow-first
- **Likely archetype:** Enterprise Workflow
- **Strongest reusable lesson:** pragmatic structure for task-heavy product surfaces
- **Borrow carefully:** layout logic, dense pattern support, operational clarity
- **Do not copy blindly:** admin-heavy structure where discovery or emotion should lead

### Airbnb Design Language System
- **Best used for:** brand-led systems with controlled expression and product polish
- **Likely posture:** Brand-first
- **Likely archetype:** Brand / Consumer / Industry-Specific
- **Strongest reusable lesson:** expression with strong system discipline
- **Borrow carefully:** tone, shape language, cohesive perception
- **Do not copy blindly:** brand-led motion or softness where trust/workflow clarity should dominate

### Ant Design
- **Best used for:** workflow-heavy business UI when teams need broad enterprise pattern coverage and tokenized theming flexibility
- **Likely posture:** Workflow-first with implementation breadth
- **Likely archetype:** hybrid-sensitive; strongest lean is Enterprise Workflow with bounded Developer Toolkit / Platform traits
- **Strongest reusable lesson:** dense business-software coverage plus theme architecture can accelerate operational UI without forcing a single visual formula
- **Borrow carefully:** enterprise pattern coverage, data-heavy structure, state handling, and tokenized theming discipline
- **Do not copy blindly:** broad component coverage as proof of product fit, or default business UI tone for every workflow product
- **Developer guidance cue:** if the team wants Ant because it feels complete, check whether they actually need workflow coverage first or are just reaching for maturity by default

### Carbon
- **Best used for:** platform-scale system rigor when the product also carries real enterprise and operational gravity
- **Likely posture:** Platform-first with enterprise-workflow gravity
- **Likely archetype:** hybrid-sensitive; strongest lean is Developer Toolkit / Platform with real Enterprise Workflow gravity
- **Strongest reusable lesson:** ecosystem-level system building through disciplined foundations, accessibility rigor, and cross-product consistency
- **Borrow carefully:** foundation discipline, accessibility verification, documentation structure, and multi-surface consistency thinking
- **Do not copy blindly:** IBM-scale formality, heavy governance, or platform-weight visual language before your own patterns and adoption scale justify it
- **Developer guidance cue:** if Carbon feels “mature,” separate what you need from it: platform rigor, enterprise clarity, or simply better workflow patterns

### PatternFly
- **Best used for:** operations-heavy enterprise products where task states, management flows, and dense admin structure matter more than platform prestige
- **Likely posture:** Workflow-first with bounded platform support
- **Likely archetype:** hybrid-sensitive; strongest lean is Enterprise Workflow with Developer Toolkit / Platform support traits
- **Strongest reusable lesson:** practical support for task-heavy management patterns, state visibility, and dense operational structure
- **Borrow carefully:** management states, action hierarchy, dense information structure, and practical consistency across admin surfaces
- **Do not copy blindly:** infrastructure-heavy operational models for products that need stronger commerce logic, lighter foundations, or clearer brand tone
- **Developer guidance cue:** if the team is split between Carbon and PatternFly, start from repeated operational jobs before comparing docs polish or ecosystem maturity

### Clarity Design System
- **Best used for:** enterprise application work where inclusive defaults, implementation assets, and practical workflow clarity matter more than distinctive brand expression
- **Likely posture:** Workflow-first with accessibility discipline
- **Likely archetype:** Enterprise Workflow with bounded Developer Toolkit / Platform traits
- **Strongest reusable lesson:** enterprise-first systems can keep inclusion and accessibility as a real foundation instead of a late compliance layer
- **Borrow carefully:** inclusive defaults, accessibility-backed workflow patterns, public roadmap signals, and practical implementation support for enterprise teams
- **Do not copy blindly:** framework-shaped opinionation, enterprise tone, or heavier implementation assumptions when the product needs lighter foundations or more consumer-facing posture
- **Developer guidance cue:** if Clarity feels “solid and accessible,” check whether the real need is enterprise workflow clarity first or simply better baseline discipline

### Elastic UI Framework
- **Best used for:** dense internal product surfaces that need composable implementation assets, theming support, and reusable patterns for data-rich workflows
- **Likely posture:** Platform-first with workflow gravity
- **Likely archetype:** hybrid-sensitive; strongest lean is Developer Toolkit / Platform with real Enterprise Workflow gravity
- **Strongest reusable lesson:** a reusable implementation layer can stay paired with dense workflow patterns and theme discipline without pretending brand expression is the main job
- **Borrow carefully:** composable patterns, theme-token setup, accessibility baselines, and documentation-backed support for dense internal product work
- **Do not copy blindly:** Elastic-shaped data-product assumptions, platform breadth, or observability-style density where the product reality is lighter or more narrowly task-shaped
- **Developer guidance cue:** if EUI feels like the strongest library option, separate the need for composable platform assets from the need for dense workflow patterns

### Porsche Design System
- **Best used for:** brand-led system building where premium expression must stay controlled, portable, and implementation-aware
- **Likely posture:** Brand-first with system discipline
- **Likely archetype:** Brand / Consumer / Industry-Specific with bounded Developer Toolkit / Platform traits
- **Strongest reusable lesson:** controlled premium expression can be systematized without giving up accessibility or implementation rigor
- **Borrow carefully:** tone restraint, shape language, premium perception, theming discipline, and accessibility-backed implementation quality
- **Do not copy blindly:** luxury-brand cues, polished surface language, or premium symbolism in unrelated product contexts
- **Developer guidance cue:** if the team says “make it feel more premium,” borrow Porsche for restraint and system discipline, not for direct visual transplantation

### Gestalt
- **Best used for:** consumer-product systems that need coherent brand tone, reusable code, and accessible product guidance across many contributors
- **Likely posture:** Brand-first with bounded platform support
- **Likely archetype:** Brand / Consumer / Industry-Specific with bounded Developer Toolkit / Platform traits
- **Strongest reusable lesson:** distinctive consumer-product tone can stay coherent at scale without giving up a usable implementation layer
- **Borrow carefully:** cohesive tone, accessible product guidance, cross-team shared language, and restrained expression that supports product clarity
- **Do not copy blindly:** Pinterest-specific discovery cues, soft consumer mannerisms, or visible surface polish without matching product logic
- **Developer guidance cue:** if Gestalt feels polished, borrow coherence and restraint before copying the visible consumer surface

### Backpack
- **Best used for:** consumer-product systems where accessibility, localisation, and cross-disciplinary consistency matter across repeated high-volume journeys
- **Likely posture:** Brand-first with accessibility discipline
- **Likely archetype:** Brand / Consumer / Industry-Specific with bounded Developer Toolkit / Platform traits
- **Strongest reusable lesson:** accessibility, localisation, and content guidance can be first-class system inputs rather than add-ons behind a branded surface
- **Borrow carefully:** localisation-aware content patterns, accessible journey support, collaborative product language, and friendly clarity across repeated user flows
- **Do not copy blindly:** travel-specific search or booking assumptions, friendly consumer tone, or Skyscanner-shaped journey logic in unrelated products
- **Developer guidance cue:** if Backpack feels “usable and friendly,” isolate whether that comes from localisation and accessibility discipline or from travel-product flow assumptions

### Chakra UI
- **Best used for:** lightweight platform-style reuse and pragmatic implementation
- **Likely posture:** Platform-first
- **Likely archetype:** Developer Toolkit / Platform
- **Strongest reusable lesson:** approachable composability and reusable primitives
- **Borrow carefully:** flexible primitives, scalable naming, implementation simplicity
- **Do not copy blindly:** assuming primitive flexibility solves unclear product patterns

### shadcn/ui
- **Best used for:** fast product building with composable UI starting points
- **Likely posture:** Platform-first
- **Likely archetype:** Developer Toolkit / Platform
- **Strongest reusable lesson:** practical composability and implementation speed
- **Borrow carefully:** building-block mindset, local ownership, flexible assembly
- **Do not copy blindly:** raw assembly speed without foundation/token discipline

### Headless UI
- **Best used for:** interaction primitives and accessibility-aware composition
- **Likely posture:** Platform-first
- **Likely archetype:** Developer Toolkit / Platform
- **Strongest reusable lesson:** behavior-first primitives without heavy styling assumptions
- **Borrow carefully:** interaction logic and accessibility-aware composition
- **Do not copy blindly:** expecting headless primitives to replace product-level system decisions

---

## Lookup usage cautions

### 1. Do not treat references as clone targets
These systems are best used as **logic references**, not visual targets.

### 2. Repeated job beats popularity
A famous design system is not automatically the right precedent.

### 3. Hybrid-sensitive systems need caution
For systems like:
- Ant Design
- Carbon
- PatternFly
- Elastic UI Framework

use the lookup only as orientation.
Deep work should still go back to stronger evidence.
Say what the strongest lean is, what the bounded secondary force is, and what evidence would break the tie.

### 4. Borrow principles, not surface style
The safest reuse usually comes from:
- posture
- pattern priorities
- foundation logic
- token discipline
- governance lessons

### 5. Explain to developers in product-fit language
When using this pack in answers:
- explain why a reference fits or does not fit the product reality
- compare tradeoffs instead of ranking prestige
- steer away from “best library” framing when the real issue is foundations or pattern clarity
- prefer 2-3 matching references with cautions over a single “best” recommendation
- make clear that the answer is about best fit for this product shape, not best library overall

### 6. Brand-led references are caution tools, not transplant kits
For references like:
- Porsche Design System
- Gestalt
- Backpack

the useful reuse usually comes from:
- controlled expression
- restraint
- tone discipline
- implementation rigor behind the tone

not from copying the visible luxury surface into an unrelated product.

---

## Final rule

This pack exists to speed up orientation, not to replace real analysis.
Use it to start faster.
Do not use it to skip evidence.
If the evidence is still thin, ask a small number of project-fit questions before leaning on this pack.
