# W1-3 vscode-baseline

Owner: subagent vscode-baseline
Owned paths: recovery/vscode/**, scripts/recover/vscode/**, docs/recovery/runs/vscode-baseline/**

Read first: docs/recovery/PLAN.md, TRACE.md, CONVENTIONS.md, this file, recovery/inventory/*.json (bundles, nls, upstream).

## Goal

Produce the authoritative mapping between Cursor bundle modules and the public VS Code 1.128.0 source (commit fc3def6774c76082adf699d366f31a557ce5573f), classify every module as upstream-exact / upstream-modified / cursor-added / third-party, and report Cursor patch candidates.

## Inputs

- .vendor/vscode-1.128.0/ (main thread clones tag; do not re-download).
- recovery/inventory/bundles.json + modules.json (module records from the esbuild inventory; if missing, wait/report).
- app/out/nls.keys.json.
- app/out/vs/workbench/*.js bundles (read-only slices).

## Work

1. Build src/vs path index from .vendor/vscode-1.128.0: path -> sha256, type (ts/tsx/js), size. Write recovery/vscode/upstream-index.json.
2. nls exact matching: for each nls path, resolve to src/<path>.ts/.tsx; mark present/absent. Write recovery/vscode/nls-map.json.
3. Bundle module matching: for every bundle module, assign candidate upstream paths using (a) nls exact, (b) basename + directory, (c) import graph, (d) literal anchors (command ids, setting ids, nls keys). Record basis and confidence.
4. Classification: upstream-exact (identical content fingerprint after normalization), upstream-modified (same file with Cursor changes), cursor-added (Cursor-only path), third-party (node_modules). For modified files, extract the differing statements/anchors into recovery/vscode/patches/<module>.patch or .md with evidence ranges; do not invent intent.
5. Write recovery/vscode/module-map.json and patch-report.md: counts, per-module basis/confidence, unresolved list.
6. Provide scripts/recover/vscode/materialize.ts that can copy exact upstream files into recovered/vscode/src/ on demand (dry-run by default; no app edits).
7. Write runs/vscode-baseline/TRACE.md + REPORT.md.

## Acceptance

- module-map.json covers every module in the inventory with a status (matched/unresolved), basis and confidence.
- nls-map.json reconciles 1,150 paths: 970 present upstream, 180 absent (or explains discrepancies).
- patch-report.md lists modified/added modules with evidence locations and confidence; no claims without evidence.
- materialize.ts is read-only by default and does not touch app/.

## Do not

- Do not edit app/, packages/, root manifests, .vendor/, or other agents' outputs.
- Do not fetch a different VS Code version; use only 1.128.0.
- Do not label an inferred match as exact without content evidence.
