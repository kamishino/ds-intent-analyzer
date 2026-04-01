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
- if the findings reveal durable canon or recurring drift, offers to update the project memory pack rather than leaving the audit isolated

### Must-not-do failures
- jumping to component-level redesign
- treating token count as maturity
- ignoring semantic roles and usage guidance
- silently treating the audit as durable memory without an explicit capture or update offer

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
- does not offer project-memory capture from this thin-evidence prompt

### Must-not-do failures
- lecturing about design systems before helping
- immediate token or component prescriptions
- pretending the target screen or workflow is already understood
- offering durable project-memory capture before any reusable decision exists

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
- reads the existing artifact first instead of asking broad style-direction questions up front
- stays tightly screen-level unless more context is provided
- gives a practical fix-first area and small Smart Suggestions

### Must-not-do failures
- rebranding language with no visible evidence
- direct token overhaul from one screen
- expanding into component catalog recommendations
- starting with a style questionnaire that the screen evidence already makes unnecessary

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

---

## AU-14 — Many Possible Fixes, But One Lever Should Lead

### Prompt bundle

```text
Artifact summary:
- operations dashboard with muted hierarchy, similar card weights, small status chips, and inconsistent spacing between filter groups
- product managers want more polish
- developers want more tokens
- designers think the layout is the main problem

User ask:
There are a lot of things we could change. What should we change first?
```

### Input type and evidence strength
- Input type: artifact summary + prioritization ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light foundation guidance only if it supports the chosen first lever

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- chooses one highest-leverage first move instead of giving many equal-priority fixes
- explains why that lever comes before polish, token work, or broader redesign
- keeps the rationale tied to hierarchy, state emphasis, grouping, or task visibility
- says what should wait

### Must-not-do failures
- listing several “Priority 1” actions with no true prioritization
- recommending more tokens as the default answer
- confusing polish requests with the highest-leverage fix

---

## AU-15 — Generic Because Primary Actions Do Not Lead

### Prompt bundle

```text
Artifact summary:
- workflow screen has tidy spacing, consistent cards, and a calm neutral palette
- primary actions, routine actions, and secondary filters all carry nearly the same visual weight
- operators can scan the page, but they cannot quickly tell what should lead the next step

User ask:
Why does this still feel generic and indecisive even though the screen is clean?
```

### Input type and evidence strength
- Input type: artifact summary + diagnosis ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- anti-sameness guidance tied directly to action hierarchy and product workflow

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies primary-action emphasis as the sharpest visible first lever
- explains why action leadership matters more than decorative differentiation here
- avoids hedging between hierarchy, spacing, and layout when action emphasis is already the clearest candidate
- says what should wait

### Must-not-do failures
- treating spacing cleanup as equal to action emphasis
- recommending novelty or brand flair as the first answer
- naming several adjacent first moves as co-equal

---

## AU-16 — Crowded but Consistent, Grouping Should Lead

### Prompt bundle

```text
Artifact summary:
- admin screen uses a stable type scale, consistent colors, and clear semantic states
- filters, helper text, inline actions, and supporting metadata sit close together inside each region
- teams say the screen feels crowded, but not chaotic

User ask:
What should we change first before we touch tokens or layout templates?
```

### Input type and evidence strength
- Input type: artifact summary + prioritization ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light foundation guidance only if it stays subordinate to the chosen grouping fix

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies grouping rhythm as the first visible lever
- explains why grouping leads before token cleanup or layout-template work
- keeps the answer practical and screen-level
- says what should wait

### Must-not-do failures
- recommending token cleanup first
- jumping to layout-template redesign first
- treating grouping and layout as equal first moves

---

## AU-17 — Specialized Workbench with Analytic Claims

### Prompt bundle

```text
Artifact summary:
- color-tool workbench with a persistent active color, staged navigation, and multiple specialist surfaces like tuner, analytics, preview, and scale tools
- the product reads as a real workflow tool rather than a landing page
- an analytics surface presents labels like accessibility, best use, confidence, and critique text about the selected color
- the UI feels coherent and dense-but-readable, but one visible broken asset and the strong authority tone of the analytics output raise trust questions

User ask:
This tool feels impressively productized, but I am not sure I trust every judgment it is making. What does the UI clearly get right, and what should we fix first?
```

### Input type and evidence strength
- Input type: bounded multi-surface artifact summary + trust-sensitive audit ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation reasoning only if it sharpens the trust or workflow recommendation

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- recognizes the product as a specialized tool or workbench rather than a generic dashboard
- credits workflow staging, active-object persistence, and action locality where the surface supports them
- separates visual/product quality from claim credibility on the analytics layer
- flags broken assets or authority-sounding judgments with weak visible provenance as trust leaks
- keeps the read bounded and does not pretend full methodological rigor or full-system maturity
- names one fix-first decision that can prioritize trust/provenance clarity over additional polish

