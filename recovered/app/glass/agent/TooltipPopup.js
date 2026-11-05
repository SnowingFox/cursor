// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipPopup.js range:6350513..6351629
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.277Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPositionerContext.js, popupStateMapping.js, stateAttributesMapping.js, useOpenChangeComplete.js, useRenderElement.js, getDisabledMountTransitionStyles.js, +1 more
// anchors: displayName=TooltipPopup
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPositionerContext.js, popupStateMapping.js, stateAttributesMapping.js, useOpenChangeComplete.js, useRenderElement.js, getDisabledMountTransitionStyles.js, +1 more
// anchors: displayName=TooltipPopup
// path-candidate: none (no nls basename match; path inferred, confidence C)
iph = L({ "TooltipPopup.js"() {
  E(), Kci(), Jhh(), I4(), l6(), qQ(), Om(), u7t(), l2r(), nph = { ...T_e, ...D7 }, VPr = pGy.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, ...o } = e, a = BPr(), { side: l, align: c } = dGy(), u = a.useState("open"), d = a.useState("instantType"), h = a.useState("transitionStatus"), p = a.useState("popupProps"), g = a.useState("floatingRootContext"), f = a.useState("disabled"), _ = a.useState("closeDelay");
    GQ({ open: u, ref: a.context.popupRef, onComplete() {
      u && a.context.onOpenChangeComplete?.(true);
    } }), a2r(g, { enabled: !f, closeDelay: _ });
    const b = a.useStateSetter("popupElement");
    return Lm("div", e, { state: { open: u, side: l, align: c, instant: d, transitionStatus: h }, ref: [n, a.context.popupRef, b], props: [p, c7t(h), o], stateAttributesMapping: nph });
  }), process.env.NODE_ENV !== "production" && (VPr.displayName = "TooltipPopup");
} });
import * as rph from "./react-runtime/react/esm-index-production.js";
import { jsx as sph } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Rna, 