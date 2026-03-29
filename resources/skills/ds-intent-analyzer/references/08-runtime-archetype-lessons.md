# Archetype Lessons Pack v1

## Purpose

This file turns the current design-system research into a practical decision reference.
It is meant to sit between the framework and the dataset:

- **Framework Pack v2** = rulebook
- **Dataset + Roadmap v2** = evidence state and research direction
- **Archetype Lessons Pack v1** = decision shorthand for classification and formation work

Use this file when:
- classifying a design system quickly
- stress-testing archetype choices
- forming a new design system from product context
- explaining why one archetype fits better than another

---

# 1. Public Trust Service

## Defining constraints
This archetype fits when the system is shaped by:
- high trust demand
- accessibility and inclusion pressure
- plain-language expectations
- relatively high cost of misunderstanding
- low tolerance for expressive ambiguity

## Strongest signals
- clarity dominates brand expression
- guidance is meant to feel safe, stable, and easy to follow
- accessibility is not a side feature; it is central
- content and structure reduce confusion for broad audiences
- visual restraint is usually deliberate

## Common false positives
Do not classify a system here only because:
- it looks clean or minimal
- it has strong accessibility documentation
- it serves a broad audience

A system should feel shaped by public trust, service clarity, and safe comprehension, not just visual simplicity.

## What to borrow
- plain-language bias
- content-first hierarchy
- accessible defaults
- restrained color and interaction logic
- trust-building clarity

## What not to copy blindly
- extreme restraint in products that need stronger identity or richer workflow density
- public-service tone in commercial or emotionally differentiated products
- oversimplified interaction models in high-density operational tools

## Anchor references
- GOV.UK
- USWDS

## Formation guidance
Use this archetype when:
- the system must help people succeed without specialist knowledge
- clarity and trust matter more than expression
- accessibility must be core, not additive

---

# 2. Enterprise Workflow

## Defining constraints
This archetype fits when the system is shaped by:
- repeated operational jobs
- dense information and structured tasks
- efficiency pressure
- relatively high error cost in ongoing workflows
- need for consistency across internal or professional product experiences

## Strongest signals
- task flow beats visual expression
- forms, tables, states, filters, and operational patterns matter a lot
- the system helps users work faster and more reliably
- structured density is normal, not accidental
- accessibility matters, but workflow clarity is usually the stronger signal

## Common false positives
Do not classify a system here only because:
- it has many components
- it has tables, forms, or dashboards
- it serves business users

The core question is whether repeated operational workflow support is the primary shaping force.

## What to borrow
- pattern-first thinking for operational flows
- hierarchy for dense information
- consistency across states and form behaviors
- strong empty/loading/error treatment
- pragmatic accessibility in task-heavy contexts

## What not to copy blindly
- enterprise density for consumer-facing experiences
- overbuilt admin patterns in lightweight products
- heavy operational language in brand-led journeys

## Anchor references
- Salesforce Lightning
- Uber Base

## Formation guidance
Use this archetype when:
- the product succeeds or fails on repeated structured work
- user efficiency matters more than emotional tone
- pattern maturity matters more than component novelty

## Decision shorthand against platform-first references
- Workflow-first with bounded platform support means repeated jobs, state visibility, and dense task clarity lead the decision.
- Borrow platform discipline second when implementation support is useful, but do not let platform breadth outrank workflow fit by default.

---

# 3. Commerce Enablement

## Defining constraints
This archetype fits when the system is shaped by:
- merchant or business operations
- product/order/payment/setting workflows
- value and risk signaling
- buyer trust in commercial contexts
- operational support tied directly to revenue or conversion

## Strongest signals
- merchant/operator jobs dominate
- the system helps users manage products, orders, payments, fulfillment, settings, or related commercial workflows
- commercial clarity matters
- trust is important, but within a business-operational frame
- data and states support revenue-bearing tasks

## Common false positives
Do not classify a system here only because:
- it belongs to a commerce company
- it contains dashboards
- it has transactional UI

The deciding signal is whether the repeated jobs are specifically merchant or business-operations jobs.

