// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipPositioner.js range:6348849..6350513
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.278Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPositionerContext.js, useAnchorPositioning.js, TooltipPortalContext.js, constants.js, adaptiveOriginMiddleware.js, usePositioner.js
// anchors: displayName=TooltipPositioner
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, TooltipRootContext.js, TooltipPositionerContext.js, useAnchorPositioning.js, TooltipPortalContext.js, constants.js, adaptiveOriginMiddleware.js, usePositioner.js
// anchors: displayName=TooltipPositioner
// path-candidate: none (no nls basename match; path inferred, confidence C)
tph = L({ "TooltipPositioner.js"() {
  E(), Kci(), Jhh(), pbn(), Yhh(), k_e(), lci(), gbn(), zPr = eph.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "top", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = false, disableAnchorTracking: f = false, collisionAvoidance: _ = Rli, style: b, ...y } = e, S = BPr(), k = cGy(), C = S.useState("open"), T = S.useState("mounted"), I = S.useState("trackCursorAxis"), A = S.useState("disableHoverablePopup"), P = S.useState("floatingRootContext"), M = S.useState("instantType"), O = S.useState("transitionStatus"), N = S.useState("hasViewport"), U = hbn({ anchor: s, positionMethod: o, floatingRootContext: P, mounted: T, side: a, sideOffset: c, align: l, alignOffset: u, collisionBoundary: d, collisionPadding: h, sticky: g, arrowPadding: p, disableAnchorTracking: f, keepMounted: k, collisionAvoidance: _, adaptiveOrigin: N ? aci : void 0 }), j = eph.useMemo(() => ({ open: C, side: U.side, align: U.align, anchorHidden: U.anchorHidden, instant: I !== "none" ? "tracking-cursor" : M }), [C, U.side, U.align, U.anchorHidden, I, M]), $ = mbn(e, j, { styles: U.positionerStyles, transitionStatus: O, props: y, refs: [n, S.useStateSetter("positionerElement")], hidden: !T, inert: !C || I === "both" || A });
    return hGy(qPr.Provider, { value: U, children: $ });
  }), process.env.NODE_ENV !== "production" && (zPr.displayName = "TooltipPositioner");
} });
import * as pGy from "./react-runtime/react/esm-index-production.js";
var nph, VPr, 