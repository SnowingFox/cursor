# Patch evidence: terminalEditorInput.js

- module: app-out-vs-workbench-workbench-glass-main-js:4832
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27696792..27702417
- upstream: src/vs/workbench/contrib/terminal/browser/terminalEditorInput.ts sha256:dcfd01576ab565754a6500dd713ad05d502af8848c4cd9460e1106e353068608
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.933; shared rare anchors: 60
- bundle-only anchors: 4; upstream anchors absent from bundle: 18

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.confirmOnKill | 27698693..27698726 | no (exists elsewhere upstream) | d) return false; const t = this._configurationService.getValue("terminal.integrated.confirmOnKill"); return (t === "editor" \|\| t === "always") && this._terminalI |
| terminal.integrated.enablePersistentSessions | 27700023..27700067 | no (exists elsewhere upstream) | s._isShuttingDown = true, Nc(i), this._configurationService.getValue("terminal.integrated.enablePersistentSessions") && (r.reason === 3 \|\| r.context === "no-refs") ? t.detachProcessAnd |
| no-refs | 27700107..27700114 | yes | rated.enablePersistentSessions") && (r.reason === 3 \|\| r.context === "no-refs") ? t.detachProcessAndDispose(pG.Shutdown) : t.dispose(pG.Shutdown); |
| terminal-contribution-icon | 27700850..27700876 | yes | Actions \|\| this._terminalInstance.hasContributedAttention) && t.push("terminal-contribution-icon"), t; } detachInstance() { this._isShuttingDown \|\| (thi |

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

