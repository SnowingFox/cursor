// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SwitchRoot.js range:14588561..14591561
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.037Z
GSS = L({ "SwitchRoot.js"() {
  E(), __e(), m_e(), jv(), WHe(), vA(), Om(), _A(), L6h(), O6h(), N7(), eit(), C_e(), VQ(), fma(), nit(), VS(), rit(), Cz(), aT(), mne(), Zb(), vma = jOr.forwardRef(function(e, n) {
    const { checked: i, className: r, defaultChecked: s, "aria-labelledby": o, form: a, id: l, inputRef: c, name: u, nativeButton: d = false, onCheckedChange: h, readOnly: p = false, required: g = false, disabled: f = false, render: _, uncheckedValue: b, value: y, style: S, ...k } = e, { clearErrors: C } = w_e(), { state: T, setTouched: I, setDirty: A, validityData: P, setFilled: M, setFocused: O, validationMode: N, disabled: U, name: j, validation: $ } = Vj(), { labelId: H } = zQ(), G = U || f, q = j ?? u, K = jOr.useRef(null), V = Ioe(K, c, $.inputRef), Y = jOr.useRef(null), J = $I(), Q = tit({ id: l, implicit: false, controlRef: Y }), te = d ? void 0 : Q, [ee, re] = yne({ controlled: i, default: !!s, name: "Switch", state: "checked" });
    Jnt(Y, J, ee, void 0, !G, u), su(() => {
      K.current && M(K.current.checked);
    }, [K, M]), URe(ee, () => {
      C(q), A(ee !== P.initialValue), M(ee), $.change(ee);
    });
    const { getButtonProps: ie, buttonRef: oe } = wz({ disabled: G, native: d }), se = gma(o, H, K, !d, te), le = { id: d ? Q : J, role: "switch", "aria-checked": ee, "aria-readonly": p || void 0, "aria-required": g || void 0, "aria-labelledby": se, onFocus() {
      G || O(true);
    }, onBlur() {
      const he = K.current;
      !he || G || (I(true), O(false), N === "onBlur" && $.commit(he.checked));
    }, onClick(he) {
      if (p || G) return;
      he.preventDefault();
      const ge = K.current;
      ge && ge.dispatchEvent(new (g2(ge)).PointerEvent("click", { bubbles: true, shiftKey: he.shiftKey, ctrlKey: he.ctrlKey, altKey: he.altKey, metaKey: he.metaKey }));
    } }, ce = uB({ checked: ee, disabled: G, form: a, id: te, name: q, required: g, style: q ? MSt : Z5e, tabIndex: -1, type: "checkbox", "aria-hidden": true, ref: V, onChange(he) {
      if (he.nativeEvent.defaultPrevented) return;
      if (p) {
        he.preventDefault();
        return;
      }
      const ge = he.currentTarget.checked, pe = zd(kO, he.nativeEvent);
      h?.(ge, pe), !pe.isCanceled && re(ge);
    }, onFocus() {
      Y.current?.focus();
    } }, (he) => $.getValidationProps(G, he), y !== void 0 ? { value: y } : pE), ae = jOr.useMemo(() => ({ ...T, checked: ee, disabled: G, readOnly: p, required: g }), [T, ee, G, p, g]), de = Lm("span", e, { state: ae, ref: [n, Y, oe], props: [le, k, ie, (he) => $.getValidationProps(G, he)], stateAttributesMapping: mma });
    return WSS(UOr.Provider, { value: ae, children: [de, !ee && q && b !== void 0 && F6h("input", { type: "hidden", form: a, name: q, value: b, disabled: G }), F6h("input", { ...ce, suppressHydrationWarning: true })] });
  }), process.env.NODE_ENV !== "production" && (vma.displayName = "SwitchRoot");
} });
import * as qSS from "./react-runtime/react/esm-index-production.js";
var _ma, 