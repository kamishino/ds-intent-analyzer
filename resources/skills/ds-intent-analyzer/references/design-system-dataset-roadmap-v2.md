# Design System Dataset + Roadmap v2

## Purpose

This file is the compact operating summary for the current design-system research dataset and the next research cycle.
It is designed to replace multiple memo-style source files when Project Source file count is limited.

---

## 1. Current Dataset Status

### Working dataset size
- **40 design systems total**
- **10 anchor systems** previously analyzed in more depth
- **30 expansion systems** added from directory-level research

### What this means
The dataset is large enough to reveal pattern clusters, but not yet clean enough to support high-confidence automation across all entries.

### Important reality
- the 10 anchor systems are stronger benchmarks
- many of the 30 expansion systems are still provisional
- evidence depth is uneven
- hybrid classification is common

---

## 2. Recommended Reading of the Dataset

Do not treat the full 40-system dataset as equally reliable.
Use a two-layer view:

### Layer A — Anchor set
Use as benchmark references.
These systems are currently the most useful for archetype calibration.

### Layer B — Expansion set
Use to:
- detect pattern repetition
- identify hybrids and edge cases
- test whether the archetype model needs revision

---

## 3. Re-Processed Cluster Map v2

### A. Public Trust Service
Core anchor systems:
- GOV.UK
- USWDS

Why this cluster is stable:
- high trust demand
- accessibility pressure
- clarity and plain language dominate
- branding is restrained

### B. Enterprise Workflow
Current core:
- Salesforce Lightning
- Uber Base

Likely or leaning members:
- Red Hat Design System
- Momentum Design
- Coral
- Visa Product Design System
- Morningstar Product System
- Elisa Design System
- SubZero
- Nessie
- Cedar

Main caution:
Several of these may also carry platform behavior. Do not force a clean label too early.

### C. Commerce Enablement
Core:
- Shopify Polaris

Leaning commerce / hybrid:
- eBay Playbook

Main caution:
Use merchant/operator repeated jobs as the deciding signal, not generic dashboard appearance.

### D. Developer Toolkit / Platform
Core:
- GitHub Primer
- Atlassian
- Elastic UI Framework
- Ariakit
- Web Awesome
- HeroUI
- Chakra UI
- Blueprint
- Headless UI
- Geist
- shadcn/ui

Hybrid or ambiguous:
- Ant Design
- Carbon
- PatternFly
- Clarity
- Pajamas
- Wanda

Main caution:
This archetype is probably too broad and is the best candidate for future splitting.

### E. Brand / Consumer / Industry-Specific
Core:
- Airbnb Design Language System
- Backpack
- Porsche Design System

Likely / leaning:
- Sainsbury’s Design System
- Gestalt

Main caution:
Strong identity signals should not hide weak workflow or governance evidence.

---

## 4. Dataset Confidence Rules

### Treat as relatively stable
- archetype anchors for GOV.UK, USWDS, Polaris, Airbnb, Primer, Atlassian, Salesforce, Uber Base

### Treat as provisional or hybrid-sensitive
- Carbon
- Ant Design
- PatternFly
- Clarity
- Pajamas
- Wanda
- eBay Playbook
- Gestalt
- Visa Product DS
- Porsche DS
- Backpack

### Why this matters
The goal is not to make every row feel final.
The goal is to avoid false certainty where evidence is still thin.

---

## 5. What the Current Dataset Already Tells Us

### Signal 1 — Accessibility is nearly universal
Accessibility is no longer enough by itself to distinguish archetypes.
We must also evaluate density, repeated jobs, governance, and posture.

### Signal 2 — Platform behavior is widespread
Many modern systems have strong code/distribution logic.
That does not automatically make them Developer Toolkit / Platform.
We still need to ask what the system is primarily trying to support.

### Signal 3 — Hybrid cases are not edge cases
Some of the most important systems in the dataset sit between:
- Enterprise Workflow and Developer Toolkit / Platform
- Commerce Enablement and Platform
- Brand / Consumer and Enterprise restraint

