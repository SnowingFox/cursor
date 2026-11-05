// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Checkbox.types.js range:14674796..14679311
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.519Z
hkS = L({ "Checkbox.types.js"() {
  "use strict";
  E(), ega = "md";
} });
import { jsx as $We } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as tga } from "./react-runtime/react/esm-compiler-runtime-production.js";
function G4h(t) {
  const e = tga(5), { indeterminate: n, interactive: i, size: r, variant: s } = t;
  let o;
  if (e[0] !== n || e[1] !== i || e[2] !== r || e[3] !== s) {
    const a = gn(nga.root, nga[r], q4h[s]), l = { className: "ui-10l6tqk ui-10a8y8t ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1g0ag68 ui-n9if97 ui-7pq1vu ui-sagj69 ui-6ekqhr ui-g01cxk ui-hhdk15 ui-nyzrob ui-h98lc ui-1nrvvgt ui-cntms" }, c = z4h[r];
    o = $We("span", { "aria-hidden": "true", className: ri("ui-checkbox__box", a.className), style: a.style, children: i ? $We(Jma, { className: ri("ui-checkbox__icon", l.className), keepMounted: true, render: (u, d) => $We("span", { ...u, children: $We(zt, { capTrim: true, name: d.indeterminate ? "minus" : "check", size: c, style: iga }) }), style: l.style }) : $We("span", { className: ri("ui-checkbox__icon", l.className), style: l.style, children: $We(zt, { capTrim: true, name: n ? "minus" : "check", size: c, style: iga }) }) }), e[0] = n, e[1] = i, e[2] = r, e[3] = s, e[4] = o;
  } else o = e[4];
  return o;
}
function G5(t) {
  const e = tga(39);
  let n, i, r, s, o, a;
  e[0] !== t ? ({ size: s, variant: o, indeterminate: a, disabled: n, readOnly: i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = a) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5], a = e[6]);
  const l = s === void 0 ? ega : s, c = o === void 0 ? "primary" : o, u = a === void 0 ? false : a;
  let d, h, p, g, f, _, b, y, S, k;
  e[7] !== n || e[8] !== u || e[9] !== i || e[10] !== r || e[11] !== l || e[12] !== c ? (h = { 0: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-1n2onr6 ui-1k57tk5 ui-1t137rt ui-ggy1nq ui-1cpjm7i ui-1hmns74 ui-1lc8iih ui-2hztxu ui-1ypdohk ui--default-marker" }, 1: { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-1n2onr6 ui-1k57tk5 ui-1t137rt ui-ggy1nq ui-1cpjm7i ui-1hmns74 ui-1lc8iih ui-2hztxu ui-t0e3qv ui--default-marker" } }[!!(n || i) << 0], d = Qma, f = r, _ = u, b = n, y = i, S = "checkbox", k = l, p = c, g = ri("ui-checkbox", h.className), e[7] = n, e[8] = u, e[9] = i, e[10] = r, e[11] = l, e[12] = c, e[13] = d, e[14] = h, e[15] = p, e[16] = g, e[17] = f, e[18] = _, e[19] = b, e[20] = y, e[21] = S, e[22] = k) : (d = e[13], h = e[14], p = e[15], g = e[16], f = e[17], _ = e[18], b = e[19], y = e[20], S = e[21], k = e[22]);
  let C;
  e[23] !== u || e[24] !== l || e[25] !== c ? (C = $We(G4h, { indeterminate: u, interactive: true, size: l, variant: c }), e[23] = u, e[24] = l, e[25] = c, e[26] = C) : C = e[26];
  let T;
  return e[27] !== d || e[28] !== h.style || e[29] !== p || e[30] !== g || e[31] !== C || e[32] !== f || e[33] !== _ || e[34] !== b || e[35] !== y || e[36] !== S || e[37] !== k ? (T = $We(d, { ...f, indeterminate: _, disabled: b, readOnly: y, "data-component": S, "data-size": k, "data-variant": p, className: g, style: h.style, children: C }), e[27] = d, e[28] = h.style, e[29] = p, e[30] = g, e[31] = C, e[32] = f, e[33] = _, e[34] = b, e[35] = y, e[36] = S, e[37] = k, e[38] = T) : T = e[38], T;
}
function r2e(t) {
  const e = tga(14), { checked: n, disabled: i, indeterminate: r, size: s, variant: o } = t, a = r === void 0 ? false : r, l = s === void 0 ? ega : s, c = o === void 0 ? "primary" : o;
  let u, d, h;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (u = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1c4vz4f ui-2lah0s ui-dl72j9 ui-xymvpz ui-47corl ui--default-marker" }, d = "true", h = ri("ui-checkbox", u.className), e[0] = u, e[1] = d, e[2] = h) : (u = e[0], d = e[1], h = e[2]);
  const p = n || void 0, g = i || void 0, f = a || void 0;
  let _;
  e[3] !== a || e[4] !== l || e[5] !== c ? (_ = $We(G4h, { indeterminate: a, interactive: false, size: l, variant: c }), e[3] = a, e[4] = l, e[5] = c, e[6] = _) : _ = e[6];
  let b;
  return e[7] !== l || e[8] !== p || e[9] !== g || e[10] !== f || e[11] !== _ || e[12] !== c ? (b = $We("span", { "aria-hidden": d, className: h, style: u.style, "data-component": "checkbox", "data-size": l, "data-variant": c, "data-checked": p, "data-disabled": g, "data-indeterminate": f, children: _ }), e[7] = l, e[8] = p, e[9] = g, e[10] = f, e[11] = _, e[12] = c, e[13] = b) : b = e[13], b;
}
var nga, q4h, z4h, iga, 