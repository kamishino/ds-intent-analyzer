import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(scriptDir, "..");

function parseRootArg(args) {
  let rootDir = defaultRoot;

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--root") {
      const value = args[index + 1];
      if (!value) {
        throw new Error("Missing value for --root");
      }
      rootDir = path.resolve(value);
      index += 1;
      continue;
    }

    throw new Error(`Unknown validator option: ${arg}`);
  }

  return rootDir;
}

async function assertExists(targetPath, label, failures, checks) {
  try {
    await access(targetPath, constants.F_OK);
    checks.push(`OK   ${label}`);
  } catch {
    failures.push(`Missing ${label}: ${targetPath}`);
  }
}

async function exists(targetPath) {
  try {
    await access(targetPath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main(args) {
  const rootDir = parseRootArg(args);
  const failures = [];
  const checks = [];

  const requiredPaths = [
    ["root README", path.join(rootDir, "README.md")],
    ["root AGENTS", path.join(rootDir, "AGENTS.md")],
    ["package.json", path.join(rootDir, "package.json")],
    ["package-lock.json", path.join(rootDir, "package-lock.json")],
    ["CLI entrypoint", path.join(rootDir, "bin", "ds-intent-analyzer.mjs")],
    ["install script", path.join(rootDir, "scripts", "install-skill.mjs")],
    ["sync script", path.join(rootDir, "scripts", "sync-skill.mjs")],
    ["validator script", path.join(rootDir, "scripts", "validate-skill.mjs")],
    ["project brief", path.join(rootDir, ".local", "project.md")],
    ["plans directory", path.join(rootDir, ".local", "plans")],
    ["done plans directory", path.join(rootDir, ".local", "plans", "done")],
    ["canonical SKILL", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "SKILL.md")],
    ["canonical skill README", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "README.md")],
    ["canonical skill agent metadata", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "agents", "openai.yaml")],
    ["runtime framework reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "01-runtime-framework.md")],
    ["runtime skill contract reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "02-runtime-skill-contract.md")],
    ["runtime signal dictionary reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "03-runtime-signal-dictionary.md")],
    ["runtime pattern rules reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "04-runtime-pattern-rules.md")],
    ["runtime foundation directories reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "05-runtime-foundation-directories.md")],
    ["runtime output templates reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "06-runtime-output-templates.md")],
    ["runtime reference lookup reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "07-runtime-reference-lookup.md")],
    ["runtime archetype lessons reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "08-runtime-archetype-lessons.md")],
    ["runtime system architecture reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "09-runtime-system-architecture.md")],
    ["runtime project memory pack reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "10-runtime-project-memory-pack.md")],
    ["contributor dataset roadmap", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "01-contributor-dataset-roadmap.md")],
    ["contributor memory architecture", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "02-contributor-memory-architecture.md")],
    ["contributor naming conventions", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "03-contributor-naming-conventions.md")],
    ["contributor runtime evaluation guide", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "04-contributor-runtime-evaluation.md")],
    ["contributor app-fit cases", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "05-contributor-app-fit-cases.md")],
    ["contributor audit cases", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "06-contributor-audit-cases.md")],
    ["contributor reference cases", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "07-contributor-reference-cases.md")],
    ["contributor runtime evaluation results", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "08-contributor-runtime-evaluation-results.md")],
    ["contributor product doctrine", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "09-contributor-product-doctrine.md")],
    ["contributor workbook distillation bridge", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "10-contributor-workbook-distillation-bridge.md")],
    ["contributor UI effect lens", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "11-contributor-ui-effect-lens.md")],
    ["contributor registry schema", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "12-contributor-registry-schema.md")],
    ["contributor evidence packet schema", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "13-contributor-evidence-packet-schema.md")]
  ];

  await Promise.all(requiredPaths.map(([label, targetPath]) => assertExists(targetPath, label, failures, checks)));

  const packageJsonPath = path.join(rootDir, "package.json");
  try {
    const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8"));

    if (packageJson.name !== "ds-intent-analyzer") {
      failures.push(`Expected package name "ds-intent-analyzer" but found "${packageJson.name}"`);
    } else {
      checks.push("OK   package name");
    }

    if (packageJson.private !== true) {
      failures.push("Expected package.json to mark the package as private");
    } else {
      checks.push("OK   private package mode");
    }

    if (!/^\d+\.\d+\.\d+$/.test(packageJson.version)) {
      failures.push(`Expected package.json version to use SemVer core format, found "${packageJson.version}"`);
    } else {
      checks.push("OK   package version format");
    }

    if (packageJson.type !== "module") {
      failures.push('Expected package.json to set "type" to "module"');
    } else {
      checks.push("OK   ESM package type");
    }

    if (packageJson.bin?.["ds-intent-analyzer"] !== "./bin/ds-intent-analyzer.mjs") {
      failures.push('Expected package.json bin.ds-intent-analyzer to equal "./bin/ds-intent-analyzer.mjs"');
    } else {
      checks.push("OK   CLI bin mapping");
    }

    const scripts = packageJson.scripts ?? {};
    if (
      !scripts.validate ||
      !scripts["validate:structure"] ||
      !scripts["install:local"] ||
      !scripts["sync:local"]
    ) {
      failures.push("Expected package.json scripts to include validate, validate:structure, install:local, and sync:local");
    } else {
      checks.push("OK   maintainer scripts");
    }
  } catch (error) {
    failures.push(`Unable to read package.json: ${error instanceof Error ? error.message : String(error)}`);
  }

  const agentsPath = path.join(rootDir, "AGENTS.md");
  const readmePath = path.join(rootDir, "README.md");

  try {
    const agentsContent = await readFile(agentsPath, "utf8");
    if (!agentsContent.includes("resources/skills/ds-intent-analyzer/")) {
      failures.push("AGENTS.md must identify the canonical skill source directory");
    } else {
      checks.push("OK   AGENTS source-of-truth contract");
    }
    if (
      !agentsContent.includes("SemVer Workflow: enabled") ||
      !agentsContent.includes("Version Files: package.json, package-lock.json") ||
      !agentsContent.includes("Release History: separate-release-commit-and-tag")
    ) {
      failures.push("AGENTS.md must define the SemVer-enabled release policy");
    } else {
      checks.push("OK   AGENTS release policy");
    }
    if (
      !agentsContent.includes("npm run validate") ||
      !agentsContent.includes("npm run sync:local") ||
      !agentsContent.includes("version-closeout.mjs")
    ) {
      failures.push("AGENTS.md must reference repo-local validation and release commands");
    } else {
      checks.push("OK   AGENTS command surface");
    }
  } catch (error) {
    failures.push(`Unable to read AGENTS.md: ${error instanceof Error ? error.message : String(error)}`);
  }

  const runtimeRoot = path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references");
  const oldShippedPaths = [
    path.join(runtimeRoot, "01-ds-analyzer-scope-v2.md"),
    path.join(runtimeRoot, "02-ds-agent-skill-spec-v2.md"),
    path.join(runtimeRoot, "09-ds-memory-architecture-spec-v1.md"),
    path.join(runtimeRoot, "10-ds-skill-naming-convention-spec-v1.md"),
    path.join(runtimeRoot, "design-system-dataset-roadmap-v2.md")
  ];

  for (const oldPath of oldShippedPaths) {
    if (await exists(oldPath)) {
      failures.push(`Contributor-only or deprecated runtime file must not remain in shipped skill tree: ${oldPath}`);
    }
  }

  if (failures.length === 0) {
    checks.push("OK   production-only runtime reference tree");
  }

  try {
    const readmeContent = await readFile(readmePath, "utf8");
    if (!readmeContent.includes("ds-intent-analyzer")) {
      failures.push("README.md must use the actual product identity");
    } else {
      checks.push("OK   README product identity");
    }
    if (
      !readmeContent.includes("node ./bin/ds-intent-analyzer.mjs install") ||
      !readmeContent.includes("node ./bin/ds-intent-analyzer.mjs sync")
    ) {
      failures.push("README.md must document the local install and sync commands");
    } else {
      checks.push("OK   README install and sync commands");
    }
  } catch (error) {
    failures.push(`Unable to read README.md: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      console.error(`FAIL ${failure}`);
    }
    process.exit(1);
  }

  for (const check of checks) {
    console.log(check);
  }
  console.log(`Validation passed for ${rootDir}`);
}

main(process.argv.slice(2)).catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
