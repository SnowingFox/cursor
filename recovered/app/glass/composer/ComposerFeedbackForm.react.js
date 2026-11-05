// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerFeedbackForm.react.js range:29049298..29051614
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Mt
// wrapper-init: FOk
// hoisted-owner: ComposerFeedbackTray.js (app-out-vs-workbench-workbench-glass-main-js:5034); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var FOk = L({ "ComposerFeedbackForm.react.js"() {
  "use strict";
  E(), Mt();
} }), BOk = L({ "ComposerFeedbackTray.css"() {
} });
function UOk(t) {
  const e = Gr(), n = vt(() => t.composerDataHandle().data.feedbackRequest), i = vt(() => n()?.categories ?? []), r = vt(() => n()?.categoryGroups ?? []), [s, o] = Wt(true);
  let a, l;
  const c = () => {
    a !== void 0 && (clearTimeout(a), a = void 0);
  }, u = (g) => {
    c();
    const f = n();
    if (g !== void 0 && f?.requestId !== g) {
      o(true);
      return;
    }
    e.composerDataService.updateComposerDataSetStore(t.composerDataHandle(), (_) => _("feedbackRequest", void 0)), o(true);
  }, d = () => {
    const g = n();
    !g || !s() || (c(), o(false), a = setTimeout(() => {
      a = void 0, u(g.requestId);
    }, VXg));
  };
  Cn(() => {
    const g = n();
    g !== void 0 && (c(), o(true), l !== g.requestId && (l = g.requestId, e.analyticsService.trackEvent("agent.feedback_popup.shown", { requestId: g.requestId, clientSource: Rms, variant: "prominent" })));
  }), On(c), Cn(() => {
    n() !== void 0 && t.composerDataHandle().data.text.length > 0 && d();
  });
  const h = (g) => {
    const f = n();
    if (!f) {
      d();
      return;
    }
    WXg(e.aiService, { requestId: f.requestId, sentiment: g.sentiment, canonicalModelName: f.canonicalModelName, source: Rms, variant: "prominent", details: g }), d();
  }, p = (g) => {
    const f = n();
    f !== void 0 && g === "close_button" && e.analyticsService.trackEvent("agent.feedback_popup.dismissed", { requestId: f.requestId, source: g, clientSource: Rms }), d();
  };
  return Ee(Ut, { get when() {
    return n();
  }, get children() {
    var g = qXg();
    return g.style.setProperty("padding", "0px 9px"), g.style.setProperty("padding-bottom", "4px"), Le(g, Ee(zXg, { get title() {
      return n()?.title ?? "How did the agent do?";
    }, get negativeTitle() {
      return n()?.negativeTitle ?? "What went wrong?";
    }, get commentPlaceholder() {
      return n()?.commentPlaceholder;
    }, get visible() {
      return s();
    }, get requestId() {
      return n()?.requestId;
    }, get categories() {
      return i();
    }, get categoryGroups() {
      return r();
    }, onAutoDismiss: d, onSubmit: h, onSkip: p })), g;
  } });
}
var qXg, Rms, zXg, VXg, 