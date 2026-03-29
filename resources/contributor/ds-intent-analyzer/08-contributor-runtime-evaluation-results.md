# DS Runtime Evaluation Results v2

## Purpose

This file records the ongoing manual runtime evaluation cycles for the current `ds-intent-analyzer` skill.

Evaluation basis:
- current shipped `SKILL.md`
- current runtime reference pack
- smoke subset defined in `04-contributor-runtime-evaluation.md`

This is a contributor-side review artifact.
It does not change shipped runtime behavior by itself.

---

## Cycle summary

### Smoke subset used
- `AF-01`
- `AF-03`
- `AU-01`
- `RF-02`

### Overall result
- 2 strong passes
- 2 partial passes
- 0 regressions

### Current top strengths
- routing logic is generally aligned with the intended four-mode model
- constraints-first and pattern-first reasoning are now stable in the core runtime contract
- low-evidence handling is materially better than earlier scaffolds

### Current top weaknesses
- confidence scoping is still not sharp enough in hybrid-sensitive comparative reads
- one-screen audit answers still risk drifting slightly upward into formation language instead of staying tightly screen-level

---

## Case results

## AF-01 — Adjective-Heavy Internal Tool Brief

### Expected primary mode
- Intent Analysis

### Observed behavior
- The current runtime is likely to route this correctly into Intent Analysis.
- It should translate `calm`, `premium`, and `modern` into possible operating implications rather than direct token conclusions.
- It should also identify missing product realities and recommend a small next clarification.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `pass`

### Strongest miss
- Pattern gravity may stay slightly abstract because the prompt contains almost no workflow evidence.

### Recommended next action
- Keep this case in the stable acceptance set as the baseline guard against adjective-to-token shortcutting.

---

## AF-03 — Merchant Operations Formation Brief

### Expected primary mode
- Formation Recommendation

### Observed behavior
- The current runtime is likely to route this correctly into Formation Recommendation.
- It should identify merchant/operator repeated jobs, prioritize foundations, and give practical token-direction guidance with anti-overbuild caution.
- The current skill contract is strong on this shape because it explicitly centers foundation-first recommendations.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `1`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `pass`

### Strongest miss
- Confidence language may still read slightly stronger than the medium evidence really supports because no artifact layer is present.

### Recommended next action
- Keep this case in the stable acceptance set as the main check for foundation-first formation quality.

---

## AU-01 — Vague Improve Request With One-Screen Evidence

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should default correctly to UI / DS Audit.
- It should focus on visible hierarchy, density, and fix-first areas rather than claiming full-system maturity.
- The likely remaining weakness is slight drift into broader formation language when discussing “cleaner” or “premium”.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `1`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `11 / 14`
- Result: `partial pass`

### Strongest miss
- Screen-level audits are not yet as tightly bounded as they should be; the runtime may still widen the answer beyond the visible evidence.

### Recommended next action
- Use this case to tighten screen-level audit discipline and reduce formation drift in low-evidence audit prompts.

---

## RF-02 — Hybrid-Sensitive Platform Comparison

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should route this into Comparative Reference Read and recognize the request as hybrid-sensitive.
- It should avoid a fake clean label and explain what is useful from each reference.
- The likely remaining weakness is confidence scoping: the answer may still sound too settled when the archetype boundary is intentionally unresolved.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `1`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `11 / 14`
- Result: `partial pass`

### Strongest miss
- The runtime still needs a sharper way to express “useful but unresolved” comparison outcomes in hybrid-sensitive cases.

### Recommended next action
- Prioritize future hardening around confidence scoping and next-evidence guidance for hybrid comparisons.

---

## Prioritized runtime weaknesses

### Priority 1 — Confidence scoping in hybrid-sensitive comparative reads
Current issue:
- the runtime is good at identifying ambiguity
- it is weaker at staying decisively non-final while still being useful

Why it matters:
- hybrid reference questions are common and high-risk for false certainty

Recommended follow-up:
- harden comparative-read language for “provisional fit”, “bounded borrowing”, and “evidence needed to break the tie”

### Priority 2 — Screen-level audit discipline under low evidence
Current issue:
- one-screen audit prompts route correctly
- but the answer can still drift from visible evidence into broader formation commentary

Why it matters:
- real-world Codex usage will often start from partial screenshots

Recommended follow-up:
- harden the audit path so partial evidence keeps the answer explicitly screen-level unless more context is provided

### Priority 3 — Pattern pressure articulation in low-evidence intent cases
Current issue:
- adjective-only cases no longer collapse into style mimicry
- but pattern gravity can still remain too generic

