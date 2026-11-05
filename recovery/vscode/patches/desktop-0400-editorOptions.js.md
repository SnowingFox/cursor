# Patch evidence: editorOptions.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0400
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 1251705..1326910
- upstream: src/vs/editor/common/config/editorOptions.ts sha256:8f24aa725cbab484d78588985d7ed657efc8449d784063b2bbaa85cd8482d8f0
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.8; shared rare anchors: 389
- bundle-only anchors: 2; upstream anchors absent from bundle: 1260

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| editor.action.explainSymbol | 1263331..1263358 | yes | itor.action.peekTypeDefinition", "editor.action.goToTypeDefinition", "editor.action.explainSymbol", "editor.action.peekDeclaration", "editor.action.revealDeclaration", |
| Courier New | 1310334..1310345 | no (exists elsewhere upstream) | steSelector, ["afterPaste", "never"]) }; } }, vOc = "Consolas, 'Courier New', monospace", _Oc = "Menlo, Monaco, 'Courier New', monospace", bOc = |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| default | 127 |
|  for Windows and macOS and  | 130 |
| dimmed | 132 |
| prompt | 135 |
| editable | 202 |
| explicit | 258 |
| wordWrapColumn | 339 |
| bounded | 340 |
| inherit | 347 |
| simple | 368 |
| normal | 386 |
| keepAll | 387 |
| clickAndHover | 412 |
| ctrlCmd | 454 |
| spread | 462 |
| bottom | 597 |
| onlySnippets | 623 |
| singleFile | 641 |
| multiFile | 644 |
| mouseover | 702 |
| always | 704 |
| selection | 727 |
| legacy | 965 |
| insert | 1058 |
| object | 1148 |
| _never_ | 1174 |
| undefined | 1224 |
| boolean | 1238 |
| string | 1253 |
| number | 1256 |
| integer | 1276 |
| brackets | 1438 |
| advanced | 1439 |
| accessibilitySupport | 1452 |
| accessibilitySupport.auto | 1457 |
| accessibilitySupport.on | 1458 |
| accessibilitySupport.off | 1459 |
| accessibility | 1462 |
| comments | 1519 |
| editor.comments.insertSpace | 1521 |

