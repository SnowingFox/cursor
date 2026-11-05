// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnterIcon.js range:16953821..16959337
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.654Z
var yhp = L({ "EnterIcon.js"() {
  "use strict";
  E();
} });
import { jsx as qne, jsxs as H$t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as JTa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ht1(t, e) {
  const n = JTa(3);
  let i;
  return n[0] !== t || n[1] !== e ? (i = l6e(t, e), n[0] = t, n[1] = e, n[2] = i) : i = n[2], i;
}
function Shp(t) {
  const e = JTa(23), { plugin: n, trailing: i, className: r } = t;
  let s, o;
  e[0] !== r ? (s = { className: "ui-78zum5 ui-1nn3v0j ui-w7nc43 ui-1120s5i ui-yms1uu ui-6s0dn4 ui-98rzlu ui-euugli ui-167g77z" }, o = ri(s.className, r), e[0] = r, e[1] = s, e[2] = o) : (s = e[1], o = e[2]);
  const a = s.style;
  let l;
  e[3] !== n ? (l = W7(n, 28), e[3] = n, e[4] = l) : l = e[4];
  let c;
  e[5] !== n.displayName ? (c = qne("span", { className: "ui-euugli ui-b3r6kr ui-lyipyv", children: n.displayName }), e[5] = n.displayName, e[6] = c) : c = e[6];
  let u;
  e[7] !== n.name ? (u = qne("span", { className: "ui-2lah0s ui-4b2ntj", children: n.name }), e[7] = n.name, e[8] = u) : u = e[8];
  let d;
  e[9] !== c || e[10] !== u ? (d = H$t("span", { className: "ui-78zum5 ui-1pha0wt ui-11twubx ui-1wm8ruf ui-spwq11 ui-1wd3ewq ui-b3r6kr ui-lyipyv ui-uxw1ft", children: [c, u] }), e[9] = c, e[10] = u, e[11] = d) : d = e[11];
  let h;
  e[12] !== n.description ? (h = qne("span", { className: "ui-y5h43f ui-19ji09o ui-18cvvyg ui-19aaqeu ui-b3r6kr ui-lyipyv ui-uxw1ft", children: n.description }), e[12] = n.description, e[13] = h) : h = e[13];
  let p;
  e[14] !== d || e[15] !== h ? (p = H$t("div", { className: "ui-78zum5 ui-dt5ytf ui-euugli ui-98rzlu", children: [d, h] }), e[14] = d, e[15] = h, e[16] = p) : p = e[16];
  let g;
  return e[17] !== s.style || e[18] !== o || e[19] !== l || e[20] !== p || e[21] !== i ? (g = H$t("div", { className: o, style: a, children: [l, p, i] }), e[17] = s.style, e[18] = o, e[19] = l, e[20] = p, e[21] = i, e[22] = g) : g = e[22], g;
}
function khp(t) {
  const e = JTa(38), { plugins: n, isLoading: i, hasLoaded: r, loadingText: s, onSelectPlugin: o, onBrowseMarketplace: a, stickyBrowseMarketplace: l, onImportMarketplace: c, onManagePlugins: u, menuContentRef: d, externalSearchValue: h, action: p } = t, g = i === void 0 ? false : i, f = r === void 0 ? true : r, _ = s === void 0 ? "Loading plugins..." : s, b = l === void 0 ? false : l, y = p === "add" ? "Add Plugin" : "Remove Plugin", { searchValue: S } = Dkn();
  let k;
  if (e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const J = { className: "ui-8x9d4c ui-2lah0s ui-19aaqeu ui-1s85apg ui-1qse2nd" };
    k = qne(bhp, { className: J.className, style: J.style }), e[0] = k;
  } else k = e[0];
  const C = k, T = h ?? S, I = ht1(n, T);
  let A;
  e[1] !== I ? (A = AKo(I), e[1] = I, e[2] = A) : A = e[2];
  const P = A, M = g || !f, O = b && a != null, N = `${y}s from marketplace`;
  let U;
  e[3] !== h ? (U = h === void 0 && qne(cl.SearchInput, { placeholder: "Search the marketplace" }), e[3] = h, e[4] = U) : U = e[4];
  let j;
  e[5] !== _ || e[6] !== M ? (j = M && qne(cl.LoadingState, { children: _ }), e[5] = _, e[6] = M, e[7] = j) : j = e[7];
  let $;
  e[8] !== o || e[9] !== M || e[10] !== P ? ($ = !M && P.length > 0 && P.map((J) => qne(cl.Item, { rootStyle: R2e.menuRow, onSelect: () => o(J), trailing: C, children: qne(Shp, { plugin: J }) }, J.id)), e[8] = o, e[9] = M, e[10] = P, e[11] = $) : $ = e[11];
  let H;
  e[12] !== M || e[13] !== P ? (H = !M && P.length === 0 && qne(cl.EmptyState, { children: H$t("div", { className: "ui-r931m4 ui-78zum5 ui-dt5ytf ui-6s0dn4 ui-l56j7k ui-1jnr06f", children: [qne("span", { children: "No result" }), qne("span", { children: "Try changing your search query" })] }) }), e[12] = M, e[13] = P, e[14] = H) : H = e[14];
  let G;
  e[15] !== y || e[16] !== $ || e[17] !== H || e[18] !== j ? (G = H$t(cl.Section, { title: y, rootStyle: R2e.menuSection, children: [j, $, H] }), e[15] = y, e[16] = $, e[17] = H, e[18] = j, e[19] = G) : G = e[19];
  let q;
  e[20] !== T || e[21] !== a || e[22] !== c || e[23] !== O ? (q = (c || a && !O) && !T.trim() && H$t(cl.Section, { rootStyle: R2e.menuSection, children: [c && qne(cl.Item, { rootStyle: R2e.menuRow, onSelect: c, trailing: C, children: "Import Marketplace..." }), a && !O && qne(cl.Item, { rootStyle: R2e.menuRow, onSelect: a, trailing: C, children: "Browse Marketplace" })] }), e[20] = T, e[21] = a, e[22] = c, e[23] = O, e[24] = q) : q = e[24];
  let K;
  e[25] !== u ? (K = u && qne(cl.Section, { rootStyle: R2e.menuSection, children: qne(cl.Item, { rootStyle: R2e.menuRow, onSelect: u, variant: "muted", ignoreSearch: true, trailing: C, children: "Manage plugins" }) }), e[25] = u, e[26] = K) : K = e[26];
  let V;
  e[27] !== a || e[28] !== O ? (V = O && qne(cl.Section, { noDivider: true, rootStyle: [R2e.menuSection, R2e.menuStickySection], children: qne(cl.Item, { rootStyle: R2e.menuRow, "data-testid": "add-plugin-search-browse-marketplace-sticky", onSelect: a, trailing: C, ignoreSearch: true, children: "Browse Marketplace" }) }), e[27] = a, e[28] = O, e[29] = V) : V = e[29];
  let Y;
  return e[30] !== d || e[31] !== G || e[32] !== q || e[33] !== K || e[34] !== V || e[35] !== N || e[36] !== U ? (Y = H$t(cl.Content, { ref: d, "aria-label": N, width: 260, maxHeight: 230, size: "sm", contentStyle: R2e.menuContentFlush, children: [U, G, q, K, V] }), e[30] = d, e[31] = G, e[32] = q, e[33] = K, e[34] = V, e[35] = N, e[36] = U, e[37] = Y) : Y = e[37], Y;
}
var R2e, 