Why it matters:
- the skill should stay product-oriented even when the brief is vague

Recommended follow-up:
- refine how the runtime translates weak descriptors into tentative repeated-job and workflow hypotheses

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `RF-02`
- `RF-03`

Why this set:
- it covers all four runtime modes
- it includes both low-evidence and medium-evidence prompts
- it stresses contradiction handling, hybrid comparison, and unknown reference handling
- it is small enough to remain practical as a recurring acceptance subset

---

## Decision from cycle 1

Do not expand the dataset or refine the archetype taxonomy next by default.

The next high-leverage hardening slice should focus on:
- hybrid-sensitive confidence scoping
- tighter low-evidence audit discipline

Only after that should the project decide whether deeper dataset work is still the best next investment.

---

## Cycle 2 summary

### Scope used
- rerun of the current stable acceptance set
- doctrine-aligned UI-language regression cases:
  - `AU-05`
  - `AU-06`
  - `AU-07`
  - `AU-08`
  - `AU-09`

### Overall result
- 7 strong passes
- 4 partial passes
- 0 regressions

### Current top strengths
- UI-language prompts are now handled as valid entrypoints rather than as malformed design-system asks
- Storybook and style-guide or Style Dictionary prompts can be read as practical audit evidence without forcing token-first answers
- the runtime resists famous-system cloning and generic design-system escalation better than earlier slices

### Current top weaknesses
- the weakest low-evidence prompts still need tighter “smallest useful next move” behavior
- anti-sameness advice can still become slightly abstract when only one screen or a vague discomfort signal is available
- hybrid-sensitive comparison confidence remains a watch area even though doctrine alignment improved elsewhere

---

## Cycle 2 — Stable acceptance rerun

### Case classifications
- `AF-01` — `pass`
- `AF-03` — `pass`
- `AU-01` — `partial pass`
- `AU-02` — `pass`
- `RF-02` — `partial pass`
- `RF-03` — `pass`

### Rerun read
- The existing acceptance set still holds and did not regress after the doctrine slice.
- `AU-01` remains the main low-evidence audit discipline check.
- `RF-02` remains the main confidence-scope watch case for hybrid-sensitive comparative reads.

---

## Cycle 2 — Doctrine expansion cases

## AU-05 — Bare UI-Language Improve Ask

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now accept this ask as a valid entrypoint rather than a misuse case.
- It should stay audit-first, acknowledge that the evidence is too thin, and ask for the smallest useful artifact instead of jumping into system advice.
- The likely remaining weakness is that the next move could still be broader than necessary if the answer starts listing too many possible diagnostic directions at once.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `1`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `12 / 14`
- Result: `pass`

### Strongest miss
- With almost no evidence, the answer may still offer slightly too much framework language before narrowing to the smallest useful artifact request.

### Recommended next action
- Promote this case into the stable acceptance set as the main check that pure UI-language entrypoints stay valid and lightweight.

---

## AU-06 — Styles Feel Off, Make It Cleaner

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should translate `cleaner` and `styles feel off` into hierarchy, spacing, grouping, and semantic consistency checks rather than aesthetic jargon.
- It should stay screen-level and practical.
- The remaining risk is that the answer may still broaden too quickly from visible inconsistency into medium-confidence foundation advice.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `1`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `12 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may still over-interpret style discomfort into broader system causes faster than the evidence supports.

### Recommended next action
- Keep this case as a doctrine stress case, but do not promote it ahead of stronger signal cases yet.

---

## AU-07 — Storybook Feels Inconsistent

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should treat Storybook inconsistency as legitimate audit evidence and diagnose whether the main problem is style-guide drift, foundation inconsistency, or pattern inconsistency.
- It should give a staged stabilization order and avoid turning the answer into a giant governance program.
- This case now fits the product doctrine well because it starts in developer language and still reveals deeper system consequences progressively.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current doctrine-alignment level.

### Recommended next action
- Promote this case into the stable acceptance set as the clearest Storybook-to-system translation check.

---

## AU-08 — This UI Feels Too Generic

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should resist the temptation to answer “generic” with decorative novelty.
- It should instead describe how character could come from workflow emphasis, hierarchy, state treatment, or density handling.
- The likely remaining weakness is that anti-sameness advice can still sound slightly abstract unless the answer identifies one concrete visible lever to change first.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `1`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `11 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may explain why the UI feels interchangeable without always naming a concrete enough fix-first lever.

### Recommended next action
- Promote this case into the stable acceptance set because it is the best anti-sameness guard, even though it still deserves future tightening.

---

