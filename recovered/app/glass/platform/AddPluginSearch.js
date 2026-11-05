// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AddPluginSearch.js range:16959337..16963303
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.060Z
// wrapper: whp deps:8 [E, mf, pQd, E7r, Hrt, aJ, vGe, yhp]
// declarations: gt1, pwt, rwn (segment truncated)
// anchors: (none)
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
whp = L({ "AddPluginSearch.js"() {
  "use strict";
  E(), mf(), pQd(), E7r(), Hrt(), aJ(), vGe(), yhp(), R2e = { trigger: { kMeerF: "ui-1k57tk5", k3XXqK: "ui-1t137rt", kjBf7l: "ui-1uczgqu", kInvED: "ui-1wfwxd8", $$css: true }, menuContentFlush: { kLKAdn: "ui-exx8yu", kwRFfy: "ui-yri2b", kGO01o: "ui-18d9i69", kZCmMZ: "ui-1c1uobl", $$css: true }, menuSection: { kLKAdn: "ui-f6zju3", kwRFfy: "ui-1tlft3r", kGO01o: "ui-cnij5n", kZCmMZ: "ui-tw3t59", $$css: true }, menuStickySection: { kVAEAm: "ui-7wzq59", krVfgx: "ui-19ip775", kWkggS: "ui-f1vpex", kEafiO: "ui-178xt8z", kPef9Z: "ui-13fuv20", kLZC3w: "ui-1aeic0j", kVL7Gh: "ui-1pczhz8", kT0f0o: "ui-1wcsgtt", $$css: true }, menuRow: { kaIpWk: "ui-1kogg8i", $$css: true } };
} });
import { jsx as eEa, jsxs as pt1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as mt1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function gt1(t, e) {
  const n = t * 0.875, i = n / 2, r = n * 0.25, s = n * 0.417, o = e === "none";
  let a;
  switch (e) {
    case "slow":
      a = 0.3;
      break;
    case "regular":
      a = 0.2;
      break;
    case "fast":
      a = 0.125;
      break;
    case "very-fast":
      a = 0.06;
      break;
    case "none":
      a = 0;
      break;
    default:
      a = 0.2;
      break;
  }
  const l = [];
  for (let c = 0; c < Thp; c++) {
    const d = (c * Ehp + Ihp) * Math.PI / 180, h = Math.cos(d), p = Math.sin(d);
    l.push({ x1: i + h * r, y1: i + p * r, x2: i + h * s, y2: i + p * s, animationDelay: `${c * a}s`, opacity: o ? 1 : void 0 });
  }
  return l;
}
function pwt(t) {
  const e = mt1(42), { size: n, spinSpeed: i, color: r } = t, s = n === void 0 ? 20 : n, o = i === void 0 ? "very-fast" : i;
  let a;
  e[0] !== s || e[1] !== o ? (a = gt1(s, o), e[0] = s, e[1] = o, e[2] = a) : a = e[2];
  const l = a, c = s * 0.875, u = s * 0.075;
  let d;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (d = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k" }, e[3] = d) : d = e[3];
  const h = d, p = Chp[o];
  let g, f, _, b, y, S, k, C, T, I, A, P;
  if (e[4] !== r || e[5] !== p || e[6] !== l || e[7] !== s || e[8] !== u || e[9] !== c) {
    const N = gn(rwn.line, p ?? void 0);
    b = h.className;
    const U = `${s}px`, j = `${s}px`, $ = r ?? void 0;
    e[22] !== U || e[23] !== j || e[24] !== $ ? (y = { ...h.style, width: U, height: j, color: $ }, e[22] = U, e[23] = j, e[24] = $, e[25] = y) : y = e[25], S = "status", k = "Loading", C = c, T = c, I = `0 0 ${c} ${c}`, A = "none", P = "http://www.w3.org/2000/svg", g = true, e[26] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = eEa("title", { children: "Loading" }), e[26] = f) : f = e[26], _ = l.map((H) => eEa("line", { x1: H.x1, y1: H.y1, x2: H.x2, y2: H.y2, stroke: "currentColor", strokeWidth: u, strokeLinecap: "round", className: N.className, style: { ...N.style, animationDelay: H.animationDelay, opacity: H.opacity } }, `${H.x1},${H.y1},${H.x2},${H.y2}`)), e[4] = r, e[5] = p, e[6] = l, e[7] = s, e[8] = u, e[9] = c, e[10] = g, e[11] = f, e[12] = _, e[13] = b, e[14] = y, e[15] = S, e[16] = k, e[17] = C, e[18] = T, e[19] = I, e[20] = A, e[21] = P;
  } else g = e[10], f = e[11], _ = e[12], b = e[13], y = e[14], S = e[15], k = e[16], C = e[17], T = e[18], I = e[19], A = e[20], P = e[21];
  let M;
  e[27] !== g || e[28] !== f || e[29] !== _ || e[30] !== C || e[31] !== T || e[32] !== I || e[33] !== A || e[34] !== P ? (M = pt1("svg", { width: C, height: T, viewBox: I, fill: A, xmlns: P, "aria-hidden": g, children: [f, _] }), e[27] = g, e[28] = f, e[29] = _, e[30] = C, e[31] = T, e[32] = I, e[33] = A, e[34] = P, e[35] = M) : M = e[35];
  let O;
  return e[36] !== b || e[37] !== y || e[38] !== S || e[39] !== k || e[40] !== M ? (O = eEa("div", { className: b, style: y, role: S, "aria-label": k, children: M }), e[36] = b, e[37] = y, e[38] = S, e[39] = k, e[40] = M, e[41] = O) : O = e[41], O;
}
var rwn, Chp, Thp, Ehp, Ihp,
