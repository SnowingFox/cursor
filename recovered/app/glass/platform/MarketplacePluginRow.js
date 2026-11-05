// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarketplacePluginRow.js range:17032100..17032449
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.114Z
// wrapper: REa deps:3 [E, mf, smp]
// declarations: An1, Rn1, REa, omp (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var REa = L({ "MarketplacePluginRow.js"() {
  "use strict";
  E(), mf(), smp();
} });
function An1(t) {
  return t.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/[^a-z\d]+/gi, "_").toUpperCase().split("_").filter((e) => e.length > 0);
}
function Rn1(t) {
  return An1(t).some((e) => omp.has(e));
}
var omp,