## AU-09 — Style Dictionary Works, But the Styles Feel Off

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should diagnose this as a style-guide or foundation-layer problem rather than proof that more primitives are needed.
- It should prioritize semantic usage guidance, repeated state handling, and practical stabilization before calling for broader system work.
- This case now strongly supports the doctrine because it lets the skill teach deeper system meaning without forcing design-system vocabulary first.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main style-guide or Style Dictionary translation check.

---

## Prioritized runtime weaknesses after cycle 2

### Priority 1 — Smallest useful next move discipline for extremely thin UI asks
Current issue:
- the runtime now accepts prompts like `Make it better`
- but the answer can still offer too much interpretive framing before narrowing to the smallest artifact request

Why it matters:
- this is a common real-world developer entrypoint

Recommended follow-up:
- tighten low-evidence audit behavior so bare UI-language asks ask for one next artifact before offering broader diagnostic branching

### Priority 2 — Anti-sameness suggestions need more concrete fix-first levers
Current issue:
- the runtime can explain why a UI feels generic
- but concrete, visible first moves are not always sharp enough under one-screen evidence

Why it matters:
- the product promise includes helping developers avoid generic cloned UI outcomes

Recommended follow-up:
- harden screen-level audit suggestions so anti-sameness guidance names one or two visible levers before broader posture language

### Priority 3 — Hybrid-sensitive comparison confidence remains a recurring watch case
Current issue:
- doctrine alignment improved elsewhere
- but `RF-02` still remains only a partial pass under the current acceptance set

Why it matters:
- unresolved comparative reads are still a high-risk area for false certainty

Recommended follow-up:
- keep `RF-02` in the stable acceptance set and only revisit deeper dataset work after confidence language stays bounded there

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `RF-02`
- `RF-03`

Why this set:
- it covers all four runtime modes
- it keeps the original low-evidence and hybrid-sensitive guardrails
- it now includes real developer-language prompts with no explicit design-system vocabulary
- it protects Storybook, anti-sameness, and style-guide or Style Dictionary translation behavior

---

## Decision from cycle 2

Do not return to dataset expansion next by default.

The next high-leverage hardening slice should focus on:
- smallest-useful-next-move discipline for bare UI-language asks
- more concrete anti-sameness suggestions under one-screen evidence

Keep `RF-02` as a standing confidence-scope watch case while doing that work.

Only after those checks feel stable should the project decide whether Batch A dataset deepening is again the best next investment.

---

## Cycle 3 summary

### Scope used
- developer-guidance runtime read
- new developer-decision cases:
  - `RF-05`
  - `RF-06`
  - `RF-07`

### Overall result
- 2 strong passes
- 1 partial pass
- 0 regressions

### Current top strengths
- the runtime can now steer library-shaped asks back toward product-fit and stabilization decisions
- famous-system maturity is less likely to be treated as a default answer
- the skill is better positioned to explain design-system tradeoffs to developers in practical language

### Current top weakness
- token-present-but-still-wrong cases can still drift slightly abstract unless the answer names the next concrete diagnostic layer more sharply

---

## Cycle 3 — Developer-guidance cases

## RF-05 — UI Library Ask for a Workflow-Heavy Product

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now treat this as a product-fit and borrowing question rather than a popularity ranking.
- It should explain whether the team needs a library choice yet or whether lighter foundation and pattern stabilization should come first.
- This case aligns well with the new developer-guidance layer because the answer can stay practical without collapsing into implementation fandom.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main developer-library decision guard.

---

## RF-06 — Carbon Feels Mature, But Is It Right?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should distinguish Carbon’s maturity from the user’s actual product readiness and pattern stability.
- It should explain what Carbon is useful as a reference for while warning against importing platform-scale weight too early.
- This is now a high-value case because it tests whether the skill guides without imposing and avoids prestige-first reasoning.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main famous-system maturity caution check.

---

## RF-07 — Tokens Exist, But the UI Still Feels Wrong

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should explain that tokens do not prove pattern clarity, posture fit, or strong product direction.
- It should steer the answer toward the next diagnostic layer rather than suggesting more tokens or an immediate library switch.
- The likely remaining weakness is that the answer can still sound slightly abstract unless it identifies the next concrete layer to inspect first.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `12 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may still describe the diagnosis correctly without naming a concrete enough first inspection target such as state handling, hierarchy drift, or repeated workflow patterns.

### Recommended next action
- Keep this case as a developer-guidance stress case, but do not promote it ahead of the stronger signal cases yet.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`

Why this set:
- it preserves the existing low-evidence and hybrid-sensitive checks
- it now protects developer-library decision guidance
- it protects against prestige-first adoption of famous mature systems
- it keeps the pack compact enough to remain practical

