# Patch evidence: environmentService.js

- module: app-out-vs-workbench-workbench-glass-main-js:4177
- bundle: app/out/vs/workbench/workbench.glass.main.js range 24022064..24028718
- upstream: src/vs/platform/environment/common/environmentService.ts sha256:b5d91b66b3923ae6deebbdb48c714adaae2027efc54a29cb95b08e8029f686fb
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.778; shared rare anchors: 43
- bundle-only anchors: 2; upstream anchors absent from bundle: 18

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| settings.json | 24023435..24023448 | no (exists elsewhere upstream) | ource() { return Os(rt.file(Z0(this.userDataPath, "Machine")), "settings.json"); } get workspaceStorageHome() { return Os(this.appSet |
| machineSettingsResource | 24023347..24023370 | yes | h); } get sync() { return this.args.sync; } get machineSettingsResource() { return Os(rt.file(Z0(this.userDataPath, "Machine")), "setti |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| globalStorage | 65 |
| workspaceStorage | 86 |
| History | 89 |
| keyboardLayout.json | 92 |
| VSCODE_PORTABLE | 96 |
| argv.json | 98 |
| Workspaces | 108 |
| builtin-extensions-dir | 112 |
| ).fsPath,  | 117 |
| extensions-download-dir | 122 |
| CachedExtensionVSIXs | 127 |
| extensions-dir | 132 |
| VSCODE_EXTENSIONS | 137 |
| extensions | 144 |
| shared-data-dir | 152 |
| shared-data | 159 |
|  \|\| kind ===  | 183 |
| disable-extensions | 201 |
| disable-extension | 205 |
| string | 207 |
| VSCODE_SKIP_BUILTIN_EXTENSIONS | 220 |
| VSCODE_DEV | 231 |
| machineid | 249 |
| crash-reporter-id | 251 |
| crash-reporter-directory | 252 |
| disable-telemetry | 255 |
| disable-experiments | 258 |
| disable-workspace-trust | 261 |
| use-inmemory-secretstorage | 264 |
| __enable-file-policy | 268 |
| policy.json | 271 |
| agent-sessions.code-workspace | 281 |
| editSessionId | 284 |
| export-policy-data | 287 |
| export-default-keybindings | 291 |
| continueOn | 295 |
| inspect-extensions | 312 |

