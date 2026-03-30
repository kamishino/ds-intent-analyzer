# Developer Toolkit Platform Boundary Study v1

## Purpose

This document is a contributor-side decision aid for the current `Developer Toolkit / Platform` bucket.

Use it to answer:
- whether the current parent bucket should stay unified for now
- which sub-bucket lenses are useful for contributor-side reasoning
- which references are true anchors versus bounded hybrids
- what concrete rules should prevent false-positive platform classification

This is not a shipped runtime contract.
It is a contributor-side study meant to reduce premature runtime growth.

---

## Current question

The broadest unresolved taxonomy problem is whether `Developer Toolkit / Platform` is too wide.

The current runtime already has enough contrast to study this contributor-side:
- true platform anchors
- lightweight toolkit references
- bounded hybrid systems with workflow gravity

The immediate goal is not to split the runtime archetype yet.
The immediate goal is to make future split or no-split decisions more defensible.

---

## Working sub-bucket lenses

### 1. UI Toolkit / Library

Use this lens when:
- reusable primitives or interaction building blocks are the main value
- implementation speed and local assembly matter more than shared product posture
- the system accelerates UI construction more than it defines product logic

Strong anchors:
- `Chakra UI`
- `Headless UI`
- `shadcn/ui`

Main caution:
- do not let toolkit speed pretend to solve unclear repeated jobs, unstable patterns, or missing foundation decisions

### 2. Product Platform System

Use this lens when:
- reuse across teams or products is a primary shaping force
- documentation, adoption support, and design-to-code alignment materially shape the system
- theming, composability, and distribution logic lead before local workflow specifics

Strong anchors:
- `GitHub Primer`
- `Atlassian Design System`
- `Elastic UI Framework`

Main caution:
- real adoption pressure and product-platform reality must be present
- “scalable and reusable” language alone is not enough

### 3. Framework-First Implementation System

Use this lens as a contributor-side test bucket when:
- the implementation model and framework support strongly shape adoption
- the system feels broader than a lightweight toolkit
- but true platform-scale distribution pressure is not yet clearly the primary force

Current status:
- useful as a contributor-side lens
- not yet stable enough to become a shipped runtime sub-archetype

Strongest current candidate:
- `Ant Design`

Partial or bounded candidates:
- `Clarity Design System`

Main caution:
- this lens is easy to confuse with workflow-heavy enterprise systems that simply have better implementation support

---

## Current reference map

### Likely true anchors inside the platform parent

#### UI Toolkit / Library
- `Chakra UI`
  - platform-style reuse and approachable composability lead
- `Headless UI`
  - interaction primitives and accessibility-aware composition lead
- `shadcn/ui`
  - implementation speed and local ownership lead

#### Product Platform System
- `GitHub Primer`
  - reusable primitives, semantic consistency, and design-to-code alignment clearly lead
- `Atlassian Design System`
  - platform-scale consistency and contribution thinking clearly lead, even with workflow gravity
- `Elastic UI Framework`
  - reusable implementation breadth, theming, and cross-surface support lead strongly enough to stay in the parent bucket

### Bounded hybrids that should not become false-positive platform anchors

- `Carbon`
  - strongest lean still sits in the platform parent, but enterprise-workflow gravity is material
- `PatternFly`
  - should stay outside the platform core; workflow reality is stronger than platform prestige
- `Clarity Design System`
  - workflow clarity and inclusive enterprise defaults lead; implementation support is secondary
- `Ant Design`
  - implementation breadth is real, but repeated workflow coverage still leads more than product-platform distribution pressure
- `Visa Product Design System`
  - trust-heavy workflow support with bounded implementation depth; not a platform anchor

### Practical reading

The current parent bucket does contain a real center.
But it also attracts systems that are better explained as:
- workflow-first with bounded implementation support
- trust-heavy enterprise systems with code support
- fast toolkit choices mistaken for product-system direction

That is why the contributor-side split lenses are useful even without a shipped taxonomy split.

---

## False-positive rules

Do not call something `Developer Toolkit / Platform` mainly because:
- it has strong docs
- it ships code libraries
- it supports multiple frameworks
- it has tokens or theming
- it feels mature
- it is popular with engineers

Prefer the platform parent only when these forces are real:
- reuse pressure across multiple teams or products
- adoption and contribution logic materially shape the system
- design-to-code alignment is central, not just present
- implementation breadth outranks the product's dominant repeated job in the actual decision

Let workflow or trust-heavy systems stay outside the platform core when:
- repeated operational jobs still shape the day-to-day product more than reuse infrastructure
- dense state handling matters more than distribution logic
- platform maturity is being used as a shortcut for “this feels complete”

Let toolkit/library readings lead when:
- the team is really choosing a construction approach
- local assembly speed is the value
- the product system itself is still unstable

---

## Current contributor verdict

- Keep `Developer Toolkit / Platform` as a shipped parent archetype for now.
- Use the three sub-bucket lenses contributor-side to sharpen future decisions.
- Treat `UI Toolkit / Library` and `Product Platform System` as the strongest current contributor-side splits.
- Treat `Framework-First Implementation System` as a useful caution lens, not a runtime-ready bucket.
- Do not expand shipped runtime from this study alone.

Current true-anchor reading:
- `UI Toolkit / Library`: stable enough contributor-side
- `Product Platform System`: stable enough contributor-side
- `Framework-First Implementation System`: not yet stable enough

Current runtime consequence:
- no immediate shipped runtime patch is justified if current forward-tests already keep product-fit ahead of platform prestige

---

## What would justify a later runtime patch

A later runtime slice would be justified only if forward-tests show repeated failure in one of these patterns:
- toolkits are repeatedly treated as product-system direction
- workflow-heavy hybrids are repeatedly flattened into platform-first answers
- implementation breadth repeatedly outranks dominant repeated-job evidence

If those failures do not repeat, keep this refinement contributor-side and avoid another runtime expansion slice.
