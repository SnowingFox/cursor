# Patch evidence: xtermTerminal.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4440
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25975526..26005993
- upstream: src/vs/workbench/contrib/terminal/browser/xterm/xtermTerminal.ts sha256:b93962c3f6cf6cfeac4ca82c958566652933808d357e98e06a3a1d43b9633c5b
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.867; shared rare anchors: 201
- bundle-only anchors: 14; upstream anchors absent from bundle: 132

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.gpuAcceleration | 25979815..25979850 | no (exists elsewhere upstream) | DidChangeConfiguration(async (E) => { E.affectsConfiguration("terminal.integrated.gpuAcceleration") && (CTe._suggestedRendererType = void 0), (E.affectsConfiguration(" |
| terminal.integrated.unicodeVersion | 25980169..25980203 | no (exists elsewhere upstream) | ultiCursorModifier")) && this.updateConfig(), E.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), E.affectsConfiguration("terminal.i |
| terminal.integrated.shellIntegration.decorationsEnabled | 25980263..25980318 | no (exists elsewhere upstream) | odeVersion") && this._updateUnicodeVersion(), E.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && this._updateTheme(); })), this._register(this._themeServic |
| Cannot get contents of a disposed startMarker | 25985922..25985967 | yes | = this.raw.buffer.active; if (e?.line === -1) throw new Error("Cannot get contents of a disposed startMarker"); if (t?.line === -1) throw new Error("Cannot get contents of |
| terminal.focus | 25987639..25987653 | yes | extarea, "focus", () => { this._tooltipService.registerEvent("terminal.focus"), this._setFocused(true); })), i.add(Xt(this.raw.textarea, "bl |
| terminal.copy | 25995334..25995347 | yes | c copySelection(e, t) { if (this._tooltipService.registerEvent("terminal.copy"), this.hasSelection() \|\| e && t) { const i = this._terminalU |
| terminal.integrated.scrollback | 25996833..25996863 | no (exists elsewhere upstream) | try { const t = this._configurationService.inspect("terminal.integrated.scrollback"), n = t.userValue !== void 0 ? "user" : t.workspaceValue !== void 0 |
| workspace | 25996907..25996916 | no (exists elsewhere upstream) | inal.integrated.scrollback"), n = t.userValue !== void 0 ? "user" : t.workspaceValue !== void 0 ? "workspace" : t.workspaceFolderValue !== void 0 ? " |
| workspaceFolder | 25996951..25996966 | no (exists elsewhere upstream) | e !== void 0 ? "user" : t.workspaceValue !== void 0 ? "workspace" : t.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other"; Km(new Error |
| other | 25997006..25997011 | no (exists elsewhere upstream) | workspace" : t.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other"; Km(new Error("High terminal.integrated.scrollback"), { ca |
| High terminal.integrated.scrollback | 25997038..25997073 | yes | lue !== void 0 ? "workspaceFolder" : "other"; Km(new Error("High terminal.integrated.scrollback"), { captureContext: { fingerprint: ["high-terminal-scrollback"], tag |
| high-terminal-scrollback | 25997112..25997136 | yes | terminal.integrated.scrollback"), { captureContext: { fingerprint: ["high-terminal-scrollback"], tags: { client_error_type: "high_terminal_scrollback", force_uploa |
| high_terminal_scrollback | 25997168..25997192 | yes | ingerprint: ["high-terminal-scrollback"], tags: { client_error_type: "high_terminal_scrollback", force_upload: "forced", scrollback_source: n }, extra: { scrollback |
| forced | 25997210..25997216 | yes | tags: { client_error_type: "high_terminal_scrollback", force_upload: "forced", scrollback_source: n }, extra: { scrollback: e, estimatedBytesPerTe |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| editor | 224 |
| cursorStyle | 247 |
| selectWord | 252 |
| terminal.integrated | 289 |
| clipboard | 323 |
| selection | 329 |
| progress | 337 |
| Cannot get contents of a disposed endMarker | 383 |
| serialize | 398 |
| xterm elements not set after open | 503 |
| focusout | 510 |
| resizing | 543 |
| transparent | 637 |
| search | 649 |
| Could not create search addon, terminal is disposed | 651 |
| Could not get line | 696 |
| text/plain | 797 |
| text/html | 800 |
| terminal.integrated.copySelection.noSelection | 812 |
| cursorStyleInactive | 838 |
| Webgl was loaded | 868 |
| ligatures | 907 |
| anthonykim1 | 942 |
| Tracks when the xterm.js image addon is loaded, including dynamic enablement | 943 |
| terminal/imageAddonActivated | 945 |
| Tracks when an image is added to the terminal via the image addon | 949 |
| terminal/imageAdded | 951 |
| unicode11 | 1075 |

