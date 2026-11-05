// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LimitHitBubbleClassic.js range:29195496..29196707
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.775Z
igs = L({ "LimitHitBubbleClassic.js"() {
  "use strict";
  E(), at(), pi(), Dbe(), aS(), vo(), gxi(), cTe(), AIt(), P0l = Ok(yFk);
} });
function EQg(t) {
  const { composerKey: e, entry: n } = t;
  if (!(!t.enabled || e === void 0 || n === void 0 || n.dismissed)) return { composerKey: e, entry: n, action: wmk(t.copy, t.isInstalled) };
}
function M0l(t, e) {
  return { surface: t, job: e.entry.job, showNumber: e.entry.showNumber, cta: e.action.kind };
}
function IQg(t, e) {
  const n = EQg(e);
  return n === void 0 ? null : { title: Cmk(e.copy), description: n.entry.description, action: n.action, onAction: () => {
    t.analyticsService.trackEvent("grok_bot_contextual_banner.clicked", M0l(e.surface, n)), t.openerService.open(rt.parse(n.action.url), { openExternal: true }), xrg(n.composerKey);
  }, onDismiss: () => {
    t.analyticsService.trackEvent("grok_bot_contextual_banner.dismissed", M0l(e.surface, n)), xrg(n.composerKey);
  } };
}
function xQg(t, e) {
  const { composerKey: n, entry: i } = e;
  if (n === void 0 || i === void 0 || i.shownLogged) return;
  const r = EQg(e);
  r !== void 0 && Emk(n) && t.analyticsService.trackEvent("grok_bot_contextual_banner.shown", M0l(e.surface, r));
}
