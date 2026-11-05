// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerOptimisticPlanningRow.react.js range:30962253..30963988
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, d_, gTt
// wrapper-init: Iaw -> composerOptimisticPlanningRowModuleInit
// hoisted-owner: cancelRunTerminalFromBubble.js (app-out-vs-workbench-workbench-glass-main-js:5612); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: Iaw -> composerOptimisticPlanningRowModuleInit (apply-map AST equivalent)

var composerOptimisticPlanningRowModuleInit = L({
  "ComposerOptimisticPlanningRow.react.js"() {
    "use strict";

    E(), d_(), gTt();
  }
});
async function xaw(t, e, n) {
  if (e.data.isNAL !== true) return;
  const i = t.composerDataService.getComposerCapability(e, mo.TOOL_FORMER);
  if (!i) return;
  let r = n,
    s = i.getBubbleData(r);
  if (!s || s.tool !== Ct.RUN_TERMINAL_COMMAND_V2) try {
    await t.composerDataService.loadBubblesByIds(e, [r]), s = i.getBubbleData(r);
  } catch {}
  if (!s || s.tool !== Ct.RUN_TERMINAL_COMMAND_V2) {
    const _ = await i.getHydratedBubbleByToolCallId(r);
    _?.bubbleData.tool === Ct.RUN_TERMINAL_COMMAND_V2 && (r = _.bubbleId, s = _.bubbleData);
  }
  if (!s || s.tool !== Ct.RUN_TERMINAL_COMMAND_V2) return;
  const o = s.toolCallId;
  if (!o) return;
  const a = s.additionalData?.sessionId,
    l = t.toolCallHumanReviewService.getTerminalReviewModelForBubble(e, r),
    c = s.additionalData?.status;
  if (!!a && !s.params?.isBackground && (c === "running" || c === "loading") && a) try {
    t.terminalExecutionService.cancelStream(a);
  } catch {}
  i.setBubbleData(r, {
    status: "cancelled",
    additionalData: {
      ...s.additionalData,
      status: "cancelled"
    }
  }), l?.reset();
  let d = t.instantiationService,
    h;
  const p = t.workspaceCollectionService.getMaterializedWorkspaceIdentifiers(),
    g = e.data.workspaceIdentifier ?? (p.length === 1 ? p[0] : void 0),
    f = g !== void 0 && p.some(_ => _.id === g.id);
  if (g && f) try {
    h = await t.workspaceCollectionService.createWorkspaceReference(g, Lc.Terminal), d = h.object.instantiationService;
  } catch {}
  try {
    await d.invokeFunction(async _ => {
      await _.get(oF).cancelExecByToolCallId(e.data.composerId, o);
    });
  } finally {
    h?.dispose();
  }
}
