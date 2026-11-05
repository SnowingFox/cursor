// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldControl.js range:14635859..14637898
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.664Z
h4h = L({ "FieldControl.js"() {
  E(), __e(), jv(), hB(), Jy(), N7(), eit(), C_e(), VQ(), nit(), BY(), Om(), VS(), $D(), Zb(), QOr = d4h.forwardRef(function(e, n) {
    const { render: i, className: r, id: s, name: o, value: a, disabled: l = false, onValueChange: c, defaultValue: u, autoFocus: d = false, style: h, ...p } = e, { state: g, name: f, disabled: _, setTouched: b, setDirty: y, validityData: S, setFocused: k, setFilled: C, validationMode: T, validation: I } = Vj(), { clearErrors: A } = w_e(), P = _ || l, M = f ?? o, O = { ...g, disabled: P }, { labelId: N } = zQ(), U = tit({ id: s });
    su(() => {
      const V = a != null;
      I.inputRef.current?.value || V && a !== "" ? C(true) : V && a === "" && C(false);
    }, [I.inputRef, C, a]);
    const j = d4h.useRef(null);
    su(() => {
      d && j.current === OY(ak(j.current)) && k(true);
    }, [d, k]);
    const [$] = yne({ controlled: a, default: u, name: "FieldControl", state: "value" }), H = a !== void 0, G = H ? $ : void 0, q = pu(() => I.inputRef.current?.value);
    return Jnt(I.inputRef, U, G, q, !P, o), Lm("input", e, { ref: [n, j], state: O, props: [{ id: U, disabled: P, name: M, ref: I.inputRef, "aria-labelledby": N, autoFocus: d, ...H ? { value: G } : { defaultValue: u }, onChange(V) {
      const Y = V.currentTarget.value;
      c?.(Y, zd(kO, V.nativeEvent)), y(Y !== S.initialValue), C(Y !== ""), V.nativeEvent.defaultPrevented || (A(M), I.change(Y));
    }, onFocus() {
      k(true);
    }, onBlur(V) {
      b(true), k(false), T === "onBlur" && I.commit(V.currentTarget.value);
    }, onKeyDown(V) {
      V.currentTarget.tagName === "INPUT" && V.key === "Enter" && (b(true), I.commit(V.currentTarget.value));
    } }, p, (V) => I.getValidationProps(P, V)], stateAttributesMapping: wne });
  }), process.env.NODE_ENV !== "production" && (QOr.displayName = "FieldControl");
} });
import * as Uma from "./react-runtime/react/esm-index-production.js";
import { jsx as E1S } from "./react-runtime/react/esm-jsx-runtime-production.js";
var jma, 