# Patch evidence: terminalContribExports.js

- module: app-out-vs-workbench-workbench-glass-main-js:4502
- bundle: app/out/vs/workbench/workbench.glass.main.js range 26430262..26430951
- upstream: src/vs/workbench/contrib/terminal/terminalContribExports.ts sha256:6e6b499acced3b3f2d446e3d8bb0d3c5127361fd7c12156e2ad196f8829eae92
- basis: import-graph confidence: B classification: upstream-modified
- dependency overlap: 0.846; shared rare anchors: 1
- bundle-only anchors: 4; upstream anchors absent from bundle: 47

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.focusAccessibleBuffer | 26430457..26430504 | no (exists elsewhere upstream) | ), Gas(), z0k(), Pdl(), qas = ((t) => (t.A11yFocusAccessibleBuffer = "workbench.action.terminal.focusAccessibleBuffer", t.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHo |
| workbench.action.terminal.restartPtyHost | 26430536..26430576 | no (exists elsewhere upstream) | .action.terminal.focusAccessibleBuffer", t.DeveloperRestartPtyHost = "workbench.action.terminal.restartPtyHost", t))(qas \|\| {}), GAn = ((t) => (t.StickyScrollEnabled = "terminal.in |
| terminal.integrated.stickyScroll.enabled | 26430635..26430675 | no (exists elsewhere upstream) | tartPtyHost", t))(qas \|\| {}), GAn = ((t) => (t.StickyScrollEnabled = "terminal.integrated.stickyScroll.enabled", t.SuggestEnabled = "terminal.integrated.suggest.enabled", t))(GAn \| |
| terminal.integrated.suggest.enabled | 26430698..26430733 | no (exists elsewhere upstream) | led = "terminal.integrated.stickyScroll.enabled", t.SuggestEnabled = "terminal.integrated.suggest.enabled", t))(GAn \|\| {}), wyg = { ...cyg, ...uyg, ...hyg, ...fyg, ...vyg, ... |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|

