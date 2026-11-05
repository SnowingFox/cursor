// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentForegroundComposerTab.js range:32728758..32729705
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, pi, Hn, Jfn, Qe, bO, jKt, Ef, pd, vo, sk, Fqe, S2w, L3n, nBf, tws
// wrapper-init: C2w
// hoisted-owner: emptyState.js (app-out-vs-workbench-workbench-glass-main-js:6113); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var C2w = L({ "AgentForegroundComposerTab.js"() {
  "use strict";
  E(), at(), pi(), Hn(), Jfn(), Qe(), bO(), jKt(), Ef(), pd(), vo(), sk(), Fqe(), S2w(), L3n(), nBf(), tws();
} }), T2w = L({ "emptyState.css"() {
} });
function E2w(t) {
  return (() => {
    var e = rBf(), n = e.firstChild, i = n.firstChild, r = i.firstChild;
    return Le(r, () => t.title), Le(i, Ee(Ut, { get when() {
      return t.description !== void 0;
    }, get children() {
      var s = iBf();
      return Le(s, () => t.description), s;
    } }), null), Le(n, Ee(Ut, { get when() {
      return t.actionElement;
    }, get children() {
      return t.actionElement;
    } }), null), Le(n, Ee(Ut, { get when() {
      return !t.actionElement && t.actionTitle;
    }, get children() {
      return Ee(hp, { get title() {
        return t.actionTitle;
      }, type: "tertiary", size: "small", onClick: () => t.action?.() });
    } }), null), e;
  })();
}
var iBf, rBf, 