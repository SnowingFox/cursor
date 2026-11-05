// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentRowContent.js range:16299560..16300781
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.133Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, cn.js, Tray.stylex.js, TextRoll.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, stylex.js, cn.js, Tray.stylex.js, TextRoll.js, Text.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var qrp = L({ "AgentRowContent.js"() {
  "use strict";
  E(), Va(), mf(), Zkt(), ymi(), dy();
} });
import { jsx as sGS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as oGS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function zrp(t) {
  const e = oGS(17);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ className: i, children: n, rootStyle: s, style: o, visibility: a, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const c = (a === void 0 ? "hover" : a) === "hover" ? Wwa.hiddenUntilRowEngaged : null;
  let u;
  e[7] !== i || e[8] !== s || e[9] !== o || e[10] !== c ? (u = ar({ rootClass: "ui-tray-row__hover-actions", stylexStyles: [Wwa.root, c, s], className: i, style: o }), e[7] = i, e[8] = s, e[9] = o, e[10] = c, e[11] = u) : u = e[11];
  const d = u;
  let h;
  return e[12] !== d.className || e[13] !== d.style || e[14] !== n || e[15] !== r ? (h = sGS("div", { className: d.className, "data-component": "tray-row-hover-actions", style: d.style, ...r, children: n }), e[12] = d.className, e[13] = d.style, e[14] = n, e[15] = r, e[16] = h) : h = e[16], h;
}
var Wwa, 