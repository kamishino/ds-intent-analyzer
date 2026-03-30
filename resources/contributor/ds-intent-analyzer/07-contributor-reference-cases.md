# DS Reference Cases v1

## Purpose

These cases test:
- Comparative Reference Read
- reference-backed audits with bounded confidence
- careful borrowing behavior
- hybrid-sensitive reference handling
- unresolved or niche reference handling

They are designed to catch overconfident comparison behavior and famous-system overfitting.

---

## RF-01 — Merchant Operations Comparison

### Prompt bundle

```text
We are shaping a merchant operations platform with heavy status handling, account review queues, and action-heavy tables.
Should we borrow more carefully from Shopify Polaris or Salesforce Lightning?
We do not want a generic enterprise admin feel.
```

### Input type and evidence strength
- Input type: product brief + named references
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints tied to the comparison result

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- compares the references through merchant/operator reality instead of aesthetics
- identifies what to borrow carefully and what not to copy blindly
- avoids flattening both systems into “dashboard” references
- keeps the answer tied to the user’s product constraints

### Must-not-do failures
- choosing only by visual tone
- recommending a blind copy of Polaris or Lightning
- ignoring the “not generic enterprise admin” constraint

---

## RF-02 — Hybrid-Sensitive Platform Comparison

### Prompt bundle

```text
We are building an internal platform that mixes docs, administration, analytics, and developer workflows.
Which reference logic is closer for us: Carbon or PatternFly?
We need a careful read because the product is not purely a developer toolkit and not purely an enterprise admin suite either.
```

### Input type and evidence strength
- Input type: product brief + hybrid-sensitive comparison ask
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- intent-analysis clarification where confidence must stay limited

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explicitly treats the comparison as hybrid-sensitive
- keeps confidence scoped rather than forcing a clean label
- explains what parts of each reference are useful
- names what additional evidence would increase confidence
- if the answer suggests future memory at all, keeps the unresolved comparison in open-question or provisional language rather than settled truth

### Must-not-do failures
- making the answer sound final when the archetype is still ambiguous
- reducing the comparison to branding or component count
- ignoring the mixed workflow reality in the prompt
- treating the comparison as ready for durable settled project memory

---

## RF-03 — Unknown Niche Reference

### Prompt bundle

```text
We want our new compliance operations UI to feel like BankFlow OS but with the clarity of USWDS.
Can you tell us what to borrow?
```

### Input type and evidence strength
- Input type: named references with one unresolved reference
- Evidence strength: low to medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- intent-analysis clarification to unpack what the user means by the niche reference

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- says the niche reference is unresolved or weakly grounded
- uses USWDS only as a carefully bounded comparison point
- analyzes what the user is likely attracted to in the unknown reference
- asks for the smallest useful extra artifact or clarification

### Must-not-do failures
- pretending knowledge of the unknown system
- sounding equally confident about both references
- converting the whole answer into USWDS cloning

---

## RF-04 — Borrow Carefully From a Famous System

### Prompt bundle

```text
Our B2B workflow tool is growing quickly and teams keep asking to make it feel more like Primer.
Should we move in that direction, and what should we avoid copying?
```

### Input type and evidence strength
- Input type: product prompt + one famous reference
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints that stay subordinate to the borrowing analysis

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- distinguishes what is reusable from what is product-specific to Primer
- avoids equating implementation maturity with product fit
- keeps the answer grounded in B2B workflow needs
- includes a caution against overfitting to a famous system

### Must-not-do failures
- treating Primer as the default “good system”
- recommending broad copying without fit analysis
- ignoring workflow density and product posture

---

## RF-05 — UI Library Ask for a Workflow-Heavy Product

### Prompt bundle

```text
We are building a workflow-heavy operations product with tables, review queues, and status-heavy actions.
The team keeps asking which UI library we should standardize on.
Should we choose a library first, or should we stabilize something lighter before that?
```

### Input type and evidence strength
- Input type: product brief + implementation-framed ask
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation guidance only if it stays subordinate to product-fit reasoning

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats the ask as a product-fit and borrowing question, not a popularity ranking
- explains whether the real decision is library choice, foundation stabilization, or pattern clarification
- if the evidence is strong enough, offers 2-3 matching references or UI-kit directions with fit and cautions
- names what to borrow carefully if a reference is mentioned or implied
- keeps the answer practical for developers rather than abstractly anti-library

### Must-not-do failures
- picking a library by popularity or component count alone
- giving one prestige-based winner by default
- treating implementation maturity as proof of product fit
- turning the answer into a design-system lecture with no decision guidance

---

## RF-06 — Carbon Feels Mature, But Is It Right?

### Prompt bundle

```text
The team wants Carbon because it feels mature and complete.
Our product is an internal workflow tool, but we are still early and our patterns are not stable yet.
Is Carbon actually the right direction for us?
```

