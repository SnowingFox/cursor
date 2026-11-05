# Patch evidence: decorationAddon.js

- module: app-out-vs-workbench-workbench-glass-main-js:4861
- bundle: app/out/vs/workbench/workbench.glass.main.js range 27821119..27838251
- upstream: src/vs/workbench/contrib/terminal/browser/xterm/decorationAddon.ts sha256:8bec5b613dd8e96c319189f93db18d97e33e16b9cc0ee81cacdca10177bae510
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.769; shared rare anchors: 141
- bundle-only anchors: 14; upstream anchors absent from bundle: 63

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| terminal.integrated.fontSize | 27822662..27822690 | no (exists elsewhere upstream) | ice.onDidChangeConfiguration((f) => { f.affectsConfiguration("terminal.integrated.fontSize") \|\| f.affectsConfiguration("terminal.integrated.lineHeight") ? this. |
| terminal.integrated.lineHeight | 27822720..27822750 | no (exists elsewhere upstream) | figuration("terminal.integrated.fontSize") \|\| f.affectsConfiguration("terminal.integrated.lineHeight") ? this.refreshLayouts() : f.affectsConfiguration("workbench.colorCu |
| terminal.integrated.shellIntegration.decorationsEnabled | 27822889..27822944 | no (exists elsewhere upstream) | ustomizations") ? this._refreshStyles(true) : f.affectsConfiguration("terminal.integrated.shellIntegration.decorationsEnabled") && (this._removeCapabilityDisposables(2), this._updateDecorationVis |
| terminal-command-decoration | 27825070..27825097 | no (exists elsewhere upstream) | { const t = new Set(this._terminal?.element?.querySelectorAll("terminal-command-decoration") ?? []); this._placeholderDecoration?.element && t.add(this._p |
| style | 27825680..27825685 | no (exists elsewhere upstream) | n.add(Xde.observe(e, n, { attributes: true, attributeFilter: ["style"], subtree: true })((i) => { for (const r of i) { c |
| display | 27825856..27825863 | no (exists elsewhere upstream) | (s) && s.classList.contains("terminal-command-decoration") && s.style.display !== "none" && this._updateCommandDecorationVisibility(s); } |
| noProblemsReported | 27829368..27829386 | no (exists elsewhere upstream) | , e.push(t.onCurrentCommandInvalidated((n) => { n.reason === "noProblemsReported" ? Array.from(this._decorations.entries())[this._decorations.size - 1 |
| windows | 27829500..27829507 | no (exists elsewhere upstream) | this._decorations.size - 1]?.[1].decoration.dispose() : n.reason === "windows" && this._clearPlaceholder(); })), e; } activate(t) { |
| codicon | 27830798..27830805 | no (exists elsewhere upstream) | tCode, markProperties: t?.markProperties })), (!o.classList.contains("codicon") \|\| t?.marker?.line === 0) && (rhs(this._configurationService, o), t |
| xterm-decoration | 27825543..27825559 | no (exists elsewhere upstream) | hDecorationDisplayObserver.value) return; const e = t.closest(".xterm-decoration-container") ?? t.parentElement ?? t, n = new Nt(); n.add(Xde.ob |
| default-color | 27831899..27831912 | no (exists elsewhere upstream) | nd-decoration", "codicon", "xterm-decoration"), n ? (t.classList.add("default-color", ...Gn.asClassNameArray(JRg)), n.hoverMessage \|\| t.classList.add("de |
| default | 27831899..27831906 | no (exists elsewhere upstream) | nd-decoration", "codicon", "xterm-decoration"), n ? (t.classList.add("default-color", ...Gn.asClassNameArray(JRg)), n.hoverMessage \|\| t.classList.a |
| error | 27832124..27832129 | no (exists elsewhere upstream) | t.classList.add(...Gn.asClassNameArray(e2g))) : e ? (t.classList.add("error"), t.classList.add(...Gn.asClassNameArray(t2g))) : t.classList.add(.. |
| terminal.addToCurrentChat | 27833246..27833271 | yes | ], n = D(10386, null); e.push({ class: void 0, tooltip: n, id: "terminal.addToCurrentChat", label: n, enabled: true, run: async () => { const a = this. |

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