---

## Decision from cycle 3

Do not expand runtime capability breadth next.

The next high-leverage hardening slice should focus on:
- sharper concrete next-step guidance when tokens exist but the UI still feels wrong
- keeping anti-sameness and pattern-layer diagnosis practical under implementation-framed asks

Only after those behaviors feel stable should the project consider whether more dataset distillation is the best next investment.

---

## Cycle 4 summary

### Scope used
- lightweight UI-effect explanation lens
- new audit cases:
  - `AU-10`
  - `AU-11`
  - `AU-12`
  - `AU-13`

### Overall result
- 3 strong passes
- 1 partial pass
- 0 regressions

### Current top strengths
- the runtime can now explain visual choices more concretely through likely perceived effects and user consequences
- audit explanations are less likely to collapse into generic “make it cleaner” language
- the skill is better positioned to translate UI details into trust, clarity, scanability, and effort consequences for developers

### Current top weakness
- the more abstract anti-sameness cases still need sharper first-move recommendations when evidence is visually flat but otherwise consistent

---

## Cycle 4 — Effect explanation cases

## AU-10 — Softer Shape Cue in a High-Control Workflow

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should explain softer shape as a likely approachability cue while checking whether it weakens precision or trust in a high-control workflow.
- It should avoid universal claims and keep the answer tied to product consequences.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `pass`

### Strongest miss
- Shape guidance can still remain slightly broad unless the answer identifies a tighter range of where softness is safe versus where precision should dominate.

### Recommended next action
- Keep this case as a useful supporting check for cue interpretation, but do not promote it ahead of higher-signal acceptance cases yet.

---

## AU-11 — Cleaner Must Mean Better Scanability, Not Just Less Stuff

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should explain that cleaner in this case means stronger scanability, emphasis, and grouping rather than simply removing visual material.
- It should translate minimal-but-flat UI into a consequence-aware diagnosis.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main “cleaner means better scanability, not just less” guard.

---

