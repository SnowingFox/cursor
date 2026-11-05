// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerPluginInstalledCard.js range:32925298..32927130
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, d_, Di, aS
// wrapper-init: VPw
// hoisted-owner: GlassSubagentBreadcrumb.js (app-out-vs-workbench-workbench-glass-main-js:6156); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var VPw = L({ "ComposerPluginInstalledCard.js"() {
  "use strict";
  E(), at(), d_(), Di(), aS();
} }), KPw = L({ "GlassSubagentBreadcrumb.css"() {
} });
function YPw(t) {
  const e = Gr(), n = vt(() => {
    const o = t.composerId(), a = t.selectedConversationComposerId();
    return a === o ? [] : [o, a];
  }), i = vt(() => e.workbenchEnvironmentService.isGlass && !t.isStandaloneComposer() && n().length > 1), r = (o) => o === t.composerId() ? t.currentComposer().name ?? e.composerDataService.getComposerTitle(o) : e.composerDataService.getComposerTitle(o), s = (o) => {
    if (o === t.composerId()) {
      t.updateCurrentComposer({ selectedSubComposerId: void 0 }), t.setSelectedConversationComposerId(t.composerId());
      return;
    }
    t.updateCurrentComposer({ selectedSubComposerId: o }), t.setSelectedConversationComposerId(o);
  };
  return Ee(Ut, { get when() {
    return i();
  }, get children() {
    var o = C7f();
    return Le(o, Ee(Su, { get each() {
      return n();
    }, children: (a, l) => [Ee(E7f, { variant: "ghost", size: "sm", align: "left", onClick: () => s(a), get title() {
      return r(a);
    }, get class() {
      return `glass-subagent-breadcrumb__button ${a === t.selectedConversationComposerId() ? "glass-subagent-breadcrumb__button--selected" : "glass-subagent-breadcrumb__button--unselected"}`;
    }, get children() {
      return r(a);
    } }), Ee(Ut, { get when() {
      return l() < n().length - 1;
    }, get children() {
      return Ee(T7f, { name: "chevron-right", size: 10, color: "tertiary", style: { opacity: 0.5, "flex-shrink": 0 } });
    } })] })), xn((a) => (a = t.sharedBorder()) != null ? o.style.setProperty("--glass-subagent-breadcrumb-border-bottom", a) : o.style.removeProperty("--glass-subagent-breadcrumb-border-bottom")), o;
  } });
}
var C7f, T7f, E7f, 