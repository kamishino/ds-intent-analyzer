# Client-Repo Dogfood Pass v1

## Purpose

This protocol proves that the installed `ds-intent-analyzer` runtime is useful in a clean downstream client repo, not only inside this source repo.

Use it when a maintainer wants to:
- validate the package in a clean temp client repo
- confirm that `npx ds-intent-analyzer install` is enough for downstream use
- check that the installed runtime behaves like the source-repo dogfood results
- log external-proof outcomes without opening a runtime patch too early

This is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Default target shape

Use clean temp repos outside this workspace.

Why:
- they are reproducible
- they avoid source-repo context leakage
- they make install-time and runtime assumptions visible

Default client-repo protocol:
1. Create a clean temp repo.
2. Run `git init`.
3. Run `npm init -y`.
4. Install the package from local path:
   - `npm install --save-dev <path-to-ds-intent-analyzer-repo>`
5. Install the skill:
   - `npx ds-intent-analyzer install`
6. Verify:
   - `.agents/skills/ds-intent-analyzer/` exists
   - no extra installed skills appear under `.agents/skills/`
7. Run the scenario through the installed runtime in that temp repo.
8. Record one compact readout.

Do not use the source repo as the runtime target for this pass.

---

## Default scenario pack

Use these two scenarios unless a slice clearly needs a different external-proof surface.

### CD-01 — Workflow-Heavy Internal Product Brief

Prompt bundle:

```text
Use ds-intent-analyzer for this.

We are shaping an internal exceptions workspace used by support leads and risk reviewers.
The product is dense: queues, evidence comparison, escalation, risky approvals, and status-heavy review work.
We need a shared design-system direction that feels credible and calm without becoming cold or generic enterprise admin UI.
What should we stabilize first, and what should a builder do next?
```

Expected primary mode:
- `Formation Recommendation`

Expected success:
- feels like real builder-facing direction in a clean client repo
- gives a foundation-first stabilization order
- keeps confidence bounded and readable
- ends with one useful next move

### CD-02 — Healthcare Booking Mixed Audit With Reference Donor

Prompt bundle:

```text
Use ds-intent-analyzer for this.

Product note:
- healthcare booking app for finding providers, choosing time slots, and confirming appointments
- brand color is green

Artifact summary:
- the current product still looks mostly like Bootstrap v4
- cards, forms, buttons, and step sections feel flat and generic
- booking steps and trust cues do not lead clearly
- spacing rhythm feels inconsistent between search, provider cards, and booking details
- green is present, but mostly as a flat accent rather than a meaningful semantic or tonal system
- the overall UI feels mismatched to healthcare booking: too generic, not calm or credible enough

Reference:
- the team keeps pointing at Seeds by Sprout Social: https://seeds.sproutsocial.com/

User ask:
Please audit our current direction.
Tell me:
- what feels off in the current UI
- what from Sprout is actually transferable
- what we should not copy
- what we should stabilize first
```

Expected primary mode:
- `UI / DS Audit`

Expected success:
- audits the current UI first
- treats Sprout as a bounded donor, not a clone target
- explains what transfers and what does not
- does not emit `Audit handoff` in the base case

### CD-02 + repo-audit follow-up

Follow-up prompt:

```text
Now tell another agent what to audit first in the repo before we change tokens or components.
```

Expected success:
- emits a bounded `Audit handoff`
- names one first repo inspection slice
- keeps `Frontend handoff` out of scope

---

## Readout shape

Use this compact shape for each scenario:

```text
- Runtime target:
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
- the installed runtime was the surface actually used

---

## Acceptance rule

Treat the dogfood pass as healthy only if:
- the package installs cleanly in temp client repos
- the installed runtime is the one being exercised
- `CD-01` feels like practical builder guidance rather than source-repo dogfood prose
- `CD-02` stays audit-first and donor-bounded
- `CD-02 + follow-up` emits bounded `Audit handoff`
- no source-repo-local citations or maintainer-context leakage appear

If only isolated misses appear:
- log them
- keep the slice validation-only

If a repeated miss appears across the scenario pack:
- log it
- open a focused runtime-hardening plan afterward instead of patching ad hoc

---

## Final rule

This protocol exists to prove downstream usefulness.
It should not become a back door for unbounded runtime growth or one-off ad hoc debugging.
