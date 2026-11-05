// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectPositioner.js range:6135070..6138721
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.983Z
Xjy = L({ "SelectPositioner.js"() {
  E(), cbn(), jv(), Jy(), tWe(), dbn(), pbn(), jJo(), cci(), k_e(), HJo(), iit(), VS(), s7t(), gbn(), E2r(), TW(), Zb(), Olh = { position: "fixed" }, zJo = h7t.forwardRef(function(e, n) {
    const { anchor: i, positionMethod: r = "absolute", className: s, render: o, side: a = "bottom", align: l = "center", sideOffset: c = 0, alignOffset: u = 0, collisionBoundary: d = "clipping-ancestors", collisionPadding: h, arrowPadding: p = 5, sticky: g = false, disableAnchorTracking: f, alignItemWithTrigger: _ = true, collisionAvoidance: b = DRr, style: y, ...S } = e, { store: k, listRef: C, labelsRef: T, alignItemWithTriggerActiveRef: I, selectedItemTextRef: A, valuesRef: P, initialValueRef: M, popupRef: O, setValue: N } = Qnt(), U = Yah(), j = Ic(k, _S.open), $ = Ic(k, _S.mounted), H = Ic(k, _S.modal), G = Ic(k, _S.value), q = Ic(k, _S.openMethod), K = Ic(k, _S.positionerElement), V = Ic(k, _S.triggerElement), Y = Ic(k, _S.isItemEqualToValue), J = Ic(k, _S.transitionStatus), Q = h7t.useRef(null), te = h7t.useRef(null), [ee, re] = h7t.useState(_), ie = $ && ee && q !== "touch";
    !$ && ee !== _ && re(_), su(() => {
      $ || (_S.scrollUpArrowVisible(k.state) && k.set("scrollUpArrowVisible", false), _S.scrollDownArrowVisible(k.state) && k.set("scrollDownArrowVisible", false));
    }, [k, $]), h7t.useImperativeHandle(I, () => ie), T2r((ie || H) && j, q === "touch", K, V);
    const oe = hbn({ anchor: i, floatingRootContext: U, positionMethod: r, mounted: $, side: a, sideOffset: c, align: l, alignOffset: u, arrowPadding: p, collisionBoundary: d, collisionPadding: h, sticky: g, disableAnchorTracking: f ?? ie, collisionAvoidance: b, keepMounted: true }), se = ie ? "none" : oe.side, le = ie ? Olh : oe.positionerStyles, ce = { open: j, side: se, align: oe.align, anchorHidden: oe.anchorHidden };
    su(() => {
      k.set("popupSide", oe.side);
    }, [k, oe.side]);
    const ae = pu((ve) => {
      k.set("positionerElement", ve);
    }), de = mbn(e, ce, { styles: le, transitionStatus: J, props: S, refs: [n, ae], hidden: !$, inert: !j }), he = h7t.useRef(0), ge = pu((ve) => {
      if (ve.size === 0 && he.current === 0 || P.current.length === 0) return;
      const fe = he.current;
      if (he.current = ve.size, ve.size === fe) return;
      const Te = zd(kO);
      if (fe !== 0 && !k.state.multiple && G !== null && jSt(P.current, G, Y) === -1) {
        const Ce = M.current, Pe = Ce != null && jSt(P.current, Ce, Y) !== -1 ? Ce : null;
        N(Pe, Te), Pe === null && (k.set("selectedIndex", null), A.current = null);
      }
      if (fe !== 0 && k.state.multiple && Array.isArray(G)) {
        const _e = (Se) => jSt(P.current, Se, Y) !== -1, Ce = G.filter((Se) => _e(Se));
        (Ce.length !== G.length || Ce.some((Se) => !Jah(G, Se, Y))) && (N(Ce, Te), Ce.length === 0 && (k.set("selectedIndex", null), A.current = null));
      }
      if (j && ie) {
        k.update({ scrollUpArrowVisible: false, scrollDownArrowVisible: false });
        const _e = { height: "" };
        C2r(K, _e), C2r(O.current, _e);
      }
    }), pe = h7t.useMemo(() => ({ ...oe, side: se, alignItemWithTriggerActive: ie, setControlledAlignItemWithTrigger: re, scrollUpArrowRef: Q, scrollDownArrowRef: te }), [oe, se, ie, re]);
    return Llh(ubn, { elementsRef: C, labelsRef: T, onMapChange: ge, children: Yjy(w2r.Provider, { value: pe, children: [$ && H && Llh(l7t, { inert: lbn(!j), cutout: V }), de] }) });
  }), process.env.NODE_ENV !== "production" && (zJo.displayName = "SelectPositioner");
} });
import { jsx as Zjy } from "./react-runtime/react/esm-jsx-runtime-production.js";
var uci, dci, 