// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PluginCommandSearchMenu.js range:17152386..17154021
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.257Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, promptInputMenuNavigation.js, AddPluginSearch.js, Plugins.search.js, menu.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, promptInputMenuNavigation.js, AddPluginSearch.js, Plugins.search.js, menu.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Zi1 = L({ "PluginCommandSearchMenu.js"() {
  "use strict";
  E(), qmp(), whp(), E7r(), aJ();
} });
import { jsxs as zEa, jsx as VEa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Qi1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Ji1(t) {
  const e = Qi1(18), { title: n, description: i, children: r, className: s, style: o, titleExtra: a, header: l } = t;
  let c, u;
  e[0] !== s ? (c = { className: "ui-78zum5 ui-dt5ytf ui-1v2ro7d" }, u = ri(c.className, s), e[0] = s, e[1] = c, e[2] = u) : (c = e[1], u = e[2]);
  let d;
  e[3] !== c.style || e[4] !== o ? (d = { ...c.style, ...o }, e[3] = c.style, e[4] = o, e[5] = d) : d = e[5];
  let h;
  e[6] !== i || e[7] !== l || e[8] !== n || e[9] !== a ? (h = l !== void 0 ? l : !!n && zEa("div", { className: "ui-78zum5 ui-dt5ytf ui-1jnr06f", children: [zEa("div", { className: "ui-78zum5 ui-6s0dn4 ui-1qughib ui-1v2ro7d", children: [VEa("h3", { className: "ui-fc7y3v ui-1yl5bsf ui-1wd3ewq ui-1yxxptd ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", children: n }), a] }), i && VEa("p", { className: "ui-1wm8ruf ui-20ajya ui-19aaqeu ui-spwq11 ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b", children: i })] }), e[6] = i, e[7] = l, e[8] = n, e[9] = a, e[10] = h) : h = e[10];
  let p;
  e[11] !== r ? (p = VEa("div", { className: "ui-78zum5 ui-dt5ytf ui-193iq5w ui-b3r6kr", children: r }), e[11] = r, e[12] = p) : p = e[12];
  let g;
  return e[13] !== u || e[14] !== d || e[15] !== h || e[16] !== p ? (g = zEa("div", { className: u, style: d, children: [h, p] }), e[13] = u, e[14] = d, e[15] = h, e[16] = p, e[17] = g) : g = e[17], g;
}
