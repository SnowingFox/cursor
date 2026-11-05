// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentToolCallView.js range:15542503..15549690
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Adi, dy, nmi, uae
// wrapper-init: oOS
// hoisted-owner: todo-list.js (app-out-vs-workbench-workbench-glass-main-js:2436); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

oOS = L({ "EnvironmentToolCallView.js"() {
  "use strict";
  E(), Adi(), dy(), nmi(), uae(), Mya = 2e4;
} });
import { jsx as Une, jsxs as Fmi, Fragment as aOS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as W6r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as lOS } from "./react-runtime/react/esm-index-production.js";
function cOS() {
  return sYh.base;
}
function uOS({ dimmed: t, status: e }) {
  return { item: [Dya.base, e === "pending" ? Dya.pending : null], label: oYh.base, indicator: aYh.base, content: [Bmi.base, e === "in_progress" ? Bmi.inProgress : null, t && e === "in_progress" ? Bmi.dimmedInProgress : null, e === "completed" || e === "cancelled" ? Bmi.finished : null] };
}
function dOS() {
  return { container: lYh.base, header: cYh.base, headerLeft: uYh.base, headerTitle: dYh.base, headerCount: hYh.base, body: pYh.base };
}
function nYh(t) {
  switch (t) {
    case "in_progress":
    case "completed":
    case "cancelled":
    case "pending":
      return t;
    default:
      return "pending";
  }
}
function hOS(t) {
  const e = W6r(5), { status: n } = t;
  switch (n) {
    case "in_progress": {
      let i;
      return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Une(zt, { name: "arrow-circle-right", size: 14, color: "secondary" }), e[0] = i) : i = e[0], i;
    }
    case "completed": {
      let i;
      return e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Une(zt, { name: "check-circle", size: 14, color: "tertiary" }), e[1] = i) : i = e[1], i;
    }
    case "cancelled": {
      let i;
      return e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Une(zt, { name: "x-circle", size: 14, color: "tertiary" }), e[2] = i) : i = e[2], i;
    }
    case "pending": {
      let i;
      return e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Une(zt, { name: "circle-dashed", size: 14, color: "quaternary" }), e[3] = i) : i = e[3], i;
    }
    default: {
      let i;
      return e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = Une(zt, { name: "circle-dashed", size: 14, color: "quaternary" }), e[4] = i) : i = e[4], i;
    }
  }
}
function pOS(t) {
  const e = W6r(27), { todo: n, isDimmed: i } = t;
  let r, s, o, a, l;
  if (e[0] !== i || e[1] !== n.status) {
    a = nYh(n.status);
    const _ = uOS({ dimmed: i === true, status: a });
    s = ar({ rootClass: "ui-todo-item", stylexStyles: _.item, className: ri(a === "pending" && "ui-todo-item--pending", a === "completed" && "ui-todo-item--completed", a === "cancelled" && "ui-todo-item--cancelled", i && "ui-todo-item--dimmed") }), o = gn(_.label), r = gn(_.indicator), l = ar({ rootClass: "ui-todo-item__content", stylexStyles: _.content, className: a === "in_progress" ? "ui-todo-item__content--in-progress" : void 0 }), e[0] = i, e[1] = n.status, e[2] = r, e[3] = s, e[4] = o, e[5] = a, e[6] = l;
  } else r = e[2], s = e[3], o = e[4], a = e[5], l = e[6];
  const c = l, u = `todo-${n.id}`;
  let d;
  e[7] !== a ? (d = Une(hOS, { status: a }), e[7] = a, e[8] = d) : d = e[8];
  let h;
  e[9] !== r.className || e[10] !== r.style || e[11] !== d ? (h = Une("div", { className: r.className, style: r.style, children: d }), e[9] = r.className, e[10] = r.style, e[11] = d, e[12] = h) : h = e[12];
  let p;
  e[13] !== c.className || e[14] !== c.style || e[15] !== n.content ? (p = Une("span", { className: c.className, style: c.style, children: n.content }), e[13] = c.className, e[14] = c.style, e[15] = n.content, e[16] = p) : p = e[16];
  let g;
  e[17] !== o.className || e[18] !== o.style || e[19] !== h || e[20] !== p ? (g = Fmi("div", { className: o.className, style: o.style, children: [h, p] }), e[17] = o.className, e[18] = o.style, e[19] = h, e[20] = p, e[21] = g) : g = e[21];
  let f;
  return e[22] !== s.className || e[23] !== s.style || e[24] !== u || e[25] !== g ? (f = Une("li", { id: u, className: s.className, style: s.style, children: g }), e[22] = s.className, e[23] = s.style, e[24] = u, e[25] = g, e[26] = f) : f = e[26], f;
}
function iYh(t) {
  const e = W6r(10), { todos: n, dimmedTodoIds: i } = t;
  if (n.length === 0) return null;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = ar({ rootClass: "ui-todo-list", stylexStyles: cOS() }), e[0] = r) : r = e[0];
  const s = r, o = s.className, a = s.style;
  let l;
  if (e[1] !== i || e[2] !== n) {
    let u;
    e[4] !== i ? (u = (d) => Une(pOS, { todo: d, isDimmed: i?.has(d.id) }, d.id), e[4] = i, e[5] = u) : u = e[5], l = n.map(u), e[1] = i, e[2] = n, e[3] = l;
  } else l = e[3];
  let c;
  return e[6] !== s.className || e[7] !== s.style || e[8] !== l ? (c = Une("ul", { className: o, style: a, children: l }), e[6] = s.className, e[7] = s.style, e[8] = l, e[9] = c) : c = e[9], c;
}
function rYh(t) {
  const e = W6r(24), { todos: n, dimmedTodoIds: i, defaultExpanded: r } = t, s = r === void 0 ? true : r, [o, a] = lOS(s);
  let l, c, u, d, h, p;
  if (e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    const P = dOS();
    l = ar({ rootClass: "ui-todo-list-container", stylexStyles: P.container }), c = gn(P.header), d = gn(P.headerLeft), h = ar({ rootClass: "ui-todo-list-header__title", stylexStyles: P.headerTitle }), u = gn(P.headerCount), p = gn(P.body), e[0] = l, e[1] = c, e[2] = u, e[3] = d, e[4] = h, e[5] = p;
  } else l = e[0], c = e[1], u = e[2], d = e[3], h = e[4], p = e[5];
  const g = p;
  let f;
  e[6] !== n ? (f = n.filter(gOS), e[6] = n, e[7] = f) : f = e[7];
  const _ = f.length;
  let b;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (b = () => {
    a(mOS);
  }, e[8] = b) : b = e[8];
  const y = b;
  if (n.length === 0) return null;
  const S = o ? "chevron-down" : "chevron-right";
  let k;
  e[9] !== S ? (k = Une(zt, { name: S, size: 12, color: "secondary" }), e[9] = S, e[10] = k) : k = e[10];
  let C;
  e[11] !== _ || e[12] !== n.length ? (C = _ > 0 ? Fmi("span", { children: [_, " of ", n.length, " Done"] }) : Fmi(aOS, { children: ["To-dos", " ", Une("span", { className: u.className, style: u.style, children: n.length })] }), e[11] = _, e[12] = n.length, e[13] = C) : C = e[13];
  let T;
  e[14] !== k || e[15] !== C ? (T = Une("button", { type: "button", className: c.className, style: c.style, onClick: y, children: Une("div", { className: d.className, style: d.style, children: Fmi("div", { className: h.className, style: h.style, children: [k, C] }) }) }), e[14] = k, e[15] = C, e[16] = T) : T = e[16];
  let I;
  e[17] !== i || e[18] !== o || e[19] !== n ? (I = o && Une("div", { className: g.className, style: g.style, children: Une(iYh, { todos: n, dimmedTodoIds: i }) }), e[17] = i, e[18] = o, e[19] = n, e[20] = I) : I = e[20];
  let A;
  return e[21] !== T || e[22] !== I ? (A = Fmi("div", { className: l.className, style: l.style, children: [T, I] }), e[21] = T, e[22] = I, e[23] = A) : A = e[23], A;
}
function mOS(t) {
  return !t;
}
function gOS(t) {
  const e = nYh(t.status);
  return e === "completed" || e === "cancelled";
}
var sYh, Dya, oYh, aYh, Bmi, lYh, cYh, uYh, dYh, hYh, pYh, 