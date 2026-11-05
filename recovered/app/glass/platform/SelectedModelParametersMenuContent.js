// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SelectedModelParametersMenuContent.js range:16879641..16882298
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.166Z
// wrapper: oe1 deps:9 [E, VFe, BTa, Glp, $he, mdp, jTa, aJ, qu]
// declarations: ce1
// anchors: esm-jsx-runtime-production, esm-compiler-runtime-production
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
oe1 = L({ "SelectedModelParametersMenuContent.js"() {
  "use strict";
  E(), VFe(), BTa(), Glp(), $he(), mdp(), jTa(), aJ(), qu(), gdp = { description: { kLKAdn: "ui-1xgckd", kwRFfy: "ui-yupq46", kGO01o: "ui-1mv37q2", kZCmMZ: "ui-1xc7y5k", khDVqt: "ui-eaf4i8", $$css: true } };
} });
import { jsx as evi, jsxs as fdp, Fragment as ae1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as le1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ce1(t) {
  const e = le1(31), { modelId: n, parameter: i, currentValue: r, onValueChange: s, open: o, keepOpenOnHoverOut: a, onOpenChange: l, onPointerEnter: c } = t;
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-4b2ntj ui-uxw1ft" }, e[0] = u) : u = e[0];
  const d = u;
  let h;
  if (e[1] !== r || e[2] !== i.values) {
    let A;
    e[4] !== r ? (A = (P) => P.value === r, e[4] = r, e[5] = A) : A = e[5], h = i.values.find(A), e[1] = r, e[2] = i.values, e[3] = h;
  } else h = e[3];
  const p = h, g = p?.displayName ?? p?.value;
  let f;
  e[6] !== g ? (f = g === void 0 ? null : evi("span", { className: d.className, style: d.style, children: g }), e[6] = g, e[7] = f) : f = e[7];
  let _;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = evi(zt, { name: "chevron-right", size: "sm", color: "tertiary" }), e[8] = _) : _ = e[8];
  let b;
  e[9] !== f ? (b = fdp(ae1, { children: [f, _] }), e[9] = f, e[10] = b) : b = e[10];
  let y;
  e[11] !== i.name || e[12] !== b ? (y = evi(cl.SubMenuTrigger, { label: i.name, trailing: b, children: i.name }), e[11] = i.name, e[12] = b, e[13] = y) : y = e[13];
  const S = `${i.name} options`, k = `parameter-submenu-${i.id}`;
  let C;
  e[14] !== r || e[15] !== n || e[16] !== s || e[17] !== i.id || e[18] !== i.values ? (C = evi(PCa, { modelId: n, parameterId: i.id, values: i.values, currentValue: r, onValueChange: s, closeOnSelect: false }), e[14] = r, e[15] = n, e[16] = s, e[17] = i.id, e[18] = i.values, e[19] = C) : C = e[19];
  let T;
  e[20] !== c || e[21] !== S || e[22] !== k || e[23] !== C ? (T = evi(cl.SubMenuContent, { "aria-label": S, "data-testid": k, onPointerEnter: c, children: C }), e[20] = c, e[21] = S, e[22] = k, e[23] = C, e[24] = T) : T = e[24];
  let I;
  return e[25] !== a || e[26] !== l || e[27] !== o || e[28] !== T || e[29] !== y ? (I = fdp(cl.SubMenu, { open: o, onOpenChange: l, trigger: "hover", keepOpenOnHoverOut: a, placement: "right", offset: 6, suppressSiblingPointerGuard: a, closeOnSelect: false, children: [y, T] }), e[25] = a, e[26] = l, e[27] = o, e[28] = T, e[29] = y, e[30] = I) : I = e[30], I;
}
