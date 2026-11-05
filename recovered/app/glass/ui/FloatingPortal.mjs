// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FloatingPortal.mjs range:31201255..31203650
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.684Z
wRf = L({ "FloatingPortal.mjs"() {
  "use client";
  E(), t8(), BXt(), o3i(), g3i(), DG(), sce(), uDe(), CLl(), OLl(), xBe(), rce(), FLl(), bKe(), g3n(), FSs = Fme.createContext(null), process.env.NODE_ENV !== "production" && (FSs.displayName = "PortalContext"), JLl = () => Fme.useContext(FSs), kRf = xSs("portal"), eOl = Fme.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, children: o, container: a, renderGuards: l, ...c } = e, { portalNode: u, portalSubtree: d } = Hhw({ container: a, ref: n, componentProps: e, elementProps: c }), h = Fme.useRef(null), p = Fme.useRef(null), g = Fme.useRef(null), f = Fme.useRef(null), [_, b] = Fme.useState(null), y = Fme.useRef(false), S = _?.modal, k = _?.open, C = typeof l == "boolean" ? l : !!_ && !_.modal && _.open && !!u;
    Fme.useEffect(() => {
      if (!u || S) return;
      function I(A) {
        u && A.relatedTarget && p3n(A) && (A.type === "focusin" ? y.current && (YAf(u), y.current = false) : (hhw(u), y.current = true));
      }
      return Mct(M2(u, "focusin", I, true), M2(u, "focusout", I, true));
    }, [u, S]), pC(() => {
      !u || k !== true || !y.current || (YAf(u), y.current = false);
    }, [k, u]);
    const T = Fme.useMemo(() => ({ beforeOutsideRef: h, afterOutsideRef: p, beforeInsideRef: g, afterInsideRef: f, portalNode: u, setFocusManagerState: b }), [u]);
    return SRf(Fme.Fragment, { children: [d, SRf(FSs.Provider, { value: T, children: [C && u && QLl(qxt, { "data-type": "outside", ref: h, onFocus: (I) => {
      if (p3n(I, u)) g.current?.focus();
      else {
        const A = _ ? _.domReference : null;
        VAf(A)?.focus();
      }
    } }), C && u && QLl("span", { "aria-owns": u.id, style: bRf }), u && yRf.createPortal(o, u), C && u && QLl(qxt, { "data-type": "outside", ref: p, onFocus: (I) => {
      if (p3n(I, u)) f.current?.focus();
      else {
        const A = _ ? _.domReference : null;
        LLl(A)?.focus(), _?.closeOnFocusOut && _?.onOpenChange(false, NG(BA.focusOut, I.nativeEvent));
      }
    } })] })] });
  }), process.env.NODE_ENV !== "production" && (eOl.displayName = "FloatingPortal");
} });
function CRf() {
  const t = /* @__PURE__ */ new Map();
  return { emit(e, n) {
    t.get(e)?.forEach((i) => i(n));
  }, on(e, n) {
    t.has(e) || t.set(e, /* @__PURE__ */ new Set()), t.get(e).add(n);
  }, off(e, n) {
    t.get(e)?.delete(n);
  } };
}
