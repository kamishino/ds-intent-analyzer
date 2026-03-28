# Design System Framework Pack v2

## Purpose

This file is the new **canonical source** for the Design System project.
It consolidates and updates the earlier framework materials into one source that is easier to keep in a Project with file-count limits.

Use this file for:
- researching one design system
- comparing multiple design systems
- classifying design systems by archetype
- recommending formation direction for a new design system
- auditing an existing system for gaps or misalignment

---

## 1. Core Model

A design system should be read through three layers:

- **Why** — conceptual DNA, intent, trust level, brand expression, user needs
- **How** — system logic, token architecture, patterns, layout logic, governance
- **What** — foundations, tokens, components, patterns, documentation, tooling

Do not classify a system only by visual style or component count.

### Five analysis layers

1. **Design Basis**
   - line, shape, color, space, rhythm, motion, depth
2. **Style Family**
   - modernist/minimal, editorial/brutalist, playful/expressive, technical/futurist, corporate/enterprise
3. **Conceptual DNA**
   - values, emotional tone, experience goals
4. **System Logic**
   - organizational model, token architecture, layout logic, typography, color logic, governance
5. **Manifestation**
   - foundations, components, patterns, naming, documentation, implementation

---

## 2. Root Principle

**Components are not the root. Constraints are the root.**

When evaluating a design system, start from the forces shaping it:
- who the primary user is
- what repeated job they do
- cost of error
- trust/compliance demand
- information density
- brand-expression need
- cross-product scale
- governance capacity

---

## 3. Reading Model

Always separate these evidence layers:

### A. Declared layer
What the system says it believes.

### B. Structural layer
What the system actually contains.
- foundations
- tokens
- components
- patterns
- accessibility
- theming
- governance

### C. Behavioral layer
What kinds of repeated problems it appears to solve.
- public service
- enterprise workflow
- commerce operations
- developer platform
- consumer brand experience
- hybrid operational contexts

### D. Contextual layer
What product or organization reality explains the system.
- domain
- audience
- product scale
- risk/compliance
- team structure

---

## 4. Classification Stack v2

### 4.1 Root constraints

Capture these first:
- primary user
- repeated job
- cost of error
- trust/compliance demand
- information density
- brand-expression need
- shared scale
- governance capacity

### 4.2 System posture

Assign one primary posture and, if useful, one secondary posture.

Available postures:
- Trust-first
- Workflow-first
- Accessibility-first
- Brand-first
- Platform-first
- Commerce-first

### 4.3 Archetypes

Use archetypes as **soft clusters**, not rigid buckets.

#### A. Public Trust Service
Best fit when trust, accessibility, plain language, and safe guidance dominate.

#### B. Enterprise Workflow
Best fit when repeated operational tasks, structured information, and workflow efficiency dominate.

#### C. Commerce Enablement
Best fit when merchant or business operations dominate: products, orders, payments, fulfillment, settings, value/risk signaling.

#### D. Developer Toolkit / Platform
Best fit when composability, multi-team reuse, code/design alignment, strong documentation, and implementation scale dominate.

#### E. Brand / Consumer / Industry-Specific
Best fit when emotional tone, identity expression, or sector-specific experience demands dominate.

#### F. Operational Hybrid
Use only when two structural logics are materially present and both explain the system.

---

## 5. Archetype Decision Rules

### Decision order
1. Identify root constraints
2. Identify primary posture
3. Match to archetype
4. Check contradictions
5. Assign confidence

### Tie-breakers
- repeated job beats visual style
- structural evidence beats slogans
- cost of error beats aesthetic intent
- posture beats component count
- ecosystem scale can shift a system toward Platform

### Common ambiguity rules

#### Enterprise Workflow vs Developer Toolkit / Platform
- workflow support dominates → Enterprise Workflow
- reuse/composability/platform logic dominates → Developer Toolkit / Platform

#### Commerce Enablement vs Enterprise Workflow
- merchant/business operations dominate → Commerce Enablement
- broader operational workflows dominate → Enterprise Workflow

#### Brand / Consumer vs Public Trust Service
- emotional identity dominates → Brand / Consumer / Industry-Specific
- safety/clarity/accessibility dominate → Public Trust Service

#### Brand / Consumer vs Commerce Enablement
- buyer-facing emotional experience dominates → Brand / Consumer / Industry-Specific
- merchant/business operations dominate → Commerce Enablement

---

## 6. Evidence Quality Standard

### Core rule
Do not assign high-confidence classification from shallow evidence.

### Evidence levels

#### E0 — No usable evidence
Only placeholder-level judgment is allowed.

#### E1 — Weak evidence
Typical sources:
- directory listings
- short summaries
- homepage scans

Supports:
- tentative description
- provisional archetype guess

Does not support:
- high-confidence classification
- strong maturity scoring

#### E2 — Partial evidence
Typical sources:
- principle pages
- foundations/components docs
- visible implementation signals

