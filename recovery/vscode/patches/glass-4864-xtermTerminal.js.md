# Patch evidence: xtermTerminal.js

- module: app-out-vs-workbench-workbench-glass-main-js:4864
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27853546..27884015
- upstream: src/vs/workbench/contrib/terminal/browser/xterm/xtermTerminal.ts sha256:b93962c3f6cf6cfeac4ca82c958566652933808d357e98e06a3a1d43b9633c5b
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.867; shared rare anchors: 201
- bundle-only anchors: 14; upstream anchors absent from bundle: 132

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.gpuAcceleration | 27857835..27857870 | no (exists elsewhere upstream) | DidChangeConfiguration(async (S) => { S.affectsConfiguration("terminal.integrated.gpuAcceleration") && (L9e._suggestedRendererType = void 0), (S.affectsConfiguration(" |
| terminal.integrated.unicodeVersion | 27858189..27858223 | no (exists elsewhere upstream) | ultiCursorModifier")) && this.updateConfig(), S.affectsConfiguration("terminal.integrated.unicodeVersion") && this._updateUnicodeVersion(), S.affectsConfiguration("terminal.i |
| terminal.integrated.shellIntegration.decorationsEnabled | 27858283..27858338 | no (exists elsewhere upstream) | odeVersion") && this._updateUnicodeVersion(), S.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && this._updateTheme(); })), this._register(this._themeServic |
| Cannot get contents of a disposed startMarker | 27863943..27863988 | yes | = this.raw.buffer.active; if (t?.line === -1) throw new Error("Cannot get contents of a disposed startMarker"); if (e?.line === -1) throw new Error("Cannot get contents of |
| terminal.focus | 27865660..27865674 | yes | extarea, "focus", () => { this._tooltipService.registerEvent("terminal.focus"), this._setFocused(true); })), i.add(li(this.raw.textarea, "bl |
| terminal.copy | 27873355..27873368 | yes | c copySelection(t, e) { if (this._tooltipService.registerEvent("terminal.copy"), this.hasSelection() \|\| t && e) { const i = this._terminalU |
| terminal.integrated.scrollback | 27874854..27874884 | no (exists elsewhere upstream) | try { const e = this._configurationService.inspect("terminal.integrated.scrollback"), n = e.userValue !== void 0 ? "user" : e.workspaceValue !== void 0 |
| workspace | 27874928..27874937 | no (exists elsewhere upstream) | inal.integrated.scrollback"), n = e.userValue !== void 0 ? "user" : e.workspaceValue !== void 0 ? "workspace" : e.workspaceFolderValue !== void 0 ? " |
| workspaceFolder | 27874972..27874987 | no (exists elsewhere upstream) | e !== void 0 ? "user" : e.workspaceValue !== void 0 ? "workspace" : e.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other"; Sv(new Error |
| other | 27875027..27875032 | no (exists elsewhere upstream) | workspace" : e.workspaceFolderValue !== void 0 ? "workspaceFolder" : "other"; Sv(new Error("High terminal.integrated.scrollback"), { ca |
| High terminal.integrated.scrollback | 27875059..27875094 | yes | lue !== void 0 ? "workspaceFolder" : "other"; Sv(new Error("High terminal.integrated.scrollback"), { captureContext: { fingerprint: ["high-terminal-scrollback"], tag |
| high-terminal-scrollback | 27875133..27875157 | yes | terminal.integrated.scrollback"), { captureContext: { fingerprint: ["high-terminal-scrollback"], tags: { client_error_type: "high_terminal_scrollback", force_uploa |
| high_terminal_scrollback | 27875189..27875213 | yes | ingerprint: ["high-terminal-scrollback"], tags: { client_error_type: "high_terminal_scrollback", force_upload: "forced", scrollback_source: n }, extra: { scrollback |
| forced | 27875231..27875237 | yes | tags: { client_error_type: "high_terminal_scrollback", force_upload: "forced", scrollback_source: n }, extra: { scrollback: t, estimatedBytesPerTe |

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

