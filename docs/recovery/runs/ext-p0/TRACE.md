# ext-p0 TRACE

All commands run from /Users/bytedance/dev/cursor. Read-only inputs:
docs/recovery/{PLAN,TRACE,CONVENTIONS}.md, docs/recovery/TASKS/w1-ext-p0.md,
recovery/inventory/extensions.json, app/extensions/cursor-*/**.

## 1. Reconnaissance

- app/extensions has 22 cursor-* extensions. Prioritized: cursor-agent-exec,
  cursor-agent-host, cursor-local-agent-runtime, cursor-resolver, cursor-mcp.
  cursor-computer-use ships 64 real files under src/ (61 .ts, 1 .cjs fixture,
  1 .json fixture, 1 .json), plus extension.webpack.config.js, tsconfig.json,
  vitest.config.ts and a PowerShell verification script.
- workspace packages referenced by computer-use (packages/computer-use/protocol,
  packages/vs-base, src/proto, src/external/bufbuild, src/vscode-dts,
  tsconfig.base.json) are NOT present under app/; only app/{dist,out,extensions,
  node_modules} are shipped. app/node_modules is tracked by git and contains
  zod 4.3.6, @bufbuild/protobuf, @connectrpc/connect(-node), yauzl.
- recovery/inventory/extensions.json: agent-exec 1617 webpackModules, host 2682,
  local-runtime (see file), resolver, mcp 433-ish; counts are regex estimates.

## 2. Bundle parser (scripts/recover/extensions/webpack.ts)

First attempt was a full lexical brace scanner (strings/templates/comments/
regex). It under-counted badly (agent-exec main: 26 of 772 entries) because
regex-vs-division disambiguation corrupted brace depth on 12 MB of minified
code. Replaced with a validated line-shape parser:

- entries after the first start as "  }, <id>: (" (entry points) or
  "}, <id>: (" (async chunks); quoted keys are supported for webpack ESM maps.
- the map closes as "  } }, __webpack_module_cache__ = ..." (entry) or "} };"
  (chunk); both are detected by CLOSE_LINE.
- parser rejects on: duplicate ids, unexpected separator text, entries whose
  text does not start with key + ":" + "(" or "function".

Observed: all six processed extensions use numeric module ids only
(stringKeys = 0), so no original source path is recoverable for any module.

## 3. Split + reassembly (scripts/recover/extensions/split.ts)

Output layout per extension: recovered/extensions/<ext>/bundles/<chunk>/
{_prelude.js, <id>.js, _footer.js} + MODULES.json (artifact sha256, byte
ranges, key type, separators, per-part confidence).

Chunk label = "main" for dist/main.js, "chunk-<exports.id>" for async chunks,
or the file basename (pdf-worker, extension). Two bugs found by the reassembly
gate and fixed:
1. the last entry's separator (space before the map-closing brace) was dropped;
2. the prelude ended at "{" but the first key starts one char later, dropping
   the space after "{".

Final reassembly gate (read parts back from disk, strip headers, concat
prelude + entries + separators + footer, sha256): 86/86 artifacts ok.

    cursor-computer-use: 5 artifacts, 219 modules, 5 skipped, reassembly ok
    cursor-agent-exec: 20 artifacts, 1319 modules, 18 skipped, reassembly ok
    cursor-agent-host: 39 artifacts, 1703 modules, 20 skipped, reassembly ok
    cursor-local-agent-runtime: 20 artifacts, 1238 modules, 16 skipped, reassembly ok
    cursor-resolver: 1 artifact, 49 modules, 1 skipped, reassembly ok
    cursor-mcp: 1 artifact, 433 modules, 0 skipped, reassembly ok

Skipped files have no webpack module map: esbuild worker bundles
(canvas-runtime*.esm.js, diff-worker, diff-patch-worker, unified-diff-worker,
pdf-worker is webpack though), cursor-re localMode.js, browser/main.js
(resolver), agent-sdk JS assets and agent-host-daemon files. These belong to
the esbuild/asset pipeline, not this splitter.

## 4. computer-use adoption (scripts/recover/extensions/adopt.ts, stubs.ts)

- 64 files copied from app/extensions/cursor-computer-use/src preserving paths;
  text files prefixed with the CONVENTIONS provenance header (adopted-source,
  confidence A). 3 configs copied with headers (extension.webpack.config.js,
  vitest.config.ts; tsconfig.json verbatim because JSON). Original configs are
  kept under upstream/ for byte comparison.
- MANIFEST.json records sha256 of every adopted artifact; verified 67/67 hashes
  equal the source files.
- Adapted tsconfig.json for local typecheck (TS 7 removed baseUrl; paths are
  ./-relative). Adapted package.json is private and adds typecheck/test:local.
- Stubs (TODO(stub), any-typed) for @anysphere/computer-use/protocol (52 names),
  @anysphere/context, @anysphere/utils{,/image-resize,/jimp-minimal},
  @cursor/types, @jsquash/webp, proto/aiserver/v1/*, vscode, yauzl,
  @connectrpc/connect(-node) and the Cursor product-profile JSON. zod is
  aliased read-only to app/node_modules/zod (tracked) because the sources use
  z.infer/z.enum and a stub cannot model them.

## 5. Verification

    bunx tsc -p recovered/extensions/cursor-computer-use/tsconfig.json --noEmit
    -> 36 error lines in 5 files (see REPORT.md for the breakdown)

    bunx vitest run --config recovered/extensions/cursor-computer-use/vitest.local.config.ts
    -> 2 files, 22 tests passed (mac-mode.test.ts, sidecar-install-lock.test.ts);
       chosen because their import closure is local + node only.

Spot checks on split output:
    grep registerRemoteAuthorityResolver recovered/extensions/cursor-resolver/bundles/main/*.js
      -> "background-composer" (matches TRACE.md resolver evidence)
    grep "cursor\." recovered/extensions/cursor-agent-exec/bundles/main/*.js
      -> cursor.agentStreamMetadata, cursor.publishSkill.*, cursor.resyncSkill.*,
         cursor.installSkills.runSkillsCliAdd (command ids preserved)
    grep "cursor-" recovered/extensions/cursor-mcp/bundles/main/*.js
      -> cursor-cloud, cursor-browser-extension, cursor-app-control, ...

## 6. Environment facts

- git status: app/ clean; only main-owned root manifest changes present.
- No network used. No app/, packages/, .vendor/ edits. No git commit.
