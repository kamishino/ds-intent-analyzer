import { access, readFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { execFile } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { buildRuntimeIndex } from "./build-runtime-index.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(scriptDir, "..");
const execFileAsync = promisify(execFile);
const expectedRecurringReviewShell = [
  "TL;DR",
  "Current health",
  "Biggest drift",
  "Keep",
  "Fix next",
  "Confidence",
  "Next review action"
];
const requiredReferenceCardKeys = [
  "name",
  "best_used_for",
  "likely_posture",
  "likely_archetype",
  "strongest_reusable_lesson",
  "borrow_carefully",
  "do_not_copy_blindly"
];

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

function parseSimpleFrontmatter(content, label) {
  const frontmatterMatch = content.match(/^(?:\uFEFF)?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatterMatch) {
    throw new Error(`${label} must start with valid --- frontmatter delimiters`);
  }

  const data = {};
  const lines = frontmatterMatch[1].split(/\r?\n/);

  for (const [index, line] of lines.entries()) {
    if (line.trim() === "" || line.trimStart().startsWith("#")) {
      continue;
    }

    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) {
      throw new Error(`${label} has invalid frontmatter syntax on line ${index + 2}`);
    }

    const [, key, rawValue] = match;
    if (rawValue.length === 0) {
      throw new Error(`${label} frontmatter key "${key}" must not be empty`);
    }

    const isDoubleQuoted = rawValue.startsWith("\"") && rawValue.endsWith("\"");
    const isSingleQuoted = rawValue.startsWith("'") && rawValue.endsWith("'");

    if (isDoubleQuoted || isSingleQuoted) {
      data[key] = rawValue.slice(1, -1);
      continue;
    }

    if (/: /.test(rawValue)) {
      throw new Error(
        `${label} frontmatter key "${key}" contains an unquoted colon-space value; quote descriptive strings`
      );
    }

    data[key] = rawValue;
  }

  return data;
}

function parseSimpleNestedYaml(content, label) {
  const result = {};
  let activeSection = null;

  const lines = content.split(/\r?\n/);
  for (const [index, line] of lines.entries()) {
    if (line.trim() === "" || line.trimStart().startsWith("#")) {
      continue;
    }

    const topLevelMatch = line.match(/^([A-Za-z0-9_-]+):\s*$/);
    if (topLevelMatch) {
      const [, key] = topLevelMatch;
      if (Object.hasOwn(result, key)) {
        throw new Error(`${label} repeats top-level key "${key}" on line ${index + 1}`);
      }

      result[key] = {};
      activeSection = key;
      continue;
    }

    const nestedMatch = line.match(/^  ([A-Za-z0-9_-]+):\s*(.+)$/);
    if (nestedMatch) {
      if (!activeSection) {
        throw new Error(`${label} has nested content before any top-level section on line ${index + 1}`);
      }

      const [, key, rawValue] = nestedMatch;
      if (Object.hasOwn(result[activeSection], key)) {
        throw new Error(`${label} repeats key "${activeSection}.${key}" on line ${index + 1}`);
      }

      let value;
      if (
        (rawValue.startsWith("\"") && rawValue.endsWith("\"")) ||
        (rawValue.startsWith("'") && rawValue.endsWith("'"))
      ) {
        value = rawValue.slice(1, -1);
      } else if (rawValue === "true") {
        value = true;
      } else if (rawValue === "false") {
        value = false;
      } else {
        value = rawValue;
      }

      result[activeSection][key] = value;
      continue;
    }

    throw new Error(`${label} has unsupported YAML shape on line ${index + 1}`);
  }

  return result;
}

async function collectRelativeFilePaths(rootDir, currentDir = rootDir) {
  const entries = await readdir(currentDir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectRelativeFilePaths(rootDir, fullPath)));
      continue;
    }

    if (entry.isFile()) {
      files.push(path.relative(rootDir, fullPath).split(path.sep).join("/"));
    }
  }

  return files.sort();
}

