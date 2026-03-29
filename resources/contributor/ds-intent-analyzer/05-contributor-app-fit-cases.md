# DS App-Fit Cases v1

## Purpose

These cases test:
- Intent Analysis
- Formation Recommendation

They are optimized for real product-brief and product-direction prompts that Codex could realistically receive.

---

## AF-01 — Adjective-Heavy Internal Tool Brief

### Prompt bundle

```text
We want our next operations dashboard to feel calm, premium, and modern.
It should not feel corporate or clunky.
Please recommend the right direction for the UI system.
```

### Input type and evidence strength
- Input type: natural-language prompt only
- Evidence strength: low

### Expected primary mode
- Intent Analysis

### Allowed secondary behavior
- light formation-recommendation hints only if clearly labeled as tentative

### Expected confidence floor/ceiling
- Floor: E0
- Ceiling: E1

### Must-have answer traits
- translates adjectives into possible product implications rather than direct style conclusions
- asks or names only the smallest missing project-fit constraints
- if questions are needed, keeps them to 1-3 and focuses on user, repeated job, trust/risk, density, or tone boundary
- keeps the next move small and practical
- avoids pretending the foundations are already obvious

### Must-not-do failures
- direct token prescriptions from adjectives alone
- immediate component inventory
- confident archetype assignment with no supporting context
- turning the answer into a visual taste quiz

---

## AF-02 — Dense Trust-Sensitive Workflow

### Prompt bundle

```text
We are redesigning a care coordination workspace used by hospital operations staff.
The product serves schedulers, coordinators, and escalation managers.
They work across patient queues, appointment conflicts, and handoff delays all day.
Mistakes are expensive. The UI needs to feel stable, fast to scan, and not emotionally cold.
We are early and need help reading the right system direction first.
```

### Input type and evidence strength
- Input type: brief-style prompt
- Evidence strength: medium

### Expected primary mode
- Intent Analysis

### Allowed secondary behavior
- posture and foundation hints

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- surfaces trust, error cost, density, and repeated workflow pressure
- identifies likely posture and pattern gravity
- explains why “not emotionally cold” is secondary to operational constraints
- suggests the next clarification or artifact that would increase confidence

### Must-not-do failures
- reducing the answer to healthcare branding
- calling for expressive tokens before reading workflow demands
- ignoring scanability and workflow consequences

---

## AF-03 — Merchant Operations Formation Brief

### Prompt bundle

```text
We need a shared design-system direction for a merchant operations platform used by support, risk review, and storefront management teams.
The current UI is inconsistent across account tables, review queues, and status-heavy workflows.
We want to stabilize foundations first so teams stop inventing their own semantics.
Recommend principle stack, foundation priorities, and token direction.
```

### Input type and evidence strength
- Input type: product brief
- Evidence strength: medium

### Expected primary mode
- Formation Recommendation

### Allowed secondary behavior
- light audit framing if the answer uses current inconsistency as evidence

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- names merchant/operator repeated jobs
- prioritizes foundation directories before components
- gives a principle stack and practical token direction
- warns against overbuilding too early
- offers to capture the stable principle stack and stabilization direction into a project memory pack

### Must-not-do failures
- generic dashboard advice detached from merchant workflows
- starting from components instead of foundations
- pretending a full system taxonomy is needed immediately
- silently treating the result as stored memory without an explicit capture offer

---

## AF-04 — Developer Platform With Shared Scale Pressure

### Prompt bundle

```text
We are building a design-system direction for an internal developer platform used across documentation, admin setup, API access, and usage analytics.
It must work across multiple teams and implementation surfaces, but the product is still changing quickly.
We want recommendations that reduce entropy without creating a giant governance program too early.
Please recommend the right formation direction.
```

### Input type and evidence strength
- Input type: product/platform brief
- Evidence strength: medium

### Expected primary mode
- Formation Recommendation

### Allowed secondary behavior
- comparative hints only if they stay subordinate to the product reality

### Expected confidence floor/ceiling
- Floor: E1
- Ceiling: E2

### Must-have answer traits
- balances shared scale with anti-overbuild caution
- identifies likely documentation/platform pattern pressure
- recommends foundation and token direction in a staged way
- keeps governance advice proportional to current maturity

### Must-not-do failures
- turning “platform” into an automatic copy of famous developer systems
- recommending heavy governance machinery by default
- skipping the relationship between repeated jobs and foundation pressure
