# ds-intent-analyzer

`ds-intent-analyzer` is a Codex/GPT-first skill package for intent-first design-system analysis, UI/DS audit, foundation recommendation, and comparative reference reading.

The canonical skill source lives in `resources/skills/ds-intent-analyzer/`. Everything under `.agents/` is an installed runtime copy for local use, not the source of truth.
This repo is dogfood for the package, but the skill design bar stays client-repo-first.
The product is optimized for Codex/GPT runtime behavior first; other agents are secondary compatibility targets.
The skill is meant to behave like a lightweight decision tool, not a heavy framework or hidden system.

## Local Install

Install dependencies and validate the repo structure:

```bash
npm install
npm run validate
```

Install the skill into a target project:

```bash
node ./bin/ds-intent-analyzer.mjs install --project ../target-project
```

Or use the package script, which defaults to the current directory unless you pass `--project`:

```bash
npm run install:local -- --project ../target-project
```

The installer copies the canonical skill source into `.agents/skills/ds-intent-analyzer/` inside the target project and bootstraps `.local/project.md`, `.local/plans/`, and `.local/plans/done/` only when they are missing.

Sync an installed copy from canonical source:

```bash
node ./bin/ds-intent-analyzer.mjs sync --project ../target-project
```

Or refresh this repo's own dogfood runtime copy:

```bash
npm run sync:local
```

`install` is conservative and preserves an existing installed copy. `sync` is the explicit exact-mirror path and refreshes the installed copy from `resources/skills/ds-intent-analyzer/`, removing stale files in the derived runtime directory.

## Repo Layout

- `resources/skills/ds-intent-analyzer/`
  - canonical skill source
- `bin/`
  - thin CLI entrypoint
- `scripts/`
  - installer and validator helpers
- `AGENTS.md`
  - repo operation rules
- `.local/project.md`
  - durable project memory
- `.local/plans/`
  - task execution state

## Maintainer Commands

```bash
npm run validate
npm run validate:structure
npm run install:local -- --project ../target-project
npm run sync:local
```

## Notes

- The repo follows four explicit product defaults:
  - KISS
  - lightweight-first
  - Codex/GPT preferential
  - transparent behavior
- Memory capture, confidence, evidence limits, and escalation should remain explicit when they matter.
- The root package is private and does not include publish automation, GitHub Release automation, semantic-release, or Changesets.
- Installed runtime copies are derived artifacts and should not be edited as source-of-truth content.
