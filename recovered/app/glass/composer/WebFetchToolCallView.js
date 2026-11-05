// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: WebFetchToolCallView.js range:15479737..15481126
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt
// wrapper-init: qNS
// hoisted-owner: WebSearchToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2420); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: KNS -> WebSearchToolCallView (apply-map AST equivalent)

qNS = L({
  "WebFetchToolCallView.js"() {
    "use strict";

    E(), Ekt(), Gjt(), R6r = 1e4;
  }
});
import { jsx as P6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function VNS(t) {
  try {
    return new URL(t).hostname;
  } catch {
    return t;
  }
}
function WebSearchToolCallView(t) {
  const e = zNS(11),
    {
      vm: n,
      onUrlClick: i
    } = t;
  if (n.outcome.resultCase !== "success") {
    let l;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (l = P6r(g0e, {
      children: "No results"
    }), e[0] = l) : l = e[0], l;
  }
  let r;
  e[1] !== n.references ? (r = n.references ?? [], e[1] = n.references, e[2] = r) : r = e[2];
  const s = r;
  if (s.length === 0) {
    let l;
    return e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (l = P6r(g0e, {
      children: "No results found"
    }), e[3] = l) : l = e[3], l;
  }
  let o;
  if (e[4] !== i || e[5] !== s) {
    let l;
    e[7] !== i ? (l = c => P6r(Wjt, {
      icon: "globe",
      primary: c.title || c.url,
      secondary: c.title ? VNS(c.url) : void 0,
      onClick: i && c.url ? () => i(c.url) : void 0
    }, `${c.url}\0${c.title ?? ""}`), e[7] = i, e[8] = l) : l = e[8], o = s.map(l), e[4] = i, e[5] = s, e[6] = o;
  } else o = e[6];
  let a;
  return e[9] !== o ? (a = P6r(Hjt, {
    children: o
  }), e[9] = o, e[10] = a) : a = e[10], a;
}
