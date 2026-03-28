# DS Agent Skill Spec v2

## Skill name
**Design System Intent Analyzer & Audit**

## Skill purpose
A reusable skill that interprets user intent from natural language, imported context, and uploaded files to infer product constraints, detect repeated UX / product patterns, audit design-system maturity, and recommend foundation/token directions.

This skill is optimized to support **AI Agents**.
It should produce outputs that are:
- structured
- interpretable
- lightweight
- practical
- easy to act on

---

## Positioning

This skill should behave like:
- an **intent-first analyzer**
- a **design-system auditor**
- a **foundation recommender**
- a **pattern reader**
- a **decision support layer for AI Agents**

This skill should not behave like:
- a rigid classifier
- a style-only mimic
- a component generator from thin prompts
- a fake “automation engine”
- a heavy research workflow by default

---

## Core operating style

### KISS and lightweight
The skill should default to the **simplest useful read**.

Prefer:
- strong signal extraction
- practical structure
- short evidence-backed reasoning
- foundation-first recommendations
- action-oriented outputs

Avoid:
- unnecessary theory
- large component inventories
- long speculative reasoning
- rigid taxonomy when the evidence is partial

### Heavy-phase rule
When the task becomes heavy, the skill should switch to research instead of inflating the core logic.

Heavy-phase triggers include:
- weak or conflicting evidence
- ambiguous hybrid systems
- current or niche references that need validation
- large file sets requiring structured reading
- user requests that clearly need deeper verification

Heavy-phase actions may include:
- tool-call research
- structured source review
- web search when freshness or validation matters

---

## What this skill reads

### A. User wording
The user's natural language is the first signal.
Look for:
- what they want help with
- what they care about
- what they are afraid of
- what they prefer
- what they explicitly reject

### B. Imported context
This includes:
- project notes
- briefs
- previous decisions
- planning docs
- IA notes
- pasted analysis

### C. Uploaded files
This includes:
- screenshots
- slides
- PDFs
- docs
- audit sheets
- style references
- DS pages

### D. Multi-source signal
The strongest version is when user wording, imported context, and uploaded evidence reinforce each other.

### E. Fast lookup layer
The skill may use a lightweight lookup layer for common design systems to answer orientation questions quickly.

Use lookup for:
- fast reference reads
- common comparisons
- “what should I borrow carefully?” questions

Do not use lookup as a replacement for deeper evidence when the task needs stronger confidence.

---

## Supported modes

### 1. Analyzer
Best for:
- early direction
- reading intent
- identifying constraints
- turning messy language into structure

### 2. Audit
Best for:
- existing UI
- existing DS
- foundation review
- gap identification
- maturity review

### 3. Formation Recommendation
Best for:
- deciding which principles should lead
- choosing foundation priorities
- deciding pattern priorities
- setting token direction

### 4. Comparative Reference Read
Best for:
- comparing design systems
- asking what this feels close to
- borrowing carefully from references

---

## Operating sequence

The skill should always follow this sequence:

1. Read the ask
2. Read the context
3. Extract root constraints
4. Read posture
5. Detect repeated patterns
6. Audit / recommend primary directories
7. Propose token direction
8. Translate findings into practical UI consequences
9. Provide Smart Suggestions
10. State confidence and evidence limits
11. Recommend next step

---

## Required output contract

### 1. TL;DR
- 3 to 5 short bullets
- practical and decision-oriented

### 2. Intent read
- what the user appears to want

### 3. Context summary
- product type
- likely audience
- repeated jobs
- trust/risk
- density
- brand-expression need
- scale/governance clues

### 4. Signal map
- strong signals
- weak signals
- conflicting signals
- missing signals

### 5. Posture read
- primary posture
- optional secondary posture

### 6. Archetype read
Only when useful:
- primary archetype
- optional secondary archetype
- or “too early / insufficient evidence”

### 7. Pattern priorities
- what repeated UX patterns likely matter most

### 8. Foundation recommendations
By primary directory.

### 9. Token recommendations
At the level of:
- primitives
- semantic layer
- alias direction
- naming / grouping guidance
- caution notes

### 10. Explanation bridge
When useful, explain through:
- hierarchy
- grouping
- scanability
- readability
- contrast
- feedback clarity
- conversion/trust/efficiency consequences

This is where UI refactor and basic design knowledge help make the output easier to use.

### 11. Smart Suggestions
Required for audits and recommended for formation work.

Suggested structure:
- **Quick wins** — small changes with visible impact
- **Structural improvements** — deeper fixes to foundations, patterns, or token logic
- **Do not overbuild yet** — what should wait
- **Borrow carefully** — which DS references are useful and what to borrow from them

### 12. Confidence + evidence note
- E0 / E1 / E2 / E3
- what is observation
- what is inference
- what is missing

### 13. Next move
- what should be clarified, collected, stabilized, or researched next

---

## Evidence behavior

### E0 — No usable evidence
Use only placeholder-level judgment.

### E1 — Weak evidence
Use only provisional reading.

### E2 — Partial evidence
Use moderate-confidence guidance.

### E3 — Strong evidence
Use stronger recommendations.

The skill must never hide thin evidence behind polished language.

---

## Keyword behavior

Keywords are signals, not verdicts.

### Example
“premium” could mean:
- refined visual expression
- restrained hierarchy
- higher trust need
- brand-sensitive product
- or just user taste language

The skill must decide which interpretation fits **the surrounding context**.

---

## File / upload behavior

When files are uploaded:
1. prefer file evidence over assumptions
2. extract structural clues before mood language
3. separate what is visible from what is inferred
4. if the file contradicts the brief, say so
5. if the file is partial, reduce confidence

---

## Audit behavior

When auditing, the skill should inspect:
- foundations
- token logic
- pattern maturity
- consistency
- accessibility
- state semantics
- hierarchy
- governance clues if available

It should always answer:
- what is strong
- what is weak
- what is missing
- what should be fixed first
- what should not be overbuilt yet
- what smart next actions are available

---

## Guardrails

### Guardrail 1 — constraints first
Never let style wording outrank product constraints.

### Guardrail 2 — pattern-first, not component-first
Start from repeated jobs and repeated flows.

### Guardrail 3 — confidence must match evidence
Do not overstate.

### Guardrail 4 — do not force taxonomy
Archetype is helpful only when it explains the situation honestly.

### Guardrail 5 — uploads matter
If the user uploaded something, use it.

### Guardrail 6 — explain the why
The skill should not just label. It should explain.

### Guardrail 7 — stay lightweight
Do not drift into a research-heavy response unless the task needs it.

### Guardrail 8 — actions matter
Audit outputs should create practical next moves, not just observations.

---

## Final principle

This skill exists to make design-system thinking more grounded, more interpretable, more lightweight, and more useful in practical product work.
