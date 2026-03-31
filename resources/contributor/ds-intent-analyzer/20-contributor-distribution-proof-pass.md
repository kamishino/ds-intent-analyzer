# Distribution Proof Pass v1

## Purpose

This protocol proves that the distributable `ds-intent-analyzer` package is lean and behaves correctly across the downstream install channels the repo claims to support.

Use it when a maintainer wants to:
- validate the packed package surface
- prove local-path install still works after package-shape changes
- prove git-source install from a committed snapshot works downstream
- prove packed-tarball install works downstream
- confirm the installed runtime is the surface actually being used

This is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Default proof channels

Use these three channels unless a slice clearly needs a different distribution surface:

1. Local path install
   - `npm install --save-dev <path-to-ds-intent-analyzer-repo>`
2. Local git-source install
   - `npm install --save-dev git+file:///absolute/path/to/temp-git-snapshot`
3. Packed tarball install
   - `npm pack --pack-destination <temp-pack-dir>`
   - `npm install --save-dev <temp-pack-dir>/ds-intent-analyzer-<version>.tgz`

All three should then use:
- `npx ds-intent-analyzer install`

For each clean temp client repo, verify:
- `.agents/skills/ds-intent-analyzer/` exists
- no unexpected extra installed skills appear under `.agents/skills/`
- the installed runtime is the one Codex actually reads

Do not use the source repo as the runtime target for this pass.

---

## Default scenario mapping

Reuse the prompts from `19-contributor-client-repo-dogfood-pass.md`.

Default mapping:
- local path channel -> `CD-01`
- git-source channel -> `CD-02`
- packed tarball channel -> `CD-02` plus `CD-02 + repo-audit follow-up`

This keeps the proof compact while still covering:
- builder-facing formation usefulness
- audit-first mixed-reference behavior
- bounded `Audit handoff`

---

## Packed surface sanity

Before running the temp repos, validate the packed artifact directly:
- run `npm pack --json --dry-run`
- confirm the packed artifact includes only:
  - `README.md`
  - `LICENSE`
  - `package.json`
  - `bin/`
  - `scripts/install-skill.mjs`
  - `scripts/sync-skill.mjs`
  - `resources/skills/ds-intent-analyzer/`
- confirm the packed artifact excludes:
  - `resources/contributor/...`
  - `.local/...`
  - `AGENTS.md`
  - `scripts/validate-skill.mjs`
  - any other maintainer-only repo files

---

## Readout shape

Use this compact shape for each install channel:

```text
- Install channel:
- Runtime target:
- Package surface sanity:
- Install sanity:
- Observed primary mode:
- Observed confidence line:
- Observed handoff behavior:
- Strongest pass signal:
- Strongest miss:
- Outcome: pass | partial pass | regression
```

Install sanity should state:
- install succeeded
- installed runtime path existed
- no unexpected extra installed skills appeared
- JSON traces or equivalent logs showed the installed runtime path being read

---

## Acceptance rule

Treat the distribution proof as healthy only if:
- `npm pack --dry-run` shows a lean packed artifact
- local path, git-source, and tarball installs all succeed
- installed runtime shape stays clean in all temp repos
- `CD-01` still feels like practical builder guidance
- `CD-02` stays audit-first and donor-bounded
- the tarball follow-up emits bounded `Audit handoff`
- no source-repo-local citations or maintainer-context leakage appear

If only isolated misses appear:
- log them
- keep the slice validation-only

If a repeated miss appears across channels:
- log it
- open a focused runtime-hardening or packaging plan afterward instead of patching ad hoc

---

## Final rule

This protocol exists to prove distribution readiness, not to widen the runtime product.
The goal is a lean package and repeatable downstream proof, not more capability growth.
