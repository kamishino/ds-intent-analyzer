# DS Decision Guide Templates v3

## Purpose

This template provides reusable output formats for the **Design System Intent Analyzer**.
`SKILL.md` should point here for concrete answer structure and phrasing instead of duplicating it.

Decision support comes first.
Audit detail is supporting evidence, not the product identity.

Use it for:
- user brief analysis
- current UI audits
- existing DS reviews
- foundation/token recommendations
- comparison-driven guidance

This version adds:
- a lighter structure for AI Agent usage
- an explanation bridge for UI refactor / basic design language
- Smart Suggestions for actionability
- stronger decision-first answer bias

## Default answer bias

Lead with:
- `TL;DR`
- fix-first decision
- `Smart Suggestions`
- `Next move`

Use deeper audit detail only as needed to justify the recommendation.
Do not sprawl into fundamentals or theory unless they materially change the decision.
Do not turn vague style asks into long questionnaires.
If evidence is already present, read it first.
If evidence is thin, ask only 1-3 focused project-fit questions.
If references are justified, prefer 2-3 matching directions with fit and cautions over a single best-library answer.
For implementation-framed comparison prompts, answer "what should we inspect first before more tokens, components, or libraries?" before drifting into broad diagnosis.
If the user explicitly asks for multiple agents or sub-agents, use the `Multi-agent coordination` add-on instead of implying hidden orchestration.
If frontend execution is clearly next, use the `Frontend handoff` add-on instead of letting the build side infer direction from loose prose.

---

# A. Short Analyzer Template

## TL;DR
- 3 to 5 decision-oriented bullets

## Intent read
- What the user most likely wants

## What I can infer already
- strongest evidence already available
- what this already tells me about product shape or pressure

## What I still need to know
- only include this if a real decision is blocked
- keep it limited to missing project-fit signals

## Focused questions
- ask only if needed
- maximum 1-3
- prefer questions about user, repeated job, trust/risk, density, and tone boundary
- avoid style quizzes unless the product-fit read is already clear and a tone tie-break is still needed

## Fix-first decision
- What matters most right now
- What should stabilize first
- What not to overbuild yet

## Smart Suggestions
- first lever to change
- why this lever first
- what it makes easier
- what should wait

## Next move
- one concrete action the agent can do next for the user
- preferred voice: `I can ... next if you want`
- optional short prompt hint or artifact request
- keep it to one next move unless the evidence is too ambiguous to separate candidates
- if multiple agents or sub-agents are explicitly requested, attach the conditional `Multi-agent coordination` add-on from section E when bounded sidecars are actually useful
- if frontend implementation is clearly next, attach the conditional `Frontend handoff` add-on from section D

## Top 3 matching reference directions
- include only when the evidence is strong enough
- prefer 2-3, not one prestige winner
- for each reference:
  - why it fits
  - what to borrow carefully
  - what not to copy

## Context summary
- product type
- likely audience
- repeated jobs
- trust/risk
- information density
- brand-expression need
- scale/governance clues

## Signal extraction
### Strong signals
-
### Weak signals
-
### Conflicting signals
-
### Missing signals
-

## Posture read
- Primary posture:
- Secondary posture (optional):

## Pattern priorities
- Top pattern families:
- Why these matter:

## Foundation direction
### Color
### Typography
### Spacing
### Grid
### Layout
### Radius / Shape
### Elevation / Shadow
### Motion
### Border / Stroke
### Iconography

## Token recommendation direction
### Primitives
### Semantic tokens
### Alias / naming direction
### Key cautions

## Explanation bridge
- What this means for hierarchy:
- What this means for scanability:
- What this means for grouping / readability:
- What this means for trust / conversion / efficiency:
- Likely perceived effect:
- What this choice makes easier:
- What this choice makes harder:
- What emotional or trust signal it amplifies or weakens:
- First lever to change:
- Why this lever first:
- Why it outranks adjacent candidates:
- What should wait:

## Confidence note
- Confidence: `E0 - very low` / `E1 - low` / `E2 - medium` / `E3 - high`
- What is directly observed:
- What is inferred:
- What is still missing:
- if useful, add one tiny qualifier such as `one page only`, `partial screen`, or `still hybrid-sensitive`
- if the evidence is only one screen or partial artifacts, say the answer is screen-level rather than system-level

