// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: BreadcrumbHoverCard.js range:16104564..16110569
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.505Z
hjS = L({ "BreadcrumbHoverCard.js"() {
  "use strict";
  E(), dy(), J9r = { tab: { k7Eaqz: "ui-euugli", $$css: true }, taskLabel: { k7Eaqz: "ui-euugli", kzQI83: "ui-1iyjqo2", kmuXW: "ui-s83m0k", kCS8Yb: "ui-dl72j9", $$css: true }, footerText: { k7Eaqz: "ui-euugli", $$css: true } }, Unp = { Content: tjS, Header: njS, Tab: ijS, Actions: rjS, Action: sjS, TaskList: ojS, TaskRow: ajS, TaskLabel: ljS, Separator: cjS, Footer: ujS, FooterText: djS };
} });
import { jsx as Ert, jsxs as pjS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as s$t } from "./react-runtime/react/esm-compiler-runtime-production.js";
function mjS() {
  return hGe.navRoot;
}
function gjS(t) {
  return [hGe.list, t.compound ? hGe.listCompound : null];
}
function fjS() {
  return hGe.item;
}
function vjS() {
  return hGe.link;
}
function _jS() {
  return hGe.page;
}
function bjS() {
  return hGe.separator;
}
function yjS() {
  return hGe.ellipsis;
}
function SjS() {
  return hGe.srOnly;
}
function qka(t) {
  const e = s$t(11);
  let n, i, r;
  e[0] !== t ? ({ className: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== n || e[5] !== r ? (s = ar({ rootClass: "ui-breadcrumb__root", stylexStyles: mjS(), className: n, style: r }), e[4] = n, e[5] = r, e[6] = s) : s = e[6];
  const o = s;
  let a;
  return e[7] !== o.className || e[8] !== o.style || e[9] !== i ? (a = Ert("nav", { "aria-label": "breadcrumb", ...i, className: o.className, style: o.style }), e[7] = o.className, e[8] = o.style, e[9] = i, e[10] = a) : a = e[10], a;
}
function zka(t) {
  const e = s$t(13);
  let n, i, r, s;
  e[0] !== t ? ({ className: n, style: r, compound: s, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = s === void 0 ? false : s;
  let a;
  e[5] !== n || e[6] !== o || e[7] !== r ? (a = ar({ rootClass: "ui-breadcrumb__list", stylexStyles: gjS({ compound: o }), className: n, style: r }), e[5] = n, e[6] = o, e[7] = r, e[8] = a) : a = e[8];
  const l = a;
  let c;
  return e[9] !== l.className || e[10] !== l.style || e[11] !== i ? (c = Ert("ol", { ...i, className: l.className, style: l.style }), e[9] = l.className, e[10] = l.style, e[11] = i, e[12] = c) : c = e[12], c;
}
function eBr(t) {
  const e = s$t(11);
  let n, i, r;
  e[0] !== t ? ({ className: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== n || e[5] !== r ? (s = ar({ rootClass: "ui-breadcrumb__item", stylexStyles: fjS(), className: n, style: r }), e[4] = n, e[5] = r, e[6] = s) : s = e[6];
  const o = s;
  let a;
  return e[7] !== o.className || e[8] !== o.style || e[9] !== i ? (a = Ert("li", { ...i, className: o.className, style: o.style }), e[7] = o.className, e[8] = o.style, e[9] = i, e[10] = a) : a = e[10], a;
}
function kjS(t) {
  const e = s$t(11);
  let n, i, r;
  e[0] !== t ? ({ className: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== n || e[5] !== r ? (s = ar({ rootClass: "ui-breadcrumb__link", stylexStyles: vjS(), className: n, style: r }), e[4] = n, e[5] = r, e[6] = s) : s = e[6];
  const o = s;
  let a;
  return e[7] !== o.className || e[8] !== o.style || e[9] !== i ? (a = Ert("a", { ...i, className: o.className, style: o.style }), e[7] = o.className, e[8] = o.style, e[9] = i, e[10] = a) : a = e[10], a;
}
function wjS(t) {
  const e = s$t(11);
  let n, i, r;
  e[0] !== t ? ({ className: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== n || e[5] !== r ? (s = ar({ rootClass: "ui-breadcrumb__page", stylexStyles: _jS(), className: n, style: r }), e[4] = n, e[5] = r, e[6] = s) : s = e[6];
  const o = s;
  let a;
  return e[7] !== o.className || e[8] !== o.style || e[9] !== i ? (a = Ert("span", { "aria-current": "page", ...i, className: o.className, style: o.style }), e[7] = o.className, e[8] = o.style, e[9] = i, e[10] = a) : a = e[10], a;
}
function CjS(t) {
  const e = s$t(15);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, className: i, style: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  let o;
  e[5] !== i || e[6] !== s ? (o = ar({ rootClass: "ui-breadcrumb__separator", stylexStyles: bjS(), className: i, style: s }), e[5] = i, e[6] = s, e[7] = o) : o = e[7];
  const a = o;
  let l;
  e[8] !== n ? (l = n ?? Ert(zt, { color: "tertiary", name: "chevron-right", size: 10 }), e[8] = n, e[9] = l) : l = e[9];
  let c;
  return e[10] !== a.className || e[11] !== a.style || e[12] !== r || e[13] !== l ? (c = Ert("li", { "aria-hidden": "true", role: "presentation", ...r, className: a.className, style: a.style, children: l }), e[10] = a.className, e[11] = a.style, e[12] = r, e[13] = l, e[14] = c) : c = e[14], c;
}
function TjS(t) {
  const e = s$t(14);
  let n, i, r;
  e[0] !== t ? ({ className: n, style: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  let s;
  e[4] !== n || e[5] !== r ? (s = ar({ rootClass: "ui-breadcrumb__ellipsis", stylexStyles: yjS(), className: n, style: r }), e[4] = n, e[5] = r, e[6] = s) : s = e[6];
  const o = s;
  let a;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = gn(SjS()), e[7] = a) : a = e[7];
  const l = a;
  let c, u;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = Ert(zt, { color: "tertiary", name: "ellipsis", size: 12 }), u = Ert("span", { className: l.className, style: l.style, children: "More" }), e[8] = c, e[9] = u) : (c = e[8], u = e[9]);
  let d;
  return e[10] !== o.className || e[11] !== o.style || e[12] !== i ? (d = pjS("span", { "aria-hidden": "true", role: "presentation", ...i, className: o.className, style: o.style, children: [c, u] }), e[10] = o.className, e[11] = o.style, e[12] = i, e[13] = d) : d = e[13], d;
}
var hGe, 