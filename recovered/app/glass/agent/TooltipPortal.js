// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipPortal.js range:6347798..6348503
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.278Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPortalContext.js, FloatingPortalLite.js
// anchors: displayName=TooltipPortal
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPortalContext.js, FloatingPortalLite.js
// anchors: displayName=TooltipPortal
// path-candidate: none (no nls basename match; path inferred, confidence C)
Zhh = L({ "TooltipPortal.js"() {
  E(), Kci(), Yhh(), fhh(), GPr = uGy.forwardRef(function(e, n) {
    const { keepMounted: i = false, ...r } = e;
    return BPr().useState("mounted") || i ? Xhh(WPr.Provider, { value: i, children: Xhh(EPr, { ref: n, ...r }) }) : null;
  }), process.env.NODE_ENV !== "production" && (GPr.displayName = "TooltipPortal");
} });
import * as Qhh from "./react-runtime/react/esm-index-production.js";
function dGy() {
  const t = Qhh.useContext(qPr);
  if (t === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TooltipPositionerContext is missing. TooltipPositioner parts must be placed within <Tooltip.Positioner>." : Oy(71));
  return t;
}
var qPr, 