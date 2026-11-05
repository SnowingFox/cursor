// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DefaultCode.js range:11076059..11093275
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.598Z
dca = L({ "DefaultCode.js"() {
  "use strict";
  E(), Va(), B5e(), Qla(), Eit(), jlS(), GRh(), KlS(), ecS(), qu(), n2h = { base: { kGuDYH: "ui-1wm8ruf", k63SB2: "ui-1lfj9qp", kLWn49: "ui-1ja60sm", kWkggS: "ui-1ua6jya", ktR8K2: "ui-1m21r4p", kKi2Bq: "ui-cj37ws", kMv6JI: "ui-13r5tfd", kLKAdn: "ui-uve7l6", kwRFfy: "ui-yri2b", kGO01o: "ui-1rgtt3y", kZCmMZ: "ui-1c1uobl", "--shiki-foreground": "ui-o9w7m5", "--shiki-background": "ui-17ewauw", "--shiki-token-constant": "ui-1vakzcb", "--shiki-token-string": "ui-105xmc4", "--shiki-token-comment": "ui-1nsav61", "--shiki-token-keyword": "ui-1jxofbz", "--shiki-token-parameter": "ui-947h55", "--shiki-token-function": "ui-ta7kcf", "--shiki-token-string-expression": "ui-1iagb1a", "--shiki-token-punctuation": "ui-ez8t0j", "--shiki-token-link": "ui-i2wo5x", "--shiki-token-tag": "ui-1iq2d2k", "--shiki-token-attribute": "ui-1qoclnz", "--shiki-token-property": "ui-k609h7", "--shiki-token-type": "ui-1rqnq8e", "--shiki-token-variable": "ui-19gwdp1", "--shiki-token-class": "ui-1yfyyyg", "--shiki-token-language-variable": "ui-1apie5d", "--shiki-token-constant-variable": "ui-dcvkk1", $$css: true } }, oca = { base: { k7Eaqz: "ui-1pshirs", ktR8K2: "ui-awy1a7", $$css: true }, wordWrap: { kzqmXN: "ui-h8yej3", k7Eaqz: "ui-euugli", ks0D6T: "ui-193iq5w", $$css: true } }, aca = { base: { k1xSpc: "ui-78zum5", kAzted: "ui-10fesj9", $$css: true }, highlighted: { kWkggS: "ui-ri19xs", $$css: true } }, lca = { base: { k7Eaqz: "ui-1264ykn", k9WMMc: "ui-p4054r", kwRFfy: "ui-t1q3vd", kMwMTN: "ui-4b2ntj", kcqcaj: "ui-ss6m8b", kGuDYH: "ui-y5h43f", kfSwDN: "ui-87ps6o", kmuXW: "ui-2lah0s", $$css: true }, highlighted: { kMwMTN: "ui-1wd3ewq", $$css: true } }, cca = { base: { kUk6DE: "ui-98rzlu", khDVqt: "ui-1sdyfia", kVQacm: "ui-b3r6kr", kg5iWk: "ui-lyipyv", kZCmMZ: "ui-1iw6539", kMwMTN: "ui-lgbajd", kwRFfy: "ui-1fg0g13", kVAEAm: "ui-1n2onr6", $$css: true }, wordWrap: { k7Eaqz: "ui-euugli", khDVqt: "ui-126k92a", kVQacm: "ui-1rea2x4", kHjlTd: "ui-j0a0fe", kg5iWk: "ui-brixnn", $$css: true } }, i2h = { base: { kVAEAm: "ui-10l6tqk", k87sOh: "ui-13vifvy", krVfgx: "ui-1ey2m1c", kzqmXN: "ui-1i1rx1s", kWkggS: "ui-1m4ooaa", kfzvcC: "ui-47corl", $$css: true } }, uca = [], r2h = { kind: "unsupported", reason: "worker-unavailable" }, s2h = () => {
  }, o2h = 8, a2h = 1e3, l2h = tcS(function(e) {
    const n = VRh(28), { tokens: i, lineNumber: r, showLineNumbers: s, isHighlighted: o, guides: a, tabSize: l, wordWrap: c } = e;
    let u;
    n[0] !== o ? (u = gn(XRh(o)), n[0] = o, n[1] = u) : u = n[1];
    const d = u;
    let h;
    n[2] !== o ? (h = gn(ZRh(o)), n[2] = o, n[3] = h) : h = n[3];
    const p = h;
    let g;
    n[4] !== c ? (g = ar({ rootClass: "ui-default-code__line-content", stylexStyles: QRh(c) }), n[4] = c, n[5] = g) : g = n[5];
    const f = g;
    let _;
    n[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = gn(JRh()), n[6] = _) : _ = n[6];
    const b = _, y = d.className, S = d.style;
    let k;
    n[7] !== r || n[8] !== p || n[9] !== s ? (k = s && mUt("span", { className: p.className, style: p.style, children: r }), n[7] = r, n[8] = p, n[9] = s, n[10] = k) : k = n[10];
    const C = f.className, T = f.style;
    let I;
    if (n[11] !== a || n[12] !== l) {
      let O;
      n[14] !== l ? (O = (N) => mUt("span", { className: b.className, style: { ...b.style, left: `${N * l}ch` }, "aria-hidden": "true" }, N), n[14] = l, n[15] = O) : O = n[15], I = a.map(O), n[11] = a, n[12] = l, n[13] = I;
    } else I = n[13];
    let A;
    n[16] !== i ? (A = i.map(ccS), n[16] = i, n[17] = A) : A = n[17];
    let P;
    n[18] !== f.className || n[19] !== f.style || n[20] !== I || n[21] !== A ? (P = ica("div", { className: C, style: T, children: [I, A] }), n[18] = f.className, n[19] = f.style, n[20] = I, n[21] = A, n[22] = P) : P = n[22];
    let M;
    return n[23] !== d.className || n[24] !== d.style || n[25] !== P || n[26] !== k ? (M = ica("div", { className: y, style: S, children: [k, P] }), n[23] = d.className, n[24] = d.style, n[25] = P, n[26] = k, n[27] = M) : M = n[27], M;
  });
} });
import { jsxs as xdi, jsx as DW, Fragment as ucS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as c2h } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as dcS, useContext as hcS, useRef as u2h, useState as pcS, useEffect as mcS, Suspense as gcS } from "./react-runtime/react/esm-index-production.js";
async function fcS() {
  await fca.preload();
}
function vcS(t) {
  const e = c2h(32), { code: n, className: i, showLineNumbers: r, startLine: s, style: o, tokens: a, wordWrap: l } = t, c = r === void 0 ? false : r, u = s === void 0 ? 1 : s, d = l === void 0 ? false : l, p = hcS(vca) === "markdown-flow";
  let g;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = { 0: { className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd" }, 1: { className: "ui-1wm8ruf ui-1lfj9qp ui-1ja60sm ui-13r5tfd ui-o9w7m5 ui-lgbajd ui-uve7l6 ui-1xpa7k ui-1rgtt3y ui-1uhho1l" } }, e[0] = g) : g = e[0];
  const f = g[(!p || a !== void 0) << 0];
  let _;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = { 0: { className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-16b7oty ui-wp9v23" }, 2: { className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1sdyfia ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc" }, 1: { className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-16b7oty ui-wp9v23 ui-126k92a ui-j0a0fe" }, 3: { className: "ui-1ghz6dp ui-1heor9g ui-jb2p0i ui-1qlqyl8 ui-15bjb6t ui-1q57ora ui-33uob6 ui-saxbkt ui-79ra4s ui-1043rbw ui-i07v4r ui-w2csxc ui-126k92a ui-j0a0fe" } }, e[1] = _) : _ = e[1];
  const b = _[!!p << 1 | !!d << 0], y = `ui-default-code${i ? ` ${i}` : ""}${f.className ? ` ${f.className}` : ""}`;
  let S;
  e[2] !== f.style || e[3] !== o ? (S = { ...f.style, ...o }, e[2] = f.style, e[3] = o, e[4] = S) : S = e[4];
  const k = S;
  if (a !== void 0) {
    let I;
    e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (I = { className: "ui-13r5tfd" }, e[5] = I) : I = e[5];
    const A = I;
    let P;
    e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (P = { className: "ui-78zum5 ui-10fesj9" }, e[6] = P) : P = e[6];
    const M = P;
    let O;
    e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (O = { className: "ui-1264ykn ui-1jkygx ui-4b2ntj ui-y5h43f ui-1hr2gdg ui-87ps6o ui-2lah0s" }, e[7] = O) : O = e[7];
    const N = O;
    let U;
    e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = { 0: { className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-1sdyfia" }, 1: { className: "ui-1iyjqo2 ui-16b7oty ui-o7x2bt ui-euugli ui-126k92a ui-j0a0fe" } }, e[8] = U) : U = e[8];
    const j = U[!!d << 0], $ = A.className, H = A.style;
    let G;
    if (e[9] !== c || e[10] !== u || e[11] !== j || e[12] !== a) {
      let V;
      e[14] !== c || e[15] !== u || e[16] !== j ? (V = (Y, J) => xdi("div", { className: `ui-default-code__line ${M.className}`, style: M.style, children: [c ? DW("span", { className: N.className, style: N.style, children: u + J }) : null, DW("div", { className: `ui-default-code__line-content ${j.className}`, style: j.style, children: Y.map(_cS) })] }, u + J), e[14] = c, e[15] = u, e[16] = j, e[17] = V) : V = e[17], G = a.map(V), e[9] = c, e[10] = u, e[11] = j, e[12] = a, e[13] = G;
    } else G = e[13];
    let q;
    e[18] !== G ? (q = DW("div", { className: $, style: H, children: G }), e[18] = G, e[19] = q) : q = e[19];
    let K;
    return e[20] !== y || e[21] !== k || e[22] !== q ? (K = DW("div", { className: y, style: k, children: q }), e[20] = y, e[21] = k, e[22] = q, e[23] = K) : K = e[23], K;
  }
  let C;
  e[24] !== n || e[25] !== b.className || e[26] !== b.style ? (C = DW("pre", { className: b.className, style: b.style, children: n }), e[24] = n, e[25] = b.className, e[26] = b.style, e[27] = C) : C = e[27];
  let T;
  return e[28] !== y || e[29] !== k || e[30] !== C ? (T = DW("div", { className: y, style: k, children: C }), e[28] = y, e[29] = k, e[30] = C, e[31] = T) : T = e[31], T;
}
function _cS(t) {
  return DW("span", { className: t.className, style: { color: t.color, ...jDr(t.fontStyle) }, children: t.content }, t.col);
}
function d2h() {
  return rNr.horizontal;
}
function hca() {
  return [{ "ui--default-marker": "ui--default-marker", $$css: true }, p2h.base];
}
function bcS(t) {
  return [_ca.base, t ? _ca.clickable : null];
}
function ycS() {
  return [kz.root, g2h.base];
}
function ScS() {
  return [Gj.root, f2h.base];
}
function pca() {
  return v2h.base;
}
function mca() {
  return _2h.base;
}
function gca(t) {
  return [sNr.base, t ? sNr.copied : null];
}
function iNr() {
  return sNr.plate;
}
function kcS(t) {
  const e = t.lastIndexOf(".");
  return e === -1 ? "" : t.slice(e + 1);
}
function wcS(t) {
  const e = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\"));
  return e === -1 ? t : t.slice(e + 1);
}
function S1t(t) {
  const e = c2h(121);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f, _, b, y, S, k, C, T, I;
  e[0] !== t ? ({ children: n, className: i, filePath: o, startLine: p, endLine: s, onHeaderClick: a, onHeaderContextMenu: l, copyText: r, copyButtonSize: _, showLineNumbers: b, showIndentGuides: y, scrollable: S, scrollMaxHeight: h, tokens: T, streaming: g, tokenization: C, scheduleWarmup: d, scheduleApply: u, wordWrap: k, viewport: I, style: f, ...c } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f, e[15] = _, e[16] = b, e[17] = y, e[18] = S, e[19] = k, e[20] = C, e[21] = T, e[22] = I) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14], _ = e[15], b = e[16], y = e[17], S = e[18], k = e[19], C = e[20], T = e[21], I = e[22]);
  const A = _ === void 0 ? "sm" : _, P = b === void 0 ? false : b, M = y === void 0 ? true : y, O = S === void 0 ? true : S, N = k === void 0 ? false : k, U = mFe(), j = u2h(null), [$, H] = pcS(false), G = u2h(void 0);
  let q, K;
  e[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = () => () => clearTimeout(G.current), K = [], e[23] = q, e[24] = K) : (q = e[23], K = e[24]), mcS(q, K);
  let V = "text";
  if (i) {
    let Et;
    if (e[25] !== i) {
      let xt;
      e[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (xt = /language-(\S+)/, e[27] = xt) : xt = e[27], Et = i.match(xt), e[25] = i, e[26] = Et;
    } else Et = e[26];
    const kt = Et;
    kt && (V = kt[1]);
  }
  if (o && V === "text") {
    let Et;
    e[28] !== o ? (Et = kcS(o), e[28] = o, e[29] = Et) : Et = e[29];
    const kt = Et;
    kt && (V = kt);
  }
  let Y, J;
  e[30] !== n ? (Y = typeof n == "string" ? n.replace(/\n$/, "") : "", J = Y ? Y.split(`
`).length : 0, e[30] = n, e[31] = Y, e[32] = J) : (Y = e[31], J = e[32]);
  const te = `calc(${J} * ${ZVo["--cursor-line-height-base"]} + 2 * ${Xvn["--cursor-spacing-1-5"]})`, ee = h !== void 0;
  let re;
  e[33] !== Y || e[34] !== r ? (re = () => {
    clearTimeout(G.current), H(true), r?.(Y), G.current = setTimeout(() => H(false), 2e3);
  }, e[33] = Y, e[34] = r, e[35] = re) : re = e[35];
  const ie = re;
  let oe;
  e[36] !== a ? (oe = () => {
    a && a();
  }, e[36] = a, e[37] = oe) : oe = e[37];
  const se = oe, le = !!o, ce = le || ee ? void 0 : te, ae = ee ? void 0 : te, de = p !== void 0 && s !== void 0 && p > 0 && s > 0, he = le && !!a;
  let ge;
  e[38] !== o ? (ge = o ? wcS(o) : "", e[38] = o, e[39] = ge) : ge = e[39];
  const pe = ge;
  if (!Y) {
    let Et;
    return e[40] !== n || e[41] !== i ? (Et = DW("code", { className: i, children: n }), e[40] = n, e[41] = i, e[42] = Et) : Et = e[42], Et;
  }
  let ve;
  e[43] !== ce || e[44] !== f ? (ve = ar({ rootClass: "ui-code-block", stylexStyles: hca(), style: { minHeight: ce, ...f } }), e[43] = ce, e[44] = f, e[45] = ve) : ve = e[45];
  const fe = ve;
  let Te;
  e[46] !== he ? (Te = ar({ rootClass: "ui-code-block-header", stylexStyles: bcS(he) }), e[46] = he, e[47] = Te) : Te = e[47];
  const _e = Te;
  let Ce;
  e[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ce = gn(ycS()), e[48] = Ce) : Ce = e[48];
  const Se = Ce;
  let Pe;
  e[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Pe = gn(ScS()), e[49] = Pe) : Pe = e[49];
  const we = Pe;
  let Ie;
  e[50] !== ae ? (Ie = ar({ rootClass: "ui-code-block-content", stylexStyles: pca(), style: { minHeight: ae } }), e[50] = ae, e[51] = Ie) : Ie = e[51];
  const Me = Ie;
  let De;
  e[52] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (De = ar({ rootClass: "ui-code-block-copy-overlay", stylexStyles: mca() }), e[52] = De) : De = e[52];
  const Ne = De;
  let be;
  e[53] !== $ ? (be = ar({ rootClass: "ui-code-block-copy", stylexStyles: gca($) }), e[53] = $, e[54] = be) : be = e[54];
  const je = be;
  let $e;
  e[55] !== U || e[56] !== pe ? ($e = U === "seti" ? DW(W5, { name: pe, size: "sm" }) : DW("span", { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1pwdyn5 ui-1vatr1o ui-2lah0s", children: DW(W5, { name: pe, size: "sm" }) }), e[55] = U, e[56] = pe, e[57] = $e) : $e = e[57];
  let Je;
  e[58] !== pe || e[59] !== Se.className || e[60] !== Se.style ? (Je = DW("span", { className: Se.className, style: Se.style, children: pe }), e[58] = pe, e[59] = Se.className, e[60] = Se.style, e[61] = Je) : Je = e[61];
  let Ge;
  e[62] !== s || e[63] !== de || e[64] !== we || e[65] !== p ? (Ge = de && xdi("span", { className: we.className, style: we.style, children: ["Ln ", p, "–", s] }), e[62] = s, e[63] = de, e[64] = we, e[65] = p, e[66] = Ge) : Ge = e[66];
  let xe;
  e[67] !== $e || e[68] !== Je || e[69] !== Ge ? (xe = xdi(ucS, { children: [$e, Je, Ge] }), e[67] = $e, e[68] = Je, e[69] = Ge, e[70] = xe) : xe = e[70];
  const Oe = xe;
  let ct;
  e[71] !== $ || e[72] !== je || e[73] !== A || e[74] !== Ne || e[75] !== r || e[76] !== ie ? (ct = r ? DW("div", { className: Ne.className, style: Ne.style, children: DW("div", { className: je.className, "data-copied": $ || void 0, style: je.style, children: DW(YRe, { "aria-label": $ ? "Copied" : "Copy code", tone: $ ? "success" : void 0, icon: "copy", onPressedChange: (Et) => {
    Et && ie();
  }, pressed: $, pressedIcon: "check", rootStyle: iNr(), size: A, variant: "outline" }) }) }) : null, e[71] = $, e[72] = je, e[73] = A, e[74] = Ne, e[75] = r, e[76] = ie, e[77] = ct) : ct = e[77];
  const Ye = ct;
  let Ve;
  e[78] !== Oe || e[79] !== se || e[80] !== le || e[81] !== _e || e[82] !== he || e[83] !== l ? (Ve = le ? he ? DW("button", { type: "button", className: _e.className, style: _e.style, "data-clickable": true, onClick: se, onContextMenu: l, children: Oe }) : DW("div", { className: _e.className, style: _e.style, onContextMenu: l, children: Oe }) : null, e[78] = Oe, e[79] = se, e[80] = le, e[81] = _e, e[82] = he, e[83] = l, e[84] = Ve) : Ve = e[84];
  const Xe = Ve, lt = V, He = p ?? 1;
  let gt;
  e[85] !== u || e[86] !== d || e[87] !== g || e[88] !== C ? (gt = LnS(C, g, d, u), e[85] = u, e[86] = d, e[87] = g, e[88] = C, e[89] = gt) : gt = e[89];
  const ht = N ? y2h : b2h;
  let Ae;
  e[90] !== Y || e[91] !== V || e[92] !== M || e[93] !== P || e[94] !== He || e[95] !== gt || e[96] !== ht || e[97] !== T || e[98] !== I || e[99] !== N ? (Ae = { code: Y, language: lt, startLine: He, showLineNumbers: P, showIndentGuides: M, tokens: T, ...gt, className: "ui-code-block-default-code", style: ht, wordWrap: N, viewport: I }, e[90] = Y, e[91] = V, e[92] = M, e[93] = P, e[94] = He, e[95] = gt, e[96] = ht, e[97] = T, e[98] = I, e[99] = N, e[100] = Ae) : Ae = e[100];
  const ot = Ae;
  let Be;
  e[101] !== ot ? (Be = DW(gcS, { fallback: DW(vcS, { ...ot }), children: DW(h2h, { ...ot }) }), e[101] = ot, e[102] = Be) : Be = e[102];
  const Ue = Be, it = N ? "vertical" : ee ? "both" : "horizontal", qe = O && (!N || ee);
  let pt;
  e[103] !== Ue || e[104] !== it || e[105] !== h || e[106] !== qe || e[107] !== N ? (pt = qe ? DW(xg, { direction: it, scrollbarVisibility: "hover", maxHeight: h, contentStyle: N ? rNr.wordWrap : it === "horizontal" ? rNr.horizontal : void 0, children: Ue }) : Ue, e[103] = Ue, e[104] = it, e[105] = h, e[106] = qe, e[107] = N, e[108] = pt) : pt = e[108];
  const dt = pt, ft = le || void 0;
  let bt;
  e[109] !== dt || e[110] !== Me.className || e[111] !== Me.style || e[112] !== Ye ? (bt = xdi("div", { className: Me.className, style: Me.style, children: [Ye, dt] }), e[109] = dt, e[110] = Me.className, e[111] = Me.style, e[112] = Ye, e[113] = bt) : bt = e[113];
  let St;
  return e[114] !== Xe || e[115] !== c || e[116] !== fe.className || e[117] !== fe.style || e[118] !== ft || e[119] !== bt ? (St = xdi("div", { ref: j, className: fe.className, "data-has-header": ft, style: fe.style, ...c, children: [Xe, bt] }), e[114] = Xe, e[115] = c, e[116] = fe.className, e[117] = fe.style, e[118] = ft, e[119] = bt, e[120] = St) : St = e[120], St;
}
var fca, h2h, p2h, vca, m2h, _ca, g2h, f2h, v2h, rNr, _2h, sNr, b2h, y2h, 