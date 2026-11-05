// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CompactAgentHistoryHoverPane.js range:32894720..32897079
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.189Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, background_composer_pb.js, chat_pb.js, dom.js, actions.js, codicons.js, +13 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, solid.js, background_composer_pb.js, chat_pb.js, dom.js, actions.js, codicons.js, +13 more
// path-candidate: none (no nls basename match; path inferred, confidence C)
var yPw = L({ "CompactAgentHistoryHoverPane.js"() {
  "use strict";
  E(), at(), pi(), pd(), sd(), Hn(), vu(), gs(), Ole(), aS(), vo(), lMn(), sBl(), jMe(), Ykl(), V8f(), E6e(), Y8f(), vPw(), _Pw(), tws();
} });
function e7f(t) {
  const e = Gr();
  return () => {
    const n = t.composerDataHandle().data, i = t.tabComposerId?.() ?? n.composerId, r = !!n?.gitWorktree?.worktreePath, s = mGt.getValue(e.contextKeyService) ?? false, o = e.contextKeyService.getContextKeyValue(Tm.key) ?? false, a = Yhn ? true : o, l = (d) => e.commandService.executeCommand(d, i), c = (d) => e.commandService.executeCommand(d), u = (d) => e.analyticsService.trackEvent("feature_usage.ui_action_invoked", { feature: "worktrees", actionId: d });
    return [...r ? [Ig({ id: "composer.copyWorktreePath", label: "Copy worktree path", enabled: true, run: async () => {
      u("composer.copyWorktreePath");
      const d = n.gitWorktree.worktreePath;
      await e.clipboardService.writeText(d);
    } }), Ig({ id: "composer.openTerminalInWorktree", label: "Open terminal in worktree", enabled: true, run: () => c("composer.openTerminalInWorktree") }), Ig({ id: "composer.openNewWindowInWorktree", label: "Open new window in worktree", enabled: true, run: () => {
      u("composer.openNewWindowInWorktree");
      const d = n.gitWorktree.worktreePath;
      return e.hostService.openWindow([{ folderUri: rt.file(d) }], { forceNewWindow: true });
    } }), new Kh()] : [], Ig({ id: R0n, label: "Export Transcript", enabled: true, run: () => l(R0n) }), ...s ? [Ig({ id: FHt, label: "Share Transcript", enabled: true, run: () => l(FHt) })] : [], Ig({ id: P0n, label: "Copy Request ID", enabled: true, run: () => e.commandService.executeCommand(P0n, { kind: "composerId", composerId: i }) }), Ig({ id: jbi, label: "Give Feedback", enabled: true, run: () => l(jbi) }), ...a ? [new Kh(), Ig({ id: "composer.openPromptQuality", label: "Open in Prompt Quality", enabled: true, run: () => l("composer.openPromptQuality") }), Ig({ id: "composer.openInDatadog", label: "Open in Datadog", enabled: true, run: () => {
      const d = n.latestChatGenerationUUID;
      if (d) {
        const h = `http://go/logs/${d}`;
        e.openerService.open(h, { openExternal: true });
      }
    } }), Ig({ id: j0n, label: "Export Chat (Developer)", enabled: true, run: () => l(j0n) })] : []];
  };
}
