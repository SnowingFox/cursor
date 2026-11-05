// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardPositioner.js range:6312470..6314151
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.903Z
whh = L({ "PreviewCardPositioner.js"() {
  E(), jv(), qci(), Shh(), pbn(), mhh(), k_e(), lci(), gbn(), vhe(), sJo(), RPr = CWy.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = false, disableAnchorTracking: f = false, collisionAvoidance: _ = Rli, style: b, ...y } = e, S = Gci(), k = _Wy(), C = ORr(), T = S.useState("open"), I = S.useState("mounted"), A = S.useState("floatingRootContext"), P = S.useState("instantType"), M = S.useState("transitionStatus"), O = S.useState("hasViewport"), N = S.context.inlineRectCoordsRef, U = hbn({ anchor: s, floatingRootContext: A, positionMethod: o, mounted: I, side: a, sideOffset: c, align: l, alignOffset: u, arrowPadding: p, collisionBoundary: d, collisionPadding: h, sticky: g, disableAnchorTracking: f, keepMounted: k, nodeId: C, collisionAvoidance: _, adaptiveOrigin: O ? aci : void 0, inline: KUy(N) }), j = U.update;
    su(() => {
      T && I && j();
    }, [T, I, j]);
    const $ = { open: T, side: U.side, align: U.align, anchorHidden: U.anchorHidden, instant: P }, H = mbn(e, $, { styles: U.positionerStyles, transitionStatus: M, props: y, refs: [n, S.useStateSetter("positionerElement")], hidden: !I, inert: !T });
    return khh(APr.Provider, { value: U, children: khh(zQo, { id: C, children: H }) });
  }), process.env.NODE_ENV !== "production" && (RPr.displayName = "PreviewCardPositioner");
} });
import * as TWy from "./react-runtime/react/esm-index-production.js";
var Chh, PPr, 