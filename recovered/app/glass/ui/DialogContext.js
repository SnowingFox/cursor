// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogContext.js range:11514646..11515960
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.605Z
EUt = L({ "DialogContext.js"() {
  "use strict";
  E(), hhi = VhS(null);
} });
import { jsx as O3h } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ZhS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Oda(t) {
  const e = ZhS(13), { "aria-label": n, iconSize: i, rootStyle: r, onClick: s } = t, o = n === void 0 ? "Close" : n, a = i === void 0 ? 12 : i, { onOpenChange: l } = dhi("Dialog.Close");
  let c;
  e[0] !== s || e[1] !== l ? (c = () => {
    s?.(), l(false);
  }, e[0] = s, e[1] = l, e[2] = c) : c = e[2];
  const u = c;
  let d;
  e[3] !== r ? (d = ar({ rootClass: "ui-dialog-close", stylexStyles: [GhS(), r], className: "ui-icon-button" }), e[3] = r, e[4] = d) : d = e[4];
  const h = d;
  let p;
  e[5] !== a ? (p = O3h(zt, { "aria-hidden": "true", name: "close", size: a, variant: "outline" }), e[5] = a, e[6] = p) : p = e[6];
  let g;
  return e[7] !== o || e[8] !== h.className || e[9] !== h.style || e[10] !== u || e[11] !== p ? (g = O3h("button", { type: "button", "aria-label": o, className: h.className, "data-frame": "container", "data-size": "md", "data-rounded": "true", "data-variant": "ghost", onClick: u, style: h.style, children: p }), e[7] = o, e[8] = h.className, e[9] = h.style, e[10] = u, e[11] = p, e[12] = g) : g = e[12], g;
}
