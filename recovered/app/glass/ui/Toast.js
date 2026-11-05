// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Toast.js range:18400542..18409801
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.070Z
AT1 = L({ "Toast.js"() {
  "use strict";
  E(), yT1(), TT1(), qu(), aRp = { base: { kmVPX3: "ui-1717udv", kWkggS: "ui-jbqb8w", kMzoRj: "ui-c342km", ksu8eU: "ui-ng3xce", kVAM5u: "ui-9r1u3d", kGVxlE: "ui-1gnnqk1", kaIpWk: "ui-2u8bby", kfzvcC: "ui-67bb7w", kzqmXN: "ui-1bl4301", $$css: true } }, Hwt = Object.assign((t) => {
    const e = IT1(t);
    return oRp(e);
  }, { success: (t) => vHr("success", t), error: (t) => vHr("error", t), warning: (t) => vHr("warning", t), info: (t) => vHr("info", t), dismiss: (t) => {
    _bi.dismiss(t);
  }, dismissAll: () => {
    _bi.dismiss();
  } });
} });
import { jsx as T6e, jsxs as RT1, Fragment as lRp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as E0n } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as PT1, use as MMa, useRef as cRp, useState as MT1, useLayoutEffect as uRp, useId as dRp, Children as DT1, isValidElement as NT1 } from "./react-runtime/react/esm-index-production.js";
function bbi(t) {
  const e = E0n(20), { children: n, placement: i, offset: r, openDelay: s, closeDelay: o, sameAxisOnly: a, disabled: l, maxWidth: c, onOpenChange: u } = t, d = i === void 0 ? Sbn : i, h = r === void 0 ? 8 : r, p = a === void 0 ? false : a, g = l === void 0 ? false : l, f = MMa(KPr), _ = f?.open ?? s ?? bci, b = f?.close ?? o ?? lWe;
  let y;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = gGy(), e[0] = y) : y = e[0];
  const S = y, k = cRp(null), [C, T] = MT1(false), I = MMa(Pbn);
  let A;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = (K) => {
    k.current = K, T(false);
  }, e[1] = A) : A = e[1];
  const P = A;
  let M;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = (K) => {
    k.current === K && (T(true), S.close(), k.current = null);
  }, e[2] = M) : M = e[2];
  const O = M;
  let N;
  e[3] !== u ? (N = (K) => {
    K || (k.current = null), u?.(K);
  }, e[3] = u, e[4] = N) : N = e[4];
  const U = N, j = I || C;
  let $;
  e[5] !== b || e[6] !== _ ? ($ = { handle: S, openDelay: _, closeDelay: b, markTriggerActive: P, closeIfTriggerActive: O }, e[5] = b, e[6] = _, e[7] = $) : $ = e[7];
  const H = $;
  let G;
  e[8] !== g || e[9] !== U || e[10] !== c || e[11] !== h || e[12] !== d || e[13] !== p || e[14] !== j ? (G = T6e(LT1, { disabled: g, handle: S, offset: h, onOpenChange: U, placement: d, sameAxisOnly: p, maxWidth: c, suppressPopup: j }), e[8] = g, e[9] = U, e[10] = c, e[11] = h, e[12] = d, e[13] = p, e[14] = j, e[15] = G) : G = e[15];
  let q;
  return e[16] !== n || e[17] !== H || e[18] !== G ? (q = RT1(DMa.Provider, { value: H, children: [n, G] }), e[16] = n, e[17] = H, e[18] = G, e[19] = q) : q = e[19], q;
}
function LT1(t) {
  const e = E0n(11), { handle: n, placement: i, offset: r, sameAxisOnly: s, disabled: o, maxWidth: a, suppressPopup: l, onOpenChange: c } = t, u = wO(), d = aWe(i, r, s), h = o || l;
  let p;
  e[0] !== n || e[1] !== a || e[2] !== u || e[3] !== d || e[4] !== l ? (p = (f) => {
    const { payload: _ } = f;
    return l || _?.content === null || _?.content === void 0 ? null : T6e(FT1, { align: d.align, alignOffset: d.alignOffset, collisionAvoidance: d.collisionAvoidance, handle: n, payload: _, portalRoot: u, positionMethod: d.positionMethod, side: d.side, sideOffset: d.sideOffset, maxWidth: a });
  }, e[0] = n, e[1] = a, e[2] = u, e[3] = d, e[4] = l, e[5] = p) : p = e[5];
  let g;
  return e[6] !== n || e[7] !== c || e[8] !== h || e[9] !== p ? (g = T6e(jPr, { disabled: h, disableHoverablePopup: true, handle: n, onOpenChange: c, children: p }), e[6] = n, e[7] = c, e[8] = h, e[9] = p, e[10] = g) : g = e[10], g;
}
function OT1(t) {
  const e = E0n(5), { content: n, popupRef: i } = t;
  let r, s;
  e[0] !== i ? (r = () => {
    i.current !== null && (i.current.scrollTop = 0);
  }, s = [i], e[0] = i, e[1] = r, e[2] = s) : (r = e[1], s = e[2]), uRp(r, s);
  let o;
  return e[3] !== n ? (o = typeof n == "function" ? n() : n, e[3] = n, e[4] = o) : o = e[4], o;
}
function FT1(t) {
  const e = E0n(25), { payload: n, handle: i, portalRoot: r, maxWidth: s, side: o, align: a, sideOffset: l, alignOffset: c, collisionAvoidance: u, positionMethod: d } = t, h = cRp(null), p = mna(i, n.triggerId);
  let g;
  e[0] !== p ? (g = (M) => {
    h.current = M;
    const O = p(M);
    if (M !== null) return () => {
      h.current === M && (h.current = null), O?.();
    };
  }, e[0] = p, e[1] = g) : g = e[1];
  const f = g;
  let _;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = ait(vea), e[2] = _) : _ = e[2];
  const b = _;
  let y;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = gn(v7t, mci, _ea, hRp.base, sWe), e[3] = y) : y = e[3];
  const S = y, k = r ?? void 0;
  let C;
  e[4] !== s ? (C = s !== void 0 ? { ...S.style, maxWidth: s } : S.style, e[4] = s, e[5] = C) : C = e[5];
  let T;
  e[6] !== n.content || e[7] !== n.contentKey ? (T = T6e(OT1, { content: n.content, popupRef: h }, n.contentKey), e[6] = n.content, e[7] = n.contentKey, e[8] = T) : T = e[8];
  let I;
  e[9] !== n.ariaLabel || e[10] !== f || e[11] !== C || e[12] !== T ? (I = T6e(VPr, { "aria-label": n.ariaLabel, className: S.className, "data-component": "tooltip-popup", ref: f, role: "tooltip", style: C, children: T }), e[9] = n.ariaLabel, e[10] = f, e[11] = C, e[12] = T, e[13] = I) : I = e[13];
  let A;
  e[14] !== a || e[15] !== c || e[16] !== u || e[17] !== d || e[18] !== o || e[19] !== l || e[20] !== I ? (A = T6e(zPr, { align: a, alignOffset: c, className: b.className, collisionAvoidance: u, collisionPadding: 8, positionMethod: d, side: o, sideOffset: l, style: b.style, children: I }), e[14] = a, e[15] = c, e[16] = u, e[17] = d, e[18] = o, e[19] = l, e[20] = I, e[21] = A) : A = e[21];
  let P;
  return e[22] !== k || e[23] !== A ? (P = T6e(GPr, { container: k, children: A }), e[22] = k, e[23] = A, e[24] = P) : P = e[24], P;
}
function BT1(t) {
  const e = E0n(43);
  let n, i, r, s, o, a, l, c, u, d, h, p, g;
  e[0] !== t ? ({ handle: a, children: i, content: s, contentKey: o, disabled: p, openDelay: h, closeDelay: r, "aria-label": n, id: l, onMouseEnter: u, onFocus: c, onPotentialActivate: d, ...g } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c, e[9] = u, e[10] = d, e[11] = h, e[12] = p, e[13] = g) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8], u = e[9], d = e[10], h = e[11], p = e[12], g = e[13]);
  const f = p === void 0 ? false : p, _ = dRp(), b = l ?? _;
  let y, S;
  e[14] !== i ? (y = DT1.only(i), S = NT1(y), e[14] = i, e[15] = y, e[16] = S) : (y = e[15], S = e[16]);
  const k = S;
  let C;
  e[17] !== u || e[18] !== d || e[19] !== b ? (C = (U) => {
    d?.(b), u?.(U);
  }, e[17] = u, e[18] = d, e[19] = b, e[20] = C) : C = e[20];
  const T = C;
  let I;
  e[21] !== c || e[22] !== d || e[23] !== b ? (I = (U) => {
    d?.(b), c?.(U);
  }, e[21] = c, e[22] = d, e[23] = b, e[24] = I) : I = e[24];
  const A = I, P = o ?? b;
  let M;
  e[25] !== n || e[26] !== s || e[27] !== P || e[28] !== b ? (M = { ariaLabel: n, content: s, contentKey: P, triggerId: b }, e[25] = n, e[26] = s, e[27] = P, e[28] = b, e[29] = M) : M = e[29];
  const O = M;
  if (!k) {
    let U;
    return e[30] !== i ? (U = T6e(lRp, { children: i }), e[30] = i, e[31] = U) : U = e[31], U;
  }
  let N;
  return e[32] !== y || e[33] !== r || e[34] !== f || e[35] !== a || e[36] !== A || e[37] !== T || e[38] !== h || e[39] !== O || e[40] !== b || e[41] !== g ? (N = T6e(HPr, { ...g, closeDelay: r, delay: h, disabled: f, handle: a, id: b, onFocus: A, onMouseEnter: T, payload: O, render: y }), e[32] = y, e[33] = r, e[34] = f, e[35] = a, e[36] = A, e[37] = T, e[38] = h, e[39] = O, e[40] = b, e[41] = g, e[42] = N) : N = e[42], N;
}
function UT1(t) {
  const e = E0n(26);
  let n, i, r, s, o, a, l, c;
  e[0] !== t ? ({ children: i, content: s, disabled: l, openDelay: a, closeDelay: r, "aria-label": n, id: o, ...c } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a, e[7] = l, e[8] = c) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6], l = e[7], c = e[8]);
  const u = l === void 0 ? false : l, d = MMa(DMa), h = dRp(), p = o ?? h;
  let g, f;
  if (e[9] !== d || e[10] !== p ? (g = () => {
    if (d == null) return;
    const S = d.closeIfTriggerActive;
    return () => {
      S(p);
    };
  }, f = [d, p], e[9] = d, e[10] = p, e[11] = g, e[12] = f) : (g = e[11], f = e[12]), uRp(g, f), d == null) {
    let S;
    return e[13] !== i ? (S = T6e(lRp, { children: i }), e[13] = i, e[14] = S) : S = e[14], S;
  }
  const _ = r ?? d.closeDelay ?? lWe, b = a ?? d.openDelay ?? bci;
  let y;
  return e[15] !== n || e[16] !== i || e[17] !== s || e[18] !== u || e[19] !== d.handle || e[20] !== d.markTriggerActive || e[21] !== _ || e[22] !== b || e[23] !== p || e[24] !== c ? (y = T6e(BT1, { ...c, "aria-label": n, closeDelay: _, content: s, disabled: u, handle: d.handle, id: p, onPotentialActivate: d.markTriggerActive, openDelay: b, children: i }), e[15] = n, e[16] = i, e[17] = s, e[18] = u, e[19] = d.handle, e[20] = d.markTriggerActive, e[21] = _, e[22] = b, e[23] = p, e[24] = c, e[25] = y) : y = e[25], y;
}
var hRp, DMa, 