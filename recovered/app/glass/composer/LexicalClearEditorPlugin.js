// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalClearEditorPlugin.js range:27288518..27289379
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, cI, NA, pi
// wrapper-init: YAk
// hoisted-owner: LexicalHorizontalRuleNode.js (app-out-vs-workbench-workbench-glass-main-js:4727); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

YAk = L({ "LexicalClearEditorPlugin.js"() {
  "use strict";
  E(), cI(), NA(), pi();
} });
function XAk(t) {
  const [e] = t1(), [n, i, r] = PAk(t.nodeKey), s = (o) => {
    if (n() && ipe(ku())) {
      o.preventDefault();
      const l = AP(t.nodeKey);
      CEg(l) && l.remove(), i(false);
    }
    return false;
  };
  return Cn(() => {
    On(mMe(e.registerCommand(uGr, (o) => {
      const a = e.getElementByKey(t.nodeKey);
      return o.target === a ? (o.shiftKey || r(), i(!n), true) : false;
    }, mR), e.registerCommand(Wyi, s, mR), e.registerCommand(_Cn, s, mR)));
  }), Cn(() => {
    const o = e.getElementByKey(t.nodeKey);
    o !== null && (o.className = n() ? "selected" : "");
  }), null;
}
function ZAk() {
  return { node: Ius() };
}
function Ius() {
  return W2e(new tAi());
}
function CEg(t) {
  return t instanceof tAi;
}
var TEg, tAi, 