async function getPackedFileList(rootDir) {
  const command =
    process.platform === "win32"
      ? ["cmd.exe", ["/d", "/s", "/c", "npm pack --json --dry-run"]]
      : ["npm", ["pack", "--json", "--dry-run"]];
  const [executable, args] = command;
  const { stdout } = await execFileAsync(executable, args, { cwd: rootDir });
  const payload = JSON.parse(stdout.trim());
  const packEntry = Array.isArray(payload) ? payload[0] : payload;

  if (!packEntry || !Array.isArray(packEntry.files)) {
    throw new Error("npm pack --json --dry-run did not return a files array");
  }

  return packEntry.files
    .map((entry) => entry.path)
    .sort();
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
    ["runtime-index generator script", path.join(rootDir, "scripts", "build-runtime-index.mjs")],
    ["validator script", path.join(rootDir, "scripts", "validate-skill.mjs")],
    ["project brief", path.join(rootDir, ".local", "project.md")],
    ["plans directory", path.join(rootDir, ".local", "plans")],
    ["done plans directory", path.join(rootDir, ".local", "plans", "done")],
    ["canonical SKILL", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "SKILL.md")],
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
    ["runtime multi-agent coordination reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "11-runtime-multi-agent-coordination.md")],
    ["runtime audit artifacts reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "12-runtime-audit-artifacts.md")],
    ["runtime recurring review reference", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "13-runtime-review-workflows.md")],
    ["runtime index reference helper", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "references", "14-runtime-index.json")],
    ["runtime audit packet template asset", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "assets", "audit-packet-template.md")],
    ["runtime audit evidence template asset", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "assets", "audit-evidence-template.md")],
    ["runtime review brief template asset", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "assets", "review-brief-template.md")],
    ["runtime review log template asset", path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "assets", "review-log-template.md")],
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
    ["contributor evidence packet schema", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "13-contributor-evidence-packet-schema.md")],
    ["contributor forward-test playbook", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "14-contributor-forward-test-playbook.md")],
    ["contributor forward-test results", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "15-contributor-forward-test-results.md")],
    ["contributor skill-organization conventions", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "16-contributor-skill-organization-conventions.md")],
    ["contributor platform-boundary study", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "17-contributor-platform-boundary-study.md")],
    ["contributor app-to-ds brief set", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "18-contributor-app-to-ds-fit-brief-set.md")],
    ["contributor client-repo dogfood pass", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "19-contributor-client-repo-dogfood-pass.md")],
    ["contributor distribution proof pass", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "20-contributor-distribution-proof-pass.md")]
    ,
    ["contributor runtime-index feasibility", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "21-contributor-runtime-index-feasibility.md")],
    ["contributor recurring-review pass", path.join(rootDir, "resources", "contributor", "ds-intent-analyzer", "22-contributor-recurring-review-pass.md")]
  ];

  await Promise.all(requiredPaths.map(([label, targetPath]) => assertExists(targetPath, label, failures, checks)));

  const packageJsonPath = path.join(rootDir, "package.json");
  const openAiMetadataPath = path.join(
    rootDir,
    "resources",
    "skills",
    "ds-intent-analyzer",
    "agents",
    "openai.yaml"
  );
  const expectedPackageFilesAllowlist = [
    "README.md",
    "LICENSE",
    "bin/",
    "scripts/install-skill.mjs",
    "scripts/sync-skill.mjs",
    "resources/skills/ds-intent-analyzer/"
  ];
  const expectedOpenAiMetadata = {
    interface: {
      display_name: "Design System Intent Analyzer",
      short_description: "Decision-first UI and design-system analysis, guidance, and careful comparison",
      brand_color: "#2563EB",
      default_prompt:
        "Use the ds-intent-analyzer skill to analyze this UI or design-system problem, recommend what to stabilize first, or compare references carefully."
    },
    policy: {
      allow_implicit_invocation: true
    }
  };
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

    const packageFiles = packageJson.files ?? [];
    if (
      !Array.isArray(packageFiles) ||
      packageFiles.length !== expectedPackageFilesAllowlist.length ||
      packageFiles.some((entry, index) => entry !== expectedPackageFilesAllowlist[index])
    ) {
      failures.push(
        `Expected package.json files allowlist to equal ${expectedPackageFilesAllowlist.join(", ")}`
      );
    } else {
      checks.push("OK   distributable files allowlist");
    }

    const scripts = packageJson.scripts ?? {};
    if (
      !scripts.validate ||
      !scripts["validate:structure"] ||
      !scripts["install:local"] ||
      !scripts["sync:local"] ||
      !scripts["build:index"]
    ) {
      failures.push("Expected package.json scripts to include validate, validate:structure, install:local, sync:local, and build:index");
    } else {
      checks.push("OK   maintainer scripts");
    }
  } catch (error) {
    failures.push(`Unable to read package.json: ${error instanceof Error ? error.message : String(error)}`);
  }

  const agentsPath = path.join(rootDir, "AGENTS.md");
  const readmePath = path.join(rootDir, "README.md");
  const skillPath = path.join(rootDir, "resources", "skills", "ds-intent-analyzer", "SKILL.md");

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
  const shippedSkillRoot = path.join(rootDir, "resources", "skills", "ds-intent-analyzer");
  const singularReferenceRoot = path.join(shippedSkillRoot, "reference");
  const assetsRoot = path.join(shippedSkillRoot, "assets");
  const oldShippedPaths = [
    path.join(runtimeRoot, "01-ds-analyzer-scope-v2.md"),
    path.join(runtimeRoot, "02-ds-agent-skill-spec-v2.md"),
    path.join(runtimeRoot, "09-ds-memory-architecture-spec-v1.md"),
    path.join(runtimeRoot, "10-ds-skill-naming-convention-spec-v1.md"),
    path.join(runtimeRoot, "design-system-dataset-roadmap-v2.md"),
    path.join(shippedSkillRoot, "assets", "runtime-index.json")
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
    const shippedEntries = await readdir(shippedSkillRoot, { withFileTypes: true });
    const extraTopLevelMarkdown = shippedEntries
      .filter((entry) => entry.isFile() && entry.name.toLowerCase().endsWith(".md") && entry.name !== "SKILL.md")
      .map((entry) => path.join(shippedSkillRoot, entry.name));

    if (extraTopLevelMarkdown.length > 0) {
      failures.push(
        `Shipped skill tree must not contain auxiliary top-level Markdown docs besides SKILL.md: ${extraTopLevelMarkdown.join(", ")}`
      );
    } else {
      checks.push("OK   shipped skill top-level markdown boundary");
    }
  } catch (error) {
    failures.push(`Unable to inspect shipped skill tree: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (await exists(singularReferenceRoot)) {
    failures.push("Shipped skill tree must use `references/`, not a singular `reference/` directory");
  } else {
    checks.push("OK   canonical shipped references path");
  }

  if (await exists(assetsRoot)) {
    try {
      const assetEntries = await readdir(assetsRoot, { withFileTypes: true });
      const realAssetEntries = assetEntries.filter((entry) => entry.name !== ".gitkeep");

      if (realAssetEntries.length === 0) {
        failures.push("Shipped assets/ is optional; remove placeholder-only assets/ directories until real runtime assets exist");
      } else {
        checks.push("OK   optional shipped assets boundary");
      }
    } catch (error) {
      failures.push(`Unable to inspect shipped assets/: ${error instanceof Error ? error.message : String(error)}`);
    }
  } else {
    checks.push("OK   optional shipped assets boundary");
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

  try {
    const skillContent = await readFile(skillPath, "utf8");
    const frontmatter = parseSimpleFrontmatter(skillContent, "SKILL.md");

    if (frontmatter.name !== "ds-intent-analyzer") {
      failures.push(`Expected SKILL.md frontmatter name "ds-intent-analyzer" but found "${frontmatter.name ?? ""}"`);
    } else {
      checks.push("OK   SKILL frontmatter name");
    }

    if (!frontmatter.description || frontmatter.description.trim().length === 0) {
      failures.push("SKILL.md frontmatter description must be present and non-empty");
    } else {
      checks.push("OK   SKILL frontmatter description");
    }
  } catch (error) {
    failures.push(`Unable to validate SKILL.md frontmatter: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const openAiMetadataContent = await readFile(openAiMetadataPath, "utf8");
    const openAiMetadata = parseSimpleNestedYaml(openAiMetadataContent, "agents/openai.yaml");

    for (const topLevelKey of ["interface", "policy"]) {
      if (!Object.hasOwn(openAiMetadata, topLevelKey)) {
        failures.push(`agents/openai.yaml must contain top-level section "${topLevelKey}"`);
      }
    }

    const actualInterfaceKeys = Object.keys(openAiMetadata.interface ?? {}).sort();
    const expectedInterfaceKeys = Object.keys(expectedOpenAiMetadata.interface).sort();
    if (actualInterfaceKeys.join("|") !== expectedInterfaceKeys.join("|")) {
      failures.push(
        `agents/openai.yaml interface keys must match the repo contract exactly: expected ${expectedInterfaceKeys.join(", ")}; found ${actualInterfaceKeys.join(", ")}`
      );
    }

    const actualPolicyKeys = Object.keys(openAiMetadata.policy ?? {}).sort();
    const expectedPolicyKeys = Object.keys(expectedOpenAiMetadata.policy).sort();
    if (actualPolicyKeys.join("|") !== expectedPolicyKeys.join("|")) {
      failures.push(
        `agents/openai.yaml policy keys must match the repo contract exactly: expected ${expectedPolicyKeys.join(", ")}; found ${actualPolicyKeys.join(", ")}`
      );
    }

    for (const [key, expectedValue] of Object.entries(expectedOpenAiMetadata.interface)) {
      const actualValue = openAiMetadata.interface?.[key];
      if (actualValue !== expectedValue) {
        failures.push(
          `agents/openai.yaml interface.${key} must equal ${JSON.stringify(expectedValue)} but found ${JSON.stringify(actualValue)}`
        );
      }
    }

    for (const [key, expectedValue] of Object.entries(expectedOpenAiMetadata.policy)) {
      const actualValue = openAiMetadata.policy?.[key];
      if (actualValue !== expectedValue) {
        failures.push(
          `agents/openai.yaml policy.${key} must equal ${JSON.stringify(expectedValue)} but found ${JSON.stringify(actualValue)}`
        );
      }
    }

    if (failures.length === 0 || !failures.some((entry) => entry.includes("agents/openai.yaml"))) {
      checks.push("OK   openai.yaml metadata contract");
    }
  } catch (error) {
    failures.push(`Unable to validate agents/openai.yaml: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const runtimeIndexPath = path.join(
      rootDir,
      "resources",
      "skills",
      "ds-intent-analyzer",
      "references",
      "14-runtime-index.json"
    );
    const actualRuntimeIndex = JSON.parse(await readFile(runtimeIndexPath, "utf8"));
    const expectedRuntimeIndex = await buildRuntimeIndex(rootDir);

    if (JSON.stringify(actualRuntimeIndex) !== JSON.stringify(expectedRuntimeIndex)) {
      failures.push("resources/skills/ds-intent-analyzer/references/14-runtime-index.json is stale; regenerate it with npm run build:index");
    } else {
      checks.push("OK   runtime index freshness");
    }

    const actualShell = actualRuntimeIndex.recurring_review?.shell_sections;
    if (
      !Array.isArray(actualShell) ||
      actualShell.length !== expectedRecurringReviewShell.length ||
      actualShell.some((entry, index) => entry !== expectedRecurringReviewShell[index])
    ) {
      failures.push(
        `runtime index recurring_review.shell_sections must equal ${expectedRecurringReviewShell.join(", ")}`
      );
    } else {
      checks.push("OK   runtime index recurring-review shell shape");
    }

    const referenceCards = actualRuntimeIndex.reference_cards;
    if (!Array.isArray(referenceCards) || referenceCards.length === 0) {
      failures.push("runtime index must contain a non-empty reference_cards array");
    } else {
      const malformedCards = referenceCards.filter((card) => {
        if (!card || typeof card !== "object") {
          return true;
        }

        if (typeof card.name !== "string" || card.name.toLowerCase().endsWith("tie-break")) {
          return true;
        }

        return requiredReferenceCardKeys.some((key) => typeof card[key] !== "string" || card[key].trim().length === 0);
      });

      if (malformedCards.length > 0) {
        failures.push("runtime index reference_cards must contain only real lookup cards with the standard lookup fields");
      } else {
        checks.push("OK   runtime index lookup-card shape");
      }
    }
  } catch (error) {
    failures.push(`Unable to validate 14-runtime-index.json: ${error instanceof Error ? error.message : String(error)}`);
  }

  try {
    const packedPaths = await getPackedFileList(rootDir);
    const packedPathSet = new Set(packedPaths);
    const runtimeRoot = path.join(rootDir, "resources", "skills", "ds-intent-analyzer");
    const runtimeRelativeFiles = await collectRelativeFilePaths(runtimeRoot);
    const requiredPackedPaths = [
      "README.md",
      "LICENSE",
      "package.json",
      "bin/ds-intent-analyzer.mjs",
      "scripts/install-skill.mjs",
      "scripts/sync-skill.mjs",
      ...runtimeRelativeFiles.map((relativePath) => `resources/skills/ds-intent-analyzer/${relativePath}`)
    ];

    const missingPackedPaths = requiredPackedPaths.filter((requiredPath) => !packedPathSet.has(requiredPath));
    if (missingPackedPaths.length > 0) {
      failures.push(`Packed package is missing required downstream files: ${missingPackedPaths.join(", ")}`);
    }

    const forbiddenPrefixes = ["resources/contributor/", ".local/"];
    const forbiddenExactPaths = new Set(["AGENTS.md", "scripts/validate-skill.mjs"]);
    const unexpectedPackedPaths = packedPaths.filter((packedPath) => {
      if (forbiddenExactPaths.has(packedPath)) {
        return true;
      }

      if (forbiddenPrefixes.some((prefix) => packedPath.startsWith(prefix))) {
        return true;
      }

      if (packedPath === "README.md" || packedPath === "LICENSE" || packedPath === "package.json") {
        return false;
      }

      if (packedPath === "bin/ds-intent-analyzer.mjs") {
        return false;
      }

      if (packedPath === "scripts/install-skill.mjs" || packedPath === "scripts/sync-skill.mjs") {
        return false;
      }

      return !packedPath.startsWith("resources/skills/ds-intent-analyzer/");
    });

    if (unexpectedPackedPaths.length > 0) {
      failures.push(`Packed package must stay lean; found unexpected packaged paths: ${unexpectedPackedPaths.join(", ")}`);
    }

    if (
      (missingPackedPaths.length === 0 && unexpectedPackedPaths.length === 0) ||
      !failures.some((entry) => entry.includes("Packed package"))
    ) {
      checks.push("OK   packed package surface");
    }
  } catch (error) {
    failures.push(`Unable to validate packed package surface: ${error instanceof Error ? error.message : String(error)}`);
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
