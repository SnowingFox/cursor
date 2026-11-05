// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RadioGroup.js range:14691032..14693935
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.943Z
wkS = L({ "RadioGroup.js"() {
  E(), __e(), Jy(), _A(), g7t(), i9h(), N7(), eit(), BY(), zOr(), C_e(), VQ(), rit(), Y4h(), $D(), s9h = [tea], lga = bSn.forwardRef(function(e, n) {
    const { render: i, className: r, disabled: s, readOnly: o, required: a, onValueChange: l, value: c, defaultValue: u, form: d, name: h, inputRef: p, id: g, style: f, ..._ } = e, { setTouched: b, setFocused: y, validationMode: S, name: k, disabled: C, state: T, validation: I, setDirty: A, setFilled: P, validityData: M } = Vj(), { labelId: O } = zQ(), { clearErrors: N } = w_e(), U = GOr(true), j = C || s, $ = k ?? h, H = $I(g), [G, q] = yne({ controlled: c, default: u, name: "RadioGroup", state: "value" }), [K, V] = bSn.useState(false), Y = pu((de, he) => {
      l?.(de, he), !he.isCanceled && q(de);
    }), J = bSn.useRef(null), Q = bSn.useRef(null), te = bSn.useRef(null);
    function ee(de) {
      let he;
      return p && (typeof p == "function" ? he = p(de) : p.current = de), Q.current = de, I.inputRef.current = de, he;
    }
    const re = pu((de, he = false) => {
      if (de) {
        if (he) {
          J.current === de && (J.current = null);
          return;
        }
        J.current == null && (J.current = de);
      }
    }), ie = pu((de) => {
      if (!de || de.disabled) return;
      te.current || (te.current = de);
      const he = Q.current;
      if (de.checked || he == null || he.disabled) return ee(de);
    }), oe = pu(() => {
      const de = Q.current;
      return !de || de.disabled || !de.checked ? null : G ?? null;
    });
    Jnt(J, H, G ?? null, oe, !j, h), URe(G, () => {
      N($), A(G !== M.initialValue), P(G != null), I.change(G);
      const de = te.current;
      G == null && de && !de.disabled && ee(de);
    });
    const se = _["aria-labelledby"] ?? O ?? U?.legendId, le = { ...T, disabled: j ?? false, required: a ?? false, readOnly: o ?? false }, ce = bSn.useMemo(() => ({ ...T, checkedValue: G, disabled: j, form: d, validation: I, name: $, readOnly: o, registerControlRef: re, registerInputRef: ie, required: a, setCheckedValue: Y, setTouched: V, touched: K }), [G, j, d, I, T, $, o, re, ie, a, Y, V, K]), ae = { id: g, role: "radiogroup", "aria-required": a || void 0, "aria-disabled": j || void 0, "aria-readonly": o || void 0, "aria-labelledby": se, onFocus() {
      y(true);
    }, onBlur(de) {
      Nf(de.currentTarget, de.relatedTarget) || (b(true), y(false), S === "onBlur" && I.commit(G));
    }, onKeyDownCapture(de) {
      de.key.startsWith("Arrow") && (V(true), y(true));
    } };
    return r9h(o5r.Provider, { value: ce, children: r9h(n9h, { render: i, className: r, style: f, state: le, props: [ae, _, (de) => I.getValidationProps(j ?? false, de)], refs: [n], stateAttributesMapping: wne, enableHomeAndEndKeys: false, modifierKeys: s9h }) });
  }), process.env.NODE_ENV !== "production" && (lga.displayName = "RadioGroup");
} }), cga, 