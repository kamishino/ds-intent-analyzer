# DS App-to-DS Fit Brief Set v1

## Purpose

These briefs test whether `ds-intent-analyzer` is genuinely useful for product builders who are trying to move from an app brief to a grounded design-system direction.

This pack is contributor-facing only.
It is not part of the shipped runtime bundle.

Use it to check whether the runtime:
- translates product briefs into design-system direction quickly
- identifies repeated jobs, risk, density, and stabilization order early
- avoids drifting into taxonomy or theory when the builder needs a decision
- produces a bounded implementation handoff when the next step is frontend execution

---

## PF-01 — Internal Ops Brief, Still Early but Not Empty

### Prompt bundle

```text
We are rebuilding an internal exceptions workspace used by support leads and risk reviewers.
It needs to feel calm, modern, and trustworthy, but people spend all day triaging queues, comparing evidence, and escalating risky cases.
We do not want it to feel like generic admin software.
What UI-system direction should we figure out first?
```

### Input type and evidence strength
- Input type: realistic early product brief
- Evidence strength: low to medium

### Expected primary mode
- Intent Analysis

### Allowed secondary behavior
- light formation hints only if they stay clearly tentative

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- translates adjectives into risk, density, and repeated-job implications quickly
- identifies that queue/review/escalation work is the stronger product force
- avoids a style quiz or visual-clone direction
- gives one useful next move that would help a builder narrow the direction

### Must-not-do failures
- direct token or component prescriptions from the adjectives
- treating “modern” or “calm” as the main decision layer
- giving a generic premium-dashboard answer detached from risky review work

---

## PF-02 — Trust-Sensitive Workflow Formation Direction

### Prompt bundle

```text
We need a shared design-system direction for a customer verification workspace used by onboarding specialists, fraud review, and escalation managers.
The product is dense: queues, case detail, document comparison, status history, and risky approvals.
Mistakes are expensive, the UI must feel credible without becoming cold, and teams keep inventing their own state semantics.
Recommend the formation direction, foundation priorities, and what to stabilize first.
```

### Input type and evidence strength
- Input type: product brief
- Evidence strength: medium

### Expected primary mode
- Formation Recommendation

### Allowed secondary behavior
- light audit framing tied directly to the current inconsistency signals

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies risky review work, dense information handling, and state semantics as leading pressures
- gives a foundation-first formation direction rather than brand language
- chooses a stabilization order that would actually help teams stop inventing their own semantics
- gives one useful next move for a builder or team lead

### Must-not-do failures
- drifting into generic trust or fintech branding
- starting from components instead of foundations and repeated jobs
- turning the answer into theory instead of a usable formation direction

---

## PF-03 — Toolkit Pressure vs Product-System Need

### Prompt bundle

```text
We are standardizing a React product used by billing operations and support escalation teams.
Engineering wants to pick shadcn/ui or Chakra UI immediately because it will speed up shipping.
The real pain is inconsistent review flows, risky-state handling, and three different list-detail patterns across the product.
Should a toolkit lead this decision, or what should we stabilize first?
```

### Input type and evidence strength
- Input type: product brief + toolkit pressure
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation guidance only if it stays subordinate to the layer-ordering decision

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- reframes toolkit choice as secondary to product patterns and repeated jobs
- identifies what should stabilize before standardizing a toolkit too broadly
- keeps the answer practical for a builder choosing where to spend effort first
- avoids anti-library ideology while still demoting toolkit speed from the lead decision layer

### Must-not-do failures
- picking a toolkit mainly because it feels fast or composable
- treating the library choice as the whole decision
- ignoring the risky review and escalation reality in the brief

---

## PF-04 — Existing Workflow Product Needs a Stabilization Order

### Prompt bundle

```text
Current-state summary:
- order-ops product with intake queue, detail drawer, dispute review, and bulk resolution screens
- each route uses different severity colors, filter grouping, and action hierarchy
- teams created their own empty states and confirmation patterns
- the product is usable, but operators say it feels harder to trust and harder to scan as volume rises

User ask:
What should we stabilize first, and what should the next concrete move be?
```

### Input type and evidence strength
- Input type: current-state product summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- formation guidance only if it directly supports the chosen stabilization order

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- picks one highest-leverage stabilization order rather than listing equal-priority fixes
- connects trust and scanability problems to specific workflow/UI consequences
- gives one concrete next move that a builder or team lead could act on
- stays decision-first instead of becoming a directory-by-directory audit dump

### Must-not-do failures
- producing several co-equal “priority one” answers
- turning the answer into a giant audit artifact
- defaulting to token cleanup without choosing the sharper structural lever first

---

## PF-02 + `frontend-skill` Follow-Up

### Follow-up prompt

```text
Now use frontend-skill to turn this into a first implementation direction.
```

### Why this follow-up matters

This checks whether a useful formation answer can become a bounded implementation handoff without inventing extra product direction.

### Expected behavior
- keeps the analyzer as the lead for locked direction
- produces a usable `Frontend handoff` with grounded product truths and one recommended first build target
- tells the execution side what not to invent
- stays bounded to the brief instead of pretending the full product is already designed

### Must-not-do failures
- loose prose that forces the build side to infer too much direction
- invented vibe, product constraints, or screen structure
- simultaneous co-leading between analyzer and frontend execution
