// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ReadLintsToolCallView.js range:15476442..15478067
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt, Ami
// wrapper-init: FNS -> readLintsToolCallViewModuleInit
// hoisted-owner: SemSearchToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2418); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: FNS -> readLintsToolCallViewModuleInit; UNS -> SemSearchToolCallView (apply-map AST equivalent)

var readLintsToolCallViewModuleInit = L({
  "ReadLintsToolCallView.js"() {
    "use strict";

    E(), Ekt(), Gjt(), Ami();
  }
});
import { jsx as A6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as BNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function SemSearchToolCallView(t) {
  const e = BNS(13),
    {
      vm: n,
      onFileClick: i,
      onFileContextMenu: r
    } = t;
  if (n.outcome.resultCase !== "success") {
    let c;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = A6r(g0e, {
      children: "No results"
    }), e[0] = c) : c = e[0], c;
  }
  let s;
  e[1] !== n.hits ? (s = n.hits ?? [], e[1] = n.hits, e[2] = s) : s = e[2];
  const o = s;
  if (o.length === 0) {
    let c;
    return e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = A6r(g0e, {
      children: "No results found"
    }), e[3] = c) : c = e[3], c;
  }
  let a;
  if (e[4] !== o || e[5] !== i || e[6] !== r) {
    let c;
    e[8] !== i || e[9] !== r ? (c = u => {
      const d = u.path,
        h = u.range?.startLine ?? 0,
        p = u.range?.endLine ?? 0,
        g = d ? `${d}:${h}-${p}` : `result-${h}-${p}`,
        {
          name: f,
          dir: _
        } = xmi(d),
        b = f || "unknown",
        y = h || p ? `:${h}-${p}` : "";
      return A6r(Wjt, {
        icon: "file",
        primary: `${b}${y}`,
        secondary: _ || void 0,
        onClick: i && d ? () => i(d, h || p ? {
          startLine: h,
          endLine: p
        } : void 0) : void 0,
        onContextMenu: r && d ? S => r(S, d) : void 0
      }, g);
    }, e[8] = i, e[9] = r, e[10] = c) : c = e[10], a = o.map(c), e[4] = o, e[5] = i, e[6] = r, e[7] = a;
  } else a = e[7];
  let l;
  return e[11] !== a ? (l = A6r(Hjt, {
    children: a
  }), e[11] = a, e[12] = l) : l = e[12], l;
}
