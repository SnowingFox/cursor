# Patch evidence: quickDiffDecorator.js

- module: app-out-vs-workbench-workbench-glass-main-js:6345
- bundle: app/out/vs/workbench/workbench.glass.main.js range 33889373..33898120
- upstream: src/vs/workbench/contrib/scm/browser/quickDiffDecorator.ts sha256:7cf7189753da7916e4e33f7fa7d27d7349e7ec231b63f2d5c7416082bc85b829
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.941; shared rare anchors: 85
- bundle-only anchors: 2; upstream anchors absent from bundle: 42

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| dirty-diff-added-pattern | 33890185..33890209 | yes | sWholeLine: true }), this.addedPatternOptions = LKe.createDecoration("dirty-diff-added-pattern", l, { gutter: s, overview: { active: o, color: P_l }, minimap: { act |
| dirty-diff-modified-pattern | 33890590..33890617 | yes | oleLine: true }), this.modifiedPatternOptions = LKe.createDecoration("dirty-diff-modified-pattern", c, { gutter: s, overview: { active: o, color: R_l }, minimap: { act |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| dirty-diff-decoration | 36 |
| scm.diffDecorations | 82 |
|  \|\| decorations ===  | 83 |
| diffAdded | 87 |
| dirty-diff-added primary | 94 |
| dirty-diff-added primary pattern | 95 |
| dirty-diff-added secondary | 96 |
| dirty-diff-added secondary pattern | 97 |
| diffModified | 99 |
| dirty-diff-modified primary | 106 |
| dirty-diff-modified primary pattern | 107 |
| dirty-diff-modified secondary | 108 |
| dirty-diff-modified secondary pattern | 109 |
| diffDeleted | 111 |
| dirty-diff-deleted primary | 118 |
| dirty-diff-deleted secondary | 119 |
| scm.diffDecorationsGutterPattern | 122 |
| primary | 137 |
| always | 215 |
| scm.diffDecorationsGutterWidth | 255 |
| scm.diffDecorationsGutterVisibility | 259 |
| contributed | 383 |

