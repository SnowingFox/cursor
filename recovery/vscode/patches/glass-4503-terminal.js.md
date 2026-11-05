# Patch evidence: terminal.js

- module: app-out-vs-workbench-workbench-glass-main-js:4503
- bundle: app/out/vs/workbench/workbench.glass.main.js range 26430951..26438867
- upstream: src/vs/workbench/contrib/terminal/common/terminal.ts sha256:6e06aea5bb5fe31673d07b277419143b0779ccc5c218b62c94cc59fb56d6c18c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 270
- bundle-only anchors: 29; upstream anchors absent from bundle: 327

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.externalAgentActions | 26433424..26433470 | yes | tion.terminal.sendSequence", "workbench.action.terminal.sendSignal", "workbench.action.terminal.externalAgentActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench. |
| workbench.action.terminal.externalAgentSecondOpinion | 26433474..26433526 | yes | minal.sendSignal", "workbench.action.terminal.externalAgentActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench.action.terminal.externalAgentAsk", "workbench.action.ter |
| workbench.action.terminal.externalAgentAsk | 26433530..26433572 | yes | entActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench.action.terminal.externalAgentAsk", "workbench.action.terminal.selectAll", "workbench.action.terminal.s |
| editor.action.accessibilityHelp | 26434009..26434040 | no (exists elsewhere upstream) | l", "workbench.action.terminal.focusHover", Ccd, Tcd, Ecd, Icd, xcd, "editor.action.accessibilityHelp", "workbench.action.tasks.rerunForActiveTerminal", "editor.action.tog |
| workbench.action.backgroundComposer.escapeToClose | 26437468..26437517 | yes | al.chat.insertCommand", "workbench.action.terminal.chat.viewInChat", "workbench.action.backgroundComposer.escapeToClose", ...Cyg, "glass.nextTab", "glass.previousTab", "glass.openChangesTab |
| glass.nextTab | 26437529..26437542 | yes | nChat", "workbench.action.backgroundComposer.escapeToClose", ...Cyg, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab" |
| glass.previousTab | 26437546..26437563 | yes | h.action.backgroundComposer.escapeToClose", ...Cyg, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab |
| glass.openChangesTab | 26437567..26437587 | yes | mposer.escapeToClose", ...Cyg, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", |
| glass.openBrowserTab | 26437591..26437611 | yes | ..Cyg, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", |
| glass.openFilesTab | 26437615..26437633 | yes | "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKey |
| glass.togglePanel | 26437637..26437654 | yes | glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAge |
| glass.toggleTerminal | 26437658..26437678 | yes | , "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", |
| glass.newAgentFromKeyboard | 26437682..26437708 | yes | , "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTab |
| glass.newAgentKeepPaneFromKeyboard | 26437712..26437746 | yes | .togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput |
| glass.newTab | 26437750..26437762 | yes | "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggle |
| glass.newTabFromAgentWorkspace | 26437766..26437796 | yes | FromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToT |
| glass.focusInput | 26437800..26437816 | yes | PaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab |
| glass.toggleSidebarFromKeyboard | 26437820..26437851 | yes | glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTa |
| glass.goToTab1 | 26437855..26437869 | yes | ntWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTa |
| glass.goToTab2 | 26437873..26437887 | yes | ss.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTa |
| glass.goToTab3 | 26437891..26437905 | yes | lass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTa |
| glass.goToTab4 | 26437909..26437923 | yes | FromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTa |
| glass.goToTab5 | 26437927..26437941 | yes | ass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTa |
| glass.goToTab6 | 26437945..26437959 | yes | ass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAg |
| glass.goToTab7 | 26437963..26437977 | yes | ass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previ |
| glass.goToTab8 | 26437981..26437995 | yes | ass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], Ryg = |
| glass.goToTab9 | 26437999..26438013 | yes | ass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], Ryg = { extensionPoint: |
| glass.nextAgent | 26438017..26438032 | yes | ass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], Ryg = { extensionPoint: "terminal", default |
| glass.previousAgent | 26438036..26438055 | yes | ss.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], Ryg = { extensionPoint: "terminal", defaultExtensionKind: ["worksp |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| terminal.integrated.env.windows | 115 |
| terminal.integrated.env.osx | 116 |
| terminal.integrated.env.linux | 117 |
| terminal.integrated.cwd | 118 |
| terminal.integrated.detectLocale | 119 |
| default | 149 |
| outline | 154 |
| workspaceRoot | 184 |
| notRemote | 187 |
| always | 194 |
| singleClick | 196 |
| onExit | 205 |
| primary status | 370 |
| workbench.action.terminal.toggleTerminal | 409 |
| workbench.action.terminal.kill | 410 |
| workbench.action.terminal.killViewOrEditor | 411 |
| workbench.action.terminal.killEditor | 412 |
| workbench.action.terminal.killActiveTab | 413 |
| workbench.action.terminal.killAll | 414 |
| workbench.action.terminal.quickKill | 415 |
| workbench.action.terminal.openSettings | 416 |
| workbench.action.terminal.learnMore | 417 |
| workbench.action.terminal.copyLastCommand | 418 |
| workbench.action.terminal.copyLastCommandOutput | 419 |
| workbench.action.terminal.copyLastCommandAndLastCommandOutput | 420 |
| workbench.action.terminal.copyAndClearSelection | 421 |
| workbench.action.terminal.copySelection | 422 |
| workbench.action.terminal.copySelectionAsHtml | 423 |
| workbench.action.terminal.selectAll | 424 |
| workbench.action.terminal.deleteWordLeft | 425 |
| workbench.action.terminal.deleteWordRight | 426 |
| workbench.action.terminal.deleteToLineStart | 427 |
| workbench.action.terminal.moveToLineStart | 428 |
| workbench.action.terminal.moveToLineEnd | 429 |
| workbench.action.terminal.new | 430 |
| workbench.action.terminal.newWithCwd | 431 |
| workbench.action.terminal.newLocal | 432 |
| workbench.action.terminal.newInActiveWorkspace | 433 |
| workbench.action.terminal.newWithProfile | 434 |
| workbench.action.terminal.split | 435 |

