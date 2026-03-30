# DS Forward-Test Results v1

## Purpose

This file records contributor-side forward-test runs for the full current `ds-intent-analyzer` scenario pack.

Use it for:
- installed-runtime answer-shape checks
- compact rerun comparison across the full case pack
- forward-test outcomes that should not be mixed into rubric-heavy evaluation cycles

This file is not the recurring evaluation-cycle ledger.
That remains `08-contributor-runtime-evaluation-results.md`.

---

## Batch run header

- Run label: `FT-2026-03-29-full-pack`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Case pack size: `36`
- Run date: `2026-03-29`
- Notes: manual installed-runtime forward-test; compare answer shape, not exact prose; result `34 pass / 2 partial pass / 0 regressions`

Default values:
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Case pack size: `36`

---

## Readout shape

Use this compact shape for every case:

```text
- Runtime target:
- Observed primary mode:
- Observed confidence line:
- Strongest pass signal:
- Strongest miss:
- Outcome: pass | partial pass | regression
```

Compare answer shape, not exact prose.
Do not paste full transcripts here.
Do not add full rubric scoring.

---

## App-Fit

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Strongest pass signal: turns adjectives into project-fit constraints instead of style prescriptions
- Strongest miss: direction stays provisional until stronger evidence exists
- Outcome: `pass`

## AF-02 — Dense Trust-Sensitive Workflow
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: surfaces trust, error cost, and density before tone treatment
- Strongest miss: tone-boundary handling stays secondary and lightly resolved
- Outcome: `pass`

## AF-03 — Merchant Operations Formation Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: gives a foundation-first principle stack and an explicit memory-capture offer
- Strongest miss: token direction can sound slightly more settled than the brief alone proves
- Outcome: `pass`

## AF-04 — Developer Platform With Shared Scale Pressure
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: balances shared scale pressure against anti-overbuild discipline
- Strongest miss: platform-maturity language can still sound slightly heavier than the current stage
- Outcome: `pass`

---

## Audit

## AU-01 — Vague Improve Request With One-Screen Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one screen only`
- Strongest pass signal: stays screen-level and leads with hierarchy, grouping, and density fixes
- Strongest miss: specific visual advice remains limited by summary-only evidence
- Outcome: `pass`

## AU-02 — Brief / Artifact Contradiction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, conflicting brief vs artifact`
- Strongest pass signal: lets visible operating reality outrank calm-brief language
- Strongest miss: could state the contradiction even more sharply
- Outcome: `pass`

## AU-03 — Existing Foundation Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, foundation summary`
- Strongest pass signal: finds semantic-token and stabilization-order weaknesses clearly
- Strongest miss: none noted
- Outcome: `pass`

## AU-04 — Partial Mobile Checkout View
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, partial screen`
- Strongest pass signal: keeps the read checkout-screen-level and fix-first
- Strongest miss: needs a real artifact for more precise visual diagnosis
- Outcome: `pass`

## AU-05 — Bare UI-Language Improve Ask
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E0 - very low, no artifact yet`
- Strongest pass signal: asks for the smallest useful artifact instead of lecturing
- Strongest miss: none noted
- Outcome: `pass`

## AU-06 — Styles Feel Off, Make It Cleaner
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, thin evidence`
- Strongest pass signal: translates cleaner into scanability and grouping rather than minimalism
- Strongest miss: could ask one tighter project-fit question if the user wants more than the first audit pass
- Outcome: `pass`

## AU-07 — Storybook Feels Inconsistent
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, Storybook surface only`
- Strongest pass signal: treats Storybook inconsistency as practical audit evidence
- Strongest miss: can still benefit from one concrete story example before stronger canon advice
- Outcome: `pass`

## AU-08 — This UI Feels Too Generic
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, discomfort signal only`
- Strongest pass signal: explains genericness through flat emphasis and sameness, not novelty chasing
- Strongest miss: none noted
- Outcome: `pass`

## AU-09 — Style Dictionary Works, But the Styles Feel Off
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, system symptom summary`
- Strongest pass signal: separates existing token work from pattern and emphasis weakness
- Strongest miss: could point to one sharper visible lever sooner
- Outcome: `pass`

## AU-10 — Softer Shape Cue in a High-Control Workflow
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: reads softness as a cue to verify against control needs
- Strongest miss: none noted
- Outcome: `pass`

