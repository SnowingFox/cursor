// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InputBoxComposerSelection.js range:27322434..27323544
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, at, at, at, at, at, aS, S9e, eD
// wrapper-init: TRk
// hoisted-owner: progressAccessibilitySignal.js (app-out-vs-workbench-workbench-glass-main-js:4749); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

TRk = L({ "InputBoxComposerSelection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), aS(), S9e(), eD(), QEg = wt("<div><div>"), JEg = wt("<div>"), eIg = Ok(_Me), bgl = "<summary>", tIg = (t) => (() => {
    var e = JEg();
    return Le(e, Ee(ME, { scrollingDirection: "vertical", style: { width: "100%", height: "100%" }, get children() {
      var n = QEg(), i = n.firstChild;
      return n.style.setProperty("display", "flex"), n.style.setProperty("flex-direction", "column"), n.style.setProperty("padding", "0px 0.4rem"), i.style.setProperty("color", "var(--vscode-descriptionForeground)"), i.style.setProperty("white-space", "pre-wrap"), i.style.setProperty("line-height", "1.4"), i.style.setProperty("font-size", "10px"), Le(i, Ee(eIg, { get rawText() {
        const r = t.summary.summary.trimStart();
        return r.startsWith(bgl) ? r.slice(bgl.length, -1) : r;
      }, finished: true })), n;
    } })), xn((n) => Ea(e, { "white-space": "pre", height: "100px", ...t.style }, n)), e;
  })();
} });
function ERk(t) {
  ygl = t;
}
function IRk(t, e) {
  return ygl(t, e);
}
var nIg, ygl, 