Supports:
- moderate-confidence classification
- preliminary scoring
- early recommendations with caution

#### E3 — Strong evidence
Typical sources:
- declared values
- structural documentation
- pattern evidence
- implementation evidence
- governance signals
- contextual understanding

Supports:
- strong classification confidence
- stronger reuse lessons
- formation recommendations

### Evidence hygiene
Always distinguish:
- official vs secondary sources
- observation vs inference
- missing evidence vs negative judgment

---

## 7. Scoring Rubric v2

Use a 1–5 scale.

| Score | Meaning |
|---|---|
| 1 | Very weak / missing / unclear |
| 2 | Limited / immature / inconsistent |
| 3 | Adequate / partial / usable |
| 4 | Strong / clear / well-developed |
| 5 | Excellent / highly mature / consistently demonstrated |

### Core dimensions
1. Root Constraint Clarity
2. Principle–Structure Alignment
3. Foundation Maturity
4. Token Architecture Maturity
5. Pattern Maturity
6. Component System Maturity
7. Accessibility Maturity
8. Governance Maturity
9. Archetype Fit Confidence
10. Reuse Value

### Important rule
Always attach an **Evidence Weight**:
- E1 = weak evidence
- E2 = partial evidence
- E3 = strong evidence

High numeric scores without adequate evidence should not be treated as high-confidence conclusions.

---

## 8. Recommended Research Output Format

### Research one design system
1. TL;DR
2. Why / How / What
3. Declared / Structural / Behavioral / Contextual layers
4. Inferred root constraints
5. Primary posture
6. Secondary posture (optional)
7. Primary archetype
8. Secondary archetype (optional)
9. Score table
10. Evidence quality + confidence note
11. Strengths
12. Blind spots
13. Reuse lessons
14. What should not be copied blindly

### Compare multiple systems
1. TL;DR
2. Cluster map
3. Shared patterns
4. Meaningful differences
5. Confidence and evidence gaps
6. Reusable lessons
7. Caution points

### App-to-DS formation recommendation
1. TL;DR
2. Root constraints
3. Posture recommendation
4. Archetype fit
5. Principle stack
6. Foundation priorities
7. Pattern priorities
8. Component priorities
9. Governance recommendation
10. Anti-overbuild warnings
11. Next action

---

## 9. DS Formation Logic

### Phase 0 — Context definition
Output:
- root constraints
- system posture

### Phase 1 — Principle stack
Define 3–5 principles from the real context.
Examples:
- clarity before richness
- trust before speed
- reuse before novelty
- expression with restraint

### Phase 2 — Foundation lock
Stabilize:
- color semantics
- typography hierarchy
- spacing rhythm
- radius language
- elevation logic
- motion intent

### Phase 3 — Pattern-first build
Build the highest-frequency patterns first.
Examples:
- forms
- search/filter/sort
- tables/data display
- empty/loading/error states
- multi-step flows
- feedback patterns

### Phase 4 — Component system
Only expand component families after foundations and patterns are clear.

### Phase 5 — Governance
Define:
- ownership
- release model
- contribution model
- deprecation policy
- documentation upkeep

---

## 10. Anti-Patterns

Avoid these mistakes:
- copying a famous DS into an unrelated product context
- starting from component inventory instead of root constraints
- classifying from slogans alone
- rewarding component volume by default
- confusing visual style with product reality
- using “hybrid” as a shortcut for uncertainty
- overbuilding theming, templates, or governance before foundations/patterns are clear

---

## 11. Working Worksheet

### Basic identity
- Name
- Organization
- Industry
- Main product type
- Public / internal / hybrid

### Declared layer
- Published principles
- Published values
- Public positioning

### Structural layer
- Foundations quality
- Token maturity
- Component maturity
- Pattern maturity
- Accessibility maturity
- Governance maturity

### Behavioral layer
- Main repeated jobs
- Typical flows
- Data density
- Trust demand
- Brand-expression level
- Typical error cost

### Root constraints
- Primary user
- Repeated job
- Cost of error
- Trust/compliance
- Info density
- Brand need
- Shared scale
- Governance capacity

### Classification
- Primary posture
- Secondary posture
- Primary archetype
- Secondary archetype
- Confidence level
- Evidence quality

### Recommendation / lessons
- Strongest area
- Weakest area
- Main reusable lesson
- What not to copy blindly

---

## 12. Source Consolidation Recommendation

Because Project Source file count is limited, use this file as the main replacement for:
- concept-to-system-framework-v1-en.md
- ds-classification-and-formation-playbook-v1-en.md
- ds-scoring-rubric-v1.md
- ds-evidence-quality-standard-v1.md
- ds-archetype-decision-rules-v1.md

Keep only the files that contain dataset-specific material separately if needed.

---

## 13. Final Principle

The goal is not to find the coolest label.
The goal is to explain:
- why the system exists
- what repeated problems it solves
- how it is structurally shaped
- what kind of product reality it serves
