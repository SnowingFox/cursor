// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MarketplaceSection.js range:22839772..22841574
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.116Z
// wrapper: yQ1 deps:3 [E, Mt, J7]
// declarations: kQ1
// anchors: cursor-ui-78zum5, cursor-ui-dt5ytf, cursor-ui-1oot3zn, cursor-ui-12h1iku
// group: marketplace-plugins
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
yQ1 = L({ "MarketplaceSection.js"() {
  "use strict";
  E(), Mt(), J7(), vWm = { height: "auto" }, _Wm = { root: { k1xSpc: "cursor-ui-78zum5", kXwgrk: "cursor-ui-dt5ytf", kOIVth: "cursor-ui-1oot3zn", k9g6sI: "cursor-ui-12h1iku", $$css: true } }, bWm = { root: { k1xSpc: "cursor-ui-78zum5", kXwgrk: "cursor-ui-1q0g3np", kGNEyG: "cursor-ui-6s0dn4", kOIVth: "cursor-ui-1oot3zn", kLKAdn: "cursor-ui-13ly8rp", kpe85a: "cursor-ui-1yxiud8", kGO01o: "cursor-ui-1xlntvz", kE3dHu: "cursor-ui-yab65l", kaIpWk: "cursor-ui-1m7fhj7", kMwMTN: "cursor-ui-1wd3ewq", k7Eaqz: "cursor-ui-euugli", kWkggS: "cursor-ui-jbqb8w cursor-ui-1iuyybk cursor-ui-k24vx2", $$css: true } }, yWm = 4;
} });
import { jsx as Yes, jsxs as SWm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as SQ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function kQ1(t) {
  const e = SQ1(14), { title: n, onManage: i, onRemove: r, isRemoving: s } = t, o = s === void 0 ? false : s, a = `${n} options`;
  let l;
  e[0] !== a ? (l = Yes(hn.Trigger, { children: Yes(ho, { icon: "ellipsis", variant: "ghost", size: "sm", "aria-label": a }) }), e[0] = a, e[1] = l) : l = e[1];
  const c = `${n} options`;
  let u;
  e[2] !== i ? (u = i && Yes(hn.Item, { onSelect: i, children: "Manage Marketplace" }), e[2] = i, e[3] = u) : u = e[3];
  let d;
  e[4] !== o || e[5] !== r ? (d = r && Yes(hn.Item, { onSelect: r, disabled: o, children: o ? "Removing..." : "Remove" }), e[4] = o, e[5] = r, e[6] = d) : d = e[6];
  let h;
  e[7] !== c || e[8] !== u || e[9] !== d ? (h = SWm(hn.Content, { "aria-label": c, children: [u, d] }), e[7] = c, e[8] = u, e[9] = d, e[10] = h) : h = e[10];
  let p;
  return e[11] !== l || e[12] !== h ? (p = SWm(hn, { children: [l, h] }), e[11] = l, e[12] = h, e[13] = p) : p = e[13], p;
}
