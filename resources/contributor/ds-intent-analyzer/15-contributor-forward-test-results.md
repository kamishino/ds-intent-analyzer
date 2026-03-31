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
- Notes: historical installed-runtime baseline from the earlier `AF/AU/RF` pack before the contributor surface expanded to the current live `55`-scenario inventory; compare answer shape, not exact prose; result `34 pass / 2 partial pass / 0 regressions`

Default values:
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Current live scenario surface: `55`

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

The current live full-pack surface is:
- `AF-01` to `AF-04`
- `PF-01` to `PF-04`
- `PF-02 + frontend-skill`
- `AU-01` to `AU-25`
- `RF-01` to `RF-21`
- total live scenario surfaces: `55`

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

---

## Targeted distribution-proof validation

### Run header

- Run label: `FT-2026-03-31-distribution-proof`
- Runtime target: lean installed `.agents/skills/ds-intent-analyzer/` from local-path, git-source, and packed-tarball installs
- Validation command used: `npm run validate`
- Package surface sanity: `npm pack --json --dry-run` returned only `19` runtime/install files: root docs/license, `bin/`, install/sync scripts, and `resources/skills/ds-intent-analyzer/`
- Run date: `2026-03-31`
- Notes: contributor-side distribution proof after client-repo dogfood stabilized; result `3 pass / 0 partial pass / 0 regressions`; lean package shape held across all install channels and installed-runtime behavior remained client-repo-safe

### Targeted subset

## Local path install + CD-01
- Install channel: local path
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: downstream `node_modules/ds-intent-analyzer/` contained only root docs/license, `bin/`, install/sync scripts, and `resources/skills/ds-intent-analyzer/`
- Install sanity: `npm install --save-dev <local repo path>` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; JSON trace showed Codex reading temp-repo `.agents/skills/ds-intent-analyzer/SKILL.md`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted
- Strongest pass signal: proves the local-path downstream flow still yields real builder guidance rather than source-repo dogfood prose while using the installed runtime
- Strongest miss: none noted
- Outcome: `pass`

## Git-source install + CD-02
- Install channel: local git-source URL
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: downstream `node_modules/ds-intent-analyzer/` stayed lean and excluded contributor docs, `.local`, `AGENTS.md`, and validator-only files
- Install sanity: `npm install --save-dev git+file:///...` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; JSON trace showed Codex reading temp-repo `.agents/skills/ds-intent-analyzer/SKILL.md`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted in the base case
- Strongest pass signal: audits the current healthcare-booking mismatch first and uses Sprout Seeds only as a bounded donor, proving the git-source install channel preserves mixed audit behavior cleanly
- Strongest miss: none noted
- Outcome: `pass`

## Packed tarball install + CD-02 + repo-audit follow-up
- Install channel: packed tarball from `npm pack`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: tarball install reproduced the same lean downstream package surface and excluded contributor-side material
- Install sanity: `npm install --save-dev <packed tarball path>` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; JSON trace showed Codex reading temp-repo `.agents/skills/ds-intent-analyzer/SKILL.md`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: base case stayed audit-first without handoff drift, and the follow-up emitted a bounded `Audit handoff` that told the next agent to inspect the booking-flow shell before tokens or components
- Strongest pass signal: proves the lean packed artifact preserves both bounded donor behavior and agent-ready repo-audit follow-through outside the source repo
- Strongest miss: the follow-up packet stayed structurally correct but did not literally print an `Audit handoff` heading in the final prose
- Outcome: `pass`

---

## Targeted audit-packet artifact validation

### Run header

- Run label: `FT-2026-03-31-audit-packet-artifact`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: targeted installed-runtime review after promoting `Audit handoff` into a stable reusable `audit-packet.md` contract; result `5 pass / 0 partial pass / 0 regressions`; the add-on now locks the literal heading, field order, and `Stop condition` while keeping thin-evidence and frontend guards intact

### Targeted subset

## RF-21 — Carbon Reference to Repo Borrowing Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Observed handoff behavior: emits the literal `Audit handoff` heading, includes the fixed field order through `Stop condition`, and offers `docs/design-system/audit-packet.md` only if a reusable repo artifact is explicitly wanted
- Strongest pass signal: reference-to-repo follow-through is now a stable artifact contract rather than an implicit prose packet
- Strongest miss: none noted
- Outcome: `pass`

