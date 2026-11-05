# Patch evidence: terminalInstance.js

- module: app-out-vs-workbench-workbench-glass-main-js:4865
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27884015..27956569
- upstream: src/vs/workbench/contrib/terminal/browser/terminalInstance.ts sha256:257939510a99b2bf06071e57a52afff303e58d1280a006546bfe5710d1641403
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.925; shared rare anchors: 223
- bundle-only anchors: 35; upstream anchors absent from bundle: 580

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| python | 27884630..27884636 | no (exists elsewhere upstream) | t(), d2g(), eAg(), mDk(), gPg(), Xo(), fPg = ["bash", "zsh", "pwsh", "python"], cU = class extends st { constructor(t, e, n, i, r, s, o, a, l, |
| div.terminal-wrapper | 27888110..27888130 | yes | ataEventAddon) })), this.sessionId = Ai(), this._wrapperElement = Ii("div.terminal-wrapper"), this._xtermWrapperElement = Ii("div.xterm-wrapper"), this._wrapper |
| div.xterm-wrapper | 27888166..27888183 | yes | Element = Ii("div.terminal-wrapper"), this._xtermWrapperElement = Ii("div.xterm-wrapper"), this._wrapperElement.appendChild(this._xtermWrapperElement), this. |
| terminal.integrated.shellIntegration.environmentReporting | 27888971..27889028 | no (exists elsewhere upstream) | ntegrationEnvironmentReporting = this._configurationService.getValue("terminal.integrated.shellIntegration.environmentReporting"); const j = szt(this._workspaceContextService.getWorkspace()); |
| accessibility.verbosity.terminal | 27894913..27894945 | no (exists elsewhere upstream) | DidChangeConfiguration(async (K) => { K.affectsConfiguration("accessibility.verbosity.terminal") && this._setAriaLabel(this.xterm?.raw, this._instanceId, this.title |
| terminal.integrated.fontSize | 27895126..27895154 | no (exists elsewhere upstream) | rated") && (this.updateConfig(), this.setVisible(this._isVisible)), ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", |
| terminal.integrated.fontFamily | 27895158..27895188 | no (exists elsewhere upstream) | this.setVisible(this._isVisible)), ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBo |
| terminal.integrated.fontWeight | 27895192..27895222 | no (exists elsewhere upstream) | , ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSp |
| terminal.integrated.fontWeightBold | 27895226..27895260 | no (exists elsewhere upstream) | "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeigh |
| terminal.integrated.letterSpacing | 27895264..27895297 | no (exists elsewhere upstream) | rminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeight", "editor.fontFamily"].some((Y) => |
| terminal.integrated.lineHeight | 27895301..27895331 | no (exists elsewhere upstream) | nal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeight", "editor.fontFamily"].some((Y) => K.affectsConfiguration(Y)) && (thi |
| terminal.integrated.unicodeVersion | 27895481..27895515 | no (exists elsewhere upstream) | ettingsChanged = true, await this._resize()), K.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), K.affectsConfiguration("editor.acc |
| terminal.integrated.tabs.title | 27895668..27895698 | no (exists elsewhere upstream) | port") && this.updateAccessibilitySupport(), (K.affectsConfiguration("terminal.integrated.tabs.title") \|\| K.affectsConfiguration("terminal.integrated.tabs.separator") \|\| |
| terminal.integrated.tabs.separator | 27895728..27895762 | no (exists elsewhere upstream) | guration("terminal.integrated.tabs.title") \|\| K.affectsConfiguration("terminal.integrated.tabs.separator") \|\| K.affectsConfiguration("terminal.integrated.tabs.description")) |
| terminal.integrated.tabs.description | 27895792..27895828 | no (exists elsewhere upstream) | tion("terminal.integrated.tabs.separator") \|\| K.affectsConfiguration("terminal.integrated.tabs.description")) && this._labelComputer?.refreshLabel(this); })), this._regis |
| terminal.integrated.tabs.defaultIcon | 27905895..27905931 | no (exists elsewhere upstream) | rocessState >= 2 ? E5e().getIcon(this._configurationService.getValue("terminal.integrated.tabs.defaultIcon")) : void 0), this._icon); } _getContributedIcon() { fo |
| flash-read-only | 27908423..27908438 | yes | t(this._readOnlyFlashTimeout), this._wrapperElement.classList.remove("flash-read-only"), this._wrapperElement.offsetWidth, this._wrapperElement.classList.a |
| terminal.integrated.enableBell | 27911281..27911311 | no (exists elsewhere upstream) | (n.raw.onBell(() => { (this._configurationService.getValue("terminal.integrated.enableBell") \|\| this._configurationService.getValue("terminal.integrated.enableV |
| terminal.integrated.enableVisualBell | 27911354..27911390 | no (exists elsewhere upstream) | minal.integrated.enableBell") \|\| this._configurationService.getValue("terminal.integrated.enableVisualBell")) && this.statusList.add({ id: "bell", severity: Yn.Warning, icon: y |
| terminal.type | 27911998..27912011 | yes | raw.onData(async (s) => { this._tooltipService.registerEvent("terminal.type"), await this._pauseInputEventBarrier?.wait(), await this._processMan |
| terminal.integrated.showTerminalConfigPrompt | 27917171..27917215 | yes | nChordMode \|\| s) return n.preventDefault(), false; const o = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "M |
| RightArrow | 27917224..27917234 | no (exists elsewhere upstream) | const o = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "S |
| LeftArrow | 27917238..27917247 | no (exists elsewhere upstream) | = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", |
| UpArrow | 27917251..27917258 | no (exists elsewhere upstream) | ntegrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delet |
| DownArrow | 27917262..27917271 | no (exists elsewhere upstream) | howTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspac |
| Delete | 27917323..27917329 | no (exists elsewhere upstream) | Arrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspace", "Tab"]; return this._storageService.getBoolean |
| Backspace | 27917333..27917342 | no (exists elsewhere upstream) | ownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspace", "Tab"]; return this._storageService.getBoolean(o, -1, true) |
| overrideDimensions | 27927061..27927079 | no (exists elsewhere upstream) | s._setTitle(i ?? "", ame.Process); break; case "overrideDimensions": this.setOverrideDimensions(i, true); break; |
| resolvedShellLaunchConfig | 27927166..27927191 | no (exists elsewhere upstream) | is.setOverrideDimensions(i, true); break; case "resolvedShellLaunchConfig": this._setResolvedShellLaunchConfig(i); brea |
| disconnected | 27928157..27928169 | no (exists elsewhere upstream) | is.xterm.raw.options.disableStdin = true), this.statusList.add({ id: "disconnected", severity: Yn.Error, icon: yt.debugDisconnect, tooltip: D(10292, nul |
| shell-integration-attention-needed | 27932847..27932881 | no (exists elsewhere upstream) | eShellIntegration = true, this.relaunch(), this.statusList.add({ id: "shell-integration-attention-needed", severity: Yn.Warning, icon: yt.warning, tooltip: `${t} ` + D(10295, |
| workbench.action.terminal.learnMore | 27932988..27933023 | no (exists elsewhere upstream) | ning, tooltip: `${t} ` + D(10295, null), hoverActions: [{ commandId: "workbench.action.terminal.learnMore", label: D(10296, null), run: () => { this._openerService.ope |
| relaunch-needed | 27935055..27935070 | no (exists elsewhere upstream) | Exiting = false), e && n.clearDecorations()), this.statusList.remove("relaunch-needed"), e \|\| (t.initialText = " "), this._shellLaunchConfig = t, await thi |
| editor.action.accessibilityHelp | 27939085..27939116 | no (exists elsewhere upstream) | , null)); const s = this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel(); this._configurationService.getValue("accessibi |
| env-var-info-changes-active | 27944533..27944560 | no (exists elsewhere upstream) | this.statusList.remove("relaunch-needed"), this.statusList.remove("env-var-info-changes-active"); return; } if (t.requiresAction && this._termin |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| waitOnExit | 225 |
| terminal-wrapper | 411 |
| terminalInstance added capability | 468 |
| terminalInstance removed capability | 469 |
| t already have one (i.e., it | 496 |
| terminal.integrated | 589 |
| editor.fontFamily | 600 |
| editor.accessibilitySupport | 609 |
| task.reconnection | 779 |
| @xterm/xterm | 787 |
| terminal.integrated.a11yPromptLabel | 789 |
| terminal.integrated.useAccessibleBuffer | 790 |
| bellStatus | 865 |
| conpty | 885 |
| \x1b[?61;4c | 888 |
| shellIntegration.rich | 955 |
| shellIntegration.basic | 957 |
| shellIntegration.injectionFailed | 959 |
| shellIntegration.no | 960 |
| shellIntegration | 990 |
| A container element needs to be set with `attachToElement` and be part of the DOM before calling `_open` | 1092 |
| terminal-xterm-host | 1096 |
| xterm elements not set after open | 1130 |
| s Escape, Escape chord, plus it | 1145 |
| Escape | 1147 |
| mousedown | 1195 |
| mouseup | 1198 |
| touchstart | 1205 |
| focusout | 1218 |
| Exception occurred during xterm disposal | 1338 |
| sending data (vscode) | 1391 |
| sending signal (vscode) | 1402 |
| active | 1425 |
| disconnectStatus | 1578 |
| workspaceNotTrustedCreateTerminal | 1600 |
| workspaceEmptyCreateTerminalCwd | 1604 |
| seq must be defined | 1659 |
| Terminal process exit | 1716 |
| Running | 1725 |
| string | 1745 |