## Memory capture
- optional
- offer only if the result contains stable, reusable project truths or decisions
- preferred voice: `I can capture this into the project memory pack so we do not re-argue these decisions next time.`
- preferred downstream path: `docs/design-system/project-memory.md`
- if the result is still too thin or unresolved, do not offer capture

---

# B. DS / UI Audit Template

## TL;DR
- strongest positives
- biggest weaknesses
- most important fix-first area

## Intent read
- what decision the user most likely needs help with

## Fix-first decision
- what to stabilize first
- why it matters more than adjacent issues
- what not to overbuild yet

## Smart Suggestions

### Quick wins
- fast, visible improvements
- light refactor suggestions
- hierarchy or clarity fixes with good ROI
- first lever to change:
- why this lever first:
- why it outranks adjacent candidates:

### Structural improvements
- foundation-level fixes
- pattern-level fixes
- token/state semantics fixes only if justified by evidence

### Do not overbuild yet
- what should wait
- what is not justified by evidence
- what adds maintenance before value

### Borrow carefully from references
- which design systems are useful references
- what to borrow
- what not to copy blindly
- if the comparison is still hybrid-sensitive, say the fit is provisional and name what evidence would break the tie
- choose one strongest lean before describing the bounded secondary force
- if the prompt is implementation-framed, name one first inspection target before library or token expansion
- if the fit is still bounded, ask for one tie-break artifact or one repeated-job clue, not a broad bundle of follow-ups
- prefer 2-3 matching references when the product-fit read is strong enough
- do not rank by popularity or prestige

## Next move
- one concrete action the agent can do next for the user
- preferred voice: `I can ... next if you want`
- tie the action to the fix-first decision when possible
- if context is still missing, this can be 1-3 focused project-fit questions instead of immediate references
- for comparison prompts, prefer one tie-break action such as reviewing the dominant workflow surface, not a generic request to compare more libraries
- if multiple agents or sub-agents are explicitly requested, attach the conditional `Multi-agent coordination` add-on from section E when bounded sidecars are actually useful
- if frontend implementation is clearly next, attach the conditional `Frontend handoff` add-on from section D

## What is being audited
- system / product / file set:
- scope of review:
- source quality:

## Tool / product framing
- if this is a workbench or specialist tool, say what makes it read like a real tool rather than a styled demo
- name whether the active object, workflow staging, and action locality are helping or hurting the product read

## Claim framing
- if the surface presents scores, confidence, accessibility labels, recommendations, or critique text, separate clearly:
  - what appears directly computed or displayed
  - what appears heuristic or inferred
  - what still lacks visible provenance for the authority tone

## Trust leaks
- call out visible broken assets, runtime errors, or authority-sounding product claims with weak visible backing
- allow the fix-first decision to prioritize trust/provenance clarity before more visual or structural tuning when that is the sharper product risk

## Evidence layers
### Declared
- what the system says it values

### Structural
- foundations / tokens / components / patterns / docs

### Behavioral
- what repeated problems it appears to solve

### Contextual
- domain / audience / scale / risk / team reality

## Root constraints read
- primary user:
- repeated job:
- cost of error:
- trust/compliance:
- information density:
- brand-expression need:
- shared scale:
- governance capacity:

## Posture read
- primary posture:
- secondary posture (optional):

## Archetype read (only if useful)
- primary:
- secondary:
- confidence:

## Pattern assessment
### Dominant pattern families
-
### Missing or weak pattern support
-
### Pattern maturity note
-

## Primary directory audit

### Color
**Strengths**
**Weaknesses**
**Fix first**

### Typography
**Strengths**
**Weaknesses**
**Fix first**

### Spacing
**Strengths**
**Weaknesses**
**Fix first**

### Grid
**Strengths**
**Weaknesses**
**Fix first**

### Layout
**Strengths**
**Weaknesses**
**Fix first**

### Radius / Shape
**Strengths**
**Weaknesses**
**Fix first**

### Elevation / Shadow
**Strengths**
**Weaknesses**
**Fix first**

### Motion
**Strengths**
**Weaknesses**
**Fix first**

