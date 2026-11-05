// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BillingStatusBanner.react.js range:29232606..29233595
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.064Z
// wrapper: JFk deps:4 [E, Mt, gxi, lJg]
// declarations: dJg, e6k, hJg (segment truncated)
// anchors: (none)
// group: usage-billing
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
JFk = L({ "BillingStatusBanner.react.js"() {
  "use strict";
  E(), Mt(), gxi(), lJg(), H0l = 8, uJg = (t) => t === "below" ? { marginTop: H0l } : { marginBottom: H0l };
} });
function dJg(t) {
  const e = Gr(), [n] = Wt({ current: t.onVisibilityChange });
  Cn(() => {
    n().current = t.onVisibilityChange;
  });
  const i = vt(() => {
    const r = n();
    return (s) => {
      r.current?.(s);
    };
  });
  return Ee(hJg, { get analyticsService() {
    return e.analyticsService;
  }, get cursorAuthenticationService() {
    return e.cursorAuthenticationService;
  }, get cursorCredsService() {
    return e.cursorCredsService;
  }, get onVisibilityChange() {
    return i();
  }, get openerService() {
    return e.openerService;
  }, get position() {
    return t.position;
  }, get storageService() {
    return e.storageService;
  }, get composerLogService() {
    return e.composerLogService;
  } });
}
function e6k() {
  const [t, e] = Wt(false);
  return [t, e];
}
var hJg,
