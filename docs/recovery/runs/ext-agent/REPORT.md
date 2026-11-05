# ext-agent REPORT (W2-4)

Task: W2-4 ext-agent. Owned paths written: recovered/extensions/agent/**,
scripts/recover/extensions/agent/**, docs/recovery/runs/ext-agent/**,
recovery/mappings/extensions-agent.json. No app/, .vendor/, packages/,
root-manifest, shared-doc or other-worker edits; no network; no git commit.

## 1. Coverage

All remaining cursor-* extensions after W1 ext-p0, plus the four cursor-*
extensions the brief did not name and theme-cursor:

cursor-always-local, cursor-retrieval, cursor-commits, cursor-socket,
cursor-checkout, cursor-explorer, cursor-deeplink, cursor-file-service,
cursor-shadow-workspace, cursor-polyfills-remote, cursor-worktree-textmate,
theme-cursor, cursor-agent-worker, cursor-browser-automation,
cursor-ndjson-ingest, cursor-resolver-helper.

## 2. Per-extension counts

Columns: dist artifacts (webpack / esbuild single-entry) | split modules |
adopted shipped files | skipped assets | unresolved.

| Extension | Artifacts | Split modules | Adopted (A) | Notes |
|---|---|---|---|---|
| cursor-always-local | 3 (2 wp / 1 esb) | 386 | 7 | main 379 + chunk-915 6 + gitWorker whole; package.json, package.nls.json, 2 schemas, eslint.config.cjs, media/main.css, dist/commands/cppUtils/BUILD.bazel |
| cursor-retrieval | 1 (1/0) | 196 | 9 | package.nls.json, schemas/package.schema.json, worker/tsconfig.json, eslint.config.cjs, icons/css.png, .gitignore, telemetry policy.yml, bundled @anysphere/file-service index.js + package.json |
| cursor-commits | 1 (1/0) | 167 | 5 | worker/tsconfig.json, worker/pre-compile.js, worker/.gitignore, package.json, LICENSE.txt (recorded) |
| cursor-deeplink | 1 (1/0) | 202 | 1 | package.json only |
| cursor-shadow-workspace | 1 (1/0) | 166 | 3 | package.nls.json, media/icon.png, package.json |
| cursor-polyfills-remote | 1 (1/0) | 369 | 2 | eslint.config.cjs, package.json |
| cursor-agent-worker | 1 (1/0) | 233 | 1 | package.json only |
| cursor-resolver-helper | 1 (1/0) | 49 | 1 | package.json only |
| cursor-socket | 1 (0/1) | 1 | 2 | extension.webpack.config.js + package.json; 11.7 KB esbuild bundle |
| cursor-checkout | 1 (0/1) | 1 | 3 | extension.webpack.config.js, .gitignore, package.json |
| cursor-explorer | 1 (0/1) | 1 | 1 | 22 KB esbuild bundle, no module map |
| cursor-file-service | 1 (0/1) | 1 | 1 | 301-byte DUMMY shim; real service is the native binding in cursor-retrieval |
| cursor-ndjson-ingest | 1 (1/0) | 7 | 1 | package.json only |
| cursor-browser-automation | 10 (5/5) | 57 | 1 | 5 webpack chunks incl. main; 5 esbuild worker chunks; package.json |
| cursor-worktree-textmate | 0 | 0 | 28 | 27 TextMate grammars + package.json (no bundle) |
| theme-cursor | 0 | 0 | 10 | 7 color themes + package.json, README.md, CHANGELOG.md |
| **Total** | **25 (15/10)** | **1836** | **76** | 68 byte-identical + 8 with provenance header |

7 dist `*.LICENSE.txt` bundles (7.6 KB total) and one `.node` binary are
recorded with sha256 in INVENTORY.json but not copied.

## 3. Confidence

- Adopted files: A (shipped engineering files; basis shipped-config 67,
  shipped-source 7, vendored 2). JSON/PNG/grammar/theme copies are
  byte-identical and verified by sha256; .js/.cjs copies carry a provenance
  header and are proven lossless by stripping it and comparing sha256.
- Split modules: C for all 1836 (basis webpack-id 1826, esbuild-wrapper 10 —
  the latter are whole-file fragments). No quoted webpack keys occur, so
  no module reaches B; chunk/artifact association is exact and byte-proven.
- `_footer.js` holds the webpack runtime **and the inlined entry module body**
  (activate/deactivate, command registration). Footers: always-local 674 KB,
  retrieval 2.1 MB, commits 918 KB, agent-worker 1.78 MB, resolver-helper 858 KB,
  deeplink 252 KB, shadow-workspace 324 KB, browser-automation 228 KB.
  Probed: no `}, <id>: (` boundary exists after the map close, so this is a true
  single fragment.

## 4. Verification (exact commands and output)

    $ bun scripts/recover/extensions/agent/adopt.ts
    adopt total: 76 files, 925858 bytes

    $ bun scripts/recover/extensions/agent/split.ts
    cursor-always-local: 3 artifacts, 386 modules, confidence {"C":386}, reassembly ok
    ... (16 lines, every extension "reassembly ok", exit 0)

    $ bun scripts/recover/extensions/agent/verify.ts
    cursor-always-local: ... adopted 7 errors 0 | ids 0/2 (schema-file 2)
    cursor-retrieval: ... adopted 9 errors 0 | ids 3/3 (literal 2, composed 1)
    cursor-deeplink: ... ids 1/1 (literal 1)
    cursor-ndjson-ingest: ... ids 7/7 (literal 7)
    verify totals: {"extensions":16,"artifacts":25,"modules":1836,"adopted":76,
      "idsFound":13,"idsTotal":13,"idsLiteral":10,"idsComposed":1,"schemaFiles":2}
    exit 0

    $ bun scripts/recover/extensions/agent/manifest.ts
    mapping written: {"extensions":16,"distArtifacts":25,"webpackArtifacts":15,
      "singleEntryArtifacts":10,"splitModules":1836,"adoptedFiles":76,
      "confidence":{"C":1836}}

    $ bun scripts/recover/audit.ts
    [recover] audit: 8475 source files, 8475 with provenance, 0 violations
    [recover] confidence: {"C":8184,"A":159,"B":132}

verify.ts re-reads every part from disk, rebuilds each artifact, and compares
sha256 against the live app/ file (not just the recorded hash): 25/25 ok.
Spot checks: 13/13 contribution ids located — 10 literal in module or footer
text, 1 composed at runtime (`cursor-retrieval` + `.canAttemptGithubLogin`),
2 jsonValidation schema paths matched against the adopted manifest.

## 5. Unresolved / risks

- No original source paths or TypeScript types for split modules (numeric ids);
  confidence C is the ceiling, not a shortcut.
- The entry module body is not separable from the webpack runtime, so
  `_footer.js` stays one large fragment.
- 10 artifacts are esbuild single-entry/worker bundles: whole-file fragments
  only (`whole.js`), no internal boundaries recoverable without a sourcemap.
- `cursor-file-service` carries no real implementation (DUMMY shim); the
  functional file service ships as a compiled native binding inside
  cursor-retrieval. `cursor-worktree-textmate` and `theme-cursor` have no code.
- ext-p0 previously adopted ~20 of the same configs into
  `recovered/extensions/<ext>/`; the new copies live under
  `recovered/extensions/agent/<ext>/shipped/` (same sha256). Main should pick
  one canonical location at merge time.
- recovery/inventory/extensions.json disagrees with measured module counts for
  these extensions (always-local reported "webpackModuleHits: 0"); the new
  recovery/mappings/extensions-agent.json is authoritative for the 16.

## 6. Handoff

Regenerate:

    bun scripts/recover/extensions/agent/inventory.ts
    bun scripts/recover/extensions/agent/adopt.ts
    bun scripts/recover/extensions/agent/split.ts
    bun scripts/recover/extensions/agent/verify.ts
    bun scripts/recover/extensions/agent/manifest.ts

Suggested root scripts (main-owned): recover:ext:agent:{inventory,adopt,split,verify,manifest}.

Next candidates: (a) split `_footer.js` runtime/entry heuristically with AST
confirmation; (b) join webpack-id modules to glass/desktop basename clusters to
propose candidate paths; (c) extract `__webpack_require__.d` export tables into
MODULES.json export maps for all split modules (exportsHint already collects the
first 16 names per module).
