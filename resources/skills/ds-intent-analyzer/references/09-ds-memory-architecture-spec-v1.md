# Memory Architecture Spec v1
## Design System Intent Analyzer / Audit — Long-Term Memory and Learning Layer

## Purpose

This document defines the memory architecture for a lightweight, intent-first AI Agent system that supports:

- long-term consistency
- reusable design-system reasoning
- stable decision recall
- audit-driven improvement
- controlled learning over time

This memory system exists to reduce a common failure in UI work:

> local decisions are made quickly, but global consistency is forgotten.

This architecture is designed to support:
- designers
- developers
- AI Agents
- mixed human + AI workflows

It assumes that **tokens help**, but **tokens alone do not guarantee system consistency**.

---

## 1. Core principle

Consistency is not only a token problem.

Consistency in UI systems depends on at least five layers:

1. constraints
2. principles
3. patterns
4. foundations/tokens
5. decisions + exceptions over time

A useful memory architecture must preserve all five.

### Why
Without memory, agents and developers tend to optimize locally:
- one screen at a time
- one feature at a time
- one component at a time

This causes:
- drift
- duplication
- fragile maintenance
- mismatched patterns
- inconsistent state behavior

---

## 2. Memory goals

The memory layer should help the system:

- remember stable product truths
- preserve principle stacks
- recall active pattern canon
- protect foundation/token policies
- retain decision history
- track known inconsistency drift
- support reviewable learning instead of hidden mutation

It should **not**:
- store everything
- memorize transient prompt details by default
- replace fresh analysis when evidence changes
- silently mutate policy without review

---

## 3. What “learning” should mean here

This system should prefer **retrieval learning** and **feedback-loop learning**, not uncontrolled weight learning.

### A. Retrieval learning
The model does not change its core weights.
Instead, it retrieves:
- memory
- rules
- prior decisions
- audit lessons
- pattern canon
- policy history

### B. Feedback-loop learning
The system improves by:
- reviewing outputs
- detecting repeated mistakes
- storing durable lessons
- updating memory with approval
- deprecating old rules when needed

### C. Weight learning
This is outside the normal operating model.
It is not the default recommendation for this project.

---

## 4. Memory design principle

The most valuable long-term memory is **not style output**.

The most valuable long-term memory is:

- root constraints
- principle stack
- pattern canon
- foundation policy
- decision history
- known drift / audit issues

This aligns with the project’s intent-first logic:
- constraints first
- pattern-first
- foundation-first
- action-oriented auditing

---

## 5. Memory domains

The system should separate memory into distinct domains.

## Domain A — Constraints Memory
Stores durable truths about the product/system context.

Examples:
- primary user
- repeated jobs
- cost of error
- trust/compliance demand
- information density
- brand-expression need
- shared scale
- governance capacity

### Why it matters
This is the deepest layer of consistency.
If this layer is forgotten, later decisions drift.

---

## Domain B — Principle Memory
Stores the principle stack that governs trade-offs.

Examples:
- clarity before richness
- reuse before novelty
- trust before speed
- expression with restraint
- pattern maturity before component expansion

### Why it matters
Principles explain **why** one decision should win over another.

---

## Domain C — Pattern Canon
Stores canonical repeated interaction decisions.

Examples:
- default form structure
- search/filter/sort recipe
- table density rules
- settings page structure
- empty/loading/error handling
- approval workflow states
- modal vs drawer usage rules

### Why it matters
This is where most cross-screen consistency is won or lost.

---

## Domain D — Foundation Policy Store
Stores active decisions for primary directories and token logic.

Examples:
- semantic color roles
- type role scale
- spacing modes
- grid/container rules
- shape language
- elevation logic
- motion intent
- state token semantics

### Why it matters
This protects surface-level consistency and naming discipline.

---

## Domain E — Decision Log
Stores key decisions and the reason each decision exists.

Examples:
- what was decided
- why it was decided
- which evidence supported it
- what it replaced
- who approved it
- what scope it applies to

### Why it matters
This prevents the system from repeatedly re-arguing the same choices.

---

## Domain F — Audit Memory
Stores recurring problems, inconsistency hotspots, and unresolved issues.

Examples:
- three inconsistent destructive dialog patterns
- helper/error spacing drift
- table density inconsistency
- mixed empty-state structures
- uneven iconography styles

### Why it matters
This allows the system to learn from audits instead of starting fresh every time.

---

## 6. Memory hierarchy

Not all memory should have equal priority.

### Priority order during retrieval
1. active constraints memory
2. active principles
3. active pattern canon
4. active foundation policies
5. decision log
6. audit memory
7. deprecated history (only if needed)

