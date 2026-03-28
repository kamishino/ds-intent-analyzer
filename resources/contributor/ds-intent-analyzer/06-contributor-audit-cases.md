# DS Audit Cases v1

## Purpose

These cases test:
- UI / DS Audit behavior
- default audit routing for vague improve requests
- contradiction handling
- partial-evidence discipline

Use them to evaluate whether Codex produces practical, evidence-weighted audit output instead of drifting into formation theory or generic style commentary.

---

## AU-01 — Vague Improve Request With One-Screen Evidence

### Prompt bundle

```text
Artifact summary:
- one desktop screenshot only
- page shows a dense analytics dashboard
- heavy use of cards, colored status pills, and small text
- filters sit above the table in a crowded row
- right rail contains alerts and action shortcuts

User ask:
Improve this UI. Make it feel cleaner and more premium.
```

### Input type and evidence strength
- Input type: partial screenshot summary + short ask
- Evidence strength: low to medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation hints tied directly to visible evidence

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- defaults to audit mode instead of abstract formation work
- focuses on visible hierarchy, density, grouping, and fix-first areas
- treats “premium” as a weak signal, not a design verdict
- gives small practical Smart Suggestions

### Must-not-do failures
- pretending system-wide certainty from one screen
- jumping directly to brand or token prescriptions
- skipping audit positives and negatives

---

## AU-02 — Brief / Artifact Contradiction

### Prompt bundle

```text
Project note:
This product should feel calm and low-stress for non-technical users.

Artifact summary:
- current screen is an internal risk-review console
- rows are dense and packed with states, timestamps, and escalation controls
- destructive actions are visually close to routine status updates
- table rows show warning and error markers in several different colors

User ask:
Please audit this and tell us what to improve first.
```

### Input type and evidence strength
- Input type: brief note + artifact summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- intent-analysis clarification when explaining the contradiction

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explicitly calls out tension between stated tone and visible operating reality
- prioritizes safety, clarity, and state handling consequences
- lowers confidence where the calm brief conflicts with the dense console evidence
- identifies a clear fix-first area

### Must-not-do failures
- forcing a fake consistent story
- treating the brief as more important than the visible evidence
- offering only aesthetic cleanup

---

## AU-03 — Existing Foundation Audit

### Prompt bundle

```text
Artifact summary:
- current design-system foundations define 14 color tokens but most are raw palette names
- spacing scale mixes 4px and 5px steps
- typography uses 7 text sizes with no semantic usage guidance
- elevation rules are inconsistent across cards, modals, and flyouts

User ask:
Audit the current foundation maturity and tell us where to stabilize first.
```

### Input type and evidence strength
- Input type: foundation summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- formation-recommendation detail tied to audit findings

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- audits by foundation priority, not by visual taste
- identifies semantic token weakness clearly
- distinguishes structural issues from polish issues
- gives a practical stabilization order

### Must-not-do failures
- jumping to component-level redesign
- treating token count as maturity
- ignoring semantic roles and usage guidance

---

## AU-04 — Partial Mobile Checkout View

### Prompt bundle

```text
Artifact summary:
- one mobile checkout screen only
- large hero product image at top
- shipping method selector is collapsed below the fold
- promo code, order summary, and payment CTA compete for attention
- no error state or step context is visible

User ask:
What is weak here and what should we fix first?
```

### Input type and evidence strength
- Input type: partial single-screen artifact summary
- Evidence strength: low to medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- comparative hints only if they remain evidence-light

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- stays screen-level rather than claiming checkout-system maturity
- focuses on hierarchy, step clarity, and decision pressure
- gives a fix-first area and a smallest useful next move

### Must-not-do failures
- pretending the whole commerce flow is understood
- inventing governance or token architecture from one mobile screen
- confusing visual polish with conversion clarity
