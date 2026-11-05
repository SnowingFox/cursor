# Patch evidence: terminalProcessManager.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4424
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25853045..25874157
- upstream: src/vs/workbench/contrib/terminal/browser/terminalProcessManager.ts sha256:c982e386b41c2dc4e564fd369e3a7ad15c0362e23b56016e9a086789b0d0cc3f
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.969; shared rare anchors: 161
- bundle-only anchors: 2; upstream anchors absent from bundle: 42

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| task.reconnection | 25859763..25859780 | no (exists elsewhere upstream) | esolveEnvironment(a, c, e), p = (this._configurationService.getValue("task.reconnection") && e.reconnectionProperties \|\| !e.isFeatureTerminal) && this._termi |
| terminal.integrated.shellIntegration.enabled | 25860565..25860609 | no (exists elsewhere upstream) | = { shellIntegration: { enabled: this._configurationService.getValue("terminal.integrated.shellIntegration.enabled"), suggestEnabled: this._configurationService.getValue(zjt.SuggestEna |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| object | 181 |
| killportfailure | 203 |
| ${this.remoteAuthority} | 259 |
| Could not fetch remote environment | 327 |
| onProcessReady | 378 |
| sending prelaunch input queue | 388 |
| meganrogge | 400 |
| windows | 454 |
| Cannot fetch shell environment to use | 462 |
| ptyHostRelaunch | 570 |
| TerminalProcessManager.setDimensions called before initialization | 614 |
| queueing data in prelaunch input queue | 660 |
| Cannot refresh property when process is not set | 685 |
| s no recorder, which means it | 801 |

