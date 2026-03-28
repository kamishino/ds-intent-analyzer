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

---

## AU-05 — Bare UI-Language Improve Ask

### Prompt bundle

```text
Make it better.
```

### Input type and evidence strength
- Input type: natural-language prompt only
- Evidence strength: very low

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light intent-analysis clarification only if it stays subordinate to asking for the smallest useful artifact

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E0

### Must-have answer traits
- treats the ask as a valid UI-language entrypoint rather than misuse
- defaults to audit-first behavior instead of formation recommendation
- says the evidence is too thin for design conclusions
- asks for the smallest useful next artifact, screen, route, or Storybook story

### Must-not-do failures
- lecturing about design systems before helping
- immediate token or component prescriptions
- pretending the target screen or workflow is already understood

---

## AU-06 — Styles Feel Off, Make It Cleaner

### Prompt bundle

```text
Artifact summary:
- one admin page screenshot only
- mixed card elevations across sections
- filters and search sit in a crowded top row
- table headers, row density, and side-panel spacing feel inconsistent

User ask:
Can you make it cleaner? The styles feel off.
```

### Input type and evidence strength
- Input type: one-screen artifact summary + short ask
- Evidence strength: low to medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation hints only if tied directly to visible inconsistency

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- treats style discomfort as a clue, not a final diagnosis
- translates “cleaner” into hierarchy, spacing, grouping, and semantic consistency checks
- stays tightly screen-level unless more context is provided
- gives a practical fix-first area and small Smart Suggestions

### Must-not-do failures
- rebranding language with no visible evidence
- direct token overhaul from one screen
- expanding into component catalog recommendations

---

## AU-07 — Storybook Feels Inconsistent

### Prompt bundle

```text
Artifact summary:
- Storybook shows 4 button radii across different stories
- form fields use inconsistent label spacing and helper text treatment
- tables, cards, and empty states use different padding rhythms
- status badges vary in color meaning between stories

User ask:
Storybook feels inconsistent. What should we tighten first?
```

### Input type and evidence strength
- Input type: Storybook summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- foundation-stabilization guidance tied directly to the audit findings

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats Storybook inconsistency as valid evidence rather than a secondary concern
- identifies whether the main problem is style-guide drift, foundation inconsistency, or pattern inconsistency
- prioritizes what to tighten first in a staged way
- avoids turning the answer into a giant governance or documentation program

### Must-not-do failures
- treating Storybook cleanup as only a story-file organization problem
- jumping straight to a full token rewrite
- producing a giant component inventory instead of a stabilization order

---

## AU-08 — This UI Feels Too Generic

### Prompt bundle

```text
Artifact summary:
- one B2B operations screen only
- clean but familiar dashboard layout with summary cards, filters, and a standard data table
- typography and spacing are tidy but the page feels interchangeable with many admin products
- state handling and workflow emphasis are visually flat

User ask:
This UI feels too generic. How should we improve it without making it flashy?
```

### Input type and evidence strength
- Input type: one-screen artifact summary + short ask
- Evidence strength: low to medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- comparative hints only if they stay subordinate to product-fit reasoning

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- avoids treating “generic” as a request for novelty alone
- explains how product-specific character could come from hierarchy, workflow emphasis, density, or state treatment
- keeps anti-sameness advice grounded in visible evidence
- gives practical next moves without prescribing a flashy visual identity

### Must-not-do failures
- recommending arbitrary visual flair
- pushing the user toward copying a famous system
- confusing originality with decorative styling

---

## AU-09 — Style Dictionary Works, But the Styles Feel Off

### Prompt bundle

```text
Artifact summary:
- Style Dictionary exports primitive color, spacing, and type tokens successfully
- semantic aliases exist for only a few states
- teams still describe the UI as visually inconsistent across forms, tables, and banners
- style guide docs focus on token names but not when to use them

User ask:
Our Style Dictionary works, but the styles still feel off. What should we fix first?
```

