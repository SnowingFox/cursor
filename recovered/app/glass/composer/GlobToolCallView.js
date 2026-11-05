// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GlobToolCallView.js range:15468064..15469675
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt, Ami
// wrapper-init: TNS -> globToolCallViewModuleInit
// hoisted-owner: GrepToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2414); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: TNS -> globToolCallViewModuleInit; INS -> GrepToolCallView (apply-map AST equivalent)

var globToolCallViewModuleInit = L({
  "GlobToolCallView.js"() {
    "use strict";

    E(), Ekt(), Gjt(), Ami();
  }
});
import { jsx as T6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ENS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function GrepToolCallView(t) {
  const e = ENS(13),
    {
      vm: n,
      onFileClick: i,
      onFileContextMenu: r
    } = t;
  if (n.outcome.resultCase !== "success") {
    let c;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = T6r(g0e, {
      children: "No results"
    }), e[0] = c) : c = e[0], c;
  }
  let s;
  e[1] !== n.hits ? (s = n.hits ?? [], e[1] = n.hits, e[2] = s) : s = e[2];
  const o = s;
  if (o.length === 0) {
    let c;
    return e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = T6r(g0e, {
      children: "No matches found"
    }), e[3] = c) : c = e[3], c;
  }
  let a;
  if (e[4] !== o || e[5] !== i || e[6] !== r) {
    let c;
    e[8] !== i || e[9] !== r ? (c = u => {
      const {
          path: d,
          matchCount: h,
          firstLine: p
        } = u,
        g = h === void 0 ? 0 : h,
        {
          name: f,
          dir: _
        } = xmi(d),
        b = g > 0 ? _ ? `${_} -- ${g} ${g === 1 ? "match" : "matches"}` : `${g} ${g === 1 ? "match" : "matches"}` : _ || void 0;
      return T6r(Wjt, {
        icon: "file",
        primary: f,
        secondary: b,
        onClick: i ? () => i(d, p !== void 0 ? {
          startLine: p
        } : void 0) : void 0,
        onContextMenu: r ? y => r(y, d) : void 0
      }, d);
    }, e[8] = i, e[9] = r, e[10] = c) : c = e[10], a = o.map(c), e[4] = o, e[5] = i, e[6] = r, e[7] = a;
  } else a = e[7];
  let l;
  return e[11] !== a ? (l = T6r(Hjt, {
    children: a
  }), e[11] = a, e[12] = l) : l = e[12], l;
}
