# Audit Artifacts v1

## Purpose

This document defines the two lightweight audit artifacts that can support `ds-intent-analyzer` in downstream repos.

These artifacts exist to keep audit workflows explicit and reusable without turning the skill into a hidden memory or orchestration system.

Use this file when the workflow needs:
- a reusable repo-audit handoff
- a reusable current-state evidence packet
- a place to preserve structured design-context without promoting it into durable memory
- a clear distinction between fresh evidence, current-state evidence packets, and durable project memory

This file does not replace:
- `10-runtime-project-memory-pack.md` for durable truths and decisions
- `06-runtime-output-templates.md` for user-facing answer shape
- `02-runtime-skill-contract.md` for routing, precedence, and write gates

---

## Supported audit artifacts

### 1. Audit packet

Preferred downstream path:
- `docs/design-system/audit-packet.md`

Purpose:
- persist a bounded repo-audit handoff that another agent or human can inspect next
- keep the reusable repo-follow-through packet aligned with the inline `Audit handoff` using the same locked field order

This is:
- task-local
- action-oriented
- bounded to one next audit slice

This is not:
- durable project memory
- a build brief
- a general roadmap

Preferred section shape:
- `Lead next agent`
- `Audit goal`
- `Grounded product/repo truths`
- `Borrowing targets to inspect`
- `Do not copy blindly`
- `Do not expand yet`
- `Recommended first audit slice`
- `Stop condition`
- `Inputs still needed`

### 2. Audit evidence

Preferred downstream path:
- `docs/design-system/audit-evidence.md`

Purpose:
- preserve a compact current-state evidence packet for later audit work

This is:
- current-state context
- human-readable
- lightweight
- replaceable by fresher evidence

This is not:
- durable canon
- an automatic memory layer
- a research database

Preferred section shape:
- `Product note`
- `Artifact inventory`
- `Design-context summaries`
- `Surface summaries`
- `Known workflow pressures`
- `Known trust/risk pressures`
- `Known drift and hotspots`
- `Open questions`
- `Source pointers`

`Artifact inventory` may include:
- screenshots
- URLs
- repo surface summaries
- frame or node links
- Dev Mode or MCP-generated summaries
- variable or token summaries
- annotation or callout summaries
- component or code-mapping notes

`Design-context summaries` should stay connector-agnostic even when Figma or MCP is the source example.
Use it to capture:
- relevant frames or nodes
- component and variant cues
- variable or token cues
- layout or spacing constraints
- annotations or handoff notes
- code-mapping clues when available

---

## Relationship to project memory

Use the three downstream artifacts for different jobs:

- `audit-evidence.md`
  - current-state observations, design-context summaries, and evidence packet
- `project-memory.md`
  - durable truths, principles, canon, and stable decisions
- `audit-packet.md`
  - next-step audit handoff for repo or app follow-through

Do not silently merge these roles.

If a current workflow produces both reusable current-state evidence and durable decisions:
- store the current-state packet in `audit-evidence.md`
- store the durable truths in `project-memory.md`
- store the next-step handoff in `audit-packet.md` only if another audit step is actually being handed off

---

## Retrieval order

Use this order:
1. fresh screenshots, URLs, repo surfaces, prompt-level design-context artifacts, or current prompt artifacts
2. `docs/design-system/audit-evidence.md`
3. `docs/design-system/project-memory.md`
4. generic shipped references

Why:
- fresh evidence should stay strongest
- `audit-evidence.md` is still current-state context, not durable truth, even when it includes design-context summaries
- `project-memory.md` should preserve continuity without overriding newer evidence

Do not retrieve `audit-packet.md` by default.
Use it only when:
- the user explicitly points to it
- the workflow is explicitly resuming a prior audit packet
- the current thread just created it and is immediately continuing from it

---

## Write rules

### Audit packet write gate

Offer create/update only when all of these are true:
- the user clearly wants repo or app follow-through next
- the answer can name one bounded first audit slice
- the answer can name a real stop condition and a do-not-expand boundary
- another agent or person actually needs the packet
- the user explicitly approves creating or updating the file

Do not write it silently.

### Audit evidence write gate

Offer create/update only when all of these are true:
- the workflow has concrete current-state evidence worth preserving
- the workflow would benefit from preserving structured design-context such as frame, node, variable, annotation, or component-mapping summaries
- the evidence is likely to be reused in the next audit step
- the result is not merely a thin page-level read
- the user explicitly approves creating or updating the file

Do not write it silently.
Do not promote it into durable project truth.

---

## Final rule

These artifacts exist to make audits easier to continue across sessions and agents.

They should make the workflow more explicit and reusable, not more magical or heavier.
