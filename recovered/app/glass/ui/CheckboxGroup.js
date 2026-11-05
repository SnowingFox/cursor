// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CheckboxGroup.js range:17887026..17889524
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.522Z
ub1 = L({ "CheckboxGroup.js"() {
  E(), __e(), Jy(), vA(), _A(), Om(), $ma(), N7(), eit(), VQ(), BY(), H4h(), lb1(), C_e(), rit(), b2r(), qRa = C_i.forwardRef(function(e, n) {
    const { allValues: i, className: r, defaultValue: s, disabled: o = false, id: a, onValueChange: l, render: c, value: u, style: d, ...h } = e, { disabled: p, name: g, state: f, validation: _, setFilled: b, setDirty: y, validityData: S } = Vj(), { labelId: k, getDescriptionProps: C } = zQ(), { clearErrors: T } = w_e(), I = p || o, A = C_i.useMemo(() => {
      if (u === void 0) return s ?? [];
    }, [u, s]), [P, M] = yne({ controlled: u, default: A, name: "CheckboxGroup", state: "value" }), O = pu((V, Y) => {
      l?.(V, Y), !Y.isCanceled && M(V);
    }), N = ab1({ allValues: i, value: P, onValueChange: O }), U = $I(a), j = C_i.useRef(null), $ = C_i.useCallback((V) => {
      j.current == null && V != null && !V.hasAttribute(Zma) && (j.current = V);
    }, []);
    Jnt(j, U, P, void 0, !!g && !I, g);
    const H = P ?? xoe;
    URe(H, () => {
      g && T(g);
      const V = Array.isArray(S.initialValue) ? S.initialValue : xoe;
      b(H.length > 0), y(!tci(H, V)), _.change(H);
    });
    const G = { ...f, disabled: I }, q = C_i.useMemo(() => ({ allValues: i, value: P, defaultValue: A, setValue: O, parent: N, disabled: I, validation: _, registerControlRef: $ }), [i, P, A, O, N, I, _, $]), K = Lm("div", e, { state: G, ref: n, props: [{ id: a, role: "group", "aria-labelledby": k }, h, C], stateAttributesMapping: wne });
    return cb1(JOr.Provider, { value: q, children: K });
  }), process.env.NODE_ENV !== "production" && (qRa.displayName = "CheckboxGroup");
} });
import { jsx as db1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as hb1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function pb1(t) {
  const e = hb1(8);
  let n, i;
  e[0] !== t ? ({ orientation: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  const r = i === void 0 ? "vertical" : i;
  let s;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { 0: { className: "ui-78zum5 ui-ehausa ui-dt5ytf" }, 1: { className: "ui-78zum5 ui-ehausa ui-1q0g3np ui-6s0dn4" } }, e[3] = s) : s = e[3];
  const o = s[(r === "horizontal") << 0];
  let a;
  return e[4] !== r || e[5] !== n || e[6] !== o ? (a = db1(qRa, { ...n, "data-component": "checkbox-group", "data-orientation": r, ...o }), e[4] = r, e[5] = n, e[6] = o, e[7] = a) : a = e[7], a;
}
