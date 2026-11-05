// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DetailHeaderShareMenu.js range:22491960..22505965
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.601Z
var Qz1 = L({ "DetailHeaderShareMenu.js"() {
  "use strict";
  E(), Mt(), $z1();
} });
import { jsx as gR, jsxs as Ube, Fragment as Jz1 } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as gXa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as fXa, useState as eV1, useEffect as tV1 } from "./react-runtime/react/esm-index-production.js";
function p$(t, e, n) {
  const i = Sc(e);
  return ri(t, i.className, n);
}
function nV1() {
  return pUm.base;
}
function iV1() {
  return mUm.base;
}
function rV1() {
  return gUm.base;
}
function sV1() {
  return fUm.base;
}
function oV1() {
  return vUm.base;
}
function aV1() {
  return _Um.base;
}
function lV1() {
  return bUm.base;
}
function uUm() {
  return yUm.base;
}
function cV1() {
  return SUm.base;
}
function uV1() {
  return kUm.base;
}
function dUm(t) {
  const e = gXa(10), { ariaLabel: n, disabled: i, enabled: r, onEnabledChange: s } = t, o = i === void 0 ? false : i;
  let a;
  e[0] !== n || e[1] !== o || e[2] !== r || e[3] !== s ? (a = o ? gR(zt, { "aria-hidden": true, color: r ? "green" : "tertiary", name: r ? "check-circle" : "x", size: "sm", variant: r ? "filled" : void 0 }) : gR(cv, { "aria-label": n, checked: r, onCheckedChange: s, size: "md" }), e[0] = n, e[1] = o, e[2] = r, e[3] = s, e[4] = a) : a = e[4];
  const l = r ? "Active" : "Inactive";
  let c;
  e[5] !== l ? (c = gR("span", { className: "cursor-ui-19aaqeu cursor-ui-4z9k3i cursor-ui-d4r4e8", children: l }), e[5] = l, e[6] = c) : c = e[6];
  let u;
  return e[7] !== a || e[8] !== c ? (u = Ube("div", { className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-ehausa", children: [a, c] }), e[7] = a, e[8] = c, e[9] = u) : u = e[9], u;
}
function dV1() {
  return wUm.base;
}
function hV1() {
  return CUm.base;
}
function pV1() {
  return TUm.base;
}
function mV1() {
  return EUm.base;
}
function gV1() {
  return IUm.base;
}
function fV1() {
  return xUm.base;
}
function vV1() {
  return AUm.base;
}
function _V1() {
  return RUm.base;
}
function bV1() {
  return PUm.base;
}
function yV1() {
  return MUm.base;
}
function vXa() {
  return DUm.base;
}
function SV1() {
  return NUm.base;
}
function hUm(t) {
  const e = gXa(29), { title: n, onTitleChange: i, placeholder: r, autoFocus: s, onBlur: o, isPlaceholder: a, maxLength: l, ariaLabel: c, inputId: u } = t, d = a === void 0 ? false : a, h = c === void 0 ? "Automation name" : c, p = u === void 0 ? "agent-name-input" : u, g = n.trim() !== "" ? n : "Untitled", f = i !== void 0, _ = fXa(null), b = fXa(n), y = fXa(false), [S, k] = eV1(f && s === true);
  !f && S && k(false);
  let C, T;
  e[0] !== f || e[1] !== S ? (C = () => {
    if (!f || !S) return;
    const $ = _.current;
    $ !== null && ($.focus(), $.setSelectionRange($.value.length, $.value.length));
  }, T = [f, S], e[0] = f, e[1] = S, e[2] = C, e[3] = T) : (C = e[2], T = e[3]), tV1(C, T);
  let I;
  e[4] !== f || e[5] !== n ? (I = () => {
    f && (b.current = n, y.current = false, k(true));
  }, e[4] = f, e[5] = n, e[6] = I) : I = e[6];
  const A = I;
  let P;
  e[7] !== f || e[8] !== o || e[9] !== i ? (P = ($) => {
    f && ($?.restoreOriginal === true && i?.(b.current), $?.commit === true && o?.(), y.current = true, k(false));
  }, e[7] = f, e[8] = o, e[9] = i, e[10] = P) : P = e[10];
  const M = P;
  let O;
  e[11] !== o ? (O = () => {
    if (y.current) {
      y.current = false;
      return;
    }
    o?.(), k(false);
  }, e[11] = o, e[12] = O) : O = e[12];
  const N = O;
  let U;
  e[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (U = p$("ui-automations-detail-title-row", vV1(), "automations-detail-title-row"), e[13] = U) : U = e[13];
  let j;
  return e[14] !== h || e[15] !== s || e[16] !== f || e[17] !== g || e[18] !== M || e[19] !== N || e[20] !== p || e[21] !== S || e[22] !== d || e[23] !== l || e[24] !== i || e[25] !== r || e[26] !== A || e[27] !== n ? (j = gR("div", { className: U, children: f ? S ? gR(nI, { ref: _, id: p, ...C2a, value: n, maxLength: l, onChange: ($) => i($.target.value), onKeyDown: ($) => {
    if ($.key === "Enter") {
      $.preventDefault(), M({ commit: true });
      return;
    }
    $.key === "Escape" && ($.preventDefault(), M({ restoreOriginal: true }));
  }, onBlur: N, placeholder: r, autoFocus: s, "aria-label": h, size: "lg", variant: "unfilled", className: p$("ui-automations-detail-title-input", fV1(), "automations-detail-title-input") }) : Ube(An, { type: "button", variant: "ghost", size: "sm", onClick: A, className: p$("ui-automations-detail-title-button", pV1(), "automations-detail-title-button"), "aria-label": `Edit ${h.toLowerCase()}: ${g}`, children: [gR("span", { className: p$("ui-automations-detail-title-text", bV1(), "automations-detail-title-text"), "data-placeholder": d, children: g }), gR("span", { className: p$("ui-automations-detail-title-edit-icon", mV1(), "automations-detail-title-edit-icon"), children: gR(zt, { name: "pencil", size: 14, color: "tertiary" }) })] }) : gR("span", { className: p$("ui-automations-detail-title-static", _V1(), "automations-detail-title-static"), "data-placeholder": d, children: g }) }), e[14] = h, e[15] = s, e[16] = f, e[17] = g, e[18] = M, e[19] = N, e[20] = p, e[21] = S, e[22] = d, e[23] = l, e[24] = i, e[25] = r, e[26] = A, e[27] = n, e[28] = j) : j = e[28], j;
}
function kV1(t) {
  const e = gXa(88), { ToolbarComponent: n, breadcrumbLabel: i, breadcrumbParents: r, breadcrumbRootLabel: s, breadcrumbRootHref: o, contentStyle: a, toolbarStyle: l, title: c, onTitleChange: u, titlePlaceholder: d, autoFocusTitle: h, onTitleBlur: p, titleIsPlaceholder: g, titleError: f, enabled: _, onEnabledChange: b, authorName: y, onDelete: S, onCopyJson: k, onDuplicateAutomation: C, onCopyShareLink: T, managedByActionLabel: I, onManagedByAction: A, onChangeOwner: P, onTest: M, testDisabled: O, onDone: N, doneDisabled: U, doneDisabledReason: j, doneLabel: $, doneButtonClassName: H, tabs: G, activeTab: q, onTabChange: K, showEnabledToggle: V, enabledReadOnly: Y, scopeConfig: J, toolbarExtra: Q, tabTrailingContent: te, titleExtra: ee, statusExtra: re, banner: ie, toolbarLeading: oe, BreadcrumbLinkComponent: se, onBreadcrumbRootClick: le } = t, ce = g === void 0 ? false : g, ae = _ === void 0 ? false : _, de = O === void 0 ? false : O, he = U === void 0 ? false : U, ge = $ === void 0 ? "Save" : $, pe = V === void 0 ? true : V, ve = Y === void 0 ? false : Y, fe = C !== void 0 || A !== void 0 || P !== void 0 || k !== void 0 || S !== void 0, Te = pe && (b !== void 0 || ve), _e = he ? j ?? "No unsaved changes" : "", Ce = J?.onScopeChange;
  let Se;
  e[0] !== H || e[1] !== he || e[2] !== ge || e[3] !== N ? (Se = N !== void 0 ? gR(An, { onClick: N, variant: "secondary", size: "md", "data-vr": "form-save", className: p$("ui-automations-detail-toolbar-button", vXa(), ri("automations-detail-toolbar-button", H)), disabled: he, children: ge }) : null, e[0] = H, e[1] = he, e[2] = ge, e[3] = N, e[4] = Se) : Se = e[4];
  const Pe = Se;
  let we;
  if (e[5] !== se || e[6] !== n || e[7] !== q || e[8] !== y || e[9] !== h || e[10] !== ie || e[11] !== i || e[12] !== r || e[13] !== o || e[14] !== s || e[15] !== a || e[16] !== Pe || e[17] !== _e || e[18] !== ae || e[19] !== ve || e[20] !== fe || e[21] !== I || e[22] !== le || e[23] !== P || e[24] !== k || e[25] !== T || e[26] !== S || e[27] !== C || e[28] !== b || e[29] !== A || e[30] !== Ce || e[31] !== K || e[32] !== M || e[33] !== p || e[34] !== u || e[35] !== J || e[36] !== Te || e[37] !== re || e[38] !== te || e[39] !== G || e[40] !== de || e[41] !== c || e[42] !== f || e[43] !== ee || e[44] !== ce || e[45] !== d || e[46] !== Q || e[47] !== oe || e[48] !== l) {
    const Ie = Sc([nV1(), lV1()], a);
    let Me;
    e[50] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (Me = p$("ui-automations-detail-toolbar-actions", yV1(), "automations-detail-toolbar-actions"), e[50] = Me) : Me = e[50];
    let De;
    e[51] !== Pe || e[52] !== _e ? (De = Pe !== null && (_e !== "" ? gR(xs, { content: _e, placement: "bottom", openDelay: 200, children: gR("span", { children: Pe }) }) : Pe), e[51] = Pe, e[52] = _e, e[53] = De) : De = e[53];
    let Ne;
    e[54] !== M || e[55] !== de ? (Ne = M !== void 0 && gR(An, { onClick: M, variant: "outline", size: "md", className: p$("ui-automations-detail-toolbar-button", vXa(), "automations-detail-toolbar-button"), disabled: de, "data-vr": "form-test", leadingIcon: "play", children: "Test" }), e[54] = M, e[55] = de, e[56] = Ne) : Ne = e[56];
    let be;
    e[57] !== T || e[58] !== Ce || e[59] !== J ? (be = J !== void 0 && Ce !== void 0 && gR(Zz1, { onCopyShareLink: T, scopeConfig: { ...J, onScopeChange: Ce }, triggerClassName: p$("ui-automations-detail-toolbar-button", vXa(), "automations-detail-toolbar-button"), triggerContentClassName: p$("ui-automations-detail-button-content", oV1(), "automations-detail-button-content") }), e[57] = T, e[58] = Ce, e[59] = J, e[60] = be) : be = e[60];
    let je;
    e[61] !== fe || e[62] !== I || e[63] !== P || e[64] !== k || e[65] !== S || e[66] !== C || e[67] !== A ? (je = fe && Ube(hn, { children: [gR(hn.Trigger, { children: gR(An, { variant: "ghost", size: "md", className: p$("ui-automations-detail-toolbar-icon-button", SV1(), "automations-detail-toolbar-icon-button"), "aria-label": "More actions", children: gR(zt, { name: "ellipsis", size: 14 }) }) }), Ube(hn.Content, { "aria-label": "More actions", children: [(k !== void 0 || C !== void 0 || A !== void 0 || P !== void 0) && Ube(hn.Section, { children: [C !== void 0 && gR(hn.Item, { onSelect: C, children: "Duplicate" }), k !== void 0 && gR(hn.Item, { onSelect: k, children: "Copy as JSON" }), A !== void 0 && I !== void 0 && gR(hn.Item, { onSelect: A, children: I }), P !== void 0 && gR(hn.Item, { onSelect: P, children: "Change owner" })] }), S !== void 0 && gR(hn.Section, { children: gR(hn.Item, { onSelect: S, children: gR("span", { className: p$("ui-automations-danger-text", rV1(), "automations-danger-text"), children: "Delete" }) }) })] })] }), e[61] = fe, e[62] = I, e[63] = P, e[64] = k, e[65] = S, e[66] = C, e[67] = A, e[68] = je) : je = e[68];
    let $e;
    e[69] !== De || e[70] !== Ne || e[71] !== be || e[72] !== je || e[73] !== Q ? ($e = Ube("div", { className: Me, children: [De, Ne, Q, be, je] }), e[69] = De, e[70] = Ne, e[71] = be, e[72] = je, e[73] = Q, e[74] = $e) : $e = e[74];
    const Je = $e;
    let Ge;
    e[75] !== se || e[76] !== i || e[77] !== r || e[78] !== o || e[79] !== s || e[80] !== le ? (Ge = gR(Cqt, { currentLabel: i, parents: r, rootLabel: s, rootHref: o, LinkComponent: se, onRootClick: le }), e[75] = se, e[76] = i, e[77] = r, e[78] = o, e[79] = s, e[80] = le, e[81] = Ge) : Ge = e[81];
    let xe;
    e[82] !== n || e[83] !== Ge || e[84] !== Je || e[85] !== oe || e[86] !== l ? (xe = gR(n, { leadingContent: oe, rootStyle: l, trailingContent: Je, children: Ge }), e[82] = n, e[83] = Ge, e[84] = Je, e[85] = oe, e[86] = l, e[87] = xe) : xe = e[87], we = Ube(Jz1, { children: [xe, (c !== void 0 || ee !== void 0 || G !== void 0 && G.length > 0 || ie !== void 0) && Ube("div", { className: ri("ui-automations-content-container", Ie.className, "automations-content-container", "automations-detail-header-content"), style: Ie.style, children: [ie, Ube("div", { className: p$("ui-automations-detail-header-body", aV1(), "automations-detail-header-body"), children: [Ube("div", { className: p$("ui-automations-detail-title-block", hV1(), "automations-detail-title-block"), children: [(c !== void 0 || ee !== void 0) && Ube("div", { className: "cursor-ui-78zum5 cursor-ui-euugli cursor-ui-6s0dn4 cursor-ui-11twubx", children: [c !== void 0 && gR(hUm, { ariaLabel: "Automation name", autoFocus: h, isPlaceholder: ce, onBlur: p, onTitleChange: u, placeholder: d, title: c }), ee] }), (Te || y !== void 0 || re !== void 0) && Ube("div", { className: p$("ui-automations-detail-meta-row", cV1(), "automations-detail-meta-row"), children: [Te && gR(dUm, { ariaLabel: ve ? `Automation is ${ae ? "active" : "inactive"}` : "Toggle automation enabled state", disabled: ve, enabled: ae, onEnabledChange: b }), Te && (re !== void 0 || y !== void 0) && gR("span", { className: p$("ui-automations-detail-meta-divider", uUm(), "automations-detail-meta-divider") }), re, re !== void 0 && y !== void 0 && gR("span", { className: p$("ui-automations-detail-meta-divider", uUm(), "automations-detail-meta-divider") }), y !== void 0 && Ube("span", { className: p$("ui-automations-detail-meta-text", [uV1(), sV1()], "automations-detail-meta-text automations-detail-author-text"), title: `By ${y}`, children: ["By ", y] })] })] }), f !== void 0 && gR("p", { className: p$("ui-automations-detail-title-error", gV1(), "automations-detail-title-error"), children: f }), G !== void 0 && G.length > 0 && q !== void 0 && K !== void 0 && Ube("div", { className: p$("ui-automations-detail-tabs-row", dV1(), "automations-detail-tabs-row"), children: [gR("div", { className: p$("ui-automations-filter-tabs", iV1(), "automations-filter-tabs"), children: gR(Mx.Root, { value: q, onValueChange: K, size: "lg", children: gR(Mx.List, { "aria-label": "Automation detail sections", wrap: true, children: G.map(wV1) }) }) }), te] })] })] })] }), e[5] = se, e[6] = n, e[7] = q, e[8] = y, e[9] = h, e[10] = ie, e[11] = i, e[12] = r, e[13] = o, e[14] = s, e[15] = a, e[16] = Pe, e[17] = _e, e[18] = ae, e[19] = ve, e[20] = fe, e[21] = I, e[22] = le, e[23] = P, e[24] = k, e[25] = T, e[26] = S, e[27] = C, e[28] = b, e[29] = A, e[30] = Ce, e[31] = K, e[32] = M, e[33] = p, e[34] = u, e[35] = J, e[36] = Te, e[37] = re, e[38] = te, e[39] = G, e[40] = de, e[41] = c, e[42] = f, e[43] = ee, e[44] = ce, e[45] = d, e[46] = Q, e[47] = oe, e[48] = l, e[49] = we;
  } else we = e[49];
  return we;
}
function wV1(t) {
  return gR(Mx.Item, { value: t.id, children: t.label }, t.id);
}
var pUm, mUm, gUm, fUm, vUm, _Um, bUm, yUm, SUm, kUm, wUm, CUm, TUm, EUm, IUm, xUm, AUm, RUm, PUm, MUm, DUm, NUm, 