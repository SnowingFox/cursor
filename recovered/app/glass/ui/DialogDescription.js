// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogDescription.js range:11518183..11519170
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.605Z
var j3h = L({ "DialogDescription.js"() {
  "use strict";
  E(), EFe(), EUt(), qu();
} });
import { jsx as npS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ipS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function vLr(t) {
  const e = ipS(15);
  let n, i, r, s, o;
  e[0] !== t ? ({ children: n, className: i, rootStyle: s, style: o, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  let a;
  e[6] !== i || e[7] !== s || e[8] !== o ? (a = ar({ rootClass: "ui-dialog-footer", stylexStyles: [WhS(), s], className: i, style: o }), e[6] = i, e[7] = s, e[8] = o, e[9] = a) : a = e[9];
  const l = a;
  let c;
  return e[10] !== l.className || e[11] !== l.style || e[12] !== n || e[13] !== r ? (c = npS("div", { className: l.className, style: l.style, ...r, children: n }), e[10] = l.className, e[11] = l.style, e[12] = n, e[13] = r, e[14] = c) : c = e[14], c;
}