### Input type and evidence strength
- Input type: product prompt + famous-system ask
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints tied directly to why Carbon may or may not fit

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- distinguishes Carbon’s maturity from the user’s actual product readiness
- explains what Carbon is useful as a reference for
- warns against copying platform weight before patterns are stable
- gives a practical next move for deciding lighter vs heavier system direction

### Must-not-do failures
- treating maturity as the main deciding factor
- recommending Carbon as a default “safe” answer
- ignoring the product’s early-stage instability

---

## RF-07 — Tokens Exist, But the UI Still Feels Wrong

### Prompt bundle

```text
We already have tokens and shared styles, but the UI still feels wrong and generic.
How should we think about this before we add more components or switch libraries?
```

### Input type and evidence strength
- Input type: implementation-framed prompt
- Evidence strength: low to medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- audit framing where the answer needs to distinguish foundations from pattern or posture problems

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- explains that tokens alone do not prove product-fit or pattern clarity
- steers the answer toward foundations, pattern pressure, posture, or anti-sameness diagnosis
- avoids immediately prescribing more token work or a library switch
- names one first inspection target clearly instead of a paired category
- explains why that target outranks nearby candidates
- gives a smallest useful next move

### Must-not-do failures
- recommending more tokens as the default fix
- acting as if a library switch is automatically the right answer
- reducing the problem to styling polish alone
- stopping at broad phrasing such as `hierarchy or state clarity` when one first target is already more plausible

---

## RF-08 — Token Work Should Wait While Hierarchy Clarity Comes First

### Prompt bundle

```text
We already have semantic tokens, a component library, and shared styles.
The product still feels hard to scan and the team keeps asking for more token cleanup.
The current screens mostly suffer from weak primary-action emphasis, busy data density, and low distinction between routine and risky states.
What should we do first?
```

### Input type and evidence strength
- Input type: implementation-framed product prompt
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- audit framing where the answer needs to choose hierarchy or state clarity before more token work

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- says token work should not lead if the real issue is hierarchy or state emphasis
- names the first inspection target clearly
- explains why that lever is higher leverage than more token cleanup
- avoids giving multiple equal first moves

### Must-not-do failures
- recommending token cleanup as the automatic first answer
- giving a flat list of improvements with no prioritization
- acting as if more shared styles will solve weak emphasis by themselves

---

## RF-09 — Tokens Exist, but State Contrast Should Lead First

### Prompt bundle

```text
We already have semantic tokens, a component library, and consistent layout patterns.
The product still feels wrong because risky and routine states look too similar, and review decisions do not stand out enough.
The team keeps debating whether this is a hierarchy problem or a token cleanup problem.
What should we do first?
```

### Input type and evidence strength
- Input type: implementation-framed product prompt
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- audit framing where the answer needs to choose state contrast before broader hierarchy or token work

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies risky-vs-routine state contrast as the sharpest first lever
- explains why state contrast outranks broader hierarchy cleanup here
- avoids reducing the answer to token cleanup volume
- says what should wait

### Must-not-do failures
- saying `hierarchy or state clarity` without committing
- recommending token cleanup as the first answer
- broadening immediately into component or library change

---

## RF-10 — Carbon vs PatternFly When the Product Is Still Mixed

### Prompt bundle

```text
We are building an internal product that mixes docs, administration, analytics, and review queues.
The team is split between Carbon and PatternFly.
Our product is not purely a platform, but repeated operator tasks and state-heavy actions dominate the day-to-day experience.
Which reference should lead, and what should we borrow carefully from the other?
```

### Input type and evidence strength
- Input type: product brief + hybrid-sensitive named-system comparison
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to the bounded comparison

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- keeps the answer explicitly hybrid-sensitive rather than forcing a fake clean split
- identifies the strongest lean and the bounded secondary force
- explains what to borrow from the non-leading reference without flattening the two systems
- keeps the reasoning tied to repeated operator jobs and system scale

### Must-not-do failures
- picking only by prestige or documentation maturity
- acting as if both systems are interchangeable enterprise references
- sounding final when the prompt still contains a mixed product reality

---

## RF-11 — Ant Design Is Broad, but Should It Lead?

### Prompt bundle

```text
We are building a workflow-heavy product tool and the team keeps asking to standardize on Ant Design because it has everything.
Our patterns are still stabilizing and we do not want the UI to become generic business software by default.
Should Ant lead, or should we borrow from it more carefully?
```

### Input type and evidence strength
- Input type: product brief + one named-system default ask
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation guidance only if it stays subordinate to the borrowing decision

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- explains that Ant Design is a workflow-heavy reference, not a universal default
- distinguishes pattern coverage from proof of product fit
- gives a bounded borrowing recommendation instead of only rejecting or endorsing it
- keeps the answer practical for developers deciding whether to standardize early

