// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ComboboxPositioner.js range:16754849..16756822
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.558Z
Ucp = L({ "ComboboxPositioner.js"() {
  E(), jv(), Jy(), cbn(), Y_e(), K8r(), pbn(), Ncp(), k_e(), yGe(), cci(), gbn(), E2r(), TW(), n7r = PZS.forwardRef(function(e, n) {
    const { render: i, className: r, anchor: s, positionMethod: o = "absolute", side: a = "bottom", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h = 5, arrowPadding: p = 5, sticky: g = false, disableAnchorTracking: f = false, collisionAvoidance: _ = DRr, style: b, ...y } = e, S = x0e(), { filteredItems: k } = bGe(), C = U8r(), T = xZS(), I = Ic(S, gm.modal), A = Ic(S, gm.open), P = Ic(S, gm.mounted), M = Ic(S, gm.openMethod), O = Ic(S, gm.positionerElement), N = Ic(S, gm.triggerElement), U = Ic(S, gm.inputElement), j = Ic(S, gm.inputGroupElement), $ = Ic(S, gm.inputInsidePopup), H = Ic(S, gm.transitionStatus), G = k.length === 0, K = hbn({ anchor: s ?? ($ ? N : j ?? U), floatingRootContext: C, positionMethod: o, mounted: P, side: a, sideOffset: c, align: l, alignOffset: u, arrowPadding: p, collisionBoundary: d, collisionPadding: h, sticky: g, disableAnchorTracking: f, keepMounted: T, collisionAvoidance: _, lazyFlip: true });
    T2r(A && I, M === "touch", O, N);
    const V = { open: A, side: K.side, align: K.align, anchorHidden: K.anchorHidden, empty: G };
    su(() => {
      S.set("popupSide", K.side);
    }, [S, K.side]);
    const Y = pu((Q) => {
      S.set("positionerElement", Q);
    }), J = mbn(e, V, { styles: K.positionerStyles, transitionStatus: H, props: y, refs: [n, Y], hidden: !P, inert: !A });
    return MZS(V8r.Provider, { value: K, children: [P && I && DZS(l7t, { inert: lbn(!A), cutout: j ?? U ?? N }), J] });
  }), process.env.NODE_ENV !== "production" && (n7r.displayName = "ComboboxPositioner");
} });
import * as jcp from "./react-runtime/react/esm-index-production.js";
import { jsx as $cp, jsxs as NZS } from "./react-runtime/react/esm-jsx-runtime-production.js";
var Hcp, Xfi, 