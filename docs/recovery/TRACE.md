# Recovery Trace (main-thread investigation)

This is the evidence log produced while planning the recovery. Subagents must read this before acting; it records what is known, what was measured, and what remains unknown. All commands were run from /Users/bytedance/dev/cursor.

## 0. Environment

| Item | Value |
|---|---|
| Repo | cursor-re, git 1a6993a3 "Local mode: shorten tool call ids a custom provider would reject" |
| Package manager | bun 1.4.2 |
| Node | v26.11.1 |
| Electron | 42.10.0 (devDependency; app ships same major) |
| OS | macOS arm64 |
| Cursor app | 3.24.18, commit be4c9e5350d77747b42cd467cbd3370a753d4640, built 2026-10-13 |
| VS Code base | 1.128.0 |
| DMG source | Cursor-darwin-arm64 (1).dmg (sha256 0043463fbbb1c0222ff10cfd62a86286791a74c2ede89875719d7113ec0c32bd) |

## 1. Artifact inventory

| Path | Size | Notes |
|---|---|---|
| app/ | 777 MB total | committed runnable app |
| app/out/ | 146 MB | core bundles |
| app/out/vs/workbench/workbench.glass.main.js | 55 MB | agent window |
| app/out/vs/workbench/workbench.desktop.main.js | 46 MB | IDE window |
| app/out/vs/workbench/workbench.anysphere-ui-automations.js | 10 MB | extra Cursor UI bundle |
| app/out/vs/workbench/workbench.xai-commerce-prepaid.js | 1.2 MB | extra Cursor bundle |
| app/out/main.js | 3.3 MB | Electron main process |
| app/out/vs/workbench/api/node/extensionHostProcess.js | 5.6 MB | extension host |
| app/out/vs/code/electron-utility/sharedProcess/sharedProcessMain.js | 1.1 MB | shared process |
| app/extensions/cursor-agent-host/dist | 63 MB | webpack extension |
| app/extensions/cursor-retrieval/dist | 79 MB | webpack extension (includes assets) |
| app/extensions/cursor-agent-exec/dist | 34 MB | webpack extension, patched by cursor-re local mode |
| app/extensions/cursor-local-agent-runtime/dist | 14 MB | webpack extension |

## 2. No sourcemaps

Command: find . -name '*.map' -not -path './node_modules/*' -not -path './app/node_modules/*' | wc -l
Result: 0.

sourceMappingURL occurrences exist only in third-party packages (typescript, ms-vscode.js-debug, profile-table). Sentry debug ids exist in bundle preambles (e.g. glass 1f98ef74-c136-531f-9af8-b568820ced9a) but the maps are on Cursor's private backend.

Consequence: original TypeScript, comments, original identifiers, tests and source map content are unrecoverable. Reconstruction must be artifact-driven and confidence-labeled.

## 3. esbuild module wrappers

Regex used (documented in scripts/recover): a minified helper call wrapping a module init function whose key is the original basename, e.g.

    var VIS = L({ "AgentStatusIcon.js"() {
      "use strict";
      ...
    } }), ...

Counts (regex matches / unique basenames):

| Bundle | Wrappers | Unique basenames |
|---|---|---|
| workbench.glass.main.js | 8,708 | 7,868 |
| workbench.desktop.main.js | 4,702 | 4,054 |
| out/main.js | 1,029 | 906 |

glass-only basenames: 3,825. Of those, 1,373 contain ".react." (e.g. ComposerMarkdown.react.js), confirming one-component-per-file originals such as ComposerMarkdown.react.tsx.

Examples of original basenames recovered from glass: AgentStatusIcon.js, ComposerToolbar.js, ComposerMCPSuccessNotification.js, conversation-density.js, conversation.stylex.js, ArtifactMarkdownRenderer.react.js, BackgroundComposerStatusIndicator.js.

glass is an ES module with external imports such as:

    import { jsx as lFr } from "./react-runtime/react/esm-jsx-runtime-production.js";
    import { c as I$h } from "./react-runtime/react/esm-compiler-runtime-production.js";

## 4. nls.keys.json

app/out/nls.keys.json is a JSON array of [modulePath, [nlsKey...]] entries: 1,150 modules / 13,530 keys. Module paths are original source paths without extension, e.g. vs/base/browser/ui/button/button, vs/workbench/contrib/composer/browser/composer.contribution.

