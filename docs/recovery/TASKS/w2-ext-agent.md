# W2 ext-agent

Owner: subagent ext-agent
Owned paths: recovered/extensions/agent/**, scripts/recover/extensions/agent/**, docs/recovery/runs/ext-agent/**

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, INVENTORY.md, TASKS/w1-ext-p0.md, recovery/inventory/extensions.json.

## Goal

Continue extension recovery for the cursor-* extensions not covered by ext-p0, prioritizing cursor-always-local, cursor-retrieval, cursor-commits, cursor-socket, cursor-checkout, cursor-explorer, cursor-deeplink, cursor-file-service, cursor-shadow-workspace, cursor-polyfills-remote, cursor-worktree-textmate, theme-cursor.

## Work

1. Inventory each extension: package.json contributions, dist chunks, webpack format, shipped configs/schemas. Update a local manifest.
2. Adopt shipped real engineering files with provenance (A): extension.webpack.config.js, package.nls.json, schemas/*.json, worker tsconfigs, pre-compile scripts. Do not modify app/.
3. Split webpack bundles with the custom parser pattern used by ext-p0 (webcrack is not installed). Emit recovered/extensions/agent/<name>/src/<module-or-id>.js with provenance; numeric ids are confidence C and keep the chunk mapping.
4. For computer-use-adjacent workers, adopt type declarations / worker API files if shipped.
5. Reassemble-check each split chunk; spot-check command ids and exports.
6. Write docs/recovery/runs/ext-agent/TRACE.md and REPORT.md with per-extension counts (adopted / split / vendored / unresolved).

## Acceptance

- Each prioritized extension has an inventory and either recovered files with provenance or a documented blocker.
- Shipped configs/schemas are adopted with A confidence.
- Reassembly checks reported.
- No app/ edits, no fabricated APIs, no network, no commit.
