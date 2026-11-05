// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TabsTab.js range:16376723..16379189
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.063Z
Esp = L({ "TabsTab.js"() {
  E(), hB(), jv(), _A(), Om(), sga(), Kkh(), Cfi(), Tfi(), n0a(), VS(), $D(), Cz(), Zb(), YBr = fkn.forwardRef(function(e, n) {
    const { className: i, disabled: r = false, render: s, value: o, id: a, nativeButton: l = true, style: c, ...u } = e, { value: d, getTabPanelIdByValue: h, orientation: p, tabActivationDirection: g } = qBr(), { activateOnFocus: f, highlightedTabIndex: _, onTabActivation: b, registerTabResizeObserverElement: y, setHighlightedTabIndex: S, tabsListElement: k } = Tsp(), C = $I(a), T = fkn.useMemo(() => ({ disabled: r, id: C, value: o }), [r, C, o]), { compositeProps: I, compositeRef: A, index: P } = Vkh({ metadata: T }), M = o === d, O = fkn.useRef(false), N = fkn.useRef(null);
    su(() => {
      const Q = N.current;
      if (Q) return y(Q);
    }, [y]), su(() => {
      if (O.current) {
        O.current = false;
        return;
      }
      if (!(M && P > -1 && _ !== P)) return;
      const Q = k;
      if (Q != null) {
        const te = OY(ak(Q));
        if (te && Nf(Q, te)) return;
      }
      r || S(P);
    }, [M, P, _, S, r, k]);
    const { getButtonProps: U, buttonRef: j } = wz({ disabled: r, native: l, focusableWhenDisabled: true }), $ = h(o), H = fkn.useRef(false), G = fkn.useRef(false);
    function q(Q) {
      M || r || b(o, zd(kO, Q.nativeEvent, void 0, { activationDirection: "none" }));
    }
    function K(Q) {
      M || (P > -1 && !r && S(P), !r && f && (!H.current || H.current && G.current) && b(o, zd(kO, Q.nativeEvent, void 0, { activationDirection: "none" })));
    }
    function V(Q) {
      if (M || r) return;
      H.current = true;
      function te() {
        H.current = false, G.current = false;
      }
      (!Q.button || Q.button === 0) && (G.current = true, ak(Q.currentTarget).addEventListener("pointerup", te, { once: true }));
    }
    return Lm("button", e, { state: { disabled: r, active: M, orientation: p, tabActivationDirection: g }, ref: [n, j, A, N], props: [I, { role: "tab", "aria-controls": $, "aria-selected": M, id: C, onClick: q, onFocus: K, onPointerDown: V, [s5r]: M ? "" : void 0, onKeyDownCapture() {
      O.current = true;
    } }, u, U], stateAttributesMapping: gkn });
  }), process.env.NODE_ENV !== "production" && (YBr.displayName = "TabsTab");
} });
function wqS() {
  return Ax;
}
function CqS() {
  return false;
}
function TqS() {
  return true;
}
function Isp() {
  return j_n.useSyncExternalStore(wqS, CqS, TqS);
}