Comparison against the microsoft/vscode 1.128.0 tag tree: 970 paths exist upstream; 180 do not. The 180 include obvious Cursor modules such as:

    vs/workbench/contrib/agents/browser/agentsActions
    vs/workbench/contrib/composer/browser/composer.contribution
    vs/workbench/contrib/canvas/browser/canvas.contribution
    vs/workbench/contrib/cursorBlame/browser/cursorBlame.contribution
    vs/workbench/contrib/customizeEditor/browser/customizeEditor.contribution
    vs/workbench/contrib/appLayout/browser/appLayoutActions
    vs/platform/agentHarness/common/agentHostUpdate.config.contribution
    vs/workbench/api/browser/mainThreadCursor
    vs/workbench/browser/parts/editor/editorActions.cursor

This is the primary source of exact source paths for Cursor-added workbench modules.

## 5. VS Code baseline

Tag 1.128.0 exists at commit fc3def6774c76082adf699d366f31a557ce5573f (verified via git ls-remote). The GitHub tree has 16,210 blobs; src/vs has 8,444 files, 7,267 TypeScript. src/vs has 6,626 unique TS basenames.

Naive basename overlap with Cursor bundles is low (desktop 18.7%, glass 11.2%, main 28.5%), because bundles include third-party modules and many modules are scope-hoisted; real matching must use nls exact paths plus import graph and string anchors.

The upstream source is MIT licensed; vendored copies keep LICENSE.

## 6. Cursor SDK (@cursor/sdk@1.3.1)

Registry: https://registry.npmjs.org/@cursor/sdk
Tarball: https://registry.npmjs.org/@cursor/sdk/-/sdk-1.3.1.tgz
sha256: 30d4aa44a1383cfb282f8f4747e2d54601c0a4a1250b9fb6606c799d1aff9fb6
unpackedSize: 20,107,015; fileCount: 428; engines node >=22.13; published 2026-11-03.

Files: 190 .d.ts, 178 .d.ts.map, 50 .js (ESM 25, CJS 25), plus bundled/index.js (5.8 MB), bundled/sqlite.js (505 KB), package.json, README, LICENSE.md.

Dependencies (from package.json): @bufbuild/protobuf 1.10.0, @connectrpc/connect ^1.6.1, @connectrpc/connect-web ^1.6.1, @statsig/js-client 3.31.0; peer zod ^3.25.0 || ^4.0.0.

Exports: ".", "./agent" -> esm/cjs/bundled; "./sqlite", "./bundled", "./bundled/sqlite".

Declaration maps have no sourcesContent. Their sources are original paths such as:

    ../../src/agent/agent.ts
    ../../src/agent/public-api.ts
    ../../src/agent/run.ts
    ../../src/agent/platform.ts
    ../../../src/agent/filesystem/types.ts
    ../../../src/agent/store/jsonl-local-agent-store.ts
    ../../../../src/agent/filesystem/types.ts

Normalizing these yields 89 unique source paths; 80 are under src/ after normalization. They include src/agent, src/agent/auth, src/agent/filesystem, src/agent/store, src/agent/types, src/agent/utils, src/agent/native, src/sqlite.ts.

The ESM/CJS chunks are webpack module maps. Module keys preserve original paths, e.g.:

    "./src/agent/analytics.ts"(t,e,s){...}
    "./src/agent/cloud-agent.ts"(t,e,s){...}
    "../cursor-sdk-local-runtime/dist/run-store/sqlite-agent-run-store.js"(t,e,s){...}
    "../proto/dist/generated/agent/v1/exec_pb.js"(t,e,s){...}
    "../../node_modules/.pnpm/@jimp+plugin-resize@1.6.0/node_modules/@jimp/plugin-resize/dist/esm/index.js"(t,e,s){...}

