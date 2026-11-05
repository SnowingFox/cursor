// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PopoverClose.js range:15731173..15737872
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.864Z
u4S = L({ "PopoverClose.js"() {
  E(), Okt(), Om(), VS(), HZh(), Cz(), Zb(), GSa = c4S.forwardRef(function(e, n) {
    const { render: i, className: r, style: s, disabled: o = false, nativeButton: a = true, ...l } = e, { buttonRef: c, getButtonProps: u } = wz({ disabled: o, focusableWhenDisabled: false, native: a }), { store: d } = Lkt();
    return i4S(), Lm("button", e, { ref: [n, c], props: [{ onClick(p) {
      d.setOpen(false, zd(Tli, p.nativeEvent));
    } }, l, u] });
  }), process.env.NODE_ENV !== "production" && (GSa.displayName = "PopoverClose");
} });
import { jsx as tGe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as t$t } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as d4S, useContext as h4S } from "./react-runtime/react/esm-index-production.js";
function p4S(t) {
  const e = t$t(16);
  let n, i, r, s;
  e[0] !== t ? ({ open: i, defaultOpen: s, onOpenChange: n, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = s === void 0 ? false : s, [a, l] = IW(i, o, void 0, "Popover.Root");
  let c;
  e[5] !== n || e[6] !== l ? (c = (p, g) => {
    n?.(p, g), g.isCanceled || l(p);
  }, e[5] = n, e[6] = l, e[7] = c) : c = e[7];
  const u = c;
  let d;
  e[8] !== o || e[9] !== u || e[10] !== i || e[11] !== r ? (d = tGe(H6S, { modal: false, ...r, defaultOpen: o, onOpenChange: u, open: i }), e[8] = o, e[9] = u, e[10] = i, e[11] = r, e[12] = d) : d = e[12];
  let h;
  return e[13] !== a || e[14] !== d ? (h = tGe(qSa.Provider, { value: a, children: d }), e[13] = a, e[14] = d, e[15] = h) : h = e[15], h;
}
function m4S(t) {
  const e = t$t(2);
  let n;
  return e[0] !== t ? (n = tGe(FSa, { "data-component": "popover-trigger", ...t }), e[0] = t, e[1] = n) : n = e[1], n;
}
function g4S(t) {
  const e = t$t(14), { anchor: n, children: i, placement: r, offset: s, surfaceStyle: o, positionerStyle: a, surfaceName: l, finalFocus: c, initialFocus: u, "aria-label": d } = t, h = r === void 0 ? "bottom" : r, p = s === void 0 ? 8 : s, f = wO() ?? void 0;
  let _;
  e[0] !== n || e[1] !== d || e[2] !== i || e[3] !== c || e[4] !== u || e[5] !== p || e[6] !== h || e[7] !== a || e[8] !== l || e[9] !== o ? (_ = tGe(f4S, { anchor: n, ariaLabel: d, finalFocus: c, initialFocus: u, offset: p, placement: h, positionerStyle: a, surfaceName: l, surfaceStyle: o, children: i }), e[0] = n, e[1] = d, e[2] = i, e[3] = c, e[4] = u, e[5] = p, e[6] = h, e[7] = a, e[8] = l, e[9] = o, e[10] = _) : _ = e[10];
  let b;
  return e[11] !== f || e[12] !== _ ? (b = tGe(BSa, { container: f, children: _ }), e[11] = f, e[12] = _, e[13] = b) : b = e[13], b;
}
function f4S(t) {
  const e = t$t(64), { anchor: n, children: i, placement: r, offset: s, surfaceStyle: o, positionerStyle: a, surfaceName: l, ariaLabel: c, finalFocus: u, initialFocus: d } = t, h = h4S(qSa), p = aWe(r, s, false), { zIndex: g, portalLayerStyles: f } = Yj("popover", true);
  let _;
  e[0] !== a ? (_ = ait(WSt, a), e[0] = a, e[1] = _) : _ = e[1];
  const b = _;
  let y, S, k, C, T, I, A, P, M, O, N, U, j, $, H, G, q;
  if (e[2] !== n || e[3] !== c || e[4] !== f || e[5] !== g || e[6] !== p.align || e[7] !== p.alignOffset || e[8] !== p.collisionAvoidance || e[9] !== p.positionMethod || e[10] !== p.side || e[11] !== p.sideOffset || e[12] !== b.className || e[13] !== b.style || e[14] !== l || e[15] !== o) {
    k = gn(v7t, mci, sWe, yea, o), S = jSa, U = p.align, j = p.alignOffset, $ = n, H = b.className, G = p.collisionAvoidance, q = 8, C = "popover-positioner", T = l, I = p.positionMethod, A = p.side, P = p.sideOffset;
    let J;
    e[33] !== g ? (J = g !== null ? { zIndex: g } : {}, e[33] = g, e[34] = J) : J = e[34], e[35] !== f || e[36] !== b.style || e[37] !== J ? (M = { ...b.style, ...f, ...J }, e[35] = f, e[36] = b.style, e[37] = J, e[38] = M) : M = e[38], y = $Sa, O = c, N = ri("ui-popover", k.className), e[2] = n, e[3] = c, e[4] = f, e[5] = g, e[6] = p.align, e[7] = p.alignOffset, e[8] = p.collisionAvoidance, e[9] = p.positionMethod, e[10] = p.side, e[11] = p.sideOffset, e[12] = b.className, e[13] = b.style, e[14] = l, e[15] = o, e[16] = y, e[17] = S, e[18] = k, e[19] = C, e[20] = T, e[21] = I, e[22] = A, e[23] = P, e[24] = M, e[25] = O, e[26] = N, e[27] = U, e[28] = j, e[29] = $, e[30] = H, e[31] = G, e[32] = q;
  } else y = e[16], S = e[17], k = e[18], C = e[19], T = e[20], I = e[21], A = e[22], P = e[23], M = e[24], O = e[25], N = e[26], U = e[27], j = e[28], $ = e[29], H = e[30], G = e[31], q = e[32];
  const K = h ? "Escape" : void 0;
  let V;
  e[39] !== y || e[40] !== i || e[41] !== u || e[42] !== d || e[43] !== k.style || e[44] !== l || e[45] !== K || e[46] !== O || e[47] !== N ? (V = tGe(y, { "aria-label": O, className: N, "data-block-global-shortcuts": K, "data-component": "popover-popup", "data-surface-name": l, finalFocus: u, initialFocus: d, style: k.style, children: i }), e[39] = y, e[40] = i, e[41] = u, e[42] = d, e[43] = k.style, e[44] = l, e[45] = K, e[46] = O, e[47] = N, e[48] = V) : V = e[48];
  let Y;
  return e[49] !== S || e[50] !== C || e[51] !== T || e[52] !== I || e[53] !== A || e[54] !== P || e[55] !== M || e[56] !== V || e[57] !== U || e[58] !== j || e[59] !== $ || e[60] !== H || e[61] !== G || e[62] !== q ? (Y = tGe(S, { align: U, alignOffset: j, anchor: $, className: H, collisionAvoidance: G, collisionPadding: q, "data-component": C, "data-surface-name": T, positionMethod: I, side: A, sideOffset: P, style: M, children: V }), e[49] = S, e[50] = C, e[51] = T, e[52] = I, e[53] = A, e[54] = P, e[55] = M, e[56] = V, e[57] = U, e[58] = j, e[59] = $, e[60] = H, e[61] = G, e[62] = q, e[63] = Y) : Y = e[63], Y;
}
function v4S(t) {
  const e = t$t(3);
  let n;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (n = { className: "ui-dj266r ui-14z9mp ui-fynt6u ui-1lziwak ui-1qlqyl8 ui-k50ysn" }, e[0] = n) : n = e[0];
  const i = n;
  let r;
  return e[1] !== t ? (r = tGe(HSa, { className: i.className, "data-component": "popover-title", style: i.style, ...t }), e[1] = t, e[2] = r) : r = e[2], r;
}
function _4S(t) {
  const e = t$t(3);
  let n;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (n = { className: "ui-dj266r ui-14z9mp ui-at24cr ui-1lziwak ui-1wm8ruf ui-19aaqeu" }, e[0] = n) : n = e[0];
  const i = n;
  let r;
  return e[1] !== t ? (r = tGe(WSa, { className: i.className, "data-component": "popover-description", style: i.style, ...t }), e[1] = t, e[2] = r) : r = e[2], r;
}
function b4S(t) {
  const e = t$t(2);
  let n;
  return e[0] !== t ? (n = tGe(GSa, { "data-component": "popover-close", ...t }), e[0] = t, e[1] = n) : n = e[1], n;
}
var qSa, yA, 