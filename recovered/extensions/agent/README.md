# W2 ext-agent: recovered extension tree

Recovered from `app/extensions/` by task `ext-agent` (docs/recovery/TASKS/w2-ext-agent.md)
using `scripts/recover/extensions/agent/{inventory,adopt,split,verify,manifest}.ts`.
No file here is a byte-exact copy of original TypeScript: the app ships no
sourcemaps, so module bodies are webpack-compiled JavaScript with confidence
labels. Nothing is fabricated.

## Extensions

cursor-always-local, cursor-retrieval, cursor-commits, cursor-socket,
cursor-checkout, cursor-explorer, cursor-deeplink, cursor-file-service,
cursor-shadow-workspace, cursor-polyfills-remote, cursor-worktree-textmate,
theme-cursor, plus the four remaining cursor-* extensions the W1 ext-p0 wave did
not cover: cursor-agent-worker, cursor-browser-automation, cursor-ndjson-ingest,
cursor-resolver-helper.

## Layout per extension

    recovered/extensions/agent/<ext>/
      INVENTORY.json   package.json contributions, dist artifacts, shipped files
                       with sha256, third-party assets, unresolved list
      ADOPTED.json     manifest of shipped files copied verbatim
      MODULES.json     split artifacts: chunk, byte ranges, confidence, module
                       files, cursor.* id literals and export-name hints
      shipped/         shipped configs/schemas/nls/tsconfig/grammars/themes/media
                       (JSON & binaries byte-identical; .js/.cjs carry a
                       provenance header and are proven lossless by sha256)
      bundles/<chunk>/
        _prelude.js    bytes before the module map (webpack artifacts only)
        <module>.js    one webpack module entry (numeric id -> <id>.js)
        _footer.js     bytes after the module map: webpack runtime **and the
                       inlined entry module body** (activate/deactivate and most
                       contribution wiring live here, up to several MB)
        whole.js       whole artifact, for esbuild single-entry bundles

## Confidence

- A: shipped engineering files adopted byte-for-byte (configs, schemas,
  package.nls, tsconfigs, grammars, themes, notices, bundled dependency JS).
- C: every split module. All processed bundles use numeric webpack module ids,
  which carry no original path, so split modules are confidence C with basis
  `webpack-id` (or `esbuild-wrapper` for whole-file fragments). Quoted-path
  module keys would be B; none occur in these 16 extensions.
- The chunk/artifact association is exact: every artifact is reassembled from
  the emitted parts and compared by sha256 to `app/extensions/**`.

## Regenerate

    bun scripts/recover/extensions/agent/inventory.ts
    bun scripts/recover/extensions/agent/adopt.ts
    bun scripts/recover/extensions/agent/split.ts
    bun scripts/recover/extensions/agent/verify.ts     # exits non-zero on failure
    bun scripts/recover/extensions/agent/manifest.ts   # recovery/mappings/extensions-agent.json

## Limits

- Original TypeScript types, comments, tests and source paths are unrecoverable.
- `_footer.js` is one fragment because the entry module body is inlined there by
  the bundler; no safe internal boundary exists.
- The extension host API (`vscode`) is an external; runtime behaviour cannot be
  exercised without the Cursor extension host.
