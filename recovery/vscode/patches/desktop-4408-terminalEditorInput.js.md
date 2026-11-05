# Patch evidence: terminalEditorInput.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4408
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25818789..25824414
- upstream: src/vs/workbench/contrib/terminal/browser/terminalEditorInput.ts sha256:dcfd01576ab565754a6500dd713ad05d502af8848c4cd9460e1106e353068608
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.933; shared rare anchors: 60
- bundle-only anchors: 4; upstream anchors absent from bundle: 18

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.confirmOnKill | 25820690..25820723 | no (exists elsewhere upstream) | d) return false; const e = this._configurationService.getValue("terminal.integrated.confirmOnKill"); return (e === "editor" \|\| e === "always") && this._terminalI |
| terminal.integrated.enablePersistentSessions | 25822020..25822064 | no (exists elsewhere upstream) | s._isShuttingDown = true, Lo(i), this._configurationService.getValue("terminal.integrated.enablePersistentSessions") && (r.reason === 3 \|\| r.context === "no-refs") ? e.detachProcessAnd |
| no-refs | 25822104..25822111 | yes | rated.enablePersistentSessions") && (r.reason === 3 \|\| r.context === "no-refs") ? e.detachProcessAndDispose(pG.Shutdown) : e.dispose(pG.Shutdown); |
| terminal-contribution-icon | 25822847..25822873 | yes | Actions \|\| this._terminalInstance.hasContributedAttention) && e.push("terminal-contribution-icon"), e; } detachInstance() { this._isShuttingDown \|\| (thi |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| workbench.editors.terminal | 29 |
| cannot set instance that has already been set | 68 |
| editor | 101 |
| confirmDirtyTerminal.message | 110 |
| confirmDirtyTerminal.button | 111 |
| confirmDirtyTerminal.detail | 114 |
| terminal-tab | 209 |

