# System Design Spec v1
## Design System Intent Analyzer / Audit — Lightweight Agent Runtime

## Purpose

This document defines the recommended system design for a lightweight, intent-first AI Agent runtime that supports:

- design-system intent analysis
- UI / DS audits
- formation recommendations
- comparison and careful reference borrowing
- fast local search over a compact design-system knowledge base

This spec is optimized for:

- **AI Agent / Agent Skill usage**
- **KISS and lightweight operation**
- **staged retrieval instead of full-source loading**
- **intent-first reasoning**
- **pattern-first recommendations**
- **heavy-phase escalation only when justified**

This is **not** a full automation spec.
It is a practical operating design for a reusable analyzer / audit system.

---

## 1. Core system principle

The system should not behave as if the agent “loads the whole skill pack” on every request.

Instead, it should behave like a **layered runtime**:

1. small always-on operating rules
2. targeted retrieval based on intent and evidence
3. lightweight local search for orientation
4. deeper research only when needed

### Why this matters
This keeps the system:

- faster
- cheaper in context usage
- easier to maintain
- less likely to drift
- more explainable

---

## 2. Runtime architecture overview

### A. Runtime Core
Always-on operating layer.

Recommended inputs:
- Analyzer Scope v2
- Agent Skill Spec v2

This layer defines:
- role
- supported modes
- inference order
- lightweight rule
- heavy-phase rule
- output contract
- guardrails

### B. Reasoning Aids
Retrieved when the request needs interpretation help.

Recommended sources:
- Intent Signal Dictionary
- Pattern Detection Rules
- Primary Directories Schema
- Audit Template

This layer helps translate:
- wording → signals
- signals → posture
- posture → pattern priorities
- patterns → foundation pressure
- findings → structured output

### C. Fast Lookup Layer
Retrieved when the user references a popular design system or wants a fast orientation.

Recommended source:
- Quick Lookup Pack

This layer supports:
- fast precedent lookup
- careful borrowing
- “what is this useful as a reference for?”
- “what should not be copied blindly?”

### D. Deep Research Layer
Retrieved only during heavy-phase.

Recommended sources:
- Framework Pack v2
- Dataset + Roadmap v2
- Archetype Lessons Pack

This layer supports:
- harder classification
- hybrid-sensitive reading
- deeper formation reasoning
- stronger confidence work

---

## 3. Supported runtime modes

### Mode 1 — Intent Analysis
Use when the input is mostly:
- natural language
- brief
- strategy note
- preference statement
- planning context

Goal:
Turn vague intent into:
- root constraints
- posture
- pattern priorities
- foundation direction

### Mode 2 — UI / DS Audit
Use when the input includes:
- screenshots
- current UI
- existing tokens/docs
- DS pages
- audit files

Goal:
Detect:
- strengths
- weaknesses
- missing foundations
- token/pattern gaps
- fix-first areas
- Smart Suggestions

### Mode 3 — Formation Recommendation
Use when the evidence is strong enough to recommend:
- principle stack
- primary directories
- token direction
- pattern-first build order
- anti-overbuild boundaries

### Mode 4 — Comparative Read
Use when the user asks:
- “this is closer to X or Y?”
- “what should I borrow carefully?”
- “what design system logic fits this product?”

Goal:
Turn comparison into formation guidance instead of shallow mimicry.

---

## 4. End-to-end runtime pipeline

```text
User ask / uploaded evidence
→ Signal extraction
→ Intent routing
→ Evidence grading
→ Layer selection
→ Targeted retrieval
→ Intent-first reasoning
→ Output formatting
→ Optional heavy-phase escalation
→ Optional memory write
```

### Step 1 — Signal extraction
Extract:
- user verbs
- named references
- adjectives / style signals
- product/domain clues
- risk/trust clues
- scale/governance clues
- uploaded artifact types

### Step 2 — Intent routing
Classify the request into one or more modes:
- analyze
- audit
- formation
- compare

### Step 3 — Evidence grading
Assign provisional evidence strength:
- E0 = no usable evidence
- E1 = weak
- E2 = partial
- E3 = strong

### Step 4 — Layer selection
Select which sources to retrieve based on mode + evidence.

### Step 5 — Targeted retrieval
Retrieve only the most relevant chunks, not whole packs.

### Step 6 — Intent-first reasoning
Always follow:
1. intent
2. context
3. root constraints
4. posture
5. pattern priorities
6. foundation direction
7. token direction
8. Smart Suggestions
9. confidence
10. next move

### Step 7 — Output formatting
Use the output contract from the skill spec / audit template.

### Step 8 — Heavy-phase escalation
Only if justified by ambiguity, contradiction, missing evidence, or freshness needs.

### Step 9 — Optional memory write
Only write durable memory when the result contains stable, reusable decisions.

---

## 5. Router design

The router should be **rule-led first**, not embedding-led first.

