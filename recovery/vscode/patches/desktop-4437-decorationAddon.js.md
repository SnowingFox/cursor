# Patch evidence: decorationAddon.js

- module: app-out-vs-workbench-workbench-desktop-main-js:4437
- bundle: app/out/vs/workbench/workbench.desktop.main.js range 25943109..25960239
- upstream: src/vs/workbench/contrib/terminal/browser/xterm/decorationAddon.ts sha256:8bec5b613dd8e96c319189f93db18d97e33e16b9cc0ee81cacdca10177bae510
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.769; shared rare anchors: 141
- bundle-only anchors: 13; upstream anchors absent from bundle: 63

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.fontSize | 25944651..25944679 | no (exists elsewhere upstream) | ice.onDidChangeConfiguration((v) => { v.affectsConfiguration("terminal.integrated.fontSize") \|\| v.affectsConfiguration("terminal.integrated.lineHeight") ? this. |
| terminal.integrated.lineHeight | 25944709..25944739 | no (exists elsewhere upstream) | figuration("terminal.integrated.fontSize") \|\| v.affectsConfiguration("terminal.integrated.lineHeight") ? this.refreshLayouts() : v.affectsConfiguration("workbench.colorCu |
| terminal.integrated.shellIntegration.decorationsEnabled | 25944878..25944933 | no (exists elsewhere upstream) | ustomizations") ? this._refreshStyles(true) : v.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && (this._removeCapabilityDisposables(2), this._updateDecorationVis |
| terminal-command-decoration | 25947059..25947086 | no (exists elsewhere upstream) | { const e = new Set(this._terminal?.element?.querySelectorAll("terminal-command-decoration") ?? []); this._placeholderDecoration?.element && e.add(this._p |
| style | 25947668..25947673 | no (exists elsewhere upstream) | ; n.add(M7.observe(t, n, { attributes: true, attributeFilter: ["style"], subtree: true })((i) => { for (const r of i) { c |
| display | 25947844..25947851 | no (exists elsewhere upstream) | (s) && s.classList.contains("terminal-command-decoration") && s.style.display !== "none" && this._updateCommandDecorationVisibility(s); } |
| noProblemsReported | 25951356..25951374 | no (exists elsewhere upstream) | , t.push(e.onCurrentCommandInvalidated((n) => { n.reason === "noProblemsReported" ? Array.from(this._decorations.entries())[this._decorations.size - 1 |
| windows | 25951488..25951495 | no (exists elsewhere upstream) | this._decorations.size - 1]?.[1].decoration.dispose() : n.reason === "windows" && this._clearPlaceholder(); })), t; } activate(e) { |
| codicon | 25952786..25952793 | no (exists elsewhere upstream) | tCode, markProperties: e?.markProperties })), (!o.classList.contains("codicon") \|\| e?.marker?.line === 0) && (Uir(this._configurationService, o), t |
| xterm-decoration | 25947532..25947548 | no (exists elsewhere upstream) | hDecorationDisplayObserver.value) return; const t = e.closest(".xterm-decoration-container") ?? e.parentElement ?? e, n = new He(); n.add(M7.obs |
| default-color | 25953887..25953900 | no (exists elsewhere upstream) | nd-decoration", "codicon", "xterm-decoration"), n ? (e.classList.add("default-color", ...Ft.asClassNameArray(C5h)), n.hoverMessage \|\| e.classList.add("de |
| default | 25953887..25953894 | no (exists elsewhere upstream) | nd-decoration", "codicon", "xterm-decoration"), n ? (e.classList.add("default-color", ...Ft.asClassNameArray(C5h)), n.hoverMessage \|\| e.classList.a |
| terminal.addToCurrentChat | 25955234..25955259 | yes | ], n = S(10386, null); t.push({ class: void 0, tooltip: n, id: "terminal.addToCurrentChat", label: n, enabled: true, run: async () => { const a = this. |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| workbench.colorCustomizations | 78 |
| aria-label | 392 |
| workbench.action.terminal.toggleVisibility | 416 |
| terminal.toggleVisibility | 419 |
| terminal.rerunCommand | 441 |
| terminal.copyCommand | 467 |
| terminal.copyCommandAndOutput | 474 |
|  ? command.command +  | 480 |
| terminal.copyOutput | 484 |
| terminal.copyOutputAsHtml | 494 |
| workbench.action.terminal.runRecentCommand | 503 |
| workbench.action.terminal.goToRecentDirectory | 508 |
| terminal.learnShellIntegration | 516 |
| https://code.visualstudio.com/docs/terminal/shell-integration | 519 |
| terminal.attachToChat | 529 |
| toggleVisibility | 571 |
| gutter | 574 |
| overviewRuler | 578 |

