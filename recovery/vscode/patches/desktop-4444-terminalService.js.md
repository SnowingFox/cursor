# Patch evidence: terminalService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4444
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 26085039..26125552
- upstream: src/vs/workbench/contrib/terminal/browser/terminalService.ts sha256:acd8bfa5f16eed55bfae26db773a1bfc878f9c068b366a3e7d66522036e232b4
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.868; shared rare anchors: 209
- bundle-only anchors: 2; upstream anchors absent from bundle: 202

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| no-refs | 26106266..26106273 | yes | tionService.config.enablePersistentSessions ? e === 3 ? true : t === "no-refs" : false; } async _onBeforeShutdownConfirmation(e) { co |
| terminal:create | 26113229..26113244 | yes | reateTerminal(e) { if (this._telemetryService.publicLogCapture("terminal:create"), this._terminalProfileService.availableProfiles.length === 0) { |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| veto.terminal | 227 |
| setDefault | 236 |
| createInstance | 246 |
| code/terminal/willGetTerminalBackend | 278 |
| code/terminal/didGetTerminalBackend | 280 |
| code/terminal/willReconnect | 310 |
| code/terminal/didReconnect | 321 |
| code/terminal/willReplay | 322 |
| code/terminal/didReplay | 325 |
| code/terminal/willGetPerformanceMarks | 326 |
| localPtyHost | 328 |
| code/terminal/didGetPerformanceMarks | 331 |
| Pty host ready | 449 |
| code/terminal/willGetTerminalLayoutInfo | 461 |
| code/terminal/didGetTerminalLayoutInfo | 463 |
| code/terminal/willRecreateTerminalGroups | 465 |
| code/terminal/didRecreateTerminalGroups | 467 |
| Reconnected to remote terminals | 472 |
| Reconnected to local terminals | 494 |
| always | 657 |
| hasChildProcesses | 658 |
| Exception occurred during terminal shutdown | 666 |
| onExit | 683 |
| onExitAndWindowClose | 690 |
| command | 789 |
| before | 817 |
| terminalService.terminalCloseConfirmationSingular | 939 |
| terminalService.terminalCloseConfirmationPlural | 941 |
| warning | 944 |
| terminate | 946 |
| object | 962 |
| Could not create terminal when process support is not registered | 1069 |
| onTerminal:* | 1093 |
| terminal.integrated | 1166 |
| Cannot split without an active instance | 1197 |
| t set the target unless it | 1250 |
| localTerminalVirtualWorkspace | 1295 |
| localTerminalRemote | 1298 |
| codicon | 1454 |