## AU-18 + repo-audit follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: inherited bounded audit read from the base case
- Observed handoff behavior: emits the literal `Audit handoff` heading, stays audit-first, and adds a bounded `Stop condition` instead of drifting into build work
- Strongest pass signal: the follow-up remains anchored on one repo inspection slice and does not dilute the current-UI-first audit
- Strongest miss: none noted
- Outcome: `pass`

## CD-02 + repo-audit follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp client repo
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: inherited bounded audit read from the base case
- Observed handoff behavior: emits the literal `Audit handoff` heading with one first inspection slice, explicit borrowing targets, and a stop condition that blocks token or component drift before the structural audit returns
- Strongest pass signal: downstream follow-through now reads like a reusable repo-audit packet, not just a smart paragraph
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: no `Audit handoff` or packet offer emitted from the thin-evidence page read
- Strongest pass signal: thin-evidence guard stays page-level and packet-free
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: stays on `Frontend handoff`; audit packet behavior does not replace build handoff
- Strongest pass signal: repo-audit follow-through and frontend follow-through remain clearly separate
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted audit-evidence ingestion validation

### Run header

- Run label: `FT-2026-03-31-audit-evidence-ingestion`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: targeted installed-runtime review after adding `audit-evidence.md` as a shipped current-state artifact contract; result `3 pass / 0 partial pass / 0 regressions`; fresh evidence now outranks project memory explicitly while thin-evidence guards stay intact

### Targeted subset

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: no `Audit handoff` emitted in the base audit; packet capture can be offered explicitly if the user wants to preserve the evidence for the next audit step
- Strongest pass signal: the evidence packet lifts the answer out of thin-brief behavior and supports a concrete stabilization order around provider trust cues, spacing rhythm, and booking-step clarity
- Strongest miss: none noted
- Outcome: `pass`

## AU-20 — Fresh Audit Evidence Conflicts With Project Memory
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: no handoff emitted; the answer stays on the drift resolution and fix-first audit decision
- Strongest pass signal: fresh provider-card evidence overtakes stale project memory explicitly instead of being silently forced back under the old canon
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: no `Audit handoff`, no `audit-evidence.md` offer, and no project-memory capture from the thin-evidence guard case
- Strongest pass signal: adding `audit-evidence.md` does not loosen page-level discipline for one-URL reads
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted tagged-git team-sharing validation

### Run header

- Run label: `FT-2026-03-31-tagged-git-team-sharing`
- Runtime target: lean installed `.agents/skills/ds-intent-analyzer/` from local-path, tag-pinned git-source, and packed-tarball installs
- Validation command used: `npm run validate`
- Package surface sanity: `npm pack --json --dry-run` returned only `22` runtime/install files: root docs/license, `bin/`, install/sync scripts, shipped runtime refs through `12-runtime-audit-artifacts.md`, and the two runtime template assets
- Run date: `2026-03-31`
- Install sanity:
  - local path install succeeded in a clean temp client repo
  - tag-pinned git-source install succeeded from `git+file:///...#v0.1.0`
  - packed tarball install succeeded from `ds-intent-analyzer-0.1.0.tgz`
  - `npx ds-intent-analyzer install` succeeded in all three temp repos
  - `.agents/skills/` contained only `ds-intent-analyzer` in all three temp repos
  - installed runtime copies in all three repos contained `assets/audit-packet-template.md` and `assets/audit-evidence-template.md`
- Notes: downstream package/install proof after promoting tag-pinned git sharing to the primary team workflow; result `3 pass / 0 partial pass / 0 regressions`; the package stayed lean while the new runtime assets arrived correctly downstream

### Targeted subset

