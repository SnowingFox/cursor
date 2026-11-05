# Patch evidence: terminalContextKey.js

- module: app-out-vs-workbench-workbench-glass-main-js:4504
- bundle: app/out/vs/workbench/workbench.glass.main.js range 26438867..26442290
- upstream: src/vs/workbench/contrib/terminal/common/terminalContextKey.ts sha256:80746d08f6272506d0dd6d41d90a8dd4c2dd6573296ce93e6663c9d73554f62e
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.75; shared rare anchors: 36
- bundle-only anchors: 4; upstream anchors absent from bundle: 60

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminalHasContributionActions | 26441233..26441263 | yes | nEnabled", false, D(10617, null)), t.hasContributionActions = new cn("terminalHasContributionActions", false, D(10618, null)), t.shouldShowViewInlineActions = mt.and(mt.e |
| config.terminal.integrated.tabs.hideCondition | 26441366..26441411 | yes | ldShowViewInlineActions = mt.and(mt.equals("view", PA), mt.notEquals("config.terminal.integrated.tabs.hideCondition", "never"), mt.or(mt.not("config.terminal.integrated.tabs.enabled"), |
| config.terminal.integrated.tabs.enabled | 26441438..26441477 | yes | nfig.terminal.integrated.tabs.hideCondition", "never"), mt.or(mt.not("config.terminal.integrated.tabs.enabled"), mt.and(mt.equals("config.terminal.integrated.tabs.showActions", "s |
| config.terminal.integrated.tabs.showActions | 26441499..26441542 | yes | (mt.not("config.terminal.integrated.tabs.enabled"), mt.and(mt.equals("config.terminal.integrated.tabs.showActions", "singleTerminal"), mt.equals("terminalGroupCount", 1)), mt.and(mt.e |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| terminalIsOpen | 13 |
| terminalCount | 14 |
| terminalGroupCount | 15 |
| isTerminalTabsNarrow | 16 |
| terminalHasFixedWidth | 17 |
| terminalProcessSupported | 18 |
| terminalFocus | 19 |
| terminalFocusInAny | 20 |
| terminalAccessibleBufferFocus | 21 |
| terminalAccessibleBufferOnLastLine | 22 |
| terminalEditorFocus | 23 |
| terminalTabsFocus | 24 |
| terminalWebExtensionContributedProfile | 25 |
| terminalHasBeenCreated | 26 |
| terminalEditorActive | 27 |
| terminalTabsMouse | 28 |
| terminalAltBufferActive | 29 |
| terminalSuggestWidgetVisible | 30 |
| terminalA11yTreeFocus | 31 |
| terminalViewShowing | 32 |
| terminalTextSelected | 33 |
| terminalTextSelectedInFocused | 34 |
| terminalFindVisible | 35 |
| terminalFindInputFocused | 36 |
| terminalFindFocused | 37 |
| terminalTabsSingularSelection | 38 |
| terminalSplitTerminal | 39 |
| terminalSplitPaneActive | 40 |
| terminalShellType | 41 |
| inTerminalRunCommandPicker | 42 |
| terminalShellIntegrationEnabled | 43 |
| terminalDictationInProgress | 44 |
| singleTerminal | 154 |
| singleTerminalOrNarrow | 158 |
| singleGroup | 165 |
| always | 168 |

