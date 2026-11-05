// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GlassLiquidMetalLogo.js range:16466305..16470710
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.706Z
VzS = L({ "GlassLiquidMetalLogo.js"() {
  "use strict";
  E(), Va(), Zsp(), qu(), wop = { base: { k1xSpc: "ui-78zum5", kjj79g: "ui-l56j7k", k1K539: "ui-at24cr", $$css: true } }, Cop = { base: { kVAEAm: "ui-1n2onr6", k1ekBW: "ui-19991ni", kIyJzY: "ui-97pzxe", kAMwcw: "ui-6tor67", $$css: true } }, Top = { base: { kWkggS: "ui-jbqb8w", $$css: true } }, Eop = { base: { k1xSpc: "ui-1lliihq", kzqmXN: "ui-h8yej3", kZKoxP: "ui-5yr21d", $$css: true } }, Iop = BzS(() => Promise.resolve().then(() => (FzS(), bop))), T0e = { fit: "contain", colorTint: "#f2f5ff", repetition: 2, softness: 0.1, shiftRed: 0.3, shiftBlue: 0.3, distortion: 0.07, contour: 0.4, angle: 70, speed: 0.9, scale: 0.6, shape: "diamond" };
} });
import { jsx as Prt, jsxs as s8r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xop } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Children as KzS } from "./react-runtime/react/esm-index-production.js";
function YzS(t) {
  const e = xop(19), { title: n, secondaryLabel: i, leading: r, titleColor: s, trailing: o, onSelect: a } = t, l = s === void 0 ? "primary" : s;
  let c;
  e[0] !== r ? (c = Prt("span", { className: "ui-78zum5 ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-1pwdyn5 ui-1vatr1o ui-6s0dn4 ui-l56j7k", children: r }), e[0] = r, e[1] = c) : c = e[1];
  let u;
  e[2] !== i || e[3] !== n || e[4] !== l ? (u = n ? Prt(nn, { color: l, size: "md", truncate: true, ...{ 0: { className: "ui-s83m0k ui-dl72j9 ui-euugli ui-193iq5w ui-1iyjqo2" }, 1: { className: "ui-dl72j9 ui-euugli ui-193iq5w ui-1c4vz4f ui-2lah0s" } }[!!i << 0], children: n }) : null, e[2] = i, e[3] = n, e[4] = l, e[5] = u) : u = e[5];
  let d;
  e[6] !== i || e[7] !== n ? (d = i ? Prt(nn, { color: "tertiary", size: "md", truncate: true, ...{ 0: { className: "ui-s83m0k ui-dl72j9 ui-euugli ui-193iq5w ui-1iyjqo2" }, 1: { className: "ui-1c4vz4f ui-s83m0k ui-dl72j9 ui-euugli ui-193iq5w" } }[!!n << 0], children: i }) : null, e[6] = i, e[7] = n, e[8] = d) : d = e[8];
  let h;
  e[9] !== u || e[10] !== d ? (h = s8r("span", { className: "ui-78zum5 ui-1iyjqo2 ui-s83m0k ui-1r8uery ui-euugli ui-1pha0wt ui-1oot3zn ui-b3r6kr", children: [u, d] }), e[9] = u, e[10] = d, e[11] = h) : h = e[11];
  let p;
  e[12] !== o ? (p = o ? Prt("span", { className: "ui-78zum5 ui-6s0dn4 ui-2lah0s", children: o }) : null, e[12] = o, e[13] = p) : p = e[13];
  let g;
  return e[14] !== a || e[15] !== c || e[16] !== h || e[17] !== p ? (g = s8r("button", { onClick: a, type: "button", className: "ui-9f619 ui-jyslct ui-jbqb8w ui-1sjiwpj ui-c342km ui-ng3xce ui-1heor9g ui-78zum5 ui-h8yej3 ui-euugli ui-6s0dn4 ui-1qughib ui-ehausa ui-1ghz6dp ui-ugt2tg ui-1m7fhj7 ui-dpxx8g ui-1ypdohk ui-1k57tk5 ui-4xl6zf ui-1t137rt ui-9v5kkp ui-718nlf ui-1g40iwv", children: [c, h, p] }), e[14] = a, e[15] = c, e[16] = h, e[17] = p, e[18] = g) : g = e[18], g;
}
function XzS(t) {
  const e = xop(12), { title: n, headingLevel: i, headerAction: r, children: s } = t, o = i === void 0 ? 2 : i, a = KzS.count(s), l = n != null && n !== "", c = l || r != null;
  if (a === 0 && !c) return null;
  let u;
  e[0] !== l || e[1] !== r || e[2] !== o || e[3] !== c || e[4] !== n ? (u = c ? s8r("div", { className: "ui-9f619 ui-78zum5 ui-6s0dn4 ui-1qughib ui-ehausa ui-13ly8rp ui-16b7oty ui-1xlntvz ui-o7x2bt", children: [l ? Prt(nn, { as: o === "none" ? "p" : `h${o}`, color: "tertiary", role: o === "none" ? "status" : void 0, size: "md", weight: "regular", className: "ui-1lliihq ui-euugli", children: n }) : Prt("span", { className: "ui-1lliihq ui-euugli" }), r ? Prt("button", { onClick: r.onSelect, type: "button", className: "ui-jyslct ui-jbqb8w ui-c342km ui-ng3xce ui-2lah0s ui-1ghz6dp ui-1717udv ui-1ypdohk ui-krqix3 ui-1sur9pj ui-1k57tk5 ui-4xl6zf ui-1t137rt ui-9v5kkp ui-718nlf ui-1hl8ikr", children: Prt(nn, { color: "tertiary", size: "md", weight: "regular", children: r.label }) }) : null] }) : null, e[0] = l, e[1] = r, e[2] = o, e[3] = c, e[4] = n, e[5] = u) : u = e[5];
  let d;
  e[6] !== a || e[7] !== s ? (d = a > 0 ? Prt("div", { className: "ui-9f619 ui-78zum5 ui-dt5ytf ui-5cdhqx ui-h8yej3 ui-euugli ui-1fn2sgp", children: s }) : null, e[6] = a, e[7] = s, e[8] = d) : d = e[8];
  let h;
  return e[9] !== u || e[10] !== d ? (h = s8r("section", { className: "ui-9f619 ui-jbqb8w ui-1pkpdue ui-7giv3 ui-h8yej3 ui-euugli", children: [u, d] }), e[9] = u, e[10] = d, e[11] = h) : h = e[11], h;
}
var Wne, 