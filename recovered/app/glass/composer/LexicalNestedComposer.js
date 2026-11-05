// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalNestedComposer.js range:27291574..27292550
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, cI, pi
// wrapper-init: sRk
// hoisted-owner: LexicalTabIndentationPlugin.js (app-out-vs-workbench-workbench-glass-main-js:4735); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

sRk = L({ "LexicalNestedComposer.js"() {
  "use strict";
  E(), at(), cI(), pi();
} });
function oRk(t, e) {
  const n = [];
  for (let i = 0; i < t.length; i++) {
    const r = e(t[i]);
    r !== null && n.push(r);
  }
  return n;
}
function aRk(t) {
  const e = t.getNodes();
  if (oRk(e, (l) => kNa(l) && l.canIndent() ? l : null).length > 0) return true;
  const i = t.anchor, r = t.focus, s = r.isBefore(i) ? r : i, o = s.getNode(), a = Nml(o);
  if (a.canIndent()) {
    const l = a.getKey();
    let c = wNa();
    if (c.anchor.set(l, 0, "element"), c.focus.set(l, 0, "element"), c = fNa(c), c.anchor.is(s)) return true;
  }
  return false;
}
function lRk(t) {
  return t.registerCommand(JGe, (e) => {
    const n = ku();
    if (!Cc(n)) return false;
    e.preventDefault();
    const i = aRk(n) ? e.shiftKey ? f0t : Fst : Gyi;
    return t.dispatchCommand(i, void 0);
  }, Sb);
}
function cRk() {
  const [t] = t1();
  return Cn(() => {
    On(lRk(t));
  }), null;
}
