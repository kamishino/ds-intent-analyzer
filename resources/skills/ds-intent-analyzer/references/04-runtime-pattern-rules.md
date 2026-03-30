# DS Pattern Detection Rules v1

## Purpose

This document defines how the analyzer should move from:
- product reality
- repeated jobs
- context clues

to:
- pattern priorities
- foundation implications
- token recommendation direction

The goal is to make pattern detection:
- more grounded
- less vibe-based
- less component-first

---

## Core principle

**Detect repeated problems and repeated flows first.**

Do not start with:
- component inventories
- popular UI kits
- what looks trendy
- what a famous design system contains

---

## Detection sequence

### Step 1 — Identify repeated jobs
Ask:
- what does the user repeatedly do?
- what work repeats most often?
- what screens are likely to dominate use?
- what decisions happen frequently?

### Step 2 — Identify repeated flow types
Ask:
- does the product revolve around entry, review, search, comparison, management, approval, monitoring, or guidance?
- are flows mostly linear, cyclical, branching, or state-driven?

### Step 3 — Identify consequence patterns
Ask:
- what happens when users get confused?
- what happens when states are unclear?
- what happens when actions are missed or reversed?

### Step 4 — Translate into pattern priorities
Only now should the analyzer identify priority patterns.

### Step 5 — Translate pattern priorities into foundation pressure
Ask:
- what does this imply for hierarchy?
- what does this imply for density?
- what does this imply for color semantics?
- what does this imply for spacing rhythm?
- what does this imply for motion restraint or expressiveness?

---

## Pattern families

### A. Form-heavy systems
Signals:
- input
- data entry
- submit
- validation
- multi-step
- settings
- onboarding

Implications:
- strong label/helper/error hierarchy
- validation states matter
- spacing must support completion clarity
- type must support scan + input reading

### B. Table / data-display systems
Signals:
- dashboard
- review
- status
- records
- monitor
- compare
- metrics
- reporting

Implications:
- density becomes primary
- alignment and rhythm matter
- state visibility matters
- type must support scanning

### C. Search / filter / sort systems
Signals:
- browse
- discover
- compare
- filter
- search
- refine

Implications:
- navigation and layout hierarchy matter heavily
- narrowing and comparison need clear affordances
- empty/loading states matter

### D. Workflow / approval systems
Signals:
- review
- approve
- reject
- assign
- handoff
- queue
- blocked

Implications:
- state semantics are critical
- action priority must be very clear
- feedback and confirmation patterns matter
- motion should support clarity, not spectacle

### E. Management / settings systems
Signals:
- configure
- manage
- account
- preferences
- permissions
- workspace setup

Implications:
- hierarchy must support nested decision spaces
- form and navigation patterns matter
- destructive actions need careful semantics

### F. Content-first guidance systems
Signals:
- explain
- guide
- public service
- learn
- help users decide
- reduce confusion

Implications:
- content hierarchy can dominate component complexity
- type and spacing are critical
- layout rhythm should support comprehension
- motion should stay quiet

### G. Discovery / browsing systems
Signals:
- explore
- browse
- catalog
- inspiration
- curation
- selection

Implications:
- card/list relationships matter
- preview patterns matter
- layout rhythm strongly affects usability
- brand expression may matter more

### H. Workbench / specialist-tool systems
Signals:
- workspace
- tuner
- preview
- analytics
- architect
- studio
- library
- export
- refine
- inspect

Implications:
- workflow stage clarity matters
- the active object should persist clearly across surfaces
- primary actions should stay local to the current object or next step
- navigation layers should not multiply without strong task value
- evaluate / refine loops should feel credible, not theatrical

Trust-of-claims rule:
- if the UI presents analytics, confidence, critique, recommendation labels, or accessibility judgments, inspect whether method or provenance is visible enough for that authority tone
- if not, treat the gap as a trust issue before treating it as a styling problem

---

## Pattern detection by product type

### Public service / trust-heavy product
Likely gravity:
- guidance
- forms
- status/feedback
- content explanation
- error prevention

### Enterprise workflow product
Likely gravity:
- forms
- tables
- filters
- status transitions
- queues
- multi-step workflows

### Commerce merchant product
Likely gravity:
- product management
- order/payment flows
- filters
- settings
- alert/status patterns
- value/risk signaling

### Developer/platform product
Likely gravity:
- documentation support
- reusable primitives
- state consistency
- theming logic
- pattern composability

### Specialist workbench / expert tool
Likely gravity:
- persistent active object
- inspect / refine / compare loops
- action locality
- stage transitions
- trust-bearing evaluation output

### Brand / consumer product
Likely gravity:
- discovery
- selection
- identity-bearing flows
- onboarding / engagement
- perception-sensitive moments

---

## Anti-patterns in detection

### Anti-pattern 1 — Mistaking presence for priority
Just because a system has tables does not mean tables are central.

### Anti-pattern 2 — Mistaking dashboards for enterprise truth
A dashboard can serve many realities.

### Anti-pattern 3 — Mistaking commerce visuals for commerce operations
Buyer-facing visual commerce is not the same as merchant operations.

### Anti-pattern 4 — Mistaking reusable components for platform gravity
Many systems publish components. That does not prove Platform-first.

### Anti-pattern 5 — Starting from component lists
Pattern detection should lead component implications, not the reverse.

---

## Pattern priorities → foundation pressure

### If forms dominate
Prioritize:
- typography clarity
- spacing rhythm
- state semantics
- label/helper/error hierarchy

### If tables and scanning dominate
Prioritize:
- grid discipline
- typography density tuning
- state legibility
- alignment consistency

### If discovery dominates
Prioritize:
- layout rhythm
- card/list hierarchy
- responsive behavior
- preview emphasis

### If trust and guidance dominate
Prioritize:
- content hierarchy
- restrained motion
- semantic color discipline
- predictable interaction logic

### If workbench credibility dominates
Prioritize:
- workflow stage clarity
- active-object persistence
- action locality
- trust framing for evaluative claims
- reduction of navigation-layer burden

### If brand expression dominates
Prioritize:
- typography character
- color personality
- shape/radius language
- controlled expressive motion

### If platform/reuse dominates
Prioritize:
- naming discipline
- semantic token layers
- consistency of primitives
- extensibility rules

---

## Final rule

Pattern detection is useful only when it changes what we decide to stabilize first.
