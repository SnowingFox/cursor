// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ControlledTerminalSection.js range:39081863..39082350
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.190Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, web.js, gallerySection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
baC = L({ "ControlledTerminalSection.js"() {
  "use strict";
  E(), at(), at(), mk(), eVv = wt("<div>deprecated"), tVv = () => Ee(pk, { title: "Controlled Terminal", get children() {
    return eVv();
  } });
} });
function yaC() {
  const t = Gr(), e = async () => {
    const n = await t.cppService.getCppReport();
    console.log("[ian] report", n);
  };
  return Ee(pk, { title: "Cpp Report", get children() {
    return Ee(hp, { onClick: e, children: "Get Cpp Report" });
  } });
}
