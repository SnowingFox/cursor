// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldRootContext.js range:6089687..6090930
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.669Z
N7 = L({ "FieldRootContext.js"() {
  E(), zS(), vA(), BY(), kJo = { invalid: void 0, name: void 0, validityData: { state: Jli, errors: [], error: "", value: "", initialValue: null }, setValidityData: Ax, disabled: void 0, touched: r7t.touched, setTouched: Ax, dirty: r7t.dirty, setDirty: Ax, filled: r7t.filled, setFilled: Ax, focused: r7t.focused, setFocused: Ax, validate: () => null, validationMode: "onSubmit", validationDebounceTime: 0, shouldValidateOnChange: () => false, state: Xah, markedDirtyRef: { current: false }, registerFieldControl: Ax, validation: { getValidationProps: (t, e = pE) => e, inputRef: { current: null }, registerInput: Ax, commit: async () => {
  }, change: Ax } }, eci = Zah.createContext(kJo), process.env.NODE_ENV !== "production" && (eci.displayName = "FieldRootContext");
} });
import * as cjy from "./react-runtime/react/esm-index-production.js";
function Jnt(t, e, n, i, r = true, s) {
  const { registerFieldControl: o } = Vj(), a = cjy.useRef(null);
  a.current || (a.current = /* @__PURE__ */ Symbol()), su(() => {
    const l = a.current;
    return !l || !r ? void 0 : (o(l, { controlRef: t, getValue: i, id: e, name: s, value: n }), () => {
      o(l, void 0);
    });
  }, [t, r, i, e, s, o, n]);
}
