// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ThirdPartyUsageNudgeBubble.react.js range:29204696..29207102
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.185Z
// wrapper: xFk deps:2 [E, TFk]
// declarations: GQg, xFk, qQg (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var xFk = L({ "ThirdPartyUsageNudgeBubble.react.js"() {
  "use strict";
  E(), TFk();
} });
function GQg(t) {
  const e = Gr(), [n] = YB(e.storageService, "modelNudgesEnabled"), [i, r] = Wt(null);
  let s = null;
  const o = vt(() => {
    const d = e.modelConfigService.getEffectiveModelConfigForComposer(t.composerDataHandle), h = d.selectedModels?.[0]?.modelId ?? d.modelName;
    return e.modelConfigService.resolveModelNameToCatalog(h);
  }), a = vt(() => e.modelConfigService.getAvailableDefaultModels()), l = vt(() => {
    if (!n() || !t.isDisplayAllowed()) return null;
    const d = i() ?? e.usageLimitPolicyStatusService.thirdPartyUsageNudge();
    if (d === null || t.composerDataHandle.composerId !== e.composerDataService.selectedComposerId) return null;
    const h = o(), p = a();
    return !$Qg(e.usageLimitPolicyStatusService.status()) || !jQg(d.targetModel, p) || !UQg(h, d.targetModel, p) ? null : d;
  });
  Cn(() => {
    const d = l();
    d !== null && (i() === null && r(d), s !== d.nudgeId && (s = d.nudgeId, e.analyticsService.trackEvent("third_party_usage_nudge.seen", { nudgeId: d.nudgeId, threshold: d.threshold, targetModel: d.targetModel, experimentName: d.experimentName }), e.usageLimitPolicyStatusService.clearThirdPartyUsageNudge()));
  });
  const c = () => {
    const d = i() ?? l();
    d !== null && (e.aiSettingsService.enableModel(d.targetModel), e.modelConfigService.setModelConfigForComposer(t.composerDataHandle, { modelName: d.targetModel }, BTt(t.composerDataHandle), { updateGlobalConfig: true }), e.analyticsService.trackEvent("third_party_usage_nudge.accepted", { nudgeId: d.nudgeId, threshold: d.threshold, targetModel: d.targetModel, experimentName: d.experimentName }), r(null), e.usageLimitPolicyStatusService.clearThirdPartyUsageNudge());
  }, u = () => {
    const d = i() ?? l();
    d !== null && e.analyticsService.trackEvent("third_party_usage_nudge.dismissed", { nudgeId: d.nudgeId, threshold: d.threshold, experimentName: d.experimentName }), r(null), e.usageLimitPolicyStatusService.clearThirdPartyUsageNudge();
  };
  return Ee(Ut, { get when() {
    return l();
  }, children: (d) => (() => {
    var h = qQg();
    return Le(h, Ee(zQg, { get nudge() {
      return d();
    }, onAccept: c, onDismiss: u })), xn((p) => Ea(h, t.position === "below" ? { "margin-top": "8px" } : { "margin-bottom": "8px" }, p)), h;
  })() });
}
var qQg, zQg,
