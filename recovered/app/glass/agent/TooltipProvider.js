// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipProvider.js range:6351629..6352137
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.278Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipProviderContext.js, FloatingDelayGroup.js
// anchors: displayName=TooltipProvider
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipProviderContext.js, FloatingDelayGroup.js
// anchors: displayName=TooltipProvider
// path-candidate: none (no nls basename match; path inferred, confidence C)
mGy = L({ "TooltipProvider.js"() {
  E(), Whh(), noh(), Rna = function(e) {
    const { delay: n, closeDelay: i, timeout: r = 400 } = e, s = rph.useMemo(() => ({ delay: n, closeDelay: i }), [n, i]), o = rph.useMemo(() => ({ open: n, close: i }), [n, i]);
    return sph($Pr.Provider, { value: s, children: sph(K7y, { delay: o, timeoutMs: r, children: e.children }) });
  }, process.env.NODE_ENV !== "production" && (Rna.displayName = "TooltipProvider");
} });
function gGy() {
  return new oph();
}
var oph, 