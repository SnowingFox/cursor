// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComposerContextPreview.js range:27427669..27429101
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, at, at, pi, gs, VEg, Lr, Fa, ta, fn, qc, Lae, Um, ORk, oT, vo, OPg, cVe, XIg, Sz, ZRn, xRn, QIg, ZVt, rC
// wrapper-init: S2k
// hoisted-owner: InputBoxBrowserChanges.js (app-out-vs-workbench-workbench-glass-main-js:4777); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

S2k = L({ "ComposerContextPreview.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), at(), at(), pi(), gs(), VEg(), Lr(), Fa(), ta(), fn(), qc(), Lae(), Um(), ORk(), oT(), vo(), OPg(), cVe(), XIg(), Sz(), ZRn(), xRn(), QIg(), ZVt(), rC(), Vgl = wt("<div><div></div><span>"), JRn = wt("<div>"), mxg = wt("<div class=clickable><div>"), gxg = wt("<div><div class=clickable>"), fxg = wt("<div class=relative>"), Kgl = 20, vxg = 16;
} }), _xg = L({ "InputBoxElementSelection.css"() {
} });
function k2k(t) {
  const e = vt(() => t.data), n = vt(() => e().changes || []);
  return (() => {
    var i = bxg(), r = i.firstChild, s = r.firstChild, o = s.firstChild, a = s.nextSibling;
    return Le(s, () => e().changeCount, o), Le(a, Ee(Su, { get each() {
      return n();
    }, children: (l) => (() => {
      var c = Sxg(), u = c.firstChild, d = u.firstChild, h = d.firstChild, p = d.nextSibling, g = p.firstChild, f = g.firstChild, _ = f.nextSibling, b = _.nextSibling;
      return Le(d, () => l.property, h), Le(p, Ee(Ut, { get when() {
        return l.property.toLowerCase().includes("color");
      }, get children() {
        var y = yxg();
        return xn((S) => (S = l.newValue) != null ? y.style.setProperty("background", S) : y.style.removeProperty("background")), y;
      } }), g), Le(f, () => l.oldValue), Le(b, () => l.newValue), c;
    })() })), xn((l) => Ea(i, t.style, l)), i;
  })();
}
var bxg, yxg, Sxg, 