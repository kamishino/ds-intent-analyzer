import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const defaultRoot = path.resolve(scriptDir, "..");

function extractSection(content, startHeading, endHeading) {
  const startIndex = content.indexOf(startHeading);
  if (startIndex === -1) {
    throw new Error(`Missing section start: ${startHeading}`);
  }

  const afterStart = startIndex + startHeading.length;
  const endIndex = endHeading ? content.indexOf(endHeading, afterStart) : -1;
  return content.slice(afterStart, endIndex === -1 ? undefined : endIndex).trim();
}

function extractBullets(section) {
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
}

function parseSupportedModes(contractContent) {
  const matches = [...contractContent.matchAll(/^### \d+\. (.+)\r?\nUse when (.+?)\.\r?\n\r?\nGoal:\r?\n(.+)$/gm)];

  return matches.map((match) => ({
    mode: match[1].trim(),
    use_when: match[2].trim(),
    goal: match[3].trim()
  }));
}

function parseRoutingRules(contractContent) {
  const section = extractSection(contractContent, "## Request routing", "## Evidence precedence");
  return extractBullets(section)
    .filter((line) => line.includes("->"))
    .map((line) => {
      const [promptShape, mode] = line.split("->").map((part) => part.trim());
      return { prompt_shape: promptShape, primary_mode: mode };
    });
}

function parseEvidencePrecedence(contractContent) {
  const section = extractSection(contractContent, "## Evidence precedence", "### User-facing source boundary");

  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => /^\d+\./.test(line))
    .map((line) => line.replace(/^\d+\.\s*/, "").trim());
}

function parseLookupCards(lookupContent) {
  const section = extractSection(lookupContent, "## Lookup cards", "## Lookup usage cautions");
  const rawCards = section.split(/^### /m).slice(1);
  const requiredKeys = [
    "best_used_for",
    "likely_posture",
    "likely_archetype",
    "strongest_reusable_lesson",
    "borrow_carefully",
    "do_not_copy_blindly"
  ];

  return rawCards
    .map((rawCard) => {
      const lines = rawCard.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
      const name = lines[0];
      const card = { name };

      for (const line of lines.slice(1)) {
        const match = line.match(/^- \*\*(.+?):\*\*\s*(.+)$/);
        if (!match) {
          continue;
        }

        const [, rawKey, rawValue] = match;
        const key = rawKey
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "_")
          .replace(/^_+|_+$/g, "");
        card[key] = rawValue.trim();
      }

      return card;
    })
    .filter(
      (card) =>
        !card.name.toLowerCase().endsWith("tie-break") &&
        requiredKeys.every((key) => typeof card[key] === "string" && card[key].length > 0)
    );
}

function parsePreferredPaths(content) {
  const matches = [...content.matchAll(/`(docs\/design-system\/[^`]+)`/g)];
  return [...new Set(matches.map((match) => match[1]))];
}

function parseRecurringReviewShell(reviewContent) {
  const section = extractSection(reviewContent, "## Recurring review shell", "## Retrieval order");
  const shellLines = [];
  let collecting = false;

  for (const rawLine of section.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (line.startsWith("- ")) {
      shellLines.push(line.slice(2).trim().replace(/`/g, ""));
      collecting = true;
      continue;
    }

    if (collecting && line !== "") {
      break;
    }
  }

  return shellLines;
}

function parseRecurringReviewTriggers(reviewContent) {
  const section = extractSection(reviewContent, "## Trigger cues", "## Review workflow positioning");
  return extractBullets(section).map((line) => line.replace(/`/g, ""));
}

export async function buildRuntimeIndex(rootDir = defaultRoot) {
  const skillRoot = path.join(rootDir, "resources", "skills", "ds-intent-analyzer");
  const contractPath = path.join(skillRoot, "references", "02-runtime-skill-contract.md");
  const lookupPath = path.join(skillRoot, "references", "07-runtime-reference-lookup.md");
  const auditArtifactsPath = path.join(skillRoot, "references", "12-runtime-audit-artifacts.md");
  const reviewWorkflowsPath = path.join(skillRoot, "references", "13-runtime-review-workflows.md");

  const [contractContent, lookupContent, auditArtifactsContent, reviewWorkflowsContent] = await Promise.all([
    readFile(contractPath, "utf8"),
    readFile(lookupPath, "utf8"),
    readFile(auditArtifactsPath, "utf8"),
    readFile(reviewWorkflowsPath, "utf8")
  ]);

  const auditArtifactPaths = parsePreferredPaths(auditArtifactsContent);
  const reviewArtifactPaths = parsePreferredPaths(reviewWorkflowsContent);

  return {
    version: 1,
    intent: "Orientation-only derived helper for staged retrieval. This helper never outranks fresh evidence or the shipped markdown sources.",
    generated_from: [
      "resources/skills/ds-intent-analyzer/references/02-runtime-skill-contract.md",
      "resources/skills/ds-intent-analyzer/references/07-runtime-reference-lookup.md",
      "resources/skills/ds-intent-analyzer/references/12-runtime-audit-artifacts.md",
      "resources/skills/ds-intent-analyzer/references/13-runtime-review-workflows.md"
    ],
    supported_modes: parseSupportedModes(contractContent),
    routing_rules: parseRoutingRules(contractContent),
    evidence_precedence: parseEvidencePrecedence(contractContent),
    artifact_paths: {
      audit_packet: auditArtifactPaths.find((entry) => entry.endsWith("audit-packet.md")) ?? "docs/design-system/audit-packet.md",
      audit_evidence: auditArtifactPaths.find((entry) => entry.endsWith("audit-evidence.md")) ?? "docs/design-system/audit-evidence.md",
      project_memory: "docs/design-system/project-memory.md",
      review_brief: reviewArtifactPaths.find((entry) => entry.endsWith("review-brief.md")) ?? "docs/design-system/review-brief.md",
      review_log: reviewArtifactPaths.find((entry) => entry.endsWith("review-log.md")) ?? "docs/design-system/review-log.md"
    },
    recurring_review: {
      trigger_cues: parseRecurringReviewTriggers(reviewWorkflowsContent),
      shell_sections: parseRecurringReviewShell(reviewWorkflowsContent)
    },
    reference_cards: parseLookupCards(lookupContent)
  };
}

async function main(args) {
  const rootDir = defaultRoot;
  const runtimeIndex = await buildRuntimeIndex(rootDir);
  const payload = `${JSON.stringify(runtimeIndex, null, 2)}\n`;
  const outputPath = path.join(
    rootDir,
    "resources",
    "skills",
    "ds-intent-analyzer",
    "references",
    "14-runtime-index.json"
  );

  if (args.includes("--stdout")) {
    process.stdout.write(payload);
    return;
  }

  await writeFile(outputPath, payload, "utf8");
  process.stdout.write(`Wrote ${outputPath}\n`);
}

main(process.argv.slice(2)).catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
