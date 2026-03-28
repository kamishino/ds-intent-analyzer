# Workbook Distillation Bridge v1

## Purpose

This note explains how the Batch A spreadsheet should relate to the lightweight research schemas in this repo.

It exists to keep the research flow simple:
- the workbook stays the main working surface for research
- the schema docs define the smallest stable shape for future agent-friendly distillation

This is a contributor-only bridge.
It does not add runtime loading behavior.

---

## Current working surface

The workbook:
- `design-system-master-classification-sheet-v2-batch-a-pass.xlsx`

is still the main place to:
- compare many systems at once
- score systems across the ten core dimensions
- track provisional archetype boundaries
- review Batch A findings side by side

This is useful for research.
It is not yet the right shape for lightweight Codex runtime use.

---

## Why a second layer is needed

The workbook is rich, but it is not optimized for runtime-oriented reuse.

For future agent use, we need a smaller shape that captures only what the skill actually needs:
- what this system is useful as a reference for
- what posture and archetype it likely leans toward
- how confident we should be
- what to borrow carefully
- what not to copy blindly
- what evidence justifies that read

That is the job of:
- the registry schema
- the evidence packet schema

---

## Relationship between the three layers

### Layer 1 — Workbook
Use for:
- active research
- scoring
- comparing multiple systems
- reviewing unstable taxonomy boundaries

### Layer 2 — Registry entry
Use for:
- stable, compact indexing of a researched system
- agent-friendly lookup
- storing the current best reading of posture, archetype, caution, and reusable lesson

### Layer 3 — Evidence packet
Use for:
- recording why the registry entry is justified
- separating declared, structural, and behavioral signals
- preserving confidence and caution without turning the runtime into a heavy memory system

---

## KISS rule for this bridge

Do not turn this into:
- a parser
- a sync workflow
- a runtime registry engine
- an evidence database
- a schema enforcement program

For now:
- the workbook remains manual
- registry entries remain documentation-first
- evidence packets remain documentation-first

That is enough for the current skill stage.

---

## What a future contributor should do

When a researched system becomes important for runtime use:

1. keep the workbook row updated
2. create or refine a compact registry entry shape
3. create a matching evidence packet only if the justification needs to be preserved more clearly
4. promote only the reusable conclusions into runtime references when they prove valuable for Codex decisions

Do not promote every spreadsheet row into shipped runtime material.

---

## Current recommended examples

Use these Batch A systems as the first contrast set for schema examples:
- `IBM Carbon Design System`
  - hybrid-sensitive platform/workflow case
- `Ant Design`
  - workflow-heavy with platform gravity
- `Porsche Design System`
  - brand-led but strongly systemized

These three examples are enough to prove the schema shape without making the repo heavier.