## Local path install + CD-01
- Install channel: local path
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: downstream `node_modules/ds-intent-analyzer/` contained only root docs/license, `bin/`, install/sync scripts, and `resources/skills/ds-intent-analyzer/`
- Install sanity: `npm install --save-dev <local repo path>` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; the installed copy included the two runtime template assets
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff` emitted
- Strongest pass signal: local-path downstream flow still yields practical builder guidance while shipping the new artifact templates cleanly
- Strongest miss: none noted
- Outcome: `pass`

## Tag-pinned git-source install + CD-02
- Install channel: tag-pinned local git-source URL
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: downstream `node_modules/ds-intent-analyzer/` stayed lean and excluded contributor docs, `.local`, `AGENTS.md`, and validator-only files
- Install sanity: `npm install --save-dev git+file:///...#v0.1.0` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; the installed copy included the two runtime template assets
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: no `Audit handoff` emitted in the base case
- Strongest pass signal: proves the intended team-sharing channel preserves mixed audit behavior and ships the new artifact surface without widening the package
- Strongest miss: none noted
- Outcome: `pass`

## Packed tarball install + CD-02 + repo-audit follow-up
- Install channel: packed tarball from `npm pack`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Package surface sanity: tarball install reproduced the same lean downstream package surface and included the new runtime template assets
- Install sanity: `npm install --save-dev <packed tarball path>` and `npx ds-intent-analyzer install` both succeeded; `.agents/skills/` contained only `ds-intent-analyzer`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: base case stayed audit-first without drift, and the follow-up emitted the literal `Audit handoff` heading with the locked packet shape
- Strongest pass signal: proves the packaged artifact preserves both bounded donor behavior and the new audit-packet contract downstream
- Strongest miss: none noted
- Outcome: `pass`

---

## Standing maintainer gate post-roadmap baseline

### Run header

- Run label: `FT-2026-03-31-standing-maintainer-gate-post-roadmap`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: compact standing-gate confirmation after the audit-packet, tag-pinned git-sharing, and audit-evidence slices; result `7 pass / 0 partial pass / 0 regressions`; core builder usefulness and bounded audit/comparison behavior remain healthy after the new artifact surfaces landed

### Gate subset

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: still translates aesthetic language into workflow, density, and hierarchy constraints quickly
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: keeps the same builder-facing foundation-first direction with bounded confidence
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
- Strongest pass signal: still picks one highest-leverage operational contract to normalize first rather than spreading the answer across co-equal cleanup tracks
- Strongest miss: none noted
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: comparison stays bounded, recommendation-first, and free of repo-local citation leakage
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: thin-evidence page audit stays page-level, packet-free, and explicit about what it will not overclaim
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: frontend follow-through remains a bounded `Frontend handoff` path and is not replaced by audit-packet behavior
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted runtime-index feasibility

### Run header

- Run label: `FT-2026-03-31-runtime-index-feasibility`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: manual contributor-side feasibility pass before treating the derived runtime index as a shipped helper; result `6 pass / 0 partial pass / 0 regressions`; repeated user-facing value `yes`; proceed to shipped index `yes`

### Targeted subset

## RF-07 — Tokens Exist, But the UI Still Feels Wrong
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: the answer now feels easier to enter through one first inspection target instead of drifting across several equally weighted suspects
- Strongest miss: none noted
- Outcome: `pass`

## RF-13 — Clarity or EUI for a Dense Internal Product
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: the tie-break stays sharper and asks for one dominant repeated-job surface instead of a broad compare-more follow-up
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: thin-evidence page-level discipline stays intact even with the index helper present
- Strongest miss: none noted
- Outcome: `pass`

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: current-state audit evidence still leads the read instead of being displaced by generic lookup orientation
- Strongest miss: none noted
- Outcome: `pass`

## AU-20 — Fresh Audit Evidence Conflicts With Project Memory
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: fresh evidence still overtakes stale project memory explicitly, which shows the index helper does not blur precedence
- Strongest miss: none noted
- Outcome: `pass`

## CD-02 — Healthcare Booking Mixed Audit With Reference Donor
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: mixed audit plus bounded donor behavior stays client-repo-safe instead of collapsing into reference-first lookup behavior
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted recurring-review proof

### Run header

- Run label: `FT-2026-03-31-recurring-review-proof`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: manual contributor-side recurring-review proof before shipping a recurring-review workflow surface; result `2 pass / 0 partial pass / 0 regressions`; recurring review showed real user-facing value beyond maintainer convenience