### Why
The dataset is structured and relatively compact.
Most routing decisions can be made from:
- verbs
- entities
- adjectives
- pattern clues
- artifact presence

This is simpler and more reliable than early overuse of vector search.

### Routing signals

#### A. Reference route
Triggered by:
- named products
- named design systems
- “clone X”
- “similar to Y”
- “like A/B/C”

#### B. Signal route
Triggered by:
- adjective-heavy prompts
- weak-context prompts
- “clean, soft, professional”
- “premium and restrained”

#### C. Style-family route
Triggered by:
- Material Design
- Flat Design
- Glassmorphism
- Brutalism
- Neumorphism

#### D. Audit route
Triggered by:
- improve
- enhance
- review
- audit
- what is weak
- fix this UI

#### E. Formation route
Triggered by:
- propose tokens
- define foundations
- what should we stabilize first
- recommend DS direction

#### F. Comparison route
Triggered by:
- compare
- closer to X or Y
- what should I borrow

---

## 6. Retrieval strategy

## Retrieval principle
Use **staged retrieval**, not full-source loading.

### Stage A — Always-on runtime core
Always available:
- Analyzer Scope v2
- Agent Skill Spec v2

### Stage B — Mode-specific aid retrieval
Pull only what the current request needs.

Examples:
- adjective-heavy prompt → Signal Dictionary
- pattern-heavy audit → Pattern Rules + Primary Directories + Audit Template
- named DS request → Quick Lookup
- hybrid-sensitive question → Framework + Dataset + Lessons

### Stage C — Rerank
Use lightweight reranking after metadata filtering.

### Stage D — Heavy-phase retrieval
Bring in deeper research only when required.

---

## 7. Recommended data layers

### Layer 1 — Canonical runtime core
Small, stable, frequently retrieved.

Contents:
- scope
- skill spec

### Layer 2 — Lightweight reasoning aids
Frequently retrieved helpers.

Contents:
- signal dictionary
- pattern rules
- primary directories
- audit template

### Layer 3 — Fast lookup cards
Short, high-utility DS references.

Contents:
- one card per common DS
- best used for
- likely posture
- likely archetype
- borrow carefully
- do not copy blindly

### Layer 4 — Deep research
Less frequently retrieved, higher complexity.

Contents:
- framework pack
- dataset roadmap
- archetype lessons

---

## 8. Local-search dataset design

The local-search dataset should be designed as a **derived search layer**, not as a replacement for the source docs.

### Source of truth
Markdown source files remain authoritative.

### Search index
A normalized, lightweight search index is built from the source files.

### Benefits
- fast local search
- cleaner retrieval
- smaller context
- easier versioning
- easier cache

---

## 9. Recommended data model

## Table A — skill_chunks
Stores chunked source knowledge.

Suggested fields:
- id
- title
- file_name
- layer
- mode_tags
- entity_tags
- signal_tags
- posture_tags
- archetype_tags
- pattern_tags
- directory_tags
- evidence_level
- summary_1line
- caution
- content

## Table B — lookup_cards
Stores fast reference cards.

Suggested fields:
- id
- name
- best_used_for
- likely_posture
- likely_archetype
- strongest_reusable_lesson
- borrow_carefully
- do_not_copy_blindly
- caution_note
- source_file

## Table C — signal_map
Stores signal-to-reading aids.

Suggested fields:
- id
- signal
- signal_type
- likely_posture
- likely_pattern_family
- likely_foundation_pressure
- caution
- source_file

## Table D — source_registry
Tracks source status and versioning.

Suggested fields:
- file_name
- version
- layer
- status
- authoritative
- supersedes
- last_updated

---

## 10. Recommended storage options

### Option A — SQLite + FTS5
Recommended default.

Why:
- lightweight
- local-first
- simple deployment
- excellent for structured text + metadata
- easy to version and inspect

Use when:
- dataset is still compact
- team wants simplicity
- rule routing already does most of the work

### Option B — SQLite + FTS5 + embedding rerank
Recommended second stage.

Why:
- improves semantic recall
- keeps architecture simple
- avoids premature vector-only design

Use when:
- prompts are more varied
- adjective-rich prompts increase
- local reference matching becomes fuzzier

### Option C — pure vector database
Not recommended as the first move.

Why:
- metadata matters heavily in this project
- exact lookup and routing are more important than full semantic free search early on
- harder to debug than a tag-first system

---

## 11. Chunking rules

Chunking should follow knowledge boundaries, not fixed token windows only.

### Good chunk boundaries
- one rule group
- one lookup card
- one posture section
- one pattern family
- one directory section
- one audit subsection

### Avoid
- giant merged chunks
- splitting a rule across too many fragments
- mixing runtime rules with deep research in one chunk

### Add structured metadata at chunk time
Each chunk should receive:
- layer
- mode tags
- entity tags
- pattern tags
- directory tags
- confidence / evidence notes if relevant

---

## 12. Query planning by common request type

