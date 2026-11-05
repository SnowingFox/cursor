// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: RadioGroup.types.js range:14693935..14697473
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.944Z
CkS = L({ "RadioGroup.types.js"() {
  "use strict";
  E(), cga = "md";
} });
import { jsx as Q1t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as u5r } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useId as TkS } from "./react-runtime/react/esm-index-production.js";
function o9h(t) {
  const e = u5r(11), { interactive: n, size: i, variant: r } = t;
  let s;
  e[0] !== i ? (s = gn(dga.root, dga[i]), e[0] = i, e[1] = s) : s = e[1];
  const o = s;
  let a;
  e[2] !== i || e[3] !== r ? (a = gn(uga.root, uga[i], a9h[r]), e[2] = i, e[3] = r, e[4] = a) : a = e[4];
  let l;
  e[5] !== o || e[6] !== n ? (l = n ? Q1t(aga, { keepMounted: true, ...o }) : Q1t("span", { ...o }), e[5] = o, e[6] = n, e[7] = l) : l = e[7];
  let c;
  return e[8] !== a || e[9] !== l ? (c = Q1t("span", { "aria-hidden": "true", ...a, children: l }), e[8] = a, e[9] = l, e[10] = c) : c = e[10], c;
}
function EkS(t) {
  const e = u5r(10);
  let n, i, r;
  e[0] !== t ? ({ name: n, orientation: r, ...i } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = r === void 0 ? "vertical" : r, o = TkS(), a = n ?? o;
  let l;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = { 0: { className: "ui-78zum5 ui-ehausa ui-dt5ytf" }, 1: { className: "ui-78zum5 ui-ehausa ui-1q0g3np ui-6s0dn4" } }, e[4] = l) : l = e[4];
  const c = l[(s === "horizontal") << 0];
  let u;
  return e[5] !== s || e[6] !== i || e[7] !== a || e[8] !== c ? (u = Q1t(lga, { ...i, name: a, "data-component": "radio-group", "data-orientation": s, ...c }), e[5] = s, e[6] = i, e[7] = a, e[8] = c, e[9] = u) : u = e[9], u;
}
function IkS(t) {
  const e = u5r(13);
  let n, i, r;
  e[0] !== t ? ({ size: i, variant: r, ...n } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? cga : i, o = r === void 0 ? "primary" : r;
  let a;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (a = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-1n2onr6 ui-1k57tk5 ui-1t137rt ui-ggy1nq ui-1ypdohk ui-n4s58k ui-1cpjm7i ui-1hmns74 ui-1lc8iih ui-2hztxu ui--default-marker" }, e[4] = a) : a = e[4];
  let l;
  e[5] !== s || e[6] !== o ? (l = Q1t(o9h, { interactive: true, size: s, variant: o }), e[5] = s, e[6] = o, e[7] = l) : l = e[7];
  let c;
  return e[8] !== n || e[9] !== s || e[10] !== l || e[11] !== o ? (c = Q1t(oga, { ...n, "data-component": "radio", "data-size": s, "data-variant": o, ...a, children: l }), e[8] = n, e[9] = s, e[10] = l, e[11] = o, e[12] = c) : c = e[12], c;
}
function fpi(t) {
  const e = u5r(10), { checked: n, disabled: i, size: r, variant: s } = t, o = r === void 0 ? cga : r, a = s === void 0 ? "primary" : s, l = n || void 0, c = i || void 0;
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-47corl ui--default-marker" }, e[0] = u) : u = e[0];
  let d;
  e[1] !== o || e[2] !== a ? (d = Q1t(o9h, { interactive: false, size: o, variant: a }), e[1] = o, e[2] = a, e[3] = d) : d = e[3];
  let h;
  return e[4] !== o || e[5] !== l || e[6] !== c || e[7] !== d || e[8] !== a ? (h = Q1t("span", { "aria-hidden": "true", "data-component": "radio", "data-size": o, "data-variant": a, "data-checked": l, "data-disabled": c, ...u, children: d }), e[4] = o, e[5] = l, e[6] = c, e[7] = d, e[8] = a, e[9] = h) : h = e[9], h;
}
var uga, a9h, dga, 