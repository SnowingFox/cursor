// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpToolCallCodeSurface.js range:15442358..15443626
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, qu, f2
// wrapper-init: nKh
// hoisted-owner: McpToolCallDetails.js (app-out-vs-workbench-workbench-glass-main-js:2399); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: iKh -> McpToolCallDetails (apply-map AST equivalent)

nKh = L({
  "McpToolCallCodeSurface.js"() {
    "use strict";

    E(), qu(), f2(), lya = 240, Tmi = {
      code: {
        keoZOQ: "ui-dj266r",
        km5ZXQ: "ui-1yf7rl7",
        k1K539: "ui-at24cr",
        koQZXg: "ui-j3b58b",
        kMwMTN: "ui-19aaqeu",
        kMv6JI: "ui-ul7cyv",
        kGuDYH: "ui-11wthnw",
        kLWn49: "ui-1ja60sm",
        khDVqt: "ui-126k92a",
        kHjlTd: "ui-j0a0fe",
        kTgw9: "ui-13faqbe",
        kfSwDN: "ui-1hx0egp",
        $$css: true
      },
      codeInset: {
        k8WAf4: "ui-1lqmthn",
        kE3dHu: "ui-o7x2bt",
        kpe85a: "ui-16b7oty",
        $$css: true
      },
      codeWithMenu: {
        kpe85a: "ui-7zx35h",
        $$css: true
      }
    };
  }
});
import { jsx as O3S, jsxs as F3S, Fragment as B3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as U3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function McpToolCallDetails(t) {
  const e = U3S(6),
    {
      toolName: n,
      serverName: i
    } = t;
  let r;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (r = ar({
    rootClass: "ui-tool-call-line-detail-strong",
    stylexStyles: Bva()
  }), e[0] = r) : r = e[0];
  const s = r;
  let o;
  e[1] !== n ? (o = O3S("span", {
    className: s.className,
    style: s.style,
    children: n
  }), e[1] = n, e[2] = o) : o = e[2];
  let a;
  return e[3] !== i || e[4] !== o ? (a = F3S(B3S, {
    children: [o, " ", "in ", i]
  }), e[3] = i, e[4] = o, e[5] = a) : a = e[5], a;
}
