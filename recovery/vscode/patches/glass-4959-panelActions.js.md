# Patch evidence: panelActions.js

- module: app-out-vs-workbench-workbench-glass-main-js:4959
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28911136..28919148
- upstream: src/vs/workbench/browser/parts/panel/panelActions.ts sha256:24e0a61b0f263e3bdd791608a65dd0e4f12d9255b48ece33459f8b26e443142c
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.813; shared rare anchors: 98
- bundle-only anchors: 4; upstream anchors absent from bundle: 58

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| panel-restore | 28911356..28911369 | yes | ), vKg = qa("panel-maximize", yt.chevronUp, D(3879, null)), _Kg = qa("panel-restore", yt.chevronDown, D(3880, null)), ZRi = qa("panel-close", yt.xTwo, D( |
| workbench.parts.panel | 28912256..28912277 | no (exists elsewhere upstream) | c run(e) { const n = e.get(Id), i = e.get(Rr), r = n.isVisible("workbench.parts.panel"), s = i.getContextKeyValue(rTe.key) === true, o = n.isVisible("workb |
| workbench.parts.editor | 28912342..28912364 | no (exists elsewhere upstream) | panel"), s = i.getContextKeyValue(rTe.key) === true, o = n.isVisible("workbench.parts.editor", $t); if (r && s && !o) { await n.setUnifiedMaximizeSt |
| workbench.parts.auxiliarybar | 28917988..28918016 | no (exists elsewhere upstream) | PartHidden(false, this.destination === 1 ? "workbench.parts.panel" : "workbench.parts.auxiliarybar"), a && o.length === 0 && r.openViewContainer(a.id, true); } |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| panel-maximize | 25 |
| panel-close | 26 |
| panel-layout-icon | 27 |
| panel-layout-icon-off | 28 |
| workbench.action.togglePanel | 32 |
| togglePanelVisibility | 33 |
| closePanel | 41 |
| miTogglePanelMnemonic | 43 |
| openAndClosePanel | 49 |
| 2_workbench_layout | 55 |
| 0_workbench_layout | 59 |
| navigation | 80 |
| workbench.action.closePanel | 87 |
| workbench.action.focusPanel | 101 |
| focusPanel | 102 |
| workbench.action.positionPanelLeft | 129 |
| workbench.action.positionPanelRight | 130 |
| workbench.action.positionPanelBottom | 131 |
| workbench.action.positionPanelTop | 132 |
| workbench.action.alignPanelLeft | 136 |
| workbench.action.alignPanelRight | 137 |
| workbench.action.alignPanelCenter | 138 |
| workbench.action.alignPanelJustify | 139 |
| positionPanelTop | 169 |
| positionPanelLeft | 170 |
| positionPanelRight | 171 |
| positionPanelBottom | 172 |
| alignPanelLeft | 177 |
| alignPanelRight | 178 |
| alignPanelCenter | 179 |
| alignPanelJustify | 180 |
| positionPanel | 185 |
| 3_workbench_layout_move | 186 |
| alignPanel | 220 |
| center | 239 |
| workbench.action.previousPanelView | 256 |
| previousPanelView | 257 |
| workbench.action.nextPanelView | 267 |
| nextPanelView | 268 |
| workbench.action.toggleMaximizedPanel | 280 |

