# Patch evidence: auxiliaryBarActions.js

- module: app-out-vs-workbench-workbench-glass-main-js:4960
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28919148..28922812
- upstream: src/vs/workbench/browser/parts/auxiliarybar/auxiliaryBarActions.ts sha256:a910c233405685c31d39820143beed9eb9c3120ca0c55f04581b8f97eeed6581
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.45; shared rare anchors: 24
- bundle-only anchors: 10; upstream anchors absent from bundle: 73

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| glass.togglePanel | 28920062..28920079 | yes | l = e.get(nr); if (a.isGlass) { await l.executeCommand("glass.togglePanel"); return; } const c = e.get(ki), u = e.get(Cr), |
| other | 28920180..28920185 | no (exists elsewhere upstream) | const c = e.get(ki), u = e.get(Cr), d = e.get(jle); let h = "other"; n && n.source ? h = n.source : n === void 0 && (h = "keyboard |
| keyboard_shortcut | 28920247..28920264 | yes | = "other"; n && n.source ? h = n.source : n === void 0 && (h = "keyboard_shortcut"); const p = i.isVisible("workbench.parts.auxiliarybar"), g = B |
| workbench.parts.auxiliarybar | 28920297..28920325 | no (exists elsewhere upstream) | === void 0 && (h = "keyboard_shortcut"); const p = i.isVisible("workbench.parts.auxiliarybar"), g = BP(c, u); p ? (g ? await d.hideChatEditorGroup() : i.set |
| ai_pane.closed | 28920459..28920473 | yes | i.setPartHidden(true, "workbench.parts.auxiliarybar"), s.trackEvent("ai_pane.closed", { source: h }), s.trackEvent("ai_pane.state_changed", { isOpen: fal |
| ai_pane.state_changed | 28920506..28920527 | yes | rybar"), s.trackEvent("ai_pane.closed", { source: h }), s.trackEvent("ai_pane.state_changed", { isOpen: false, source: h })) : (s.trackEvent("ai_pane.opened", { |
| ai_pane.opened | 28920578..28920592 | yes | _pane.state_changed", { isOpen: false, source: h })) : (s.trackEvent("ai_pane.opened", { source: h }), s.trackEvent("ai_pane.state_changed", { isOpen: tru |
| agent | 28920862..28920867 | no (exists elsewhere upstream) | eComposite(2) \|\| await o.createComposer({ view: "pane", unifiedMode: "agent", openInNewTab: true }))); } }, ams.ID = "workbench.action.togg |
| aichat.close-sidebar | 28921097..28921117 | yes | Ht(BKt), Ht(class extends sn { constructor() { super({ id: "aichat.close-sidebar", title: { value: "Hide Chat", original: "Hide Chat" }, category: Vi. |
| Hide Chat | 28921137..28921146 | yes | ructor() { super({ id: "aichat.close-sidebar", title: { value: "Hide Chat", original: "Hide Chat" }, category: Vi.View, precondition: mt.and(Ga |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| auxiliarybar-maximize | 22 |
| auxiliarybar-close | 23 |
| auxiliarybar-right-layout-icon | 25 |
| auxiliarybar-right-off-layout-icon | 26 |
| auxiliarybar-left-layout-icon | 27 |
| auxiliarybar-left-off-layout-icon | 28 |
| workbench.action.toggleAuxiliaryBar | 32 |
| toggleAuxiliaryBar | 33 |
| closeSecondarySideBar | 41 |
| miCloseSecondarySideBar | 43 |
| openAndCloseAuxiliaryBar | 48 |
| 0_workbench_layout | 58 |
| 2_workbench_layout | 63 |
| auxiliaryBarHidden | 78 |
| auxiliaryBarVisible | 79 |
| navigation | 92 |
| workbench.action.closeAuxiliaryBar | 100 |
| workbench.action.focusAuxiliaryBar | 114 |
| focusAuxiliaryBar | 115 |
| toggleSecondarySideBar | 148 |
| config.workbench.layoutControl.type | 155 |
| config.workbench.sideBar.location | 157 |
| 3_workbench_layout_move | 183 |
| hideAuxiliaryBar | 186 |
| viewContainerLocation | 188 |
| workbench.action.previousAuxiliaryBarView | 197 |
| previousAuxiliaryBarView | 198 |
| workbench.action.nextAuxiliaryBarView | 208 |
| nextAuxiliaryBarView | 209 |
| workbench.action.maximizeAuxiliaryBar | 220 |
| maximizeAuxiliaryBar | 225 |
| maximizeAuxiliaryBarTooltip | 226 |
| workbench.action.restoreAuxiliaryBar | 243 |
| restoreAuxiliaryBar | 248 |
| workbench.action.toggleMaximizedAuxiliaryBar | 271 |
| toggleMaximizedAuxiliaryBar | 276 |
| maximizeAuxiliaryBarTooltip2 | 277 |

