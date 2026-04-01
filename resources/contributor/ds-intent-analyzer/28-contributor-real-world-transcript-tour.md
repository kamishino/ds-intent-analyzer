# DS Real-World Transcript Tour v1

## Purpose

This doc is the maintainer-facing answer to a practical question:
- how does `ds-intent-analyzer` actually sound in real use?

It is not a `55`-transcript archive.
The compact full coverage ledger still lives in `15-contributor-forward-test-results.md`.
This tour exists to show representative answer shape across the primary modes, paired follow-through, and the current watch miss.

This doc is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Run header

- Run label: `FT-2026-04-01-real-world-transcript-tour`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Temp-repo install sanity: clean local-path install plus `npx ds-intent-analyzer install` succeeded in a fresh temp repo on `2026-04-01`
- Capture style: manual fresh-thread maintainer reruns using raw contributor prompt bundles only
- Notes:
  - this tour is paired with the compact full-pack ledger
  - no automated transcript-grade prompt harness exists in the repo
  - long packet prompts are trimmed only where repeated artifact scaffolding would make the tour unreadable; decision-bearing lines are preserved

---

## AF-01 — Adjective-Heavy Internal Tool Brief

### Why this case is in the tour

This is the cleanest example of how the skill behaves on a thin vague brief.
It shows that the runtime stays in `Intent Analysis`, translates adjectives into constraints, and refuses to invent a design system from taste words alone.

### Raw prompt bundle

```text
We want our next operations dashboard to feel calm, premium, and modern.
It should not feel corporate or clunky.
Please recommend the right direction for the UI system.
```

### Observed assistant answer transcript

```text
TL;DR
This is too thin to pick a UI-system direction confidently.
"Calm, premium, and modern" are tone constraints, but the real decision is what repeated job this dashboard serves and how risky or dense that job is.

What I would assume for now
- If this is an operations dashboard with review or escalation work, do not start from premium styling.
- Start from scanability, state emphasis, and action hierarchy.
- If this is more of an executive summary surface, the direction could be lighter and more presentation-led.

Smart Suggestions
- Name the dominant repeated job: monitoring, queue review, investigation, or decision support.
- Tell me whether mistakes are expensive or mostly informational.
- Show one representative screen if you want a sharper recommendation.

Confidence: E0 - very low, prompt only

Next move
I can narrow this fast if you tell me which repeated job the dashboard serves most of the day.
```

### Quick maintainer note

- What it demonstrates: adjective-heavy prompts stay discovery-first rather than turning into token or component advice.
- What to watch for: the runtime should not drift into a style quiz or pretend the product archetype is already known.
- Assessment: healthy pass.

---

## PF-02 — Trust-Sensitive Workflow Formation Direction

### Why this case is in the tour

This is the best builder-facing `Formation Recommendation` example in the pack.
It shows the product reading repeated jobs, state semantics, and trust pressure before it talks about components.

### Raw prompt bundle

```text
We need a shared design-system direction for a customer verification workspace used by onboarding specialists, fraud review, and escalation managers.
The product is dense: queues, case detail, document comparison, status history, and risky approvals.
Mistakes are expensive, the UI must feel credible without becoming cold, and teams keep inventing their own state semantics.
Recommend the formation direction, foundation priorities, and what to stabilize first.
```

### Observed assistant answer transcript

```text
TL;DR
Move toward a review-first operational system, not a generic fintech polish layer.
Your foundations should make risky case reading, status meaning, and escalation flow feel consistent before you invest in broader component expansion.

Formation direction
- Treat this as a trust-sensitive case-review product.
- Optimize for dense evidence reading, clear state meaning, and calm escalation handling.
- Keep "credible without becoming cold" as a tone boundary, not the lead decision layer.

Stabilize first
1. State semantics and severity language
2. Case-review shell hierarchy across queue, detail, and approval surfaces
3. Spacing and emphasis rules for risky actions

Smart Suggestions
- Lock one shared status model before teams create more local state labels.
- Normalize one queue-to-detail contract before expanding the component library.
- Keep tokens in service of meaning and emphasis, not brand polish.

Confidence: E2 - medium, brief only

Next move
I can turn this into a first audit packet for the queue, case detail, and approval flow if you want.
```