## What to borrow
- revenue-critical workflow prioritization
- risk/value signaling
- trustworthy but action-oriented structure
- useful defaults for product, payment, and settings management
- practical guidance for commercial states and decisions

## What not to copy blindly
- merchant-centric logic into non-commercial enterprise tools
- aggressive value/risk cues where they create noise
- transaction-heavy patterns in consumer emotional journeys

## Anchor references
- Shopify Polaris

## Leaning / hybrid references
- eBay Playbook

## Formation guidance
Use this archetype when:
- the product exists to help users run or manage commerce
- commercial operations shape the UI more than generic workflow needs
- merchant confidence and decision support matter

---

# 4. Developer Toolkit / Platform

## Defining constraints
This archetype fits when the system is shaped by:
- composability and reuse
- multi-team scale
- code/design alignment
- implementation support
- strong documentation and distribution logic
- platform or ecosystem thinking

## Strongest signals
- the system behaves like infrastructure for building products
- code and design integration are central
- documentation, tokens, theming, APIs, and contribution patterns matter a lot
- composability and adoption across teams are big priorities
- scale of reuse can be more important than experience tone

## Common false positives
Do not classify a system here only because:
- it has a public docs site
- it offers component code
- it is popular among engineers

The archetype fits when reuse and implementation scale are primary shaping forces, not just outputs.

## What to borrow
- token discipline
- reusable primitives and scalable naming
- design-to-code alignment
- contribution patterns and maintenance thinking
- documentation that supports adoption, not just browsing

## What not to copy blindly
- toolkit abstraction when product patterns are still unclear
- platform-scale governance too early
- theming/extension models before foundations are stable

## Core references
- GitHub Primer
- Atlassian
- Elastic UI Framework
- Chakra UI
- Headless UI
- shadcn/ui

## What platform maturity buys
- stronger adoption support across teams
- more disciplined tokens, naming, and contribution logic
- more predictable design-to-code alignment
- better documentation and reuse infrastructure

## Decision shorthand against workflow-first references
- Platform-first with workflow gravity means reuse, theming, distribution, and implementation breadth lead the decision, while workflow support remains important but secondary.
- If the product's dominant repeated job still needs clearer operational support than broader platform breadth, do not let platform maturity lead the recommendation.

## Key caution
This bucket is likely too broad and should still be treated carefully.
At the moment, it is useful as a parent archetype, but likely needs sub-archetype testing rather than immediate hard splitting.
When explaining this archetype to developers, do not let implementation maturity erase workflow or product-fit questions.

## When workflow reality should win instead
Do not let platform maturity lead the answer when:
- repeated operational jobs are the primary shaping force
- dense state handling matters more than reuse infrastructure
- the team is still trying to stabilize patterns, not distribute a system across many product surfaces

In those cases, borrow platform discipline second.
Borrow workflow clarity first.

## Working sub-archetype candidates
- UI Toolkit / Library
- Product Platform System
- Framework-First Implementation System

## Formation guidance
Use this archetype when:
- system adoption across teams matters heavily
- implementation and reuse shape the system as much as end-user product reality
- infrastructure quality is part of the product strategy

## Developer guidance translation
When a developer asks about a library or “mature system” in this space:
- explain what platform-scale strengths actually buy them
- check whether their product is truly shaped by reuse and implementation scale
- warn against borrowing platform overhead when the real issue is still workflow or foundation clarity
- keep the answer explicit about what maturity does not solve: unclear repeated jobs, weak state clarity, or unstable product posture

---

# 5. Brand / Consumer / Industry-Specific

## Defining constraints
This archetype fits when the system is shaped by:
- emotional tone or identity expression
- strong brand differentiation
- sector-specific experience needs
- customer-facing product feel
- deliberate control over expression, perception, and interaction character

## Strongest signals
- identity matters materially
- expression is not decoration; it is part of the product experience
- systems often care about tone, motion, mood, or distinctiveness
- experience cohesion may matter as much as reusable structure
- industry nuance can shape the UI in ways generic systems would miss

