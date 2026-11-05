// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ModelList.js range:16691995..16702351
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.129Z
// wrapper: $Ca deps:15 [E, Va, P7, IXS, JY, Drt, Tkn, VFe, Glp, qlp, BXS, aJ]
// declarations: HCa, WCa, tcp, ncp, icp, rcp, scp (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
$Ca = L({ "ModelList.js"() {
  "use strict";
  E(), Va(), P7(), IXS(), JY(), Drt(), Tkn(), VFe(), Glp(), qlp(), BXS(), aJ(), fd(), awt(), jCa = { usageLabel: { kMwMTN: "ui-4b2ntj", kmuXW: "ui-2lah0s", $$css: true }, drawerLabel: { kMwMTN: "ui-4b2ntj", $$css: true } }, Jlp = [], ecp = UXS(function(e) {
    const n = R$t(44), { model: i, selection: r, rowMode: s, isAtSelectionLimit: o, canOpenHoverOptions: a, itemRef: l, getAnchorRef: c, searchQuery: u, optionsOpen: d, setOpenOptionsModelName: h } = e, { state: p, savedModelParameters: g, namedModelSelectionDisabledTooltipMarkdown: f, onInteraction: _ } = nw(), b = !!r;
    let y;
    n[0] !== o || n[1] !== i || n[2] !== u || n[3] !== r ? (y = { model: i, selection: r, isAtSelectionLimit: o, searchQuery: u }, n[0] = o, n[1] = i, n[2] = u, n[3] = r, n[4] = y) : y = n[4];
    const { modelParams: S, variant: k, isModelDisabled: C, disabledBySelectionLimit: T, ensureModelSelected: I, handleModelSelect: A } = Klp(y);
    let P;
    n[5] !== c || n[6] !== i.name ? (P = c(i.name), n[5] = c, n[6] = i.name, n[7] = P) : P = n[7];
    const M = P;
    let O;
    n[8] !== l || n[9] !== i.name ? (O = (Q) => {
      l(i.name, Q);
    }, n[8] = l, n[9] = i.name, n[10] = O) : O = n[10];
    const N = O;
    let U;
    n[11] !== I || n[12] !== i.name || n[13] !== _ ? (U = () => I(false) === "blocked" ? false : (_?.({ kind: "modelOptionsOpened", modelId: i.name }), true), n[11] = I, n[12] = i.name, n[13] = _, n[14] = U) : U = n[14];
    const j = U;
    let $;
    n[15] !== i.name || n[16] !== h ? ($ = (Q) => {
      h((te) => Q ? i.name : te === i.name ? null : te);
    }, n[15] = i.name, n[16] = h, n[17] = $) : $ = n[17];
    const H = $, G = (g?.[i.name]?.length ?? 0) > 0 || (r?.parameters.length ?? 0) > 0;
    let q;
    n[18] !== a || n[19] !== C || n[20] !== b || n[21] !== i ? (q = !C && a(i, b), n[18] = a, n[19] = C, n[20] = b, n[21] = i, n[22] = q) : q = n[22];
    const K = q, V = f, Y = f !== void 0;
    let J;
    return n[23] !== M || n[24] !== T || n[25] !== V || n[26] !== j || n[27] !== A || n[28] !== H || n[29] !== G || n[30] !== K || n[31] !== C || n[32] !== b || n[33] !== Y || n[34] !== i || n[35] !== S || n[36] !== d || n[37] !== s || n[38] !== u || n[39] !== r?.count || n[40] !== N || n[41] !== p.multiModelMode || n[42] !== k ? (J = s === "hover-options" ? m6($lp, { model: i, variant: k, isSelected: b, multiModelMode: p.multiModelMode, count: r?.count ?? 1, parameters: S, itemRef: N, anchorRef: M, isDisabled: C, disabled: (Y ? false : C) || T, onSelect: A, onOpenOptions: j, optionsOpen: d, onOptionsOpenChange: H, hoverOptionsEnabled: K, hasSavedParameters: G, searchQuery: u, tooltipMarkdown: V }) : m6(DXS, { model: i, variant: k, isSelected: b, multiModelMode: p.multiModelMode, count: r?.count ?? 1, parameters: S, itemRef: N, anchorRef: M, isDisabled: C, disabled: (Y ? false : C) || T, onSelect: A, onEdit: j, hasSavedParameters: G, searchQuery: u, tooltipOverride: V, hideOptionsEdit: s === "no-options" }), n[23] = M, n[24] = T, n[25] = V, n[26] = j, n[27] = A, n[28] = H, n[29] = G, n[30] = K, n[31] = C, n[32] = b, n[33] = Y, n[34] = i, n[35] = S, n[36] = d, n[37] = s, n[38] = u, n[39] = r?.count, n[40] = N, n[41] = p.multiModelMode, n[42] = k, n[43] = J) : J = n[43], J;
  });
} });
import { jsx as D$t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Gkn } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as VXS, useRef as KXS, useEffect as YXS } from "./react-runtime/react/esm-index-production.js";
function HCa() {
  const t = Gkn(55), { state: e, setAutoMode: n, enterNamedModelsView: i, enterRoutedModelView: r, areNamedModelsDisabled: s, displayConfiguration: o, onInteraction: a } = nw();
  let l;
  t[0] !== o ? (l = L0a(o), t[0] = o, t[1] = l) : l = t[1];
  const c = l, [u, d] = VXS(null), h = KXS(null);
  let p, g;
  t[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (p = () => () => {
    h.current != null && clearTimeout(h.current);
  }, g = [], t[2] = p, t[3] = g) : (p = t[2], g = t[3]), YXS(p, g);
  let f, _, b, y, S, k, C, T, I;
  if (t[4] !== s || t[5] !== o || t[6] !== i || t[7] !== r || t[8] !== a || t[9] !== n || t[10] !== c || t[11] !== e.selections || t[12] !== e.viewWhileOpened || t[13] !== u) {
    const M = zop(o);
    let O;
    t[23] !== e.selections ? (O = wkn(e.selections), t[23] = e.selections, t[24] = O) : O = t[24], b = O;
    let N;
    t[25] !== s || t[26] !== r || t[27] !== b || t[28] !== a || t[29] !== n ? (N = () => {
      s || (b || (n(true), a?.({ kind: "toggleChanged", toggle: "auto", enabled: true })), r());
    }, t[25] = s, t[26] = r, t[27] = b, t[28] = a, t[29] = n, t[30] = N) : N = t[30], y = N, _ = u ?? b, c ? S = _ : S = b && e.viewWhileOpened === "routed-model";
    let U;
    t[31] !== o ? (U = qop(o), t[31] = o, t[32] = U) : U = t[32], I = U;
    let j;
    t[33] !== s || t[34] !== i || t[35] !== r || t[36] !== _ || t[37] !== b || t[38] !== a || t[39] !== n || t[40] !== c ? (j = () => {
      if (s) return;
      if (!c) {
        h.current != null && clearTimeout(h.current), d(!_), a?.({ kind: "toggleChanged", toggle: "auto", enabled: !_ }), h.current = setTimeout(() => {
          i();
        }, scp);
        return;
      }
      const $ = !b;
      n($), a?.({ kind: "toggleChanged", toggle: "auto", enabled: $ }), $ ? r() : i();
    }, t[33] = s, t[34] = i, t[35] = r, t[36] = _, t[37] = b, t[38] = a, t[39] = n, t[40] = c, t[41] = j) : j = t[41], f = j, t[42] !== o ? (k = u8r(o), t[42] = o, t[43] = k) : k = t[43], C = M, T = fae(M), t[4] = s, t[5] = o, t[6] = i, t[7] = r, t[8] = a, t[9] = n, t[10] = c, t[11] = e.selections, t[12] = e.viewWhileOpened, t[13] = u, t[14] = f, t[15] = _, t[16] = b, t[17] = y, t[18] = S, t[19] = k, t[20] = C, t[21] = T, t[22] = I;
  } else f = t[14], _ = t[15], b = t[16], y = t[17], S = t[18], k = t[19], C = t[20], T = t[21], I = t[22];
  const A = S ? I : void 0;
  let P;
  return t[44] !== s || t[45] !== f || t[46] !== _ || t[47] !== b || t[48] !== y || t[49] !== c || t[50] !== k || t[51] !== C || t[52] !== T || t[53] !== A ? (P = { visible: k, titleMarkdown: C, label: T, setToLastNamedModel: c, isDefaultAuto: b, checked: _, subtitle: A, disabled: s, toggle: f, select: y }, t[44] = s, t[45] = f, t[46] = _, t[47] = b, t[48] = y, t[49] = c, t[50] = k, t[51] = C, t[52] = T, t[53] = A, t[54] = P) : P = t[54], P;
}
function WCa(t) {
  const e = Gkn(19), { selectLikeNamedModel: n } = t === void 0 ? {} : t, i = HCa();
  if (!i.visible) return null;
  let r;
  e[0] !== i.titleMarkdown ? (r = i.titleMarkdown != null && D$t(N4, { children: i.titleMarkdown }), e[0] = i.titleMarkdown, e[1] = r) : r = e[1];
  const s = r;
  if (n === true && i.setToLastNamedModel === true) {
    let l;
    e[2] !== i.isDefaultAuto ? (l = i.isDefaultAuto ? D$t(zt, { name: "check", size: "sm" }) : void 0, e[2] = i.isDefaultAuto, e[3] = l) : l = e[3];
    let c;
    return e[4] !== i.disabled || e[5] !== i.label || e[6] !== i.select || e[7] !== l || e[8] !== s ? (c = D$t(cl.Item, { onSelect: i.select, closeOnSelect: true, disabled: i.disabled, label: i.label, "data-testid": "auto-mode-select", trailing: l, children: s }), e[4] = i.disabled, e[5] = i.label, e[6] = i.select, e[7] = l, e[8] = s, e[9] = c) : c = e[9], c;
  }
  let o;
  e[10] !== i.subtitle || e[11] !== s ? (o = D$t(cl.TextItem, { title: s, subtitle: i.subtitle, wrapSubtitle: true }), e[10] = i.subtitle, e[11] = s, e[12] = o) : o = e[12];
  let a;
  return e[13] !== i.checked || e[14] !== i.disabled || e[15] !== i.label || e[16] !== i.toggle || e[17] !== o ? (a = D$t(cl.SwitchItem, { checked: i.checked, onChange: i.toggle, disabled: i.disabled, label: i.label, "data-testid": "auto-mode-toggle", children: o }), e[13] = i.checked, e[14] = i.disabled, e[15] = i.label, e[16] = i.toggle, e[17] = o, e[18] = a) : a = e[18], a;
}
function tcp() {
  const t = Gkn(10), { state: e, setMaxMode: n, areNamedModelsDisabled: i, maxModeToggleDisabled: r, maxModeToggleDisabledTooltip: s, onInteraction: o } = nw(), a = s, l = i || r || a != null;
  let c;
  t[0] !== l || t[1] !== o || t[2] !== n || t[3] !== e.maxMode ? (c = () => {
    if (l) return;
    const h = !e.maxMode;
    n(h), o?.({ kind: "toggleChanged", toggle: "max", enabled: h });
  }, t[0] = l, t[1] = o, t[2] = n, t[3] = e.maxMode, t[4] = c) : c = t[4];
  const u = c;
  let d;
  return t[5] !== a || t[6] !== u || t[7] !== l || t[8] !== e.maxMode ? (d = { checked: e.maxMode, disabled: l, tooltip: a, toggle: u }, t[5] = a, t[6] = u, t[7] = l, t[8] = e.maxMode, t[9] = d) : d = t[9], d;
}
function ncp() {
  const t = Gkn(5), e = tcp();
  let n;
  return t[0] !== e.checked || t[1] !== e.disabled || t[2] !== e.toggle || t[3] !== e.tooltip ? (n = D$t(cl.SwitchItem, { checked: e.checked, onChange: e.toggle, disabled: e.disabled, label: "MAX Mode", tooltip: e.tooltip, "data-testid": "max-mode-toggle", children: "MAX Mode" }), t[0] = e.checked, t[1] = e.disabled, t[2] = e.toggle, t[3] = e.tooltip, t[4] = n) : n = t[4], n;
}
function icp() {
  const t = Gkn(10), { state: e, setMultiModelMode: n, onInteraction: i, multiModelToggleDisabled: r, multiModelToggleDisabledTooltip: s, areNamedModelsDisabled: o } = nw(), a = r || o, l = e.multiModelMode && !a;
  let c;
  t[0] !== a || t[1] !== i || t[2] !== n || t[3] !== e.multiModelMode ? (c = () => {
    if (a) return;
    const d = !e.multiModelMode;
    n(d), i?.({ kind: "toggleChanged", toggle: "multiModel", enabled: d });
  }, t[0] = a, t[1] = i, t[2] = n, t[3] = e.multiModelMode, t[4] = c) : c = t[4];
  let u;
  return t[5] !== a || t[6] !== s || t[7] !== l || t[8] !== c ? (u = { checked: l, disabled: a, tooltip: s, toggle: c }, t[5] = a, t[6] = s, t[7] = l, t[8] = c, t[9] = u) : u = t[9], u;
}
function rcp() {
  const t = Gkn(7), e = icp();
  let n;
  t[0] !== e.tooltip ? (n = e.tooltip ? () => e.tooltip : void 0, t[0] = e.tooltip, t[1] = n) : n = t[1];
  let i;
  return t[2] !== e.checked || t[3] !== e.disabled || t[4] !== e.toggle || t[5] !== n ? (i = D$t(cl.SwitchItem, { checked: e.checked, disabled: e.disabled, onChange: e.toggle, label: "Use Multiple Models", "data-testid": "multi-model-toggle", tooltip: n, children: "Use Multiple Models" }), t[2] = e.checked, t[3] = e.disabled, t[4] = e.toggle, t[5] = n, t[6] = i) : i = t[6], i;
}
var scp,
