// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogContent.js range:11517077..11518183
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.604Z
var B3h = L({ "DialogContent.js"() {
  "use strict";
  E(), mf(), dy(), EFe(), EUt();
} });
import { jsx as epS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function U3h(t) {
  const e = tpS(16);
  let n, i, r, s, o;
  e[0] !== t ? ({ as: o, children: n, style: s, rootStyle: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o === void 0 ? "p" : o, { descriptionId: l } = dhi("Dialog.Description");
  let c;
  e[6] !== r || e[7] !== s ? (c = ar({ rootClass: "ui-dialog-description", stylexStyles: [A3h({ stepper: false }), r], style: s }), e[6] = r, e[7] = s, e[8] = c) : c = e[8];
  const u = c;
  let d;
  return e[9] !== a || e[10] !== u.className || e[11] !== u.style || e[12] !== n || e[13] !== l || e[14] !== i ? (d = epS(a, { id: l, ...i, className: u.className, style: u.style, children: n }), e[9] = a, e[10] = u.className, e[11] = u.style, e[12] = n, e[13] = l, e[14] = i, e[15] = d) : d = e[15], d;
}
