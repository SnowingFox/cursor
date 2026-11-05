// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarketplaceAccessSection.js range:17077030..17079037
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.113Z
// wrapper: jEa deps:16 [E, Va, R7r, I7r, REa, Hrt, avi, kwh, Iwh, pB, qUt, hL]
// declarations: ii1
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
jEa = L({ "MarketplaceAccessSection.js"() {
  "use strict";
  E(), Va(), R7r(), I7r(), REa(), Hrt(), avi(), kwh(), Iwh(), pB(), qUt(), hL(), fd(), P0(), Q3(), QQ(), q7r = "Repo sync is unable to complete. Access will continue being served from GitHub.";
} });
import { jsx as z7r, jsxs as fmp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ni1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ii1(t) {
  const e = ni1(23), { open: n, isConfirming: i, onCancel: r, onConfirm: s, title: o, confirmLabel: a } = t, l = i === void 0 ? false : i, c = o === void 0 ? "Confirm Plugin Removal" : o, u = a === void 0 ? "Remove and continue" : a, h = wO()?.parentElement ?? null;
  let p;
  e[0] !== l || e[1] !== r ? (p = (C) => {
    l || C || r();
  }, e[0] = l, e[1] = r, e[2] = p) : p = e[2];
  let g;
  e[3] !== c ? (g = z7r(Xr.Header, { title: c, description: "The plugins you're removing from the marketplace will no longer be available to users and Cloud Agents that rely on them." }), e[3] = c, e[4] = g) : g = e[4];
  let f;
  e[5] !== l || e[6] !== r ? (f = z7r(An, { variant: "text", size: "lg", onClick: r, disabled: l, children: "Cancel" }), e[5] = l, e[6] = r, e[7] = f) : f = e[7];
  const _ = l ? "Working..." : u;
  let b;
  e[8] !== l || e[9] !== s || e[10] !== _ ? (b = z7r(An, { variant: "outline", size: "lg", onClick: s, disabled: l, children: _ }), e[8] = l, e[9] = s, e[10] = _, e[11] = b) : b = e[11];
  let y;
  e[12] !== f || e[13] !== b ? (y = fmp(Xr.Footer, { children: [f, b] }), e[12] = f, e[13] = b, e[14] = y) : y = e[14];
  let S;
  e[15] !== n || e[16] !== p || e[17] !== g || e[18] !== y ? (S = fmp(Xr, { open: n, onOpenChange: p, size: "md", "aria-label": "MCP impact confirmation", modal: true, children: [g, y] }), e[15] = n, e[16] = p, e[17] = g, e[18] = y, e[19] = S) : S = e[19];
  let k;
  return e[20] !== h || e[21] !== S ? (k = z7r(Kj, { root: h, children: S }), e[20] = h, e[21] = S, e[22] = k) : k = e[22], k;
}