## AU-12 — Generic Because Emphasis Is Too Flat

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now explain genericness through flattened emphasis, weak priority cues, and insufficient workflow differentiation rather than missing novelty alone.
- The likely remaining weakness is that the answer can still be slightly abstract if it does not name a concrete first emphasis lever.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `12 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may correctly diagnose flat emphasis without always choosing a sharp enough first move such as stronger state priority, clearer primary actions, or more deliberate content weighting.

### Recommended next action
- Keep this case as the main anti-sameness explanation stress case for the next hardening slice.

---

## AU-13 — Visual Calm Conflicts With Trust or Risk Needs

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should explain how a calm, premium treatment can weaken risk signaling when important states become too quiet.
- It should give a balance direction rather than forcing either “calm” or “strong signaling” as the only answer.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main trust-vs-calm consequence guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, and developer-guidance checks
- it now protects concrete effect explanation for “cleaner” and trust-vs-calm tensions
- it stays compact enough to remain practical as a recurring acceptance subset

---

## Decision from cycle 4

The skill now uses a lightweight perceived-effect lens as a supporting explanation layer.

Do not turn this into a larger psychology framework.

The next high-leverage hardening slice should focus on:
- more concrete first-move guidance in flat-emphasis or anti-sameness cases
- sharper translation from abstract UI discomfort into one actionable visual or pattern lever

Only after that should the project decide whether further consequence-lens coverage is worth expanding.

---

## Cycle 5 summary

### Scope used
- first-move prioritization hardening
- key cases:
  - `AU-12`
  - `AU-14`
  - `RF-07`
  - `RF-08`

### Overall result
- 2 strong passes
- 2 partial passes
- 0 regressions

### Current top strengths
- the runtime is better at naming a first inspection target instead of stopping at broad discomfort diagnosis
- implementation-framed asks are less likely to collapse into token cleanup by default
- the output is more explicit about what should wait

### Current top weakness
- anti-sameness cases can still be one step too abstract when the answer names the correct layer but not the most visible lever inside that layer

---

## Cycle 5 — First-move prioritization cases

## AU-12 — Generic Because Emphasis Is Too Flat

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now explain genericness through flat emphasis and choose a visible first lever such as stronger state priority, clearer primary actions, or more deliberate content weighting.
- The likely remaining weakness is that the answer may still hedge between several nearby emphasis moves instead of naming the sharpest one.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `1`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `partial pass`

### Strongest miss
- The answer can still stop one step short of committing to the most visible first lever inside the emphasis problem.

### Recommended next action
- Keep this case as the main anti-sameness prioritization stress case.

---

## AU-14 — Many Possible Fixes, But One Lever Should Lead

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now pick one highest-leverage first move and say what should wait.
- It should keep the answer grounded in task visibility, hierarchy, or state emphasis rather than spreading effort across polish, tokens, and layout at once.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main prioritization-discipline guard.

---

## RF-07 — Tokens Exist, But the UI Still Feels Wrong

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should better separate token completeness from hierarchy, pattern, or posture weakness and name the next layer to inspect.
- The likely remaining weakness is that it can still describe the right layer without always choosing the sharpest first lever inside it.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may still stop at “inspect hierarchy or state clarity” rather than committing to which one should lead first.

### Recommended next action
- Keep this case as the core implementation-framed stress case for the next slice.

---

## RF-08 — Token Work Should Wait While Hierarchy Clarity Comes First

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now explicitly say that token cleanup should wait when hierarchy and state emphasis are the higher-leverage problems.
- It should choose one first inspection target and explain why it outranks more shared-style work.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main “do not start with tokens” prioritization guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, developer-guidance, and consequence-lens checks
- it now protects first-move prioritization discipline under both audit and implementation-framed asks
- it keeps the pack compact enough to remain practical

---

## Decision from cycle 5

The next runtime priority is now first-move prioritization under abstract discomfort prompts.

Do not broaden the capability surface next.

The next high-leverage hardening slice should focus on:
- choosing the sharpest visible lever inside an already-correct diagnosis
- reducing hedging between nearby first-move candidates in anti-sameness and token-present-but-still-wrong cases

Only after that should the project decide whether another evaluation-led hardening slice is still needed before dataset distillation resumes.

---

## Cycle 6 summary

### Scope used
- visible-lever selection hardening
- stable acceptance rerun with no regressions observed
- lever-selection cases:
  - `AU-12`
  - `AU-15`
  - `AU-16`
  - `RF-07`
  - `RF-09`

### Overall result
- 4 strong passes
- 1 partial pass
- 0 regressions

### Current top strengths
- the runtime is now better at committing to one visible lever instead of hovering between nearby first moves
- anti-sameness answers are less likely to stop at broad emphasis language alone
- implementation-framed prompts are more clearly routed away from token cleanup when a sharper visible lever is available

### Current top weakness
- `RF-07` still remains slightly softer than the sharper lever-selection cases when the prompt does not specify whether state contrast or action emphasis is the clearer lead

---

## Cycle 6 — Lever-selection cases

## AU-12 — Generic Because Emphasis Is Too Flat

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now move past broad flat-emphasis diagnosis and commit to a visible lever such as stronger primary-action emphasis or clearer risky-vs-routine contrast.
- It is materially sharper than cycle 5 because the output should now say why that lever outranks adjacent emphasis moves instead of merely listing them.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this case as an anti-sameness acceptance guard, but rely on `AU-15` as the sharper visible-lever stress case going forward.

---

## AU-15 — Generic Because Primary Actions Do Not Lead

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should identify primary-action emphasis as the clearest visible lever and explain why it leads before spacing, layout, or novelty.
- This is now the cleanest test that the skill can commit to one action-hierarchy lever inside a broader sameness diagnosis.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main visible-lever anti-sameness guard.

---

## AU-16 — Crowded but Consistent, Grouping Should Lead

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now separate grouping rhythm from broader layout or token work and choose grouping as the first visible lever.
- It should say clearly that crowded-but-consistent is not the same as broken foundations.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this case as a supporting lever-selection check, but do not promote it ahead of the sharper anti-sameness and implementation-framed guards yet.

---

## RF-07 — Tokens Exist, But the UI Still Feels Wrong

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now avoid generic paired guidance and push harder toward one concrete inspection target.
- It is materially sharper than cycle 5 because the answer should no longer default to `hierarchy or state clarity` as a co-equal pair.
- The remaining weakness is that the prompt itself is still broad enough to leave a small amount of justified softness when no sharper visible signal is supplied.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `partial pass`

### Strongest miss
- The answer may still need one more level of prompt specificity before the sharpest visible lever is completely unambiguous.

### Recommended next action
- Keep this case as a standing watch case, but treat the broader prioritization weakness as sufficiently reduced for the next roadmap shift.

---

## RF-09 — Tokens Exist, but State Contrast Should Lead First

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now commit to risky-vs-routine state contrast as the clearest first lever and explain why it outranks broader hierarchy cleanup.
- This is the sharpest implementation-framed test for avoiding adjacent lever hedging.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main implementation-framed visible-lever guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `AU-15`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`
- `RF-09`

