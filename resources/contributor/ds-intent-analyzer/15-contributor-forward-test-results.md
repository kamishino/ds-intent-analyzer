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

---

## Targeted Visa lookup validation

### Run header

- Run label: `FT-2026-03-30-visa-lookup`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after adding `Visa Product Design System` to the runtime lookup pack; result `3 pass / 0 partial pass / 0 regressions`

### Targeted subset

## RF-17 — Visa for a Trust-Sensitive Operational Product
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: treats Visa as a bounded workflow-and-trust reference, not a prestige default, and separates real workflow safety from finance polish
- Strongest miss: none noted
- Outcome: `pass`

## RF-11 — Ant Design Is Broad, but Should It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Medium.`
- Strongest pass signal: keeps Ant as a borrow-carefully support layer and reframes standardization around stabilizing product patterns first
- Strongest miss: confidence wording drops the preferred short inline `Confidence:` format even though it stays readable
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: keeps the Carbon vs PatternFly answer tied to repeated jobs and names one fast tie-break surface instead of ranking prestige
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted platform-boundary validation

### Run header

- Run label: `FT-2026-03-30-platform-boundary`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after adding contributor-side platform-boundary probes; result `5 pass / 0 partial pass / 0 regressions`; current runtime already keeps product-fit ahead of platform prestige well enough that no runtime patch is justified from this cycle

### Targeted subset

## RF-18 — Product Platform Label, but Workflow Gravity Still Dominates
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still boundary-sensitive`
- Strongest pass signal: identifies workflow-heavy internal product gravity and demotes the `platform` label to a governance or adoption lens instead of echoing it as the primary archetype
- Strongest miss: none noted
- Outcome: `pass`

## RF-19 — Toolkit Speed Temptation vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `medium`
- Strongest pass signal: treats toolkit choice as an implementation-layer decision and correctly prioritizes risky operational review patterns before library standardization
- Strongest miss: confidence wording is readable but drops the preferred short inline `Confidence:` format
- Outcome: `pass`

## RF-20 — Implementation Breadth Is Real, but Does It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps workflow gravity ahead of product-platform breadth and uses EUI and Primer as bounded secondary references instead of posture-setting defaults
- Strongest miss: none noted
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: still resolves Carbon vs PatternFly through structural force rather than platform prestige or documentation maturity
- Strongest miss: none noted
- Outcome: `pass`

## RF-11 — Ant Design Is Broad, but Should It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `medium`
- Strongest pass signal: continues to frame Ant as a bounded borrowing source and not a product-shaping default
- Strongest miss: confidence wording again drifts from the preferred short inline `Confidence:` format
- Outcome: `pass`

---

## Targeted confidence-line validation

### Run header

- Run label: `FT-2026-03-30-confidence-line-discipline`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after tightening confidence-line contract and template discipline; result `4 pass / 0 partial pass / 0 regressions`; preferred short inline `Confidence:` shape is now stable across the rerun subset

### Targeted subset

## RF-11 — Ant Design Is Broad, but Should It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E0 - very low, brief only`
- Strongest pass signal: restores the preferred short inline confidence shape while keeping Ant as a bounded borrowing source instead of a default lead
- Strongest miss: confidence is slightly conservative relative to the medium-evidence brief shape
- Outcome: `pass`

## RF-19 — Toolkit Speed Temptation vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: confidence stays compact and standardized while the answer still keeps toolkit choice subordinate to product-pattern stabilization
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: URL-only reference read now keeps the preferred inline confidence format without losing bounded overclaim discipline
- Strongest miss: the source page remains JS-heavy, so the audit still leans on indexed public context rather than a full direct page body
- Outcome: `pass`

## AU-17 — Specialized Workbench with Analytic Claims
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, artifact summary only`
- Strongest pass signal: trust-of-claims audit remains practical and workbench-aware while the confidence line stays compact and user-facing
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted product-usefulness validation

### Run header

- Run label: `FT-2026-03-30-product-usefulness`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle using the new app-to-DS fit brief set; result `3 pass / 2 partial pass / 0 regressions`; runtime usefulness is strong, but brief-only medium-evidence cases still show a repeated confidence-floor miss

### Targeted subset

## PF-01 — Internal Ops Brief, Still Early but Not Empty
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Strongest pass signal: quickly translates calm/modern/trustworthy language into attention model, density rules, and review-workbench direction instead of a style quiz
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Strongest pass signal: gives a builder-useful formation direction with a clear stabilization order around state semantics, layout, and risky review patterns
- Strongest miss: confidence is too conservative for a medium-evidence brief and collapses a real formation read into prompt-only wording
- Outcome: `partial pass`

## PF-03 — Toolkit Pressure vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E0 - very low, prompt only`
- Strongest pass signal: reframes toolkit pressure into pattern and state stabilization work, then gives a practical toolkit-selection rule instead of a speed-first answer
- Strongest miss: confidence again understates a medium-evidence product brief by falling back to prompt-only wording
- Outcome: `partial pass`

