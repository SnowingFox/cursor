// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: NumberField.js range:18019868..18023993
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.831Z
var xS1 = L({ "NumberField.js"() {
  "use strict";
  E(), e5r(), Q3(), y4h(), Nhe(), TS1(), ES1(), wS1(), mS1(), hS1();
} });
import { jsx as Dwt, jsxs as b$r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ZCp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function AS1() {
  return y6e.root;
}
function RS1() {
  return y6e.titleRow;
}
function PS1() {
  return y6e.titleGroup;
}
function MS1() {
  return [y6e.title, OIr.root];
}
function DS1() {
  return y6e.helpLink;
}
function NS1() {
  return y6e.helpIcon;
}
function LS1() {
  return y6e.trailing;
}
function OS1() {
  return y6e.contentRow;
}
function FS1() {
  return [y6e.description, kz.root];
}
function BS1() {
  return y6e.descriptionTrailing;
}
function US1(t) {
  const e = ZCp(10), { href: n, tooltipLabel: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = gn(DS1()), e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (o = gn(NS1()), e[1] = o) : o = e[1];
  const a = o;
  let l;
  e[2] !== i ? (l = Dwt(zt, { "aria-label": i, className: a.className, name: "question", size: "base", style: a.style }), e[2] = i, e[3] = l) : l = e[3];
  let c;
  e[4] !== n || e[5] !== l ? (c = Dwt("a", { className: s.className, href: n, rel: "noopener noreferrer", style: s.style, target: "_blank", children: l }), e[4] = n, e[5] = l, e[6] = c) : c = e[6];
  let u;
  return e[7] !== c || e[8] !== i ? (u = Dwt(xs, { content: i, placement: "top", children: c }), e[7] = c, e[8] = i, e[9] = u) : u = e[9], u;
}
function h0n(t) {
  const e = ZCp(24), { title: n, description: i, trailing: r, descriptionTrailing: s, helpLink: o, helpTooltipLabel: a, className: l } = t, c = a === void 0 ? "Learn more" : a, u = n != null || o != null || r != null, d = i != null || s != null;
  let h;
  e[0] !== l ? (h = ar({ rootClass: "ui-page-header", stylexStyles: AS1(), className: l }), e[0] = l, e[1] = h) : h = e[1];
  const p = h;
  let g;
  e[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (g = gn(RS1()), e[2] = g) : g = e[2];
  const f = g;
  let _;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = gn(PS1()), e[3] = _) : _ = e[3];
  const b = _;
  let y;
  e[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (y = gn(MS1()), e[4] = y) : y = e[4];
  const S = y;
  let k;
  e[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (k = gn(LS1()), e[5] = k) : k = e[5];
  const C = k;
  let T;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (T = gn(OS1()), e[6] = T) : T = e[6];
  const I = T;
  let A;
  e[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (A = gn(FS1()), e[7] = A) : A = e[7];
  const P = A;
  let M;
  e[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (M = gn(BS1()), e[8] = M) : M = e[8];
  const O = M;
  if (!u && !d) return null;
  let N;
  e[9] !== u || e[10] !== o || e[11] !== c || e[12] !== n || e[13] !== r ? (N = u && b$r("div", { className: f.className, style: f.style, children: [b$r("div", { className: b.className, style: b.style, children: [n != null && Dwt("h1", { className: S.className, style: S.style, children: n }), o != null && Dwt(US1, { href: o, tooltipLabel: c })] }), r != null && Dwt("div", { className: C.className, style: C.style, children: r })] }), e[9] = u, e[10] = o, e[11] = c, e[12] = n, e[13] = r, e[14] = N) : N = e[14];
  let U;
  e[15] !== i || e[16] !== s || e[17] !== d ? (U = d && b$r("div", { className: I.className, style: I.style, children: [i != null && Dwt("p", { className: P.className, style: P.style, children: i }), s != null && Dwt("div", { className: O.className, style: O.style, children: s })] }), e[15] = i, e[16] = s, e[17] = d, e[18] = U) : U = e[18];
  let j;
  return e[19] !== p.className || e[20] !== p.style || e[21] !== N || e[22] !== U ? (j = b$r("header", { className: p.className, style: p.style, children: [N, U] }), e[19] = p.className, e[20] = p.style, e[21] = N, e[22] = U, e[23] = j) : j = e[23], j;
}
var y6e, 