Counts:
- 40 module definitions with ./src/ keys across esm chunks (index.js 38, 448.js 15, 305.js 15, 441/52 one each; union 40).
- index.js contains 119 distinct ./src/*.ts path references (chunk loads/binds), i.e. the reachable module graph is larger than the 40 explicit definitions because webpack scope-hoists many modules into the entry and drops their module keys.
- 139 first-party-ish keys in total when sibling packages are included: cursor-sdk-local-runtime (13 modules), cursor-sdk-shared (2), proto (64), utils (10+), context (3), metrics (1), mcp-core, mcp-agent-exec, shell-exec.
- Public export names are preserved in export tables, e.g. export const localRunStreamEventToSdkMessage=Ot.xc; export const wrapSdkError=Y.Nt; and index.js ends with a long list of export const statements.
- The bundled/ Bun build is minified and has no module markers; use dist/esm + dist/cjs for recovery.

SDK devDependencies reveal internal package names (all 1.0.0): @anysphere/agent-client, agent-core, agent-exec, agent-kv, agent-pr-attribution, analytics-client, analytics-types, bidi-connect, context, cursor-sdk-local-runtime, cursor-sdk-shared, context-rpc, cursor-plugins, dune-atomic-write, git-core, hooks, and more. This is enough to reconstruct the workspace package layout.

## 7. Canvas SDK shipped in the app

app/extensions/cursor-agent-exec/dist/agent-sdk/ (180 KB) contains:
- cursor/canvas/*.d.ts (16 files) and cursor/package.json (name "cursor", private, exports ./canvas)
- grok/canvas/*.d.ts (9 files)
- @types/react index/jsx-runtime
- canvas-sdk-version file: 4c3356a5eb42f4d64be3c695cf27249f478d56d56a9aa7282e32acccfe0c5ee6
- runtime bundles: canvas-runtime.esm.js (1.7 MB), canvas-runtime-grok.esm.js (1.4 MB), each an esbuild bundle with module basenames.

## 8. Extensions

22 cursor-* extensions exist under app/extensions. Notable:

| Extension | Notes |
|---|---|
| cursor-agent-exec | webpack; dist/agent-sdk + canvas-runtime; patched by cursor-re local mode (dist/localMode.js) |
| cursor-agent-host | webpack, ~2,042 modules, many async chunks named by numeric id; scripts/ensure-agent-host-daemon-dist.cjs, scripts/tsc-some-files.sh shipped |
| cursor-local-agent-runtime | webpack; agent harness |
| cursor-computer-use | ships full TypeScript sources |
| cursor-resolver | ships extension-browser.webpack.config.js and rewrite-bufbuild-loader.js; entry ./src/main.ts; alias proto -> ../../src/proto |
| cursor-socket, cursor-checkout | ship extension.webpack.config.js with entry ./src/main.ts |
| cursor-retrieval, cursor-commits | ship worker/tsconfig.json extending ../../tsconfig.base.json; include ../../../src/typings |
| cursor-always-local, cursor-mcp, cursor-polyfills-remote | ship eslint.config.cjs and package.nls.json |
| cursor-worktree-textmate | 28 grammar files |
| theme-cursor | 7 theme JSON files |

cursor-computer-use is the exception: 64 files / 1.1 MB under src/, all real TS (extension.ts, backends/**, mcp/**, rpc clients, .test.ts files), plus extension.webpack.config.js, tsconfig.json, vitest.config.ts, scripts/verify-authenticode-invocation.ps1. Its webpack config references the original monorepo layout:

    ../../../packages/computer-use/protocol/sidecar-protocol.ts
    ../../../packages/computer-use/windows/profiles/cursor-product-profile.json
    ../cursor.webpack.config
    ../tsconfig.base.json
    ../../src/proto
    ../../src/external/bufbuild
    ../../packages/vs-base/src

vitest.config.ts adds the anysphere-source resolution condition and aliases to workspace sources.

## 9. Tooling availability

Verified on the host: webcrack 2.16.0, wakaru 1.16.0, deobfuscator 2.4.6, unminify 2.0.0, @babel/parser 8.1.0, recast 0.24.0, jscodeshift 17.4.0, @babel/traverse 8.1.0, ts-morph 28.0.0. Docker is not installed; wakaru's Linux-only recovery path is not available. Plan uses webcrack where useful and a custom AST pipeline.

Network verified for registry.npmjs.org and github.com; unauthenticated GitHub API hit its rate limit once (60/h); use git clone instead of API for the VS Code baseline.

## 10. Constraints and unknowns

- No sourcemaps in the app; no sourcesContent in the SDK declaration maps.
- Webpack scope hoisting hides module boundaries in the SDK entry and in webpack extensions.
- esbuild wrapper bodies only contain initialization; function/class declarations may be hoisted outside the wrapper. W2 glass-composer verified that a segment's trailing hoisted declarations belong to the NEXT bundle segment (anchor + rendered-content evidence); ownership must be inferred from references, not just adjacency. Mapping records hoistedOwner/moduleOwnHoistedPrefix.
- Cursor glass module directories are not present in the bundle; only basenames. nls paths cover 180 Cursor modules; the rest must be inferred.
- Pinned artifacts are mandatory: SDK 1.3.1 and VS Code 1.128.0. Do not silently upgrade.
- Legal: Cursor SDK License permits local use subject to ToS; recovered code must stay private and must not be published.

## 11. Reproduction commands

    cd /Users/bytedance/dev/cursor
    git status --porcelain
    git log --oneline -1
    find . -name '*.map' -not -path './node_modules/*' -not -path './app/node_modules/*' | wc -l
    python3 -c "import json;d=json.load(open('app/out/nls.keys.json'));print(len(d))"
    curl -sSL https://registry.npmjs.org/@cursor/sdk/-/sdk-1.3.1.tgz | shasum -a 256
    git ls-remote --tags https://github.com/microsoft/vscode.git | grep 1.128.0

New probes should be appended here by the main thread, and per-agent probes go to docs/recovery/runs/<id>/TRACE.md.