### Why
This prevents tokens or component rules from overriding the product reality.

---

## 7. Memory object schema

Each memory item should use a structured schema.

Suggested fields:
- id
- type
- name
- scope
- status
- confidence
- source
- created_at
- updated_at
- supersedes
- do_not_override_without_review
- summary
- rule_or_fact
- why
- evidence_note
- owner
- tags

### Required concepts

#### type
Examples:
- constraint
- principle
- pattern_rule
- token_policy
- decision_log
- audit_issue

#### scope
Examples:
- global
- product
- module
- flow
- screen_family

#### status
Examples:
- draft
- active
- deprecated
- superseded
- provisional

#### confidence
Examples:
- low
- medium
- high

---

## 8. Example memory objects

### Example A — Constraint memory
```json
{
  "type": "constraint",
  "scope": "product",
  "name": "primary_user",
  "rule_or_fact": "Operations staff managing orders and settings daily.",
  "status": "active",
  "confidence": "high",
  "why": "Repeated operational workflows dominate the product.",
  "do_not_override_without_review": true
}
```

### Example B — Principle memory
```json
{
  "type": "principle",
  "scope": "global",
  "name": "clarity_before_richness",
  "rule_or_fact": "Prefer scanability and state clarity before decorative richness.",
  "status": "active",
  "confidence": "high",
  "why": "Task completion speed and error reduction matter more than expressive flourish."
}
```

### Example C — Pattern rule
```json
{
  "type": "pattern_rule",
  "scope": "global",
  "name": "form_validation_grouping",
  "rule_or_fact": "Label, helper, and error must remain visually grouped as one unit.",
  "status": "active",
  "confidence": "high",
  "why": "This improves completion clarity in form-heavy flows.",
  "do_not_override_without_review": true
}
```

### Example D — Audit issue
```json
{
  "type": "audit_issue",
  "scope": "product",
  "name": "destructive_dialog_drift",
  "rule_or_fact": "Three different destructive confirmation patterns are currently live.",
  "status": "active",
  "confidence": "medium",
  "why": "This reduces predictability and increases maintenance cost.",
  "source": "Audit 2026-03"
}
```

---

## 9. Read behavior

The agent should not retrieve all memory by default.

### Memory retrieval sequence
1. identify current mode
2. identify product / scope
3. retrieve active constraints
4. retrieve active principles
5. retrieve relevant pattern canon
6. retrieve relevant foundation policies
7. retrieve recent related decisions
8. retrieve audit issues if the request is audit/improvement related

### Examples

#### For a formation recommendation
Retrieve:
- constraints
- principles
- relevant patterns
- foundation policies

#### For an audit
Retrieve:
- constraints
- principles
- pattern canon
- foundation policies
- audit memory
- recent decisions

#### For a style-only request
Retrieve:
- constraints
- principles
- relevant foundation policies
Then check whether the style request conflicts with active constraints.

---

## 10. Write behavior

Memory writing must be conservative.

### Only write when the information is:
- durable
- reusable
- likely to matter again
- specific enough to guide future decisions
- approved if it changes active policy

### Do not write:
- one-off opinions
- transient prompt wording
- unstable assumptions
- raw mood language without structural meaning
- duplicated information already stored

### Write triggers
Good write candidates include:
- stable root constraints discovered repeatedly
- principle stack approved by the user/team
- repeated pattern decision becoming canonical
- foundation/token policy being formally chosen
- an audit issue recurring across multiple reviews
- a decision replacing an older active rule

---

## 11. Approval model

Not every memory write should become active immediately.

### Recommended statuses
- **draft**: newly proposed
- **active**: approved and should govern future work
- **deprecated**: no longer recommended
- **superseded**: replaced by another memory object
- **provisional**: usable carefully, but not final

### Approval recommendation
Use human review before activating:
- global principles
- active pattern canon
- token/foundation policy
- major scope constraints
- memory that can override prior decisions

---

## 12. Conflict resolution rules

Conflicts will happen.
The system should resolve them explicitly.

### Rule 1 — newer does not always win
Prefer:
- approved active memory
- higher-confidence memory
- broader-scope policy only when appropriate
- more specific scope when the request is local

### Rule 2 — constraints outrank style preference
If a style request conflicts with core product reality, say so.

### Rule 3 — principles outrank token convenience
Do not change semantic meaning just to satisfy a local visual preference.

### Rule 4 — pattern canon outranks one-off component variation
If a new variant breaks repeated-task consistency, it should be challenged.

### Rule 5 — audit issues can trigger review, not silent override
If an audit shows recurring drift, propose a policy review rather than auto-mutating the system.

