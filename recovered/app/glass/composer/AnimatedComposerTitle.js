// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AnimatedComposerTitle.js range:32903838..32904984
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, pi, gs, ta, O6, Ef, h8f
// wrapper-init: g7f
// hoisted-owner: composerFindHighlightSheet.js (app-out-vs-workbench-workbench-glass-main-js:6149); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

g7f = L({ "AnimatedComposerTitle.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), gs(), ta(), O6(), Ef(), h8f(), u7f = wt('<span title="Cloud Agent">'), d7f = wt('<span class="composer-animated-title__text composer-animated-title__text--loading make-shine">Loading Chat'), h7f = wt("<span>"), p7f = wt("<div class=composer-animated-title-container><div class=composer-animated-title__row>"), m7f = wt('<span class="composer-animated-title__text composer-animated-title__text--fallback">');
} });
function IPw(t, e = lBl) {
  let n = cBl.get(t);
  n || (n = /* @__PURE__ */ new Map(), cBl.set(t, n));
  let i = n.get(e.all);
  if (!i) {
    const s = t.defaultView?.CSSStyleSheet;
    if (!s) return;
    const o = new s();
    o.replaceSync(_7f(e)), i = { sheet: o, refCount: 0 }, n.set(e.all, i);
  }
  const r = i;
  return r.refCount === 0 && !t.adoptedStyleSheets.includes(r.sheet) && (t.adoptedStyleSheets = [...t.adoptedStyleSheets, r.sheet]), r.refCount += 1, () => {
    r.refCount -= 1, r.refCount === 0 && (t.adoptedStyleSheets = t.adoptedStyleSheets.filter((s) => s !== r.sheet));
  };
}
var f7f, v7f, lBl, _7f, cBl, 