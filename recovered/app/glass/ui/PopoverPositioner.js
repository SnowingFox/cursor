// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverPositioner.js range:15724808..15727714
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.873Z
J6S = L({ "PopoverPositioner.js"() {
  E(), cbn(), jv(), Okt(), jZh(), pbn(), FZh(), cci(), k_e(), QRr(), lci(), gbn(), E2r(), vhe(), Zb(), jSa = USa.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, anchor: o, positionMethod: a = "absolute", side: l = "bottom", align: c = "center", sideOffset: u = 0, alignOffset: d = 0, collisionBoundary: h = "clipping-ancestors", collisionPadding: p = 5, arrowPadding: g = 5, sticky: f = false, disableAnchorTracking: _ = false, collisionAvoidance: b = Rli, ...y } = e, { store: S } = Lkt(), k = K6S(), C = ORr(), T = S.useState("floatingRootContext"), I = S.useState("mounted"), A = S.useState("open"), P = S.useState("openChangeReason"), M = S.useState("activeTriggerElement"), O = S.useState("modal"), N = S.useState("openMethod"), U = S.useState("positionerElement"), j = S.useState("instantType"), $ = S.useState("transitionStatus"), H = S.useState("hasViewport"), G = USa.useRef(null), q = ZRr(U, false, false), K = hbn({ anchor: o, floatingRootContext: T, positionMethod: a, mounted: I, side: l, sideOffset: u, align: c, alignOffset: d, arrowPadding: g, collisionBoundary: h, collisionPadding: p, sticky: f, disableAnchorTracking: _, keepMounted: k, nodeId: C, collisionAvoidance: b, adaptiveOrigin: H ? aci : void 0 }), V = T.useState("domReferenceElement");
    su(() => {
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
    }, [V, q, S]), T2r(A && O === true && P !== E4, N === "touch", U, M);
    const Y = USa.useCallback((te) => {
      S.set("positionerElement", te);
    }, [S]), J = { open: A, side: K.side, align: K.align, anchorHidden: K.anchorHidden, instant: j }, Q = mbn(e, J, { styles: K.positionerStyles, transitionStatus: $, props: y, refs: [n, Y], hidden: !I, inert: !A });
    return Q6S(P4r.Provider, { value: K, children: [I && O === true && P !== E4 && $Zh(l7t, { ref: S.context.internalBackdropRef, inert: lbn(!A), cutout: M }), $Zh(zQo, { id: C, children: Q })] });
  }), process.env.NODE_ENV !== "production" && (jSa.displayName = "PopoverPositioner");
} });
import * as M4r from "./react-runtime/react/esm-index-production.js";
import { jsx as e4S } from "./react-runtime/react/esm-jsx-runtime-production.js";
function t4S() {
  const [t, e] = M4r.useState(0), n = pu(() => (e((r) => r + 1), () => {
    e((r) => Math.max(0, r - 1));
  }));
  return { context: M4r.useMemo(() => ({ register: n }), [n]), hasClosePart: t > 0 };
}
function n4S(t) {
  const { value: e, children: n } = t;
  return e4S(D4r.Provider, { value: e, children: n });
}
function i4S() {
  const t = M4r.useContext(D4r);
  su(() => t?.register(), [t]);
}
var D4r, 