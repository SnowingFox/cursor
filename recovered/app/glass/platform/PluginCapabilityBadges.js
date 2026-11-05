// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginCapabilityBadges.js range:17029068..17032100
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-platform 2026-11-05T10:20:42.145Z
// wrapper: PluginCapabilityBadgesModule deps:5 [E, Va, imp, mf, Hrt]
// declarations: PluginCapabilityBadgesModule, d6e
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var PluginCapabilityBadgesModule = L({
  "PluginCapabilityBadges.js"() {
    "use strict";

    E(), Va(), imp(), mf(), Hrt();
  }
});
import { jsx as _vi, jsxs as bvi } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xn1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function d6e(t) {
  const e = xn1(34),
    {
      label: n,
      description: i,
      leadingIcon: r,
      capabilities: s,
      trailingItems: o,
      fullWidthFooter: a,
      hideTopDivider: l,
      className: c
    } = t,
    u = l === void 0 ? false : l,
    d = a != null;
  let h, p;
  e[0] !== c || e[1] !== u ? (h = {
    0: {
      className: "ui-1n2onr6 ui-78zum5 ui-dt5ytf ui-xhr3t ui-euugli ui-h8yej3 ui-9f619 ui-z9dl7a ui-yfqnmn ui-sag5q8 ui-nm25rq ui-jbqb8w ui-1cpjm7i ui-1hmns74 ui-1y3wzot ui-1elnft9 ui-w8i89x ui-y80zi5 ui-1850n35"
    },
    1: {
      className: "ui-1n2onr6 ui-78zum5 ui-dt5ytf ui-xhr3t ui-euugli ui-h8yej3 ui-9f619 ui-z9dl7a ui-yfqnmn ui-sag5q8 ui-nm25rq ui-jbqb8w ui-1hmns74 ui-1y3wzot ui-1elnft9 ui-w8i89x ui-y80zi5 ui-1850n35"
    }
  }[!!u << 0], p = ri(h.className, c), e[0] = c, e[1] = u, e[2] = h, e[3] = p) : (h = e[2], p = e[3]);
  let g;
  e[4] !== r ? (g = r != null && _vi("div", {
    className: "ui-2lah0s ui-78zum5 ui-6s0dn4 ui-l56j7k",
    children: r
  }), e[4] = r, e[5] = g) : g = e[5];
  let f;
  e[6] !== s ? (f = s ?? [], e[6] = s, e[7] = f) : f = e[7];
  let _;
  e[8] !== f ? (_ = _vi(dwn, {
    capabilities: f
  }), e[8] = f, e[9] = _) : _ = e[9];
  let b;
  e[10] !== n || e[11] !== _ ? (b = bvi("div", {
    className: "ui-78zum5 ui-6s0dn4 ui-1jnr06f ui-kh2ocl ui-11wthnw ui-20ajya ui-1ja60sm ui-1wd3ewq ui-uxw1ft ui-b3r6kr ui-lyipyv ui-euugli",
    children: [n, _]
  }), e[10] = n, e[11] = _, e[12] = b) : b = e[12];
  let y;
  e[13] !== i ? (y = i != null && _vi("div", {
    className: "ui-11wthnw ui-20ajya ui-1ja60sm ui-19aaqeu ui-euugli ui-1mzt3pk",
    children: i
  }), e[13] = i, e[14] = y) : y = e[14];
  let S;
  e[15] !== b || e[16] !== y ? (S = bvi("div", {
    className: "ui-78zum5 ui-dt5ytf ui-1cy8zhl ui-xhr3t ui-euugli ui-5mp9sv",
    children: [b, y]
  }), e[15] = b, e[16] = y, e[17] = S) : S = e[17];
  let k;
  e[18] !== g || e[19] !== S ? (k = bvi("div", {
    className: "ui-78zum5 ui-1cy8zhl ui-883omv ui-euugli ui-5mp9sv",
    children: [g, S]
  }), e[18] = g, e[19] = S, e[20] = k) : k = e[20];
  let C;
  e[21] !== o ? (C = o != null && _vi("div", {
    className: "ui-78zum5 ui-3zvfii ui-16hisux ui-yqdw3p ui-13a6bvl ui-6s0dn4 ui-167g77z ui-2lah0s",
    children: o
  }), e[21] = o, e[22] = C) : C = e[22];
  let T;
  e[23] !== C || e[24] !== k ? (T = bvi("div", {
    className: "ui-78zum5 ui-1cy8zhl ui-1qughib ui-1c1vhfx ui-h8yej3 ui-euugli",
    children: [k, C]
  }), e[23] = C, e[24] = k, e[25] = T) : T = e[25];
  let I;
  e[26] !== a || e[27] !== d ? (I = d && _vi("div", {
    className: "ui-h8yej3 ui-euugli ui-889kno",
    children: a
  }), e[26] = a, e[27] = d, e[28] = I) : I = e[28];
  let A;
  return e[29] !== h.style || e[30] !== T || e[31] !== I || e[32] !== p ? (A = bvi("div", {
    className: p,
    style: h.style,
    children: [T, I]
  }), e[29] = h.style, e[30] = T, e[31] = I, e[32] = p, e[33] = A) : A = e[33], A;
}