### Must-not-do failures
- treating breadth as the deciding factor
- endorsing Ant because it is complete without checking product tone and workflow reality
- turning the answer into anti-library ideology

---

## RF-12 — Porsche Feels Premium, but What Should We Borrow?

### Prompt bundle

```text
Our team wants the product to feel more premium and less generic.
Someone suggested Porsche Design System as a reference.
What should we actually borrow, and what should we avoid copying into an unrelated product?
```

### Input type and evidence strength
- Input type: design-direction ask + one brand-led reference
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- anti-sameness guidance tied directly to controlled expression and tone discipline

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats Porsche as a brand-led cautionary reference rather than a visual target
- explains what is reusable in terms of restraint, tone control, and system discipline
- explicitly warns against transplanting luxury-brand cues into an unrelated product
- keeps the answer grounded in product fit rather than aspiration

### Must-not-do failures
- reducing the answer to “make it look like Porsche”
- ignoring the difference between controlled expression and direct style copying
- treating brand polish as a replacement for product-fit reasoning

---

## RF-16 — URL-Only Design-System Reference Page

### Prompt bundle

```text
Use ds-intent-analyzer to check this design-system reference page:
https://thc.motorway.co.uk/0566ad526/p/652544-the-highway-code

Tell me:
- what this page clearly signals
- what looks useful to borrow carefully
- what you would not overclaim from a single URL
- confidence
```

### Input type and evidence strength
- Input type: URL-only design-system reference page
- Evidence strength: low

### Expected primary mode
- UI / DS Audit

### Allowed secondary behavior
- bounded reference-read hints only if they stay subordinate to the page-level audit

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- keeps the read page-level or surface-level rather than claiming a full-system understanding
- clearly separates visible signals from broader inference
- uses short user-facing confidence wording, not raw `E0-E3` alone
- says what would still need more evidence

### Must-not-do failures
- inferring full governance or full token architecture from one page
- presenting raw `E0-E3` with no plain-language meaning
- sounding system-level certain from a single URL

---

## RF-13 — Clarity or EUI for a Dense Internal Product

### Prompt bundle

```text
We are shaping a dense internal product with admin flows, analytics, and repeated operational review work.
The team is split between Clarity and Elastic UI Framework.
We need practical implementation support, but the day-to-day product reality is still more workflow-heavy than platform-heavy.
Which reference should lead, and what should we borrow carefully from the other?
```

### Input type and evidence strength
- Input type: product brief + named-system comparison
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to the bounded reference comparison

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- distinguishes workflow clarity from platform composability instead of flattening both references into “enterprise libraries”
- chooses the strongest lean and keeps the secondary force bounded
- explains what to borrow from the non-leading reference without drifting into prestige or breadth ranking
- keeps the reasoning tied to dense internal product jobs rather than framework familiarity
- names one sharper tie-break path between workflow fit and platform breadth
- if confidence stays bounded, asks for one tie-break artifact rather than a broad compare-more request

### Must-not-do failures
- choosing only by implementation breadth or docs polish
- treating Clarity and EUI as interchangeable enterprise defaults
- sounding final without acknowledging the workflow-versus-platform boundary in the prompt
- asking for a broad library comparison follow-up when one dominant repeated-job surface would break the tie faster

---

## RF-14 — Gestalt for a Brand-Led Product, but What Actually Transfers?

### Prompt bundle

```text
Our consumer product feels too generic and the team wants to look at Gestalt because it feels polished and cohesive.
We still need reusable code and accessible defaults, but we do not want to copy Pinterest's product personality.
What should we actually borrow, and what should we avoid transplanting?
```

### Input type and evidence strength
- Input type: design-direction ask + one brand-led reference
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- anti-sameness guidance tied to tone control and implementation-backed coherence

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats Gestalt as a brand-led consumer reference with bounded platform support
- explains what is reusable in terms of coherence, restraint, and accessible product guidance
- warns against copying Pinterest-specific discovery tone or consumer surface cues
- keeps the answer grounded in the user's own product personality and reuse needs

### Must-not-do failures
- recommending visual cloning because Gestalt feels polished
- ignoring the difference between reusable implementation support and direct brand transplantation
- treating consumer-product polish as a shortcut around product-fit reasoning

---

## RF-15 — Backpack Feels Friendly, but Is That the Right Borrow?

### Prompt bundle

```text
Our team likes Backpack because it feels friendly, usable, and well-organized.
We are not building a travel product, but we do care about accessibility, localisation, and repeated high-volume user journeys.
What should we borrow carefully from Backpack, and what should we not carry over?
```

