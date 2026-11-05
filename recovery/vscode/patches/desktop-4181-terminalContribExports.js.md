# Patch evidence: terminalContribExports.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4181
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 24812937..24813626
- upstream: src/vs/workbench/contrib/terminal/terminalContribExports.ts sha256:6e6b499acced3b3f2d446e3d8bb0d3c5127361fd7c12156e2ad196f8829eae92
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.846; shared rare anchors: 1
- bundle-only anchors: 4; upstream anchors absent from bundle: 47

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.focusAccessibleBuffer | 24813132..24813179 | no (exists elsewhere upstream) | ), aer(), Fr_(), dxo(), cer = ((e) => (e.A11yFocusAccessibleBuffer = "workbench.action.terminal.focusAccessibleBuffer", e.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHo |
| workbench.action.terminal.restartPtyHost | 24813211..24813251 | no (exists elsewhere upstream) | .action.terminal.focusAccessibleBuffer", e.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHost", e))(cer \|\| {}), zjt = ((e) => (e.StickyScrollEnabled = "terminal.in |
| terminal.integrated.stickyScroll.enabled | 24813310..24813350 | no (exists elsewhere upstream) | tartPtyHost", e))(cer \|\| {}), zjt = ((e) => (e.StickyScrollEnabled = "terminal.integrated.stickyScroll.enabled", e.SuggestEnabled = "terminal.integrated.suggest.enabled", e))(zjt \| |
| terminal.integrated.suggest.enabled | 24813373..24813408 | no (exists elsewhere upstream) | led = "terminal.integrated.stickyScroll.enabled", e.SuggestEnabled = "terminal.integrated.suggest.enabled", e))(zjt \|\| {}), PMh = { ...bMh, ...yMh, ...kMh, ...EMh, ...xMh, ... |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|

