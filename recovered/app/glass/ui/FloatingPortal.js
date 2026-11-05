// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingPortal.js range:5981197..5983562
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.683Z
Y8t = L({ "FloatingPortal.js"() {
  E(), aT(), b_e(), V_n(), V8t(), jv(), Jy(), vA(), vRr(), NQo(), VS(), IRr(), Om(), k_e(), Zb(), NRr = fhe.createContext(null), process.env.NODE_ENV !== "production" && (NRr.displayName = "PortalContext"), WQo = () => fhe.useContext(NRr), Doh = xli("portal"), K8t = fhe.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, container: a, renderGuards: l, ...c } = e, { portalNode: u, portalSubtree: d } = Moh({ container: a, ref: n, componentProps: e, elementProps: c }), h = fhe.useRef(null), p = fhe.useRef(null), g = fhe.useRef(null), f = fhe.useRef(null), [_, b] = fhe.useState(null), y = fhe.useRef(false), S = _?.modal, k = _?.open, C = typeof l == "boolean" ? l : !!_ && !_.modal && _.open && !!u;
    fhe.useEffect(() => {
      if (!u || S) return;
      function I(A) {
        u && A.relatedTarget && nbn(A) && (A.type === "focusin" ? y.current && (_oh(u), y.current = false) : (cUy(u), y.current = true));
      }
      return GHe(r0(u, "focusin", I, true), r0(u, "focusout", I, true));
    }, [u, S]), su(() => {
      !u || k !== true || !y.current || (_oh(u), y.current = false);
    }, [k, u]);
    const T = fhe.useMemo(() => ({ beforeOutsideRef: h, afterOutsideRef: p, beforeInsideRef: g, afterInsideRef: f, portalNode: u, setFocusManagerState: b }), [u]);
    return Poh(fhe.Fragment, { children: [d, Poh(NRr.Provider, { value: T, children: [C && u && HQo(YHe, { "data-type": "outside", ref: h, onFocus: (I) => {
      if (nbn(I, u)) g.current?.focus();
      else {
        const A = _ ? _.domReference : null;
        foh(A)?.focus();
      }
    } }), C && u && HQo("span", { "aria-owns": u.id, style: Aoh }), u && Roh.createPortal(o, u), C && u && HQo(YHe, { "data-type": "outside", ref: p, onFocus: (I) => {
      if (nbn(I, u)) f.current?.focus();
      else {
        const A = _ ? _.domReference : null;
        DQo(A)?.focus(), _?.closeOnFocusOut && _?.onOpenChange(false, zd(KHe, I.nativeEvent));
      }
    } })] })] });
  }), process.env.NODE_ENV !== "production" && (K8t.displayName = "FloatingPortal");
} });
function Noh() {
  const t = /* @__PURE__ */ new Map();
  return { emit(e, n) {
    t.get(e)?.forEach((i) => i(n));
  }, on(e, n) {
    t.has(e) || t.set(e, /* @__PURE__ */ new Set()), t.get(e).add(n);
  }, off(e, n) {
    t.get(e)?.delete(n);
  } };
}
