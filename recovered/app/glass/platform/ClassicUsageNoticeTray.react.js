// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ClassicUsageNoticeTray.react.js range:29236083..29238935
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.068Z
// wrapper: fJg deps:2 [E, Mt]
// declarations: r6k, s6k, o6k, a6k, q0l (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
fJg = L({ "ClassicUsageNoticeTray.react.js"() {
  "use strict";
  E(), Mt(), G0l = 8, gJg = (t) => t === "below" ? { marginTop: G0l } : { marginBottom: G0l };
} });
function r6k(t) {
  const e = Gr();
  return Ee(z0l, { leadingIcon: "cube-transparent", get message() {
    return t.nudge.popupMessage ?? Lrs;
  }, onDismiss: () => {
    Drg({ analyticsService: e.analyticsService, composerDataHandle: t.composerDataHandle });
  }, onOpenLink: (n, i) => {
    e.openerService.open(n, { allowCommands: i.allowCommands, fromUserGesture: true });
  }, onPrimaryAction: () => {
    Mrg({ aiSettingsService: e.aiSettingsService, analyticsService: e.analyticsService, composerDataHandle: t.composerDataHandle, modelConfigService: e.modelConfigService });
  }, get primaryActionLabel() {
    return t.nudge.acceptLabel ?? Ors;
  } });
}
function s6k(t) {
  const e = Gr();
  return Ee(z0l, { get description() {
    return t.nudge.bannerDescription;
  }, get leadingIcon() {
    return t.nudge.bannerDescription ? "gauge" : "info";
  }, get message() {
    return t.nudge.bannerMessage ?? Nrs;
  }, onDismiss: () => {
    const n = t.nudge;
    e.composerDataService.updateComposerDataSetStore(t.composerDataHandle, (i) => i("pendingModelNudge", void 0)), e.analyticsService.trackEvent("model_nudge.dismissed", { nudgeId: n.nudgeId, action: "banner_dismiss" });
  }, onOpenLink: (n, i) => {
    e.openerService.open(n, { allowCommands: i.allowCommands, fromUserGesture: true });
  } });
}
function o6k(t) {
  const e = Gr();
  return Ee(q0l, { dismissLabel: "Dismiss", onDismiss: () => {
    const n = t.previousModel;
    e.composerDataService.updateComposerDataSetStore(t.composerDataHandle, (i) => i("pendingAutoSwitchPopup", void 0)), e.analyticsService.trackEvent("new_chat_auto_switch.popup_dismissed", { action: "dismiss", restoredModel: n });
  }, onPrimaryAction: () => {
    e.modelConfigService.setModelConfig("composer", { modelName: "default" }), e.modelConfigService.setModelConfigForComposer(t.composerDataHandle, { modelName: "default" }, "composer"), e.composerDataService.updateComposerDataSetStore(t.composerDataHandle, (n) => n("pendingAutoSwitchPopup", void 0)), e.analyticsService.trackEvent("new_chat_auto_switch.popup_dismissed", { action: "accept" });
  }, position: "below", primaryActionLabel: "Switch to Auto", title: "Auto has significantly higher usage limits" });
}
function a6k(t) {
  const e = Gr();
  return Ee(q0l, { dismissLabel: "Dismiss", leadingIcon: "info", onDismiss: () => {
    e.composerDataService.updateComposerDataSetStore(t.composerDataHandle, (n) => n("pendingAutoSwitchBanner", void 0)), e.analyticsService.trackEvent("new_chat_auto_switch.popup_dismissed", { action: "banner_dismiss" });
  }, position: "below", title: "Switched to Auto, which provides significantly higher usage limits." });
}
var q0l, z0l,
