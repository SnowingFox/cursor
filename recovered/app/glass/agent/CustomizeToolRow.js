// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeToolRow.js range:17211715..17214266
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.194Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, icon.js, Text.js, Switch.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, icon.js, Text.js, Switch.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
var Rs1 = L({ "CustomizeToolRow.js"() {
  "use strict";
  E(), fd(), dy(), qUt();
} });
import { jsx as qrt, jsxs as nIa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Dgp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function Ps1(t) {
  const e = Dgp(13), { agents: n, tools: i } = t, r = n.length;
  let s;
  e[0] !== n ? (s = n.map(Ds1), e[0] = n, e[1] = s) : s = e[1];
  let o;
  e[2] !== n.length || e[3] !== s ? (o = qrt(Ngp, { title: "Agents", count: r, emptyLabel: "No project agents have access yet.", children: s }), e[2] = n.length, e[3] = s, e[4] = o) : o = e[4];
  const a = i.length;
  let l;
  e[5] !== i ? (l = i.map(Ms1), e[5] = i, e[6] = l) : l = e[6];
  let c;
  e[7] !== l || e[8] !== i.length ? (c = qrt(Ngp, { title: "Tools", count: a, emptyLabel: "No MCP tools are connected yet.", children: l }), e[7] = l, e[8] = i.length, e[9] = c) : c = e[9];
  let u;
  return e[10] !== o || e[11] !== c ? (u = nIa("div", { className: "ui-78zum5 ui-2lwn1j ui-12lumcd ui-dt5ytf ui-1m87ff3 ui-6ikm8r ui-1odjw0f ui-1rohswg", "data-project-surface": "customize", children: [o, c] }), e[10] = o, e[11] = c, e[12] = u) : u = e[12], u;
}
function Ms1(t) {
  return qrt(Is1, { tool: t }, t.id);
}
function Ds1(t) {
  return qrt(ks1, { agent: t }, t.id);
}
function Ngp(t) {
  const e = Dgp(16), { title: n, count: i, emptyLabel: r, children: s } = t;
  let o;
  e[0] !== n ? (o = qrt(nn, { as: "h3", size: "lg", weight: "medium", className: "ui-1wd3ewq", children: n }), e[0] = n, e[1] = o) : o = e[1];
  let a;
  e[2] !== i ? (a = qrt(nn, { size: "md", weight: "regular", numeric: true, className: "ui-4b2ntj ui-ss6m8b", children: i }), e[2] = i, e[3] = a) : a = e[3];
  let l;
  e[4] !== o || e[5] !== a ? (l = nIa("header", { className: "ui-78zum5 ui-1pha0wt ui-pkkfsy", children: [o, a] }), e[4] = o, e[5] = a, e[6] = l) : l = e[6];
  let c;
  e[7] !== s || e[8] !== i || e[9] !== r ? (c = i === 0 ? qrt("li", { className: "ui-13ly8rp ui-1xpa7k ui-1xlntvz ui-1uhho1l ui-1e4uaio", children: qrt(nn, { size: "md", children: r }) }) : s, e[7] = s, e[8] = i, e[9] = r, e[10] = c) : c = e[10];
  let u;
  e[11] !== c ? (u = qrt("ul", { className: "ui-78zum5 ui-dt5ytf ui-dj266r ui-1yf7rl7 ui-at24cr ui-j3b58b ui-exx8yu ui-1xpa7k ui-18d9i69 ui-1uhho1l ui-3ct3a4", children: c }), e[11] = c, e[12] = u) : u = e[12];
  let d;
  return e[13] !== l || e[14] !== u ? (d = nIa("section", { className: "ui-78zum5 ui-dt5ytf ui-ehausa", children: [l, u] }), e[13] = l, e[14] = u, e[15] = d) : d = e[15], d;
}
