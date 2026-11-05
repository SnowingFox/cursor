# Patch evidence: electronPtyHostStarter.js

- module: app-out-main-js:0799
- bundle: app/out/main.js range 2384386..2387426
- upstream: src/vs/platform/terminal/electron-main/electronPtyHostStarter.ts sha256:20776b27d13f59641b0d51407fa8e0b48874e36d6226876253e3f0c3d6963e47
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.923; shared rare anchors: 34
- bundle-only anchors: 3; upstream anchors absent from bundle: 5

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal pty-host | 2385603..2385620 | yes | {e.port}`] : void 0; this.utilityProcess.start({ processTitle: "terminal pty-host", type: "ptyHost", entryPoint: "vs/platform/terminal/node/ptyHostMain |
| terminal.integrated.developer.ptyHost.latency | 2386695..2386740 | no (exists elsewhere upstream) | nectConstants.scrollback) }, t = this._configurationService.getValue("terminal.integrated.developer.ptyHost.latency"); t && typeof t == "number" && (e.VSCODE_LATENCY = String(t)); |
| terminal.integrated.developer.ptyHost.startupDelay | 2386864..2386914 | no (exists elsewhere upstream) | CY = String(t)); const n = this._configurationService.getValue("terminal.integrated.developer.ptyHost.startupDelay"); return n && typeof n == "number" && (e.VSCODE_STARTUP_DELAY |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| vscode:createPtyHostMessageChannel | 44 |
| --nolazy | 55 |
| ptyHost | 60 |
| pty-host | 61 |
| vs/platform/terminal/node/ptyHostMain | 62 |
| --logsPath | 64 |
| vscode:createPtyHostMessageChannelResult | 124 |

