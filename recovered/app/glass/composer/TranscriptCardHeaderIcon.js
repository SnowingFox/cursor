// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderIcon.js range:15071951..15072995
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, vkt
// wrapper-init: lAS
// hoisted-owner: TranscriptCardHeaderLeading.js (app-out-vs-workbench-workbench-glass-main-js:2315); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: dAS -> TranscriptCardHeaderLeading (apply-map AST equivalent)

lAS = L({
  "TranscriptCardHeaderIcon.js"() {
    "use strict";

    E(), Va(), vkt(), vFr = {
      root: {
        k1xSpc: "ui-78zum5",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kmuXW: "ui-2lah0s",
        kzqmXN: "ui-16bvwqk",
        kZKoxP: "ui-1a6rlst",
        kGuDYH: "ui-11wthnw",
        kMwMTN: "ui-4b2ntj",
        $$css: true
      },
      primary: {
        kMwMTN: "ui-1wd3ewq",
        $$css: true
      },
      secondary: {
        kMwMTN: "ui-19aaqeu",
        $$css: true
      }
    };
  }
});
import { jsx as cAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as uAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function TranscriptCardHeaderLeading(t) {
  const e = uAS(3),
    {
      children: n
    } = t;
  _jt("TranscriptCard.HeaderLeading");
  let i;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (i = {
    className: "ui-78zum5 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-pkkfsy ui-4jlmx6"
  }, e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = cAS("div", {
    className: r.className,
    "data-component": "transcript-card-header-leading",
    style: r.style,
    children: n
  }), e[1] = n, e[2] = s) : s = e[2], s;
}
