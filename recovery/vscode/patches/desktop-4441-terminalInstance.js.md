# Patch evidence: terminalInstance.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4441
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 26005993..26078534
- upstream: src/vs/workbench/contrib/terminal/browser/terminalInstance.ts sha256:257939510a99b2bf06071e57a52afff303e58d1280a006546bfe5710d1641403
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.925; shared rare anchors: 223
- bundle-only anchors: 35; upstream anchors absent from bundle: 580

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| python | 26006605..26006611 | no (exists elsewhere upstream) | t(), yir(), S3h(), oh_(), uMo(), Js(), U9h = ["bash", "zsh", "pwsh", "python"], e9 = class extends we { constructor(e, t, n, i, r, s, o, a, c, |
| div.terminal-wrapper | 26010085..26010105 | yes | ataEventAddon) })), this.sessionId = zn(), this._wrapperElement = Ve("div.terminal-wrapper"), this._xtermWrapperElement = Ve("div.xterm-wrapper"), this._wrapper |
| div.xterm-wrapper | 26010141..26010158 | yes | Element = Ve("div.terminal-wrapper"), this._xtermWrapperElement = Ve("div.xterm-wrapper"), this._wrapperElement.appendChild(this._xtermWrapperElement), this. |
| terminal.integrated.shellIntegration.environmentReporting | 26010946..26011003 | no (exists elsewhere upstream) | ntegrationEnvironmentReporting = this._configurationService.getValue("terminal.integrated.shellIntegration.environmentReporting"); const G = fYi(this._workspaceContextService.getWorkspace()); |
| accessibility.verbosity.terminal | 26016888..26016920 | no (exists elsewhere upstream) | DidChangeConfiguration(async (Z) => { Z.affectsConfiguration("accessibility.verbosity.terminal") && this._setAriaLabel(this.xterm?.raw, this._instanceId, this.title |
| terminal.integrated.fontSize | 26017101..26017129 | no (exists elsewhere upstream) | rated") && (this.updateConfig(), this.setVisible(this._isVisible)), ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", |
| terminal.integrated.fontFamily | 26017133..26017163 | no (exists elsewhere upstream) | this.setVisible(this._isVisible)), ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBo |
| terminal.integrated.fontWeight | 26017167..26017197 | no (exists elsewhere upstream) | , ["terminal.integrated.fontSize", "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSp |
| terminal.integrated.fontWeightBold | 26017201..26017235 | no (exists elsewhere upstream) | "terminal.integrated.fontFamily", "terminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeigh |
| terminal.integrated.letterSpacing | 26017239..26017272 | no (exists elsewhere upstream) | rminal.integrated.fontWeight", "terminal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeight", "editor.fontFamily"].some((J) => |
| terminal.integrated.lineHeight | 26017276..26017306 | no (exists elsewhere upstream) | nal.integrated.fontWeightBold", "terminal.integrated.letterSpacing", "terminal.integrated.lineHeight", "editor.fontFamily"].some((J) => Z.affectsConfiguration(J)) && (thi |
| terminal.integrated.unicodeVersion | 26017456..26017490 | no (exists elsewhere upstream) | ettingsChanged = true, await this._resize()), Z.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), Z.affectsConfiguration("editor.acc |
| terminal.integrated.tabs.title | 26017643..26017673 | no (exists elsewhere upstream) | port") && this.updateAccessibilitySupport(), (Z.affectsConfiguration("terminal.integrated.tabs.title") \|\| Z.affectsConfiguration("terminal.integrated.tabs.separator") \|\| |
| terminal.integrated.tabs.separator | 26017703..26017737 | no (exists elsewhere upstream) | guration("terminal.integrated.tabs.title") \|\| Z.affectsConfiguration("terminal.integrated.tabs.separator") \|\| Z.affectsConfiguration("terminal.integrated.tabs.description")) |
| terminal.integrated.tabs.description | 26017767..26017803 | no (exists elsewhere upstream) | tion("terminal.integrated.tabs.separator") \|\| Z.affectsConfiguration("terminal.integrated.tabs.description")) && this._labelComputer?.refreshLabel(this); })), this._regis |
| terminal.integrated.tabs.defaultIcon | 26027869..26027905 | no (exists elsewhere upstream) | rocessState >= 2 ? Nwe().getIcon(this._configurationService.getValue("terminal.integrated.tabs.defaultIcon")) : void 0), this._icon); } _getContributedIcon() { fo |
| flash-read-only | 26030397..26030412 | yes | t(this._readOnlyFlashTimeout), this._wrapperElement.classList.remove("flash-read-only"), this._wrapperElement.offsetWidth, this._wrapperElement.classList.a |
| terminal.integrated.enableBell | 26033254..26033284 | no (exists elsewhere upstream) | (n.raw.onBell(() => { (this._configurationService.getValue("terminal.integrated.enableBell") \|\| this._configurationService.getValue("terminal.integrated.enableV |
| terminal.integrated.enableVisualBell | 26033327..26033363 | no (exists elsewhere upstream) | minal.integrated.enableBell") \|\| this._configurationService.getValue("terminal.integrated.enableVisualBell")) && this.statusList.add({ id: "bell", severity: pi.Warning, icon: P |
| terminal.type | 26033971..26033984 | yes | raw.onData(async (s) => { this._tooltipService.registerEvent("terminal.type"), await this._pauseInputEventBarrier?.wait(), await this._processMan |
| terminal.integrated.showTerminalConfigPrompt | 26039144..26039188 | yes | nChordMode \|\| s) return n.preventDefault(), false; const o = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "M |
| RightArrow | 26039197..26039207 | no (exists elsewhere upstream) | const o = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "S |
| LeftArrow | 26039211..26039220 | no (exists elsewhere upstream) | = "terminal.integrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", |
| UpArrow | 26039224..26039231 | no (exists elsewhere upstream) | ntegrated.showTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delet |
| DownArrow | 26039235..26039244 | no (exists elsewhere upstream) | howTerminalConfigPrompt", a = ["RightArrow", "LeftArrow", "UpArrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspac |
| Delete | 26039296..26039302 | no (exists elsewhere upstream) | Arrow", "DownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspace", "Tab"]; return this._storageService.getBoolean |
| Backspace | 26039306..26039315 | no (exists elsewhere upstream) | ownArrow", "Space", "Meta", "Control", "Shift", "Alt", "", "Delete", "Backspace", "Tab"]; return this._storageService.getBoolean(o, -1, true) |
| overrideDimensions | 26049032..26049050 | no (exists elsewhere upstream) | s._setTitle(i ?? "", ate.Process); break; case "overrideDimensions": this.setOverrideDimensions(i, true); break; |
| resolvedShellLaunchConfig | 26049137..26049162 | no (exists elsewhere upstream) | is.setOverrideDimensions(i, true); break; case "resolvedShellLaunchConfig": this._setResolvedShellLaunchConfig(i); brea |
| disconnected | 26050128..26050140 | no (exists elsewhere upstream) | is.xterm.raw.options.disableStdin = true), this.statusList.add({ id: "disconnected", severity: pi.Error, icon: Pe.debugDisconnect, tooltip: S(10292, nul |
| shell-integration-attention-needed | 26054818..26054852 | no (exists elsewhere upstream) | eShellIntegration = true, this.relaunch(), this.statusList.add({ id: "shell-integration-attention-needed", severity: pi.Warning, icon: Pe.warning, tooltip: `${e} ` + S(10295, |
| workbench.action.terminal.learnMore | 26054959..26054994 | no (exists elsewhere upstream) | ning, tooltip: `${e} ` + S(10295, null), hoverActions: [{ commandId: "workbench.action.terminal.learnMore", label: S(10296, null), run: () => { this._openerService.ope |
| relaunch-needed | 26057026..26057041 | no (exists elsewhere upstream) | Exiting = false), t && n.clearDecorations()), this.statusList.remove("relaunch-needed"), t \|\| (e.initialText = " "), this._shellLaunchConfig = e, await thi |
| editor.action.accessibilityHelp | 26061056..26061087 | no (exists elsewhere upstream) | , null)); const s = this._keybindingService.lookupKeybinding("editor.action.accessibilityHelp")?.getLabel(); this._configurationService.getValue("accessibi |
| env-var-info-changes-active | 26066503..26066530 | no (exists elsewhere upstream) | this.statusList.remove("relaunch-needed"), this.statusList.remove("env-var-info-changes-active"); return; } if (e.requiresAction && this._termin |

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

