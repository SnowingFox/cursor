// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NumberFieldRoot.js range:17998650..18004073
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.834Z
hS1 = L({ "NumberFieldRoot.js"() {
  E(), b_e(), __e(), Jy(), jv(), Fwe(), Nsh(), m_e(), WHe(), hB(), u$r(), N7(), C_e(), nit(), d$r(), Om(), f$r(), ySn(), DCp(), VS(), Zb(), Wnt(), $D(), Z2a = b6e.forwardRef(function(e, n) {
    const { id: i, min: r, max: s, smallStep: o = 0.1, step: a = 1, largeStep: l = 10, required: c = false, disabled: u = false, readOnly: d = false, form: h, name: p, defaultValue: g, value: f, onValueChange: _, onValueCommitted: b, allowWheelScrub: y = false, snapOnStep: S = false, allowOutOfRange: k = false, format: C, locale: T, render: I, className: A, inputRef: P, style: M, ...O } = e, { setDirty: N, validityData: U, disabled: j, setFilled: $, invalid: H, name: G, state: q, validation: K } = Vj(), { clearErrors: V } = w_e(), Y = j || u, J = G ?? p, Q = a === "any" ? 1 : a, [te, ee] = b6e.useState(false), re = r ?? Number.MIN_SAFE_INTEGER, ie = s ?? Number.MAX_SAFE_INTEGER, oe = r ?? 0, se = C?.style, le = b6e.useRef(null), ce = Ioe(P, K.inputRef), ae = tit({ id: i }), [de, he] = yne({ controlled: f, default: g, name: "NumberField", state: "value" }), ge = de ?? null, pe = uL(ge);
    su(() => {
      $(ge !== null);
    }, [$, ge]);
    const ve = Dsh(), fe = uL(C), Te = b6e.useRef(false), _e = pu((xe, Oe) => {
      Te.current = false, b?.(xe, Oe);
    }), Ce = b6e.useRef(true), Se = b6e.useRef(null), [Pe, we] = b6e.useState(() => HWe(ge, T, C)), [Ie, Me] = b6e.useState("numeric"), De = pu(() => {
      const { decimal: xe, group: Oe, currency: ct, literal: Ye } = M2a(T, C), Ve = /* @__PURE__ */ new Set();
      ECp.forEach((He) => Ve.add(He)), xe && Ve.add(xe), Oe && (Ve.add(Oe), W2a.test(Oe) && Ve.add(" "));
      const Xe = se === "percent" || se === "unit" && C?.unit === "percent", lt = se === "percent" || se === "unit" && C?.unit === "permille";
      return Xe && N2a.forEach((He) => Ve.add(He)), lt && L2a.forEach((He) => Ve.add(He)), se === "currency" && ct && Ve.add(ct), Ye && (Array.from(Ye).forEach((He) => Ve.add(He)), W2a.test(Ye) && Ve.add(" ")), ICp.forEach((He) => Ve.add(He)), (re < 0 || k) && xCp.forEach((He) => Ve.add(He)), Ve;
    }), Ne = pu((xe) => xe?.altKey ? o : xe?.shiftKey ? l : Q), be = pu((xe, Oe) => {
      const ct = Oe.event, Ye = Oe.direction, Ve = Oe.reason === VHe || Oe.reason === y_e || Oe.reason === mRr || Oe.reason === vQo || Oe.reason === kO, Xe = !k || !Ve, lt = cS1(xe, { step: Ye ? Ne(ct) * Ye : void 0, format: fe.current, minWithDefault: re, maxWithDefault: ie, minWithZeroDefault: oe, snapOnStep: S, small: ct?.altKey ?? false, clamp: Xe }), He = lt !== ge || Ve && (xe !== ge || Ce.current === false);
      if (He) {
        if (_?.(lt, Oe), Oe.isCanceled) return false;
        he(lt), N(lt !== U.initialValue), Te.current = true;
      }
      return Se.current = lt, Ce.current && we(HWe(lt, T, C)), ve(), He;
    }), je = pu((xe, { direction: Oe, currentValue: ct, event: Ye, reason: Ve }) => {
      const Xe = ct ?? pe.current, lt = Ye;
      return typeof Xe != "number" ? be(0, zd(Ve, lt)) : be(Xe + xe * Oe, zd(Ve, lt, void 0, { direction: Oe }));
    });
    su(function() {
      if (!Ce.current) return;
      const Oe = HWe(ge, T, C);
      Oe !== Pe && we(Oe);
    }), su(function() {
      if (!$8t) return;
      let Oe = "text";
      re >= 0 && (Oe = "decimal"), Me(Oe);
    }, [re]), b6e.useEffect(function() {
      const Oe = le.current;
      if (Y || d || !y || !Oe) return;
      function ct(Ye) {
        if (Ye.ctrlKey || OY(ak(le.current)) !== le.current) return;
        Ye.preventDefault(), Ce.current = true;
        const Ve = Ne(Ye);
        je(Ve, { direction: Ye.deltaY > 0 ? -1 : 1, event: Ye, reason: "wheel" }) && _e(Se.current ?? pe.current, jwe(eoh, Ye));
      }
      return r0(Oe, "wheel", ct);
    }, [y, je, Y, d, Ne, _e, Se, pe]);
    const $e = b6e.useMemo(() => ({ ...q, disabled: Y, readOnly: d, required: c, value: ge, inputValue: Pe, scrubbing: te }), [q, Y, d, c, ge, Pe, te]), Je = b6e.useMemo(() => ({ inputRef: le, inputValue: Pe, value: ge, minWithDefault: re, maxWithDefault: ie, disabled: Y, readOnly: d, id: ae, setValue: be, incrementValue: je, getStepAmount: Ne, allowInputSyncRef: Ce, formatOptionsRef: fe, valueRef: pe, lastChangedValueRef: Se, hasPendingCommitRef: Te, name: J, nameProp: p, required: c, invalid: H, inputMode: Ie, getAllowedNonNumericKeys: De, min: r, max: s, setInputValue: we, locale: T, isScrubbing: te, setIsScrubbing: ee, state: $e, onValueCommitted: _e }), [le, Pe, ge, re, ie, Y, d, ae, be, je, Ne, fe, pe, J, p, c, H, Ie, De, r, s, we, T, te, $e, _e]), Ge = Lm("div", e, { ref: n, state: $e, props: O, stateAttributesMapping: N_i });
    return uS1(c$r.Provider, { value: Je, children: [Ge, dS1("input", { ...K.getValidationProps(Y, { onFocus() {
      le.current?.focus();
    }, onChange(xe) {
      if (xe.nativeEvent.defaultPrevented || Y || d) return;
      const Oe = xe.currentTarget.valueAsNumber, ct = Number.isNaN(Oe) ? null : Oe, Ye = zd(kO, xe.nativeEvent);
      be(ct, Ye), V(J), K.change(Se.current ?? ct);
    } }), ref: ce, type: "number", form: h, name: J, value: ge ?? "", min: r, max: s, step: a, disabled: Y, readOnly: d, required: c, "aria-hidden": true, tabIndex: -1, style: J ? MSt : Z5e, suppressHydrationWarning: true })] });
  }), process.env.NODE_ENV !== "production" && (Z2a.displayName = "NumberFieldRoot");
} });
import * as pS1 from "./react-runtime/react/esm-index-production.js";
var Q2a, 