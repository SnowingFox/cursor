// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: FilterTabBar.js range:16399292..16405112
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.678Z
zqS = L({ "FilterTabBar.js"() {
  "use strict";
  E(), Va(), YFr(), mf(), qu(), BW(), fd(), l0a(), twt(), d0a = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kjj79g: "ui-1qughib", kOIVth: "ui-1oot3zn", k1K539: "ui-1qaq26d", kZKoxP: "ui-1e94bgo", kLKAdn: "ui-exx8yu", kpe85a: "ui-1yxiud8", kGO01o: "ui-18d9i69", kE3dHu: "ui-yab65l", k7Eaqz: "ui-euugli", $$css: true }, tabsWrap: { kGNEyG: "ui-1cy8zhl", kZKoxP: "ui-t7dq6l", $$css: true } }, h0a = { base: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kmuXW: "ui-2lah0s", $$css: true }, wrap: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", k7Eaqz: "ui-euugli", $$css: true } }, Hsp = { base: { kmuXW: "ui-2lah0s", koQZXg: "ui-a5n6uc", $$css: true } }, t8r = { actions: { k1xSpc: "ui-78zum5", kGNEyG: "ui-6s0dn4", kOIVth: "ui-ehausa", kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", k7Eaqz: "ui-euugli", kjj79g: "ui-13a6bvl", $$css: true }, search: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-1r8uery", k7Eaqz: "ui-1i9suas", ks0D6T: "ui-1ncir08", $$css: true }, right: { kmuXW: "ui-2lah0s", $$css: true } }, n8r = 20;
} });
import { jsx as C0e, jsxs as Wsp, Fragment as VqS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as KqS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function YqS(t, e) {
  return { root: [Efi.base, e === "lg" ? Efi.sizeLg : Efi.sizeMd, t === "floating" ? Efi.variantFloating : null], input: Gsp.base, count: qsp.base, extraControls: zsp.base };
}
function k$t(t) {
  const e = KqS(53), { inputRef: n, query: i, onQueryChange: r, onKeyDown: s, onFocusChange: o, matchCountLabel: a, extraControls: l, onPrevious: c, onNext: u, onClose: d, navigationDisabled: h, previousShortcut: p, nextShortcut: g, closeShortcut: f, placeholder: _, inputAriaLabel: b, variant: y, size: S, countStyle: k, showNavigation: C } = t, T = h === void 0 ? false : h, I = _ === void 0 ? "Find..." : _, A = b === void 0 ? "Find" : b, P = y === void 0 ? "floating" : y, M = S === void 0 ? "md" : S, O = C === void 0 ? true : C;
  let N;
  e[0] !== r ? (N = (ae) => {
    r(ae.target.value);
  }, e[0] = r, e[1] = N) : N = e[1];
  const U = N;
  let j;
  e[2] !== o ? (j = (ae) => {
    if (!o) return;
    const de = ae.relatedTarget;
    de instanceof Node && ae.currentTarget.contains(de) || o(true);
  }, e[2] = o, e[3] = j) : j = e[3];
  const $ = j;
  let H;
  e[4] !== o ? (H = (ae) => {
    if (!o) return;
    const de = ae.relatedTarget;
    de instanceof Node && ae.currentTarget.contains(de) || o(false);
  }, e[4] = o, e[5] = H) : H = e[5];
  const G = H, q = XqS;
  let K, V, Y, J, Q, te, ee, re;
  if (e[6] !== k || e[7] !== l || e[8] !== G || e[9] !== $ || e[10] !== U || e[11] !== A || e[12] !== n || e[13] !== a || e[14] !== s || e[15] !== I || e[16] !== i || e[17] !== M || e[18] !== P) {
    const ae = YqS(P, M), de = ar({ rootClass: "ui-floating-search-bar", stylexStyles: ae.root, className: "floating-search-bar" }), he = gn(ae.input), ge = gn(ae.count, k), pe = gn(ae.extraControls);
    K = de.className, V = de.style, Y = G, J = $, e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Q = C0e(zt, { name: "magnifying-glass", size: "base", color: "quaternary", "aria-hidden": "true" }), e[27] = Q) : Q = e[27], te = C0e(nI, { ref: n, type: "text", variant: "unfilled", size: "md", className: ri("floating-search-bar__input", he.className), style: he.style, placeholder: I, value: i, onChange: U, onKeyDown: s, spellCheck: false, autoComplete: "off", "aria-label": A }), ee = a ? C0e("span", { className: ri("floating-search-bar__count", ge.className), style: ge.style, children: a }) : null, re = l ? C0e("div", { className: ri("floating-search-bar__extra-controls", pe.className), style: pe.style, children: l }) : null, e[6] = k, e[7] = l, e[8] = G, e[9] = $, e[10] = U, e[11] = A, e[12] = n, e[13] = a, e[14] = s, e[15] = I, e[16] = i, e[17] = M, e[18] = P, e[19] = K, e[20] = V, e[21] = Y, e[22] = J, e[23] = Q, e[24] = te, e[25] = ee, e[26] = re;
  } else K = e[19], V = e[20], Y = e[21], J = e[22], Q = e[23], te = e[24], ee = e[25], re = e[26];
  let ie;
  e[28] !== T || e[29] !== g || e[30] !== u || e[31] !== c || e[32] !== p || e[33] !== O ? (ie = O ? Wsp(VqS, { children: [C0e(xs, { placement: "bottom", sameAxisOnly: true, content: C0e(ao, { title: "Previous", shortcut: p }), children: C0e(ho, { icon: "chevron-up", size: "md", iconSize: "base", "aria-label": "Previous", onClick: c, onMouseDown: q, disabled: T }) }), C0e(xs, { placement: "bottom", sameAxisOnly: true, content: C0e(ao, { title: "Next", shortcut: g }), children: C0e(ho, { icon: "chevron-down", size: "md", iconSize: "base", "aria-label": "Next", onClick: u, onMouseDown: q, disabled: T }) })] }) : null, e[28] = T, e[29] = g, e[30] = u, e[31] = c, e[32] = p, e[33] = O, e[34] = ie) : ie = e[34];
  let oe;
  e[35] !== f ? (oe = C0e(ao, { title: "Close", shortcut: f }), e[35] = f, e[36] = oe) : oe = e[36];
  let se;
  e[37] !== d ? (se = C0e(ho, { icon: "close", size: "md", iconSize: "base", "aria-label": "Close", onClick: d, onMouseDown: q }), e[37] = d, e[38] = se) : se = e[38];
  let le;
  e[39] !== oe || e[40] !== se ? (le = C0e(xs, { placement: "bottom", sameAxisOnly: true, content: oe, children: se }), e[39] = oe, e[40] = se, e[41] = le) : le = e[41];
  let ce;
  return e[42] !== K || e[43] !== V || e[44] !== Y || e[45] !== J || e[46] !== Q || e[47] !== te || e[48] !== ee || e[49] !== re || e[50] !== ie || e[51] !== le ? (ce = Wsp("div", { className: K, style: V, onBlur: Y, onFocus: J, children: [Q, te, ee, re, ie, le] }), e[42] = K, e[43] = V, e[44] = Y, e[45] = J, e[46] = Q, e[47] = te, e[48] = ee, e[49] = re, e[50] = ie, e[51] = le, e[52] = ce) : ce = e[52], ce;
}
function XqS(t) {
  t.preventDefault();
}
var Efi, Gsp, qsp, zsp, 