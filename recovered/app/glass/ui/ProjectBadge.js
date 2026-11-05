// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProjectBadge.js range:17244291..17247673
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.917Z
So1 = L({ "ProjectBadge.js"() {
  "use strict";
  E(), git(), fd(), pIa = { root: { k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kmuXW: "ui-2lah0s", kXLuUW: "ui-xymvpz", kaIpWk: "ui-1i4c3av", kKwaWg: "ui-14gc5zb", $$css: true }, sm: { kzqmXN: "ui-1pwdyn5", kZKoxP: "ui-1vatr1o", $$css: true }, md: { kzqmXN: "ui-16bvwqk", kZKoxP: "ui-1a6rlst", $$css: true }, lg: { kzqmXN: "ui-jst10v", kZKoxP: "ui-170hpbr", $$css: true }, xl: { kzqmXN: "ui-tiusyp", kZKoxP: "ui-12tj2o0", $$css: true } }, ufp = { sm: "xs", md: "sm", lg: "lg", xl: "xl" };
} });
import { jsx as mIa, jsxs as dfp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ko1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function wo1(t) {
  const e = ko1(33);
  let n, i, r, s, o, a, l;
  e[0] !== t ? ({ children: i, leading: r, trailing: l, selected: a, rootStyle: o, ref: s, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7]);
  const c = a === void 0 ? false : a, u = c || n.onClick !== void 0 || n.role === "button" || n.tabIndex !== void 0, d = u ? "background" : void 0, h = u ? "background" : void 0;
  let p;
  e[8] !== u || e[9] !== o || e[10] !== c ? (p = gn(hfp, pUr.root, u && pUr.interactive, c && pUr.selected, o), e[8] = u, e[9] = o, e[10] = c, e[11] = p) : p = e[11];
  const g = r === void 0 ? true : void 0;
  let f;
  e[12] !== r || e[13] !== g ? (f = mIa("div", { className: "ui-78zum5 ui-y1keyj ui-2lwn1j ui-2lah0s ui-6s0dn4 ui-l56j7k", "aria-hidden": g, "data-project-list-glyph-slot": true, children: r }), e[12] = r, e[13] = g, e[14] = f) : f = e[14];
  let _;
  e[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = { 0: { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-6s0dn4 ui-11twubx ui-6ikm8r ui-10wlt62 ui-17v7654 ui-1iusha1" }, 1: { className: "ui-78zum5 ui-2lwn1j ui-euugli ui-12lumcd ui-6s0dn4 ui-11twubx ui-6ikm8r ui-10wlt62 ui-1iusha1 ui-1xpa7k" } }, e[15] = _) : _ = e[15];
  const b = _[(l !== void 0) << 0];
  let y;
  e[16] !== i ? (y = mIa("div", { className: "ui-78zum5 ui-2lwn1j ui-1mkiy5m ui-12lumcd ui-dt5ytf ui-l56j7k ui-137clkk ui-6ikm8r ui-10wlt62 ui-j9uezu ui-pf9j6y ui-ip9h3s ui-1bxrdft", "data-project-list-title-column": true, children: i }), e[16] = i, e[17] = y) : y = e[17];
  let S;
  e[18] !== l ? (S = l === void 0 ? null : mIa("div", { className: "ui-3nfvp2 ui-2lah0s ui-6s0dn4 ui-g01cxk ui-1lty2u ui-okmix3 ui-47corl ui-rvovp9 ui-1pmo5vx ui-19991ni ui-7pq1vu ui-6ekqhr", "data-project-item-trailing-slot": true, children: l }), e[18] = l, e[19] = S) : S = e[19];
  let k;
  e[20] !== S || e[21] !== b || e[22] !== y ? (k = dfp("div", { ...b, children: [y, S] }), e[20] = S, e[21] = b, e[22] = y, e[23] = k) : k = e[23];
  let C;
  return e[24] !== n || e[25] !== u || e[26] !== s || e[27] !== k || e[28] !== d || e[29] !== h || e[30] !== p || e[31] !== f ? (C = dfp("article", { ref: s, "data-project-list-item-surface": true, "data-project-list-item-interactive": u, "data-project-card-layout": "list", "data-project-card-focus-treatment": d, "data-project-card-selection-treatment": h, ...n, ...p, children: [f, k] }), e[24] = n, e[25] = u, e[26] = s, e[27] = k, e[28] = d, e[29] = h, e[30] = p, e[31] = f, e[32] = C) : C = e[32], C;
}
var hfp, bwn, pUr, 