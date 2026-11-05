// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ThirdPartyUsageNudgeClassic.js range:29207102..29208593
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.186Z
// wrapper: AFk deps:9 [E, at, pi, aS, vo, Ole, W4e, HQg, xFk]
// declarations: RFk, PFk, VQg
// anchors: focus-last-queue-item, edit-last-queue-item, select-last-human-bubble
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
AFk = L({ "ThirdPartyUsageNudgeClassic.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), aS(), vo(), Ole(), W4e(), HQg(), xFk(), qQg = wt("<div>"), zQg = Ok(IFk);
} });
function RFk(t) {
  for (let e = t.length - 1; e >= 0; e--) if (vqe(t[e])) return t[e];
}
function PFk(t) {
  return t.hasQueueItems && !t.isEditingQueueItem && !t.hasDraftText ? t.focusedQueueActions ? "focus-last-queue-item" : "edit-last-queue-item" : "select-last-human-bubble";
}
function VQg(t, e, n) {
  const i = SIt(e.data), r = _1(n.extras.contextOverride ?? Uy()), s = e.composerId, o = n.extras.richText ?? "", a = n.query, l = fwl({ targetId: n.id, text: a, richText: o, context: r, restoreSnapshot: i?.restoreSnapshot });
  t.composerDataService.updateComposerData(e, { editingQueueItemId: n.id, ...bms(l), text: a, richText: o }), t.composerDataService.updateComposerDataSetStore(e, (u) => u("context", r)), (n.extras.modelOverride || n.extras.maxModeOverride !== void 0) && t.modelConfigService.setModelConfigForComposer(e, { ...n.extras.modelOverride ? { modelName: n.extras.modelOverride } : {}, ...n.extras.maxModeOverride !== void 0 ? { maxMode: n.extras.maxModeOverride } : {} }), n.extras.unifiedModeOverride && t.composerModesService.setComposerUnifiedMode(e, n.extras.unifiedModeOverride), t.composerEventService.fireShouldForceText({ composerId: s }), t.composerViewsService.focus(s, true), t.composerDataService.getComposerCapability(e, mo.QUEUING)?.tryDispatchNextQueueItem();
}