### Quick maintainer note

- What it demonstrates: the skill is strongest when it converts a medium-evidence brief into a formation direction with a real stabilization order.
- What to watch for: the answer should stay product-facing and should not slip into generic trust-brand language.
- Assessment: healthy pass.

---

## PF-04 — Existing Workflow Product Needs a Stabilization Order

### Why this case is in the tour

This shows the builder-facing audit path on a current-state summary rather than a screenshot or a full artifact pack.
It is a good example of how the skill chooses one operational contract to stabilize first.

### Raw prompt bundle

```text
Current-state summary:
- order-ops product with intake queue, detail drawer, dispute review, and bulk resolution screens
- each route uses different severity colors, filter grouping, and action hierarchy
- teams created their own empty states and confirmation patterns
- the product is usable, but operators say it feels harder to trust and harder to scan as volume rises

User ask:
What should we stabilize first, and what should the next concrete move be?
```

### Observed assistant answer transcript

```text
TL;DR
Stabilize the shared severity and action-priority contract first.
Right now trust and scanability are breaking because each route teaches operators a different meaning for urgency and next action.

Why that first
- If severity color means different things across intake, dispute review, and bulk resolution, operators cannot build fast trust.
- Filter grouping and empty states matter, but they sit downstream of the action contract.
- More token cleanup will not solve route-level inconsistency by itself.

Smart Suggestions
- Pick one severity model and one primary-action rule for queue, drawer, and dispute review.
- Rewrite empty and confirmation states only after that contract is locked.
- Test the new contract on the highest-volume path first.

Confidence: E2 - medium, brief only

Next move
I can draft a route-by-route stabilization checklist for the queue, detail drawer, and dispute review flow.
```

### Quick maintainer note

- What it demonstrates: the skill can stay practical on current-state summaries without exploding into a long artifact.
- What to watch for: it should still pick one highest-leverage stabilization order rather than several co-equal tracks.
- Assessment: healthy pass.

---

## AU-01 — Vague Improve Request With One-Screen Evidence

### Why this case is in the tour

This is the best quick proof that one-screen evidence stays bounded.
It shows the audit posture clearly and keeps "premium" subordinate to visible hierarchy and density issues.

### Raw prompt bundle

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

### Observed assistant answer transcript

```text
TL;DR
Do not chase "premium" first.
From one screen, the sharper issue looks like crowded hierarchy and weak grouping between filters, table work, and the alert rail.

What I would fix first
- Reduce competing surface weight between cards, status pills, and shortcuts.
- Rebuild the filter row into clearer groups with stronger primary vs secondary controls.
- Make the right rail earn its space instead of competing with the table for attention.

Smart Suggestions
- Pick one main work zone on the page and demote the rest.
- Normalize text sizes before styling refinements.
- Recheck which status pills actually need color.

Confidence: E1 - low, one screen only

Next move
I can turn this into a screen-level audit handoff with the first layout and hierarchy checks if you want.
```

### Quick maintainer note

- What it demonstrates: thin visual evidence routes to `UI / DS Audit`, not to formation theory.
- What to watch for: confidence must stay bounded and the answer must not pretend it understands the full system from one screen.
- Assessment: healthy pass.

---

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`

### Why this case is in the tour

This is the clearest current-state artifact case.
It shows how `audit-evidence.md` sharpens the stabilization order without behaving like hidden memory.

### Raw prompt bundle

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

### Observed assistant answer transcript

```text
TL;DR
Stabilize provider-card trust hierarchy first.
That is the highest-leverage break in the booking path because users are making confidence decisions there before the stepper or confirmation screen can help.

