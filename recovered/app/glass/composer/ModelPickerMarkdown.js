// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelPickerMarkdown.js range:15394788..15403691
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Lz
// wrapper-init: $he
// hoisted-owner: TextRoll.js (app-out-vs-workbench-workbench-glass-main-js:2377); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var $he = L({ "ModelPickerMarkdown.js"() {
  "use strict";
  E(), Lz();
} });
import { jsx as vmi, jsxs as n3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as i3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as r3S, useEffect as cVh } from "./react-runtime/react/esm-index-production.js";
function s3S(t, e) {
  return [Ljt.base, e === "left" ? Ljt.alignLeft : Ljt.alignCenter, t === "fade" ? Ljt.clippingFade : null, t === "none" ? Ljt.clippingNone : null, t === "wrap" ? Ljt.clippingWrap : null];
}
function o3S(t) {
  return [_mi.base, t === "fade" ? _mi.clippingFade : null, t === "none" ? _mi.clippingNone : null, t === "wrap" ? _mi.clippingWrap : null];
}
function uVh({ clipping: t, fade: e, slot: n, status: i, textWrapStyle: r = "balance" }) {
  return [qFe.base, t === "fade" ? qFe.clippingFade : null, t === "none" ? qFe.clippingNone : null, t === "wrap" ? qFe.clippingWrap : null, t === "wrap" && r === "auto" ? qFe.wrapStyleAuto : null, n === "previous" ? qFe.previousReducedMotion : null, l3S({ fade: e, slot: n, status: i })];
}
function a3S() {
  return hVh.root;
}
function l3S({ fade: t, slot: e, status: n }) {
  return e === "current" && n === "idle" ? null : e === "current" ? t ? qFe.enterFade : qFe.enter : t ? qFe.exitFade : qFe.exit;
}
function dVh(t, e, n = Date.now()) {
  return { currentSinceMs: n, currentKey: e, currentText: t, sequence: 0, status: "idle" };
}
function c3S(t, e, n, i, r, s) {
  return i ? t.status === "idle" && t.currentKey === n && t.currentText === e ? t : dVh(e, n, s) : t.currentKey === n && t.currentText === e || r > 0 && s - t.currentSinceMs < r ? t : { currentSinceMs: s, currentKey: n, currentText: e, previousKey: t.currentKey, previousText: t.currentText, sequence: t.sequence + 1, status: "rolling" };
}
function GFe(t) {
  const e = i3S(106);
  let n, i, r, s, o, a, l, c, u, d, h, p, g, f;
  e[0] !== t ? ({ text: f, textKey: a, align: l, clipping: c, textWrapStyle: u, disabled: d, fade: h, minHoldMs: p, renderText: s, shimmer: g, className: n, ref: r, style: o, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g, e[14] = f) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13], f = e[14]);
  const _ = a === void 0 ? f : a, b = l === void 0 ? "left" : l, y = c === void 0 ? "default" : c, S = u === void 0 ? "balance" : u, k = d === void 0 ? false : d, C = h === void 0 ? false : h, T = p === void 0 ? 0 : p, I = g === void 0 ? false : g;
  let A;
  e[15] !== f || e[16] !== _ ? (A = () => dVh(f, _), e[15] = f, e[16] = _, e[17] = A) : A = e[17];
  const [P, M] = r3S(A);
  let O;
  if (e[18] !== k || e[19] !== T || e[20] !== P || e[21] !== f || e[22] !== _) {
    const he = Date.now();
    O = c3S(P, f, _, k, T, he), e[18] = k, e[19] = T, e[20] = P, e[21] = f, e[22] = _, e[23] = O;
  } else O = e[23];
  const N = O;
  N !== P && M(N);
  let U, j;
  e[24] !== N.sequence || e[25] !== N.status ? (U = () => {
    if (N.status !== "rolling") return;
    const he = N.sequence, ge = window.setTimeout(() => {
      M((pe) => pe.sequence === he ? { currentSinceMs: pe.currentSinceMs, currentKey: pe.currentKey, currentText: pe.currentText, sequence: pe.sequence, status: "idle" } : pe);
    }, bmi);
    return () => {
      window.clearTimeout(ge);
    };
  }, j = [N.sequence, N.status], e[24] = N.sequence, e[25] = N.status, e[26] = U, e[27] = j) : (U = e[26], j = e[27]), cVh(U, j);
  let $, H;
  e[28] !== k || e[29] !== T || e[30] !== N.currentKey || e[31] !== N.currentSinceMs || e[32] !== N.currentText || e[33] !== f || e[34] !== _ ? ($ = () => {
    if (k || T <= 0 || !(N.currentKey !== _ || N.currentText !== f)) return;
    const ge = Math.max(0, N.currentSinceMs + T - Date.now()), pe = window.setTimeout(() => {
      M((ve) => ve.currentKey === _ && ve.currentText === f ? ve : { currentSinceMs: Date.now(), currentKey: _, currentText: f, previousKey: ve.currentKey, previousText: ve.currentText, sequence: ve.sequence + 1, status: "rolling" });
    }, ge);
    return () => {
      window.clearTimeout(pe);
    };
  }, H = [k, T, N.currentKey, N.currentSinceMs, N.currentText, f, _], e[28] = k, e[29] = T, e[30] = N.currentKey, e[31] = N.currentSinceMs, e[32] = N.currentText, e[33] = f, e[34] = _, e[35] = $, e[36] = H) : ($ = e[35], H = e[36]), cVh($, H);
  const G = I === true && s === void 0, q = String(N.currentText);
  let K;
  if (e[37] !== y || e[38] !== C || e[39] !== s || e[40] !== G || e[41] !== N.currentKey || e[42] !== N.currentText || e[43] !== N.previousKey || e[44] !== N.previousText || e[45] !== N.sequence || e[46] !== N.status || e[47] !== S) {
    K = [];
    let he;
    e[49] !== y || e[50] !== s || e[51] !== G ? (he = (Pe) => {
      const we = String(Pe), Ie = s === void 0 ? we : s(we);
      return G ? vmi(VWe, { color: "inherit", truncation: y === "default" ? "ellipsis" : "none", children: we }) : Ie;
    }, e[49] = y, e[50] = s, e[51] = G, e[52] = he) : he = e[52];
    const ge = he;
    if (N.status === "rolling" && N.previousText !== void 0) {
      let Pe;
      e[53] !== y || e[54] !== C || e[55] !== N.status || e[56] !== S ? (Pe = ar({ rootClass: "ui-text-roll__item", stylexStyles: uVh({ clipping: y, fade: C, slot: "previous", status: N.status, textWrapStyle: S }) }), e[53] = y, e[54] = C, e[55] = N.status, e[56] = S, e[57] = Pe) : Pe = e[57];
      const we = Pe, Ie = we.className, Me = `previous-${N.sequence}-${String(N.previousKey)}`, De = we.style;
      let Ne;
      e[58] !== ge || e[59] !== N.previousText ? (Ne = ge(N.previousText), e[58] = ge, e[59] = N.previousText, e[60] = Ne) : Ne = e[60];
      let be;
      e[61] !== we.className || e[62] !== we.style || e[63] !== Me || e[64] !== Ne ? (be = vmi("span", { "aria-hidden": true, className: Ie, "data-slot": "previous", style: De, children: Ne }, Me), e[61] = we.className, e[62] = we.style, e[63] = Me, e[64] = Ne, e[65] = be) : be = e[65], K.push(be);
    }
    let pe;
    e[66] !== y || e[67] !== C || e[68] !== N.status || e[69] !== S ? (pe = ar({ rootClass: "ui-text-roll__item", stylexStyles: uVh({ clipping: y, fade: C, slot: "current", status: N.status, textWrapStyle: S }) }), e[66] = y, e[67] = C, e[68] = N.status, e[69] = S, e[70] = pe) : pe = e[70];
    const ve = pe, fe = ve.className, Te = `current-${N.sequence}-${String(N.currentKey)}`, _e = ve.style;
    let Ce;
    e[71] !== ge || e[72] !== N.currentText ? (Ce = ge(N.currentText), e[71] = ge, e[72] = N.currentText, e[73] = Ce) : Ce = e[73];
    let Se;
    e[74] !== ve.className || e[75] !== ve.style || e[76] !== Te || e[77] !== Ce ? (Se = vmi("span", { "aria-hidden": true, className: fe, "data-slot": "current", style: _e, children: Ce }, Te), e[74] = ve.className, e[75] = ve.style, e[76] = Te, e[77] = Ce, e[78] = Se) : Se = e[78], K.push(Se), e[37] = y, e[38] = C, e[39] = s, e[40] = G, e[41] = N.currentKey, e[42] = N.currentText, e[43] = N.previousKey, e[44] = N.previousText, e[45] = N.sequence, e[46] = N.status, e[47] = S, e[48] = K;
  } else K = e[48];
  const V = K;
  let Y;
  e[79] !== b || e[80] !== n || e[81] !== y || e[82] !== o ? (Y = ar({ rootClass: "ui-text-roll", stylexStyles: s3S(y, b), className: n, style: o }), e[79] = b, e[80] = n, e[81] = y, e[82] = o, e[83] = Y) : Y = e[83];
  const J = Y;
  let Q;
  e[84] !== y ? (Q = gn(o3S(y)), e[84] = y, e[85] = Q) : Q = e[85];
  const te = Q;
  let ee;
  e[86] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ee = gn(a3S()), e[86] = ee) : ee = e[86];
  const re = ee, ie = b === "left" ? void 0 : b, oe = y === "wrap" ? S : void 0, se = C ? "true" : void 0, le = G ? "true" : void 0;
  let ce;
  e[87] !== te.className || e[88] !== te.style || e[89] !== V ? (ce = vmi("span", { "aria-hidden": true, className: te.className, style: te.style, children: V }), e[87] = te.className, e[88] = te.style, e[89] = V, e[90] = ce) : ce = e[90];
  let ae;
  e[91] !== q ? (ae = vmi("span", { className: re.className, "data-sr-only": true, style: re.style, children: q }), e[91] = q, e[92] = ae) : ae = e[92];
  let de;
  return e[93] !== y || e[94] !== i || e[95] !== r || e[96] !== J.className || e[97] !== J.style || e[98] !== N.status || e[99] !== ie || e[100] !== oe || e[101] !== se || e[102] !== le || e[103] !== ce || e[104] !== ae ? (de = n3S(nn, { ref: r, className: J.className, "data-align": ie, "data-clipping": y, "data-text-wrap-style": oe, "data-fade": se, "data-shimmer": le, "data-status": N.status, style: J.style, ...i, children: [ce, ae] }), e[93] = y, e[94] = i, e[95] = r, e[96] = J.className, e[97] = J.style, e[98] = N.status, e[99] = ie, e[100] = oe, e[101] = se, e[102] = le, e[103] = ce, e[104] = ae, e[105] = de) : de = e[105], de;
}
var Ljt, _mi, qFe, hVh, bmi, p6r, 