### Must-not-do failures
- treating the product as only a pretty dashboard or style exercise
- accepting analytics labels, confidence, or critique text as self-validating
- overclaiming the methodology behind the product's judgments from bounded surfaces
- turning the answer into a giant component inventory or theory dump

---

## AU-18 — Healthcare Booking UI Wants Sprout-Like Cohesion

### Prompt bundle

```text
Product note:
- healthcare booking app for finding providers, choosing time slots, and confirming appointments
- brand color is green

Artifact summary:
- the current product still looks mostly like Bootstrap v4
- cards, forms, buttons, and step sections feel flat and generic
- booking steps and trust cues do not lead clearly
- spacing rhythm feels inconsistent between search, provider cards, and booking details
- green is present, but mostly as a flat accent rather than a meaningful semantic or tonal system
- the overall UI feels mismatched to healthcare booking: too generic, not calm or credible enough

Reference:
- the team keeps pointing at Seeds by Sprout Social: https://seeds.sproutsocial.com/

User ask:
Please audit our current direction.
Tell me:
- what feels off in the current UI
- what from Sprout is actually transferable
- what we should not copy
- what we should stabilize first
```

### Input type and evidence strength
- Input type: current-state artifact summary + named reference donor
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- bounded reference borrowing only after the current UI and product reality are read

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- audits the current healthcare booking UI before talking about Sprout
- explains why Bootstrap-like flatness, weak hierarchy, and generic structure feel mismatched for trust-sensitive booking work
- translates the attraction to Sprout into transferable traits such as calmer hierarchy, stronger spacing discipline, clearer tone control, and more intentional semantic structure
- keeps green as a semantic and product-fit question rather than `make it Sprout green`
- says what from Sprout should not be transplanted directly
- gives one real stabilization order instead of clone advice
- does not emit `Audit handoff` in the base case

### Must-not-do failures
- drifting into pure `Comparative Reference Read`
- telling the team to make the app look like Sprout
- turning healthcare trust into generic healthcare branding talk
- skipping the current UI mismatch and talking only about the reference
- emitting `Audit handoff` or `Frontend handoff` in the base case

### Paired repo-audit follow-up

Follow-up prompt:

```text
Now tell another agent what to audit first in the repo before we change tokens or components.
```

Expected behavior:
- the read stays audit-first
- emits a bounded `Audit handoff`
- keeps `Frontend handoff` out of scope
- names one first repo inspection slice instead of a broad component sweep
- includes a real stop condition for the next audit pass
- includes a clear `Do not expand yet` boundary so the next agent does not widen into redesign or component churn

---

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`

### Prompt bundle

```text
Current-state audit evidence (`docs/design-system/audit-evidence.md`):

# Audit Evidence

## Product note
- healthcare booking app for finding providers, choosing time slots, and confirming appointments
- mobile-first acquisition traffic, but desktop is still used for comparison and rescheduling

## Artifact inventory
- search-results screen summary
- provider-card summary
- booking-stepper summary
- confirmation summary

## Surface summaries
- search results mix dense filters, uneven card padding, and weak provider credibility cues
- provider cards compress specialty, ratings, insurance, and next availability without a clear hierarchy
- booking stepper uses Bootstrap-like tabs and generic alerts instead of calm progress framing
- confirmation relies on generic success states and does not reinforce trust or next-step clarity

## Known workflow pressures
- users compare providers quickly and can abandon if confidence drops
- booking flow must reduce hesitation around insurance, availability, and final confirmation

## Known trust/risk pressures
- healthcare booking needs calm credibility and visible reassurance at selection and confirmation moments
- schedule mistakes or missing context erode trust quickly

## Known drift and hotspots
- green is used inconsistently across CTA, success, and informational states
- spacing rhythm changes across results, provider cards, and booking panels
- trust cues appear late instead of leading the booking path

## Open questions
- whether provider cards or booking stepper should stabilize first

## Source pointers
- search-results route summary
- provider-card notes
- booking-stepper notes

