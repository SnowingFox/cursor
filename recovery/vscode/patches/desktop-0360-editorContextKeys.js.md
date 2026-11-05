# Patch evidence: editorContextKeys.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0360
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 1048898..1054031
- upstream: src/vs/editor/common/editorContextKeys.ts sha256:2bd250b847e170a16c0d93282fe95ee435d0ce2a1a6d43ae278fc8de7c70b718
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 18
- bundle-only anchors: 2; upstream anchors absent from bundle: 81

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editorHasPromptBar | 1049117..1049135 | yes | e.editorTextFocus = new At("editorTextFocus", false, S(780, null)), e.editorHasPromptBar = new At("editorHasPromptBar", false, S(781, null)), e.editorPromptBa |
| editorPromptBarFocused | 1049191..1049213 | yes | orHasPromptBar = new At("editorHasPromptBar", false, S(781, null)), e.editorPromptBarFocused = new At("editorPromptBarFocused", false, S(782, null)), e.focus = ne |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| s text or an editor | 18 |

