# Patch evidence: coreCommands.js

- module: app-out-vs-workbench-workbench-glass-main-js:0747
- bundle: app/out/vs/workbench/workbench.glass.main.js range 2880050..2917907
- upstream: src/vs/editor/browser/coreCommands.ts sha256:68f22613a117e8782e18800c04d9623d207e3272626cdd34936efeba90d62c78
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.864; shared rare anchors: 213
- bundle-only anchors: 5; upstream anchors absent from bundle: 101

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| replacePreviousChar | 2917623..2917642 | no (exists elsewhere upstream) | red: ["text"], properties: { text: { type: "string" } } } }] }), O9t("replacePreviousChar"), O9t("compositionType"), O9t("compositionStart"), O9t("compositionE |
| compositionType | 2917651..2917666 | no (exists elsewhere upstream) | text: { type: "string" } } } }] }), O9t("replacePreviousChar"), O9t("compositionType"), O9t("compositionStart"), O9t("compositionEnd"), O9t("paste"), O9t( |
| compositionStart | 2917675..2917691 | no (exists elsewhere upstream) | } } } }] }), O9t("replacePreviousChar"), O9t("compositionType"), O9t("compositionStart"), O9t("compositionEnd"), O9t("paste"), O9t("cut"); } }); function HA |
| compositionEnd | 2917700..2917714 | no (exists elsewhere upstream) | PreviousChar"), O9t("compositionType"), O9t("compositionStart"), O9t("compositionEnd"), O9t("paste"), O9t("cut"); } }); function HAy(t) { return t && ty |
| paste | 2917723..2917728 | no (exists elsewhere upstream) | mpositionType"), O9t("compositionStart"), O9t("compositionEnd"), O9t("paste"), O9t("cut"); } }); function HAy(t) { return t && typeof t == "obj |

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

