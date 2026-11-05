# Patch evidence: textEditor.js

- module: app-out-vs-workbench-workbench-glass-main-js:4803
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27525236..27532195
- upstream: src/vs/workbench/browser/parts/editor/textEditor.ts sha256:3bc845bdb40bc4e118f8d04a145daf0ac6d0f36ffd94aa51ae419e4acab5bfe2
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.933; shared rare anchors: 80
- bundle-only anchors: 2; upstream anchors absent from bundle: 8

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| code.navigation | 27529091..27529106 | no (exists elsewhere upstream) | ch (t.source) { case "api": return 1; case "code.navigation": return 4; case "code.jump": return 5; |
| code.jump | 27529143..27529152 | no (exists elsewhere upstream) | 1; case "code.navigation": return 4; case "code.jump": return 5; default: return 2; } |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| textEditorViewState | 51 |
| aria-label | 89 |
| editor | 112 |
| boolean | 161 |
| Control has not yet been initialized | 266 |

