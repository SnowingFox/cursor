// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ProgressBar.js range:15559937..15566382
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.909Z
xOS = L({ "ProgressBar.js"() {
  "use strict";
  E(), Va(), mf(), fga(), WkS(), iJ = { fill: { kVAEAm: "ui-10l6tqk", kY2c9j: "ui-1vjfegm", k87sOh: "ui-13vifvy", kLqNvP: "ui-1o0tod", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", kaIpWk: "ui-1bl94mz", k1ekBW: "ui-11xpdln ui-4wkmsb", kIyJzY: "ui-1bqoo3p", kAMwcw: "ui-6tor67", k6sLGO: "ui-1so62im", $$css: true }, fillIndeterminate: { kzqmXN: "ui-1bm8l82 ui-ie2s74", k1ekBW: "ui-13b0p5u", kIyJzY: "ui-1mq3mr6", kAMwcw: "ui-wji4o3", k6sLGO: "ui-1n5prqt", kKVMdj: "ui-nyt1tc ui-1aquc0h", k44tkh: "ui-1bg3qbz", kyAemX: "ui-12y52ut", ko0y90: "ui-a4qsjk", kSiTet: "ui-fp8ul4", $$css: true }, fillColorNeutral: { kWkggS: "ui-196v5v7", $$css: true }, fillColorForeground: { kWkggS: "ui-mak4db", $$css: true }, fillColorSecondary: { kWkggS: "ui-12h2ipy", $$css: true }, fillColorPrimary: { kWkggS: "ui-1gxx7xa", $$css: true }, fillColorYellow: { kWkggS: "ui-4bbodi", $$css: true }, fillColorRed: { kWkggS: "ui-16kho9k", $$css: true }, segment: { kVAEAm: "ui-1n2onr6", kZKoxP: "ui-5yr21d", kaIpWk: "ui-13isjzs", kmuXW: "ui-2lah0s", kCS8Yb: "ui-1r8uery", k1ekBW: "ui-16wom5 ui-4wkmsb", kIyJzY: "ui-1bqoo3p", kAMwcw: "ui-6tor67", k6sLGO: "ui-td9dk2", $$css: true }, segmentColorPrimary: { kWkggS: "ui-1gxx7xa", $$css: true }, segmentColorBlue: { kWkggS: "ui-1umq2ss", $$css: true }, segmentColorYellow: { kWkggS: "ui-kl83d3", $$css: true }, segmentColorGreen: { kWkggS: "ui-5hnh3p", $$css: true }, segmentColorMagenta: { kWkggS: "ui-15l5r52", $$css: true }, segmentColorRed: { kWkggS: "ui-16kho9k", $$css: true }, segmentColorCyan: { kWkggS: "ui-nqskf", $$css: true }, segmentColorOrange: { kWkggS: "ui-1402xq3", $$css: true } };
} });
import { jsx as Akt, jsxs as AOS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as q6r } from "./react-runtime/react/esm-compiler-runtime-production.js";
function yYh(t) {
  const e = q6r(31), { color: n, radius: i, value: r } = t, s = n ?? Aoe["--cursor-text-secondary"], o = i + 1, a = i - wYh, l = o * 2 + Oya + 2, c = l / 2, u = (r * 360 - 90) * (Math.PI / 180), d = c + a * Math.cos(u), h = c + a * Math.sin(u), p = r > 0.5 ? 1 : 0, g = `M ${c} ${c} L ${c} ${c - a} A ${a} ${a} 0 ${p} 1 ${d} ${h} Z`;
  let f, _, b, y, S, k, C, T;
  e[0] !== l || e[1] !== r ? (f = { className: "ui-1lliihq ui-2lah0s" }, _ = l, b = l, y = `0 0 ${l} ${l}`, S = "true", k = "", C = r, T = ri("ui-progress-pie-svg", f.className), e[0] = l, e[1] = r, e[2] = f, e[3] = _, e[4] = b, e[5] = y, e[6] = S, e[7] = k, e[8] = C, e[9] = T) : (f = e[2], _ = e[3], b = e[4], y = e[5], S = e[6], k = e[7], C = e[8], T = e[9]);
  const I = `color-mix(in srgb, ${s} 60%, transparent)`;
  let A;
  e[10] !== c || e[11] !== o || e[12] !== I ? (A = Akt("circle", { cx: c, cy: c, r: o, fill: "none", stroke: I, strokeWidth: Oya }), e[10] = c, e[11] = o, e[12] = I, e[13] = A) : A = e[13];
  let P;
  e[14] !== c || e[15] !== s || e[16] !== r || e[17] !== g || e[18] !== a ? (P = r >= 1 ? Akt("circle", { cx: c, cy: c, r: a, fill: s }) : r > 0 ? Akt("path", { d: g, fill: s }) : null, e[14] = c, e[15] = s, e[16] = r, e[17] = g, e[18] = a, e[19] = P) : P = e[19];
  let M;
  return e[20] !== f.style || e[21] !== _ || e[22] !== P || e[23] !== b || e[24] !== y || e[25] !== S || e[26] !== k || e[27] !== C || e[28] !== T || e[29] !== A ? (M = AOS("svg", { width: _, height: b, viewBox: y, "aria-hidden": S, "data-progress-pie-visual": k, "data-progress-value": C, className: T, style: f.style, children: [A, P] }), e[20] = f.style, e[21] = _, e[22] = P, e[23] = b, e[24] = y, e[25] = S, e[26] = k, e[27] = C, e[28] = T, e[29] = A, e[30] = M) : M = e[30], M;
}
function SYh(t) {
  const e = q6r(35);
  let n, i, r, s, o, a, l;
  e[0] !== t ? ({ value: a, radius: l, color: i, className: n, style: o, ref: r, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7]);
  const c = a === void 0 ? 0 : a, u = l === void 0 ? 5 : l, d = Math.min(1, Math.max(0, c));
  let h, p, g, f, _, b;
  e[8] !== d || e[9] !== n || e[10] !== r || e[11] !== s ? (p = { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s" }, h = SSn, g = r, f = s, e[18] !== d ? (_ = Math.round(d * 100), e[18] = d, e[19] = _) : _ = e[19], b = ri("ui-progress", p.className, "ui-progress-pie", n), e[8] = d, e[9] = n, e[10] = r, e[11] = s, e[12] = h, e[13] = p, e[14] = g, e[15] = f, e[16] = _, e[17] = b) : (h = e[12], p = e[13], g = e[14], f = e[15], _ = e[16], b = e[17]);
  let y;
  e[20] !== p.style || e[21] !== o ? (y = { ...p.style, ...o }, e[20] = p.style, e[21] = o, e[22] = y) : y = e[22];
  let S;
  e[23] !== d || e[24] !== i || e[25] !== u ? (S = Akt(yYh, { color: i, radius: u, value: d }), e[23] = d, e[24] = i, e[25] = u, e[26] = S) : S = e[26];
  let k;
  return e[27] !== h || e[28] !== g || e[29] !== f || e[30] !== _ || e[31] !== b || e[32] !== y || e[33] !== S ? (k = Akt(h, { ref: g, ...f, value: _, className: b, style: y, children: S }), e[27] = h, e[28] = g, e[29] = f, e[30] = _, e[31] = b, e[32] = y, e[33] = S, e[34] = k) : k = e[34], k;
}
function kYh(t) {
  const e = q6r(7), { value: n, radius: i, color: r } = t, s = n === void 0 ? 0 : n, o = i === void 0 ? 5 : i, a = Math.min(1, Math.max(0, s));
  let l, c, u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s" }, c = "true", u = ri("ui-progress", l.className, "ui-progress-pie"), e[0] = l, e[1] = c, e[2] = u) : (l = e[0], c = e[1], u = e[2]);
  let d;
  return e[3] !== a || e[4] !== r || e[5] !== o ? (d = Akt("span", { "aria-hidden": c, className: u, style: l.style, children: Akt(yYh, { color: r, radius: o, value: a }) }), e[3] = a, e[4] = r, e[5] = o, e[6] = d) : d = e[6], d;
}
function ROS(t) {
  const e = q6r(12);
  let n, i, r, s, o;
  if (e[0] !== t) {
    const { value: d, size: h, className: p, ref: g, variant: f, color: _, indeterminate: b, ...y } = t;
    s = d, o = h, n = p, i = g, r = y, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o;
  } else n = e[1], i = e[2], r = e[3], s = e[4], o = e[5];
  const a = s === void 0 ? 0 : s, c = CYh[o === void 0 ? "sm" : o];
  let u;
  return e[6] !== n || e[7] !== i || e[8] !== r || e[9] !== c || e[10] !== a ? (u = Akt(SYh, { ref: i, value: a, radius: c, className: n, ...r }), e[6] = n, e[7] = i, e[8] = r, e[9] = c, e[10] = a, e[11] = u) : u = e[11], u;
}
var Oya, wYh, CYh, 