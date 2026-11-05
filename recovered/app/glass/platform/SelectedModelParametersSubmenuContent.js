// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectedModelParametersSubmenuContent.js range:16887958..16899313
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.168Z
// wrapper: ge1 deps:11 [E, VFe, BTa, ue1, Ukn, $he, mdp, jTa, aJ, qu, fd]
// declarations: kdp, wdp, Cdp, Tdp, Se1, w7r, Edp, Idp, ke1, we1, xdp, Ce1, Te1, Ee1, Ie1, Adp (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
ge1 = L({ "SelectedModelParametersSubmenuContent.js"() {
  "use strict";
  E(), VFe(), BTa(), ue1(), Ukn(), $he(), mdp(), jTa(), aJ(), qu(), fd(), k7r = { caption: { kMwMTN: "ui-4b2ntj", khDVqt: "ui-uxw1ft", $$css: true }, modelLabel: { kzQI83: "ui-1iyjqo2", kmuXW: "ui-2lah0s", kCS8Yb: "ui-dl72j9", $$css: true }, modelValue: { kmuXW: "ui-s83m0k", k7Eaqz: "ui-euugli", $$css: true } };
} });
import { jsx as R0e, jsxs as ydp, Fragment as fe1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as jrt } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { Children as ve1, isValidElement as Sdp, useContext as HTa, useState as _e1, useRef as be1, useLayoutEffect as ye1 } from "./react-runtime/react/esm-index-production.js";
function kdp() {
  return Rdp.root;
}
function wdp(t) {
  const e = jrt(6);
  let n, i;
  if (e[0] !== t) {
    n = [], i = [];
    for (const o of ve1.toArray(t)) Sdp(o) && o.type === Edp ? n.push({ id: o.props.id, searchText: o.props.searchText, element: o }) : Sdp(o) && o.type === Idp && i.push(o);
    e[0] = t, e[1] = n, e[2] = i;
  } else n = e[1], i = e[2];
  const r = i.length === 0 ? void 0 : i;
  let s;
  return e[3] !== n || e[4] !== r ? (s = { controls: n, footer: r }, e[3] = n, e[4] = r, e[5] = s) : s = e[5], s;
}
function Cdp(t) {
  const e = jrt(8), { children: n, menuWidth: i, menuMaxHeight: r } = t, s = HTa(Brt), { labels: o } = nw();
  if (s !== null) return n;
  const a = i ?? Pfi;
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = ar({ rootClass: "ui-model-picker__menu", stylexStyles: kdp() }), e[0] = l) : l = e[0];
  const c = l, u = r ?? o8r;
  let d;
  return e[1] !== n || e[2] !== o.modelSelection || e[3] !== c.className || e[4] !== c.style || e[5] !== a || e[6] !== u ? (d = R0e(cl.Content, { "aria-label": o.modelSelection, className: c.className, style: c.style, "data-testid": "model-picker-menu", maxHeight: u, minWidth: a, maxWidth: a, children: n }), e[1] = n, e[2] = o.modelSelection, e[3] = c.className, e[4] = c.style, e[5] = a, e[6] = u, e[7] = d) : d = e[7], d;
}
function Tdp(t) {
  const e = jrt(32), { children: n, effortFirstSubmenu: i, rowMode: r } = t, s = i === void 0 ? false : i, { state: o, models: a, displayConfiguration: l, contentConfiguration: c } = nw(), { searchValue: u } = r6e(), { controls: d, footer: h } = wdp(n), { hideAutoToggle: p, hideMaxToggle: g, hideSearchBar: f, hideMultiModelToggle: _, onAddModels: b, rowMode: y, menuWidth: S, menuMaxHeight: k } = c, C = r ?? y;
  let T;
  e[0] !== l || e[1] !== f ? (T = f === true || Kop(l), e[0] = l, e[1] = f, e[2] = T) : T = e[2];
  const I = T, A = u.trim().length > 0;
  let P;
  if (A) {
    let O;
    e[3] !== d || e[4] !== I || e[5] !== C || e[6] !== s || e[7] !== p || e[8] !== g || e[9] !== _ || e[10] !== b ? (O = R0e(ZXS, { composedControls: d, hideAutoToggle: p, effortFirstSubmenu: s, hideMaxToggle: g, hideSearchBar: I, hideMultiModelToggle: _, onAddModels: b, rowMode: C }), e[3] = d, e[4] = I, e[5] = C, e[6] = s, e[7] = p, e[8] = g, e[9] = _, e[10] = b, e[11] = O) : O = e[11], P = O;
  } else {
    const O = Yop(l), N = o.viewWhileOpened === "routed-model", U = N && !O && a.some(Se1), j = N && !O && p !== true && (u8r(l) || Vop(l)), G = s && !Xop(l, p) || N && (O || !U && !j) ? "named-model" : o.viewWhileOpened;
    e: switch (G) {
      case "routed-model": {
        let q;
        e[12] !== d || e[13] !== I || e[14] !== C || e[15] !== h || e[16] !== p ? (q = R0e(JXS, { composedControls: d, footer: h, hideAutoToggle: p, hideSearchBar: I, rowMode: C }), e[12] = d, e[13] = I, e[14] = C, e[15] = h, e[16] = p, e[17] = q) : q = e[17], P = q;
        break e;
      }
      case "named-model": {
        let q;
        e[18] !== d || e[19] !== I || e[20] !== C || e[21] !== s || e[22] !== h || e[23] !== p || e[24] !== g || e[25] !== _ || e[26] !== b ? (q = R0e(QXS, { composedControls: d, effortFirstSubmenu: s, footer: h, hideAutoToggle: p, hideMaxToggle: g, hideSearchBar: I, hideMultiModelToggle: _, onAddModels: b, rowMode: C }), e[18] = d, e[19] = I, e[20] = C, e[21] = s, e[22] = h, e[23] = p, e[24] = g, e[25] = _, e[26] = b, e[27] = q) : q = e[27], P = q;
        break e;
      }
      default:
        P = G;
    }
  }
  let M;
  return e[28] !== P || e[29] !== k || e[30] !== S ? (M = R0e(Cdp, { menuWidth: S, menuMaxHeight: k, children: P }), e[28] = P, e[29] = k, e[30] = S, e[31] = M) : M = e[31], M;
}
function Se1(t) {
  return t.visibleInRoutedModelView === true;
}
function w7r(t) {
  const e = jrt(2), { children: n } = t;
  let i;
  return e[0] !== n ? (i = R0e(Tdp, { children: n }), e[0] = n, e[1] = i) : i = e[1], i;
}
function Edp({ children: t }) {
  return t;
}
function Idp({ children: t }) {
  return t;
}
function ke1(t) {
  const e = jrt(27), { children: n } = t, { contentConfiguration: i, labels: r } = nw(), { searchValue: s } = r6e(), { controls: o, footer: a } = wdp(n);
  let l, c, u, d, h, p, g;
  e[0] !== i.hideSearchBar || e[1] !== i.menuMaxHeight || e[2] !== i.menuWidth || e[3] !== o || e[4] !== r || e[5] !== s ? (c = fae(s), g = o.filter((y) => fae(y.searchText).includes(c)), l = Cdp, u = i.menuWidth, d = i.menuMaxHeight, e[13] !== i.hideSearchBar || e[14] !== r ? (h = !i.hideSearchBar && R0e(cl.SearchInput, { placeholder: r.searchPlaceholder }), e[13] = i.hideSearchBar, e[14] = r, e[15] = h) : h = e[15], p = g.map(we1), e[0] = i.hideSearchBar, e[1] = i.menuMaxHeight, e[2] = i.menuWidth, e[3] = o, e[4] = r, e[5] = s, e[6] = l, e[7] = c, e[8] = u, e[9] = d, e[10] = h, e[11] = p, e[12] = g) : (l = e[6], c = e[7], u = e[8], d = e[9], h = e[10], p = e[11], g = e[12]);
  let f;
  e[16] !== r || e[17] !== g.length ? (f = g.length === 0 && R0e(cl.EmptyState, { children: r.noModelsFound }), e[16] = r, e[17] = g.length, e[18] = f) : f = e[18];
  const _ = c.length === 0 ? a : null;
  let b;
  return e[19] !== l || e[20] !== u || e[21] !== d || e[22] !== h || e[23] !== p || e[24] !== f || e[25] !== _ ? (b = ydp(l, { menuWidth: u, menuMaxHeight: d, children: [h, p, f, _] }), e[19] = l, e[20] = u, e[21] = d, e[22] = h, e[23] = p, e[24] = f, e[25] = _, e[26] = b) : b = e[26], b;
}
function we1(t) {
  return t.element;
}
function xdp(t) {
  const e = jrt(35), n = HTa(Brt), { contentConfiguration: i } = nw();
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { kind: "closed" }, e[0] = r) : r = e[0];
  const [s, o] = _e1(r), a = i.onModelSelectionOpenChange !== void 0, l = i.onParameterFlyoutOpenChange !== void 0, c = a ? i.modelSelectionOpen ?? false : s.kind === "model", u = a ? i.keepModelSelectionOpenOnHoverOut ?? false : s.kind === "model" && s.sticky, d = l ? i.openParameterFlyoutId : s.kind === "parameter" ? s.parameterId : void 0, h = l ? i.keepParameterFlyoutOpenOnHoverOut ?? false : s.kind === "parameter" && s.sticky;
  let p;
  e[1] !== i ? (p = (G) => {
    if (i.onModelSelectionOpenChange !== void 0) {
      i.onModelSelectionOpenChange(G);
      return;
    }
    o((q) => G ? q.kind === "model" ? q : { kind: "model", sticky: false } : q.kind === "model" ? { kind: "closed" } : q);
  }, e[1] = i, e[2] = p) : p = e[2];
  const g = p;
  let f;
  e[3] !== i ? (f = () => {
    if (i.onModelSelectionPointerEnter !== void 0) {
      i.onModelSelectionPointerEnter();
      return;
    }
    o(Te1);
  }, e[3] = i, e[4] = f) : f = e[4];
  const _ = f;
  let b;
  e[5] !== i ? (b = () => {
    if (i.onModelParametersPointerEnter !== void 0) {
      i.onModelParametersPointerEnter();
      return;
    }
    o(Ce1);
  }, e[5] = i, e[6] = b) : b = e[6];
  const y = b;
  let S;
  e[7] !== i ? (S = (G, q) => {
    if (i.onParameterFlyoutOpenChange !== void 0) {
      i.onParameterFlyoutOpenChange(G, q);
      return;
    }
    o((K) => q ? K.kind === "parameter" && K.parameterId === G ? K : { kind: "parameter", parameterId: G, sticky: false } : K.kind === "parameter" && K.parameterId === G ? { kind: "closed" } : K);
  }, e[7] = i, e[8] = S) : S = e[8];
  const k = S;
  let C;
  e[9] !== i ? (C = (G) => {
    if (i.onParameterFlyoutPointerEnter !== void 0) {
      i.onParameterFlyoutPointerEnter(G);
      return;
    }
    o((q) => q.kind === "parameter" && q.parameterId === G && !q.sticky ? { ...q, sticky: true } : q);
  }, e[9] = i, e[10] = C) : C = e[10];
  const T = C;
  let I;
  e[11] !== t ? (I = R0e(w7r, { children: t }), e[11] = t, e[12] = I) : I = e[12];
  const A = I, P = n !== null, M = i.menuWidth ?? Pfi, O = i.menuMaxHeight ?? o8r;
  let N;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = kdp(), e[13] = N) : N = e[13];
  let U;
  e[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = R0e(Adp, {}), e[14] = U) : U = e[14];
  let j;
  e[15] !== t ? (j = ydp(fe1, { children: [U, R0e(Tdp, { effortFirstSubmenu: true, rowMode: "no-options", children: t })] }), e[15] = t, e[16] = j) : j = e[16];
  let $;
  e[17] !== y || e[18] !== g || e[19] !== _ || e[20] !== k || e[21] !== T || e[22] !== u || e[23] !== h || e[24] !== c || e[25] !== d || e[26] !== A || e[27] !== j || e[28] !== M || e[29] !== O ? ($ = { fallback: A, menuWidth: M, menuMaxHeight: O, menuStyle: N, keepModelSelectionOpenOnHoverOut: u, modelSelectionOpen: c, onModelSelectionOpenChange: g, openParameterFlyoutId: d, keepParameterFlyoutOpenOnHoverOut: h, onParameterFlyoutOpenChange: k, onParameterFlyoutPointerEnter: T, onModelParametersPointerEnter: y, onModelSelectionPointerEnter: _, nestedModelList: j }, e[17] = y, e[18] = g, e[19] = _, e[20] = k, e[21] = T, e[22] = u, e[23] = h, e[24] = c, e[25] = d, e[26] = A, e[27] = j, e[28] = M, e[29] = O, e[30] = $) : $ = e[30];
  let H;
  return e[31] !== A || e[32] !== $ || e[33] !== P ? (H = { insideSubmenu: P, passthroughContent: A, contentProps: $ }, e[31] = A, e[32] = $, e[33] = P, e[34] = H) : H = e[34], H;
}
function Ce1(t) {
  return t.kind === "model" && !t.sticky ? { kind: "closed" } : t;
}
function Te1(t) {
  return t.kind === "model" && !t.sticky ? { kind: "model", sticky: true } : t;
}
function Ee1(t) {
  const e = jrt(4), { children: n } = t, i = xdp(n);
  let r;
  return e[0] !== i.contentProps || e[1] !== i.insideSubmenu || e[2] !== i.passthroughContent ? (r = i.insideSubmenu ? i.passthroughContent : R0e(se1, { ...i.contentProps }), e[0] = i.contentProps, e[1] = i.insideSubmenu, e[2] = i.passthroughContent, e[3] = r) : r = e[3], r;
}
function Ie1(t) {
  const e = jrt(4), { children: n } = t, i = xdp(n);
  let r;
  return e[0] !== i.contentProps || e[1] !== i.insideSubmenu || e[2] !== i.passthroughContent ? (r = i.insideSubmenu ? i.passthroughContent : R0e(me1, { ...i.contentProps }), e[0] = i.contentProps, e[1] = i.insideSubmenu, e[2] = i.passthroughContent, e[3] = r) : r = e[3], r;
}
function Adp() {
  const t = jrt(4), e = HTa(Brt), n = e?.isMounted ?? false, i = e?.searchInputRef, r = be1(false);
  let s, o;
  return t[0] !== n || t[1] !== i ? (s = () => {
    if (!i) return;
    const a = r.current;
    if (r.current = n, !a && n) {
      const l = () => {
        const c = i.current;
        c && document.activeElement !== c && c.focus({ preventScroll: true });
      };
      requestAnimationFrame(() => {
        requestAnimationFrame(l);
      });
    }
  }, o = [n, i], t[0] = n, t[1] = i, t[2] = s, t[3] = o) : (s = t[2], o = t[3]), ye1(s, o), null;
}
var Rdp,