### Border / Stroke
**Strengths**
**Weaknesses**
**Fix first**

### Iconography
**Strengths**
**Weaknesses**
**Fix first**

## Token architecture note
- primitive maturity:
- semantic maturity:
- alias discipline:
- naming quality:
- state semantics quality:

## Explanation bridge
### What users likely feel
-
### Likely perceived effect
-
### What the UI is making harder than it should be
-
### What this choice is making easier or harder
-
### What this implies for hierarchy, scan speed, clarity, trust, or efficiency
-
### What emotional or trust signal is being amplified or weakened
-
### First lever to change
-
### Why this lever first
-
### Why it outranks adjacent candidates
-
### What should wait
-

## Improvement priorities
### Priority 1
### Priority 2
### Priority 3

## Confidence note
- Confidence: `E0 - very low` / `E1 - low` / `E2 - medium` / `E3 - high`
- strongest evidence:
- weakest evidence:
- what would raise confidence:
- if useful, add one tiny qualifier such as `one page only`, `partial screen`, or `still hybrid-sensitive`
- if the evidence is only one screen or partial artifacts, say the answer is screen-level rather than system-level
- if the comparison is still bounded, say exactly which single tie-break artifact would raise confidence fastest

## Final recommendation
- what to stabilize first
- what not to overbuild yet
- one recommendation path, not a flat list of equal-priority theories
- next move should be phrased as an action offer, not only an inspection note
- if the prompt is implementation-framed, state one first inspection target and one reason it outranks adjacent candidates

## Memory capture
- optional
- if the audit reveals stable canon, principles, or recurring drift worth preserving, offer to capture or update the project memory pack
- preferred downstream path: `docs/design-system/project-memory.md`
- if the findings are still provisional, store them only as open questions or unresolved drift
- do not offer memory capture for thin-evidence or purely screen-level reads

---

# C. Foundation Recommendation Template

## Goal
What this recommendation is trying to support.

## Product reality summary
- audience
- repeated jobs
- risk/trust
- density
- expression need
- scale context

## Principle stack
- Principle 1
- Principle 2
- Principle 3
- Principle 4
- Principle 5 (optional)

## Foundation recommendations
### Color
- direction:
- semantic priorities:
- cautions:

### Typography
- direction:
- hierarchy priorities:
- cautions:

### Spacing
- direction:
- rhythm priorities:
- cautions:

### Grid
- direction:
- structure priorities:
- cautions:

### Layout
- direction:
- template priorities:
- cautions:

### Radius / Shape
- direction:
- tone priorities:
- cautions:

### Elevation / Shadow
- direction:
- layering priorities:
- cautions:

### Motion
- direction:
- motion intent:
- cautions:

### Border / Stroke
- direction:
- separation priorities:
- cautions:

### Iconography
- direction:
- usage priorities:
- cautions:

## Token proposal direction
### Primitive layer
### Semantic layer
### Alias layer
### Naming rules
### State semantics

## Explanation bridge
- usability impact:
- hierarchy impact:
- scanability impact:
- trust / conversion / workflow impact:
- likely perceived effect:
- what this direction will make easier:
- what this direction may make harsher, calmer, softer, noisier, or more controlled:
- first lever to stabilize:
- why this lever first:
- why it outranks adjacent candidates:
- what should wait:

## Pattern-first build order
1.
2.
3.
4.
5.

## Smart Suggestions
### Quick wins
### Structural improvements
### Do not overbuild yet
### Borrow carefully from references

## Top 3 matching reference directions
- include only when product-fit is readable enough
- explain why each fits this product shape
- explain what to borrow carefully
- explain what not to copy
- if one reference already leads, make that lean explicit and keep the others bounded rather than sounding undecided by default

## Next move
- one concrete action the agent can do next for the user
- preferred voice: `I can ... next if you want`
- if multiple agents or sub-agents are explicitly requested, attach the conditional `Multi-agent coordination` add-on from section E when bounded sidecars are actually useful
- if frontend implementation is clearly next, attach the conditional `Frontend handoff` add-on from section D
- if the recommendation is still hybrid-sensitive, offer one tie-break action rather than multiple parallel follow-ups

