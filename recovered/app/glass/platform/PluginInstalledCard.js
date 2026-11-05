// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginInstalledCard.js range:23140433..23143783
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.150Z
// wrapper: Htk deps:4 [E, Mt, J7, AQa]
// declarations: kqm
// anchors: cursor-ui-78zum5, cursor-ui-6s0dn4, cursor-ui-1qughib, cursor-ui-1v2ro7d
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
Htk = L({ "PluginInstalledCard.js"() {
  "use strict";
  E(), Mt(), J7(), AQa(), fts = { root: { k1xSpc: "cursor-ui-78zum5", kGNEyG: "cursor-ui-6s0dn4", kjj79g: "cursor-ui-1qughib", kOIVth: "cursor-ui-1v2ro7d", k7Eaqz: "cursor-ui-euugli", $$css: true }, standalone: { keoZOQ: "cursor-ui-1xmf6yo", kLKAdn: "cursor-ui-1yrsyyn", kpe85a: "cursor-ui-y13l1i", kGO01o: "cursor-ui-10b6aqq", kE3dHu: "cursor-ui-163pfp", kEafiO: "cursor-ui-178xt8z", kWqL5O: "cursor-ui-s1s249", kt9PQ7: "cursor-ui-so031l", kZ1KPB: "cursor-ui-e0pwq", kPef9Z: "cursor-ui-13fuv20", kSWEuD: "cursor-ui-32b0ac", kfdmCh: "cursor-ui-1q0q8m5", k4WBpm: "cursor-ui-19ypqd9", kLZC3w: "cursor-ui-2kampu", k26BEO: "cursor-ui-hnkhp4", kL6WhQ: "cursor-ui-1jfuf7k", kaZRDh: "cursor-ui-1l09f48", kaIpWk: "cursor-ui-1kogg8i", $$css: true }, inset: { kVAEAm: "cursor-ui-1n2onr6", kY2c9j: "cursor-ui-1ja2u2z", kLKAdn: "cursor-ui-1yrsyyn", kpe85a: "cursor-ui-y13l1i", kGO01o: "cursor-ui-10b6aqq", kE3dHu: "cursor-ui-163pfp", $$css: true } };
} });
import { jsx as Fqt, jsxs as Sqm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Wtk } from "./react-runtime/react/esm-compiler-runtime-production.js";
function kqm(t) {
  const e = Wtk(21);
  let n, i;
  if (e[0] !== t ? ({ label: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]), i.layout === "fsd") {
    let h;
    e[3] !== i.prefix ? (h = i.prefix.length > 0 ? Fqt("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-1izesbo cursor-ui-15bjb6t", children: i.prefix }) : null, e[3] = i.prefix, e[4] = h) : h = e[4];
    let p;
    e[5] !== n ? (p = n.length > 0 ? Fqt("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-15bjb6t cursor-ui-1wd3ewq", children: n }) : null, e[5] = n, e[6] = p) : p = e[6];
    let g;
    return e[7] !== h || e[8] !== p ? (g = Sqm("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-1izesbo cursor-ui-4z9k3i cursor-ui-1d3mw78 cursor-ui-o1l8bm cursor-ui-167g77z", "data-simulated-action": "", children: [h, p] }), e[7] = h, e[8] = p, e[9] = g) : g = e[9], g;
  }
  let r;
  e[10] !== n ? (r = Fqt("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-1izesbo cursor-ui-15bjb6t", children: n }), e[10] = n, e[11] = r) : r = e[11];
  const s = r, { href: o, icon: a, onLinkClick: l } = i;
  let c;
  e[12] !== a ? (c = a === void 0 ? null : Fqt("span", { className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-amitd3 cursor-ui-1izesbo cursor-ui-4z9k3i cursor-ui-o5v014 cursor-ui-2lah0s", "aria-hidden": true, children: a.kind === "cursor" ? Fqt(zt, { "aria-hidden": true, name: a.name, size: 13 }) : Fqt(One, { "aria-hidden": true, name: a.name, size: 13, glyphSize: 13 }) }), e[12] = a, e[13] = c) : c = e[13];
  let u;
  e[14] !== o || e[15] !== s || e[16] !== l ? (u = o === void 0 ? s : Fqt("a", { className: "cursor-ui-1heor9g cursor-ui-krqix3 cursor-ui-1sur9pj cursor-ui-1f2jko9", href: o, rel: "noreferrer", onClick: l, children: s }), e[14] = o, e[15] = s, e[16] = l, e[17] = u) : u = e[17];
  let d;
  return e[18] !== c || e[19] !== u ? (d = Sqm("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-17d4w8g cursor-ui-1izesbo cursor-ui-4z9k3i cursor-ui-1d3mw78 cursor-ui-o1l8bm", "data-simulated-action": "", children: [c, u] }), e[18] = c, e[19] = u, e[20] = d) : d = e[20], d;
}
