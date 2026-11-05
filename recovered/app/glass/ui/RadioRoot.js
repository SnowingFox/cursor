// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RadioRoot.js range:14682292..14685558
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.947Z
vkS = L({ "RadioRoot.js"() {
  E(), m_e(), jv(), Jy(), WHe(), vA(), VS(), V4h(), _A(), Om(), sga(), caa(), N7(), ppi(), VQ(), fma(), nit(), Y4h(), tlh(), Z4h(), aT(), Cz(), Zb(), oga = l5r.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s = false, readOnly: o = false, required: a = false, "aria-labelledby": l, value: c, inputRef: u, nativeButton: d = false, id: h, style: p, ...g } = e, f = mkS(), { disabled: _, readOnly: b, required: y, form: S, checkedValue: k, touched: C = false, validation: T, name: I } = f ?? {}, A = f?.setCheckedValue ?? Ax, P = f?.setTouched ?? Ax, M = f?.registerControlRef ?? Ax, O = f?.registerInputRef ?? Ax, { setTouched: N, setFilled: U, state: j, disabled: $ } = Vj(), H = YOr(), { labelId: G, getDescriptionProps: q } = zQ(), K = $ || H.disabled || _ || s, V = b || o, Y = y || a, J = S, Q = f ? k === c : c === "", te = l5r.useRef(null), ee = l5r.useRef(null), re = pu((Se) => {
      Se && M(Se, K);
    }), ie = Ioe(u, ee, O);
    su(() => {
      ee.current?.checked && U(true);
    }, [U]), su(() => {
      if (ee.current) {
        if (K && Q) {
          O(null);
          return;
        }
        te.current && M(te.current, K), O(ee.current);
      }
    }, [Q, K, M, O]);
    const oe = $I(), se = tit({ id: h, implicit: false, controlRef: te }), le = d ? void 0 : se, ce = gma(l, G, ee, !d, le), ae = { role: "radio", "aria-checked": Q, "aria-required": Y || void 0, "aria-readonly": V || void 0, "aria-labelledby": ce, [s5r]: Q ? "" : void 0, id: d ? se : oe, onKeyDown(Se) {
      Se.key === "Enter" && Se.preventDefault();
    }, onClick(Se) {
      if (Se.defaultPrevented || K || V) return;
      Se.preventDefault();
      const Pe = ee.current;
      Pe && Pe.dispatchEvent(new (g2(Pe)).PointerEvent("click", { bubbles: true, shiftKey: Se.shiftKey, ctrlKey: Se.ctrlKey, altKey: Se.altKey, metaKey: Se.metaKey }));
    }, onFocus(Se) {
      Se.defaultPrevented || K || V || !C || (ee.current?.click(), P(false));
    } }, { getButtonProps: de, buttonRef: he } = wz({ disabled: K, native: d, composite: false }), ge = { type: "radio", ref: ie, form: J, id: le, name: I, tabIndex: -1, style: I ? MSt : Z5e, "aria-hidden": true, ...c !== void 0 ? { value: _2r(c) } : pE, disabled: K, checked: Q, required: Y, readOnly: V, onChange(Se) {
      if (Se.nativeEvent.defaultPrevented || K || V || c === void 0) return;
      const Pe = zd(kO, Se.nativeEvent);
      A(c, Pe), !Pe.isCanceled && N(true);
    }, onFocus() {
      te.current?.focus();
    } }, pe = l5r.useMemo(() => ({ ...j, required: Y, disabled: K, readOnly: V, checked: Q }), [j, K, V, Q, Y]), ve = pe, fe = f !== void 0, Te = [n, te, he, re], _e = [ae, g, de, q, T ? (Se) => T.getValidationProps(K, Se) : pE], Ce = Lm("span", e, { enabled: !fe, state: pe, ref: Te, props: _e, stateAttributesMapping: r5r });
    return fkS(a5r.Provider, { value: ve, children: [fe ? Q4h(laa, { tag: "span", render: i, className: r, style: p, state: pe, refs: Te, props: _e, stateAttributesMapping: r5r }) : Ce, Q4h("input", { ...ge, suppressHydrationWarning: true })] });
  }), process.env.NODE_ENV !== "production" && (oga.displayName = "RadioRoot");
} });
import * as J4h from "./react-runtime/react/esm-index-production.js";
var aga, 