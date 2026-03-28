# DS Analyzer Scope v2

## Purpose

This document defines the scope for the **Intent-First Design System Analyzer & Audit**.

This analyzer is optimized to support **AI Agents through reusable Agent Skills**.

The analyzer exists to help with:
- understanding what the user is actually trying to build or evaluate
- reading design-system intent from natural language, imported context, and uploaded files
- inferring root constraints and repeated jobs
- identifying likely posture and pattern priorities
- auditing foundation maturity and token direction
- recommending next moves without pretending certainty
- turning audits into practical actions

It does **not** exist to:
- automate all design-system classification
- generate full component libraries from shallow prompts
- replace product understanding with style mimicry
- turn adjectives into false certainty
- overbuild logic for edge cases too early

---

## Core job of the analyzer

The analyzer should answer:

1. What is the user likely trying to achieve?
2. What product reality or workflow reality is shaping the UI?
3. What are the dominant constraints?
4. What patterns are likely to matter most?
5. What foundation directions follow from that reality?
6. What token recommendations are reasonable at this stage?
7. What actions should the user take next?
8. How strong is the evidence?

---

## Primary modes

### Mode A — Intent Analysis
Use when the input is mostly:
- natural language
- product brief
- strategy note
- wishlist
- style preference statement
- project context

Goal:
Understand the intended product/system direction before proposing foundations or tokens.

### Mode B — DS / UI Audit
Use when the input includes:
- screenshots
- design-system docs
- foundations/tokens docs
- design pages
- pattern examples
- existing product UI

Goal:
Identify strengths, gaps, maturity signals, fix-first priorities, and Smart Suggestions.

### Mode C — Foundation Recommendation
Use when the input is strong enough to propose:
- directory-level foundation direction
- token semantics
- hierarchy and rhythm direction
- caution boundaries

Goal:
Recommend **foundation-level** direction, not full-system completion claims.

### Mode D — Comparative Read
Use when the user wants:
- reference comparison
- “this feels more like X or Y?”
- “what should we borrow carefully?”
- “which DS logic fits this brief?”

Goal:
Turn comparison into explanation and formation guidance.

---

## Supported input types

### 1. Natural language
Examples:
- “I want a calm but efficient admin tool”
- “This should feel premium and restrained”
- “Need a merchant dashboard, not a generic dashboard”
- “We want something platform-ready across teams”

### 2. Imported context
Examples:
- product brief
- project notes
- sitemap
- workflow description
- PRD excerpt
- user story set
- IA outline
- design principles note

### 3. Uploaded files
Examples:
- screenshots
- PDFs
- slide decks
- design-system docs
- brand guideline docs
- token draft docs
- audit sheets

### 4. Mixed inputs
Best mode.
This is when:
- the user describes intent
- and also uploads reference material
- and maybe points to a current UI or style direction

---

## Mandatory inference order

The analyzer should reason in this order:

1. **User intent / requested help**
2. **Context summary**
3. **Root constraints**
4. **Primary posture**
5. **Secondary posture if useful**
6. **Pattern needs**
7. **Foundation direction**
8. **Token recommendation**
9. **Smart Suggestions / practical actions**
10. **Confidence + evidence note**
11. **Next step**

The analyzer must **not** jump directly from stylistic wording to token conclusions.

---

## Root constraints to capture first

Always look for:
- primary user
- repeated job
- cost of error
- trust/compliance demand
- information density
- brand-expression need
- shared scale
- governance capacity

If some are missing, state that explicitly.

---

## Lightweight operating rule

The analyzer should default to the **simplest useful read**.

Prefer:
- grounded analysis
- pattern-first interpretation
- foundation-level recommendations
- decision-oriented output
- practical language over academic language

Avoid:
- exhaustive theory by default
- giant component inventories
- overly rigid taxonomy
- premature system completion language

---

## Heavy-phase rule

