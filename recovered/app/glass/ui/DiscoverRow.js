// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DiscoverRow.js range:22832914..22839772
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.645Z
mQ1 = L({ "DiscoverRow.js"() {
  "use strict";
  E(), Mt(), sQ1(), gWm = 0.9;
} });
import { jsxs as YCt, jsx as APe } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as jZa } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as gQ1 } from "./react-runtime/react/esm-index-production.js";
function fQ1() {
  return _Wm.root;
}
function vQ1() {
  return bWm.root;
}
function fWm(t) {
  const e = jZa(34), { title: n, scopeChipLabel: i, plugins: r, installedPluginIdSet: s, onAdd: o, onPluginClick: a, endCol: l, emptyState: c } = t, [u, d] = gQ1(false);
  if (r.length === 0 && c === void 0) return null;
  let h;
  e[0] !== u || e[1] !== r ? (h = u ? r : r.slice(0, yWm), e[0] = u, e[1] = r, e[2] = h) : h = e[2];
  const p = h, g = r.length - p.length;
  let f;
  e[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (f = Sc(fQ1()), e[3] = f) : f = e[3];
  const _ = f;
  let b;
  e[4] !== i || e[5] !== n ? (b = APe("div", { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-euugli", children: i ? APe(xs, { content: `Team marketplace for ${i}`, openDelay: 20, children: APe(nn, { size: "lg", weight: "medium", color: "primary", as: "h3", children: n }) }) : APe(nn, { size: "lg", weight: "medium", color: "primary", as: "h3", children: n }) }), e[4] = i, e[5] = n, e[6] = b) : b = e[6];
  let y;
  e[7] !== l || e[8] !== b ? (y = YCt("div", { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-1qughib cursor-ui-exx8yu cursor-ui-1yxiud8 cursor-ui-18d9i69 cursor-ui-yab65l", children: [b, l] }), e[7] = l, e[8] = b, e[9] = y) : y = e[9];
  const S = y;
  if (r.length === 0) {
    let M;
    return e[10] !== c || e[11] !== S || e[12] !== _.className || e[13] !== _.style ? (M = YCt("div", { className: _.className, style: _.style, children: [S, c] }), e[10] = c, e[11] = S, e[12] = _.className, e[13] = _.style, e[14] = M) : M = e[14], M;
  }
  const k = _.className, C = _.style;
  let T;
  if (e[15] !== s || e[16] !== o || e[17] !== a || e[18] !== p) {
    let M;
    e[20] !== s || e[21] !== o || e[22] !== a ? (M = (O) => APe(_Q1, { title: O.displayName, description: O.description, icon: W7(O, 32), action: APe(bQ1, { installed: s.has(O.id), onAdd: () => o(O) }), onClick: () => a(O) }, O.id), e[20] = s, e[21] = o, e[22] = a, e[23] = M) : M = e[23], T = p.map(M), e[15] = s, e[16] = o, e[17] = a, e[18] = p, e[19] = T;
  } else T = e[19];
  let I;
  e[24] !== T ? (I = APe("div", { className: "cursor-ui-rvj5dj cursor-ui-nby9oq cursor-ui-jw786u cursor-ui-j1vagl cursor-ui-fbz45d", children: T }), e[24] = T, e[25] = I) : I = e[25];
  let A;
  e[26] !== g ? (A = g > 0 && YCt("button", { type: "button", className: "cursor-ui-jyslct cursor-ui-jbqb8w cursor-ui-972fbf cursor-ui-gfja2r cursor-ui-1qhh985 cursor-ui-yj58a3 cursor-ui-1ejq31n cursor-ui-11pwa6s cursor-ui-1sy0etr cursor-ui-1b16gh4 cursor-ui-13ly8rp cursor-ui-1yxiud8 cursor-ui-1xlntvz cursor-ui-yab65l cursor-ui-1om1abp cursor-ui-jb2p0i cursor-ui-1wm8ruf cursor-ui-1e4uaio cursor-ui-xs50az cursor-ui-dpxx8g cursor-ui-1ypdohk cursor-ui-1043rbw cursor-ui-qcrz7y", onClick: () => d(true), children: ["Show ", g, " more"] }), e[26] = g, e[27] = A) : A = e[27];
  let P;
  return e[28] !== S || e[29] !== _.className || e[30] !== _.style || e[31] !== I || e[32] !== A ? (P = YCt("div", { className: k, style: C, children: [S, I, A] }), e[28] = S, e[29] = _.className, e[30] = _.style, e[31] = I, e[32] = A, e[33] = P) : P = e[33], P;
}
function _Q1(t) {
  const e = jZa(20), { title: n, description: i, icon: r, leadingContent: s, action: o, onClick: a } = t;
  let l;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (l = Sc(vQ1()), e[0] = l) : l = e[0];
  const c = l;
  let u;
  e[1] !== r ? (u = r ? APe("div", { className: "cursor-ui-78zum5 cursor-ui-2lah0s cursor-ui-6s0dn4 cursor-ui-l56j7k cursor-ui-1tsk5d4 cursor-ui-tsj531 cursor-ui-1043rbw cursor-ui-6ikm8r cursor-ui-10wlt62", children: r }) : null, e[1] = r, e[2] = u) : u = e[2];
  let d;
  e[3] !== n ? (d = APe(nn, { size: "md", weight: "medium", truncate: true, children: n }), e[3] = n, e[4] = d) : d = e[4];
  let h;
  e[5] !== i ? (h = i ? APe(nn, { size: "sm", color: "secondary", className: "cursor-ui-6ikm8r cursor-ui-10wlt62 cursor-ui-lyipyv cursor-ui-uxw1ft", truncate: true, children: i }) : null, e[5] = i, e[6] = h) : h = e[6];
  let p;
  e[7] !== d || e[8] !== h ? (p = YCt("div", { className: "cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-dt5ytf cursor-ui-5cdhqx cursor-ui-euugli", children: [d, h] }), e[7] = d, e[8] = h, e[9] = p) : p = e[9];
  let g;
  e[10] !== s || e[11] !== a || e[12] !== u || e[13] !== p ? (g = YCt("button", { type: "button", className: "cursor-ui-15bjb6t cursor-ui-1pd3egz cursor-ui-1t35e8 cursor-ui-1qlqyl8 cursor-ui-jb2p0i cursor-ui-j3b58b cursor-ui-at24cr cursor-ui-1yf7rl7 cursor-ui-dj266r cursor-ui-1uhho1l cursor-ui-18d9i69 cursor-ui-1xpa7k cursor-ui-exx8yu cursor-ui-1b16gh4 cursor-ui-1sy0etr cursor-ui-11pwa6s cursor-ui-1ejq31n cursor-ui-yj58a3 cursor-ui-1qhh985 cursor-ui-gfja2r cursor-ui-972fbf cursor-ui-jbqb8w cursor-ui-1lugfcp cursor-ui-jyslct cursor-ui-78zum5 cursor-ui-1iyjqo2 cursor-ui-s83m0k cursor-ui-dl72j9 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-1oot3zn cursor-ui-1heor9g cursor-ui-dpxx8g cursor-ui-1ypdohk cursor-ui-euugli", onClick: a, children: [s, u, p] }), e[10] = s, e[11] = a, e[12] = u, e[13] = p, e[14] = g) : g = e[14];
  let f;
  e[15] !== o ? (f = o ? APe("div", { className: "cursor-ui-78zum5 cursor-ui-1q0g3np cursor-ui-6s0dn4 cursor-ui-ehausa cursor-ui-2lah0s", children: o }) : null, e[15] = o, e[16] = f) : f = e[16];
  let _;
  return e[17] !== g || e[18] !== f ? (_ = YCt("div", { className: c.className, style: c.style, children: [g, f] }), e[17] = g, e[18] = f, e[19] = _) : _ = e[19], _;
}
function bQ1(t) {
  const e = jZa(9), { installed: n, onAdd: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { 0: { className: "cursor-ui-1gv78wz cursor-ui-1cea8gx cursor-ui-11twubx cursor-ui-19aaqeu cursor-ui-1dsx48b" }, 1: { className: "cursor-ui-1gv78wz cursor-ui-1cea8gx cursor-ui-11twubx cursor-ui-19aaqeu cursor-ui-1dsx48b cursor-ui-1fzehxr" } }, e[0] = r) : r = e[0];
  const s = r[!!n << 0];
  let o;
  e[1] !== n ? (o = n ? APe(zt, { name: "check", size: "sm", "aria-hidden": true }) : null, e[1] = n, e[2] = o) : o = e[2];
  const a = n ? "Added" : "Add";
  let l;
  return e[3] !== n || e[4] !== i || e[5] !== s.className || e[6] !== o || e[7] !== a ? (l = YCt(An, { variant: "secondary", size: "sm", rounded: true, onClick: i, disabled: n, className: s.className, style: vWm, children: [o, a] }), e[3] = n, e[4] = i, e[5] = s.className, e[6] = o, e[7] = a, e[8] = l) : l = e[8], l;
}
var vWm, _Wm, bWm, yWm, 