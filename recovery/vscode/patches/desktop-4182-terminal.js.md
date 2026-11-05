# Patch evidence: terminal.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4182
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 24813626..24821542
- upstream: src/vs/workbench/contrib/terminal/common/terminal.ts sha256:6e06aea5bb5fe31673d07b277419143b0779ccc5c218b62c94cc59fb56d6c18c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.667; shared rare anchors: 270
- bundle-only anchors: 29; upstream anchors absent from bundle: 327

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| workbench.action.terminal.externalAgentActions | 24816099..24816145 | yes | tion.terminal.sendSequence", "workbench.action.terminal.sendSignal", "workbench.action.terminal.externalAgentActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench. |
| workbench.action.terminal.externalAgentSecondOpinion | 24816149..24816201 | yes | minal.sendSignal", "workbench.action.terminal.externalAgentActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench.action.terminal.externalAgentAsk", "workbench.action.ter |
| workbench.action.terminal.externalAgentAsk | 24816205..24816247 | yes | entActions", "workbench.action.terminal.externalAgentSecondOpinion", "workbench.action.terminal.externalAgentAsk", "workbench.action.terminal.selectAll", "workbench.action.terminal.s |
| editor.action.accessibilityHelp | 24816684..24816715 | no (exists elsewhere upstream) | l", "workbench.action.terminal.focusHover", dmn, hKr, hmn, tgi, ngi, "editor.action.accessibilityHelp", "workbench.action.tasks.rerunForActiveTerminal", "editor.action.tog |
| workbench.action.backgroundComposer.escapeToClose | 24820143..24820192 | yes | al.chat.insertCommand", "workbench.action.terminal.chat.viewInChat", "workbench.action.backgroundComposer.escapeToClose", ...LMh, "glass.nextTab", "glass.previousTab", "glass.openChangesTab |
| glass.nextTab | 24820204..24820217 | yes | nChat", "workbench.action.backgroundComposer.escapeToClose", ...LMh, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab" |
| glass.previousTab | 24820221..24820238 | yes | h.action.backgroundComposer.escapeToClose", ...LMh, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab |
| glass.openChangesTab | 24820242..24820262 | yes | mposer.escapeToClose", ...LMh, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", |
| glass.openBrowserTab | 24820266..24820286 | yes | ..LMh, "glass.nextTab", "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", |
| glass.openFilesTab | 24820290..24820308 | yes | "glass.previousTab", "glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKey |
| glass.togglePanel | 24820312..24820329 | yes | glass.openChangesTab", "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAge |
| glass.toggleTerminal | 24820333..24820353 | yes | , "glass.openBrowserTab", "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", |
| glass.newAgentFromKeyboard | 24820357..24820383 | yes | , "glass.openFilesTab", "glass.togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTab |
| glass.newAgentKeepPaneFromKeyboard | 24820387..24820421 | yes | .togglePanel", "glass.toggleTerminal", "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput |
| glass.newTab | 24820425..24820437 | yes | "glass.newAgentFromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggle |
| glass.newTabFromAgentWorkspace | 24820441..24820471 | yes | FromKeyboard", "glass.newAgentKeepPaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToT |
| glass.focusInput | 24820475..24820491 | yes | PaneFromKeyboard", "glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab |
| glass.toggleSidebarFromKeyboard | 24820495..24820526 | yes | glass.newTab", "glass.newTabFromAgentWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTa |
| glass.goToTab1 | 24820530..24820544 | yes | ntWorkspace", "glass.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTa |
| glass.goToTab2 | 24820548..24820562 | yes | ss.focusInput", "glass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTa |
| glass.goToTab3 | 24820566..24820580 | yes | lass.toggleSidebarFromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTa |
| glass.goToTab4 | 24820584..24820598 | yes | FromKeyboard", "glass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTa |
| glass.goToTab5 | 24820602..24820616 | yes | ass.goToTab1", "glass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTa |
| glass.goToTab6 | 24820620..24820634 | yes | ass.goToTab2", "glass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAg |
| glass.goToTab7 | 24820638..24820652 | yes | ass.goToTab3", "glass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previ |
| glass.goToTab8 | 24820656..24820670 | yes | ass.goToTab4", "glass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], $Mh = |
| glass.goToTab9 | 24820674..24820688 | yes | ass.goToTab5", "glass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], $Mh = { extensionPoint: |
| glass.nextAgent | 24820692..24820707 | yes | ass.goToTab6", "glass.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], $Mh = { extensionPoint: "terminal", default |
| glass.previousAgent | 24820711..24820730 | yes | ss.goToTab7", "glass.goToTab8", "glass.goToTab9", "glass.nextAgent", "glass.previousAgent"], $Mh = { extensionPoint: "terminal", defaultExtensionKind: ["worksp |

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