## PF-04 — Existing Workflow Product Needs a Stabilization Order
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, current-state summary only`
- Strongest pass signal: picks one stabilization order that is immediately usable for a builder and ties trust/scanability problems to route-level workflow consequences
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: paired follow-up produces a bounded handoff with locked direction, `Do not invent` guardrails, and one clear first build target instead of loose prose
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted brief-only confidence-floor validation

### Run header

- Run label: `FT-2026-03-30-brief-only-confidence-floor`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after separating `brief only` from `prompt only`; result `4 pass / 0 partial pass / 0 regressions`; structured product briefs now keep bounded brief-level confidence while early intent briefs and URL-only discipline remain intact

### Targeted subset

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: the answer now keeps a builder-useful formation read and the confidence floor matches the medium-evidence brief instead of collapsing to `prompt only`
- Strongest miss: none noted
- Outcome: `pass`

## PF-03 — Toolkit Pressure vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: the answer now keeps toolkit pressure subordinate to product-pattern stabilization while using the correct brief-bounded confidence floor
- Strongest miss: none noted
- Outcome: `pass`

## PF-01 — Internal Ops Brief, Still Early but Not Empty
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: the answer now keeps the early brief bounded while still translating adjectives into workflow posture, hierarchy, and next design-system questions
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: URL-only evidence remains page-bound and does not get accidentally loosened by the brief-floor patch
- Strongest miss: mode leans comparative/page-read language more explicitly than earlier audit-shaped runs, but confidence and boundedness stay healthy
- Outcome: `partial pass`

---

## Targeted RF-16 oracle and metadata-validation rerun

### Run header

- Run label: `FT-2026-03-30-rf16-oracle-and-openai-yaml`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: targeted installed-runtime mini-cycle after restoring audit-first routing for URL-only single reference-page checks and tightening the contributor oracle; result `3 pass / 0 partial pass / 0 regressions`

### Targeted subset

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: the answer stays page-level and audit-shaped even while surfacing bounded borrowing hints from the reference surface
- Strongest miss: the source page body remains partially opaque, so the read still depends on indexed public context plus the page title rather than a full direct page body
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: the answer keeps Carbon as the leading lean and PatternFly as a bounded secondary donor without flattening the product into generic enterprise admin logic
- Strongest miss: none noted
- Outcome: `pass`

## AU-01 — Vague Improve Request With One-Screen Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: the answer remains fix-first and screen-level, choosing layout and typography weight before cosmetic polish
- Strongest miss: none noted
- Outcome: `pass`

---

## Standing maintainer gate baseline

### Run header

- Run label: `FT-2026-03-30-standing-maintainer-gate`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-30`
- Notes: first clean baseline after promoting product-usefulness into the standing maintainer gate; result `7 pass / 0 partial pass / 0 regressions`; use this block as the default comparison point for routine contributor reruns

### Gate subset

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: translates aesthetic adjectives into workflow, density, and hierarchy constraints quickly instead of turning the answer into a style quiz
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: gives a clear foundation-first formation direction with state semantics and the case-review shell leading the stabilization order
- Strongest miss: none noted
- Outcome: `pass`

## PF-03 — Toolkit Pressure vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: keeps toolkit choice subordinate to product-pattern stabilization and still gives a usable early decision rule if a library choice is forced
- Strongest miss: none noted
- Outcome: `pass`

## PF-04 — Existing Workflow Product Needs a Stabilization Order
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: chooses one highest-leverage operational contract to normalize first rather than spreading the answer across co-equal cleanup tracks
- Strongest miss: confidence qualifier is slightly more generic than the earlier `current-state summary only` wording, but boundedness remains healthy
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: keeps Carbon leading and PatternFly secondary by product-fit logic instead of platform prestige or component breadth
- Strongest miss: the answer briefly cites repo-local reference docs in user-facing prose, which is unnecessary even though the comparison logic stays strong
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: stays page-level, separates visible signals from broader inference, and keeps borrowing logic subordinate to the thin-evidence audit
- Strongest miss: the direct page body remains sparse, so the read still leans partly on catalog/index context
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: emits a bounded `Frontend handoff` with locked direction, clear first-build scope, and explicit `Do not invent` guardrails
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted source-boundary and citation-hygiene validation

### Run header

- Run label: `FT-2026-03-31-source-boundary-citation-hygiene`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: targeted installed-runtime mini-cycle after adding source-boundary and citation-hygiene guards; result `3 pass / 0 partial pass / 0 regressions`; the prior `RF-02` repo-local citation leak disappeared without changing the product-fit decision

### Targeted subset

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: keeps the same product-fit logic while removing the earlier repo-local reference-doc citation from user-facing prose
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: stays page-level and bounded while grounding the answer in public page/context evidence rather than maintainer-side repo provenance
- Strongest miss: the target page itself remains only thinly machine-readable, so the read still depends partly on public directory/context sources
- Outcome: `pass`

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: keeps the builder-useful formation direction intact while remaining fully product-facing instead of exposing internal repo context
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted answer-hierarchy and audit-handoff validation

### Run header