---

## 13. Memory and consistency governance

A good memory layer should enforce consistency through multiple gates.

## Gate 1 — Constraint gate
Before recommendation/generation, check:
- primary user
- repeated jobs
- error cost
- trust/risk
- density
- expression need

## Gate 2 — Principle gate
Check:
- which principle wins this trade-off
- whether the current ask conflicts with active principles

## Gate 3 — Pattern gate
Check:
- whether a pattern canon already exists
- whether the request is inventing an unnecessary new pattern

## Gate 4 — Foundation gate
Check:
- whether relevant token/foundation policies already exist
- whether the requested variation breaks naming/semantic consistency

## Gate 5 — Audit gate
Check:
- whether this area already has known drift
- whether the new proposal fixes or worsens the inconsistency

---

## 14. Memory and human users

The memory system should be understandable to humans.

### It should help humans answer:
- what has already been decided?
- why was it decided?
- what still feels unstable?
- what is active vs deprecated?
- where is the inconsistency coming from?

### Why this matters
A memory architecture that only the agent understands will fail governance.

---

## 15. Learning loop design

The system should learn through a controlled loop.

### Step 1 — Run task
Analyze, audit, compare, or recommend.

### Step 2 — Evaluate output
Check:
- consistency with constraints
- consistency with principles
- consistency with pattern canon
- consistency with foundation policy

### Step 3 — Detect reusable lesson
Ask:
- is this issue recurring?
- is this decision likely to matter again?
- is this stable enough to store?

### Step 4 — Propose memory write
Store as:
- draft
- provisional
- or active only if approved

### Step 5 — Review and consolidate
Merge duplicates, deprecate old rules, and keep memory clean.

---

## 16. Memory hygiene rules

### Rule 1 — separate active from historical
Do not retrieve deprecated memory the same way as active memory.

### Rule 2 — avoid duplication
Memory entries should be merged or linked if they say the same thing.

### Rule 3 — preserve scope clearly
A module-level exception should not silently become a global rule.

### Rule 4 — attach reasons, not just rules
A memory item without “why” is harder to trust and reuse.

### Rule 5 — store known problems separately from policies
Do not confuse audit issues with approved design rules.

### Rule 6 — deprecate explicitly
Do not leave stale policy floating around as if it were still active.

---

## 17. Suggested storage model

### Table A — memory_items
Primary memory store.

Suggested fields:
- id
- type
- name
- scope
- scope_key
- status
- confidence
- summary
- rule_or_fact
- why
- source
- owner
- created_at
- updated_at
- supersedes
- do_not_override_without_review
- tags

### Table B — memory_links
Links related memory together.

Suggested fields:
- id
- from_id
- to_id
- relation_type

Examples of relation_type:
- supports
- supersedes
- contradicts
- scoped_by
- caused_by
- related_to

### Table C — review_events
Tracks review and approval.

Suggested fields:
- id
- memory_id
- reviewer
- action
- note
- timestamp

### Table D — drift_issues
Optional specialized table for audit drift tracking.

Suggested fields:
- id
- issue_name
- scope
- severity
- repeated_count
- first_seen
- last_seen
- status
- linked_memory_id

---

## 18. Suggested retrieval filters

Before retrieving memory, filter by:
- active status first
- matching scope
- matching mode
- relevant pattern family
- relevant directory
- confidence threshold

### Example
For a form-heavy admin audit:
Prefer:
- active constraints for that product
- active workflow-first principles
- form pattern canon
- state semantics policy
- known form-related audit issues

Do not also pull:
- discovery-focused brand rules
- deprecated token policy
- unrelated module exceptions

---

## 19. Suggested implementation order

### Phase 1 — Essential memory
Build:
- constraints memory
- principle memory
- pattern canon
- foundation policy store

### Phase 2 — Governance memory
Add:
- decision log
- approval flow
- supersede/deprecate handling

### Phase 3 — Learning loop
Add:
- audit memory
- repeated issue tracking
- lesson proposal workflow
- drift detection metrics

### Phase 4 — Advanced review support
Add:
- conflict explanation
- policy drift dashboards
- memory quality scoring
- exception governance tools

---

## 20. Final principle

A strong memory layer should not turn every UI into the same UI.

Its purpose is not uniformity.

Its purpose is:

- consistency where consistency matters
- flexibility where context genuinely differs
- preserved intent over time
- explainable decisions
- lower maintenance cost
- safer AI assistance

In this system, tokens are important.

But the full consistency stack is:

**constraints → principles → patterns → foundations/tokens → decisions → audit feedback**
