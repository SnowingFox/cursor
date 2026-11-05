# Patch evidence: coreCommands.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0363
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 1056050..1093906
- upstream: src/vs/editor/browser/coreCommands.ts sha256:68f22613a117e8782e18800c04d9623d207e3272626cdd34936efeba90d62c78
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.864; shared rare anchors: 213
- bundle-only anchors: 5; upstream anchors absent from bundle: 101

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| replacePreviousChar | 1093622..1093641 | no (exists elsewhere upstream) | red: ["text"], properties: { text: { type: "string" } } } }] }), Qht("replacePreviousChar"), Qht("compositionType"), Qht("compositionStart"), Qht("compositionE |
| compositionType | 1093650..1093665 | no (exists elsewhere upstream) | text: { type: "string" } } } }] }), Qht("replacePreviousChar"), Qht("compositionType"), Qht("compositionStart"), Qht("compositionEnd"), Qht("paste"), Qht( |
| compositionStart | 1093674..1093690 | no (exists elsewhere upstream) | } } } }] }), Qht("replacePreviousChar"), Qht("compositionType"), Qht("compositionStart"), Qht("compositionEnd"), Qht("paste"), Qht("cut"); } }); function Wp |
| compositionEnd | 1093699..1093713 | no (exists elsewhere upstream) | PreviousChar"), Qht("compositionType"), Qht("compositionStart"), Qht("compositionEnd"), Qht("paste"), Qht("cut"); } }); function Wpg(e) { return e && ty |
| paste | 1093722..1093727 | no (exists elsewhere upstream) | mpositionType"), Qht("compositionStart"), Qht("compositionEnd"), Qht("paste"), Qht("cut"); } }); function Wpg(e) { return e && typeof e == "obj |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| Scroll editor in the given direction | 80 |
| Editor scroll argument object | 83 |
| : Unit to move. Default is computed based on  | 89 |
| revealCursor | 94 |
| required | 99 |
| properties | 100 |
| default | 111 |
| wrappedLine | 137 |
| halfPage | 139 |
| editor | 140 |
| column | 141 |
| Reveal the given line at the given logical position | 258 |
| Reveal line argument object | 261 |
| lineNumber | 263 |
| center | 266 |
| bottom | 301 |
| code-editor | 309 |
| generic-dom-input-textarea | 319 |
| generic-dom | 330 |
| _moveTo | 408 |
| _moveToSelect | 414 |
| columnSelect | 456 |
| undefined | 462 |
| cursorColumnSelectLeft | 478 |
| cursorColumnSelectRight | 497 |
| cursorColumnSelectUp | 529 |
| cursorColumnSelectPageUp | 541 |
| cursorColumnSelectDown | 567 |
| cursorColumnSelectPageDown | 579 |
| cursorMove | 592 |
| cursorLeft | 697 |
| cursorLeftSelect | 714 |
| cursorRight | 730 |
| cursorRightSelect | 747 |
| cursorUp | 763 |
| cursorUpSelect | 780 |
| cursorPageUp | 799 |
| cursorPageUpSelect | 815 |
| cursorDown | 831 |
| cursorDownSelect | 848 |

