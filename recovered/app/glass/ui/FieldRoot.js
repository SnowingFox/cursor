// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldRoot.js range:14628723..14631581
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.669Z
S1S = L({ "FieldRoot.js"() {
  E(), jv(), Jy(), N7(), BY(), zOr(), C_e(), Om(), _1S(), y1S(), o4h(), Dma = Dhe.forwardRef(function(e, n) {
    const { errors: i, validationMode: r, submitAttemptedRef: s } = w_e(), { render: o, className: a, validate: l, validationDebounceTime: c = 0, validationMode: u = r, name: d, disabled: h = false, invalid: p, dirty: g, touched: f, actionsRef: _, style: b, ...y } = e, S = GOr(true)?.disabled, k = pu(l || (() => null)), C = S || h, [T, I] = Dhe.useState(false), [A, P] = Dhe.useState(false), [M, O] = Dhe.useState(false), [N, U] = Dhe.useState(false), j = g ?? A, $ = f ?? T, H = Dhe.useRef(j), G = Dhe.useRef(void 0), [q, K] = Dhe.useState(), V = d ?? q;
    su(() => {
      g !== void 0 && (H.current = g);
    }, [g]);
    const Y = Dhe.useCallback(() => G.current, []), J = Dhe.useCallback((fe) => {
      G.current = fe;
    }, []), Q = pu((fe) => {
      g === void 0 && (fe && (H.current = true), P(fe));
    }), te = pu((fe) => {
      f === void 0 && I(fe);
    }), ee = pu(() => u === "onChange" || u === "onSubmit" && s.current), re = V && Object.hasOwn(i, V) ? i[V] : null, ie = !!(Array.isArray(re) ? re.length : re), oe = p === true || ie, [se, le] = Dhe.useState({ state: Jli, error: "", errors: [], value: null, initialValue: null }), ce = C ? null : !oe && se.state.valid, ae = Dhe.useMemo(() => ({ disabled: C, touched: $, dirty: j, valid: ce, filled: M, focused: N }), [C, $, j, ce, M, N]), de = v1S({ setValidityData: le, validate: k, validityData: se, validationDebounceTime: c, invalid: oe, markedDirtyRef: H, state: ae, shouldValidateOnChange: ee, getRegisteredFieldId: Y }), [he, ge] = b1S({ commit: de.commit, invalid: oe, markedDirtyRef: H, name: d, setRegisteredFieldName: K, setRegisteredFieldId: J, setValidityData: le, validityData: se });
    Dhe.useImperativeHandle(_, () => ({ validate: he }), [he]);
    const pe = Dhe.useMemo(() => ({ invalid: oe, name: V, validityData: se, setValidityData: le, disabled: C, touched: $, setTouched: te, dirty: j, setDirty: Q, filled: M, setFilled: O, focused: N, setFocused: U, validate: k, validationMode: u, validationDebounceTime: c, shouldValidateOnChange: ee, state: ae, markedDirtyRef: H, registerFieldControl: ge, validation: de }), [oe, V, se, C, $, te, j, Q, M, O, N, U, k, u, c, ee, ae, ge, de]), ve = Lm("div", e, { ref: n, state: ae, props: y, stateAttributesMapping: wne });
    return Mma(eci.Provider, { value: pe, children: ve });
  }), process.env.NODE_ENV !== "production" && (Dma.displayName = "FieldRootInner"), Nma = Dhe.forwardRef(function(e, n) {
    return Mma(VOr, { children: Mma(Dma, { ...e, ref: n }) });
  }), process.env.NODE_ENV !== "production" && (Nma.displayName = "FieldRoot");
} });
import * as l4h from "./react-runtime/react/esm-index-production.js";
function YOr() {
  return l4h.useContext(XOr);
}
var XOr, 