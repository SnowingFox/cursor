// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GrepToolCallView.js range:15469675..15470944
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Ekt, Gjt, Ami
// wrapper-init: xNS -> grepToolCallViewModuleInit
// hoisted-owner: LsToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2415); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: xNS -> grepToolCallViewModuleInit; RNS -> LsToolCallView (apply-map AST equivalent)

var grepToolCallViewModuleInit = L({
  "GrepToolCallView.js"() {
    "use strict";

    E(), Ekt(), Gjt(), Ami();
  }
});
import { jsx as E6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as ANS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function LsToolCallView(t) {
  const e = ANS(11),
    {
      vm: n,
      onFileClick: i,
      onFileContextMenu: r
    } = t,
    s = n.entries;
  if (!s) {
    let l;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (l = E6r(g0e, {
      children: "No results"
    }), e[0] = l) : l = e[0], l;
  }
  if (s.length === 0) {
    let l;
    return e[1] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (l = E6r(g0e, {
      children: "Empty directory"
    }), e[1] = l) : l = e[1], l;
  }
  let o;
  if (e[2] !== s || e[3] !== i || e[4] !== r) {
    let l;
    e[6] !== i || e[7] !== r ? (l = c => {
      const {
        name: u,
        dir: d
      } = xmi(c);
      return E6r(Wjt, {
        icon: "file",
        primary: u || c,
        secondary: d || void 0,
        onClick: i ? () => i(c) : void 0,
        onContextMenu: r ? h => r(h, c) : void 0
      }, c);
    }, e[6] = i, e[7] = r, e[8] = l) : l = e[8], o = s.map(l), e[2] = s, e[3] = i, e[4] = r, e[5] = o;
  } else o = e[5];
  let a;
  return e[9] !== o ? (a = E6r(Hjt, {
    children: o
  }), e[9] = o, e[10] = a) : a = e[10], a;
}
