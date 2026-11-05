// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GrokBotContextualBanner.react.js range:29197762..29199043
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.708Z
NQg = L({ "GrokBotContextualBanner.react.js"() {
  "use strict";
  E(), Mt(), DQg = 16;
} });
function LQg(t) {
  const e = Gr(), [n] = YB(e.storageService, LPn), [i, r] = Wt(0);
  On(Erg(() => r((u) => u + 1)));
  const s = vt(() => (i(), Irg(t.composerId()))), o = { analyticsService: e.analyticsService, openerService: e.openerService }, a = (u) => e.experimentService.getDynamicConfigParam(Fzt, u, BQg), l = vt(() => ({ surface: "classic", composerKey: t.composerId(), entry: s(), enabled: t.isDisplayAllowed(), copy: { title: a("title"), downloadCtaLabel: a("downloadCtaLabel"), downloadUrl: a("downloadUrl"), openCtaLabel: a("openCtaLabel"), openUrl: a("openUrl") }, isInstalled: n() === true })), c = vt(() => IQg(o, l()));
  return Cn(() => {
    xQg(o, l());
  }), Ee(Ut, { get when() {
    return c();
  }, children: (u) => (() => {
    var d = OQg();
    return Le(d, Ee(FQg, { get action() {
      return u().action;
    }, get description() {
      return u().description;
    }, get onAction() {
      return u().onAction;
    }, get onDismiss() {
      return u().onDismiss;
    }, get title() {
      return u().title;
    } })), xn((h) => Ea(d, t.position === "below" ? { "margin-top": "8px" } : { "margin-bottom": "8px" }, h)), d;
  })() });
}
var OQg, FQg, BQg, 