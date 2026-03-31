# Multi-Agent Coordination v2

## Purpose

This file defines a bounded, explicit multi-agent coordination contract for `ds-intent-analyzer`.

Use it when Codex or another agent runtime wants to split a design-system task into multiple workers without turning the skill into an orchestration framework.

This is:
- Codex-first
- transparent
- lightweight
- analysis-first

This is not:
- a hidden state layer
- a general multi-agent scheduler
- a license for multiple agents to set direction at once
- a multi-builder workflow

---

## Default rule

Use one lead agent per step.

The lead agent owns:
- request routing
- synthesis
- final recommendation
- confidence
- next move
- any project-memory capture offer

Do not let multiple agents co-lead direction-setting.

## Terminology

Use these terms consistently:
- `Lead agent` = the agent that owns routing, synthesis, confidence, and next move
- `Sub-agents` = bounded analysis sidecars
- `Multi-agent coordination` = the visible contract that governs the lead agent plus any bounded sidecars

`Sub-agents` are not a separate product feature in this skill.
They are the bounded worker pattern inside `Multi-agent coordination`.

---

## When bounded multi-agent coordination is allowed

Default to one lead agent per step.
Do not split work just because parallelism is available.

Use bounded multi-agent coordination only when:
- the user explicitly asks for multiple agents or sub-agents
- the task clearly decomposes into bounded analysis sidecars
- multiple bounded reads would materially sharpen the answer even without an explicit user request

Good uses:
- one sidecar reads evidence or artifacts
- one sidecar scans the repo or codebase
- one sidecar checks reference fit
- one sidecar compares current review state against prior audit or review context

The lead agent then merges those observations into one decision.

## Proactive trigger ladder

Allow proactive sidecars only when at least one of these is true:
- mixed evidence spans current artifacts, repo surfaces, and bounded references
- fresh evidence conflicts with stored audit, review, or project-memory context
- recurring review needs current-vs-prior drift comparison
- design-context needs repo or code-mapping help
- repo-audit follow-through needs evidence read plus codebase scan
- a comparison ask needs bounded reads of current product evidence and multiple candidate references

If none of those are true, keep the step single-agent.
Treat proactive visible coordination as supported target behavior, not as a guaranteed transcript outcome on every qualifying prompt.

## No-spawn guards

Do not spawn sidecars when:
- the prompt is a thin brief or a one-screen or one-page read
- the task is still early `Intent Analysis` or `Formation Recommendation` without real artifacts
- one lead answer is already enough
- the current step is already moving into frontend build
- the proposed split would force sidecars to invent missing facts, product constraints, or direction

---

## Allowed sidecars in v2

Parallel sidecars may do bounded analysis such as:
- evidence or artifact read
- repo or codebase scan
- reference-fit check
- drift or comparison check
- design-context mapping

Recommended role names:
- `Evidence reader`
- `Repo/codebase scanner`
- `Reference-fit checker`
- `Drift/comparison checker`
- `Design-context mapper`

Sidecars should return observations, not final direction.
Do not duplicate the same role unless the user explicitly asks for a broader split.
Cap proactive coordination at `3` sidecars per step.

---

## Disallowed parallelism in v1

Do not allow:
- multiple direction-setting agents competing at once
- multiple builders inventing different directions
- hidden shared state
- implicit merge behavior the user cannot see

If the task is already moving into frontend implementation, finish lead-agent synthesis first and use the separate `Frontend handoff` contract after that.

---

## Coordination packet

When multi-agent coordination is justified, keep the shared state visible through a compact packet with:
- `Lead job`
- `Why sidecars now`
- `Parallel sidecars allowed`
- `Shared evidence`
- `Locked truths`
- `Open questions`
- `Do not decide`
- `Do not invent`
- `Merge expectation`
- `Recommended next lead`

This packet exists so humans and agents can see:
- who owns the decision
- why the step is split at all
- what parallel work is actually allowed
- what must not be invented
- how the merge will happen

---

## Sidecar limits

Sidecars must not decide:
- the final recommendation
- the locked direction
- the confidence line
- project-memory capture

Sidecars must not invent:
- new vibe or brand direction
- new product constraints
- new screen-level or workflow specifics that were never grounded

---

## Merge and precedence

Sidecars return bounded observations.
The lead agent synthesizes the final decision.

If sidecars conflict materially:
- lower confidence, or
- ask for one tie-break artifact or one repeated-job clue

Do not force a fake clean merge.
If the lead agent can resolve the task cleanly after the first bounded read, collapse back to single-agent synthesis instead of keeping sidecars alive for ceremony.

Use this precedence order:
1. fresh current evidence
2. accepted current-step analyzer decisions and current-state audit artifacts
3. accepted project memory and recurring context
4. bounded reference guidance

Do not let later layers override earlier ones silently.

---

## Relationship to frontend build

Multi-agent analysis and frontend build should not co-lead the same step.

Use this sequence:
1. lead analyzer plus bounded sidecars
2. lead-agent synthesis
3. `Frontend handoff` only if the direction is stable enough for build

If the direction is still unresolved:
- do not hand off to build yet
- do not let a build agent invent the missing direction

---

## Final rule

This contract exists to help Codex use more than one agent safely.

It should make collaboration more explicit, not more magical.
