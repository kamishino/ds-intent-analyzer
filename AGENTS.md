# Repo Contract

This repo packages one Codex/GPT-first skill: `ds-intent-analyzer`.
The canonical source of truth lives under `resources/skills/ds-intent-analyzer/`.
Installed runtime copies under `.agents/` are derived artifacts for local use and are not source-of-truth-owned.
This repo is dogfood for development and validation, but the product bar and default assumptions remain client-repo-first.
The skill is optimized for Codex/GPT runtime behavior first; other agents are secondary compatibility targets.
The repo should behave like a lightweight decision tool, not a hidden framework or invisible system.

## Ownership

- `AGENTS.md`
  - repo rules and operating behavior
- `.local/project.md`
  - human-facing project memory
- `.local/plans/*.md`
  - task execution state
- `resources/skills/ds-intent-analyzer/`
  - canonical skill source, packaging metadata, and references
- `bin/`
  - thin published CLI entrypoint
- `scripts/`
  - small deterministic installer and validator helpers

Read `AGENTS.md` first, then `.local/project.md`, then the active plan.
For product work, read `resources/skills/ds-intent-analyzer/SKILL.md` next and only the reference files needed for the current task.

## Release Policy

- SemVer Workflow: enabled
- Version Files: package.json, package-lock.json
- Pre-1.0 Policy: strict
- Release History: separate-release-commit-and-tag

This repo uses disciplined internal versioning while remaining a private package.

## Command Boundary

- From inside a client repo that has this package installed from local path or git source, install the skill with `npx ds-intent-analyzer install`
- From inside a client repo, opt into local dogfood scaffolding with `npx ds-intent-analyzer install --with-local-scaffold`
- From inside a client repo, refresh the installed skill copy with `npx ds-intent-analyzer sync`
- Install the skill into a target repo with `node ./bin/ds-intent-analyzer.mjs install --project <path>`
- Install the skill plus local scaffold into a target repo with `node ./bin/ds-intent-analyzer.mjs install --project <path> --with-local-scaffold`
- Sync the installed skill copy from canonical source with `node ./bin/ds-intent-analyzer.mjs sync --project <path>`
- Run the default local install target with `npm run install:local`
- Run the default local sync target with `npm run sync:local`
- Regenerate the derived runtime index asset with `npm run build:index`
- Validate the standalone package structure with `npm run validate`
- Run the structure validator directly with `node ./scripts/validate-skill.mjs`
- Inspect finish guidance with `node .agents/skills/kamiflow-core/scripts/finish-status.mjs --project .`
- For opted-in Node/npm repos, run version closeout with `node .agents/skills/kamiflow-core/scripts/version-closeout.mjs --project .`

Keep helper entrypoints thin. Prefer the repo-local scripts in `scripts/` over adding heavier tooling or extra orchestration layers.

## Working Rules

- Keep this repo single-product. Do not introduce multi-skill workspace structure or repo-wide orchestration.
- Treat this repo as dogfood for the package, but keep design choices and default workflow optimized for downstream client repos rather than source-repo-specific behavior.
- Preserve the repo doctrine:
  - KISS
  - lightweight-first
  - Codex/GPT preferential
  - transparent behavior
- Keep `resources/skills/ds-intent-analyzer/` as the authoritative skill source. Do not edit installed runtime copies in `.agents/` as if they were canonical.
- Keep the shipped skill tree runtime-only. The default shipped shape is `SKILL.md`, `agents/`, and `references/`; add `assets/` or `scripts/` only when they carry real runtime resources.
- Do not add auxiliary top-level Markdown docs under `resources/skills/ds-intent-analyzer/` beyond `SKILL.md`, and do not keep placeholder-only shipped resource directories.
- Preserve meaningful user-authored files whenever possible. Fill gaps conservatively instead of replacing healthy structure.
- Keep `.local/project.md` as durable project memory, not task history or a generated log.
- Keep `.local/plans/*.md` as execution state for non-trivial slices. Prefer one active plan at a time.
- Keep helper scripts small, deterministic, and source-repo-local. Avoid adding frameworks, dashboards, browser surfaces, or runtime layers in this slice.
- Keep derived runtime helpers explicit and lightweight. `resources/skills/ds-intent-analyzer/assets/runtime-index.json` is generated from shipped source docs and must not be hand-edited.
- Preserve the skill's core behavior:
  - constraints first
  - context before style
  - pattern-first, not component-first
  - foundation-first recommendations
  - confidence matched to evidence
- Keep memory capture, confidence, evidence limits, and escalation explicit when they matter. Do not let the product sound magical or hidden.
- Use staged retrieval when working in the skill sources. Do not load the full reference pack by default when selective reading is enough.
- Keep blind cloning, adjective-only verdicts, and generic component generation out of scope for the core skill behavior.
- Update `.local/project.md` only when durable priorities, guardrails, open questions, or decisions change.
- Prefer small direct edits over wholesale rewrites when tightening repo docs, project memory, or plans.
- When SemVer is enabled, active non-trivial plans must include a `## Release Impact` section with one explicit level: `none`, `patch`, `minor`, or `major`.
- Under SemVer-enabled workflow, `commit please` means the functional commit only.
- Under SemVer-enabled workflow, `release please` means the release-only version closeout step via `version-closeout.mjs`.
- Under SemVer-enabled workflow, `finish please` should choose the correct end-of-slice action via `finish-status.mjs`.
- Release level comes from the highest unresolved `Release Impact` since the latest reachable `vX.Y.Z` tag.
- Strict pre-1.0 policy still requires breaking changes to be called out explicitly in `Release Impact`, even while versions remain below `1.0.0`.

## Local Workflow

- `AGENTS.md` owns repo operation rules
- `.local/project.md` owns human-facing project memory
- `.local/plans/*.md` own task execution state

For non-trivial work:
- create or reuse one active plan in `.local/plans/`
- keep the plan tied to `.local/project.md` through a short `Project Fit` section
- include `## Release Impact` whenever the active plan is covered by the SemVer workflow
- move completed plans under `.local/plans/done/`

Do not silently overwrite curated `.local/project.md` content during setup or install flows.
Use `sync` only for the derived installed skill copy under `.agents/skills/ds-intent-analyzer/`; it is the explicit exact-mirror path and may replace stale files there.
Use `build:index` only to refresh the derived shipped runtime index asset from the canonical shipped source docs.
Default install into a client repo should be skill-only; `.local` bootstrap must stay explicit through `--with-local-scaffold`.

## Out Of Scope

- GitHub Release automation
- npm publish workflows
- semantic-release or Changesets
- dashboards, browser UI, or plan-view surfaces
- multi-product or multi-skill orchestration

## Safety

- Do not run destructive git commands unless explicitly requested.
- Do not rewrite canonical references in `resources/skills/ds-intent-analyzer/references/` when a narrower change to package metadata, repo docs, or local workflow files is enough.
- Do not silently overwrite installed runtime copies or curated local memory during install/bootstrap steps.
- Treat `.agents/skills/kamiflow-core/` as historical local tooling context only. It does not define this repo's standalone package contract.
