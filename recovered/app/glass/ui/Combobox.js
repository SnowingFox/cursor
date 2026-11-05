// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Combobox.js range:17950501..17956003
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.537Z
sy1 = L({ "Combobox.js"() {
  "use strict";
  E(), Va(), oWe(), E_e(), $ea(), eFe(), P7(), Qfi(), She(), Nhe(), kci(), U0p(), iy1(), pB(), Ooe(), fcp(), vcp(), bZS(), kcp(), wcp(), Ocp(), Bcp(), Ucp(), sTa(), m2(), Icp(), Jcp(), fd(), F2e = { root: { kzqmXN: "ui-1oysuqx", k7Eaqz: "ui-euugli", $$css: true }, rootWidth: (t) => [{ kzqmXN: t != null ? "ui-5lhr3w" : t, $$css: true }, { "--x-width": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }], rootHug: { kzqmXN: "ui-eq5yr9", ks0D6T: "ui-193iq5w", $$css: true }, rootHugMaxWidth: (t) => [{ ks0D6T: t != null ? "ui-f68679" : t, $$css: true }, { "--x-maxWidth": ((e) => typeof e == "number" ? e + "px" : e ?? void 0)(t) }], popupSizing: { kzqmXN: "ui-ezivpi", k7Eaqz: "ui-t0jynu", $$css: true }, backdrop: { kVAEAm: "ui-ixxii4", kpwlN0: "ui-10a8y8t", kWkggS: "ui-jbqb8w", $$css: true }, backdropZIndex: (t) => [{ kY2c9j: t != null ? "ui-r3buco" : t, $$css: true }, { "--x-zIndex": t ?? void 0 }], virtualizedList: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", $$css: true }, empty: { kLKAdn: "ui-13ly8rp ui-l6bsgv", kpe85a: "ui-1jkygx ui-lbdvbg", kGO01o: "ui-1xlntvz ui-1tsmoef", kE3dHu: "ui-1o7kk3e ui-78wcqu", kMwMTN: "ui-4b2ntj", k9WMMc: "ui-2b8uid", $$css: true } };
} });
import { jsx as H0p, jsxs as oy1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ay1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as W0p, useRef as ly1, useEffect as cy1 } from "./react-runtime/react/esm-index-production.js";
function s$r(t) {
  const e = ay1(48), { label: n, copyValue: i, className: r, copyText: s, compact: o, presentation: a, typography: l, rootClass: c, copyDescription: u } = t, d = o === void 0 ? false : o, h = a === void 0 ? "default" : a, p = l === void 0 ? "default" : l, g = c === void 0 ? q0p : c, [f, _] = W0p(false), [b, y] = W0p(false), S = ly1(null), k = i ?? n, C = p === "code-xs";
  let T, I;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = () => () => {
    S.current !== null && clearTimeout(S.current);
  }, I = [], e[0] = T, e[1] = I) : (T = e[0], I = e[1]), cy1(T, I);
  let A;
  e[2] !== s || e[3] !== k ? (A = async () => {
    if (k) {
      try {
        s ? await s(k) : await navigator.clipboard.writeText(k);
      } catch (_e) {
        console.error("[CopyableLabel] Failed to copy label text:", _e), _(false);
        return;
      }
      _(true), S.current !== null && clearTimeout(S.current), S.current = setTimeout(() => {
        _(false), S.current = null;
      }, G0p);
    }
  }, e[2] = s, e[3] = k, e[4] = A) : A = e[4];
  const P = A, M = d ? s0n.compact : null, O = b ? d ? s0n.compactHovered : s0n.hovered : null, N = h === "pill" ? s0n.pill : null;
  let U;
  e[5] !== r || e[6] !== d || e[7] !== g || e[8] !== N || e[9] !== M || e[10] !== O ? (U = ar({ rootClass: g, stylexStyles: [s0n.base, M, O, N], className: ri(d && `${g}--compact`, r) }), e[5] = r, e[6] = d, e[7] = g, e[8] = N, e[9] = M, e[10] = O, e[11] = U) : U = e[11];
  const j = U, $ = `${g}__text`, H = d ? Rwt.compact : null;
  let G;
  e[12] !== d || e[13] !== b || e[14] !== h || e[15] !== g || e[16] !== $ || e[17] !== H ? (G = ar({ rootClass: $, stylexStyles: [Rwt.base, H, b ? [Rwt.hovered, d ? Rwt.compactHovered : null] : Rwt.truncate, h === "pill" ? Rwt.pill : null], className: b ? void 0 : `${g}__text--truncate` }), e[12] = d, e[13] = b, e[14] = h, e[15] = g, e[16] = $, e[17] = H, e[18] = G) : G = e[18];
  const q = G, K = `${g}__icon`, V = d ? R_i.compact : null, Y = h === "pill" ? R_i.pill : null, J = b ? R_i.hovered : null;
  let Q;
  e[19] !== K || e[20] !== V || e[21] !== Y || e[22] !== J ? (Q = ar({ rootClass: K, stylexStyles: [R_i.base, V, Y, J] }), e[19] = K, e[20] = V, e[21] = Y, e[22] = J, e[23] = Q) : Q = e[23];
  const te = Q, ee = u ? `Copy ${u}: ${n}` : `Copy: ${n}`, re = f ? "Copied!" : ee, ie = h === "pill" ? h : void 0, oe = C ? p : void 0;
  let se, le;
  e[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (se = () => y(true), le = () => y(false), e[24] = se, e[25] = le) : (se = e[24], le = e[25]);
  const ce = f ? "Copied!" : n, ae = C ? "code" : "default", de = C ? "xs" : "md", he = C ? Rwt.codeXsLetterSpacing : void 0;
  let ge;
  e[26] !== n || e[27] !== ae || e[28] !== de || e[29] !== he || e[30] !== q.className || e[31] !== q.style ? (ge = H0p(nn, { as: "span", variant: ae, size: de, rootStyle: he, className: q.className, style: q.style, children: n }), e[26] = n, e[27] = ae, e[28] = de, e[29] = he, e[30] = q.className, e[31] = q.style, e[32] = ge) : ge = e[32];
  const pe = f ? "check" : "copy", ve = d ? "xs" : "sm";
  let fe;
  e[33] !== te.className || e[34] !== te.style || e[35] !== pe || e[36] !== ve ? (fe = H0p(zt, { className: te.className, name: pe, size: ve, style: te.style }), e[33] = te.className, e[34] = te.style, e[35] = pe, e[36] = ve, e[37] = fe) : fe = e[37];
  let Te;
  return e[38] !== P || e[39] !== j.className || e[40] !== j.style || e[41] !== re || e[42] !== ie || e[43] !== oe || e[44] !== ce || e[45] !== ge || e[46] !== fe ? (Te = oy1("button", { type: "button", className: j.className, style: j.style, "aria-label": re, "data-presentation": ie, "data-typography": oe, onClick: P, onMouseEnter: se, onMouseLeave: le, title: ce, children: [ge, fe] }), e[38] = P, e[39] = j.className, e[40] = j.style, e[41] = re, e[42] = ie, e[43] = oe, e[44] = ce, e[45] = ge, e[46] = fe, e[47] = Te) : Te = e[47], Te;
}
var s0n, Rwt, R_i, G0p, q0p, 