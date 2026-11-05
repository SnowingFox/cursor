// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerDebugReproductionToolbar.js range:29047632..29048928
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, pi, sd, gs, Di, ta, S9e, aS, vo, FS, Awl, ZVt, rC, pOk, gPn, AOk
// wrapper-init: Hwl
// hoisted-owner: agentFeedbackSubmission.js (app-out-vs-workbench-workbench-glass-main-js:5032); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

Hwl = L({ "ComposerDebugReproductionToolbar.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), sd(), gs(), Di(), ta(), S9e(), aS(), vo(), FS(), Awl(), ZVt(), rC(), pOk(), gPn(), AOk(), FXg = wt("<span class=opacity-60>"), BXg = wt("<div class=composer-debug-reproduction-toolbar-actions><div></div><div>"), UXg = wt("<div class=composer-debug-reproduction-toolbar><div class=composer-debug-reproduction-toolbar-main-content><div class=composer-debug-reproduction-toolbar-header><span></span><span class=composer-debug-reproduction-toolbar-title>Reproduction Steps</span></div><div class=composer-debug-reproduction-toolbar-scroll-container>"), jXg = wt("<div class=composer-debug-reproduction-toolbar-content>"), $Xg = wt("<div class=composer-debug-reproduction-floating-logs>"), HXg = Ok(_Me), [jwl, $wl] = Wt(null);
} });
function DOk(t) {
  switch (t) {
    case "up":
      return uii.UP;
    case "down":
      return uii.DOWN;
    default:
      return t;
  }
}
function NOk(t) {
  switch (t) {
    case "prominent":
      return Y1r.PROMINENT;
    case "inline":
      return Y1r.INLINE;
    default:
      return t;
  }
}
function WXg(t, e) {
  t.reportAgentFeedback(e.requestId, DOk(e.sentiment), e.canonicalModelName, Ztk(e.details), e.source, e.variant);
}