### Input type and evidence strength
- Input type: style-guide and token-system summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- foundation recommendations tied directly to the audit diagnosis

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats the ask as a style-guide or foundation-layer diagnosis, not as proof the token system is sufficient
- identifies semantic usage guidance and repeated UI states as likely weaknesses
- explains what to stabilize first before adding more tokens or components
- stays practical for developer-side maintenance work

### Must-not-do failures
- assuming Style Dictionary success means design-system maturity
- recommending more primitives as the first answer
- turning the response into generic theming advice

---

## AU-10 — Softer Shape Cue in a High-Control Workflow

### Prompt bundle

```text
Artifact summary:
- internal approvals console with dense tables, escalation states, and bulk actions
- buttons, filters, and cards all use large rounded corners
- the team says the rounded UI feels friendlier
- reviewers also say the product now feels slightly less precise and harder to trust during high-risk decisions

User ask:
How should we read this? Is the softer shape helping or hurting?
```

### Input type and evidence strength
- Input type: artifact summary + focused interpretation ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- foundation guidance tied directly to shape and trust consequences

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explains the likely perceived effect of softer shape language
- checks that effect against product precision and trust needs
- avoids saying rounded equals better or worse by default
- gives a practical next move for deciding the right shape range

### Must-not-do failures
- universal claims about rounded corners
- purely aesthetic judgment with no product consequence logic
- drifting into unrelated component redesign

---

## AU-11 — Cleaner Must Mean Better Scanability, Not Just Less Stuff

### Prompt bundle

```text
Artifact summary:
- dashboard page with many small cards, thin dividers, and light gray labels
- the team wants it to feel cleaner
- the current layout already looks visually minimal, but important status changes are easy to miss

User ask:
If we make this cleaner, what should that actually mean here?
```

### Input type and evidence strength
- Input type: artifact summary + interpretive ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light foundation guidance tied to hierarchy and emphasis

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explains that cleaner should be read through scanability, grouping, and emphasis
- avoids equating cleaner with just less visual material
- names what the current minimal treatment is making harder
- gives a fix-first direction grounded in hierarchy and attention

### Must-not-do failures
- recommending generic minimalism
- treating visual reduction as automatically better
- skipping the explanation of user consequence

---

## AU-12 — Generic Because Emphasis Is Too Flat

### Prompt bundle

```text
Artifact summary:
- operations screen uses consistent spacing and typography
- every panel, card, and action has nearly the same visual weight
- the team says the UI feels clean but generic

User ask:
Why does this feel generic even though it is already consistent?
```

### Input type and evidence strength
- Input type: artifact summary + diagnosis ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- anti-sameness guidance tied directly to hierarchy and workflow emphasis

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explains genericness through flattened emphasis rather than missing novelty alone
- ties the answer to hierarchy, state emphasis, and repeated job visibility
- avoids recommending arbitrary flair
- identifies a concrete fix-first lever

### Must-not-do failures
- equating originality with decoration
- suggesting visual flair without product logic
- skipping the consequence of flat emphasis

---

## AU-13 — Visual Calm Conflicts With Trust or Risk Needs

### Prompt bundle

```text
Artifact summary:
- financial review screen uses ultra-light dividers, muted state colors, soft shadows, and subtle status emphasis
- the team says it feels calm and premium
- operators say risky states do not stand out enough and important actions feel too quiet

User ask:
How should we balance the calm feeling with the need for stronger trust and risk signaling?
```

### Input type and evidence strength
- Input type: artifact summary + tension ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- posture clarification tied directly to trust and state visibility

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explains the perceived effect of calmer visual treatment
- identifies where that calmness is undermining trust or risk readability
- keeps the recommendation consequence-aware rather than taste-based
- gives a practical balance direction instead of forcing either extreme

### Must-not-do failures
- saying premium calm is always correct
- saying stronger signaling always means visual harshness
- reducing the answer to subjective taste
