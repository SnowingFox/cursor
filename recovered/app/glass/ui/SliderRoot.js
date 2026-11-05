// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SliderRoot.js range:17891366..17895704
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.019Z
bb1 = L({ "SliderRoot.js"() {
  E(), hB(), __e(), Jy(), Fwe(), jv(), Vvn(), VS(), rit(), _A(), Om(), sit(), b2r(), dbn(), N7(), eit(), C_e(), VQ(), S2r(), Jwp(), t0p(), i0p(), Kjr(), Xjr(), Zb(), $D(), VRa = dJ.forwardRef(function(e, n) {
    const { "aria-labelledby": i, className: r, defaultValue: s, disabled: o = false, id: a, format: l, largeStep: c = 10, locale: u, render: d, max: h = 100, min: p = 0, minStepsBetweenValues: g = 0, form: f, name: _, onValueChange: b, onValueCommitted: y, orientation: S = "horizontal", step: k = 1, thumbCollisionBehavior: C = "push", thumbAlignment: T = "center", value: I, style: A, ...P } = e, M = $I(a), O = Tjy(M), N = pu(b), U = pu(y), { clearErrors: j } = w_e(), { state: $, disabled: H, name: G, setTouched: q, setDirty: K, validityData: V, validation: Y } = Vj(), { labelId: J } = zQ(), [Q, te] = dJ.useState(), ee = i ?? y2r(J, Q), re = H || o, ie = G ?? _, [oe, se] = yne({ controlled: I, default: s ?? p, name: "Slider" }), le = dJ.useRef(null), ce = dJ.useRef(null), ae = dJ.useRef([]), de = dJ.useRef(null), he = dJ.useRef(null), ge = dJ.useRef(-1), pe = dJ.useRef(null), ve = dJ.useRef("none"), fe = uL(l), [Te, _e] = dJ.useState(-1), [Ce, Se] = dJ.useState(-1), [Pe, we] = dJ.useState(false), [Ie, Me] = dJ.useState(() => /* @__PURE__ */ new Map()), [De, Ne] = dJ.useState([void 0, void 0]), be = pu((Ve) => {
      _e(Ve), Ve !== -1 && Se(Ve);
    });
    Jnt(Y.inputRef, M, oe, void 0, !re, _), URe(oe, () => {
      j(ie), Y.change(oe);
      const Ve = V.initialValue;
      let Xe;
      Array.isArray(oe) && Array.isArray(Ve) ? Xe = !tci(oe, Ve) : Xe = oe !== Ve, K(Xe);
    });
    const je = pu((Ve) => {
      Ve && (ce.current = Ve);
    }), $e = Array.isArray(oe), Je = dJ.useMemo(() => $e ? oe.slice().sort(Qwp) : [UY(oe, p, h)], [h, p, $e, oe]), Ge = pu((Ve, Xe) => {
      if (Number.isNaN(Ve) || _b1(Ve, oe)) return false;
      const lt = Xe ?? zd(kO, void 0, void 0, { activeThumbIndex: -1 }), He = lt.event, gt = He.constructor ?? Event, ht = new gt(He.type, He);
      return Object.defineProperty(ht, "target", { writable: true, value: { value: Ve, name: ie } }), lt.event = ht, N(Ve, lt), lt.isCanceled ? false : (ve.current = lt.reason, se(Ve), true);
    }), xe = pu((Ve, Xe, lt) => {
      const He = e0p(Ve, Xe, p, h, $e, Je);
      if (n0p(He, k, g)) {
        const gt = vb1(lt), ht = Ge(He, zd(gt, lt.nativeEvent, void 0, { activeThumbIndex: Xe }));
        q(true), ht && U(He, jwe(gt, lt.nativeEvent));
      }
    });
    process.env.NODE_ENV !== "production" && p >= h && zvn("Slider `max` must be greater than `min`."), su(() => {
      const Ve = OY(ak(le.current));
      re && Nf(le.current, Ve) && Ve.blur();
    }, [re]), re && Te !== -1 && be(-1);
    const Oe = dJ.useMemo(() => ({ ...$, activeThumbIndex: Te, disabled: re, dragging: Pe, orientation: S, max: h, min: p, minStepsBetweenValues: g, step: k, values: Je }), [$, Te, re, Pe, h, p, g, S, k, Je]), ct = dJ.useMemo(() => ({ active: Te, controlRef: ce, disabled: re, dragging: Pe, validation: Y, formatOptionsRef: fe, handleInputChange: xe, indicatorPosition: De, inset: T !== "center", labelId: ee, rootLabelId: O, largeStep: c, lastUsedThumbIndex: Ce, lastChangeReasonRef: ve, form: f, locale: u, max: h, min: p, minStepsBetweenValues: g, name: ie, onValueCommitted: U, orientation: S, pressedInputRef: de, pressedThumbCenterOffsetRef: he, pressedThumbIndexRef: ge, pressedValuesRef: pe, registerFieldControlRef: je, renderBeforeHydration: T === "edge", setActive: be, setDragging: we, setIndicatorPosition: Ne, setLabelId: te, setValue: Ge, state: Oe, step: k, thumbCollisionBehavior: C, thumbMap: Ie, thumbRefs: ae, values: Je }), [Te, ce, ee, O, re, Pe, Y, fe, xe, De, c, Ce, ve, f, u, h, p, g, ie, U, S, de, he, ge, pe, je, be, we, Ne, te, Ge, Oe, k, C, T, Ie, ae, Je]), Ye = Lm("div", e, { state: Oe, ref: [n, le], props: [{ "aria-labelledby": ee, id: M, role: "group" }, P, (Ve) => Y.getValidationProps(re, Ve)], stateAttributesMapping: T_i });
    return s0p(Yjr.Provider, { value: ct, children: s0p(ubn, { elementsRef: ae, onMapChange: Me, children: Ye }) });
  }), process.env.NODE_ENV !== "production" && (VRa.displayName = "SliderRoot");
} });
function o0p(t) {
  const e = t.getBoundingClientRect();
  return { x: (e.left + e.right) / 2, y: (e.top + e.bottom) / 2 };
}