### Targeted subset

## AU-21 — Healthy Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: no `Audit handoff` or `Frontend handoff`; explicit `review-log.md` offer remains optional
- Strongest pass signal: the answer stays compact and recurring-review shaped instead of rewriting a broad one-off audit
- Strongest miss: none noted
- Outcome: `pass`

## AU-22 — Drift-Detection Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: no repo or frontend handoff drift; prior review context stays continuity-only
- Strongest pass signal: the answer explicitly names what improved, what regressed, and why the next priority changed
- Strongest miss: none noted
- Outcome: `pass`

---

## Targeted monitor-feature shipped validation

### Run header

- Run label: `FT-2026-03-31-monitor-features-shipped`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Package surface sanity: `npm pack --json --dry-run` returned `26` packed files including the new `14-runtime-index.json`, `review-brief-template.md`, `review-log-template.md`, and `13-runtime-review-workflows.md`
- Temp-repo install sanity: clean local-path install plus `npx ds-intent-analyzer install` succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; installed runtime included the new review assets and runtime index
- Run date: `2026-03-31`
- Notes: targeted shipped-surface validation after adding the thin derived runtime index and recurring-review workflow; result `5 pass / 0 partial pass / 0 regressions`

### Targeted subset

## AU-21 — Healthy Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: recurring review stays compact and artifact-explicit; no silent writes
- Strongest pass signal: healthy repeated-review behavior now feels like a distinct practical workflow instead of a contributor-only convention
- Strongest miss: none noted
- Outcome: `pass`

## AU-22 — Drift-Detection Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: prior review context stays continuity-only and does not override fresher evidence
- Strongest pass signal: drift comparison stays compact and decision-first
- Strongest miss: none noted
- Outcome: `pass`

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Observed handoff behavior: no recurring-review artifacts are offered when the workflow is a normal audit
- Strongest pass signal: audit-evidence precedence remains healthy after the new recurring-review artifact surface landed
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Observed handoff behavior: no `Audit handoff`, no `Frontend handoff`, and no recurring-review artifact drift
- Strongest pass signal: low-evidence page reads stay compact and packet-free even after the new workflow surfaces shipped
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: stays on `Frontend handoff`; recurring review and audit artifacts do not interfere with build sequencing
- Strongest pass signal: the new recurring-review workflow remains clearly separate from frontend execution
- Strongest miss: none noted
- Outcome: `pass`

---

## Standing maintainer gate post-monitor-features baseline

### Run header

- Run label: `FT-2026-03-31-standing-maintainer-gate-post-monitor-features`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Run date: `2026-03-31`
- Notes: compact standing-gate confirmation after the runtime-index and recurring-review slices; result `7 pass / 0 partial pass / 0 regressions`; core builder usefulness and bounded audit/comparison behavior remain healthy

### Gate subset

## AF-01 — Adjective-Heavy Internal Tool Brief
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Intent Analysis`
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: still translates aesthetic discomfort into concrete workflow and density constraints quickly
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 — Trust-Sensitive Workflow Formation Direction
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: still gives a bounded foundation-first direction without inflating confidence
- Strongest miss: none noted
- Outcome: `pass`

## PF-03 — Toolkit Pressure vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: still keeps product-pattern stabilization ahead of toolkit speed
- Strongest miss: none noted
- Outcome: `pass`

## PF-04 — Existing Workflow Product Needs a Stabilization Order
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: still picks one operational contract to normalize first instead of scattering the answer
- Strongest miss: none noted
- Outcome: `pass`

## RF-02 — Hybrid-Sensitive Platform Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still hybrid-sensitive`
- Strongest pass signal: comparison stays bounded, recommendation-first, and free of internal-source leakage
- Strongest miss: none noted
- Outcome: `pass`

## RF-16 — URL-Only Design-System Reference Page
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: thin-evidence page audit stays page-level and explicit about what it will not overclaim
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: frontend follow-through remains a bounded build handoff rather than being replaced by audit or recurring-review behavior
- Strongest miss: none noted
- Outcome: `pass`

---

## Runtime-index correction validation

### Run header

