// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCard.types.js range:6317948..6328198
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.892Z
MPr = L({ "PreviewCard.types.js"() {
  "use strict";
  E(), fna = "never", x7t = 250;
} });
import { jsx as dWe, jsxs as FWy } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as DPr } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as vna, use as NPr, useRef as A7t, useState as BWy, useLayoutEffect as _na, useId as UWy } from "./react-runtime/react/esm-index-production.js";
function xhh(t) {
  const e = NPr(bna);
  if (e === null) throw new Error(`${t} must be used within PreviewCardLayer`);
  return e;
}
function jWy() {
  const t = NPr(yna);
  if (t === null) throw new Error("PreviewCardLayer.Popup must be inside an open PreviewCardLayer");
  return t;
}
function $Wy() {
  const t = NPr(Sna);
  if (t === null) throw new Error("PreviewCardLayer.Popup must be inside an open PreviewCardLayer");
  return t;
}
function HWy(t) {
  const e = DPr(5), { children: n } = t, i = yta();
  let r;
  e[0] !== i ? (r = { nodeId: i, open: true }, e[0] = i, e[1] = r) : r = e[1], Lci(r);
  let s;
  return e[2] !== n || e[3] !== i ? (s = dWe(Sta, { id: i, children: n }), e[2] = n, e[3] = i, e[4] = s) : s = e[4], s;
}
function jY(t) {
  const e = DPr(25), { children: n, placement: i, offset: r, sameAxisOnly: s, openDelay: o, closeDelay: a, controlledTargetId: l } = t, c = i === void 0 ? Sbn : i, u = r === void 0 ? 8 : r, d = s === void 0 ? false : s, h = o === void 0 ? x7t : o, p = a === void 0 ? lWe : a;
  let g;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = IWy(), e[0] = g) : g = e[0];
  const f = g, _ = A7t(null), b = A7t(null), y = A7t(null), S = A7t(false);
  let k;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = /* @__PURE__ */ new Map(), e[1] = k) : k = e[1];
  const C = A7t(k), T = A7t(l), [I, A] = BWy(false), P = A7t(null), M = NPr(Pbn), O = aWe(c, u, d);
  let N, U;
  e[2] !== I ? (N = () => {
    I || P.current?.unmount();
  }, U = [I], e[2] = I, e[3] = N, e[4] = U) : (N = e[3], U = e[4]), _na(N, U);
  let j;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = (le) => {
    _.current === le && (_.current = null, f.close());
  }, e[5] = j) : j = e[5];
  const $ = j;
  let H;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (H = () => {
    const le = T.current;
    if (le === void 0) return;
    const ce = le === null ? void 0 : C.current.get(le);
    if (le === null || ce === void 0 || ce.suppressed) {
      _.current = null, f.close();
      return;
    }
    _.current = ce.triggerId, f.open(ce.triggerId);
  }, e[6] = H) : H = e[6];
  const G = H;
  let q;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (q = () => {
    const le = S.current;
    S.current = false;
    const ce = b.current;
    if (ce === null) return;
    const ae = y.current;
    ae === null || ae.id !== ce || !ae.isConnected || ae.hasAttribute("data-preview-card-layer-trigger-suppressed") || !le && ae !== ae.ownerDocument.activeElement && !ae.matches(":hover") || (_.current = ce, f.open(ce));
  }, e[7] = q) : q = e[7];
  const K = q;
  let V;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (V = (le, ce) => (C.current.set(le, ce), G(), () => {
    C.current.get(le) === ce && (C.current.delete(le), G());
  }), e[8] = V) : V = e[8];
  const Y = V;
  let J, Q;
  e[9] !== l ? (J = () => {
    const le = T.current;
    if (le === void 0 && l !== void 0 && (b.current = _.current), T.current = l, l === void 0) {
      le !== void 0 && K();
      return;
    }
    le !== l && (S.current = false), G();
  }, Q = [l, G, K], e[9] = l, e[10] = J, e[11] = Q) : (J = e[10], Q = e[11]), _na(J, Q);
  let te;
  e[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (te = (le, ce) => {
    if (T.current !== void 0 && ce.reason !== "imperative-action") {
      le && ce.trigger !== void 0 && !ce.trigger.hasAttribute("data-preview-card-layer-trigger-suppressed") ? (b.current = ce.trigger.id, y.current = ce.trigger, S.current = true) : !le && ce.trigger?.id === b.current && (b.current = null, y.current = null, S.current = false), ce.cancel(), G();
      return;
    }
    if (le && ce.trigger?.hasAttribute("data-preview-card-layer-trigger-suppressed")) {
      if (ce.cancel(), T.current !== void 0) {
        G();
        return;
      }
      _.current = null, b.current = null, f.close();
      return;
    }
    if (!le && ce.reason === "trigger-focus" && ce.event instanceof FocusEvent && ce.event.relatedTarget === null && ce.event.target instanceof Element && ce.event.target.matches(":hover")) {
      ce.cancel();
      return;
    }
    !le && ce.reason !== "imperative-action" && ce.trigger?.id === b.current && (b.current = null, y.current = null, S.current = false), _.current = le ? ce.trigger?.id ?? _.current : null, T.current === void 0 && (b.current = _.current), A(le), T.current === void 0 && ce.trigger !== void 0 && (y.current = le ? ce.trigger : null);
  }, e[12] = te) : te = e[12];
  const ee = te;
  let re;
  e[13] !== p || e[14] !== M || e[15] !== h || e[16] !== O ? (re = { handle: f, instantDismiss: M, openDelay: h, closeDelay: p, positioner: O, closeIfActive: $, registerTarget: Y }, e[13] = p, e[14] = M, e[15] = h, e[16] = O, e[17] = re) : re = e[17];
  const ie = re;
  let oe;
  e[18] !== M || e[19] !== I ? (oe = dWe(CPr, { actionsRef: P, handle: f, onOpenChange: ee, children: (le) => {
    const { payload: ce } = le;
    return !M && I && ce !== void 0 ? dWe(yna.Provider, { value: ce.triggerId, children: dWe(Sna.Provider, { value: ce.contentKey, children: dWe(HWy, { children: ce.content }) }) }) : null;
  } }), e[18] = M, e[19] = I, e[20] = oe) : oe = e[20];
  let se;
  return e[21] !== n || e[22] !== ie || e[23] !== oe ? (se = FWy(bna.Provider, { value: ie, children: [n, oe] }), e[21] = n, e[22] = ie, e[23] = oe, e[24] = se) : se = e[24], se;
}
function WWy(t) {
  const e = DPr(19), { children: n, content: i, targetId: r, contentKey: s, disabled: o, openDelay: a, closeDelay: l } = t, c = o === void 0 ? false : o, { handle: u, instantDismiss: d, openDelay: h, closeDelay: p, closeIfActive: g, registerTarget: f } = xhh("PreviewCardLayer.Trigger"), _ = UWy(), b = n.props.id, y = typeof b == "string" ? b : _, S = c || d, k = s ?? y;
  let C;
  e[0] !== i || e[1] !== k || e[2] !== y ? (C = { content: i, contentKey: k, triggerId: y }, e[0] = i, e[1] = k, e[2] = y, e[3] = C) : C = e[3];
  const T = C;
  let I, A;
  e[4] !== g || e[5] !== f || e[6] !== S || e[7] !== r || e[8] !== y ? (I = () => {
    const U = r === void 0 ? void 0 : f(r, { triggerId: y, suppressed: S });
    return S && g(y), () => {
      U?.(), g(y);
    };
  }, A = [g, f, S, r, y], e[4] = g, e[5] = f, e[6] = S, e[7] = r, e[8] = y, e[9] = I, e[10] = A) : (I = e[9], A = e[10]), _na(I, A);
  const P = l ?? p, M = a ?? h, O = S ? "" : void 0;
  let N;
  return e[11] !== n || e[12] !== u || e[13] !== T || e[14] !== P || e[15] !== M || e[16] !== O || e[17] !== y ? (N = dWe(xPr, { closeDelay: P, delay: M, handle: u, id: y, payload: T, "data-preview-card-layer-trigger-suppressed": O, render: n }), e[11] = n, e[12] = u, e[13] = T, e[14] = P, e[15] = M, e[16] = O, e[17] = y, e[18] = N) : N = e[18], N;
}
function GWy(t) {
  const e = DPr(61), { ariaLabel: n, children: i, maxHeight: r, surfaceClassName: s, surfaceStyle: o } = t, { handle: a, positioner: l } = xhh("PreviewCardLayer.Popup"), c = jWy(), u = $Wy(), d = wO(), h = mna(a, c), { portalLayerStyles: p } = Yj("tooltip", true);
  let g;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = ait(fea), e[0] = g) : g = e[0];
  const f = g;
  let _, b, y, S, k, C, T, I, A, P, M, O, N, U, j, $, H, G;
  e[1] !== n || e[2] !== u || e[3] !== p || e[4] !== d || e[5] !== l.align || e[6] !== l.alignOffset || e[7] !== l.collisionAvoidance || e[8] !== l.positionMethod || e[9] !== l.side || e[10] !== l.sideOffset || e[11] !== s || e[12] !== o ? (S = gn(v7t, mci, bea, sWe, yea, o), y = IPr, P = d ?? void 0, b = RPr, j = l.align, $ = l.alignOffset, H = f.className, G = l.collisionAvoidance, k = 8, C = l.positionMethod, T = l.side, I = l.sideOffset, e[31] !== p ? (A = { ...f.style, ...p }, e[31] = p, e[32] = A) : A = e[32], _ = PPr, M = n, O = "preview-card-layer-popup", N = u, U = ri("ui-preview-card-layer", s, S.className), e[1] = n, e[2] = u, e[3] = p, e[4] = d, e[5] = l.align, e[6] = l.alignOffset, e[7] = l.collisionAvoidance, e[8] = l.positionMethod, e[9] = l.side, e[10] = l.sideOffset, e[11] = s, e[12] = o, e[13] = _, e[14] = b, e[15] = y, e[16] = S, e[17] = k, e[18] = C, e[19] = T, e[20] = I, e[21] = A, e[22] = P, e[23] = M, e[24] = O, e[25] = N, e[26] = U, e[27] = j, e[28] = $, e[29] = H, e[30] = G) : (_ = e[13], b = e[14], y = e[15], S = e[16], k = e[17], C = e[18], T = e[19], I = e[20], A = e[21], P = e[22], M = e[23], O = e[24], N = e[25], U = e[26], j = e[27], $ = e[28], H = e[29], G = e[30]);
  let q;
  e[33] !== i || e[34] !== r ? (q = r === void 0 ? i : dWe(xg, { maxHeight: `min(${typeof r == "number" ? `${r}px` : r}, var(--available-height, 100vh))`, scrollbarVisibility: fna, children: i }), e[33] = i, e[34] = r, e[35] = q) : q = e[35];
  let K;
  e[36] !== _ || e[37] !== S.style || e[38] !== h || e[39] !== q || e[40] !== M || e[41] !== O || e[42] !== N || e[43] !== U ? (K = dWe(_, { "aria-label": M, "data-component": O, className: U, ref: h, role: "dialog", style: S.style, children: q }, N), e[36] = _, e[37] = S.style, e[38] = h, e[39] = q, e[40] = M, e[41] = O, e[42] = N, e[43] = U, e[44] = K) : K = e[44];
  let V;
  e[45] !== b || e[46] !== k || e[47] !== C || e[48] !== T || e[49] !== I || e[50] !== A || e[51] !== K || e[52] !== j || e[53] !== $ || e[54] !== H || e[55] !== G ? (V = dWe(b, { align: j, alignOffset: $, className: H, collisionAvoidance: G, collisionPadding: k, positionMethod: C, side: T, sideOffset: I, style: A, children: K }), e[45] = b, e[46] = k, e[47] = C, e[48] = T, e[49] = I, e[50] = A, e[51] = K, e[52] = j, e[53] = $, e[54] = H, e[55] = G, e[56] = V) : V = e[56];
  let Y;
  return e[57] !== y || e[58] !== P || e[59] !== V ? (Y = dWe(y, { container: P, children: V }), e[57] = y, e[58] = P, e[59] = V, e[60] = Y) : Y = e[60], Y;
}
var bna, yna, Sna, 