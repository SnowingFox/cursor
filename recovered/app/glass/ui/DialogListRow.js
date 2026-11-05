// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogListRow.js range:11528700..11529801
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.621Z
var Z3h = L({ "DialogListRow.js"() {
  "use strict";
  E(), Va(), EFe(), q3h(), qu();
} });
import { jsx as SpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as kpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Q3h(t) {
  const e = kpS(16);
  let n, i, r, s, o;
  e[0] !== t ? ({ children: n, color: o, rootStyle: r, style: s, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o === void 0 ? "primary" : o, { titleId: l } = dhi("Dialog.Title");
  let c;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = x3h(), e[6] = c) : c = e[6];
  let u;
  e[7] !== r ? (u = [c, r], e[7] = r, e[8] = u) : u = e[8];
  let d;
  return e[9] !== n || e[10] !== a || e[11] !== i || e[12] !== s || e[13] !== u || e[14] !== l ? (d = SpS(nn, { as: "h2", id: l, size: "lg", color: a, ...i, rootStyle: u, className: "ui-dialog-title", style: s, children: n }), e[9] = n, e[10] = a, e[11] = i, e[12] = s, e[13] = u, e[14] = l, e[15] = d) : d = e[15], d;
}