### Input type and evidence strength
- Input type: design-direction ask + one brand-led reference
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to accessibility, localisation, and borrowing guidance

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies Backpack as a brand-led consumer system with strong accessibility and localisation value
- explains what transfers beyond travel-specific product logic
- keeps the borrowing guidance focused on clarity, content discipline, and repeated-journey support
- explicitly warns against importing travel-product assumptions or surface friendliness without fit analysis

### Must-not-do failures
- reducing the answer to “Backpack is friendly, so use it”
- ignoring accessibility and localisation as the deeper reusable lessons
- transplanting travel-specific patterns into an unrelated product

---

## RF-17 — Visa for a Trust-Sensitive Operational Product

### Prompt bundle

```text
We are shaping a trust-sensitive operational product with review queues, dense forms, guided tasks, and a lot of user hesitation around making the wrong move.
The team wants to borrow from Visa Product Design System because it feels credible and mature.
Should Visa actually lead for us, and what should we borrow carefully versus avoid copying as generic enterprise polish?
```

### Input type and evidence strength
- Input type: product brief + one hybrid-sensitive named-system ask
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to the bounded borrowing decision

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats Visa as a bounded reference rather than a prestige default
- separates trust-bearing workflow clarity from polished enterprise tone
- explains what to borrow carefully in terms of workflow discipline, accessibility, or governance support
- keeps confidence bounded and avoids claiming Visa is a clean archetype anchor
- keeps the recommendation tied to repeated operational jobs instead of finance-brand maturity

### Must-not-do failures
- recommending Visa mainly because it looks credible or mature
- flattening the answer into generic enterprise polish
- ignoring the product's repeated operational jobs and trust-sensitive decision cost
- acting as if Visa proves the team should become more platform-heavy by default

---

## RF-18 — Product Platform Label, but Workflow Gravity Still Dominates

### Prompt bundle

```text
We are building an internal product with docs, admin controls, analytics, shared navigation, and some cross-team UI pressure.
Leadership keeps calling it a platform, but the dominant repeated work is still reviewing, configuring, and resolving operational issues.
Should we treat the design-system direction as a product-platform system first, or as a workflow-heavy internal product that only borrows platform discipline?
```

### Input type and evidence strength
- Input type: product brief + taxonomy-boundary question
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to the structural-force read

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- identifies the strongest structural force rather than echoing the word `platform`
- keeps repeated operational jobs ahead of label prestige or team ambition
- explains when platform discipline is secondary support rather than the leading direction
- names one tie-break artifact or dominant repeated-job surface if confidence stays bounded

### Must-not-do failures
- treating `platform` language as enough proof by itself
- flattening docs, admin, and analytics into a generic platform answer
- skipping the repeated-job test

---

## RF-19 — Toolkit Speed Temptation vs Product-System Need

### Prompt bundle

```text
The team wants to standardize on shadcn/ui or Chakra UI because they feel fast, composable, and easy to ship with.
Our real product is a support operations tool with queues, risky states, and repeated review work.
Should a toolkit or library actually lead this decision, or is that the wrong layer to stabilize first?
```

### Input type and evidence strength
- Input type: implementation-shaped prompt + toolkit temptation
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation guidance only if it stays subordinate to the layer-choice decision

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- treats toolkits and libraries as implementation accelerants, not automatic product-system direction
- distinguishes toolkit speed from product-fit, pattern stability, and workflow support
- says what should stabilize before standardizing a toolkit too broadly
- keeps the answer practical rather than anti-library by reflex

### Must-not-do failures
- picking the toolkit mainly because it feels fast or composable
- treating the library choice as the whole decision
- ignoring the product's risky operational review reality

---

## RF-20 — Implementation Breadth Is Real, but Does It Lead?

### Prompt bundle

```text
We have real multi-team React delivery pressure, theming needs, and a desire for strong implementation support.
But the current product still lives or dies on dense investigation, admin review, and repeated operator decisions.
The team keeps comparing Elastic UI Framework and GitHub Primer because they look like strong platform references.
Should a product-platform reference actually lead here, or should workflow gravity still outrank that implementation breadth?
```

### Input type and evidence strength
- Input type: product brief + named platform-reference comparison
- Evidence strength: medium

### Expected primary mode
- Comparative Reference Read

### Allowed secondary behavior
- formation hints only if they stay subordinate to the platform-boundary decision

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- distinguishes implementation breadth from dominant repeated-job gravity
- explains when a platform reference should stay secondary even if reuse pressure is real
- keeps the answer tied to operator workflow fit rather than library maturity
- avoids turning the comparison into a docs-polish or framework-familiarity ranking

### Must-not-do failures
- recommending a product-platform reference mainly because multi-team delivery pressure exists
- ignoring the product's dense review and investigation reality
- acting as if stronger implementation assets automatically outrank workflow support
