// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderContext.js range:15064395..15066151
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E
// wrapper-init: vkt
// hoisted-owner: TranscriptCardHeader.js (app-out-vs-workbench-workbench-glass-main-js:2310); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

vkt = L({ "TranscriptCardHeaderContext.js"() {
  "use strict";
  E(), Rva = $xS(false);
} });
import { jsx as fHh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as WxS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function GxS(t) {
  return [vHh, bjt.header, t.inset === 12 ? bjt.inset12 : null, t.paddingBottom === false ? bjt.noPaddingBottom : null, t.variant !== "flat" ? bjt.headerHoverable : null, t.withDivider && t.variant === "default" ? bjt.headerWithDivider : null, t.clickable ? bjt.headerClickable : null, t.rootStyle];
}
function qxS(t) {
  const e = WxS(16), { children: n, variant: i, inset: r, withDivider: s, paddingBottom: o, title: a, onClick: l, rootStyle: c } = t, u = i === void 0 ? "default" : i, d = r === void 0 ? 8 : r, h = s === void 0 ? false : s, p = o === void 0 ? true : o;
  vjt("TranscriptCard.Header");
  let g;
  e[0] !== d || e[1] !== l || e[2] !== p || e[3] !== c || e[4] !== u || e[5] !== h ? (g = gn(GxS({ clickable: l !== void 0, inset: d, paddingBottom: p, rootStyle: c, variant: u, withDivider: h })), e[0] = d, e[1] = l, e[2] = p, e[3] = c, e[4] = u, e[5] = h, e[6] = g) : g = e[6];
  const f = g, _ = p ? void 0 : "false";
  let b;
  return e[7] !== f.className || e[8] !== f.style || e[9] !== n || e[10] !== d || e[11] !== l || e[12] !== _ || e[13] !== a || e[14] !== u ? (b = fHh(Rva.Provider, { value: true, children: fHh("div", { className: f.className, "data-component": "transcript-card-header", "data-variant": u, "data-inset": d, "data-padding-bottom": _, style: f.style, title: a, onClick: l, children: n }) }), e[7] = f.className, e[8] = f.style, e[9] = n, e[10] = d, e[11] = l, e[12] = _, e[13] = a, e[14] = u, e[15] = b) : b = e[15], b;
}
var vHh, bjt, 