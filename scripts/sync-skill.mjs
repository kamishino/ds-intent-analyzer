import { cp, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ensureDir, getRepoPaths, parseSyncArgs, pathExists } from "./install-skill.mjs";

const skillName = "ds-intent-analyzer";
const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const sourceSkillDir = path.join(repoRoot, "resources", "skills", skillName);

export async function syncSkill(projectDir) {
  const { targetRoot, installedSkillDir } = getRepoPaths(projectDir);

  if (!(await pathExists(sourceSkillDir))) {
    throw new Error(`Canonical skill source is missing: ${sourceSkillDir}`);
  }

  await ensureDir(path.dirname(installedSkillDir));

  if (await pathExists(installedSkillDir)) {
    await rm(installedSkillDir, { recursive: true, force: true });
  }

  await cp(sourceSkillDir, installedSkillDir, { recursive: true });

  console.log(`Project root: ${targetRoot}`);
  console.log(`Canonical source: ${sourceSkillDir}`);
  console.log(`Synced copy: ${installedSkillDir}`);
  console.log("Sync mode: exact mirror");
}

export async function runSyncCommand(args) {
  const projectDir = parseSyncArgs(args);
  await syncSkill(projectDir);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  runSyncCommand(process.argv.slice(2)).catch((error) => {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  });
}
