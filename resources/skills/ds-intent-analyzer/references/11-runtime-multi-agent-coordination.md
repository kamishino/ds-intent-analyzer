# Multi-Agent Coordination v1

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

---

## When bounded multi-agent coordination is allowed

Use it only when:
- the user explicitly asks for multiple agents or sub-agents, or
- the task clearly decomposes into bounded analysis sidecars

Good v1 uses:
- one sidecar reads evidence or artifacts
- one sidecar scans the current UI or codebase
- one sidecar checks reference fit

The lead agent then merges those observations into one decision.

---

## Allowed sidecars in v1

Parallel sidecars may do bounded analysis such as:
- evidence or artifact read
- current UI or codebase scan
- reference lookup

Sidecars should return observations, not final direction.

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

Use this precedence order:
1. current evidence
2. locked analyzer decisions from the current accepted answer
3. accepted project memory
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