Why that first
- Provider cards currently flatten specialty, ratings, insurance, and next availability into one competing block.
- If trust and comparability are weak at selection time, later calm-progress improvements cannot recover the drop in confidence.
- The stepper and confirmation still need work, but they sit downstream of the weaker decision surface.

Smart Suggestions
- Lead provider identity, insurance fit, and next availability more clearly.
- Reserve green for the few moments where reassurance or success truly matters.
- Normalize spacing rhythm across results and cards before broader styling changes.

Confidence: E2 - medium

Next move
I can turn this into a focused audit handoff for provider-card hierarchy, trust cues, and comparison behavior if you want.
```

### Quick maintainer note

- What it demonstrates: `audit-evidence.md` is strong enough to produce a concrete stabilization order.
- What to watch for: the answer should still acknowledge packet-level limits and avoid pretending it has fresher live artifacts.
- Assessment: healthy pass.

---

## AU-21 — Healthy Recurring Review

### Why this case is in the tour

This is the best recurring-review example.
It shows the compact recurring shell and proves the feature stays audit-first rather than turning into a memo or hidden memory update.

### Raw prompt bundle

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

### Observed assistant answer transcript

```text
TL;DR
Health is improving, but the confirmation step still lags the trust tone set by provider selection and the calmer booking flow.

Current health
Provider selection and booking progression are materially stronger than the last cycle.
The system now feels more coherent in the earlier decision moments.

Biggest drift
Confirmation still falls back to a generic success pattern instead of reinforcing reassurance and next-step clarity.

Keep
- clearer separation of specialty, insurance, and availability on provider cards
- calmer booking-step progression

Fix next
Stabilize the confirmation trust pattern so the final state reinforces what was improved earlier in the journey.

Confidence
E2 - medium

Next review action
Review the confirmation surface with one focused artifact that checks reassurance language, next-step clarity, and semantic color use.
```

### Quick maintainer note

- What it demonstrates: recurring review stays compact, scoped, and drift-aware.
- What to watch for: the shell should not collapse back into a first-run audit memo or silently write a review log.
- Assessment: healthy pass.

---

## AU-24 — Multi-Surface Design-Context Packet in `audit-evidence.md`

### Why this case is in the tour

This is the key design-context case in the current roadmap.
It shows the product using structured design-context as current evidence while keeping confidence bounded.

### Raw prompt bundle

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

### Observed assistant answer transcript

```text
TL;DR
Stabilize provider-card trust hierarchy first.
This packet makes that look sharper than confirmation because the booking decision still depends on fast credibility reading before the user commits.

Why that first
- The provider-results frame and component notes both point to competing signals inside the card.
- The stepper looks calmer already, which reduces its urgency.
- Confirmation is still weak, but it is downstream of the more immediate trust decision.

Smart Suggestions
- Clarify the order of identity, insurance fit, and next availability on provider cards.
- Reduce visual competition inside the card before touching broader visual polish.
- Keep confirmation as the next likely follow-up once provider-card trust is stabilized.

Confidence: E2 - medium, design context only

Next move
I can turn this into a focused provider-card audit handoff, or compare it against fresher live UI if you have it.
```

### Quick maintainer note

- What it demonstrates: multi-surface design-context materially sharpens the audit versus a thin brief.
- What to watch for: the answer should stay bounded at `design context only`, and today it still under-emits the visible proactive coordination packet.
- Assessment: bounded edge case. The core audit is healthy, but the proactive coordination surface is still a target state.

---

## RF-02 — Hybrid-Sensitive Platform Comparison

### Why this case is in the tour

This is the cleanest comparison case for hybrid-sensitive reasoning.
It shows how the runtime avoids forcing a clean winner when the product sits between buckets.

### Raw prompt bundle

```text
We are building an internal platform that mixes docs, administration, analytics, and developer workflows.
Which reference logic is closer for us: Carbon or PatternFly?
We need a careful read because the product is not purely a developer toolkit and not purely an enterprise admin suite either.
```

### Observed assistant answer transcript

```text
TL;DR
Carbon looks slightly closer as the primary logic, but this is still hybrid-sensitive.
Use Carbon for calmer system structure and disciplined information architecture, then borrow PatternFly selectively where admin-heavy workflow framing is stronger.

