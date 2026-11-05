// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NestedModelListSubmenu.js range:16876686..16879641
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.142Z
// wrapper: mdp deps:3 [E, JY, aJ]
// declarations: se1, mdp, gdp (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
var mdp = L({ "NestedModelListSubmenu.js"() {
  "use strict";
  E(), JY(), aJ();
} });
import { jsx as Urt } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as re1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function se1(t) {
  const e = re1(39), { fallback: n, menuWidth: i, menuMaxHeight: r, menuStyle: s, keepModelSelectionOpenOnHoverOut: o, modelSelectionOpen: a, onModelSelectionOpenChange: l, onModelParametersPointerEnter: c, onModelSelectionPointerEnter: u, nestedModelList: d, nestedModelListKey: h } = t, p = UTa(cl.useContext().isOpen);
  if (p.kind === "fallback") return n;
  let g;
  e[0] !== s ? (g = ar({ rootClass: "ui-model-picker__menu", stylexStyles: s }), e[0] = s, e[1] = g) : g = e[1];
  const f = g, _ = p.kind === "auto";
  let b;
  e[2] !== _ || e[3] !== p.model || e[4] !== p.titleMarkdown ? (b = _ ? p.titleMarkdown : Ojt(p.model), e[2] = _, e[3] = p.model, e[4] = p.titleMarkdown, e[5] = b) : b = e[5];
  const y = b, S = _ ? "Auto" : `${p.model.name} parameters`, k = _ ? "selected-auto-menu" : "selected-model-parameters-menu";
  let C;
  e[6] !== y || e[7] !== _ || e[8] !== p.titleMarkdown ? (C = _ ? Urt(N4, { children: p.titleMarkdown }) : y, e[6] = y, e[7] = _, e[8] = p.titleMarkdown, e[9] = C) : C = e[9];
  let T;
  e[10] !== C ? (T = Urt(FTa, { children: C }), e[10] = C, e[11] = T) : T = e[11];
  let I;
  e[12] !== y || e[13] !== T ? (I = Urt(cl.SubMenuTrigger, { label: y, children: T }), e[12] = y, e[13] = T, e[14] = I) : I = e[14];
  let A;
  e[15] !== o || e[16] !== r || e[17] !== i || e[18] !== a || e[19] !== d || e[20] !== h || e[21] !== l || e[22] !== u || e[23] !== I ? (A = Urt(cl.Section, { title: "Model", noDivider: true, children: Urt(pdp, { keepOpenOnHoverOut: o, open: a, onOpenChange: l, onPointerEnter: u, contentKey: h, maxHeight: r, width: i, trigger: I, children: d }) }), e[15] = o, e[16] = r, e[17] = i, e[18] = a, e[19] = d, e[20] = h, e[21] = l, e[22] = u, e[23] = I, e[24] = A) : A = e[24];
  let P;
  e[25] !== _ || e[26] !== p.model || e[27] !== p.parameters || e[28] !== p.subtitle ? (P = _ ? p.subtitle === void 0 ? null : Urt(cl.Section, { noDivider: true, rootStyle: gdp.description, children: Urt("div", { role: "note", "data-testid": "selected-auto-description", children: p.subtitle }) }) : Urt(Wlp, { model: p.model, parameters: p.parameters }), e[25] = _, e[26] = p.model, e[27] = p.parameters, e[28] = p.subtitle, e[29] = P) : P = e[29];
  let M;
  return e[30] !== f.className || e[31] !== f.style || e[32] !== i || e[33] !== c || e[34] !== S || e[35] !== k || e[36] !== A || e[37] !== P ? (M = Urt(cl.Content, { "aria-label": S, className: f.className, style: f.style, "data-testid": k, maxHeight: "100vh", minWidth: i, maxWidth: i, onBodyPointerEnter: c, footer: A, children: P }), e[30] = f.className, e[31] = f.style, e[32] = i, e[33] = c, e[34] = S, e[35] = k, e[36] = A, e[37] = P, e[38] = M) : M = e[38], M;
}
var gdp,
