# Patch evidence: layoutActions.js

- module: app-out-vs-workbench-workbench-glass-main-js:4966
- bundle: app/out/vs/workbench/workbench.glass.main.js range 28946316..28979815
- upstream: src/vs/workbench/browser/actions/layoutActions.ts sha256:877d97b6683ff5e5de4f6f0a7d41ebc5790b528d4a6edfd6169c928a5da248f0
- basis: nls-index confidence: A classification: upstream-modified
- dependency overlap: 0.614; shared rare anchors: 277
- bundle-only anchors: 29; upstream anchors absent from bundle: 355

## Bundle-only anchors (candidate Cursor changes)

| anchor | bundle char range | absent from all of src/vs | context |
|---|---|---|---|
| agent_layout.chat_size_toggle | 28949932..28949961 | yes | Te.key) === true), u = n?.source ?? "keybinding"; o.trackEvent("agent_layout.chat_size_toggle", { isMaximized: c, triggeredVia: u }), await i.toggleUnifiedMaximize |
| workbench.action.maximizeChatSize | 28950061..28950094 | yes | Via: u }), await i.toggleUnifiedMaximizeState(); } }, dms.ID = "workbench.action.maximizeChatSize", dms.LABEL = At(3112, "Maximize Chat Size"), l2i = dms, Ht(l2i), pkl |
| Maximize Chat Size | 28950119..28950137 | yes | , dms.ID = "workbench.action.maximizeChatSize", dms.LABEL = At(3112, "Maximize Chat Size"), l2i = dms, Ht(l2i), pkl = class UPb extends sn { constructor() |
| Toggle Inline Diffs | 28950253..28950272 | yes | s sn { constructor() { super({ id: UPb.ID, title: At(3113, "Toggle Inline Diffs"), category: Vi.View, f1: true, metadata: { description: D(3040, null |
| workbench.action.toggleInlineDiffs | 28950494..28950528 | yes | sSetting(); n.setNoInlineDiffsSetting(!i); } }, pkl.ID = "workbench.action.toggleInlineDiffs", uYg = pkl, Ht(uYg), mkl = qa("configure-layout-icon", yt.layout, D( |
| Open Layout Settings Menu | 28950913..28950938 | yes | s sn { constructor() { super({ id: jPb.ID, title: At(3114, "Open Layout Settings Menu"), icon: yt.settings, f1: false }); } async run(e, n) { |
| workbench.action.openLayoutSettingsMenu | 28951078..28951117 | yes | n && (n.preventDefault(), n.stopPropagation()); } }, gkl.ID = "workbench.action.openLayoutSettingsMenu", c2i = gkl, Ht(c2i), fkl = class $Pb extends sn { constructor() |
| Open Cursor Settings | 28951232..28951252 | yes | s sn { constructor() { super({ id: $Pb.ID, title: At(3115, "Open Cursor Settings"), icon: yt.settingsGear, f1: false }); } async run(e) { |
| workbench.action.openAgentLayoutQuickMenu | 28951381..28951422 | yes | n(e) { await e.get(nr).executeCommand(vP); } }, fkl.ID = "workbench.action.openAgentLayoutQuickMenu", _It = fkl, Ht(_It), vkl = class HPb extends sn { constructor() |
| Switch Layout | 28951537..28951550 | yes | s sn { constructor() { super({ id: HPb.ID, title: At(3116, "Switch Layout"), category: Vi.View, f1: true, keybinding: { weight: 200, primary: u |
| workbench.action.openLayoutSwitcher | 28952219..28952254 | yes | }), c, n); a.setLayoutSwitcherOpen(true); } }, vkl.ID = "workbench.action.openLayoutSwitcher", dYg = vkl, Ht(dYg), ji.appendMenuItem(Ft.MenubarAppearanceMenu, { g |
| workbench.parts.editor | 28953104..28953126 | no (exists elsewhere upstream) | run(t) { const e = t.get(Id), n = t.get(jle), i = e.isVisible("workbench.parts.editor", $t), r = e.isVisible("workbench.parts.panel"); if (i && await |
| workbench.parts.panel | 28953151..28953172 | no (exists elsewhere upstream) | jle), i = e.isVisible("workbench.parts.editor", $t), r = e.isVisible("workbench.parts.panel"); if (i && await n.ensureChatVisibleOrCreate(), e.setPartHidde |
| workbench.parts.sidebar | 28954229..28954252 | no (exists elsewhere upstream) | un(e) { const n = e.get(Id); n.setPartHidden(n.isVisible("workbench.parts.sidebar"), "workbench.parts.sidebar"); } }, hms.ID = "workbench.action. |
| empty | 28956256..28956261 | no (exists elsewhere upstream) | "config.workbench.layoutControl.type", "both")), OXr, Q4.notEqualsTo("empty")), order: 0 } }, { id: Ft.LayoutControlMenu, item: { group: "6_workb |
| workbench.parts.statusbar | 28957006..28957031 | no (exists elsewhere upstream) | const n = e.get(Id), i = e.get(yi), r = e.get(ki), o = !n.isVisible("workbench.parts.statusbar", $t); return r.store(wG.STATUS_BAR_VISIBLE, o, 1, 0), await i. |
| config.workbench.editor.showTabs | 28957733..28957765 | no (exists elsewhere upstream) | b extends UKt { constructor() { const e = mt.and(mt.equals("config.workbench.editor.showTabs", "none").negate(), xie.negate()), n = At(3120, "Hide Editor Tabs"); |
| workbench.editor.showTabs | 28957740..28957765 | no (exists elsewhere upstream) | ds UKt { constructor() { const e = mt.and(mt.equals("config.workbench.editor.showTabs", "none").negate(), xie.negate()), n = At(3120, "Hide Editor Tabs"); |
| config.zenMode.showTabs | 28958075..28958098 | no (exists elsewhere upstream) | b extends UKt { constructor() { const e = mt.and(mt.equals("config.zenMode.showTabs", "none").negate(), xie), n = At(3122, "Hide Editor Tabs in Zen Mode" |
| zenMode.showTabs | 28958082..28958098 | no (exists elsewhere upstream) | ds UKt { constructor() { const e = mt.and(mt.equals("config.zenMode.showTabs", "none").negate(), xie), n = At(3122, "Hide Editor Tabs in Zen Mode" |
| single | 28959206..28959212 | no (exists elsewhere upstream) | const e = mt.and(mt.equals("config.workbench.editor.showTabs", "single").negate(), xie.negate()), n = At(3128, "Show Single Editor Tab"); |
| config.workbench.editor.editorActionsLocation | 28960394..28960439 | no (exists elsewhere upstream) | r Actions to Title Bar"), category: Vi.View, precondition: mt.equals("config.workbench.editor.editorActionsLocation", "titleBar").negate(), metadata: { description: At(3133, "Move Edito |
| titleBar | 28960443..28960451 | no (exists elsewhere upstream) | ondition: mt.equals("config.workbench.editor.editorActionsLocation", "titleBar").negate(), metadata: { description: At(3133, "Move Editor Actions fr |
| workbench.editor.editorActionsLocation | 28960401..28960439 | no (exists elsewhere upstream) | ns to Title Bar"), category: Vi.View, precondition: mt.equals("config.workbench.editor.editorActionsLocation", "titleBar").negate(), metadata: { description: At(3133, "Move Edito |
| Toggle Zen Mode | 28963845..28963860 | no (exists elsewhere upstream) | super({ id: "workbench.action.toggleZenMode", title: { ...At(3144, "Toggle Zen Mode"), mnemonicTitle: D(3063, null) }, precondition: yR.toNegated(), cate |
| workbench.action.exitZenMode | 28964252..28964280 | no (exists elsewhere upstream) | ggleZenMode(); } }), ja.registerCommandAndKeybindingRule({ id: "workbench.action.exitZenMode", weight: -900, handler(t) { const e = t.get(Id), n = t.get(Rr); |
| config.window.menuBarVisibility | 28964708..28964739 | yes | ory: Vi.View, f1: true, toggled: mt.and(vQ.toNegated(), mt.notEquals("config.window.menuBarVisibility", "hidden"), mt.notEquals("config.window.menuBarVisibility", "toggle" |
| native | 28965464..28965470 | no (exists elsewhere upstream) | ", "compact")) }, when: mt.and(yR.toNegated(), mt.notEquals(sRn.key, "native"), axi.negate()), group: "2_config", order: 0 }); } Ht(class exte |
| workbench.parts.auxiliarybar | 28971560..28971588 | no (exists elsewhere upstream) | s.sidebar"), a = n.hasFocus("workbench.parts.panel"), l = n.hasFocus("workbench.parts.auxiliarybar"); o ? r = "workbench.parts.sidebar" : a ? r = "workbench.par |

## Upstream anchors absent from bundle (weak: localized messages are stripped by the nls build plugin)

| anchor | upstream line |
|---|---|
| menuBar | 40 |
| activity-bar-left | 41 |
| activity-bar-right | 42 |
| panel-left | 43 |
| panel-left-off | 44 |
| panel-right | 45 |
| panel-right-off | 46 |
| panel-bottom | 47 |
| statusBar | 48 |
| panel-align-left | 50 |
| panel-align-right | 51 |
| panel-align-center | 52 |
| panel-align-justify | 53 |
| quickInputAlignmentTop | 55 |
| quickInputAlignmentCenter | 56 |
| fullscreen | 58 |
| centerLayoutIcon | 59 |
| zenMode | 60 |
| workbench.action.toggleCenteredLayout | 70 |
| toggleCenteredLayout | 72 |
| miToggleCenteredLayout | 73 |
| 1_toggle_view | 81 |
| workbench.sideBar.location | 98 |
| workbench.action.moveSideBarRight | 121 |
| moveSidebarRight | 124 |
| workbench.action.moveSideBarLeft | 129 |
| moveSidebarLeft | 132 |
| workbench.action.toggleSidebarPosition | 143 |
| toggleSidebarPosition | 144 |
| configure-layout-icon | 173 |
| configureLayout | 176 |
| 1_workbench_layout | 178 |
| config.workbench.layoutControl.type | 181 |
| 3_workbench_layout_move | 189 |
| move side bar right | 192 |
| config.workbench.sideBar.location | 194 |
| move sidebar left | 203 |
| move second sidebar left | 214 |
| move second sidebar right | 225 |
| miMoveSidebarRight | 236 |

