# DS Reference Cases v1

## Purpose

These cases test:
- Comparative Reference Read
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

### Must-not-do failures
- making the answer sound final when the archetype is still ambiguous
- reducing the comparison to branding or component count
- ignoring the mixed workflow reality in the prompt

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