### Signal 4 — Component volume is a weak proxy
High component count should not be mistaken for high maturity or better reference value.

---

## 6. Recommended Master Sheet Schema

Use one sheet for the whole dataset with these columns:

- Name
- Organization
- Industry / product type
- Public / internal / hybrid
- Declared layer summary
- Structural layer summary
- Behavioral layer summary
- Root constraints
- Primary posture
- Secondary posture
- Primary archetype
- Secondary archetype
- Confidence
- Evidence quality
- Root Constraint Clarity score
- Principle–Structure Alignment score
- Foundation Maturity score
- Token Architecture Maturity score
- Pattern Maturity score
- Component System Maturity score
- Accessibility Maturity score
- Governance Maturity score
- Archetype Fit Confidence score
- Reuse Value score
- Main caution
- Main reusable lesson

---

## 7. Batch A — Priority Deep Research Set

Do not deepen all 30 expansion systems at once.
Use a high-leverage batch first.

### Recommended Batch A
- Carbon
- Ant Design
- PatternFly
- Clarity
- Visa Product Design System
- Backpack
- Porsche Design System
- Gestalt
- Elastic UI Framework
- Pajamas

### Why these 10 first
- high reuse value
- high ambiguity
- useful for testing archetype boundaries
- useful for deciding whether the model needs splitting or revision

---

## 8. Re-Processing Workflow for Each Batch-A System

### Step 1 — Evidence collection
Gather:
- official principles / overview
- official foundations / components / tokens docs
- implementation signals
- governance signals if available
- contextual signals about product and organization

### Step 2 — Structured reading
Separate:
- declared layer
- structural layer
- behavioral layer
- contextual layer

### Step 3 — Classification
Assign:
- root constraints
- primary posture
- secondary posture
- primary archetype
- secondary archetype if needed
- confidence
- evidence quality

### Step 4 — Scoring
Score all 10 core dimensions and attach evidence weight.

### Step 5 — Output
Produce:
- short report
- score table
- caution note
- reuse lessons

---

## 9. Decision Questions for the Next Cycle

The next research cycle should help answer these:

### A. Is Developer Toolkit / Platform too broad?
Possible future split candidates:
- pure toolkit/library
- platform-scale internal product systems
- framework-first implementation systems

### B. Does Commerce Enablement need sub-types?
Possible split later:
- merchant operations
- consumer commerce UI

### C. Are industry-specific systems a modifier rather than a full archetype?
This matters for systems like Porsche or finance-heavy systems.

### D. How much governance evidence is required before calling a system mature?
This matters because polished docs can hide weak operating reality.

---

## 10. Suggested Output Types for the Next Stage

### Output 1 — Master classification sheet v2
Main working dataset.

### Output 2 — Batch A research pack
10 deeper reports.

### Output 3 — Archetype lessons pack
One concise reference page per archetype:
- defining constraints
- strengths
- common mistakes
- what to borrow carefully

### Output 4 — App-to-DS fit test set
Use 3–5 real product briefs to test whether the framework helps formation decisions.

---

## 11. What Not to Do Yet

Do not do these yet:
- build automated classification tooling
- treat all 40 rows as equally reliable
- freeze the archetype taxonomy too early
- optimize for beautiful charts before evidence quality improves

---

## 12. Source Consolidation Recommendation

If Project Source count is tight, this file can replace the need to separately keep:
- design-system-aggregated-matrix-v1-en.docx
- design-systems-classification-memo-v1-en.docx

Recommended minimal source set for the DS project:
1. `design-system-framework-pack-v2.md`
2. `design-system-dataset-roadmap-v2.md`

Optional keepers only if space allows:
- raw matrix sheet or spreadsheet
- selected deep-dive reports for anchor systems

---

## 13. Practical Next Move

The most useful next action is:
- create the master sheet
- run Batch A deep research
- re-score those 10 systems
- then review whether the archetype model needs refinement
