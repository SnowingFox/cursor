// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTabBase.js range:32712558..32717868
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.137Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, codicons.js, themables.js, ComposerDiffStatusDisplay.js, iconButton.js, spinningLoader.js, +1 more
// anchors: classes=agent-tab-dot-indicator
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, codicons.js, themables.js, ComposerDiffStatusDisplay.js, iconButton.js, spinningLoader.js, +1 more
// anchors: classes=agent-tab-dot-indicator
// path-candidate: none (no nls basename match; path inferred, confidence C)
nBf = L({ "AgentTabBase.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), ta(), LIl(), F6(), Wct(), k2w(), f9l = wt("<span class=highlight>"), Jks = wt("<span>"), W9f = wt('<div class="agent-tab-dot-indicator unread">'), G9f = wt("<span><span class=agent-tab-name-text>"), v9l = wt('<span title="Git Branch">'), q9f = wt('<span title="Background Agent">'), z9f = wt('<span title="Agent in Worktree">'), V9f = wt("<span class=agent-tab-timestamp>"), K9f = wt("<span class=agent-tab-timestamp-right>"), Y9f = wt("<span><span> "), X9f = wt("<div class=agent-tab-row-secondary>"), Z9f = wt("<div>"), Q9f = wt("<div><div><div class=agent-tab-row-main>"), J9f = wt("<input type=text class=agent-tab-rename-input>"), eBf = wt("<div class=agent-tab-actions>"), tBf = wt("<span class=truncate>");
} });
function _9l(t, e) {
  const n = /* @__PURE__ */ new Set([e.composerId, zwt(e)]), i = Xh(t, "pinnedComposers"), r = i.get(), s = r.filter((o) => !n.has(o));
  s.length !== r.length && i.set(s, void 0), i.dispose();
}
async function ews(t, e) {
  t.composerDataService.allComposersData.allComposers.length > 1 ? await t.composerService.deleteComposer(e.composerId) : await t.composerService.resetComposer(e.composerId);
}
function V3n(t, e, n) {
  const r = !!e.createdFromBackgroundAgent?.bcId, s = zwt(e), o = Xh(t.storageService, "pinnedComposers"), a = o.get(), l = MHr(a, e);
  o.dispose();
  const u = t.inlineDiffService.inlineDiffs.nonReactive().filter((g) => g.composerMetadata?.composerId === e.composerId), d = t.composerDataService.getComposerDataIfLoaded(e.composerId), h = !e.createdFromBackgroundAgent?.bcId && u.length > 0 && d?.status !== "generating", p = [];
  if (p.push({ id: l ? "unpin-composer" : "pin-composer", label: l ? "Unpin" : "Pin", enabled: true, class: "", tooltip: l ? "Unpin from sidebar" : "Pin to sidebar", run: async () => {
    if (l) {
      _9l(t.storageService, e);
      return;
    }
    t.composerViewsService.pinComposerToSidebar(s);
  } }), r || p.push({ id: "duplicate-composer", label: "Fork Chat", enabled: true, class: "", tooltip: "Fork this chat", run: async () => {
    await t.commandService.executeCommand(F0n, { composerId: e.composerId, targetGroupId: n?.targetGroup?.id });
  } }), p.push({ id: "open-in-new-tab", label: "Open in New Tab", enabled: true, class: "", tooltip: "Open chat in a new tab", run: async () => {
    await t.agentLayoutService.openComposer({ type: "local", id: e.composerId, openInNewTab: true, targetGroup: n?.targetGroup });
  } }), p.push(new Kh()), h && (p.push({ id: "keep-all-changes", label: "Keep All", enabled: true, class: "", tooltip: "Keep all pending changes", run: async () => {
    for (const g of u) t.inlineDiffService.acceptDiff(g.id);
    await Yst(t);
  } }), p.push({ id: "undo-all-changes", label: "Undo All", enabled: true, class: "", tooltip: "Undo all pending changes", run: async () => {
    for (const g of u) t.inlineDiffService.rejectDiff(g.id);
  } }), p.push(new Kh())), !e.isProject) try {
    e.hasUnreadMessages ? (p.push({ id: "mark-as-read", label: "Mark as Read", enabled: true, class: "", tooltip: "Mark chat as read", run: async () => {
      try {
        t.composerDataService.setAllComposersData("allComposers", (f) => f.composerId === e.composerId, { hasUnreadMessages: false });
        const g = t.composerDataService.getHandleIfLoaded(e.composerId);
        g && t.composerDataService.updateComposerData(g, { hasUnreadMessages: false });
      } catch (g) {
        console.error("Failed to mark composer as read", g);
      }
    } }), p.push(new Kh())) : (p.push({ id: "mark-as-unread", label: "Mark as Unread", enabled: true, class: "", tooltip: "Mark chat as unread", run: async () => {
      try {
        t.composerDataService.setAllComposersData("allComposers", (f) => f.composerId === e.composerId, { hasUnreadMessages: true });
        const g = t.composerDataService.getHandleIfLoaded(e.composerId);
        g && t.composerDataService.updateComposerData(g, { hasUnreadMessages: true });
      } catch (g) {
        console.error("Failed to mark composer as unread", g);
      }
    } }), p.push(new Kh()));
  } catch (g) {
    console.error("Failed to evaluate mark-as-unread/mark-as-read visibility", g);
  }
  return p.push({ id: "delete-composer", label: "Delete", enabled: true, class: "", tooltip: "Delete chat", run: async () => {
    await ews(t, e);
  } }, { id: "rename-composer", label: "Rename", enabled: true, class: "", tooltip: "Rename chat", run: async () => {
    const g = e.createdFromBackgroundAgent?.bcId;
    if (g) {
      const f = t.quickInputService.createInputBox();
      f.placeholder = "Enter new name", f.value = e.name || "New Cloud Agent", f.show();
      const _ = async () => {
        try {
          const S = f.value.trim();
          S && await t.backgroundComposerService.renameBackgroundComposer(g, S);
        } finally {
          f.hide();
        }
      }, b = f.onDidAccept(_), y = f.onDidHide(() => {
        b.dispose(), y.dispose(), f.dispose();
      });
    } else {
      const _ = (await t.quickInputService.input({ prompt: "Enter new name", value: e.name || "" }) ?? "").trim();
      if (!_) return;
      await t.composerService.renameComposer(e.composerId, _);
    }
  } }), p;
}
