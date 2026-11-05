// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPositioner.mjs range:31332778..31335200
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.875Z
Rgw = L({ "PopoverPositioner.mjs"() {
  "use client";
  E(), CPf(), DG(), y3n(), PBe(), c1s(), mgw(), SPf(), vgw(), rce(), g3n(), zSs(), NPf(), bgw(), xgw(), OOl = LOl.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, anchor: o, positionMethod: a = "absolute", side: l = "bottom", align: c = "center", sideOffset: u = 0, alignOffset: d = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = false, disableAnchorTracking: _ = false, collisionAvoidance: b = _Rf, ...y } = e, { store: S } = RBe(), k = lgw(), C = Ghw(), T = S.useState("floatingRootContext"), I = S.useState("mounted"), A = S.useState("open"), P = S.useState("openChangeReason"), M = S.useState("activeTriggerElement"), O = S.useState("modal"), N = S.useState("openMethod"), U = S.useState("positionerElement"), j = S.useState("instantType"), $ = S.useState("transitionStatus"), H = S.useState("hasViewport"), G = LOl.useRef(null), q = qSs(U, false, false), K = pgw({ anchor: o, floatingRootContext: T, positionMethod: a, mounted: I, side: l, sideOffset: u, align: c, alignOffset: d, arrowPadding: g, collisionBoundary: h, collisionPadding: p, sticky: f, disableAnchorTracking: _, keepMounted: k, nodeId: C, collisionAvoidance: b, adaptiveOrigin: H ? DPf : void 0 }), V = T.useState("domReferenceElement");
    pC(() => {
      const te = V, ee = G.current;
      if (te && (G.current = te), ee && te && te !== ee) {
        S.set("instantType", void 0);
        const re = new AbortController();
        return q(() => {
          S.set("instantType", "trigger-change");
        }, re.signal), () => {
          re.abort();
        };
      }
    }, [V, q, S]), Igw(A && O === true && P !== BA.triggerHover, N === "touch", U, M);
    const Y = LOl.useCallback((te) => {
      S.set("positionerElement", te);
    }, [S]), J = { open: A, side: K.side, align: K.align, anchorHidden: K.anchorHidden, instant: j }, Q = _gw(e, J, { styles: K.positionerStyles, transitionStatus: $, props: y, refs: [n, Y], hidden: !I, inert: !A });
    return Agw(l1s.Provider, { value: K, children: [I && O === true && P !== BA.triggerHover && WPf(POl, { ref: S.context.internalBackdropRef, inert: wPf(!A), cutout: M }), WPf(qhw, { id: C, children: Q })] });
  }), process.env.NODE_ENV !== "production" && (OOl.displayName = "PopoverPositioner");
} }), GPf, qPf, zPf, VPf, KPf, YPf, XPf, ZPf, QPf, JPf, 