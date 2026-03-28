import { access, cp, mkdir, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const skillName = "ds-intent-analyzer";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const sourceSkillDir = path.join(repoRoot, "resources", "skills", skillName);

export const projectBriefTemplate = `# Project Brief

This file is the human-facing product brief for the project using the installed \`${skillName}\` skill.
Keep it curated and durable. Replace the placeholders with project-specific truths when ready.

## Product Summary
- Product: Describe the product or interface this project needs help analyzing.
- Primary user: Describe the people this project serves.
- Core outcome: Describe what better design-system or UI decisions should improve here.

## Current Priorities
- Priority 1: The most important product or interface goal right now.
- Priority 2: The next goal that still materially matters.
- Priority 3: The secondary goal that should not be lost.

## Architecture Guardrails
- Guardrail 1: Record durable UX or system constraints here when they should guide future work.
- Guardrail 2: Keep recurring anti-patterns and cautions here, not in task plans.
- Guardrail 3: Keep this file curated and human-readable rather than turning it into a log.

## Open Questions
- Question 1: What product or workflow fact is still unclear?
- Question 2: What tradeoff needs stronger evidence before it becomes a durable decision?

## Recent Decisions
- Decision 1: Capture stable choices that should guide future analysis.
- Decision 2: Record only durable conclusions, not temporary task notes.
`;

export function parseProjectArg(args, commandName = "install") {
  let projectPath = ".";

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--project") {
      const value = args[index + 1];
      if (!value) {
        throw new Error("Missing value for --project");
      }
      projectPath = value;
      index += 1;
      continue;
    }

    throw new Error(`Unknown ${commandName} option: ${arg}`);
  }

  return path.resolve(projectPath);
}

export async function pathExists(targetPath) {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

export async function ensureDir(targetPath) {
  await mkdir(targetPath, { recursive: true });
}

export function getRepoPaths(projectDir) {
  const targetRoot = path.resolve(projectDir);
  const localDir = path.join(targetRoot, ".local");
  const plansDir = path.join(localDir, "plans");
  const doneDir = path.join(plansDir, "done");
  const projectBriefPath = path.join(localDir, "project.md");
  const installedSkillDir = path.join(targetRoot, ".agents", "skills", skillName);

  return {
    targetRoot,
    localDir,
    plansDir,
    doneDir,
    projectBriefPath,
    installedSkillDir
  };
}

export async function installSkill(projectDir) {
  const { targetRoot, localDir, plansDir, doneDir, projectBriefPath, installedSkillDir } = getRepoPaths(projectDir);

  if (!(await pathExists(sourceSkillDir))) {
    throw new Error(`Canonical skill source is missing: ${sourceSkillDir}`);
  }

  await ensureDir(localDir);
  await ensureDir(plansDir);
  await ensureDir(doneDir);
  await ensureDir(path.dirname(installedSkillDir));

  let wroteProjectBrief = false;
  if (!(await pathExists(projectBriefPath))) {
    await writeFile(projectBriefPath, projectBriefTemplate, "utf8");
    wroteProjectBrief = true;
  }

  let copiedSkill = false;
  if (await pathExists(installedSkillDir)) {
    console.log(`Installed skill already exists at ${installedSkillDir}`);
  } else {
    await cp(sourceSkillDir, installedSkillDir, { recursive: true });
    copiedSkill = true;
  }

  console.log(`Project root: ${targetRoot}`);
  console.log(`Canonical source: ${sourceSkillDir}`);
  console.log(`Installed copy: ${installedSkillDir}`);
  console.log(`Project brief: ${wroteProjectBrief ? "created" : "preserved"}`);
  console.log(`Skill copy: ${copiedSkill ? "installed" : "preserved"}`);
}

export async function runInstallCommand(args) {
  const projectDir = parseProjectArg(args, "install");
  await installSkill(projectDir);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runInstallCommand(process.argv.slice(2)).catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  });
}
