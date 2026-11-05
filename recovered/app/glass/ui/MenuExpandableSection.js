// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuExpandableSection.js range:16518595..16525376
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.792Z
aKS = L({ "MenuExpandableSection.js"() {
  "use strict";
  E(), ijt(), X0a(), Wj(), J0a = tKS(null);
} });
import { jsx as Ort, jsxs as lKS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Iap } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as cKS } from "./react-runtime/react/esm-index-production.js";
function uKS(t) {
  const e = Iap(9);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, label: r, ignoreSearch: i, ...s } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = r ?? (typeof n == "string" ? n : "");
  if (!m8r(o, i, "LegacyMenu.CheckboxItem")) return null;
  let l;
  return e[5] !== n || e[6] !== o || e[7] !== s ? (l = Ort(dKS, { ...s, itemLabel: o, children: n }), e[5] = n, e[6] = o, e[7] = s, e[8] = l) : l = e[8], l;
}
function dKS(t) {
  const e = Iap(83), { children: n, "data-testid": i, checked: r, defaultChecked: s, onChange: o, disabled: a, trailing: l, description: c, tooltip: u, tooltipOpenDelay: d, tooltipCloseDelay: h, tooltipSurface: p, closeOnSelect: g, itemLabel: f, rootStyle: _, contentStyle: b, trailingStyle: y } = t, S = s === void 0 ? false : s, k = a === void 0 ? false : a, C = d === void 0 ? 0 : d, T = h === void 0 ? 0 : h, I = p === void 0 ? "default" : p, { activeIndexStore: A, shouldAllowPointerInteraction: P, closeMenuLayersOnSelect: M, getItemProps: O, setIsOpen: N, closeOnSelect: U, activeDescendantIdPrefix: j } = Ofi("LegacyMenu.CheckboxItem"), $ = Ufi(), H = Ffi(), G = H === "body", q = g ?? U ?? false, [K, V] = cKS(S), Y = r !== void 0, J = Y ? r : K, Q = f || null;
  let te;
  e[0] !== Q ? (te = { label: Q }, e[0] = Q, e[1] = te) : te = e[1];
  const { ref: ee, index: re } = dPr(te), ie = p8r(A, re), oe = wna();
  let se;
  e[2] !== I ? (se = luh(I), e[2] = I, e[3] = se) : se = e[3];
  const le = se;
  let ce;
  e[4] !== M || e[5] !== q || e[6] !== k || e[7] !== J || e[8] !== Y || e[9] !== o || e[10] !== N ? (ce = () => {
    if (k) return;
    const Be = !J;
    Y || V(Be);
    const Ue = { defaultPrevented: false, preventDefault: () => {
      Ue.defaultPrevented = true;
    } };
    o?.(Be, Ue), q && !Ue.defaultPrevented && M(N);
  }, e[4] = M, e[5] = q, e[6] = k, e[7] = J, e[8] = Y, e[9] = o, e[10] = N, e[11] = ce) : ce = e[11];
  const ae = ce;
  let de;
  e[12] !== ae || e[13] !== P ? (de = (Be) => {
    if (!P(Be.nativeEvent)) {
      Be.preventDefault(), Be.stopPropagation();
      return;
    }
    Be.preventDefault(), Be.stopPropagation(), ae();
  }, e[12] = ae, e[13] = P, e[14] = de) : de = e[14];
  const he = de;
  let ge;
  e[15] !== k || e[16] !== ae ? (ge = (Be) => {
    k || (Be.key === "Enter" || Be.key === " ") && (Be.preventDefault(), Be.stopPropagation(), ae());
  }, e[15] = k, e[16] = ae, e[17] = ge) : ge = e[17];
  const pe = ge;
  let ve;
  e[18] !== j || e[19] !== O || e[20] !== he || e[21] !== pe || e[22] !== re ? (ve = O({ ...Bfi(j, re), onClick: he, onKeyDown: pe }), e[18] = j, e[19] = O, e[20] = he, e[21] = pe, e[22] = re, e[23] = ve) : ve = e[23];
  const fe = ve, Te = c != null;
  let _e;
  e[24] !== k || e[25] !== ie || e[26] !== $ || e[27] !== _ ? (_e = Wci({ disabled: k, focused: ie, inSubmenu: $ }, _), e[24] = k, e[25] = ie, e[26] = $, e[27] = _, e[28] = _e) : _e = e[28];
  const Ce = _e, Se = ie ? 0 : -1, Pe = k || void 0, we = J || void 0, Ie = k || void 0, Me = ie || void 0, De = Te || void 0;
  let Ne;
  e[29] !== i ? (Ne = i ? { "data-testid": i } : {}, e[29] = i, e[30] = Ne) : Ne = e[30];
  let be;
  e[31] !== J || e[32] !== fe || e[33] !== H || e[34] !== Ce.className || e[35] !== Ce.style || e[36] !== Se || e[37] !== Pe || e[38] !== we || e[39] !== Ie || e[40] !== Me || e[41] !== De || e[42] !== Ne ? (be = { role: "menuitemcheckbox", "aria-checked": J, tabIndex: Se, "aria-disabled": Pe, "data-checked": we, "data-component": "menu-row", "data-disabled": Ie, "data-focused": Me, "data-has-description": De, ...Ne, [T$t]: H, className: Ce.className, style: Ce.style, ...fe }, e[31] = J, e[32] = fe, e[33] = H, e[34] = Ce.className, e[35] = Ce.style, e[36] = Se, e[37] = Pe, e[38] = we, e[39] = Ie, e[40] = Me, e[41] = De, e[42] = Ne, e[43] = be) : be = e[43];
  const je = be;
  let $e;
  e[44] !== k || e[45] !== J ? ($e = Ort(r2e, { checked: J, disabled: k }), e[44] = k, e[45] = J, e[46] = $e) : $e = e[46];
  const Je = $e;
  let Ge;
  e[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ge = Qta(), e[47] = Ge) : Ge = e[47];
  const xe = Ge;
  let Oe;
  e[48] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Oe = yPr(), e[48] = Oe) : Oe = e[48];
  const ct = Oe;
  let Ye;
  e[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ye = Jta(), e[49] = Ye) : Ye = e[49];
  const Ve = Ye;
  let Xe;
  e[50] !== n || e[51] !== c || e[52] !== Te ? (Xe = Te ? lKS("div", { className: xe.className, style: xe.style, children: [Ort("div", { className: ct.className, style: ct.style, children: n }), Ort("div", { className: Ve.className, style: Ve.style, "data-component": "menu-item-description", children: c })] }) : n, e[50] = n, e[51] = c, e[52] = Te, e[53] = Xe) : Xe = e[53];
  const lt = Xe;
  let He;
  e[54] !== Je || e[55] !== lt || e[56] !== b || e[57] !== k || e[58] !== l || e[59] !== y ? (He = Ort(swt, { disabled: k, leading: Je, trailing: l, contentStyle: b, trailingStyle: y, children: lt }), e[54] = Je, e[55] = lt, e[56] = b, e[57] = k, e[58] = l, e[59] = y, e[60] = He) : He = e[60];
  const gt = He, ht = u != null && oe != null;
  let Ae;
  e[61] !== G || e[62] !== ee || e[63] !== gt || e[64] !== je ? (Ae = G ? Ort("li", { ref: ee, ...je, children: gt }) : Ort("div", { ref: ee, ...je, children: gt }), e[61] = G, e[62] = ee, e[63] = gt, e[64] = je, e[65] = Ae) : Ae = e[65];
  const ot = Ae;
  if (ht) {
    let Be;
    return e[66] !== ot || e[67] !== u || e[68] !== T || e[69] !== C || e[70] !== le ? (Be = Ort(Phh, { closeDelay: T, content: u, openDelay: C, surfaceStyle: le, children: ot }), e[66] = ot, e[67] = u, e[68] = T, e[69] = C, e[70] = le, e[71] = Be) : Be = e[71], Be;
  }
  if (u != null) {
    let Be;
    e[72] !== T ? (Be = kna(T), e[72] = T, e[73] = Be) : Be = e[73];
    let Ue;
    e[74] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Ue = ita(), e[74] = Ue) : Ue = e[74];
    let it;
    e[75] !== le ? (it = [Ue, le], e[75] = le, e[76] = it) : it = e[76];
    let qe;
    return e[77] !== ot || e[78] !== Be || e[79] !== it || e[80] !== u || e[81] !== C ? (qe = Ort(mB, { content: u, placement: "right", offset: 6, openDelay: C, closeDelay: Be, sameAxisOnly: true, surfaceStyle: it, children: ot }), e[77] = ot, e[78] = Be, e[79] = it, e[80] = u, e[81] = C, e[82] = qe) : qe = e[82], qe;
  }
  return ot;
}
