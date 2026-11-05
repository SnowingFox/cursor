// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: SemSearchToolCallView.js range:15478067..15479737
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt, Ami
// wrapper-init: jNS
// hoisted-owner: WebFetchToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2419); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

var jNS = L({ "SemSearchToolCallView.js"() {
  "use strict";
  E(), Ekt(), Gjt(), Ami();
} });
import { jsx as yya, jsxs as $NS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as HNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function WNS(t) {
  try {
    const e = new URL(t);
    return { hostname: e.hostname, pathname: e.pathname };
  } catch {
    return { hostname: t, pathname: "" };
  }
}
function GNS(t) {
  const e = HNS(17), { vm: n, onUrlClick: i } = t;
  if (n.outcome.resultCase !== "success") {
    let _;
    return e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (_ = yya(g0e, { children: "No results" }), e[0] = _) : _ = e[0], _;
  }
  const r = n.resultUrl ?? "", s = n.markdown ?? "";
  let o;
  e[1] !== r ? (o = WNS(r), e[1] = r, e[2] = o) : o = e[2];
  const { hostname: a, pathname: l } = o;
  let c;
  if (e[3] !== s) {
    const _ = s.replace(/\n{3,}/g, `

`).trim();
    c = _.length > R6r ? `${_.slice(0, R6r)}
[...${_.length - R6r} more characters]` : _, e[3] = s, e[4] = c;
  } else c = e[4];
  const u = c, d = l !== "/" ? l : void 0;
  let h;
  e[5] !== i || e[6] !== r ? (h = i && r ? () => i(r) : void 0, e[5] = i, e[6] = r, e[7] = h) : h = e[7];
  let p;
  e[8] !== a || e[9] !== d || e[10] !== h ? (p = yya(Wjt, { icon: "globe", primary: a, secondary: d, onClick: h }), e[8] = a, e[9] = d, e[10] = h, e[11] = p) : p = e[11];
  let g;
  e[12] !== u ? (g = u && yya(gNS, { children: u }), e[12] = u, e[13] = g) : g = e[13];
  let f;
  return e[14] !== p || e[15] !== g ? (f = $NS(Hjt, { children: [p, g] }), e[14] = p, e[15] = g, e[16] = f) : f = e[16], f;
}
var R6r, 