User ask:
Audit this current direction and tell me what to stabilize first.
```

### Input type and evidence strength
- Input type: `audit-evidence.md` current-state packet + audit ask
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation guidance tied directly to the evidence packet

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats `audit-evidence.md` as stronger than a thin brief and weaker than fresher direct artifacts
- audits current healthcare booking friction first instead of drifting into donor-library shopping
- uses the evidence packet to give a concrete stabilization order
- can rise above `prompt only` or generic thin-summary behavior
- keeps confidence bounded and explicit

### Must-not-do failures
- ignoring the evidence packet and acting as if the prompt were still a thin brief
- treating the packet as durable truth stronger than fresh artifacts that may arrive later
- overclaiming full-system certainty from the packet alone

---

## AU-20 — Fresh Audit Evidence Conflicts With Project Memory

### Prompt bundle

```text
Stored project memory (`docs/design-system/project-memory.md`):
- current canon says the booking stepper is already the strongest and most trustworthy surface
- active decision says provider cards are stable enough for now

Fresh current-state audit evidence:
- provider cards now carry the heaviest trust load but still compress ratings, insurance, and next availability into a flat Bootstrap-like block
- booking stepper was recently improved and now reads clearly enough for the current release
- spacing and state cues drift most visibly on provider selection

User ask:
Use this latest evidence to tell me what to stabilize first and whether our stored memory still holds up.
```

### Input type and evidence strength
- Input type: conflicting project memory + fresh audit evidence
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- memory-drift clarification tied directly to the audit recommendation

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- prefers the fresh audit evidence over stored project memory
- calls out the drift explicitly instead of silently forcing the old memory
- shifts the stabilization order toward provider-card trust and comparison clarity
- keeps project memory as continuity help, not stronger truth than current evidence

### Must-not-do failures
- treating stored memory as if it overrides fresher evidence
- ignoring the conflict and pretending both packets still align
- turning the answer into memory-management theory instead of fix-first audit guidance

---

## AU-21 — Healthy Recurring Review

### Prompt bundle

```text
Recurring review scope (`docs/design-system/review-brief.md`):

# Review Brief

## Product note
- healthcare booking app for finding providers, choosing time slots, and confirming appointments

## Surfaces in scope
- search results
- provider cards
- booking stepper
- confirmation

## Recurring checkpoints
- trust cues lead before visual polish
- spacing rhythm stays consistent across booking stages
- semantic green roles stay bounded to success, reassurance, and key CTAs

## Evidence sources
- current route summaries
- latest audit-evidence packet

## Stop conditions
- choose one next fix, not a full redesign program

## Escalation triggers
- if trust cues regress
- if the booking path drifts back toward generic Bootstrap-like structure

Current cycle evidence:
- provider cards now separate specialty, insurance, and next availability more clearly
- booking stepper is calmer and easier to scan than the last cycle
- confirmation still feels generic and does not reinforce next-step trust strongly enough

User ask:
Run our monthly design-system review.
Keep it compact and tell me:
- current health
- biggest drift
- what to keep
- what to fix next
- confidence
- next review action
```

### Input type and evidence strength
- Input type: recurring-review scope contract + current-cycle audit evidence
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- compact recurring-review shell only

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- stays audit-first and uses a compact recurring-review shell
- uses `review-brief.md` to scope the recurring checkpoints
- names what is healthier and what still drifts
- gives one next fix rather than a long audit memo
- does not emit `Audit handoff` or `Frontend handoff`
- may offer to update `review-log.md` explicitly if the user wants to preserve the cycle

### Must-not-do failures
- treating the recurring review like a brand-new one-off audit
- silently writing `review-brief.md` or `review-log.md`
- collapsing into repo handoff or frontend execution
- emitting `Audit handoff` or `Frontend handoff` without an explicit user pivot into repo inspection or build work

---

## AU-22 — Drift-Detection Recurring Review

### Prompt bundle

```text
Recurring review scope (`docs/design-system/review-brief.md`):
- same healthcare booking review scope as last month

Prior review log (`docs/design-system/review-log.md`):
- biggest drift last cycle: provider-card trust cues were too flat
- fix next: strengthen provider-card trust hierarchy before touching broader token work

Fresh current evidence:
- provider cards now lead trust cues more clearly and no longer look like the weakest surface
- confirmation step regressed and now feels generic again, with weak reassurance after booking
- green state usage is calmer than before, but the final confirmation still does not feel trustworthy enough

User ask:
Run the next recurring review.
Tell me:
- what got healthier
- what regressed
- what to keep
- what to fix next
- confidence
- whether the old priority should change
```

### Input type and evidence strength
- Input type: recurring-review scope contract + prior review log + fresh current evidence
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- compact recurring-review shell with drift comparison

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- compares the current cycle against the prior review log explicitly
- says what improved, what regressed, and whether the previous priority should change
- keeps the answer compact and recurring-review shaped
- treats the prior log as continuity context, not stronger truth than fresh evidence
- may offer to update `review-log.md` explicitly if the user wants to preserve the cycle

### Must-not-do failures
- ignoring the prior review log and rewriting the same audit from scratch
- letting the old review log override fresher evidence
- turning the answer into a long general audit instead of a drift-aware recurring review
- emitting `Audit handoff` or `Frontend handoff` without an explicit user pivot into repo inspection or build work

---

## AU-23 — One-Frame-Only Figma-Aware Audit

### Prompt bundle

```text
Design-context summary:
- one Figma frame link only for the provider-results screen
- Dev Mode notes say provider cards, insurance chips, next-available times, and booking CTAs all use very similar visual weight
- annotations say `make this feel calmer and more credible without adding more chrome`
- no other screens, repo surfaces, or current screenshots are included

