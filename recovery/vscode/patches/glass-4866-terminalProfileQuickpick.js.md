# Patch evidence: terminalProfileQuickpick.js

- module: app-out-vs-workbench-workbench-glass-main-js:4866
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27956569..27962987
- upstream: src/vs/workbench/contrib/terminal/browser/terminalProfileQuickpick.ts sha256:2252dd109b507b4f2f06a798d3754bd89158744172fd990da1fc4b4897e768f8
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.923; shared rare anchors: 47
- bundle-only anchors: 2; upstream anchors absent from bundle: 29

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.profiles. | 27957070..27957099 | no (exists elsewhere upstream) | const e = await this._terminalProfileService.getPlatformKey(), n = "terminal.integrated.profiles." + e, i = await this._createAndShow(t), r = `terminal.integrated.defa |
| command | 27957251..27957258 | no (exists elsewhere upstream) | {e}`; if (i) { if (t === "setDefault") { if ("command" in i.profile) return; if ("id" in i.profile) return await |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| setDefault | 36 |
| object | 65 |
| createInstance | 78 |
| enterTerminalProfileName | 132 |
| terminalProfileAlreadyExists | 136 |
| separator | 159 |
| unsafePathWarning | 256 |
| cancel | 261 |
| createQuickLaunchProfile | 274 |
| ${e.replace(/ | 291 |

