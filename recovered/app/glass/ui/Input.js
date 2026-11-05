// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Input.js range:14639868..14641354
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.734Z
P1S = L({ "Input.js"() {
  E(), h4h(), Wma = A1S.forwardRef(function(e, n) {
    return R1S(QOr, { ref: n, ...e });
  }), process.env.NODE_ENV !== "production" && (Wma.displayName = "Input");
} });
import { jsx as Gma } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as v4h } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as M1S, useContext as D1S } from "./react-runtime/react/esm-index-production.js";
function _4h() {
  return D1S(qma);
}
function N1S(t) {
  const e = v4h(11), { elementProps: n, render: i, state: r } = t;
  let s, o;
  e[0] !== n ? ({ ref: o, ...s } = n, e[0] = n, e[1] = s, e[2] = o) : (s = e[1], o = e[2]);
  const a = r;
  let l;
  e[3] !== s || e[4] !== o || e[5] !== i || e[6] !== a ? (l = { defaultTagName: "div", props: s, ref: o, render: i, state: a }, e[3] = s, e[4] = o, e[5] = i, e[6] = a, e[7] = l) : l = e[7];
  const c = Kvn(l);
  let u;
  return e[8] !== c || e[9] !== r ? (u = Gma(qma.Provider, { value: r, children: c }), e[8] = c, e[9] = r, e[10] = u) : u = e[10], u;
}
function L1S(t) {
  const e = v4h(8);
  let n, i;
  e[0] !== t ? ({ render: i, ...n } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
  let r;
  e[3] !== i ? (r = (o, a) => Gma(N1S, { elementProps: o, render: i, state: a }), e[3] = i, e[4] = r) : r = e[4];
  let s;
  return e[5] !== n || e[6] !== r ? (s = Gma(Nma, { ...n, render: r }), e[5] = n, e[6] = r, e[7] = s) : s = e[7], s;
}
var qma, zUt, 