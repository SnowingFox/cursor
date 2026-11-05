// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Dialog.js range:11540024..11541444
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.601Z
QQ = L({ "Dialog.js"() {
  "use strict";
  E(), U5(), mf(), EFe(), Lda(), F3h(), B3h(), EUt(), j3h(), $3h(), H3h(), G3h(), V3h(), Y3h(), Z3h(), J3h(), pB(), Ooe(), qu(), Wda = (t) => t === "hidden" || t === "clip", iNh = ["[data-popup-open]", '[data-component="select-positioner"][data-open]', '[data-component="select-popup"][data-open]', '[data-component="menu-popup"][data-open]', '[role="listbox"][data-open]', '[role="menu"][data-open]'].join(", "), Xr = Object.assign(RpS, { Header: phi, HeaderLead: W3h, Title: Q3h, Description: U3h, List: z3h, ListHeader: K3h, ListRow: X3h, Content: fLr, Footer: vLr, Close: Oda });
} });
import { jsx as PpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as MpS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function DpS(t) {
  return [SLr.base, t === "green" ? SLr.colorGreen : SLr.colorBlue];
}
function rNh(t) {
  const e = MpS(7), { color: n, className: i } = t, r = n === void 0 ? "blue" : n;
  let s;
  e[0] !== i || e[1] !== r ? (s = ar({ rootClass: "ui-indicator-dot", stylexStyles: DpS(r), className: i }), e[0] = i, e[1] = r, e[2] = s) : s = e[2];
  const o = s;
  let a;
  return e[3] !== o.className || e[4] !== o.style || e[5] !== r ? (a = PpS("span", { "aria-hidden": true, className: o.className, "data-color": r, style: o.style }), e[3] = o.className, e[4] = o.style, e[5] = r, e[6] = a) : a = e[6], a;
}
var SLr, 