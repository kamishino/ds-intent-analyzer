# ds-intent-analyzer

This package is a Codex-ready skill scaffold for intent-first design-system analysis and UI audit work.

## Canonical naming
- Machine name: `ds-intent-analyzer`
- Folder: `ds-intent-analyzer/`
- Display name: `Design System Intent Analyzer`

## Contents
- `SKILL.md` — skill metadata + operating instructions
- `agents/openai.yaml` — optional Codex metadata
- `references/` — production-ready runtime documents the skill can read selectively
- `assets/` — reserved for templates or future examples

## Recommended install path

Place this folder under a repository path like:

`.agents/skills/ds-intent-analyzer/`

Then ask Codex to use the skill explicitly, or let it invoke the skill implicitly when the task matches the description.

## Implementation note

The skill is intentionally instruction-first.
It does not require scripts for v1.

## Source-repo note

In the source repo, maintainer-only docs live outside the shipped skill tree under:

`resources/contributor/ds-intent-analyzer/`

`install` and `sync` only ship the production-ready skill payload under `resources/skills/ds-intent-analyzer/`.
