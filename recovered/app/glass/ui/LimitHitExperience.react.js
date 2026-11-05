// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LimitHitExperience.react.js range:29192687..29195496
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.776Z
AIt = L({ "LimitHitExperience.react.js"() {
  "use strict";
  E(), Mt(), mFk(), Du(), ob(), Um(), _Qg(), QW(), cTe(), wQg = "Get More Usage", tgs = { kind: "checkout", tier: "pro", title: "Upgrade to Pro", planName: "Pro" }, A0l = { kind: "checkout", tier: "pro_plus", title: "Upgrade to Pro+", planName: "Pro+" }, R0l = { kind: "checkout", tier: "ultra", title: "Upgrade to Ultra", planName: "Ultra" };
} });
function ngs(t) {
  return { runUpgradeHandOff: kTk({ cursorAuthService: t.cursorAuthenticationService, notificationService: t.notificationService, openerService: t.openerService, cursorCredsService: t.cursorCredsService, uiOverlayService: t.uiOverlayService }), openBillingDashboard: () => {
    t.openerService.open(`${t.cursorCredsService.getSettingsUrl()}${mxi}`, { openExternal: true });
  } };
}
function CQg() {
  const t = Gr(), e = vt(() => {
    const i = t.usageLimitPolicyStatusService.status();
    return i !== null && VZr(i.stage) ? i : null;
  }), n = vt(() => iYt(t.usageDataService.nextUpgrade()));
  return Xc(() => {
    t.usageDataService.addConsumer(), t.usageDataService.refetch(false), On(() => {
      t.usageDataService.removeConsumer();
    });
  }), Ee(Ut, { get when() {
    return e();
  }, children: (i) => Ee(P0l, { get analyticsService() {
    return t.analyticsService;
  }, get cursorAuthenticationService() {
    return t.cursorAuthenticationService;
  }, get notificationService() {
    return t.notificationService;
  }, get portalRoot() {
    return t.portalElement;
  }, get reactiveStorageService() {
    return t.reactiveStorageService;
  }, get unifiedSkuBilling() {
    return ngs(t);
  }, get status() {
    return i();
  }, surface: "classic", get upgradeTarget() {
    return n();
  }, get usageLimitPolicyStatusService() {
    return t.usageLimitPolicyStatusService;
  } }) });
}
function TQg(t) {
  const e = Gr(), n = vt(() => iYt(e.usageDataService.nextUpgrade()));
  return Xc(() => {
    e.usageDataService.addConsumer(), e.usageDataService.refetch(false), On(() => {
      e.usageDataService.removeConsumer();
    });
  }), Ee(P0l, { get analyticsService() {
    return e.analyticsService;
  }, get cursorAuthenticationService() {
    return e.cursorAuthenticationService;
  }, get notificationService() {
    return e.notificationService;
  }, get onLimitApplied() {
    return t.onLimitApplied;
  }, get onUpgradeOverride() {
    return t.onUpgradeOverride;
  }, get portalRoot() {
    return e.portalElement;
  }, get reactiveStorageService() {
    return e.reactiveStorageService;
  }, get unifiedSkuBilling() {
    return ngs(e);
  }, get status() {
    return t.status;
  }, surface: "classic", get upgradeTarget() {
    return n();
  }, get usageLimitPolicyStatusService() {
    return e.usageLimitPolicyStatusService;
  } });
}
var P0l, 