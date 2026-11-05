// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Switch.types.js range:14591907..14595483
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.036Z
VSS = L({ "Switch.types.js"() {
  "use strict";
  E(), bma = "md";
} });
import { jsx as V1t } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as yma } from "./react-runtime/react/esm-compiler-runtime-production.js";
function B6h(t) {
  const e = yma(9), { interactive: n, size: i, variant: r } = t;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = V1t("span", { className: "ui-1lliihq ui-h8yej3 ui-5yr21d ui-1i4c3av ui-hwtojv ui-10mbuw1 ui-10z6xd1 ui-19ule2h ui-1g0ag68 ui-3oybdh ui-27jcm2 ui-11xpdln ui-622pbu ui-99dd5c ui-sagj69 ui-6tor67" }), e[0] = s) : s = e[0];
  const o = s;
  let a;
  e[1] !== n ? (a = n ? V1t(_ma, { className: "ui-10l6tqk ui-np7j22 ui-it89om ui-121ilyj ui-1plog1 ui-bryuvx ui-kkvxwt ui-11xpdln ui-1bqoo3p ui-sagj69 ui-1tkypeg", children: o }) : V1t("span", { className: "ui-10l6tqk ui-np7j22 ui-it89om ui-121ilyj ui-1plog1 ui-bryuvx ui-kkvxwt ui-11xpdln ui-1bqoo3p ui-sagj69 ui-1tkypeg", children: o }), e[1] = n, e[2] = a) : a = e[2];
  const l = a;
  let c;
  e[3] !== i || e[4] !== r ? (c = gn(Sma.root, Sma[i], U6h[r]), e[3] = i, e[4] = r, e[5] = c) : c = e[5];
  let u;
  return e[6] !== c || e[7] !== l ? (u = V1t("span", { "aria-hidden": "true", ...c, children: l }), e[6] = c, e[7] = l, e[8] = u) : u = e[8], u;
}
function cv(t) {
  const e = yma(18);
  let n, i, r, s, o;
  e[0] !== t ? ({ size: s, variant: o, disabled: n, readOnly: i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = s === void 0 ? bma : s, l = o === void 0 ? "green" : o;
  let c;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (c = { 0: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-1n2onr6 ui-1k57tk5 ui-1t137rt ui-ggy1nq ui-1cpjm7i ui-1hmns74 ui-1lc8iih ui-2hztxu ui-1ypdohk ui--default-marker" }, 1: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-1n2onr6 ui-1k57tk5 ui-1t137rt ui-ggy1nq ui-1cpjm7i ui-1hmns74 ui-1lc8iih ui-2hztxu ui-t0e3qv ui--default-marker" } }, e[6] = c) : c = e[6];
  const u = c[!!(n || i) << 0];
  let d;
  e[7] !== a || e[8] !== l ? (d = V1t(B6h, { interactive: true, size: a, variant: l }), e[7] = a, e[8] = l, e[9] = d) : d = e[9];
  let h;
  return e[10] !== n || e[11] !== i || e[12] !== r || e[13] !== a || e[14] !== u || e[15] !== d || e[16] !== l ? (h = V1t(vma, { ...r, disabled: n, readOnly: i, "data-component": "switch", "data-size": a, "data-variant": l, ...u, children: d }), e[10] = n, e[11] = i, e[12] = r, e[13] = a, e[14] = u, e[15] = d, e[16] = l, e[17] = h) : h = e[17], h;
}
function vSn(t) {
  const e = yma(10), { checked: n, disabled: i, size: r, variant: s } = t, o = r === void 0 ? bma : r, a = s === void 0 ? "green" : s, l = n || void 0, c = i || void 0;
  let u;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-47corl ui--default-marker" }, e[0] = u) : u = e[0];
  let d;
  e[1] !== o || e[2] !== a ? (d = V1t(B6h, { interactive: false, size: o, variant: a }), e[1] = o, e[2] = a, e[3] = d) : d = e[3];
  let h;
  return e[4] !== o || e[5] !== l || e[6] !== c || e[7] !== d || e[8] !== a ? (h = V1t("span", { "aria-hidden": "true", "data-component": "switch", "data-size": o, "data-variant": a, "data-checked": l, "data-disabled": c, ...u, children: d }), e[4] = o, e[5] = l, e[6] = c, e[7] = d, e[8] = a, e[9] = h) : h = e[9], h;
}
var Sma, U6h, 