Why that read
- Your mix of docs, analytics, and developer workflows is broader than a pure admin suite.
- PatternFly is useful for task-heavy operational framing, but it can pull the product too quickly toward enterprise-admin gravity.
- Carbon is a better starting shell if you need one system to span several surfaces without feeling purely back-office.

Borrow carefully
- From Carbon: structural restraint, layout discipline, cross-surface coherence
- From PatternFly: selected workflow utilities where dense admin tasks dominate

What I would not overclaim
- I would not treat this as a final archetype call yet.
- I would still want one dominant repeated-job surface before locking a durable donor.

Confidence: E2 - medium, still hybrid-sensitive

Next move
I can help you choose the sharper donor if you show the single surface where users spend most of their time.
```

### Quick maintainer note

- What it demonstrates: the runtime can stay useful without flattening a mixed product into one easy category.
- What to watch for: tie-break evidence requests can still drift a little broad if the answer is not kept compact.
- Assessment: healthy pass.

---

## RF-07 — Tokens Exist, But the UI Still Feels Wrong

### Why this case is in the tour

This is the active watch miss.
It belongs in the tour because it shows the current boundary of the skill more honestly than an all-pass showcase would.

### Raw prompt bundle

```text
We already have tokens and shared styles, but the UI still feels wrong and generic.
How should we think about this before we add more components or switch libraries?
```

### Observed assistant answer transcript

```text
TL;DR
Do not add more tokens or switch libraries yet.
This sounds more like a pattern and interface-reading problem than a styling coverage problem.

What to inspect first
- hierarchy and emphasis on the repeated screens
- state contrast where routine and risky moments should feel different
- whether the main flows still collapse into generic list-detail patterns

Why that first
If the UI feels generic after tokens and shared styles already exist, the missing layer is usually not more styling inventory.
It is more often weak hierarchy, weak state meaning, or repeated-flow structure that still feels interchangeable.

Confidence: E1 - low, brief only

Next move
I can help you inspect one repeated workflow and tell you whether hierarchy, state contrast, or flow structure looks like the sharper first lever.
```

### Quick maintainer note

- What it demonstrates: the runtime correctly rejects token cleanup and library switching as the lead answer.
- What to watch for: it still hedges between three nearby first targets instead of choosing one clearly enough.
- Assessment: current watch miss.

---

## RF-16 — URL-Only Design-System Reference Page

### Why this case is in the tour

This is the cleanest thin-evidence guard in the reference pack.
It shows that URL-only inspection stays page-level and does not pretend to understand a whole system from one page.

### Raw prompt bundle

```text
Use ds-intent-analyzer to check this design-system reference page:
https://thc.motorway.co.uk/0566ad526/p/652544-the-highway-code

Tell me:
- what this page clearly signals
- what looks useful to borrow carefully
- what you would not overclaim from a single URL
- confidence
```

### Observed assistant answer transcript

```text
TL;DR
From one URL, this reads as a disciplined page-level system surface with strong emphasis on structure and guidance, but not enough evidence to infer the full system.

What this page clearly signals
- deliberate hierarchy and documentation-minded framing
- a system that values clarity and explicit guidance over decorative novelty

What looks useful to borrow carefully
- the restraint in information ordering
- any clear page-level guidance patterns that reduce ambiguity

What I would not overclaim
- I would not infer full token architecture, governance maturity, or cross-product consistency from one page.
- I would not treat a single reference page as proof that the whole system fits your product.

Confidence: E1 - low, one page only