## Common false positives
Do not classify a system here only because:
- it looks beautiful
- it belongs to a famous consumer brand
- it has polished marketing language

The system should be structurally shaped by brand or sector experience demands, not just styled attractively.

## What to borrow
- controlled expression
- experience tone as a system variable
- selective, deliberate visual identity
- stronger attention to perception and emotional coherence
- sector nuance where it truly changes experience needs

## What not to copy blindly
- high-expression patterns in trust-heavy or workflow-heavy products
- brand-led motion or styling without system discipline
- consumer tone where operational clarity should dominate

## Anchor references
- Airbnb DLS
- Backpack
- Porsche Design System

## Leaning references
- Gestalt
- Sainsbury’s Design System

## Formation guidance
Use this archetype when:
- identity is part of the product value
- emotional or sector-specific experience matters materially
- expression must be systematized, not improvised

## Bounded implementation layer
Some brand-led systems also expose strong implementation traits:
- theming
- accessibility
- framework assets
- code distribution

Treat these as supporting traits, not as proof that the system is primarily platform-first.
Strong tooling does not erase a brand-led primary shaping force.

## Developer guidance translation
When a developer asks why a product feels generic or wants a stronger identity:
- explain that controlled expression can be a system concern, not just visual polish
- keep the advice tied to product tone, hierarchy, density, and trust
- warn against copying brand-led systems when the product reality does not justify that expression level
- explain that the safest borrowing often comes from restraint, tone control, and system discipline rather than visible brand cues

---

# 6. Operational Hybrid

## Defining constraints
This is not the default answer for uncertainty.
Use it only when:
- two structural logics are both materially present
- both are supported by evidence
- the system would be distorted by forcing a single archetype too early

## Strongest signals
- posture and evidence point in two directions with real support
- both interpretations explain meaningful parts of the system
- the hybrid label clarifies rather than hides ambiguity

## Common false positives
Do not use hybrid when:
- evidence is thin
- you are unsure
- the system has normal complexity
- a primary archetype is available but feels imperfect

Hybrid should explain something real, not rescue indecision.

## What to borrow
- caution in boundary cases
- layered classification
- secondary posture/archetype logic
- strongest lean plus bounded secondary force when both materially matter

## What not to copy blindly
- lazy “hybrid” labeling
- indefinite ambiguity
- skipping decision rules

## Formation guidance
Use this only when:
- the product truly carries two structural forces
- both matter in formation choices
- forcing one answer would remove important design constraints

## Runtime explanation rule
When using a hybrid-sensitive reading in answers:
- say which force currently leads
- say what the bounded secondary force still explains
- say what additional evidence would break the tie more clearly

Do not use hybrid language as a softer way to avoid judgment.

---

# 7. Cross-Archetype Decision Reminders

## Core rule
Start from:
1. root constraints
2. posture
3. archetype
4. confidence + evidence weight

Do not start from:
- visual style
- brand reputation
- component count
- design-system popularity

## Tie-breakers to keep using
- repeated job beats visual style
- structural evidence beats slogans
- cost of error beats aesthetic intent
- posture beats component count
- product reality beats famous-system maturity

## Anti-sameness reminder
Famous systems are useful because they expose tradeoffs clearly.
They are not universal targets.

When a developer wants a famous system because it feels mature or premium:
- extract the shaping logic
- keep the warning boundary explicit
- avoid turning the answer into prestige-first borrowing

## Practical formation reminder
The point of these archetypes is not to label systems elegantly.
The point is to help decide:
- what principles should lead
- which foundations must stabilize first
- which patterns matter most
- what should not be overbuilt too early
- how to guide developers toward the best fit rather than a one-size-fits-all reference choice

---

# 8. Recommended Use in the Next Cycle

Use this file together with:
- `01-runtime-framework.md`

Recommended sequence:
1. use the Framework Pack to classify
2. use this Lessons Pack to turn classification into decisions and reusable lessons
3. if maintainer-only research confidence context is needed, consult the contributor dataset roadmap in the source repo
