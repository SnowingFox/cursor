# Patch evidence: menuService.js

- module: app-out-vs-workbench-workbench-glass-main-js:1044
- bundle: app/out/vs/workbench/workbench.glass.main.js range 4622522..4634321
- upstream: src/vs/platform/actions/common/menuService.ts sha256:522b07cab51c196a32820cbb83475ac8376963625b66ed3f25bb3816b727a9c3
- basis: import-graph confidence: A classification: upstream-modified
- dependency overlap: 0.769; shared rare anchors: 62
- bundle-only anchors: 8; upstream anchors absent from bundle: 17

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| menu.visibleCommands | 4628238..4628258 | yes | } }, yoe._key = "menu.hiddenCommands", yoe._visibleCommandsKey = "menu.visibleCommands", yoe._editorTitleBuiltInCommandPrefixes = ["workbench.", "_workbench |
| editor. | 4628333..4628340 | no (exists elsewhere upstream) | e._editorTitleBuiltInCommandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "mar |
| settings. | 4628344..4628353 | yes | tleBuiltInCommandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "com |
| debug. | 4628357..4628363 | yes | mandPrefixes = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], |
| terminal. | 4628367..4628376 | no (exists elsewhere upstream) | es = ["workbench.", "_workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], yoe = Re([F(0 |
| merge-conflict. | 4628388..4628403 | yes | _workbench.", "editor.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], yoe = Re([F(0, ki), F(1, yi)], yoe), mqo |
| markdown. | 4628407..4628416 | yes | or.", "settings.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], yoe = Re([F(0, ki), F(1, yi)], yoe), mqo = class oXs |
| composer. | 4628420..4628429 | yes | gs.", "debug.", "terminal.", "git.", "merge-conflict.", "markdown.", "composer."], yoe = Re([F(0, ki), F(1, yi)], yoe), mqo = class oXs { constru |

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

