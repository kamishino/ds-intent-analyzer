# Project Memory Pack v1

## Purpose

This file defines a lightweight, explicit memory artifact for `ds-intent-analyzer`.

Use it to preserve stable project truths and reusable decisions after a workflow is complete.

This is:
- per-project
- human-readable
- agent-readable
- doc-first

This is not:
- a hidden memory engine
- a runtime database
- automatic background learning
- a replacement for fresh evidence
- a current-state audit evidence packet
- a design-context packet
- a next-step repo-audit handoff artifact

Use `docs/design-system/audit-evidence.md` for concrete current-state evidence that should help the next audit, including structured design-context such as frame or node links, Dev Mode or MCP summaries, variable notes, annotations, and component/code-mapping cues.
Use `docs/design-system/audit-packet.md` for bounded follow-through instructions to another agent after a decision is made.
Use `docs/design-system/review-brief.md` and `docs/design-system/review-log.md` for recurring review scope and dated review continuity.
Use `project-memory.md` for durable truths and decisions worth reusing across sessions.

---

## Default path

Preferred downstream path:
- `docs/design-system/project-memory.md`

Use a different path only if the target repo already has an obvious design-system docs location.

The pack should be easy for both humans and agents to find again.

---

## When to offer capture

Offer project-memory capture only when the result contains stable, reusable decisions such as:
- durable project truths
- a usable principle stack
- active pattern canon
- foundation policies worth reusing
- decisions that should not be re-argued every session
- recurring audit drift that should stay visible

Preferred user-facing shape:
- `I can capture this into the project memory pack so we do not re-argue these decisions next time.`

Do not write silently by default.
Create or update the pack only after user approval or explicit workflow acceptance.

---

## When not to capture

Do not offer or write project memory when:
- the evidence is too thin
- the result is still screen-level only
- the outcome is still materially unresolved
- the comparison is still hybrid-sensitive
- the current answer is mainly asking for the next artifact rather than settling a reusable decision

If something is useful but still provisional:
- store it as an open question
- or store it as a provisional note
- do not store it as settled truth

Do not store current design-context packet detail as durable memory by default.
If the material is mainly:
- frame or node summaries
- Dev Mode or MCP-generated summaries
- variable or token snapshots
- annotation or callout packets
- component or code-mapping clues

it belongs in `audit-evidence.md` unless it has already become durable canon or a stable decision.

---

## Retrieval order

If a project memory pack exists:
1. read current artifact or codebase evidence first
2. if recurring review is explicit and `docs/design-system/review-brief.md` exists, read it next
3. read `docs/design-system/audit-evidence.md` next when present
4. read the project memory pack after that
5. if recurring review is explicit and `docs/design-system/review-log.md` exists, read the latest relevant entry after that
6. fall back to generic references after that

Why:
- current evidence should stay strongest
- recurring-review scope should stay explicit without outranking fresh evidence
- current-state evidence packets should stay closer to the present UI than durable memory
- project memory should help preserve continuity
- review logs should help compare cycles without overriding fresher evidence
- generic references should not outrank product-specific truths

If current evidence conflicts with stored memory:
- current evidence wins
- call out the drift or staleness explicitly
- do not silently force the old memory

---

## Section shape

Use one compact pack with these sections:

### 1. Project truths
- primary user
- repeated jobs
- trust or error pressure
- information density
- tone boundary
- scale and governance reality

### 2. Working principles
- short principle stack
- tradeoff logic the team wants to preserve

### 3. Active canon
- pattern rules worth reusing
- foundation policies worth reusing

### 4. Active decisions
- what was decided
- why it was decided
- confidence
- scope

### 5. Audit drift and hotspots
- recurring inconsistencies
- known hotspots
- unresolved friction

### 6. Open questions
- unresolved comparisons
- provisional assumptions
- evidence still needed

### 7. Current next moves
- highest-value follow-ups
- what should happen next

---

## Update rules

When updating an existing pack:
- preserve stable truths unless new evidence clearly breaks them
- update only the sections materially affected by the new workflow
- mark stale or replaced items clearly rather than silently erasing them
- keep the pack compact and current

Prefer updating:
- `Active decisions`
- `Audit drift and hotspots`
- `Open questions`
- `Current next moves`

before expanding the document.

---

## Minimal pack template

```md
# Project Memory Pack

## Project truths
- 

## Working principles
- 

## Active canon
- 

## Active decisions
- 

## Audit drift and hotspots
- 

## Open questions
- 

## Current next moves
- 
```

---

## Final rule

This pack exists so future workflows can start from stable project truth instead of starting from zero.

It should make the next session more consistent, not more hidden.
