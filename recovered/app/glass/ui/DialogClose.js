// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogClose.js range:11515960..11517077
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.603Z
var F3h = L({ "DialogClose.js"() {
  "use strict";
  E(), EFe(), EUt(), qu(), fd();
} });
import { jsx as QhS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as JhS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function fLr(t) {
  const e = JhS(14), { children: n, rootStyle: i, className: r, style: s, scrollable: o } = t, { contentHasCompactTopPadding: a } = dhi("Dialog.Content"), l = o ?? s?.maxHeight !== void 0, c = l && "ui-dialog-content--scrollable";
  let u;
  e[0] !== r || e[1] !== c ? (u = ri("ui-dialog-content", c, r), e[0] = r, e[1] = c, e[2] = u) : u = e[2];
  let d;
  e[3] !== a || e[4] !== l ? (d = HhS({ afterHeader: a, scrollable: l }), e[3] = a, e[4] = l, e[5] = d) : d = e[5];
  let h;
  e[6] !== i || e[7] !== d ? (h = [d, i], e[6] = i, e[7] = d, e[8] = h) : h = e[8];
  let p;
  return e[9] !== n || e[10] !== s || e[11] !== u || e[12] !== h ? (p = QhS(nn, { as: "div", size: "md", weight: "regular", color: "primary", className: u, style: s, rootStyle: h, children: n }), e[9] = n, e[10] = s, e[11] = u, e[12] = h, e[13] = p) : p = e[13], p;
}