Why this set:
- it preserves the low-evidence, hybrid-sensitive, developer-guidance, consequence-lens, and prioritization checks
- it now protects visible-lever commitment under both audit and implementation-framed prompts
- it stays compact enough to remain practical while replacing softer stress cases with sharper ones where useful

---

## Decision from cycle 6

Visible-lever selection is now strong enough to stop treating prioritization hardening as the top roadmap focus.

Keep `RF-07` as a standing watch case, but do not block the roadmap on making that prompt perfectly sharp under intentionally broad evidence.

The next high-leverage slice should return to Batch A distillation:
- translate the strongest researched system lessons into lighter runtime reference logic
- improve named-system borrowing guidance without making the runtime heavier
- keep the current lever-selection acceptance guards in place while doing that work

---

## Cycle 7 summary

### Scope used
- Slice 1 lookup distillation for:
  - `Carbon`
  - `PatternFly`
  - `Ant Design`
  - `Porsche Design System`
- named-system lookup cases:
  - `RF-10`
  - `RF-11`
  - `RF-12`

### Overall result
- 2 strong passes
- 1 partial pass
- 0 regressions

### Current top strengths
- named-system answers are more clearly framed around product fit and borrowing logic instead of prestige
- Ant Design is less likely to be treated as a universal default just because it is broad
- Porsche is now easier to use as a cautionary brand-led reference rather than a clone target

### Current top weakness
- the Carbon vs PatternFly boundary is better framed, but the hybrid-sensitive comparison can still sound slightly broader than necessary before the archetype lessons are tightened

---

## Cycle 7 — Lookup distillation cases

## RF-10 — Carbon vs PatternFly When the Product Is Still Mixed

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now describe the comparison as hybrid-sensitive, identify the strongest lean, and say what to borrow from the non-leading system.
- The likely remaining weakness is that the explanation may still need sharper archetype-boundary shorthand so the answer feels bounded rather than merely careful.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `partial pass`

### Strongest miss
- The answer can still be slightly too broad about why the secondary force matters instead of making the boundary feel crisp.

### Recommended next action
- Keep this as the main Slice 2 boundary-shorthand stress case.

---

## RF-11 — Ant Design Is Broad, but Should It Lead?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now explain that Ant Design is useful for workflow-heavy business UI coverage without treating that coverage as proof of universal fit.
- It should turn breadth into a tradeoff discussion rather than an endorsement.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as a supporting lookup guard, but do not promote it into the stable acceptance set ahead of the higher-signal boundary and caution cases yet.

---

## RF-12 — Porsche Feels Premium, but What Should We Borrow?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now treat Porsche as a brand-led cautionary borrowing reference and explain what is reusable without drifting into direct visual transplantation.
- This is materially sharper than earlier premium-reference behavior because the answer should now separate tone discipline from brand mimicry.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main brand-led cautionary borrowing guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `AU-15`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`
- `RF-09`
- `RF-12`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, developer-guidance, consequence-lens, and prioritization checks
- it now adds a high-signal brand-led cautionary borrowing guard
- it stays compact enough by keeping Ant Design as a support case rather than promoting every new lookup case at once

---

## Decision from cycle 7

Slice 1 lookup distillation materially improved named-system guidance without making the runtime heavier.

Do not add more lookup cards next by default.

The next high-leverage slice should tighten archetype-boundary explanation around:
- `Developer Toolkit / Platform` vs `Enterprise Workflow`
- hybrid-sensitive comparisons that need a strongest lean plus bounded secondary force
- brand-led systems with strong implementation layers

---

## Cycle 8 summary

### Scope used
- Slice 2 archetype-boundary lesson distillation
- focused cases:
  - `RF-06`
  - `RF-10`
  - `RF-12`

### Overall result
- 3 strong passes
- 0 regressions

### Current top strengths
- platform maturity is now easier to explain as a specific benefit rather than a generic default
- hybrid-sensitive comparisons are better bounded by strongest-lean and secondary-force language
- brand-led systems with strong tooling are less likely to be misread as platform-first

### Current top weakness
- no new top weakness displaced the current standing watch case; `RF-07` remains the main intentionally broad prompt that still deserves bounded caution

---

## Cycle 8 — Archetype-boundary explanation cases

## RF-06 — Carbon Feels Mature, But Is It Right?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now explain more cleanly what Carbon’s platform maturity actually buys and when that maturity is the wrong thing to borrow first.
- The answer should feel less prestige-driven and more explicit about workflow reality winning when patterns are still unstable.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as the main platform-maturity caution guard.

---

## RF-10 — Carbon vs PatternFly When the Product Is Still Mixed

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now make the hybrid boundary feel sharper by stating the strongest lean, the bounded secondary force, and what evidence would break the tie more clearly.
- This is materially stronger than cycle 7 because the answer should no longer sound merely careful; it should sound decision-useful and bounded.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main Batch A hybrid-boundary lookup guard.

---

## RF-12 — Porsche Feels Premium, but What Should We Borrow?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now explain more cleanly that strong tooling and implementation support do not erase Porsche’s brand-led primary shaping force.
- It should keep the borrowing guidance focused on restraint, tone, and system discipline rather than visible luxury cues.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as the main brand-led boundary guard introduced by Batch A distillation.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `AU-15`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`
- `RF-09`
- `RF-10`
- `RF-12`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, developer-guidance, consequence-lens, and prioritization checks
- it now adds both a sharper Batch A hybrid-boundary guard and a high-signal brand-led cautionary borrowing guard
- it keeps the acceptance set selective by leaving Ant Design as a supporting lookup case rather than promoting every new reference case