- Run label: `FT-2026-03-31-runtime-index-correction`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Package surface sanity: `npm pack --json --dry-run` returned `26` packed files and kept `14-runtime-index.json` under `references/` while leaving `assets/` template-only
- Temp-repo install sanity: clean local-path install plus `npx ds-intent-analyzer install` succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; the installed runtime included `references/14-runtime-index.json` and excluded `assets/runtime-index.json`
- Run date: `2026-03-31`
- Notes: structural correction slice for the shipped runtime index helper; this block logs executable structural validation only because the repo does not currently ship an automated scenario harness for `RF-13`, `RF-16`, `AU-21`, or `AU-22`

### Structural subset

## Runtime index helper placement
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: the generated helper now lives at `references/14-runtime-index.json`, not under `assets/`
- Strongest pass signal: shipped `assets/` stays reserved for output templates while the orientation helper is classified as a normal reference surface
- Strongest miss: none noted
- Outcome: `pass`

## Recurring-review shell shape
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: `recurring_review.shell_sections` contains exactly `TL;DR`, `Current health`, `Biggest drift`, `Keep`, `Fix next`, `Confidence`, and `Next review action`
- Strongest pass signal: retrieval-order and write-gate bullets are no longer leaking into the recurring-review shell
- Strongest miss: none noted
- Outcome: `pass`

## Reference-card shape
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: `reference_cards` now contains only real lookup cards with the standard lookup-card fields
- Strongest pass signal: tie-break subsections such as `Clarity vs Elastic UI Framework tie-break` are no longer emitted as pseudo-reference cards
- Strongest miss: none noted
- Outcome: `pass`

---

## Design-context ingestion validation

### Run header

- Run label: `FT-2026-03-31-design-context-ingestion`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Temp-repo install sanity: clean local-path install plus `npx ds-intent-analyzer install` succeeded in a fresh temp repo; `.agents/skills/` contained only `ds-intent-analyzer`; the installed `audit-evidence-template.md` included `## Design-context summaries`, and the installed runtime contract included the new `one frame only` / `design context only` confidence qualifiers
- Run date: `2026-03-31`
- Notes: executable validation for the design-context-ingestion slice; the repo still does not ship an automated installed-runtime prompt harness, so this block records structural and downstream-surface validation aligned to `AU-23`, `AU-24`, `AU-25`, `AU-21`, and `RF-16` rather than transcript-grade scenario reruns

### Structural subset

## AU-23 — One-frame design-context cap
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: runtime contract and output templates cap one-frame or one-node design-context reads at `Confidence: E1 - low, one frame only` and keep them frame-level
- Strongest pass signal: one-frame Figma-aware audit behavior is now explicitly stronger than a thin brief without pretending full flow certainty
- Strongest miss: no prompt harness yet for transcript-grade installed-runtime replay
- Outcome: `pass`

## AU-24 — Multi-surface design-context packet lift
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: `audit-evidence.md` and the shipped template now require `Design-context summaries`, and the runtime contract allows multi-surface design-context packets to rise to bounded `Confidence: E2 - medium, design context only`
- Strongest pass signal: the product now has an explicit current-state artifact shape for richer design-context without adding a new file path or connector lock-in
- Strongest miss: no prompt harness yet for transcript-grade installed-runtime replay
- Outcome: `pass`

## AU-25 — Fresh evidence wins over stale design-context
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: runtime retrieval guidance now says fresher screenshots, URLs, repo surfaces, or prompt-level design-context outrank stored `audit-evidence.md` summaries, and drift must be called out explicitly when they conflict
- Strongest pass signal: stale design-context is now locked to continuity context rather than stronger truth than fresher live evidence
- Strongest miss: no prompt harness yet for transcript-grade installed-runtime replay
- Outcome: `pass`

## AU-21 guard — Recurring review stays compact and audit-first
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: recurring-review scope still lives in `review-brief.md`, while structured design-context remains current-state evidence inside `audit-evidence.md`
- Strongest pass signal: the new design-context path does not blur recurring-review scope with stronger truth than fresher evidence
- Strongest miss: no prompt harness yet for transcript-grade installed-runtime replay
- Outcome: `pass`