## Case 1 — “Clone the UI of Web A/B/C”
System behavior:
1. detect named references
2. classify as reference/comparison request
3. try lookup first
4. if no lookup card exists, decompose the reference into:
   - posture
   - pattern gravity
   - foundation traits
   - likely borrowing targets
5. output:
   - what user is likely attracted to
   - what should be borrowed carefully
   - what should not be copied blindly

## Case 2 — adjective-only prompt
Example:
- clean
- soft
- professional
- premium

System behavior:
1. classify as signal-heavy / low-evidence prompt
2. retrieve signal dictionary + pattern rules
3. infer likely posture candidates
4. keep confidence low unless context strengthens it
5. output:
   - signal map
   - possible readings
   - needed clarifications or missing evidence

## Case 3 — specific style-family prompt
Example:
- Material Design
- Flat Design
- Glassmorphism

System behavior:
1. treat style-family as a visual/system signal, not as the root answer
2. retrieve relevant style-family knowledge if available
3. keep root constraints primary
4. output:
   - what the style changes
   - where it helps
   - where it harms clarity or fit

## Case 4 — “Improve / enhance / make it better”
System behavior:
1. default to Audit mode
2. if evidence exists, audit it
3. if evidence is weak, stay provisional
4. retrieve:
   - audit template
   - directories
   - pattern rules
5. output:
   - strongest positives
   - biggest weaknesses
   - fix-first area
   - Smart Suggestions

---

## 13. Heavy-phase design

### Heavy-phase triggers
Escalate when:
- evidence is thin or contradictory
- the system is hybrid-sensitive
- current/niche references need validation
- uploaded files are large or ambiguous
- comparison confidence matters
- external freshness matters

### Heavy-phase actions
May include:
- structured file review
- broader retrieval
- web search
- stronger comparative analysis
- more explicit confidence limits

### Heavy-phase principle
Heavy-phase should increase confidence, not increase noise.

---

## 14. Output discipline

The runtime should always bias toward:
- concise structure
- evidence-weighted language
- practical consequences
- actionability

### Good outputs include
- intent read
- context summary
- signals
- posture
- pattern priorities
- foundation direction
- token direction
- explanation bridge
- Smart Suggestions
- confidence note
- next move

### Avoid
- giant theory dumps
- component-first lists
- fake precision
- generic “best practices” without context

---

## 15. Error-handling and fallback behavior

### When evidence is too weak
Do:
- say so
- stay provisional
- recommend the smallest useful next step

### When references are unknown
Do:
- classify as unresolved reference
- search lookup registry first
- then route to decomposition or heavy-phase if needed

### When retrieved sources conflict
Do:
- prefer active runtime core for operating behavior
- prefer newer authoritative source
- separate observation from inference
- lower confidence instead of forcing certainty

---

## 16. Source governance rules

### Rule 1 — one active version per runtime file
Avoid multiple active versions of:
- scope
- skill spec
- audit template

### Rule 2 — runtime core beats support docs
For runtime behavior:
- scope/spec govern
- lookup/dataset/framework support

### Rule 3 — keep the index derived, not hand-edited
Source docs are edited by humans.
Search/index layers are regenerated.

### Rule 4 — mark deprecated sources clearly
Do not leave old versions equally retrievable without status flags.

---

## 17. Suggested file structure

```text
ds-agent/
  source/
    01-ds-analyzer-scope-v2.md
    02-ds-agent-skill-spec-v2.md
    03-ds-intent-signal-dictionary-v1.md
    04-ds-pattern-detection-rules-v1.md
    05-ds-primary-directories-schema-v1.md
    06-ds-audit-template-v2.md
    07-ds-quick-lookup-pack-v1.md
    design-system-framework-pack-v2.md
    design-system-dataset-roadmap-v2.md
    archetype-lessons-pack-v1.md
  build/
    chunks.jsonl
    lookup_cards.jsonl
    signal_map.jsonl
    source_registry.json
    ds_index.sqlite
  runtime/
    router.py
    retriever.py
    reranker.py
    formatter.py
    memory_gate.py
  tests/
    prompt_cases/
    retrieval_cases/
    routing_cases/
```

---

## 18. Suggested implementation order

### Phase 1 — Lean MVP
Build:
- source registry
- markdown chunker
- SQLite FTS index
- rule-based router
- metadata filter
- top-k retrieval
- formatter

### Phase 2 — Better retrieval
Add:
- embedding rerank
- cache
- better reference/entity matching
- test suite for routing correctness

### Phase 3 — Stronger evidence handling
Add:
- screenshot/file parsing layer
- evidence scoring helper
- hybrid-sensitive escalation logic
- audit issue tracking integration

---

## 19. Final principle

This system should behave like a **decision support runtime**, not a giant knowledge dump.

The goal is to:
- read intent correctly
- retrieve only what matters
- preserve lightweight reasoning
- support consistency without overbuilding
- escalate only when the task truly needs deeper work
