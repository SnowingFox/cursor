// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SplitButton.js range:18348369..18350936
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.024Z
hT1 = L({ "SplitButton.js"() {
  "use strict";
  E(), mf(), IKo(), Tba(), Jvn(), m2(), P0(), fd(), Q3(), hL(), mst = { mainFullWidth: { kzQI83: "ui-1iyjqo2", k7Eaqz: "ui-euugli", $$css: true }, dropdown: { kmuXW: "ui-2lah0s", kOIVth: "ui-137clkk", kLKAdn: "ui-exx8yu", kpe85a: "ui-1xpa7k", kGO01o: "ui-18d9i69", kE3dHu: "ui-1uhho1l", kzqmXN: "ui-16bvwqk ui-ah2vel ui-1h3pki4", $$css: true }, dropdownWithLeadingIcon: { kzqmXN: "ui-14atkfc", k7Eaqz: "ui-cbmsab ui-1mt5wgp ui-1j2v8xj", kpe85a: "ui-g31tg3", kE3dHu: "ui-43mhey", $$css: true }, dropdownRounded: { kpe85a: "ui-14ndyrl", kzqmXN: "ui-ig3iin ui-4qnxre ui-5kl4et", $$css: true }, dropdownWithLeadingIconRounded: { kzqmXN: "ui-14atkfc", kpe85a: "ui-1jkygx ui-pgs8de ui-1f2yi34 ui-dj55lt", $$css: true }, dropdownIcon: { kzqmXN: "ui-ncpac4", kZKoxP: "ui-1d74i34", kGuDYH: "ui-dzlmae", kmuXW: "ui-2lah0s", $$css: true } };
} });
import { jsx as pT1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as mT1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function pHr(t) {
  const e = mT1(30);
  let n, i, r, s, o, a, l, c, u, d;
  e[0] !== t ? ({ variant: a, size: l, weight: c, color: n, sizing: u, hidePlaceholderOnFocus: d, rootStyle: s, style: o, ref: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10]);
  const h = a === void 0 ? "default" : a, p = l === void 0 ? "md" : l, g = c === void 0 ? "regular" : c, f = u === void 0 ? "content" : u, _ = d === void 0 ? false : d;
  let b, y, S;
  if (e[11] !== n || e[12] !== _ || e[13] !== r || e[14] !== s || e[15] !== p || e[16] !== f || e[17] !== h || e[18] !== g) {
    const { className: T, style: I } = gn(vbi.reset, f === "fill" ? vbi.sizingFill : vbi.sizingContent, Tna({ color: n, size: p, truncate: void 0, variant: h, weight: g }), _ && vbi.placeholderHiddenOnFocus, s);
    b = I, y = r, S = ri("ui-text-editable", T), e[11] = n, e[12] = _, e[13] = r, e[14] = s, e[15] = p, e[16] = f, e[17] = h, e[18] = g, e[19] = b, e[20] = y, e[21] = S;
  } else b = e[19], y = e[20], S = e[21];
  let k;
  e[22] !== o || e[23] !== b ? (k = o ? { ...b, ...o } : b, e[22] = o, e[23] = b, e[24] = k) : k = e[24];
  let C;
  return e[25] !== i || e[26] !== y || e[27] !== S || e[28] !== k ? (C = pT1("input", { ref: y, className: S, style: k, type: "text", ...i }), e[25] = i, e[26] = y, e[27] = S, e[28] = k, e[29] = C) : C = e[29], C;
}
var vbi, 