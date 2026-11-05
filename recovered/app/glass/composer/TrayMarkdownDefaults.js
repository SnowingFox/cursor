// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayMarkdownDefaults.js range:16255022..16256505
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ddi
// wrapper-init: hrp
// hoisted-owner: TrayDescription.js (app-out-vs-workbench-workbench-glass-main-js:2617); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

hrp = L({ "TrayMarkdownDefaults.js"() {
  "use strict";
  E(), Ddi(), urp = { link: { kkrTdU: "ui-1ypdohk", kMnn75: "ui-krqix3 ui-1sur9pj", $$css: true } }, drp = { a: urp.link };
} });
import { jsx as wwa } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as prp } from "./react-runtime/react/esm-compiler-runtime-production.js";
function vHS(t) {
  const e = prp(10);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, component: i, truncate: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const a = (s === void 0 ? false : s) || void 0;
  let l;
  return e[5] !== n || e[6] !== i || e[7] !== r || e[8] !== a ? (l = wwa(nn, { ...r, as: "div", color: "secondary", "data-component": i, rootStyle: grp.root, size: "md", truncate: a, weight: "regular", children: n }), e[5] = n, e[6] = i, e[7] = r, e[8] = a, e[9] = l) : l = e[9], l;
}
function mrp(t) {
  const e = prp(12);
  let n, i, r, s;
  e[0] !== t ? ({ children: n, component: i, truncate: s, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s) : (n = e[1], i = e[2], r = e[3], s = e[4]);
  const o = s === void 0 ? false : s;
  let a;
  e[5] !== n ? (a = wwa(crp, { children: n }), e[5] = n, e[6] = a) : a = e[6];
  let l;
  return e[7] !== i || e[8] !== r || e[9] !== a || e[10] !== o ? (l = wwa(vHS, { ...r, component: i, truncate: o, children: a }), e[7] = i, e[8] = r, e[9] = a, e[10] = o, e[11] = l) : l = e[11], l;
}
var grp, 