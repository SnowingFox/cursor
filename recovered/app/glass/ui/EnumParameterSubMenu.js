// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnumParameterSubMenu.js range:16882298..16887958
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.655Z
var ue1 = L({ "EnumParameterSubMenu.js"() {
  "use strict";
  E(), Ukn(), fd(), aJ();
} });
import { jsx as A2e, jsxs as vdp, Fragment as _dp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as bdp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function de1(t) {
  const e = bdp(26), { openParameterFlyoutId: n, keepParameterFlyoutOpenOnHoverOut: i, onParameterFlyoutOpenChange: r, onParameterFlyoutPointerEnter: s, view: o } = t, a = MCa(o.model.name);
  let l, c;
  if (e[0] !== a || e[1] !== i || e[2] !== r || e[3] !== s || e[4] !== n || e[5] !== o.model.name || e[6] !== o.model.parameterDefinitions || e[7] !== o.parameters) {
    const d = Vfi(o.model.parameterDefinitions);
    let h;
    e[10] !== o.parameters ? (h = (_) => o.parameters.find((b) => b.id === _)?.value, e[10] = o.parameters, e[11] = h) : h = e[11];
    const p = h;
    let g;
    e[12] !== a || e[13] !== p ? (g = (_) => A2e(RCa, { parameter: _, currentValue: p(_.id), onValueChange: (b) => a({ parameterId: _.id, value: b }) }, _.id), e[12] = a, e[13] = p, e[14] = g) : g = e[14], l = d.filter(pe1).map(g);
    let f;
    e[15] !== a || e[16] !== i || e[17] !== r || e[18] !== s || e[19] !== n || e[20] !== p || e[21] !== o.model.name ? (f = (_) => A2e(ce1, { modelId: o.model.name, parameter: _, currentValue: p(_.id), onValueChange: (b) => a({ parameterId: _.id, value: b }), open: n === _.id, keepOpenOnHoverOut: n === _.id && i, onOpenChange: (b) => r(_.id, b), onPointerEnter: () => s(_.id) }, _.id), e[15] = a, e[16] = i, e[17] = r, e[18] = s, e[19] = n, e[20] = p, e[21] = o.model.name, e[22] = f) : f = e[22], c = d.filter(he1).map(f), e[0] = a, e[1] = i, e[2] = r, e[3] = s, e[4] = n, e[5] = o.model.name, e[6] = o.model.parameterDefinitions, e[7] = o.parameters, e[8] = l, e[9] = c;
  } else l = e[8], c = e[9];
  let u;
  return e[23] !== l || e[24] !== c ? (u = vdp(_dp, { children: [l, c] }), e[23] = l, e[24] = c, e[25] = u) : u = e[25], u;
}
function he1(t) {
  return t.kind === "enum";
}
function pe1(t) {
  return t.kind === "boolean";
}
function me1(t) {
  const e = bdp(42), { fallback: n, menuWidth: i, menuMaxHeight: r, menuStyle: s, keepModelSelectionOpenOnHoverOut: o, modelSelectionOpen: a, onModelSelectionOpenChange: l, openParameterFlyoutId: c, keepParameterFlyoutOpenOnHoverOut: u, onParameterFlyoutOpenChange: d, onParameterFlyoutPointerEnter: h, onModelParametersPointerEnter: p, onModelSelectionPointerEnter: g, nestedModelList: f, nestedModelListKey: _ } = t, b = UTa(cl.useContext().isOpen);
  if (b.kind === "fallback") return n;
  const y = b.kind === "auto";
  let S;
  e[0] !== s ? (S = ar({ rootClass: "ui-model-picker__menu", stylexStyles: s }), e[0] = s, e[1] = S) : S = e[1];
  const k = S;
  let C;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (C = { className: "ui-4b2ntj ui-uxw1ft ui-euugli ui-b3r6kr ui-lyipyv" }, e[2] = C) : C = e[2];
  const T = C;
  let I;
  e[3] !== y || e[4] !== b.model ? (I = y ? void 0 : Ojt(b.model), e[3] = y, e[4] = b.model, e[5] = I) : I = e[5];
  const A = I, P = y ? "Auto" : `${b.model.name} parameters`, M = y ? "selected-auto-menu" : "selected-model-parameters-submenu-menu";
  let O;
  e[6] !== y || e[7] !== A || e[8] !== b.titleMarkdown ? (O = y ? A2e(N4, { stylexStyles: k7r.caption, children: b.titleMarkdown }) : A2e("span", { className: T.className, style: T.style, title: A, "data-testid": "selected-model-parameters-model-caption", children: A }), e[6] = y, e[7] = A, e[8] = b.titleMarkdown, e[9] = O) : O = e[9];
  let N;
  e[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (N = A2e(zt, { name: "chevron-right", size: "sm", color: "tertiary" }), e[10] = N) : N = e[10];
  let U;
  e[11] !== O ? (U = vdp(_dp, { children: [O, N] }), e[11] = O, e[12] = U) : U = e[12];
  let j;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (j = A2e(FTa, { children: "Model" }), e[13] = j) : j = e[13];
  let $;
  e[14] !== U ? ($ = A2e(cl.SubMenuTrigger, { label: "Model", contentStyle: k7r.modelLabel, trailingStyle: k7r.modelValue, trailing: U, children: j }), e[14] = U, e[15] = $) : $ = e[15];
  let H;
  e[16] !== o || e[17] !== r || e[18] !== i || e[19] !== a || e[20] !== f || e[21] !== _ || e[22] !== l || e[23] !== g || e[24] !== $ ? (H = A2e(cl.Section, { noDivider: true, children: A2e(pdp, { keepOpenOnHoverOut: o, open: a, onOpenChange: l, onPointerEnter: g, contentKey: _, maxHeight: r, width: i, trigger: $, children: f }) }), e[16] = o, e[17] = r, e[18] = i, e[19] = a, e[20] = f, e[21] = _, e[22] = l, e[23] = g, e[24] = $, e[25] = H) : H = e[25];
  let G;
  e[26] !== y || e[27] !== u || e[28] !== d || e[29] !== h || e[30] !== c || e[31] !== b ? (G = y ? b.subtitle === void 0 ? null : A2e("div", { role: "note", "data-testid": "selected-auto-description", className: "ui-1xgckd ui-yupq46 ui-1mv37q2 ui-1xc7y5k ui-eaf4i8", children: b.subtitle }) : A2e(de1, { view: b, openParameterFlyoutId: c, keepParameterFlyoutOpenOnHoverOut: u, onParameterFlyoutOpenChange: d, onParameterFlyoutPointerEnter: h }), e[26] = y, e[27] = u, e[28] = d, e[29] = h, e[30] = c, e[31] = b, e[32] = G) : G = e[32];
  let q;
  return e[33] !== k.className || e[34] !== k.style || e[35] !== i || e[36] !== p || e[37] !== H || e[38] !== G || e[39] !== P || e[40] !== M ? (q = A2e(cl.Content, { "aria-label": P, className: k.className, style: k.style, "data-testid": M, maxHeight: "100vh", minWidth: i, maxWidth: i, onBodyPointerEnter: p, footer: H, children: G }), e[33] = k.className, e[34] = k.style, e[35] = i, e[36] = p, e[37] = H, e[38] = G, e[39] = P, e[40] = M, e[41] = q) : q = e[41], q;
}
var k7r, 