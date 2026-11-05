// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SearchMenu.js range:16846802..16855362
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.971Z
NTa = L({ "SearchMenu.js"() {
  "use strict";
  E(), U5(), Va(), oWe(), E_e(), eFe(), Qfi(), She(), Nhe(), kci(), bup(), O4h(), Y1t(), n4h(), F$t(), p7r(), Fup(), CTa(), OQS(), $QS(), YQS(), wcp(), pB(), Ocp(), Ooe(), Bcp(), m2(), sTa(), Ucp(), Wj(), kcp(), fd(), iTa(), Icp(), eup(), aTa(), lTa(), IZS(), Jcp(), f7r(), Yup = { "ui--default-marker": "ui--default-marker", $$css: true }, Xup = { "ui--default-marker": "ui--default-marker", $$css: true }, Jfi = { backdrop: { kVAEAm: "ui-ixxii4", kpwlN0: "ui-10a8y8t", kWkggS: "ui-jbqb8w", kY4cRS: "ui-lvsv26", $$css: true }, backdropZIndex: (t) => [{ kY2c9j: t != null ? "ui-r3buco" : t, $$css: true }, { "--x-zIndex": t ?? void 0 }], emptyStatus: { kkrTdU: "ui-t0e3qv", kMwMTN: "ui-4b2ntj", $$css: true } }, Zup = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageUp", "PageDown", "Enter", "Tab", "Escape"]), Qup = 28, Jup = 13, yc = { Root: jQS, Trigger: tJS, Content: nJS, Input: oJS, List: aJS, ScrollArea: hJS, Footer: mJS, Section: gJS, SectionDivider: fJS, SectionTitle: vJS, GroupEmptyState: _JS, Status: Kup, Item: yQS, ItemIndicator: Nup, ToggleItem: SQS, EmptyState: bJS, SubMenu: xQS, SubMenuTrigger: qQS, SubMenuContent: VQS, SubMenuSearchContent: KQS, MenuSubMenu: DQS };
} });
import { jsx as zhe, jsxs as yJS, Fragment as SJS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as B$t } from "./react-runtime/react/esm-compiler-runtime-production.js";
function edp(t) {
  return typeof t != "string" && "kind" in t;
}
function kJS(t, e) {
  const n = B$t(38), { displayConfiguration: i, contentConfiguration: r } = nw(), s = HCa();
  let o, a, l, c, u;
  if (n[0] !== s || n[1] !== r.hideAutoToggle || n[2] !== r.hideMaxToggle || n[3] !== r.hideMultiModelToggle || n[4] !== i || n[5] !== t) {
    o = fae(t);
    const S = o.length > 0;
    let k;
    n[11] !== r.hideAutoToggle || n[12] !== r.hideMaxToggle || n[13] !== r.hideMultiModelToggle || n[14] !== i || n[15] !== S ? (k = VCa({ displayConfiguration: i, searching: S, effortFirstSubmenu: true, hideAutoToggle: r.hideAutoToggle, hideMaxToggle: r.hideMaxToggle, hideMultiModelToggle: r.hideMultiModelToggle }), n[11] = r.hideAutoToggle, n[12] = r.hideMaxToggle, n[13] = r.hideMultiModelToggle, n[14] = i, n[15] = S, n[16] = k) : k = n[16];
    const { showAutoToggle: C, showMaxToggle: T, showMultiModelToggle: I, useLegacyAutoRow: A } = k;
    u = A;
    const P = (M) => fae(M).includes(o);
    a = C && s.visible && P(s.label), l = T && P(LTa), c = I && P(OTa), n[0] = s, n[1] = r.hideAutoToggle, n[2] = r.hideMaxToggle, n[3] = r.hideMultiModelToggle, n[4] = i, n[5] = t, n[6] = o, n[7] = a, n[8] = l, n[9] = c, n[10] = u;
  } else o = n[6], a = n[7], l = n[8], c = n[9], u = n[10];
  const d = c;
  let h;
  if (n[17] !== e || n[18] !== o) {
    let S;
    n[20] !== o ? (S = (k) => fae(k.label).includes(o), n[20] = o, n[21] = S) : S = n[21], h = e.filter(S).map(wJS), n[17] = e, n[18] = o, n[19] = h;
  } else h = n[19];
  const p = h;
  let g;
  n[22] !== a || n[23] !== l || n[24] !== d || n[25] !== u ? (g = [], a && !u && g.push("auto"), l && g.push("max-mode"), d && g.push("multi-model"), n[22] = a, n[23] = l, n[24] = d, n[25] = u, n[26] = g) : g = n[26];
  let f;
  n[27] !== p ? (f = { id: "host-controls", items: p }, n[27] = p, n[28] = f) : f = n[28];
  let _;
  n[29] !== a || n[30] !== u ? (_ = { id: "legacy-auto", items: a && u ? ["auto"] : [] }, n[29] = a, n[30] = u, n[31] = _) : _ = n[31];
  let b;
  n[32] !== g ? (b = { id: "toggles", items: g }, n[32] = g, n[33] = b) : b = n[33];
  let y;
  return n[34] !== f || n[35] !== _ || n[36] !== b ? (y = [f, _, b], n[34] = f, n[35] = _, n[36] = b, n[37] = y) : y = n[37], y;
}
function wJS(t) {
  return { kind: "host-control", control: t };
}
function CJS(t) {
  const e = B$t(2), { row: n } = t;
  let i;
  return e[0] !== n ? (i = zhe(yc.ToggleItem, { value: n, checked: n.control.checked, onCheckedChange: n.control.onCheckedChange, children: n.control.label }), e[0] = n, e[1] = i) : i = e[1], i;
}
function TJS() {
  const t = B$t(15), e = HCa();
  let n;
  t[0] !== e.titleMarkdown ? (n = e.titleMarkdown === void 0 ? null : zhe(N4, { children: e.titleMarkdown }), t[0] = e.titleMarkdown, t[1] = n) : n = t[1];
  const i = n;
  if (e.setToLastNamedModel === true) {
    let s;
    t[2] !== e.isDefaultAuto ? (s = e.isDefaultAuto ? zhe(zt, { name: "check", size: "sm" }) : void 0, t[2] = e.isDefaultAuto, t[3] = s) : s = t[3];
    let o;
    return t[4] !== e.disabled || t[5] !== e.select || t[6] !== s || t[7] !== i ? (o = zhe(yc.Item, { value: "auto", disabled: e.disabled, onSelect: e.select, trailing: s, children: i }), t[4] = e.disabled, t[5] = e.select, t[6] = s, t[7] = i, t[8] = o) : o = t[8], o;
  }
  let r;
  return t[9] !== e.checked || t[10] !== e.disabled || t[11] !== e.subtitle || t[12] !== e.toggle || t[13] !== i ? (r = zhe(yc.ToggleItem, { value: "auto", checked: e.checked, disabled: e.disabled, onCheckedChange: e.toggle, description: e.subtitle, children: i }), t[9] = e.checked, t[10] = e.disabled, t[11] = e.subtitle, t[12] = e.toggle, t[13] = i, t[14] = r) : r = t[14], r;
}
function EJS() {
  const t = B$t(7), e = tcp();
  let n;
  t[0] !== e.tooltip ? (n = e.tooltip ? () => e.tooltip : void 0, t[0] = e.tooltip, t[1] = n) : n = t[1];
  let i;
  return t[2] !== e.checked || t[3] !== e.disabled || t[4] !== e.toggle || t[5] !== n ? (i = zhe(yc.ToggleItem, { value: "max-mode", checked: e.checked, disabled: e.disabled, onCheckedChange: e.toggle, tooltip: n, children: LTa }), t[2] = e.checked, t[3] = e.disabled, t[4] = e.toggle, t[5] = n, t[6] = i) : i = t[6], i;
}
function IJS() {
  const t = B$t(7), e = icp();
  let n;
  t[0] !== e.tooltip ? (n = e.tooltip ? () => e.tooltip : void 0, t[0] = e.tooltip, t[1] = n) : n = t[1];
  let i;
  return t[2] !== e.checked || t[3] !== e.disabled || t[4] !== e.toggle || t[5] !== n ? (i = zhe(yc.ToggleItem, { value: "multi-model", checked: e.checked, disabled: e.disabled, onCheckedChange: e.toggle, tooltip: n, children: OTa }), t[2] = e.checked, t[3] = e.disabled, t[4] = e.toggle, t[5] = n, t[6] = i) : i = t[6], i;
}
function xJS(t) {
  const e = B$t(22), { row: n } = t, { promotedSectionLayout: i, contentConfiguration: r } = nw(), { otherModelsExpanded: s, toggleOtherModelsExpanded: o, handleShowAllModels: a, handleAddModels: l } = UCa(r.onAddModels);
  if (n === "other-models") {
    let d;
    e[0] !== o ? (d = (y) => {
      y.preventDefault(), o();
    }, e[0] = o, e[1] = d) : d = e[1];
    const h = i?.otherModelsSectionUsageLabel, p = s ? "chevron-up" : "chevron-down";
    let g;
    e[2] !== p ? (g = zhe(zt, { name: p, color: "tertiary" }), e[2] = p, e[3] = g) : g = e[3];
    let f;
    e[4] !== h || e[5] !== g ? (f = yJS(SJS, { children: [h, g] }), e[4] = h, e[5] = g, e[6] = f) : f = e[6];
    const _ = i?.otherModelsSectionTitle;
    let b;
    return e[7] !== n || e[8] !== d || e[9] !== f || e[10] !== _ ? (b = zhe(yc.Item, { value: n, priority: "tertiary", onSelect: d, trailing: f, children: _ }), e[7] = n, e[8] = d, e[9] = f, e[10] = _, e[11] = b) : b = e[11], b;
  }
  if (n === "show-all-models") {
    let d;
    e[12] !== a ? (d = (p) => {
      p.preventDefault(), a();
    }, e[12] = a, e[13] = d) : d = e[13];
    let h;
    return e[14] !== n || e[15] !== d ? (h = zhe(yc.Item, { value: n, priority: "tertiary", onSelect: d, children: "Show all models…" }), e[14] = n, e[15] = d, e[16] = h) : h = e[16], h;
  }
  let c;
  e[17] !== l ? (c = () => l?.(), e[17] = l, e[18] = c) : c = e[18];
  let u;
  return e[19] !== n || e[20] !== c ? (u = zhe(yc.Item, { value: n, priority: "tertiary", onSelect: c, children: "Add Models" }), e[19] = n, e[20] = c, e[21] = u) : u = e[21], u;
}
function AJS(t) {
  const e = B$t(5), { row: n } = t;
  switch (n) {
    case "auto": {
      let i;
      return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = zhe(TJS, {}), e[0] = i) : i = e[0], i;
    }
    case "max-mode": {
      let i;
      return e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = zhe(EJS, {}), e[1] = i) : i = e[1], i;
    }
    case "multi-model": {
      let i;
      return e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = zhe(IJS, {}), e[2] = i) : i = e[2], i;
    }
    case "other-models":
    case "show-all-models":
    case "add-models": {
      let i;
      return e[3] !== n ? (i = zhe(xJS, { row: n }), e[3] = n, e[4] = i) : i = e[4], i;
    }
    default:
      return n;
  }
}
var LTa, OTa, 