User ask:
Audit this frame and tell me what we should fix first.
```

### Input type and evidence strength
- Input type: one-frame design-context summary + short audit ask
- Evidence strength: low to medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation hints only if they stay subordinate to the frame-level audit

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E1

### Must-have answer traits
- treats the one-frame design-context as stronger than a thin brief
- stays frame-level rather than pretending full booking-flow certainty
- identifies one fix-first hierarchy or trust lever from the frame evidence
- uses a bounded confidence line such as `Confidence: E1 - low, one frame only`

### Must-not-do failures
- collapsing the frame read back into `prompt only`
- acting as if one frame proves system-wide maturity
- narrating Dev Mode or MCP mechanics instead of grounded UI conclusions

---

## AU-24 — Multi-Surface Design-Context Packet in `audit-evidence.md`

### Prompt bundle

```text
Current-state audit evidence (`docs/design-system/audit-evidence.md`):

# Audit Evidence

## Product note
- healthcare booking app for finding providers, choosing time slots, and confirming appointments

## Artifact inventory
- provider-results Figma frame link
- provider-card Figma component notes
- booking-stepper Dev Mode summary
- confirmation annotations

## Design-context summaries
- provider-results frame shows search filters, provider cards, and booking CTA in one dense hierarchy
- provider-card notes say ratings, insurance, and next availability still compete visually
- booking-stepper summary says progress treatment is calmer than before but secondary guidance is still weak
- confirmation annotations say reassurance and next-step clarity still trail behind generic success styling

## Surface summaries
- provider trust cues and booking progression are the main decision points
- confirmation still feels generic after booking

## Known workflow pressures
- users compare providers quickly and can abandon if confidence drops

## Known trust/risk pressures
- healthcare booking needs calm credibility at provider selection and confirmation

## Known drift and hotspots
- spacing rhythm and trust emphasis drift across provider cards, stepper, and confirmation

## Open questions
- whether provider cards or confirmation should stabilize first

## Source pointers
- provider-results frame
- provider-card component notes
- booking-stepper summary
- confirmation annotations

User ask:
Use this packet to audit the current direction and tell me what to stabilize first.
```

### Input type and evidence strength
- Input type: multi-surface `audit-evidence.md` packet with structured design-context
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- light formation guidance tied directly to the evidence packet

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats the multi-surface packet as stronger than a thin brief
- uses the design-context summaries to produce a stronger stabilization order than a prompt-only read
- can rise to `Confidence: E2 - medium, design context only`
- keeps the evidence bounded and does not pretend full live-product certainty

### Must-not-do failures
- ignoring the `Design-context summaries` section and answering as if the packet were only a brief
- letting design-context alone justify `E3`
- narrating connector mechanics instead of grounded UI or workflow consequences

---

## AU-25 — Stale Design-Context Conflicts With Fresher Screenshot Evidence

### Prompt bundle

```text
Stored current-state audit evidence (`docs/design-system/audit-evidence.md`):
- Design-context summaries from last week say provider cards already lead trust cues clearly and no longer need immediate stabilization
- confirmation was considered the weakest surface at that time

Fresh screenshot summary:
- provider cards still compress ratings, insurance, and next availability into a flat block
- trust cues remain visually weak on the live screen
- confirmation is still generic, but provider selection now looks like the sharper risk point

User ask:
Use the latest evidence to tell me what to stabilize first and whether the older design-context packet still holds up.
```

### Input type and evidence strength
- Input type: stale design-context packet + fresher screenshot summary
- Evidence strength: medium

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- drift clarification tied directly to the fix-first audit recommendation

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- prefers the fresher screenshot evidence over the older design-context packet
- calls out the drift explicitly instead of silently forcing the older packet
- shifts the stabilization order toward the live provider-card trust problem if the fresh evidence supports that move
- keeps the older design-context packet as continuity context, not stronger truth than the newer artifact

### Must-not-do failures
- treating stored design-context summaries as if they override fresher live evidence
- ignoring the conflict and pretending both evidence sources still align
- turning the answer into design-tool process commentary instead of fix-first audit guidance
