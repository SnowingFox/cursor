// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CheckboxRoot.js range:14668859..14674088
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.525Z
H4h = L({ "CheckboxRoot.js"() {
  E(), vA(), __e(), jv(), m_e(), jQ(), WHe(), okS(), B4h(), Om(), _A(), Cz(), N7(), eit(), ppi(), C_e(), VQ(), fma(), $ma(), j4h(), VS(), rit(), mne(), Zb(), aT(), Zma = "data-parent", Qma = XUt.forwardRef(function(e, n) {
    const { checked: i, className: r, defaultChecked: s = false, "aria-labelledby": o, disabled: a = false, form: l, id: c, indeterminate: u = false, inputRef: d, name: h, onCheckedChange: p, parent: g = false, readOnly: f = false, render: _, required: b = false, uncheckedValue: y, value: S, nativeButton: k = false, style: C, ...T } = e, { clearErrors: I } = w_e(), { disabled: A, name: P, setDirty: M, setFilled: O, setFocused: N, setTouched: U, state: j, validationMode: $, validityData: H, validation: G } = Vj(), q = YOr(), { labelId: K, controlId: V, registerControlId: Y, getDescriptionProps: J } = zQ(), Q = m4h(), te = Q?.parent, ee = te && Q.allValues, re = A || q.disabled || Q?.disabled || a, ie = P ?? h, oe = S ?? ie, se = $I(), le = $I();
    let ce = V;
    ee ? ce = g ? le : `${te.id}-${oe}` : c && (ce = c);
    let ae = {};
    ee && (g ? ae = Q.parent.getParentProps() : oe && (ae = Q.parent.getChildProps(oe)));
    const { checked: de = i, indeterminate: he = u, onCheckedChange: ge, ...pe } = ae, ve = Q?.value, fe = Q?.setValue, Te = Q?.defaultValue, _e = XUt.useRef(null), Ce = CW(() => /* @__PURE__ */ Symbol("checkbox-control")), Se = XUt.useRef(false), { getButtonProps: Pe, buttonRef: we } = wz({ disabled: re, native: k }), Ie = Q?.validation ?? G, [Me, De] = yne({ controlled: oe && ve && !g ? ve.includes(oe) : de, default: oe && Te && !g ? Te.includes(oe) : s, name: "Checkbox", state: "checked" }), Ne = ee ? !!de : Me, be = ee && he || u;
    su(() => {
      Y !== Ax && (Se.current = true, Y(Ce.current, ce));
    }, [ce, Y, Ce]), XUt.useEffect(() => {
      const Ye = Ce.current;
      return () => {
        !Se.current || Y === Ax || (Se.current = false, Y(Ye, void 0));
      };
    }, [Y, Ce]), Jnt(_e, se, Me, void 0, !Q && !re, h);
    const je = XUt.useRef(null), $e = Ioe(d, je, Ie.inputRef, Ie.registerInput), Je = gma(o, K, je, !k, ce ?? void 0);
    su(() => {
      je.current && (je.current.indeterminate = be, Me && O(true));
    }, [Me, be, O]), URe(Me, () => {
      Q || (I(ie), O(Me), M(Me !== H.initialValue), Ie.change(Me));
    });
    const Ge = uB({ checked: Me, disabled: re, form: l, name: g ? void 0 : ie, id: k ? void 0 : ce ?? void 0, required: b, ref: $e, style: ie ? MSt : Z5e, tabIndex: -1, type: "checkbox", "aria-hidden": true, onChange(Ye) {
      if (Ye.nativeEvent.defaultPrevented) return;
      if (f) {
        Ye.preventDefault();
        return;
      }
      const Ve = Ye.currentTarget.checked, Xe = zd(kO, Ye.nativeEvent);
      if (p?.(Ve, Xe), !Xe.isCanceled && (ge?.(Ve, Xe), !Xe.isCanceled && (De(Ve), oe && ve && fe && !g && !ee))) {
        const lt = Ve ? [...ve, oe] : ve.filter((He) => He !== oe);
        fe(lt, Xe);
      }
    }, onFocus() {
      _e.current?.focus();
    } }, S !== void 0 ? { value: (Q ? Me && S : S) || "" } : pE, J, (Ye) => Ie.getValidationProps(re, Ye));
    XUt.useEffect(() => {
      if (!te || !oe) return;
      const Ye = te.disabledStatesRef.current;
      return Ye.set(oe, re), () => {
        Ye.delete(oe);
      };
    }, [te, re, oe]);
    const xe = XUt.useMemo(() => ({ ...j, checked: Ne, disabled: re, readOnly: f, required: b, indeterminate: be }), [j, Ne, re, f, b, be]), Oe = F4h(xe), ct = Lm("span", e, { state: xe, ref: [we, _e, n, Q?.registerControlRef], props: [{ id: k ? ce ?? void 0 : se, role: "checkbox", "aria-checked": be ? "mixed" : Ne, "aria-readonly": f || void 0, "aria-required": b || void 0, "aria-labelledby": Je, [Zma]: g ? "" : void 0, onFocus() {
      re || N(true);
    }, onBlur() {
      const Ye = je.current;
      Ye && (U(true), N(false), $ === "onBlur" && Ie.commit(Q ? ve : Ye.checked));
    }, onKeyDown(Ye) {
      if (Ye.key !== "Enter" || (Ye.preventBaseUIHandler(), Ye.defaultPrevented)) return;
      const Ve = je.current?.form ?? null, Xe = Ye.currentTarget, lt = Ye.nativeEvent, He = Ye.preventDefault, gt = lt.preventDefault;
      let ht = false;
      Ye.preventDefault = () => {
        ht = true, He.call(Ye);
      }, lt.preventDefault = () => {
        ht = true, gt.call(lt);
      }, gt.call(lt), g2(Xe).queueMicrotask(() => {
        Ye.preventDefault = He, lt.preventDefault = gt, ht || skS(Ve)?.click();
      });
    }, onClick(Ye) {
      if (f || re) return;
      Ye.preventDefault();
      const Ve = je.current;
      Ve && Ve.dispatchEvent(new (g2(Ve)).PointerEvent("click", { bubbles: true, shiftKey: Ye.shiftKey, ctrlKey: Ye.ctrlKey, altKey: Ye.altKey, metaKey: Ye.metaKey }));
    } }, T, pe, Pe, J, (Ye) => Ie.getValidationProps(re, Ye)], stateAttributesMapping: Oe });
    return ukS(i5r.Provider, { value: xe, children: [ct, !Me && !Q && ie && !g && y !== void 0 && $4h("input", { type: "hidden", form: l, name: ie, value: y, disabled: re }), $4h("input", { ...Ge, suppressHydrationWarning: true })] });
  }), process.env.NODE_ENV !== "production" && (Qma.displayName = "CheckboxRoot");
} });
import * as W4h from "./react-runtime/react/esm-index-production.js";
var Jma, 