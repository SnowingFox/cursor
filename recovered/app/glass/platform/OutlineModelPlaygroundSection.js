// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OutlineModelPlaygroundSection.js range:39246598..39248382
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.143Z
// wrapper: JlC deps:15 [E, at, Am, pi, yo, fn, p_e, rC, vo, Ien, hKv, e_]
// declarations: tcC, ZYv (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
JlC = L({ "OutlineModelPlaygroundSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), yo(), fn(), p_e(), rC(), vo(), Ien(), hKv(), e_(), eD(), REt(), mk(), GYv = wt("<div><ul>"), qYv = wt("<li>"), zYv = wt("<span><strong></strong> - "), VYv = wt("<span> [<!>:<!> - <!>:<!>]"), KYv = wt("<strong>"), YYv = wt('<div><div><input type=text placeholder="Search for files..."><div>Selected File: </div><div><div></div><div>'), XYv = wt("<div>"), odc = cs(""), adc = cs(void 0), ldc = cs(""), cdc = cs(void 0);
} }), ecC = L({ "PlanBuildMessageSection.css"() {
} });
function tcC() {
  const t = ["Add authentication", "Implement user authentication with OAuth2 and JWT tokens", "Create a comprehensive user authentication system that supports multiple providers including Google, GitHub, and email/password with two-factor authentication and password reset functionality", "Build a full-stack application with authentication, database integration, and API endpoints"];
  return Ee(pk, { title: "Plan Build Message", get children() {
    var e = ZYv();
    return Le(e, Ee(Su, { each: t, children: (n, i) => {
      const r = { executionLabel: "Build", explicitPlanTitle: n, planUri: void 0, todos: [], isCheckedOutToThisBubble: false };
      return (() => {
        var s = QYv(), o = s.firstChild, a = o.firstChild, l = a.nextSibling, c = l.nextSibling, u = c.nextSibling, d = u.nextSibling;
        return Le(o, () => i() + 1, l), Le(o, () => n.length, u), Le(s, Ee(JYv, { isGlass: true, isSubagent: false, isSticky: false, loadTitle: eXv, onRedo: udc, onRestore: udc, onStop: tXv, plan: r, showRestoreButton: false, showStopButton: false, stopKeybinding: void 0 }), null), s;
      })();
    } })), e;
  } });
}
var ZYv, QYv, JYv, eXv, udc, tXv,
