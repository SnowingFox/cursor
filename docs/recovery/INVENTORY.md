# Recovery Inventory Snapshot

Generated from recovery/inventory/*.json after M1 (2026-11-05).

## Bundles

| Bundle | Modules | Segments | Chars | Reassembly |
|---|---|---|---|---|
| app/out/main.js | 1,030 | 1,031 | 3,435,999 | byte-for-byte |
| app/out/vs/workbench/workbench.desktop.main.js | 4,702 | 4,703 | 48,487,482 | byte-for-byte |
| app/out/vs/workbench/workbench.glass.main.js | 8,708 | 8,709 | 58,129,164 | byte-for-byte |
| app/out/vs/workbench/api/node/extensionHostProcess.js | 10 | 11 | 5,852,931 | byte-for-byte |

Raw split files: recovery/raw/<bundle-stem>/ (gitignored, regenerable with bun run recover:verify --split).

Module ids look like app-out-vs-workbench-workbench-glass-main-js:0042. Use:

    bun scripts/recover/slice.ts <moduleId>

to print a module slice with a provenance header.

## SDK (@cursor/sdk@1.3.1)

| Item | Count |
|---|---|
| .d.ts | 190 |
| .d.ts.map | 178 |
| .d.ts source paths | 80 (89 raw) |
| webpack module keys (all) | 1,870 |
| own src keys | 40 |
| ESM/CJS JS files | 25 + 25 |
| bundled JS | 2 |

Sibling package keys observed in the SDK dist: proto 210, cursor-sdk-local-runtime 48, utils 26, context 10, agent-kv 4, metrics 4, cursor-sdk-shared 4, mcp-core 2, mcp-agent-exec 2, shell-exec 2.

## nls

| Item | Count |
|---|---|
| modules | 1,150 |
| present in VS Code 1.128.0 | 970 |
| Cursor-specific/renamed | 180 |

## Extensions (cursor-*)

| Extension | Format | Validated modules | Reassembly | Shipped TS |
|---|---|---|---|---|
| cursor-agent-exec | webpack | 1,319 | ok | 0 |
| cursor-agent-host | webpack | 1,703 | ok | 0 |
| cursor-local-agent-runtime | webpack | 1,238 | ok | 0 |
| cursor-mcp | webpack | 433 | ok | 0 |
| cursor-computer-use | webpack | 219 (bundle) | ok | 61 adopted |
| cursor-resolver | webpack | 49 | ok | 0 |
| others | mixed/unknown | not split | - | configs/schemas |

W2 ext-agent covered the remaining 16 extensions: 25 artifacts / 1,836 modules, all reassembly ok, 76 shipped files adopted.

Total validated: 111 artifacts / 6,797 modules, 100% byte-for-byte reassembly. The earlier heuristic regex counts are kept as webpackModuleHits in extensions.json; use validatedModules. recovery/mappings/extensions-agent.json is authoritative for the W2 16.

Shipped real engineering files include webpack configs (computer-use, resolver, socket, checkout), worker tsconfigs (retrieval, commits), package.nls.json (always-local, mcp, retrieval, shadow-workspace), schemas, and rewrite-bufbuild-loader.js.

## Glass clusters (heuristic, uppercase component names)

| Cluster | Modules | Chars |
|---|---|---|
| p0-composer | 281 | 1,171,675 |
| p1-agent | 87 | 380,704 |
| p2-platform | 131 | 628,936 |
| p3-rest | 8,209 | 55,944,589 |

p3-ui is uppercase components without a stronger cluster match; p4-lower is lowercase utilities/dependencies and should be treated as a backlog, not first-party code. Cluster membership is advisory and must not be used as a path claim.

## Path candidates

recovery/mappings/glass-tree.json joins glass module basenames to nls source paths:

| Result | Modules |
|---|---|
| exact (unique nls basename match) | 269 |
| ambiguous (multiple nls candidates) | 34 |
| none | 8,405 |

The 8,405 without a candidate are mostly npm dependencies or Cursor components never localized; their paths remain inferred.

## Recovered packages (W1 sdk-runtime, in progress)

packages/: agent-kv, context, cursor-sdk-local-runtime, cursor-sdk-shared, mcp-agent-exec, mcp-core, metrics, proto, shell-exec, utils.

proto is generated/vendored (64 modules). Other packages contain extracted source with provenance; typecheck exceptions are reported by the agent.