- Run label: `FT-2026-03-31-answer-hierarchy-and-audit-handoff`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: targeted installed-runtime mini-cycle after tightening user-facing answer compression and adding conditional `Audit handoff`; result `4 pass / 0 partial pass / 0 regressions`; Carbon-style repo-follow-through now yields a bounded audit packet without pulling thin-evidence or frontend cases into the same shape

### Targeted subset

## RF-21 — Carbon Reference to Repo Borrowing Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Observed handoff behavior: emits a bounded `Audit handoff` with a codebase-audit lead, explicit borrowing targets, and one first inspection slice
- Strongest pass signal: recommendation-first shell stays compact and turns Carbon into a bounded donor instead of a clone target
- Strongest miss: confidence is slightly conservative for a medium-evidence brief, but the answer stays practical and readable
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted
- Strongest pass signal: comparison stays recommendation-first and compact without falling back into a memo-like theory read
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted from the thin-evidence page read
- Strongest pass signal: answer stays compact, page-level, and explicit about what it will not overclaim from one URL
- Strongest miss: the next move drops out in this rerun, but the bounded audit shape stays healthy
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: frontend follow-through stays build-oriented and does not get replaced by `Audit handoff`; the resulting implementation direction remains bounded to the case-review workspace
- Strongest pass signal: repo-audit follow-through stays separate from frontend execution, so the new add-on does not hijack the build path
- Strongest miss: the follow-up output moves straight into implementation direction rather than restating a visible `Frontend handoff` label
- Outcome: `pass`

---

## Targeted mixed audit + reference-donor validation

### Run header

- Run label: `FT-2026-03-31-sprout-mixed-audit`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: targeted installed-runtime rerun after adding a mixed audit + named reference donor case around SproutSocial Seeds; result `4 pass / 0 partial pass / 0 regressions`; current UI evidence stayed primary and the named donor stayed bounded

### Targeted subset

## AU-18 — Healthcare Booking UI Wants Sprout-Like Cohesion
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted in the base case
- Strongest pass signal: audits the current Bootstrap-like healthcare booking direction first, then translates Sprout into bounded donor traits instead of clone advice
- Strongest miss: none noted
- Outcome: `pass`

## AU-18 + repo-audit follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: inherited bounded audit read from the base case
- Observed handoff behavior: emits a bounded `Audit handoff` with one first repo inspection slice and keeps `Frontend handoff` out of scope
- Strongest pass signal: the follow-up names layout ownership and Bootstrap carryover as the first audit target instead of opening a broad component sweep
- Strongest miss: none noted
- Outcome: `pass`

## RF-21 — Carbon Reference to Repo Borrowing Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Observed handoff behavior: emits the existing bounded `Audit handoff` as expected for a true reference-to-repo case
- Strongest pass signal: guard case stays comparison-led and does not collapse back into audit-first behavior
- Strongest miss: confidence remains slightly conservative for a medium-evidence brief, but the comparison logic stays healthy
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted from the thin-evidence page read
- Strongest pass signal: thin-evidence guard stays page-level and bounded even after adding the mixed audit/reference donor case
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted client-repo dogfood validation

### Run header

- Run label: `FT-2026-03-31-client-repo-dogfood`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` inside clean temp client repos
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Install sanity:
  - `npm install --save-dev <local ds-intent-analyzer repo path>` succeeded in both clean temp repos
  - `npx ds-intent-analyzer install` succeeded in both clean temp repos
  - `.agents/skills/` contained only `ds-intent-analyzer` in both temp repos
  - JSON traces showed Codex reading temp-repo `.agents/skills/ds-intent-analyzer/SKILL.md`, so the installed runtime was the one actually used
- Notes: external-proof pass in clean temp repos after the standing maintainer gate stabilized; result `3 pass / 0 partial pass / 0 regressions`; no source-repo-local citations or maintainer-context leakage appeared in the user-facing answers

### Targeted subset

## CD-01 — Workflow-Heavy Internal Product Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted
- Strongest pass signal: gives real builder-facing stabilization order around state semantics, workspace layout grammar, dense reading rules, and one canonical high-risk review flow rather than drifting into enterprise kit shopping
- Strongest miss: none noted
- Outcome: `pass`

## CD-02 — Healthcare Booking Mixed Audit With Reference Donor
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted in the base case
- Strongest pass signal: audits the current Bootstrap-like healthcare booking mismatch first, then uses Sprout Seeds as a bounded donor for hierarchy, spacing, forms, and semantic green roles instead of clone advice
- Strongest miss: none noted
- Outcome: `pass`

## CD-02 + repo-audit follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: inherited bounded audit read from the base case
- Observed handoff behavior: emits a bounded `Audit handoff` with an explicit audit lead, workflow-shell-first audit goal, one first inspection slice, and a stop condition that asks for the real frontend path before token or component changes
- Strongest pass signal: the follow-up stays agent-ready and structural, telling the next agent to audit the search-results to provider-card to slot-selection to summary to confirmation path before repainting the system
- Strongest miss: none noted
- Outcome: `pass`