## Confidence note
- Confidence: `E0 - very low` / `E1 - low` / `E2 - medium` / `E3 - high`
- key unknowns:
- what to test next:
- if useful, add one tiny qualifier such as `one page only`, `partial screen`, or `still hybrid-sensitive`
- if the recommendation is reference-led and still hybrid-sensitive, say what remains provisional and what evidence would resolve it

## Memory capture
- optional
- formation outputs are strong candidates for project-memory capture when principles, canon, and stabilization order are stable enough
- preferred voice: `I can capture this into the project memory pack so future work starts from the same truths and decisions.`
- preferred downstream path: `docs/design-system/project-memory.md`
- unresolved comparisons or low-evidence recommendations should be captured only as open questions, or not at all

---

# D. Frontend Handoff Add-On

Use this block only when:
- the user explicitly wants UI build next
- the user mentions frontend implementation or `frontend-skill`
- the answer is stable enough to guide build work, or needs to name the specific blockers before build starts

Do not use this block while unresolved multi-agent analysis still owns the current step.
Finish lead-agent synthesis first.

Do not use this block when:
- evidence is too thin
- direction is still unresolved
- the answer is still page-level, screen-level, or exploratory only

This add-on is anti-hallucination-first.
It is meant for `frontend-skill` as the canonical companion example, but the same contract can guide another execution or visual skill.

## Frontend handoff
### Build goal
- what the build step is actually trying to ship

### Grounded product truths
- audience
- repeated jobs
- risk / trust pressure
- information density
- scope boundary if the read is only page-level or screen-level

### Locked direction
- decisions that are stable enough for build
- what has been intentionally decided

### Safe references to borrow from
- only bounded references already justified by the evidence
- what is safe to borrow
- what should remain only a caution or secondary cue

### Do not invent
- no new vibe or brand direction
- no new product constraints
- no new screen structure or UI specifics that were never decided
- no extra reference borrowing beyond what this answer already grounded

### Open questions blocking build
- only include if missing decisions materially affect the build
- if this section is non-empty, the handoff is blocked or provisional

### Recommended first build target
- one first surface or one first section to implement
- keep it bounded to the current evidence level

### Re-entry rule
- if the build drifts from the locked direction or needs a missing decision, return to `ds-intent-analyzer` instead of freestyling

---

# E. Multi-Agent Coordination Add-On

Use this block only when:
- the user explicitly asks for multiple agents or sub-agents, or
- the task clearly decomposes into bounded analysis sidecars

Do not use this block when:
- one lead answer is enough
- evidence is too thin for meaningful task splitting
- the workflow is already moving directly into frontend build
- the proposed split would create multiple direction-setting agents or multiple builders

This add-on is explicit shared state, not hidden orchestration.
Keep it Codex-first, lightweight, and analysis-only.

## Multi-agent coordination
### Lead job
- the one agent that owns routing, synthesis, confidence, and the final recommendation

### Parallel sidecars allowed
- only bounded analysis sidecars such as:
  - evidence or artifact read
  - current UI or codebase scan
  - reference lookup

### Shared evidence
- the exact artifacts, context, or reference set every sidecar is allowed to use

### Locked truths
- current evidence-backed facts that every sidecar must preserve

### Open questions
- unresolved gaps that sidecars may help narrow but not settle alone

### Do not decide
- do not set the final recommendation
- do not lock the direction
- do not set confidence
- do not offer project-memory capture

### Do not invent
- no new vibe or brand direction
- no new product constraints
- no new screen or workflow specifics that were never grounded
- no hidden state or implicit merge logic

### Merge expectation
- sidecars return bounded observations
- the lead agent synthesizes the final decision
- if sidecars conflict materially, lower confidence or ask for one tie-break artifact

### Recommended next lead
- name the next lead agent explicitly
- if frontend build is next, this should point to `frontend-skill` only after the synthesis is stable enough for `Frontend handoff`

---

## Final rule

Use this template to reduce ambiguity, not to fake completeness.
If evidence is weak, the output should stay provisional.
If one visible lever is already the clearest candidate, do not present nearby alternatives as co-equal first moves.
If one comparison lean is already stronger, do not present the secondary reference as an equal winner.