Next move
I can help you compare this page-level signal against your own product pressures if you want a more usable borrowing read.
```

### Quick maintainer note

- What it demonstrates: `RF-16` stays audit-first and bounded.
- What to watch for: confidence wording should stay short and plain-language, not drift into system-level certainty.
- Assessment: healthy pass.

---

## RF-21 — Carbon Reference to Repo Borrowing Audit

### Why this case is in the tour

This is the best example of reference-to-repo follow-through.
It shows the recommendation shell plus a bounded `Audit handoff`.

### Raw prompt bundle

```text
We have an existing React operations repo and the team wants to reuse Carbon as a reference for our color, spacing, and layout.
Help me decide:
- whether Carbon should actually lead for us
- what to borrow carefully
- what not to copy blindly
- what another agent should audit first in the repo before we change tokens or components
```

### Observed assistant answer transcript

```text
TL;DR
Carbon should not lead by default.
Use it as a bounded donor for layout discipline and some spacing logic, but audit your repo's repeated operational jobs before changing tokens or components.

What to borrow carefully
- layout discipline on dense operational surfaces
- restraint in spacing and structure where information needs to scan quickly

What not to copy blindly
- Carbon's platform weight
- governance assumptions
- tone or density choices that belong to IBM's product context, not yours

Audit handoff
Lead job
- audit the 2-3 highest-friction repeated jobs in the repo before any token or component cleanup

Shared evidence
- queue/list-detail flows
- risky-state handling
- action hierarchy across dense operational routes

Do not decide
- final token set
- component-library expansion

Merge expectation
- return one first inspection slice that explains whether layout discipline, state meaning, or repeated-flow structure is the sharper gap

Confidence: E2 - medium, brief only

Next move
I can turn that handoff into a tighter repo-audit packet if you want.
```

### Quick maintainer note

- What it demonstrates: the skill can keep a famous donor bounded and still give another agent a usable next step.
- What to watch for: proactive visible coordination still under-emits on this class of case, even though the repo follow-through itself is strong.
- Assessment: healthy pass on the reference-to-repo job, bounded edge case on proactive coordination.

---

## PF-02 + `frontend-skill` Follow-Up

### Why this case is in the tour

This is the best example of bounded execution handoff.
It shows how the analyzer leads the direction and then hands off one narrow first-build target to `frontend-skill`.

### Raw prompt bundle

```text
Original prompt:
We need a shared design-system direction for a customer verification workspace used by onboarding specialists, fraud review, and escalation managers.
The product is dense: queues, case detail, document comparison, status history, and risky approvals.
Mistakes are expensive, the UI must feel credible without becoming cold, and teams keep inventing their own state semantics.
Recommend the formation direction, foundation priorities, and what to stabilize first.

Follow-up prompt:
Now use frontend-skill to turn this into a first implementation direction.
```

### Observed assistant answer transcript

```text
Frontend handoff
Lead job
- keep the analyzer's direction fixed and turn it into one first implementation slice

Locked truths
- this is a trust-sensitive review workspace, not a generic admin dashboard
- state semantics and case-review hierarchy lead before broader component expansion
- the first build should make risky approvals and review-state meaning clearer

Recommended first build target
- one queue-to-case-detail shell for verification review

Build direction
- make status meaning explicit and consistent
- keep action emphasis calm but unmistakable
- give document comparison and decision context clearer hierarchy than generic dashboard cards

Do not invent
- new product flows
- brand language beyond the credible-not-cold boundary
- a broader component system than the brief justifies

Confidence: E2 - medium, brief only

Next move
I can turn this into a stricter screen contract for the verification queue and case detail pair if you want.
```

### Quick maintainer note

- What it demonstrates: `Frontend handoff` is bounded, explicit, and keeps the analyzer as the lead on direction.
- What to watch for: build handoff should never invent new product structure or co-lead before the decision shell is stable.
- Assessment: healthy pass.

---

## Final note

Use this tour when you need to understand real answer behavior quickly.
Use `15-contributor-forward-test-results.md` when you need coverage over the whole live contributor surface.
Do not commit a default `55`-transcript archive unless a future slice introduces a transcript-grade harness and a reason to maintain that overhead.
