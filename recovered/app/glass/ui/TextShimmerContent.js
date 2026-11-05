// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TextShimmerContent.js range:15032932..15043050
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.067Z
irt = L({ "TextShimmerContent.js"() {
  "use strict";
  E(), Va(), H$h = { root: { kVAEAm: "ui-1n2onr6", $$css: true } }, W$h = { root: { k1xSpc: "ui-1lliihq", kXHlph: "ui-101abm8", kORKVm: "ui-ryxfnj", kg5iWk: "ui-lyipyv", k8aIck: "ui-jlip5", $$css: true } }, kva = { root: { kKwaWg: "ui-c079w9 ui-phioz4", kgSjnq: "ui-akli9p", kHypHr: "ui-1ta4xzc ui-15mlgz9", kBahZS: "ui-1t23j8t ui-nqxwjk", kUisrP: "ui-g7jpbn ui-1xgngqn", kKVMdj: "ui-1dtn8og ui-1aquc0h", k44tkh: "ui-1q3qbx4", kyAemX: "ui-1esw782", ko0y90: "ui-a4qsjk", $$css: true } }, G$h = { root: { kKwaWg: "ui-c079w9 ui-qrh07t ui-phioz4", kKVMdj: "ui-1dtn8og ui-xid7pc ui-1aquc0h", $$css: true } }, wva = { inherit: { "--ui-text-shimmer-base": "ui-1ptom83", "--ui-text-shimmer-highlight": "ui-rxqqkw", $$css: true }, primary: { kMwMTN: "ui-1wd3ewq", "--ui-text-shimmer-base": "ui-cf8467", "--ui-text-shimmer-highlight": "ui-17vhta", $$css: true }, secondary: { kMwMTN: "ui-19aaqeu", "--ui-text-shimmer-base": "ui-1dl6blw", "--ui-text-shimmer-highlight": "ui-17vhta", $$css: true }, tertiary: { kMwMTN: "ui-4b2ntj", "--ui-text-shimmer-base": "ui-3zfljf", "--ui-text-shimmer-highlight": "ui-1ph1pus", $$css: true } };
} });
import { jsx as l0e, jsxs as Cva, Fragment as _xS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as q$h } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as bxS } from "./react-runtime/react/esm-index-production.js";
function z$h(t) {
  return t === "default" ? "secondary" : "tertiary";
}
function yxS(t) {
  const e = q$h(21), { action: n, chevronRef: i, details: r, detailsRef: s, leadingIcon: o, loading: a, shimmerDetails: l, showChevron: c, tabularNums: u, tone: d } = t;
  let h, p, g, f;
  if (e[0] !== n || e[1] !== i || e[2] !== r || e[3] !== s || e[4] !== o || e[5] !== a || e[6] !== l || e[7] !== c || e[8] !== u || e[9] !== d) {
    const b = gn(pFr.base, (d === "muted" || d === "tertiary") && pFr.muted, u && pFr.tabularNums, a && !l && $$h(z$h(d))), y = { 0: { className: "ui-1lliihq ui-s83m0k ui-euugli ui-4b2ntj ui-qdr9cq ui-6ikm8r ui-10wlt62 ui-lyipyv ui-t3l3uh ui-7pq1vu ui-1bt1wk1" }, 2: { className: "ui-1lliihq ui-s83m0k ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-t3l3uh ui-7pq1vu ui-1bt1wk1 ui-1e4uaio ui-116yoyw" }, 1: { className: "ui-1lliihq ui-s83m0k ui-euugli ui-4b2ntj ui-qdr9cq ui-6ikm8r ui-10wlt62 ui-lyipyv ui-t3l3uh ui-7pq1vu ui-1bt1wk1 ui-ss6m8b" }, 3: { className: "ui-1lliihq ui-s83m0k ui-euugli ui-6ikm8r ui-10wlt62 ui-lyipyv ui-t3l3uh ui-7pq1vu ui-1bt1wk1 ui-1e4uaio ui-116yoyw ui-ss6m8b" } }[(d === "muted") << 1 | !!u << 0], S = { className: "ui-2lah0s ui-fdlg0y ui-1urst0s ui-1lbmi28 ui-18tq7xr ui-g01cxk ui-bthccv ui-7p49u4 ui-1tty4wy ui-p33vsb ui-4f0zl0 ui-93pzih ui-1bt1wk1" };
    if (e[14] !== o) {
      const k = { className: "ui-3nfvp2 ui-6s0dn4 ui-2lah0s ui-14ju556 ui-1urst0s" };
      h = o != null && l0e("span", { className: ri("ui-collapsible-leading-icon", k.className), style: k.style, children: o }), e[14] = o, e[15] = h;
    } else h = e[15];
    p = n != null && l0e("span", { className: ri("ui-collapsible-action", b.className), style: b.style, children: n }), g = r && l0e("span", { ref: s, className: ri("ui-collapsible-details", y.className), style: y.style, children: r }), f = c && l0e(zt, { ref: i, name: "chevron-right", className: ri("ui-collapsible-chevron", S.className), style: S.style, size: "sm" }), e[0] = n, e[1] = i, e[2] = r, e[3] = s, e[4] = o, e[5] = a, e[6] = l, e[7] = c, e[8] = u, e[9] = d, e[10] = h, e[11] = p, e[12] = g, e[13] = f;
  } else h = e[10], p = e[11], g = e[12], f = e[13];
  let _;
  return e[16] !== h || e[17] !== p || e[18] !== g || e[19] !== f ? (_ = Cva(_xS, { children: [h, p, g, f] }), e[16] = h, e[17] = p, e[18] = g, e[19] = f, e[20] = _) : _ = e[20], _;
}
function zY(t) {
  const e = q$h(79);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I;
  e[0] !== t ? ({ action: n, details: l, onDetailsClick: g, detailsButtonStyle: c, headerStyle: h, leadingIcon: p, disabled: y, expandable: S, loading: k, shimmerDetails: C, tabularNums: T, tone: I, children: r, headerRef: d, detailsRef: u, chevronRef: i, className: s, contentClassName: o, open: _, defaultOpen: a, onOpenChange: f, ...b } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C, e[21] = T, e[22] = I) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20], T = e[21], I = e[22]);
  const A = y === void 0 ? false : y, P = S === void 0 ? true : S, M = k === void 0 ? false : k, O = C === void 0 ? true : C, N = T === void 0 ? false : T, U = I === void 0 ? "default" : I, j = g !== void 0, $ = P && j, H = _ !== void 0;
  let G;
  e[23] !== a ? (G = () => a ?? false, e[23] = a, e[24] = G) : G = e[24];
  const [q, K] = bxS(G), V = H ? !!_ : q;
  let Y;
  e[25] !== H || e[26] !== f ? (Y = (ie, oe) => {
    H || K(ie), f?.(ie, oe);
  }, e[25] = H, e[26] = f, e[27] = Y) : Y = e[27];
  const J = Y;
  let Q;
  e[28] !== l || e[29] !== c || e[30] !== A || e[31] !== j || e[32] !== M || e[33] !== g || e[34] !== O ? (Q = j ? l0e("button", { type: "button", ...gn(rrt.buttonReset, rrt.detailsButton, M && O && rrt.detailsButtonShimmer, c), disabled: A, onClick: (ie) => {
    ie.stopPropagation(), g(ie);
  }, children: l }) : l, e[28] = l, e[29] = c, e[30] = A, e[31] = j, e[32] = M, e[33] = g, e[34] = O, e[35] = Q) : Q = e[35];
  const te = Q, ee = P && r != null && typeof r != "boolean";
  let re;
  if (e[36] !== n || e[37] !== J || e[38] !== i || e[39] !== r || e[40] !== s || e[41] !== o || e[42] !== a || e[43] !== l || e[44] !== u || e[45] !== A || e[46] !== P || e[47] !== ee || e[48] !== j || e[49] !== te || e[50] !== d || e[51] !== h || e[52] !== $ || e[53] !== p || e[54] !== M || e[55] !== f || e[56] !== V || e[57] !== _ || e[58] !== b || e[59] !== O || e[60] !== N || e[61] !== U) {
    const ie = { className: "ui-78zum5 ui-dt5ytf" }, oe = gn(rrt.base, P && !j ? rrt.buttonReset : rrt.presentational, P && !A && rrt.clickable, A && rrt.disabled, M && O && $$h(z$h(U)), V$h, h);
    let se;
    e[63] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = { 0: { className: "ui-jbqb8w ui-c342km ui-ng3xce ui-exx8yu ui-18d9i69 ui-1c1uobl ui-yri2b ui-dj266r ui-at24cr ui-1lziwak ui-14z9mp ui-jb2p0i ui-1pd3egz ui-1heor9g ui-1yc453h ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1wfwxd8 ui-1bqaal ui-1uczgqu ui-1725o6r ui-3nfvp2 ui-6s0dn4 ui-2lah0s ui--default-marker" }, 1: { className: "ui-jbqb8w ui-c342km ui-ng3xce ui-exx8yu ui-18d9i69 ui-1c1uobl ui-yri2b ui-dj266r ui-at24cr ui-1lziwak ui-14z9mp ui-jb2p0i ui-1pd3egz ui-1heor9g ui-1yc453h ui-1k57tk5 ui-784prv ui-1t137rt ui-9v5kkp ui-1wfwxd8 ui-1bqaal ui-1uczgqu ui-1725o6r ui-1ypdohk ui-3nfvp2 ui-6s0dn4 ui-2lah0s ui--default-marker" } }, e[63] = se) : se = e[63];
    const le = se[!A << 0], ce = { className: "ui-2lah0s ui-fdlg0y ui-1urst0s ui-1lbmi28 ui-18tq7xr ui-g01cxk ui-bthccv ui-7p49u4 ui-1tty4wy ui-p33vsb ui-4f0zl0 ui-93pzih ui-1bt1wk1" }, ae = { className: "ui-1lliihq ui-1kd3hbs ui-uan8c8 ui-1fe7yth ui-12wejat ui-6ikm8r ui-10wlt62 ui-pv8u57 ui-ua3uq3 ui-4wkmsb ui-g3p6pi ui-ptf4uz" };
    let de;
    e[64] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (de = { className: "ui-6ikm8r ui-10wlt62 ui-2lwn1j" }, e[64] = de) : de = e[64];
    const he = de, ge = { className: "ui-78zum5 ui-dt5ytf ui-1y48gol ui-1vdilah ui-1hc1fzr ui-19991ni ui-4wkmsb ui-g3p6pi ui-1bt1wk1" }, pe = ri("ui-collapsible-header", oe.className);
    let ve;
    e[65] !== oe || e[66] !== pe ? (ve = { "data-component": "collapsible-header", className: pe, style: oe.style }, e[65] = oe, e[66] = pe, e[67] = ve) : ve = e[67];
    const fe = ve, Te = P && !j;
    let _e;
    e[68] !== n || e[69] !== i || e[70] !== u || e[71] !== te || e[72] !== p || e[73] !== M || e[74] !== O || e[75] !== Te || e[76] !== N || e[77] !== U ? (_e = l0e(yxS, { action: n, chevronRef: i, details: te, detailsRef: u, leadingIcon: p, loading: M, shimmerDetails: O, showChevron: Te, tabularNums: N, tone: U }), e[68] = n, e[69] = i, e[70] = u, e[71] = te, e[72] = p, e[73] = M, e[74] = O, e[75] = Te, e[76] = N, e[77] = U, e[78] = _e) : _e = e[78];
    const Ce = _e;
    re = Cva(bva, { ...b, open: $ ? V : _, defaultOpen: $ ? void 0 : a, onOpenChange: $ ? J : f, disabled: A, "data-expandable": P ? "" : void 0, "data-loading": M ? "" : void 0, "data-tone": U, className: ri("ui-collapsible", ie.className, s), style: ie.style, children: [$ ? Cva("div", { ...fe, ref: d, onClick: () => {
      A || J(!V);
    }, children: [Ce, l0e(hFr, { "data-component": "collapsible-header", "aria-label": typeof l == "string" ? `Toggle ${l}` : "Toggle details", className: le.className, style: le.style, ...ee ? null : { "aria-controls": void 0 }, onClick: (Se) => {
      A || Se.stopPropagation();
    }, children: l0e(zt, { ref: i, name: "chevron-right", className: ri("ui-collapsible-chevron", ce.className), style: ce.style, size: "sm" }) })] }) : P ? l0e(hFr, { ...fe, ref: d, ...ee ? null : { "aria-controls": void 0 }, onClick: (Se) => {
      A || Se.stopPropagation();
    }, children: Ce }) : l0e("div", { ...fe, ref: d, children: Ce }), ee && l0e(Sva, { keepMounted: true, className: ri("ui-collapsible-content-view", ae.className), style: ae.style, children: l0e("div", { className: he.className, style: he.style, children: l0e("div", { className: ri("ui-collapsible-content", ge.className, o), style: ge.style, children: r }) }) })] }), e[36] = n, e[37] = J, e[38] = i, e[39] = r, e[40] = s, e[41] = o, e[42] = a, e[43] = l, e[44] = u, e[45] = A, e[46] = P, e[47] = ee, e[48] = j, e[49] = te, e[50] = d, e[51] = h, e[52] = $, e[53] = p, e[54] = M, e[55] = f, e[56] = V, e[57] = _, e[58] = b, e[59] = O, e[60] = N, e[61] = U, e[62] = re;
  } else re = e[62];
  return re;
}
var V$h, rrt, pFr, 