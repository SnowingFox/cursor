// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PlaywrightToolCallView.js range:15474795..15476442
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, uae, QQ, f2, Lz
// wrapper-init: bya -> playwrightToolCallViewModuleInit
// hoisted-owner: ReadLintsToolCallView.js (app-out-vs-workbench-workbench-glass-main-js:2417); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: bya -> playwrightToolCallViewModuleInit; ONS -> ReadLintsToolCallView (apply-map AST equivalent)

var playwrightToolCallViewModuleInit = L({
  "PlaywrightToolCallView.js"() {
    "use strict";

    E(), uae(), QQ(), f2(), Lz();
  }
});
import { jsx as x6r } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as LNS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function ReadLintsToolCallView(t) {
  const e = LNS(13),
    {
      vm: n,
      onFileClick: i,
      onFileContextMenu: r
    } = t;
  if (n.outcome.resultCase !== "success") {
    let c;
    return e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = x6r(g0e, {
      children: "No results"
    }), e[0] = c) : c = e[0], c;
  }
  let s;
  e[1] !== n.diagnostics ? (s = n.diagnostics ?? [], e[1] = n.diagnostics, e[2] = s) : s = e[2];
  const o = s;
  if (o.length === 0) {
    let c;
    return e[3] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (c = x6r(g0e, {
      children: "No diagnostics found"
    }), e[3] = c) : c = e[3], c;
  }
  let a;
  if (e[4] !== o || e[5] !== i || e[6] !== r) {
    let c;
    e[8] !== i || e[9] !== r ? (c = u => {
      const d = u.startLine,
        {
          name: h
        } = xmi(u.path),
        p = `${h}${d !== void 0 ? `:${d}` : ""}`;
      return x6r(Wjt, {
        icon: "warning",
        primary: p,
        secondary: u.message,
        onClick: i ? () => i(u.path, d !== void 0 ? {
          startLine: d,
          endLine: u.endLine
        } : void 0) : void 0,
        onContextMenu: r ? g => r(g, u.path) : void 0
      }, `${u.path}:${d ?? ""}:${u.startColumn ?? ""}:${u.endLine ?? ""}:${u.endColumn ?? ""}:${u.message}`);
    }, e[8] = i, e[9] = r, e[10] = c) : c = e[10], a = o.map(c), e[4] = o, e[5] = i, e[6] = r, e[7] = a;
  } else a = e[7];
  let l;
  return e[11] !== a ? (l = x6r(Hjt, {
    children: a
  }), e[11] = a, e[12] = l) : l = e[12], l;
}
