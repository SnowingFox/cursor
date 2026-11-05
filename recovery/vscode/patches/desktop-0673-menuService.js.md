# Patch evidence: menuService.js

- module: app-out-vs-workbench-workbench-desktop-main-js:0673
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 2890784..2902567
- upstream: src/vs/platform/actions/common/menuService.ts sha256:522b07cab51c196a32820cbb83475ac8376963625b66ed3f25bb3816b727a9c3
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.769; shared rare anchors: 62
- bundle-only anchors: 8; upstream anchors absent from bundle: 17

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| menu.visibleCommands | 2896487..2896507 | yes | } }, zK._key = "menu.hiddenCommands", zK._visibleCommandsKey = "menu.visibleCommands", zK._editorTitleBuiltInCommandPrefixes = ["workbench.", "_workbench. |
| editor. | 2896581..2896588 | no (exists elsewhere upstream) | K._editorTitleBuiltInCommandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "mar |
| settings. | 2896592..2896601 | yes | tleBuiltInCommandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "com |
| debug. | 2896605..2896611 | yes | mandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], |
| terminal. | 2896615..2896624 | no (exists elsewhere upstream) | es = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], zK = ie([C(0, |
| merge-conflict. | 2896636..2896651 | yes | _workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], zK = ie([C(0, yn), C(1, qt)], zK), uis = |
| markdown. | 2896655..2896664 | yes | or.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], zK = ie([C(0, yn), C(1, qt)], zK), uis = class b1r { |
| composer. | 2896668..2896677 | yes | gs.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], zK = ie([C(0, yn), C(1, qt)], zK), uis = class b1r { construct |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| menu.hiddenCommands | 57 |
| FAILED to read storage after UPDATE | 82 |
| navigation | 332 |
| string | 363 |
| hide.label | 470 |
| configure keybinding | 491 |
| workbench.action.openGlobalKeybindings | 498 |