## RF-16 guard — Thin-evidence page reads stay bounded
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed structural signal: the confidence contract still reserves `E1 - low, one page only` for thin single-page reads and does not let design-context language inflate unrelated low-evidence cases
- Strongest pass signal: richer design-context support landed without loosening the standing thin-evidence audit guard
- Strongest miss: no prompt harness yet for transcript-grade installed-runtime replay
- Outcome: `pass`

## Temp-repo installed runtime sanity
- Runtime target: installed `.agents/skills/ds-intent-analyzer/` in clean temp repo
- Observed structural signal: downstream installed runtime shipped the updated `audit-evidence-template.md` and the updated runtime contract text, while keeping the install surface unchanged
- Strongest pass signal: the design-context ingestion slice survives downstream installation instead of only existing in the source repo
- Strongest miss: none noted
- Outcome: `pass`

---

## Full-surface QA validation

### Run header

- Run label: `FT-2026-03-31-full-surface-qa`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Sync command used: `npm run sync:local`
- Validation command used: `npm run validate`
- Temp-repo install sanity: clean local-path install plus `npx ds-intent-analyzer install` succeeded; `.agents/skills/` contained only `ds-intent-analyzer`; installed runtime included `SKILL.md`, `agents/openai.yaml`, and shipped references
- Case pack size: `55`
- Run date: `2026-03-31`
- Notes: contributor-side full-surface QA pass after the `skill-creator` review; stale contributor QA metadata was corrected in the same slice; independent raw-prompt subagent cross-checks were run for `PF-02`, `PF-03`, `RF-07`, `RF-16`, `AU-18`, `RF-21`, `AU-20`, `AU-25`, `AU-21`, `AU-22`, `AU-23`, `AU-24`, and `PF-02 + frontend-skill`; result `54 pass / 1 partial pass / 0 regressions`

### App-Fit and brief-set surfaces

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
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: independent raw-prompt rerun confirms a builder-useful formation direction with a clear stabilization order around state semantics, hierarchy, and risky review patterns
- Strongest miss: stale contributor readouts in older QA history had undercalled confidence, but the current runtime no longer shows that miss
- Outcome: `pass`

## PF-03 — Toolkit Pressure vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: independent raw-prompt rerun keeps toolkit choice subordinate to workflow-pattern stabilization and gives a practical library-selection rule
- Strongest miss: older contributor QA history understated confidence here, but the current runtime read is healthy
- Outcome: `pass`

## PF-04 — Existing Workflow Product Needs a Stabilization Order
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: still picks one operational contract to normalize first instead of scattering the answer
- Strongest miss: none noted
- Outcome: `pass`

## PF-02 + `frontend-skill` follow-up
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Formation Recommendation`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: independent raw-prompt rerun stays on a bounded `Frontend handoff` with one first build target and explicit `Do not invent` guidance
- Strongest pass signal: repo-audit follow-through and frontend follow-through remain clearly separate
- Strongest miss: none noted
- Outcome: `pass`

### Audit surfaces

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

## AU-17 — Specialized Workbench with Analytic Claims
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, artifact summary only`
- Strongest pass signal: trust-of-claims audit remains practical and workbench-aware while the confidence line stays compact and user-facing
- Strongest miss: none noted
- Outcome: `pass`

## AU-18 — Healthcare Booking UI Wants Sprout-Like Cohesion
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: independent raw-prompt rerun confirms the current healthcare booking UI is audited first and Sprout stays a bounded donor
- Strongest miss: could still lean comparison-first for a moment before landing on the current-product audit
- Outcome: `pass`

## AU-19 — Healthcare Booking Audit Backed by `audit-evidence.md`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: treats audit-evidence as current-state context and produces a concrete stabilization order
- Strongest miss: still limited to packet-level evidence rather than live artifacts
- Outcome: `pass`

## AU-20 — Fresh Audit Evidence Conflicts With Project Memory
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: independent raw-prompt rerun confirms fresh evidence overtakes stale project memory explicitly and moves priority to provider-card trust
- Strongest miss: none noted
- Outcome: `pass`

## AU-21 — Healthy Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: independent raw-prompt rerun stays compact, recurring-review shaped, and audit-first
- Strongest miss: could be slightly more explicit about the next review action
- Outcome: `pass`

