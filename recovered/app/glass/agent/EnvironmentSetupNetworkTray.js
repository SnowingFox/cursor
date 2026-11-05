// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EnvironmentSetupNetworkTray.js range:22992458..22995663
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.203Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, EnvironmentSetupNetworkSection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js, EnvironmentSetupNetworkSection.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Cek = L({ "EnvironmentSetupNetworkTray.js"() {
  "use strict";
  E(), Mt(), SGm();
} });
import { jsx as cze, jsxs as wGm } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as fQa } from "./react-runtime/react/esm-compiler-runtime-production.js";
function CGm(t) {
  const e = fQa(13), { disabled: n, frame: i, hug: r, onChange: s, showBuildSecret: o, size: a, value: l, variant: c } = t, u = r === void 0 ? false : r, d = a === void 0 ? "lg" : a;
  let h;
  e[0] !== o ? (h = zJ1(o).map(Tek), e[0] = o, e[1] = h) : h = e[1];
  const p = h;
  let g;
  e[2] !== s ? (g = (_) => {
    _ !== null && s(_);
  }, e[2] = s, e[3] = g) : g = e[3];
  let f;
  return e[4] !== n || e[5] !== i || e[6] !== u || e[7] !== p || e[8] !== d || e[9] !== g || e[10] !== l || e[11] !== c ? (f = cze(b1, { contentWidth: 160, disabled: n, frame: i, hug: u, onValueChange: g, options: p, size: d, value: l, variant: c }), e[4] = n, e[5] = i, e[6] = u, e[7] = p, e[8] = d, e[9] = g, e[10] = l, e[11] = c, e[12] = f) : f = e[12], f;
}
function Tek(t) {
  return { label: t.label, value: t.value, tooltip: cze(TGm, { level: t.value }) };
}
function Eek(t) {
  const e = fQa(13), { level: n } = t;
  let i;
  e[0] !== n ? (i = Oqt(n), e[0] = n, e[1] = i) : i = e[1];
  const r = `About ${i}`;
  let s;
  e[2] !== n ? (s = cze(TGm, { level: n }), e[2] = n, e[3] = s) : s = e[3];
  let o;
  e[4] !== n ? (o = Oqt(n), e[4] = n, e[5] = o) : o = e[5];
  const a = `About ${o}`;
  let l;
  e[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = cze(zt, { color: "tertiary", name: "info", size: "sm" }), e[6] = l) : l = e[6];
  let c;
  e[7] !== a ? (c = cze("span", { "aria-label": a, role: "img", className: "cursor-ui-3nfvp2 cursor-ui-6s0dn4", children: l }), e[7] = a, e[8] = c) : c = e[8];
  let u;
  return e[9] !== r || e[10] !== s || e[11] !== c ? (u = cze(mB, { "aria-label": r, content: s, placement: "right", surfaceStyle: EGm.previewCardSurface, width: "max-content", children: c }), e[9] = r, e[10] = s, e[11] = c, e[12] = u) : u = e[12], u;
}
function TGm(t) {
  const e = fQa(16), { level: n } = t;
  let i, r, s, o, a;
  if (e[0] !== n) {
    const u = qJ1(n);
    i = ao, o = Oqt(n);
    const d = GJ1(n);
    e[6] !== d ? (a = cze(nn, { color: "secondary", size: "sm", children: d }), e[6] = d, e[7] = a) : a = e[7], r = "cursor-ui-78zum5 cursor-ui-dt5ytf cursor-ui-11twubx cursor-ui-1om1abp", s = u.map(Iek), e[0] = n, e[1] = i, e[2] = r, e[3] = s, e[4] = o, e[5] = a;
  } else i = e[1], r = e[2], s = e[3], o = e[4], a = e[5];
  let l;
  e[8] !== r || e[9] !== s ? (l = cze("div", { className: r, children: s }), e[8] = r, e[9] = s, e[10] = l) : l = e[10];
  let c;
  return e[11] !== i || e[12] !== o || e[13] !== a || e[14] !== l ? (c = wGm(i, { title: o, children: [a, l] }), e[11] = i, e[12] = o, e[13] = a, e[14] = l, e[15] = c) : c = e[15], c;
}
function Iek(t) {
  return wGm("div", { className: "cursor-ui-78zum5 cursor-ui-6s0dn4 cursor-ui-11twubx", children: [cze(zt, { "aria-hidden": true, color: t.enabled ? "green" : "tertiary", name: t.enabled ? "check" : "x", size: "sm" }), cze(nn, { color: "secondary", size: "sm", children: t.label })] }, t.key);
}
var EGm, 