---

## Decision from cycle 8

The first Batch A distillation cluster is now stable enough in runtime references.

The anchor set that should lead the next distillation wave is now clear:
- `Carbon`
- `PatternFly`
- `Ant Design`
- `Porsche Design System`

The next high-leverage slice should expand the second runtime contrast set rather than revisit general runtime hardening:
- add the next small cluster of researched systems to the lookup layer
- keep the current archetype-boundary shorthand and acceptance guards intact
- continue avoiding workbook-style runtime heaviness

---

## Cycle 9 summary

### Scope used
- second contrast-set lookup distillation for:
  - `Clarity Design System`
  - `Elastic UI Framework`
  - `Gestalt`
  - `Backpack`
- named-system lookup cases:
  - `RF-13`
  - `RF-14`
  - `RF-15`

### Overall result
- 2 strong passes
- 1 partial pass
- 0 regressions

### Current top strengths
- brand-led references with reusable code layers are easier to explain without drifting into direct visual transplantation
- Backpack is now more usable as a cautionary reference for accessibility, localisation, and repeated high-volume journey discipline
- the second lookup wave preserves the product-fit and anti-prestige posture established in the first Batch A cluster

### Current top weakness
- the Clarity versus EUI boundary is decision-useful, but it still remains slightly broader than the sharper Carbon-versus-PatternFly comparison guard

---

## Cycle 9 — Second contrast-set lookup cases

## RF-13 — Clarity or EUI for a Dense Internal Product

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should distinguish workflow-first enterprise clarity from platform-first composability instead of flattening both references into the same enterprise bucket.
- It should choose the strongest lean and explain what to borrow from the non-leading reference.
- The remaining weakness is that the boundary can still sound slightly broader than necessary when both implementation support and workflow density are present at once.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `1`
- Compactness / non-bloat: `2`
- Total: `13 / 14`
- Result: `partial pass`

### Strongest miss
- The answer can still hover a little between platform composability and workflow clarity instead of making the boundary feel as crisp as the strongest existing hybrid guards.

### Recommended next action
- Keep this as a support case for the second lookup wave, but do not promote it into the stable acceptance set ahead of sharper hybrid-boundary guards.

---

## RF-14 — Gestalt for a Brand-Led Product, but What Actually Transfers?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should treat Gestalt as a brand-led consumer reference with bounded platform support rather than as a generic polished system.
- It should explain that coherence, accessible guidance, and restrained system expression are reusable, while Pinterest-shaped discovery cues are not.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as a supporting brand-led lookup guard, but rely on `RF-12` and `RF-15` as the stronger acceptance-set anchors.

---