When the task becomes evidence-heavy or ambiguous, the analyzer should switch to research rather than bloating the reasoning layer.

Typical heavy-phase triggers:
- evidence is thin or contradictory
- uploaded files are partial
- the user asks for stronger comparison confidence
- the task requires validating current or niche references
- the system being discussed is ambiguous or hybrid-sensitive

Preferred heavy-phase actions:
- tool-call research
- structured document review
- web search when freshness or validation matters

---

## Fast lookup rule

The analyzer may use a lightweight lookup layer for common design systems when:
- the user references a well-known system
- a fast comparison is enough
- the goal is orientation, not deep classification

The lookup layer should provide:
- likely posture
- likely archetype
- strongest reusable lesson
- caution against blind copying

It should **not** replace deeper evidence when the task requires stronger confidence.

---

## What the analyzer should do well

### 1. Understand the ask
Figure out whether the user wants:
- analyze
- audit
- compare
- form a system direction
- recommend foundations
- refine a current direction

### 2. Distinguish signal types
Separate:
- what the user explicitly said
- what uploaded files show
- what the system appears to support
- what is inferred

### 3. Recognize pattern gravity
Identify which repeated patterns matter most:
- forms
- tables / data display
- search / filter / sort
- settings / management
- multi-step workflows
- feedback / validation
- discovery / browsing
- content-first guidance
- navigation / selection / state handling

### 4. Recommend at the right level
Prefer:
- foundation direction
- token logic
- hierarchy rules
- pattern priorities
- Smart Suggestions
- caution notes

Avoid jumping too early to:
- giant component inventories
- visual mimicry
- fake precision
- “complete system” language

### 5. Explain through UI consequences
When useful, translate design-system observations into:
- hierarchy clarity
- scanability
- grouping
- contrast
- interaction feedback
- state clarity
- trust or conversion consequences

This makes recommendations easier to act on.

---

## What the analyzer must not do

### 1. No style-only guessing
Do not say:
- “This is clearly enterprise”
- “This is obviously premium”
- “This should use small radius and dark neutrals”
if that conclusion is driven mainly by surface adjectives.

### 2. No component-first behavior
Do not start from:
- component count
- library size
- trendy pattern lists

### 3. No fake certainty from thin evidence
If the evidence is weak, say so.

### 4. No archetype forcing
Use a primary archetype only when it explains the system honestly.
Do not use “hybrid” as a lazy escape.
Do not force a clean label where the evidence is thin.

### 5. No “brand name cloning”
Do not use famous references as if they were direct answers to unrelated contexts.

### 6. No heavy-model drift
Do not turn the default workflow into a research project unless the task actually needs it.

---

## Default output shape

### 1. TL;DR
3–5 short bullets.

### 2. Intent read
What the user most likely wants.

### 3. Context summary
Product reality and key constraints.

### 4. Signal extraction
Strong, weak, conflicting, and missing signals.

### 5. Posture read
Primary posture, optional secondary posture.

### 6. Pattern priorities
What the system likely needs to support most.

### 7. Foundation direction
Directory-level direction.

### 8. Token recommendation direction
Primitives, semantic tokens, alias direction, cautions.

### 9. Smart Suggestions
- quick wins
- structural improvements
- what not to overbuild yet
- what to borrow carefully from references

### 10. Confidence note
Evidence quality + missing information.

### 11. Next step
What should happen next.

---

## Confidence behavior

### Low confidence
Use when:
- the input is mostly adjectives
- context is missing
- only one screenshot exists
- uploaded material is too thin

### Moderate confidence
Use when:
- there is enough contextual and structural signal for useful direction
- some uncertainty still remains

### High confidence
Use only when:
- there is strong context
- strong structural evidence
- strong pattern evidence
- enough foundation or governance evidence
- little contradiction between signals

---

## Final rule

The analyzer is not here to sound clever.
It is here to make the next design-system decision more grounded, more explainable, more lightweight, and more actionable.
