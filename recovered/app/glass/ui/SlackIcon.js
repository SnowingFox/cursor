// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SlackIcon.js range:15966997..15968921
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.017Z
var itp = L({ "SlackIcon.js"() {
  "use strict";
  E();
} });
import { jsx as M8S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as D8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function N8S({ pill: t, size: e, variant: n }) {
  return [b2e.base, e === "sm" ? b2e.sizeSm : b2e.sizeMd, t ? [b2e.pill, e === "sm" ? b2e.pillSizeSm : b2e.pillSizeMd] : null, L9r(n)];
}
function L9r(t) {
  switch (t) {
    case "accent":
      return b2e.variantAccent;
    case "neutral":
      return b2e.variantNeutral;
    case "success":
      return b2e.variantSuccess;
    case "warn":
      return b2e.variantWarn;
    case "danger":
      return b2e.variantDanger;
  }
}
function e$(t) {
  const e = D8S(24);
  let n, i, r, s, o, a, l, c;
  e[0] !== t ? ({ children: n, variant: o, size: a, pill: l, as: c, className: i, style: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8]);
  const u = o === void 0 ? "neutral" : o, d = a === void 0 ? "md" : a, h = l === void 0 ? false : l, p = c === void 0 ? "span" : c;
  let g;
  e[9] !== i || e[10] !== h || e[11] !== d || e[12] !== s || e[13] !== u ? (g = ar({ rootClass: "ui-status-badge", stylexStyles: N8S({ pill: h, size: d, variant: u }), className: i, style: s }), e[9] = i, e[10] = h, e[11] = d, e[12] = s, e[13] = u, e[14] = g) : g = e[14];
  const f = g, _ = h || void 0;
  let b;
  return e[15] !== p || e[16] !== n || e[17] !== r || e[18] !== f.className || e[19] !== f.style || e[20] !== d || e[21] !== _ || e[22] !== u ? (b = M8S(p, { className: f.className, style: f.style, "data-variant": u, "data-size": d, "data-pill": _, ...r, children: n }), e[15] = p, e[16] = n, e[17] = r, e[18] = f.className, e[19] = f.style, e[20] = d, e[21] = _, e[22] = u, e[23] = b) : b = e[23], b;
}
var b2e, 