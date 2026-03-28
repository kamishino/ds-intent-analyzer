#!/usr/bin/env node

import { runInstallCommand } from "../scripts/install-skill.mjs";
import { runSyncCommand } from "../scripts/sync-skill.mjs";

function printUsage() {
  console.log(`Usage:
  ds-intent-analyzer install [--project <path>]
  ds-intent-analyzer sync [--project <path>]
`);
}

async function main(argv) {
  const [command, ...rest] = argv;

  if (!command || command === "--help" || command === "-h") {
    printUsage();
    process.exit(command ? 0 : 1);
  }

  if (command !== "install" && command !== "sync") {
    console.error(`Unknown command: ${command}`);
    printUsage();
    process.exit(1);
  }

  if (command === "install") {
    await runInstallCommand(rest);
    return;
  }

  await runSyncCommand(rest);
}

main(process.argv.slice(2)).catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