## AU-11 — Cleaner Must Mean Better Scanability, Not Just Less Stuff
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: connects cleaner to scan speed and grouping, not reduction alone
- Strongest miss: none noted
- Outcome: `pass`

## AU-12 — Generic Because Emphasis Is Too Flat
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: commits to emphasis flatness as the visible lever
- Strongest miss: none noted
- Outcome: `pass`

## AU-13 — Visual Calm Conflicts With Trust or Risk Needs
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: explains calm-vs-trust tension through consequences, not taste
- Strongest miss: none noted
- Outcome: `pass`

## AU-14 — Many Possible Fixes, But One Lever Should Lead
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: chooses one leading lever instead of spraying fixes
- Strongest miss: none noted
- Outcome: `pass`

## AU-15 — Generic Because Primary Actions Do Not Lead
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: primary-action emphasis leads clearly
- Strongest miss: none noted
- Outcome: `pass`

## AU-16 — Crowded but Consistent, Grouping Should Lead
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: grouping is prioritized before token or layout churn
- Strongest miss: none noted
- Outcome: `pass`

---

## Reference

## RF-01 — Merchant Operations Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps merchant workflow reality ahead of aesthetics
- Strongest miss: could still name one sharper tie-break artifact
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: hybrid-sensitive reading stays bounded and useful
- Strongest miss: tie-break evidence request is still a bit broad
- Outcome: `pass`

## RF-03 — Unknown Niche Reference
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, unresolved reference`
- Strongest pass signal: does not pretend to know the niche reference
- Strongest miss: none noted
- Outcome: `pass`

## RF-04 — Borrow Carefully From a Famous System
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: separates reusable borrowing from prestige mimicry
- Strongest miss: none noted
- Outcome: `pass`

## RF-05 — UI Library Ask for a Workflow-Heavy Product
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: refuses a single best library and reframes the decision around product fit
- Strongest miss: could name the lightest pre-library stabilization step even more directly
- Outcome: `pass`

## RF-06 — Carbon Feels Mature, But Is It Right?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: separates Carbon maturity from actual product readiness
- Strongest miss: none noted
- Outcome: `pass`

## RF-07 — Tokens Exist, But the UI Still Feels Wrong
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, implementation-framed only`
- Strongest pass signal: recognizes that more tokens or more components will not solve the real issue
- Strongest miss: first inspection target still hedges between hierarchy, state clarity, and pattern emphasis
- Outcome: `partial pass`

## RF-08 — Token Work Should Wait While Hierarchy Clarity Comes First
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps hierarchy clarity ahead of token work
- Strongest miss: none noted
- Outcome: `pass`

## RF-09 — Tokens Exist, but State Contrast Should Lead First
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: state contrast is chosen as the first lever, not generic hierarchy talk
- Strongest miss: none noted
- Outcome: `pass`

## RF-10 — Carbon vs PatternFly When the Product Is Still Mixed
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: mixed-product comparison stays provisional without becoming vague
- Strongest miss: could still tighten the single best tie-break artifact
- Outcome: `pass`

## RF-11 — Ant Design Is Broad, but Should It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: Ant Design is treated as broad utility, not default truth
- Strongest miss: none noted
- Outcome: `pass`

## RF-12 — Porsche Feels Premium, but What Should We Borrow?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: Porsche is used for tone discipline, not visual transplantation
- Strongest miss: none noted
- Outcome: `pass`

## RF-13 — Clarity or EUI for a Dense Internal Product
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps the Clarity and EUI comparison product-fit-first rather than library-first
- Strongest miss: platform-maturity vs workflow-fit tie-break is still broader than it should be
- Outcome: `partial pass`

## RF-14 — Gestalt for a Brand-Led Product, but What Actually Transfers?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: Gestalt is read as brand-led restraint with bounded transfer
- Strongest miss: none noted
- Outcome: `pass`

## RF-15 — Backpack Feels Friendly, but Is That the Right Borrow?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: Backpack friendliness is evaluated through product fit and cautions
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: URL-only read stays page-level with bounded confidence
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted lean validation

### Run header

- Run label: `FT-2026-03-30-lean-skill`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime validation after the lean `SKILL.md` rewrite; result `7 pass / 0 partial pass / 0 regressions`

