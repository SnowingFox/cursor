// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpToolCallIcon.js range:15452945..15454776
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, mKh, fKh
// wrapper-init: gya
// hoisted-owner: PendingFileChangeApprovalLine.js (app-out-vs-workbench-workbench-glass-main-js:2407); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: kKh -> PendingFileChangeApprovalLine (apply-map AST equivalent)

gya = L({
  "McpToolCallIcon.js"() {
    "use strict";

    E(), mKh(), fKh(), mya = 16, _Kh = hya, bKh = mya - 2, yKh = 12;
  }
});
import { jsxs as SKh, Fragment as Z3S, jsx as Q3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as J3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function PendingFileChangeApprovalLine(t) {
  const e = J3S(23),
    {
      toolCase: n,
      isNewFile: i,
      path: r,
      onFileClick: s,
      onFileContextMenu: o
    } = t;
  let a;
  e[0] !== i || e[1] !== n ? (a = imi({
    toolCase: n,
    isNewFile: i
  }), e[0] = i, e[1] = n, e[2] = a) : a = e[2];
  const l = a.error;
  let c;
  e[3] !== s || e[4] !== r ? (c = r && s ? () => s(r) : void 0, e[3] = s, e[4] = r, e[5] = c) : c = e[5];
  const u = c;
  let d;
  e[6] !== o || e[7] !== r ? (d = r && o ? C => o(C, r) : void 0, e[6] = o, e[7] = r, e[8] = d) : d = e[8];
  const h = d;
  let p;
  e[9] !== u ? (p = u ? C => {
    (C.key === "Enter" || C.key === " ") && (C.preventDefault(), u());
  } : void 0, e[9] = u, e[10] = p) : p = e[10];
  const g = p,
    f = u ? "button" : void 0,
    _ = u ? 0 : void 0;
  let b;
  e[11] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (b = {
    0: {
      className: "ui-19aaqeu ui-1yn0g08"
    },
    1: {
      className: "ui-19aaqeu ui-1yn0g08 ui-1ypdohk"
    }
  }, e[11] = b) : b = e[11];
  const y = b[!!u << 0];
  let S;
  e[12] !== r ? (S = r ? SKh(Z3S, {
    children: [" ", Q3S("span", {
      className: "ui-4b2ntj",
      children: r
    })]
  }) : null, e[12] = r, e[13] = S) : S = e[13];
  let k;
  return e[14] !== l || e[15] !== u || e[16] !== h || e[17] !== g || e[18] !== f || e[19] !== _ || e[20] !== y || e[21] !== S ? (k = SKh("div", {
    role: f,
    tabIndex: _,
    ...y,
    onClick: u,
    onContextMenu: h,
    onKeyDown: g,
    children: [l, S]
  }), e[14] = l, e[15] = u, e[16] = h, e[17] = g, e[18] = f, e[19] = _, e[20] = y, e[21] = S, e[22] = k) : k = e[22], k;
}
