// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LexicalContextMenuPlugin.js range:27247968..27248387
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Tus
// wrapper-init: oAk
// hoisted-owner: LexicalErrorBoundary.js (app-out-vs-workbench-workbench-glass-main-js:4702); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oAk = L({ "LexicalContextMenuPlugin.js"() {
  "use strict";
  E(), Tus();
} });
function Yml(t) {
  const e = () => (() => {
    var n = DTg();
    return n.style.setProperty("border", "1px solid #f00"), n.style.setProperty("color", "#f00"), n.style.setProperty("padding", "8px"), n;
  })();
  return Ee(ZTy, { get fallback() {
    return t.onError || e;
  }, get children() {
    return t.children;
  } });
}
var DTg, 