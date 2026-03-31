# ds-intent-analyzer

`ds-intent-analyzer` is a Codex/GPT-first skill package for intent-first design-system analysis, UI/DS audit, foundation recommendation, and comparative reference reading.

The canonical skill source lives in `resources/skills/ds-intent-analyzer/`. Everything under `.agents/` is an installed runtime copy for local use, not the source of truth.
This repo is dogfood for the package, but the skill design bar stays client-repo-first.
The product is optimized for Codex/GPT runtime behavior first; other agents are secondary compatibility targets.
The skill is meant to behave like a lightweight decision tool, not a heavy framework or hidden system.

## Client Repo Install

Install dependencies and validate the repo structure:

```bash
npm install
npm run validate
```

Recommended downstream flow from inside a client repo:

1. Add the package from a local path or git source.

Local path example:

```bash
npm install --save-dev ../ds-intent-analyzer
```

Git source example:

```bash
npm install --save-dev git+ssh://git@github.com/your-org/ds-intent-analyzer.git
```

2. From the client repo, install the skill into the current repo:

```bash
npx ds-intent-analyzer install
```

This installs only:
- `.agents/skills/ds-intent-analyzer/`

It does **not** create `.local/` by default.

3. If the client repo also wants the local dogfood scaffold, opt in explicitly:

```bash
npx ds-intent-analyzer install --with-local-scaffold
```

That creates:
- `.local/project.md`
- `.local/plans/`
- `.local/plans/done/`

only when they are missing.

4. Refresh an installed copy later from the same client repo:

```bash
npx ds-intent-analyzer sync
```

The distributed package is intentionally lean.
It ships only the runtime/install surface needed downstream:
- `bin/`
- install/sync scripts
- `resources/skills/ds-intent-analyzer/`
- root package docs and license

It does **not** ship maintainer-only contributor docs, `.local/`, or `AGENTS.md`.

## Maintainer / Cross-Repo Install

Maintainers can still install into another repo from this package repo:

```bash
node ./bin/ds-intent-analyzer.mjs install --project ../target-project
```

Optional local scaffold for that target repo:

```bash
node ./bin/ds-intent-analyzer.mjs install --project ../target-project --with-local-scaffold
```

Sync an installed copy from canonical source:

```bash
node ./bin/ds-intent-analyzer.mjs sync --project ../target-project
```

Or refresh this repo's own dogfood runtime copy:

```bash
npm run sync:local
```

`install` is conservative and preserves an existing installed copy.
`sync` is the explicit exact-mirror path and refreshes only the installed skill copy from `resources/skills/ds-intent-analyzer/`, removing stale files in the derived runtime directory.
No automatic postinstall or hidden bootstrap is performed.

## Repo Layout

Downstream package surface:
- `resources/skills/ds-intent-analyzer/`
  - canonical shipped skill source
- `bin/`
  - thin CLI entrypoint
- `scripts/install-skill.mjs`
  - installer helper
- `scripts/sync-skill.mjs`
  - sync helper

Repo-only maintainer context:
- `AGENTS.md`
  - repo operation rules
- `.local/project.md`
  - durable project memory
- `.local/plans/`
  - task execution state
- `resources/contributor/ds-intent-analyzer/`
  - contributor-side doctrine, validation, and research docs

Shipped runtime guidance lives in:
- `resources/skills/ds-intent-analyzer/SKILL.md`
- `resources/skills/ds-intent-analyzer/references/`

Optional shipped runtime resources such as `assets/` or `scripts/` should appear only when the skill carries real output files or runtime-local helpers. They are not part of the default shipped shape.

Maintainer-only organization and evaluation docs live under:
- `resources/contributor/ds-intent-analyzer/`

## Maintainer Commands

```bash
npm run validate
npm run validate:structure
npm run install:local -- --project ../target-project
npm run install:local -- --with-local-scaffold
npm run sync:local
npm pack --dry-run
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
