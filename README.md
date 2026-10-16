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
npm install               # Electron 42.10.0 (matches the ABI of app/'s native modules) + esbuild
npm start                 # builds dist/Cursor.app on first run, then launches it
```

`npm start` runs with an isolated profile in `./.cursor-dev` (user data,
extensions, mock keychain), so it never touches an installed Cursor.
Use `npm start -- --real-profile` to share the real profile instead.

## Layout

```
app/                 the application (== Cursor.app/Contents/Resources/app)
  out/               core: main process, workbench, extension host (reformatted)
  extensions/        built-in extensions incl. Cursor's own cursor-* extensions
  node_modules/      third-party runtime deps (byte-identical to upstream)
  resources/         helpers (bundled node, sandbox, …) and tray assets
  product.json       product configuration (checksums removed so edits are allowed)
upstream/
  upstream.json      version/commit/Electron metadata of the extracted build
  manifest.json      sha256 of every original file before reformatting
  darwin/            upstream Info.plist + .icns used to assemble the bundle
scripts/
  extract.mjs        DMG/.app -> app/ (+ esbuild reformat, manifest)
  package-app.mjs    stock Electron + app/ -> dist/Cursor.app
  start.mjs          launch dist/Cursor.app with an isolated profile
docs/
  rea/               REA evidence (Electron fuses, main-process/IPC boundaries)
```

## Scripts

| Command | What it does |
|---|---|
| `npm start` | Build (if needed) and launch `dist/Cursor.app` |
| `npm run build` | Assemble `dist/Cursor.app`; `Resources/app` is a symlink to `./app`, so edits take effect on relaunch |
| `npm run build:standalone` | Same, but copies `./app` into the bundle (movable `.app`) |
| `npm run extract -- <Cursor.dmg\|Cursor.app>` | Re-extract from an upstream build (e.g. to update versions) |

## How it runs

REA's `inspect-electron-fuses` shows upstream ships with `OnlyLoadAppFromAsar`
and `EmbeddedAsarIntegrityValidation` **disabled** (`docs/rea/electron-fuses.json`),
so the stock Electron 42.10.0 binary from npm loads `Resources/app` as a plain
directory, exactly like the official build. Because the Electron version is
identical, the prebuilt native modules in `app/` (`node-pty`, `sqlite3`,
`spdlog`, `@parcel/watcher`, …) load without rebuilding.

`dist/Cursor.app` uses upstream's `Info.plist` (document types, `cursor://`
scheme) with its own bundle id (`dev.snowingfox.cursor-re`) and an ad-hoc
signature.

## Notes

- macOS arm64 only (the native binaries in `app/` are darwin builds).
- Cursor is proprietary software by Anysphere, Inc. This repository is a
  private research/interoperability workspace; don't redistribute it.
