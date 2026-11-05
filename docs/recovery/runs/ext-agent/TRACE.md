# ext-agent TRACE (W2-4)

Commands run from /Users/bytedance/dev/cursor, in order. All reads of app/ are
read-only; no network; no git operations.

## 1. Survey

    ls app/extensions | head -60            # 22 cursor-* extensions, 4 left over after ext-p0
    ls recovered/extensions                 # ext-p0 already split 6 extensions
    wc -l scripts/recover/extensions/{webpack,split,adopt-configs}.ts
    #   webpack 189 lines, split 269, adopt-configs 92

Per-extension sizes (du, find): always-local 6.9 MB main.js + 57 KB chunk 915 +
5.6 KB gitWorker; retrieval 3.2 MB; commits 1.6 MB; deeplink 1.1 MB;
shadow-workspace 1.0 MB; polyfills-remote 174 KB; agent-worker 2.1 MB;
resolver-helper 1.0 MB; browser-automation 10 chunks/830 KB; socket/checkout/
explorer/file-service/ndjson-ingest 0.3-96 KB; worktree-textmate 27 grammars;
theme-cursor 7 themes.

## 2. Tooling decision

- Copied scripts/recover/extensions/webpack.ts (ext-p0) to
  scripts/recover/extensions/agent/webpack.ts byte-identically (sha in the copy
  header) instead of importing another worker's file, per the task brief.
- Wrote inventory.ts / adopt.ts / split.ts / verify.ts / manifest.ts under
  scripts/recover/extensions/agent/. They write only
  recovered/extensions/agent/** and recovery/mappings/extensions-agent.json.

## 3. Findings

    $ bun scripts/recover/extensions/agent/inventory.ts
    cursor-always-local: 3 dist js (2 webpack, 385 modules), 7 shipped files, 1 unresolved
    cursor-retrieval: 1 dist js (1 webpack, 196 modules), 9 shipped files, 0 unresolved
    ...
    rollup: {"artifacts":16,"modules":1827,"shippedFiles":81}

- 25 dist JS artifacts across the 16 extensions; 14 carry a parseable webpack
  module map; the rest are esbuild single-entry bundles (socket, checkout,
  explorer, file-service, gitWorker.js, 5 browser-automation chunks).
- Every webpack artifact uses **numeric** module ids (no quoted paths), so no
  split module can reach confidence B from path evidence.
- Bundles are IIFE-wrapped: the webpack runtime **and the inlined entry module
  body** live after the module map. Footers reach 2.1 MB (retrieval) / 1.8 MB
  (agent-worker) / 0.9 MB (commits) / 0.86 MB (resolver-helper). Verified with a
  probe that no `}, <id>: (` boundaries exist after the map close, so the footer
  is a genuine single fragment, not a parser truncation.
- `cursor-retrieval` bundles `node_modules/@anysphere/file-service` including
  `file_service.darwin-universal.node` (native binding; recorded, not copied).
- `cursor-file-service/dist/main.js` is a 301-byte DUMMY shim (only
  `exports.DUMMY=1`); the real file service ships inside cursor-retrieval.

## 4. False-positive map hypothesis and fix

The generic object-literal fallback in webpack.ts matched esbuild's
`var t = { 613: (t2) => { ...` in cursor-explorer and produced a bogus
one-entry map. split.ts now demotes a one-entry map whose container is not
`__webpack_modules__`/`__webpack_esm_modules__`/`exports.modules`/`modules`
to a whole-file fragment and records the reason in MODULES.json `notes`.
Re-checked: cursor-explorer is now emitted as `whole.js` (basis esbuild-wrapper).
cursor-browser-automation chunks 691/716 keep a one-entry map because their
container is a real webpack container (chunk with one module).

## 5. Verification

    $ bun scripts/recover/extensions/agent/split.ts
    16 extensions, 25 artifacts, 1836 modules, all reassembly ok
    $ bun scripts/recover/extensions/agent/verify.ts
    verify totals: {"extensions":16,"artifacts":25,"modules":1836,"adopted":76,
      "idsFound":13,"idsTotal":13,"idsLiteral":10,"idsComposed":1,"schemaFiles":2}
    $ bun scripts/recover/audit.ts
    [recover] audit: 8475 source files, 8475 with provenance, 0 violations

## 6. Notes for the main thread

- ext-p0 already copied some of these extensions' configs into
  recovered/extensions/<ext>/ (CONFIGS.json). ext-agent keeps its own copies
  under recovered/extensions/agent/<ext>/shipped/ so ownership stays clean;
  the two trees duplicate ~20 files (same sha256).
- recovery/inventory/extensions.json counts webpack modules with a raw parser
  (e.g. always-local webpackModuleHits: 0 although main.js has 379 modules);
  extensions-agent.json is authoritative for these 16 extensions.
