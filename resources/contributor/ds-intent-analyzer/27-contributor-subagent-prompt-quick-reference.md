# Sub-Agent Prompt Quick Reference

## Purpose

This file gives maintainers compact prompt shapes for validating bounded sub-agent behavior in `ds-intent-analyzer`.

Use it with:
- fresh threads
- the installed runtime at `.agents/skills/ds-intent-analyzer/`
- raw contributor prompt bundles only

Do not pass:
- expected answers
- intended fixes
- prior QA conclusions

This file is contributor-facing only.
It is not part of the shipped runtime bundle.

---

## Default rule

Start with the original contributor `Prompt bundle`.
Only add one of the prompt suffixes below when you are intentionally testing explicit user-requested or forced single-agent behavior.

For proactive checks, keep the original prompt bundle unchanged.

---

## Explicit user-requested sub-agents

Use this when the user explicitly wants multiple agents:

```text
Use multiple sub-agents if helpful, but keep the work bounded.
I still want one lead recommendation with visible coordination.
```

Recommended checks:
- `AF-01 + multi-agent follow-up`
- `AU-01 + multi-agent follow-up`
- `PF-02 + frontend-skill`

Expected read:
- one lead agent owns the answer
- sidecars stay analysis-only
- `Multi-agent coordination` appears only if sidecars are actually useful

---

## Proactive sidecars on mixed evidence

Use this when the runtime should decide on its own whether bounded sidecars are justified.

Prompt shape:
- use the original contributor `Prompt bundle` only
- do not mention sub-agents, delegation, or orchestration

Recommended checks:
- `AU-24`
- `AU-25`
- `RF-21`
- `AU-21` or `AU-22`

Expected read:
- sidecars appear only when the task has multiple bounded reads that materially sharpen the answer
- the packet names the actual reason in `Why sidecars now`
- the packet names the actual sidecar roles used

---

## Forced single-agent guard

Use this when the case should stay single-agent even if parallelism is available:

```text
Keep this single-agent unless the task is truly blocked without sidecars.
```

Recommended checks:
- `RF-16`
- `AF-01`

Expected read:
- no `Multi-agent coordination` packet
- no hidden sidecars
- one lead answer stays enough for the task
