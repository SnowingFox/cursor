# cursor-re

A runnable, readable reconstruction of the **Cursor** desktop app for macOS (arm64),
extracted from the official `Cursor-darwin-arm64.dmg` and analyzed with
[REA (Reverse Engineer Anything)](https://github.com/morluto/rea).

| | |
|---|---|
| Cursor | 3.24.18 (commit `be4c9e53`, built 2026-10-13) |
| VS Code base | 1.128.0 |
| Electron | 42.10.0 (Chrome 148) |

Upstream source maps point at an internal host (`go/sourcemap`) and are not
available, so the "source" here is the shipped JavaScript reformatted with
esbuild: identifiers stay minified, but every bundle is pretty-printed,
diffable and **runs as-is**.

## Quick start

```bash
git lfs install           # native binaries (.node, helpers) are stored in LFS
git clone https://github.com/SnowingFox/cursor.git && cd cursor
bun install               # Electron 42.10.0 (matches the ABI of app/'s native modules), Vite, TypeScript, …
bun run start             # builds "dist/Cursor RE.app" on first run, then launches it
```

`bun run start` runs with an isolated profile in `./.cursor-dev` (user data,
extensions, mock keychain), so it never touches an installed Cursor.
Use `bun run start -- --real-profile` to share the real profile instead.

## Local mode

The agent window runs **without a Cursor account or backend**: Settings >
Models > *Custom Providers* adds OpenAI Chat Completions, OpenAI Responses or
Anthropic Messages endpoints (each with its own model prefix, e.g.
`my-gateway/claude-opus-5`), the model list comes from the provider's `/models`,
and Cursor's agent harness runs locally against the selected provider.
Turns show live stats in the style of Claude Code
(`Planning next moves · 12s · ↓ 1.2k tokens`, `Thinking 4s · high effort`,
`Worked for 34s · ↓ 2.3k tokens`).

Local mode is on by default (`"cursorLocalMode": true` in `app/product.json`);
`CURSOR_LOCAL_MODE=0` turns it off for one launch.

## Layout

```
app/                       the application (== Cursor.app/Contents/Resources/app), runs as-is
  out/                     core: main process, workbench, extension host (reformatted upstream bundles)
    vs/workbench/contrib/localMode/   ← built from src/ (Vite)
  extensions/              built-in extensions incl. Cursor's own cursor-* extensions
    cursor-agent-exec/dist/localMode.js   ← built from extensions/cursor-agent-exec/src (Vite)
  node_modules/            third-party runtime deps (byte-identical to upstream)
  product.json             product configuration (checksums removed so edits are allowed)
src/                       our renderer sources, laid out like VS Code's src/
  vs/glass/host/           typed bridge to the agent window bundle + React shims
  vs/workbench/contrib/localMode/
    common/                provider model, formatting (no DOM / Node)
    browser/               model catalog, turn routing, turn stats, React components
    test/                  unit tests (Vitest)
extensions/<ext>/src/      our extension-host sources (VS Code's extensions/ layout)
build/patches/             glue patches into the upstream bundles + apply.mjs
upstream/                  version metadata, sha256 manifest, Info.plist/.icns of the extracted build
scripts/                   dev / build / start / package / extract tooling
```

Cursor's bundles are minified upstream output, so our code is not compiled
*into* them. Vite builds it into separate files next to the bundles, and
`build/patches` adds a small loader to each bundle. The loader publishes the
internals we need under readable names (`src/vs/glass/host/cursorHost.ts` is
the typed side), loads our module, and the patched call sites delegate to it.
Our React components use the agent window's own React instance. Patches are exact
string replacements applied to the pristine import commit, so re-applying
is idempotent and an upstream update shows exactly which anchors moved.

## Scripts

| Command | What it does |
|---|---|
| `bun run dev` | Hot-reload loop: Vite dev server for the agent window (edits under `src/` swap in without reloading), watch build for extension-host code (reloaded in place), launches the app. Reverts dev-only patches on exit |
| `bun run build` | Vite-build `src/` and `extensions/*/src` into `app/`, then apply `build/patches` |
| `bun run start` | Build `dist/Cursor RE.app` if needed and launch it |
| `bun run typecheck` / `test` / `lint` / `format` | TypeScript, Vitest, Biome |
| `bun run apply` / `apply:check` | (Re)apply the bundle patches / only verify their anchors |
| `bun run package` | Assemble `dist/Cursor RE.app`; `Resources/app` is a symlink to `./app`, so edits take effect on relaunch |
| `bun run package:standalone` | Same, but copies `./app` into the bundle (movable `.app`) |
| `bun run extract -- <Cursor.dmg\|Cursor.app>` | Re-extract from an upstream build (e.g. to update versions) |
| `bun run split` | Split the big bundles into one file per module under `.modules/` (read-only browsing aid) |

`app/` is committed in its built state (patched bundles plus the Vite output),
so a fresh clone runs without a build step. Run `bun run build` before committing
source changes.

## How it runs

REA's `inspect-electron-fuses` shows upstream ships with `OnlyLoadAppFromAsar`
and `EmbeddedAsarIntegrityValidation` **disabled**,
so the stock Electron 42.10.0 binary from npm loads `Resources/app` as a plain
directory, exactly like the official build. Because the Electron version is
identical, the prebuilt native modules in `app/` (`node-pty`, `sqlite3`,
`spdlog`, `@parcel/watcher`, …) load without rebuilding.

`dist/Cursor RE.app` uses upstream's `Info.plist` (document types, `cursor://`
scheme) with its own name and bundle id (`dev.snowingfox.cursor-re`); the
executable and Electron's helper apps are renamed to match (`Cursor RE Helper
(Renderer)`, …) and everything is signed ad-hoc. `product.json` is unchanged,
so the app still uses Cursor's data folder and URL scheme.

## Notes

- macOS arm64 only (the native binaries in `app/` are darwin builds).
- Cursor is proprietary software by Anysphere, Inc. This repository is a
  private research/interoperability workspace; don't redistribute it.