## RF-15 — Backpack Feels Friendly, but Is That the Right Borrow?

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now explain that Backpack is useful less for travel aesthetics and more for accessibility, localisation, and repeated-journey clarity.
- It should clearly separate transferable discipline from Skyscanner-specific product assumptions.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main accessibility-plus-localisation cautionary borrowing guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `AU-15`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`
- `RF-09`
- `RF-10`
- `RF-12`
- `RF-15`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, developer-guidance, consequence-lens, prioritization, and Batch A lookup guards
- it now adds one high-signal consumer-system cautionary borrowing case that tests accessibility and localisation as system inputs rather than surface traits
- it stays selective by keeping `RF-13` and `RF-14` as support cases instead of promoting every new lookup prompt

---

## Decision from cycle 9

The second Batch A contrast set is now useful enough to keep in the runtime lookup layer without expanding the skill surface.

The new contrast anchors that now have runtime value are:
- `Clarity Design System`
- `Elastic UI Framework`
- `Gestalt`
- `Backpack`

The current roadmap should not return to generic runtime hardening by default.

The next high-leverage choice should be one of:
- a final small Batch A lookup wave only if the next systems add genuinely new contrast, not more of the same
- or a pause to assess whether the runtime lookup layer is now broad enough and future work should shift back to higher-signal distillation only

---

## Cycle 10 summary

### Scope used
- confidence-display hardening
- confidence readability checks on:
  - `AU-01`
  - `RF-02`
  - `RF-16`

### Overall result
- 3 strong passes
- 0 regressions

### Current top strengths
- end-user confidence lines are now easier to read without losing the internal `E0-E3` discipline
- one-screen and hybrid-sensitive cases can stay bounded without sounding cryptic
- URL-only reference reads now have a clear page-level confidence pattern instead of relying on implicit shorthand

### Current top weakness
- no major new weakness displaced the current standing watch cases

---

## Cycle 10 — Confidence-display cases

## AU-01 — Vague Improve Request With One-Screen Evidence

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now keep the answer screen-level and express confidence in a short end-user-readable form such as `E1 - low, partial screen`.
- This makes the boundedness easier to understand without adding a legend or longer explanation.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as the main one-screen confidence-readability guard.

---

## RF-02 — Hybrid-Sensitive Platform Comparison

### Expected primary mode
- Comparative Reference Read

### Observed behavior
- The current runtime should now express bounded confidence in a compact form such as `E2 - medium, still hybrid-sensitive` rather than using unexplained shorthand.
- This keeps the answer decision-useful while still clearly non-final.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Keep this as the main hybrid-sensitive confidence-display guard.

---

## RF-16 — URL-Only Design-System Reference Page

### Expected primary mode
- UI / DS Audit

### Observed behavior
- The current runtime should now keep the read page-level and express confidence in a short form such as `E1 - low, one page only`.
- This makes the limitation explicit for end-users without bloating the answer.

### Score by rubric
- Routing correctness: `2`
- Constraints-first behavior: `2`
- Pattern-first behavior: `2`
- Evidence precedence: `2`
- Confidence honesty: `2`
- Practical Smart Suggestions: `2`
- Compactness / non-bloat: `2`
- Total: `14 / 14`
- Result: `pass`

### Strongest miss
- No major miss at the current evaluation depth.

### Recommended next action
- Promote this case into the stable acceptance set as the main URL-only confidence-readability guard.

---

## Stable acceptance set

Rerun these cases after every future runtime hardening slice:

- `AF-01`
- `AF-03`
- `AU-01`
- `AU-02`
- `AU-05`
- `AU-07`
- `AU-08`
- `AU-09`
- `AU-11`
- `AU-13`
- `AU-14`
- `AU-15`
- `RF-02`
- `RF-03`
- `RF-05`
- `RF-06`
- `RF-08`
- `RF-09`
- `RF-10`
- `RF-12`
- `RF-15`
- `RF-16`

Why this set:
- it preserves the existing low-evidence, hybrid-sensitive, developer-guidance, consequence-lens, prioritization, and Batch A lookup guards
- it now adds one URL-only page-level confidence-readability guard
- it keeps the set selective by reusing existing one-screen and hybrid-sensitive cases instead of adding a large new confidence subset

---

## Decision from cycle 10

The runtime confidence scale should stay `E0-E3`, but end-user answers should always express it in short inline language.

Default mapping:
- `E0 - very low`
- `E1 - low`
- `E2 - medium`
- `E3 - high`

When evidence is thin or bounded, the runtime should add one tiny qualifier if useful, such as:
- `one page only`
- `partial screen`
- `still hybrid-sensitive`

Do not add a mandatory legend or footnote by default.

---

## Forward-test example

This is a contributor-side example readout from the forward-test playbook.
It is not a benchmark cycle.

### FT-01 — URL-only reference page smoke check

- Forward-test name: `FT-01`
- Prompt used: `RF-16` URL-only design-system reference page prompt
- Runtime target: installed `.agents/skills/ds-intent-analyzer/`
- Observed primary mode: `UI / DS Audit`
- Observed confidence line: `Confidence: E1 - low, one page only`
- Strongest pass signal: the answer stays page-level, names what the page signals, and says what it would not overclaim
- Strongest miss: if the answer starts inferring full-system maturity or token logic from the page, mark the run down immediately
- Outcome: `pass`

What this example proves:
- the installed runtime copy is the default forward-test target
- one real-world developer prompt can be checked without exact-prose matching
- confidence readability and bounded-evidence behavior can be logged in one compact readout
