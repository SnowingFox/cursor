// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PromptInputImageAnnotation.js range:17408002..17421519
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, uxa
// wrapper-init: Ac1
// hoisted-owner: PromptInputImageGrid.js (app-out-vs-workbench-workbench-glass-main-js:2949); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var Ac1 = L({ "PromptInputImageAnnotation.js"() {
  "use strict";
  E(), uxa();
} });
import { jsxs as Iwn, jsx as i$, Fragment as Rc1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as hxa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as jvi, useRef as MUr, useEffect as Pc1, useCallback as DUr } from "./react-runtime/react/esm-index-production.js";
function Mc1() {
  return Cae.grid;
}
function Dc1() {
  return { root: Cae.root, lightboxItem: Cae.lightboxItem, image: Cae.image, fullscreenContent: Cae.fullscreenContent, fullscreenActions: Cae.fullscreenActions, fullscreenAction: Cae.fullscreenAction, fullscreenActionIcon: Cae.fullscreenActionIcon, fullscreenActionLabel: Cae.fullscreenActionLabel, fullscreenImage: Cae.fullscreenImage, fullscreenStage: Cae.fullscreenStage };
}
function R_p(t) {
  const e = hxa(64), { images: n, videos: i, thumbnailHeight: r, onRemove: s, onVideoClick: o, onVideoRemove: a, onImageClick: l, getFullscreenActions: c, onFullscreenContextMenu: u, onSaveDrawing: d, className: h } = t;
  let p;
  e[0] !== i ? (p = i === void 0 ? [] : i, e[0] = i, e[1] = p) : p = e[1];
  const g = p, f = r === void 0 ? 64 : r;
  let _;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = {}, e[2] = _) : _ = e[2];
  const [b, y] = jvi(_), [S, k] = jvi(null), C = MUr(null);
  let T;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = (fe, Te) => {
    y((_e) => _e[fe] === Te ? _e : { ..._e, [fe]: Te });
  }, e[3] = T) : T = e[3];
  const I = T, A = Dc1(), P = Efp();
  let M;
  e[4] !== h || e[5] !== P ? (M = ar({ rootClass: "ui-prompt-input-image-grid", stylexStyles: [Mc1(), P?.variant === "dynamic-island" && Cae.gridDynamicIsland, P?.variant === "dynamic-island" && !P.isDynamicIslandActive && Cae.gridDynamicIslandInactive], className: h }), e[4] = h, e[5] = P, e[6] = M) : M = e[6];
  const O = M, N = gn(A.fullscreenContent), U = gn(A.fullscreenActions), j = gn(A.fullscreenAction), $ = gn(A.fullscreenActionIcon), H = gn(A.fullscreenActionLabel), G = gn(A.fullscreenImage), q = gn(A.fullscreenStage);
  let K;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (K = () => {
    C.current !== null && (window.clearTimeout(C.current), C.current = null);
  }, e[7] = K) : K = e[7];
  const V = K;
  let Y, J;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Y = () => V, J = [V], e[8] = Y, e[9] = J) : (Y = e[8], J = e[9]), Pc1(Y, J);
  let Q;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Q = () => {
    V(), C.current = window.setTimeout(() => {
      k(null), C.current = null;
    }, D_p);
  }, e[10] = Q) : Q = e[10];
  const te = Q;
  let ee;
  e[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ee = async (fe, Te) => {
    await fe.run() && (k(Te), te());
  }, e[11] = ee) : ee = e[11];
  const re = ee;
  let ie;
  e[12] !== j.className || e[13] !== j.style || e[14] !== $.className || e[15] !== $.style || e[16] !== H.className || e[17] !== H.style ? (ie = (fe, Te, _e) => {
    const Ce = fe.id === "copyImage", Se = Oc1(fe.id, _e), Pe = Ce && _e ? "Copied" : fe.label;
    return Iwn("button", { type: "button", className: j.className, style: j.style, "aria-label": Pe, onClick: () => {
      if (Ce) {
        re(fe, Te);
        return;
      }
      fe.run();
    }, children: [i$(zt, { name: Se, size: 14, className: $.className, style: $.style }), i$("span", { className: H.className, style: H.style, children: Pe })] }, fe.id);
  }, e[12] = j.className, e[13] = j.style, e[14] = $.className, e[15] = $.style, e[16] = H.className, e[17] = H.style, e[18] = ie) : ie = e[18];
  const oe = ie;
  if (n.length === 0 && g.length === 0) return null;
  const se = O.className, le = O.style;
  let ce;
  if (e[19] !== b || e[20] !== A || e[21] !== n || e[22] !== l || e[23] !== s || e[24] !== f) {
    let fe;
    e[26] !== b || e[27] !== A || e[28] !== l || e[29] !== s || e[30] !== f ? (fe = (Te, _e) => i$(Fc1, { image: Te, itemIndex: _e, thumbnailHeight: f, aspectRatio: b[Te.id], styles: A, onAspectRatioChange: I, onRemove: s, onClick: l }, Te.id), e[26] = b, e[27] = A, e[28] = l, e[29] = s, e[30] = f, e[31] = fe) : fe = e[31], ce = n.map(fe), e[19] = b, e[20] = A, e[21] = n, e[22] = l, e[23] = s, e[24] = f, e[25] = ce;
  } else ce = e[25];
  let ae;
  if (e[32] !== o || e[33] !== a || e[34] !== f || e[35] !== g) {
    let fe;
    e[37] !== o || e[38] !== a || e[39] !== f ? (fe = (Te) => i$(Mfp, { attachment: Te, thumbnailHeight: f, onClick: o, onRemove: a }, Te.id), e[37] = o, e[38] = a, e[39] = f, e[40] = fe) : fe = e[40], ae = g.map(fe), e[32] = o, e[33] = a, e[34] = f, e[35] = g, e[36] = ae;
  } else ae = e[36];
  let de;
  e[41] !== O.className || e[42] !== O.style || e[43] !== ce || e[44] !== ae ? (de = Iwn(AM.Grid, { className: se, style: le, children: [ce, ae] }), e[41] = O.className, e[42] = O.style, e[43] = ce, e[44] = ae, e[45] = de) : de = e[45];
  const he = de;
  if (n.length === 0) return he;
  let ge;
  e[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (ge = i$(AM.Backdrop, {}), e[46] = ge) : ge = e[46];
  let pe;
  e[47] !== S || e[48] !== j || e[49] !== H || e[50] !== U || e[51] !== N || e[52] !== G || e[53] !== q || e[54] !== c || e[55] !== n || e[56] !== u || e[57] !== d || e[58] !== oe ? (pe = Iwn(AM.Portal, { children: [ge, i$(Nc1, { copiedImageId: S, fullscreenActionAttrs: j, fullscreenActionLabelAttrs: H, fullscreenActionsAttrs: U, fullscreenContentAttrs: N, fullscreenImageAttrs: G, fullscreenStageAttrs: q, getFullscreenActions: c, images: n, onFullscreenContextMenu: u, onSaveDrawing: d, renderFullscreenAction: oe })] }), e[47] = S, e[48] = j, e[49] = H, e[50] = U, e[51] = N, e[52] = G, e[53] = q, e[54] = c, e[55] = n, e[56] = u, e[57] = d, e[58] = oe, e[59] = pe) : pe = e[59];
  let ve;
  return e[60] !== n.length || e[61] !== he || e[62] !== pe ? (ve = Iwn(AM.Root, { itemCount: n.length, children: [he, pe] }), e[60] = n.length, e[61] = he, e[62] = pe, e[63] = ve) : ve = e[63], ve;
}
function P_p(t) {
  return t.length === 0 ? t : [];
}
function Nc1({ copiedImageId: t, fullscreenActionAttrs: e, fullscreenActionLabelAttrs: n, fullscreenActionsAttrs: i, fullscreenContentAttrs: r, fullscreenImageAttrs: s, fullscreenStageAttrs: o, getFullscreenActions: a, images: l, onFullscreenContextMenu: c, onSaveDrawing: u, renderFullscreenAction: d }) {
  const { activeIndex: h, close: p, open: g } = Zit(), [f, _] = jvi([]), [b, y] = jvi(false), S = MUr(null), k = MUr(f), C = MUr(false);
  k.current = f;
  const T = u !== void 0, I = h !== null ? l[h] : l[0], A = g && I ? I.id : null, [P, M] = jvi(A);
  P !== A && (M(A), _(P_p));
  const O = P === A ? f : [], N = O.length > 0, U = I ? a?.(I) ?? [] : [], j = DUr(() => {
    _(P_p);
  }, []), $ = DUr(() => {
    _((K) => K.length === 0 ? K : K.slice(0, -1));
  }, []), H = DUr((K) => {
    !T || C.current || !(YQ() ? K.metaKey : K.ctrlKey) || K.shiftKey || K.altKey || K.key.toLowerCase() !== "z" || ($(), K.preventDefault(), K.stopPropagation());
  }, [T, $]), G = DUr(async () => {
    if (!I || !u || C.current) return;
    const K = k.current;
    if (K.length === 0) return;
    const V = S.current;
    if (V) try {
      C.current = true, y(true);
      const Y = await cxa({ image: V, strokes: K });
      await u({ image: I, bytes: Y.bytes, width: Y.width, height: Y.height }), j(), p();
    } catch {
      return;
    } finally {
      C.current = false, y(false);
    }
  }, [I, p, j, u]), q = (K) => {
    !c || !I || (K.preventDefault(), K.stopPropagation(), c(K, I, U));
  };
  return i$(AM.Popup, { "aria-label": "Image preview", closeOnBackdropClick: !N, closeOnEscape: !N, onKeyDown: H, children: I ? Iwn("div", { className: r.className, style: r.style, children: [i$(Lc1, { activeImageId: I.id, copied: t === I.id, drawingEnabled: T, fullscreenActionAttrs: e, fullscreenActionLabelAttrs: n, fullscreenActions: U, fullscreenActionsAttrs: i, hasCurrentAnnotationDraft: N, isSavingAnnotation: b, onCancelAnnotation: j, onSaveAnnotation: () => {
    G();
  }, onUndoAnnotation: $, renderFullscreenAction: d }), T ? i$("div", { className: o.className, style: o.style, children: i$(xc1, { disabled: b, image: I, imageRef: S, onContextMenu: q, onStrokesChange: _, strokes: O }, I.id) }) : i$("img", { src: I.url, alt: I.alt ?? "Attached image", className: s.className, style: s.style, onContextMenu: q })] }) : null });
}
function Lc1(t) {
  const e = hxa(16), { activeImageId: n, copied: i, drawingEnabled: r, fullscreenActionAttrs: s, fullscreenActionLabelAttrs: o, fullscreenActions: a, fullscreenActionsAttrs: l, hasCurrentAnnotationDraft: c, isSavingAnnotation: u, onCancelAnnotation: d, onSaveAnnotation: h, onUndoAnnotation: p, renderFullscreenAction: g } = t, f = r && c;
  if (!f && a.length === 0) return null;
  let _;
  e[0] !== n || e[1] !== i || e[2] !== s || e[3] !== o || e[4] !== a || e[5] !== u || e[6] !== d || e[7] !== h || e[8] !== p || e[9] !== g || e[10] !== f ? (_ = f ? Iwn(Rc1, { children: [i$("button", { type: "button", className: s.className, style: s.style, "aria-label": "Undo", disabled: u, onClick: p, children: i$("span", { className: o.className, style: o.style, children: "Undo" }) }), i$("button", { type: "button", className: s.className, style: s.style, "aria-label": "Cancel", disabled: u, onClick: d, children: i$("span", { className: o.className, style: o.style, children: "Cancel" }) }), i$(An, { "aria-label": "Save", disabled: u, onClick: h, rounded: true, size: "lg", variant: "primary", children: "Save" })] }) : a.map((y) => g(y, n, i)), e[0] = n, e[1] = i, e[2] = s, e[3] = o, e[4] = a, e[5] = u, e[6] = d, e[7] = h, e[8] = p, e[9] = g, e[10] = f, e[11] = _) : _ = e[11];
  let b;
  return e[12] !== l.className || e[13] !== l.style || e[14] !== _ ? (b = i$("div", { className: l.className, style: l.style, children: _ }), e[12] = l.className, e[13] = l.style, e[14] = _, e[15] = b) : b = e[15], b;
}
function Oc1(t, e) {
  switch (t) {
    case "copyImage":
      return e ? "check" : "copy";
    case "saveImageAs":
      return "arrow-down";
  }
}
function Fc1(t) {
  const e = hxa(48), { image: n, itemIndex: i, thumbnailHeight: r, aspectRatio: s, styles: o, onAspectRatioChange: a, onRemove: l, onClick: c } = t;
  let u;
  e[0] !== r ? (u = Number.isFinite(r) ? Math.max(1, r) : 64, e[0] = r, e[1] = u) : u = e[1];
  const d = u;
  let h;
  e[2] !== s || e[3] !== d ? (h = Math.round(Math.max(40, Math.min(220, d * (s ?? 1)))), e[2] = s, e[3] = d, e[4] = h) : h = e[4];
  const g = `${h}px`, f = `${d}px`;
  let _;
  if (e[5] !== o.root || e[6] !== g || e[7] !== f) {
    const V = { "--ui-prompt-input-image-preview-width": g, "--ui-prompt-input-image-preview-height": f };
    _ = ar({ rootClass: "ui-prompt-input-image-preview", stylexStyles: [o.root, M_p], style: V }), e[5] = o.root, e[6] = g, e[7] = f, e[8] = _;
  } else _ = e[8];
  const b = _;
  let y;
  e[9] !== o.lightboxItem ? (y = gn(o.lightboxItem), e[9] = o.lightboxItem, e[10] = y) : y = e[10];
  const S = y;
  let k;
  e[11] !== o.image ? (k = gn(o.image), e[11] = o.image, e[12] = k) : k = e[12];
  const C = k;
  let T;
  e[13] !== n.id || e[14] !== l ? (T = (V) => {
    V.stopPropagation(), l?.(n.id);
  }, e[13] = n.id, e[14] = l, e[15] = T) : T = e[15];
  const I = T;
  let A;
  e[16] !== n.id || e[17] !== l ? (A = (V) => {
    V.button === 1 && l && (V.preventDefault(), V.stopPropagation(), l(n.id));
  }, e[16] = n.id, e[17] = l, e[18] = A) : A = e[18];
  const P = A;
  let M;
  e[19] !== n.id || e[20] !== a ? (M = (V) => {
    const Y = V.currentTarget, J = Y.naturalWidth && Y.naturalHeight ? Y.naturalWidth / Y.naturalHeight : void 0;
    a(n.id, J);
  }, e[19] = n.id, e[20] = a, e[21] = M) : M = e[21];
  const O = M;
  let N;
  e[22] !== n || e[23] !== c ? (N = () => c?.(n), e[22] = n, e[23] = c, e[24] = N) : N = e[24];
  const U = n.alt ?? "View image", j = n.alt ?? "Attached image";
  let $;
  e[25] !== O || e[26] !== n.url || e[27] !== C.className || e[28] !== C.style || e[29] !== j ? ($ = i$("img", { src: n.url, alt: j, className: C.className, style: C.style, onLoad: O }), e[25] = O, e[26] = n.url, e[27] = C.className, e[28] = C.style, e[29] = j, e[30] = $) : $ = e[30];
  let H;
  e[31] !== s || e[32] !== i || e[33] !== S.className || e[34] !== S.style || e[35] !== N || e[36] !== U || e[37] !== $ ? (H = i$(AM.GridItem, { className: S.className, style: S.style, onClick: N, itemIndex: i, aspectRatio: s, "aria-label": U, children: $ }), e[31] = s, e[32] = i, e[33] = S.className, e[34] = S.style, e[35] = N, e[36] = U, e[37] = $, e[38] = H) : H = e[38];
  const G = H;
  let q;
  e[39] !== I || e[40] !== G || e[41] !== l ? (q = l ? i$(bUr, { content: i$(zt, { name: "close", size: 9 }), position: "top-right", color: "overlay", shape: "pill", size: "sm", onClick: I, "aria-label": "Remove image", borderColor: "var(--prompt-input-container-bg)", rootStyle: Cae.badgeRoot, indicatorStyle: Cae.badgeIndicator, children: G }) : G, e[39] = I, e[40] = G, e[41] = l, e[42] = q) : q = e[42];
  let K;
  return e[43] !== P || e[44] !== b.className || e[45] !== b.style || e[46] !== q ? (K = i$("div", { className: b.className, style: b.style, "data-media-preview": "", onMouseDown: Bc1, onAuxClick: P, children: q }), e[43] = P, e[44] = b.className, e[45] = b.style, e[46] = q, e[47] = K) : K = e[47], K;
}
function Bc1(t) {
  t.button === 1 && t.preventDefault();
}
var M_p, Cae, D_p, 