### Smoke subset

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Observed handoff behavior: not applicable
- Strongest pass signal: keeps the answer discovery-first and translates adjectives into project-fit questions instead of a style quiz
- Strongest miss: none noted
- Outcome: `pass`

## AF-03 — Merchant Operations Formation Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: not applicable
- Strongest pass signal: still gives a foundation-first principle stack and an explicit project-memory capture offer
- Strongest miss: none noted
- Outcome: `pass`

## AU-01 — Vague Improve Request With One-Screen Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E1 - low, one screen only`
- Observed handoff behavior: not applicable
- Strongest pass signal: keeps the read screen-level and fix-first instead of drifting into broad formation work
- Strongest miss: none noted
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Observed handoff behavior: not applicable
- Strongest pass signal: keeps the comparison bounded and explicitly hybrid-sensitive instead of forcing a clean winner
- Strongest miss: none noted
- Outcome: `pass`

### Paired-skill checks

## AF-03 + frontend follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed coordination behavior: explicit single-lead sequencing; analyzer first, `frontend-skill` second
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: structured frontend handoff is usable and bounded, with locked direction plus `Do not invent` guidance
- Strongest pass signal: the slim SKILL still yields an explicit build package instead of loose prose for frontend execution
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 + frontend follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed coordination behavior: analyzer remains lead because the evidence is still too thin for build work
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: handoff is withheld or explicitly blocked rather than inventing a build-ready style direction
- Strongest pass signal: thin-evidence page audit does not collapse into hallucinated frontend guidance
- Strongest miss: none noted
- Outcome: `pass`

### Multi-agent check

## AU-01 + multi-agent follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed coordination behavior: one lead agent plus bounded analysis sidecars only; synthesis, confidence, and recommendation stay with the lead
- Observed confidence line: `Confidence: E1 - low, one screen only`
- Observed handoff behavior: not applicable
- Strongest pass signal: the slim SKILL still supports explicit sidecar limits without drifting into hidden orchestration
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted shipped-tree cleanup validation

### Run header

- Run label: `FT-2026-03-30-runtime-only-tree`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: smoke validation after removing the shipped skill README and enforcing runtime-only top-level docs; result `3 pass / 0 partial pass / 0 regressions`

### Smoke subset

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Observed handoff behavior: not applicable
- Strongest pass signal: discovery-first routing remains intact after the shipped-tree cleanup
- Strongest miss: none noted
- Outcome: `pass`

## AU-01 — Vague Improve Request With One-Screen Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E1 - low, one screen only`
- Observed handoff behavior: not applicable
- Strongest pass signal: one-screen audit still stays bounded and fix-first
- Strongest miss: none noted
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed coordination behavior: none needed
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Observed handoff behavior: not applicable
- Strongest pass signal: hybrid-sensitive comparison behavior remains unchanged by the structural cleanup
- Strongest miss: none noted
- Outcome: `pass`

---

## Final rule

This file exists to make full-pack forward-testing repeatable and comparable.

It should stay:
- compact
- installed-runtime-first
- answer-shape-oriented
- clearly separate from rubric-heavy evaluation cycles

---

## Targeted tool/workbench credibility validation

### Run header

- Run label: `FT-2026-03-30-tool-workbench-claims`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after adding workbench/tool and trust-of-claims heuristics; result `3 pass / 0 partial pass / 0 regressions`

### Targeted subset

## AU-17 — Specialized Workbench with Analytic Claims
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `E2 - medium, artifact summary only`
- Strongest pass signal: reads the product as a real workbench and separates workflow/tool quality from claim credibility on the analytics surface
- Strongest miss: methodology critique stays necessarily bounded because the audit only sees product surfaces, not underlying logic
- Outcome: `pass`

## AU-01 — Vague Improve Request With One-Screen Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `E1 - low, screen-level summary only`
- Strongest pass signal: screen-level audit discipline remains intact after the workbench/tool hardening
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `low-medium overall; medium on structural signals, low on visual or maturity claims`
- Strongest pass signal: still avoids overclaiming full-system maturity from bounded reference evidence
- Strongest miss: confidence wording drifts into a slightly longer split note when the source page is partially opaque, instead of the preferred short inline confidence format
- Outcome: `pass`
