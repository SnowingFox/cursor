# Patch evidence: editorContextKeys.js

- module: app-out-vs-workbench-workbench-glass-main-js:0744
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2872897..2878030
- upstream: src/vs/editor/common/editorContextKeys.ts sha256:2bd250b847e170a16c0d93282fe95ee435d0ce2a1a6d43ae278fc8de7c70b718
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 18
- bundle-only anchors: 2; upstream anchors absent from bundle: 81

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editorHasPromptBar | 2873116..2873134 | yes | t.editorTextFocus = new cn("editorTextFocus", false, D(780, null)), t.editorHasPromptBar = new cn("editorHasPromptBar", false, D(781, null)), t.editorPromptBa |
| editorPromptBarFocused | 2873190..2873212 | yes | orHasPromptBar = new cn("editorHasPromptBar", false, D(781, null)), t.editorPromptBarFocused = new cn("editorPromptBarFocused", false, D(782, null)), t.focus = ne |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| s text or an editor | 18 |

