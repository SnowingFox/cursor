// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HoverModelItem.js range:16659569..16669951
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.088Z
// wrapper: IXS deps:12 [E, ijt, ICa, $he, a8r, JY, B0a, kXS, aJ, s2e, Wj, nw]
// declarations: AXS, Hlp, RXS, PXS, Wlp, MXS, DXS
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production, parameter-edit-btn
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
IXS = L({ "HoverModelItem.js"() {
  "use strict";
  E(), ijt(), ICa(), $he(), a8r(), JY(), B0a(), kXS(), aJ(), s2e(), Wj(), $lp = CXS(function(e) {
    const n = NCa(41), { model: i, variant: r, isSelected: s, multiModelMode: o, count: a, parameters: l, itemRef: c, anchorRef: u, isDisabled: d, disabled: h, onSelect: p, onOpenOptions: g, optionsOpen: f, onOptionsOpenChange: _, hoverOptionsEnabled: b, hasSavedParameters: y, searchQuery: S, tooltipMarkdown: k } = e, C = h === void 0 ? false : h, T = y === void 0 ? false : y, { state: I } = nw();
    if (!b) {
      let O;
      n[0] !== i || n[1] !== I || n[2] !== k ? (O = k ?? Zop(i, I.maxMode), n[0] = i, n[1] = I, n[2] = k, n[3] = O) : O = n[3];
      let N;
      return n[4] !== u || n[5] !== a || n[6] !== C || n[7] !== d || n[8] !== s || n[9] !== c || n[10] !== i || n[11] !== o || n[12] !== p || n[13] !== S || n[14] !== O || n[15] !== r ? (N = I0e(TXS, { model: i, variant: r, isSelected: s, multiModelMode: o, count: a, itemRef: c, anchorRef: u, isDisabled: d, disabled: C, onSelect: p, searchQuery: S, tooltipMarkdown: O }), n[4] = u, n[5] = a, n[6] = C, n[7] = d, n[8] = s, n[9] = c, n[10] = i, n[11] = o, n[12] = p, n[13] = S, n[14] = O, n[15] = r, n[16] = N) : N = n[16], N;
    }
    let A;
    n[17] !== a || n[18] !== C || n[19] !== d || n[20] !== s || n[21] !== c || n[22] !== i || n[23] !== o || n[24] !== g || n[25] !== p || n[26] !== S || n[27] !== r ? (A = I0e(EXS, { model: i, variant: r, isSelected: s, multiModelMode: o, count: a, itemRef: c, isDisabled: d, disabled: C, onSelect: p, onOpenOptions: g, searchQuery: S }), n[17] = a, n[18] = C, n[19] = d, n[20] = s, n[21] = c, n[22] = i, n[23] = o, n[24] = g, n[25] = p, n[26] = S, n[27] = r, n[28] = A) : A = n[28];
    let P;
    n[29] !== T || n[30] !== i || n[31] !== f || n[32] !== l || n[33] !== k || n[34] !== r ? (P = f && I0e(cl.SubMenuContent, { "aria-label": `${i.name} parameters`, "data-testid": "parameter-submenu", minWidth: w$t, maxWidth: w$t, children: I0e(pXS, { model: i, parameters: l, variant: r, hasSavedParameters: T, tooltipOverride: k }) }), n[29] = T, n[30] = i, n[31] = f, n[32] = l, n[33] = k, n[34] = r, n[35] = P) : P = n[35];
    let M;
    return n[36] !== _ || n[37] !== f || n[38] !== A || n[39] !== P ? (M = wXS(cl.SubMenu, { trigger: "hover", hoverOpenDelay: 0, placement: "right", closeOnSelect: false, open: f, onOpenChange: _, dismissOnReferenceScroll: true, children: [A, P] }), n[36] = _, n[37] = f, n[38] = A, n[39] = P, n[40] = M) : M = n[40], M;
  });
} });
import { jsx as eX, jsxs as LCa, Fragment as xXS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as jkn } from "./react-runtime/react/esm-compiler-runtime-production.js";
function AXS(t) {
  const e = jkn(12), { modelId: n, parameter: i, currentValue: r, onValueChange: s } = t, o = i.markdownTooltip;
  let a;
  e[0] !== o ? (a = o ? () => eX(N4, { children: o }) : void 0, e[0] = o, e[1] = a) : a = e[1];
  let l;
  e[2] !== r || e[3] !== n || e[4] !== s || e[5] !== i.id || e[6] !== i.values ? (l = eX(PCa, { modelId: n, parameterId: i.id, values: i.values, currentValue: r, onValueChange: s, closeOnSelect: false }), e[2] = r, e[3] = n, e[4] = s, e[5] = i.id, e[6] = i.values, e[7] = l) : l = e[7];
  let c;
  return e[8] !== i.name || e[9] !== a || e[10] !== l ? (c = eX(cl.Section, { title: i.name, tooltip: a, children: l }), e[8] = i.name, e[9] = a, e[10] = l, e[11] = c) : c = e[11], c;
}
function Hlp(t) {
  const e = jkn(6);
  if (t.parameter.kind === "boolean") {
    let i;
    return e[0] !== t.currentValue || e[1] !== t.onValueChange || e[2] !== t.parameter ? (i = eX(RCa, { parameter: t.parameter, currentValue: t.currentValue, onValueChange: t.onValueChange }), e[0] = t.currentValue, e[1] = t.onValueChange, e[2] = t.parameter, e[3] = i) : i = e[3], i;
  }
  let n;
  return e[4] !== t ? (n = eX(AXS, { ...t, parameter: t.parameter }), e[4] = t, e[5] = n) : n = e[5], n;
}
function RXS(t) {
  const e = t.findIndex((s) => s.kind === "boolean");
  if (e === -1) return { beforeOptions: t.filter((s) => s.kind === "enum"), booleanParams: [], afterOptions: [] };
  const n = [], i = [], r = [];
  return t.forEach((s, o) => {
    s.kind === "boolean" ? i.push(s) : o < e ? n.push(s) : r.push(s);
  }), { beforeOptions: n, booleanParams: i, afterOptions: r };
}
function PXS(t) {
  const e = jkn(13), { onEdit: n, rootStyle: i } = t, { labels: r } = nw(), { getTriggerProps: s } = cl.SubMenu.useContext();
  let o;
  e[0] !== s ? (o = s(), e[0] = s, e[1] = o) : o = e[1];
  const a = o;
  let l, c;
  e[2] !== a ? ({ onClick: l, ...c } = a, e[2] = a, e[3] = l, e[4] = c) : (l = e[3], c = e[4]);
  let u;
  e[5] !== l || e[6] !== n ? (u = (h) => {
    h.stopPropagation(), n?.(), typeof l == "function" && l(h);
  }, e[5] = l, e[6] = n, e[7] = u) : u = e[7];
  let d;
  return e[8] !== r.editParameters || e[9] !== c || e[10] !== i || e[11] !== u ? (d = eX(An, { variant: "text", size: "sm", rootStyle: i, frame: "content", className: "ui-model-picker__edit-btn", "data-testid": "parameter-edit-btn", ...c, onClick: u, children: r.editParameters }), e[8] = r.editParameters, e[9] = c, e[10] = i, e[11] = u, e[12] = d) : d = e[12], d;
}
function Wlp(t) {
  const e = jkn(32), { model: n, parameters: i } = t;
  let r;
  e[0] !== n.parameterDefinitions ? (r = Vfi(n.parameterDefinitions), e[0] = n.parameterDefinitions, e[1] = r) : r = e[1];
  const s = r;
  let o;
  e[2] !== s ? (o = RXS(s), e[2] = s, e[3] = o) : o = e[3];
  const { beforeOptions: a, booleanParams: l, afterOptions: c } = o;
  let u;
  e[4] !== i ? (u = (b) => i.find((y) => y.id === b)?.value, e[4] = i, e[5] = u) : u = e[5];
  const d = u, h = MCa(n.name);
  let p;
  if (e[6] !== a || e[7] !== d || e[8] !== h || e[9] !== n.name) {
    let b;
    e[11] !== d || e[12] !== h || e[13] !== n.name ? (b = (y) => eX(Hlp, { modelId: n.name, parameter: y, currentValue: d(y.id), onValueChange: (S) => h({ parameterId: y.id, value: S }) }, y.id), e[11] = d, e[12] = h, e[13] = n.name, e[14] = b) : b = e[14], p = a.map(b), e[6] = a, e[7] = d, e[8] = h, e[9] = n.name, e[10] = p;
  } else p = e[10];
  let g;
  e[15] !== l || e[16] !== d || e[17] !== h ? (g = l.length > 0 && eX(cl.Section, { title: "Options", children: l.map((b) => eX(RCa, { parameter: b, currentValue: d(b.id), onValueChange: (y) => h({ parameterId: b.id, value: y }) }, b.id)) }), e[15] = l, e[16] = d, e[17] = h, e[18] = g) : g = e[18];
  let f;
  if (e[19] !== c || e[20] !== d || e[21] !== h || e[22] !== n.name) {
    let b;
    e[24] !== d || e[25] !== h || e[26] !== n.name ? (b = (y) => eX(Hlp, { modelId: n.name, parameter: y, currentValue: d(y.id), onValueChange: (S) => h({ parameterId: y.id, value: S }) }, y.id), e[24] = d, e[25] = h, e[26] = n.name, e[27] = b) : b = e[27], f = c.map(b), e[19] = c, e[20] = d, e[21] = h, e[22] = n.name, e[23] = f;
  } else f = e[23];
  let _;
  return e[28] !== p || e[29] !== g || e[30] !== f ? (_ = LCa(xXS, { children: [p, g, f] }), e[28] = p, e[29] = g, e[30] = f, e[31] = _) : _ = e[31], _;
}
function MXS(t) {
  const e = jkn(6), { model: n, parameters: i } = t, r = `${n.name} parameters`;
  let s;
  e[0] !== n || e[1] !== i ? (s = eX(Wlp, { model: n, parameters: i }), e[0] = n, e[1] = i, e[2] = s) : s = e[2];
  let o;
  return e[3] !== r || e[4] !== s ? (o = eX(cl.SubMenuContent, { "aria-label": r, "data-testid": "parameter-submenu", children: s }), e[3] = r, e[4] = s, e[5] = o) : o = e[5], o;
}
function DXS(t) {
  const e = jkn(45), { model: n, variant: i, isSelected: r, multiModelMode: s, count: o, parameters: a, itemRef: l, anchorRef: c, isDisabled: u, disabled: d, onSelect: h, onEdit: p, tagline: g, hasSavedParameters: f, searchQuery: _, tooltipOverride: b, hideOptionsEdit: y } = t, S = d === void 0 ? false : d, k = f === void 0 ? false : f, C = y === void 0 ? false : y, { state: T, clearParameterPreferences: I, closeMenuOnModelSelect: A, disableModelParameterEditing: P, onInteraction: M } = nw(), O = K3(), U = n.parameterDefinitions.length > 0 && !C && !P;
  let j;
  e[0] !== n || e[1] !== T.maxMode || e[2] !== b || e[3] !== i ? (j = Qop({ model: n, variant: i, maxMode: T.maxMode, override: b }), e[0] = n, e[1] = T.maxMode, e[2] = b, e[3] = i, e[4] = j) : j = e[4];
  const $ = j, H = U || r;
  let G;
  e[5] !== U || e[6] !== O || e[7] !== p ? (G = (ee) => {
    okt(ee.key, O) === "end" && U && p?.();
  }, e[5] = U, e[6] = O, e[7] = p, e[8] = G) : G = e[8];
  const q = !s && A, K = `model-item-${n.name}`;
  let V;
  e[9] !== r || e[10] !== s ? (V = s ? eX(r2e, { checked: r, variant: "neutral" }) : void 0, e[9] = r, e[10] = s, e[11] = V) : V = e[11];
  let Y;
  e[12] !== c || e[13] !== U || e[14] !== I || e[15] !== o || e[16] !== H || e[17] !== k || e[18] !== r || e[19] !== n || e[20] !== s || e[21] !== p || e[22] !== M || e[23] !== a ? (Y = H ? LCa(Ilp, { modelId: n.name, anchorRef: c, isSelected: r, multiModelMode: s, count: o, replaceSelectionIndicatorOnRowActive: U, children: [k && U && eX(JYS, { onReset: () => {
    I(n.name), M?.({ kind: "modelParametersReset", modelId: n.name });
  } }), U && LCa(cl.SubMenu, { trigger: "click", placement: "right", anchorRef: c, offset: 6, closeOnSelect: false, dismissOnReferenceScroll: true, children: [eX(PXS, { onEdit: p, rootStyle: r && s ? void 0 : TCa }), eX(MXS, { model: n, parameters: a })] })] }) : void 0, e[12] = c, e[13] = U, e[14] = I, e[15] = o, e[16] = H, e[17] = k, e[18] = r, e[19] = n, e[20] = s, e[21] = p, e[22] = M, e[23] = a, e[24] = Y) : Y = e[24];
  let J;
  e[25] !== $ ? (J = $ ? () => eX(N4, { children: $ }) : void 0, e[25] = $, e[26] = J) : J = e[26];
  let Q;
  e[27] !== u || e[28] !== n || e[29] !== s || e[30] !== _ || e[31] !== g || e[32] !== i ? (Q = eX(D8r, { model: n, variant: i, multiModelMode: s, isDisabled: u, searchQuery: _, tagline: g }), e[27] = u, e[28] = n, e[29] = s, e[30] = _, e[31] = g, e[32] = i, e[33] = Q) : Q = e[33];
  let te;
  return e[34] !== S || e[35] !== l || e[36] !== h || e[37] !== J || e[38] !== Q || e[39] !== G || e[40] !== q || e[41] !== K || e[42] !== V || e[43] !== Y ? (te = eX(cl.Item, { ref: l, onSelect: h, onKeyDown: G, disabled: S, closeOnSelect: q, "data-testid": K, leading: V, trailing: Y, tooltip: J, children: Q }), e[34] = S, e[35] = l, e[36] = h, e[37] = J, e[38] = Q, e[39] = G, e[40] = q, e[41] = K, e[42] = V, e[43] = Y, e[44] = te) : te = e[44], te;
}
