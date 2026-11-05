// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FieldValidity.js range:14637898..14638727
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.673Z
I1S = L({ "FieldValidity.js"() {
  E(), N7(), Rma(), LRe(), jma = function(e) {
    const { children: n } = e, { validityData: i, invalid: r } = Vj(false), s = Uma.useMemo(() => KOr(i, r), [i, r]), o = s.state.valid === false, { transitionStatus: a } = NRe(o), l = Uma.useMemo(() => ({ ...s, validity: s.state, transitionStatus: a }), [s, a]);
    return E1S(Uma.Fragment, { children: n(l) });
  }, process.env.NODE_ENV !== "production" && (jma.displayName = "FieldValidity");
} });
import * as p4h from "./react-runtime/react/esm-index-production.js";
function m4h(t = true) {
  const e = p4h.useContext(JOr);
  if (e === void 0 && !t) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CheckboxGroupContext is missing. CheckboxGroup parts must be placed within <CheckboxGroup>." : Oy(3));
  return e;
}
var JOr, 