## AU-22 — Drift-Detection Recurring Review
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: independent raw-prompt rerun compares against the prior log and changes priority based on drift
- Strongest miss: none noted
- Outcome: `pass`

## AU-23 — One-Frame-Only Figma-Aware Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one frame only`
- Strongest pass signal: independent raw-prompt rerun keeps the read frame-level and bounded instead of pretending full-flow certainty
- Strongest miss: cannot generalize beyond the single frame
- Outcome: `pass`

## AU-24 — Multi-Surface Design-Context Packet in `audit-evidence.md`
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium, design context only`
- Strongest pass signal: independent raw-prompt rerun uses the design-context packet to sharpen stabilization order beyond a thin brief
- Strongest miss: certainty stays bounded because the packet is not live UI evidence
- Outcome: `pass`

## AU-25 — Stale Design-Context Conflicts With Fresher Screenshot Evidence
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: independent raw-prompt rerun prefers fresher screenshot evidence over stale design-context and calls out the drift explicitly
- Strongest miss: none noted
- Outcome: `pass`

### Reference surfaces

## RF-01 — Merchant Operations Comparison
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps merchant workflow reality ahead of aesthetics
- Strongest miss: does not yet expose a sharper tie-break artifact
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
- Strongest miss: still needs the smallest useful extra clarification
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
- Strongest miss: none noted
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
- Observed confidence line: `Confidence: E1 - low, brief only`
- Strongest pass signal: independent raw-prompt rerun still recognizes that more tokens or more components will not solve the real issue
- Strongest miss: still hedges between hierarchy, state contrast, and repeated-flow structure instead of choosing one first inspection target clearly enough
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
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Strongest pass signal: raw-prompt rerun confirms Ant stays a bounded donor and does not lead ahead of workflow-pattern stabilization
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
- Strongest pass signal: the tie-break stays sharper and asks for one dominant repeated-job surface instead of a broad compare-more follow-up
- Strongest miss: none noted
- Outcome: `pass`

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
- Strongest pass signal: independent raw-prompt rerun confirms the URL-only read stays page-level with bounded confidence
- Strongest miss: none noted
- Outcome: `pass`

## RF-17 — Visa for a Trust-Sensitive Operational Product
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: treats Visa as a bounded workflow-and-trust reference, not a prestige default
- Strongest miss: none noted
- Outcome: `pass`

## RF-18 — Product Platform Label, but Workflow Gravity Still Dominates
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, still boundary-sensitive`
- Strongest pass signal: identifies workflow-heavy internal product gravity and demotes the platform label to a secondary lens
- Strongest miss: none noted
- Outcome: `pass`

## RF-19 — Toolkit Speed Temptation vs Product-System Need
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: treats toolkit choice as an implementation-layer decision and correctly prioritizes risky operational review patterns first
- Strongest miss: confidence wording can drift slightly from the preferred short inline format while staying readable
- Outcome: `pass`

## RF-20 — Implementation Breadth Is Real, but Does It Lead?
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium`
- Strongest pass signal: keeps workflow gravity ahead of product-platform breadth and uses EUI and Primer as bounded secondary references
- Strongest miss: none noted
- Outcome: `pass`

## RF-21 — Carbon Reference to Repo Borrowing Audit
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `Comparative Reference Read`
- Observed confidence line: `Confidence: E2 - medium, brief only`
- Observed handoff behavior: independent raw-prompt rerun keeps Carbon bounded and still points the next agent to the repo’s highest-friction repeated jobs before tokens or components
- Strongest pass signal: reference-to-repo follow-through stays recommendation-first and actionable without collapsing into cloning
- Strongest miss: none noted
- Outcome: `pass`

### QA outcome summary

- Confirmed runtime blockers: `0`
- Confirmed runtime majors: `0`
- Confirmed runtime minors: `1`
- Confirmed runtime watch case:
  - `RF-07` still needs a sharper first inspection target in implementation-framed comparison reads
- Confirmed QA-surface fixes in this slice:
  - contributor playbook now points to the live `55`-surface inventory
  - standing gate source packs are explicit
  - older `36`-case language is now clearly marked as historical rather than current truth
