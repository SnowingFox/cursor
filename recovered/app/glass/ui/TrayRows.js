// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayRows.js range:16313349..16316467
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.120Z
var fGS = L({ "TrayRows.js"() {
  "use strict";
  E(), Zkt(), qu();
} });
import { jsx as Yrp, jsxs as vGS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as _GS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Xrp(t) {
  const e = [];
  return t.forEach((n, i) => {
    n.visible !== false && n.weight !== null && e.push({ ...n, index: i, weight: n.weight ?? 0 });
  }), e.sort((n, i) => n.weight !== i.weight ? i.weight - n.weight : i.index - n.index), e;
}
function bGS(t) {
  const e = _GS(39);
  let n, i, r, s, o, a, l, c, u, d;
  e[0] !== t ? ({ items: r, backdropHeight: a, backdropOffsetY: l, backdropScale: c, maxVisibleBackdrops: u, className: i, topItemClassName: d, backdropClassName: n, style: o, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10]);
  const h = a === void 0 ? Zrp : a, p = l === void 0 ? Qrp : l, g = c === void 0 ? Jrp : c, f = u === void 0 ? esp : u;
  let _;
  e[11] !== r ? (_ = Xrp(r), e[11] = r, e[12] = _) : _ = e[12];
  const b = _, y = b[0] ?? null, S = Math.min(Math.max(b.length - 1, 0), f);
  let k;
  e[13] !== h || e[14] !== p || e[15] !== g ? (k = ($) => {
    const H = Math.max(0, 1 - (1 - g) * $).toFixed(3);
    return { "--ui-tray-stack-backdrop-height": typeof h == "number" ? `${h}px` : h, "--ui-tray-stack-backdrop-translate-y": `${p * $}px`, "--ui-tray-stack-backdrop-scale": H };
  }, e[13] = h, e[14] = p, e[15] = g, e[16] = k) : k = e[16];
  const C = k;
  if (!y) return null;
  let T;
  e[17] !== S || e[18] !== p || e[19] !== i || e[20] !== o ? (T = ar({ rootClass: "ui-tray-stack", stylexStyles: nHS(), className: i, style: { ...o, "--ui-tray-stack-padding-bottom": `${p * S}px` } }), e[17] = S, e[18] = p, e[19] = i, e[20] = o, e[21] = T) : T = e[21];
  const I = T;
  let A;
  e[22] !== d ? (A = ar({ rootClass: "ui-tray-stack__top-item", stylexStyles: iHS(), className: d }), e[22] = d, e[23] = A) : A = e[23];
  const P = A, M = I.className, O = I.style;
  let N;
  e[24] !== n || e[25] !== S || e[26] !== C || e[27] !== y.id ? (N = Array.from({ length: S }, ($, H) => {
    const G = S - H, q = ar({ rootClass: "ui-tray-stack__backdrop", stylexStyles: rHS(), className: n, style: C(G) });
    return Yrp("div", { "aria-hidden": "true", className: q.className, style: q.style }, `${y.id}-backdrop-${G}`);
  }), e[24] = n, e[25] = S, e[26] = C, e[27] = y.id, e[28] = N) : N = e[28];
  let U;
  e[29] !== y.content || e[30] !== P.className || e[31] !== P.style ? (U = Yrp("div", { className: P.className, style: P.style, children: y.content }), e[29] = y.content, e[30] = P.className, e[31] = P.style, e[32] = U) : U = e[32];
  let j;
  return e[33] !== s || e[34] !== I.className || e[35] !== I.style || e[36] !== N || e[37] !== U ? (j = vGS("div", { className: M, style: O, ...s, children: [N, U] }), e[33] = s, e[34] = I.className, e[35] = I.style, e[36] = N, e[37] = U, e[38] = j) : j = e[38], j;
}
var Zrp, Qrp, Jrp, esp, 