// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TranscriptCardHeaderTitle.js range:15074489..15075579
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, dy, irt, vkt
// wrapper-init: gAS
// hoisted-owner: TranscriptCardHeaderTrailing.js (app-out-vs-workbench-workbench-glass-main-js:2317); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: _AS -> TranscriptCardHeaderTrailing (apply-map AST equivalent)

gAS = L({
  "TranscriptCardHeaderTitle.js"() {
    "use strict";

    E(), dy(), irt(), vkt(), _Fr = {
      root: {
        k7Eaqz: "ui-euugli",
        ks0D6T: "ui-193iq5w",
        kHjlTd: "ui-j0a0fe",
        $$css: true
      },
      railLineHeight: {
        kLWn49: "ui-1ejo4ks",
        $$css: true
      },
      truncateClamp: {
        k1xSpc: "ui-104kibb",
        kgKLqz: "ui-1ua5tub",
        kJFfOR: "ui-h0615m",
        kdZRtv: "ui-1qxw02l",
        kXHlph: "ui-6ikm8r",
        kORKVm: "ui-10wlt62",
        kTgw9: "ui-13faqbe",
        $$css: true
      }
    };
  }
});
import { jsx as fAS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vAS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function TranscriptCardHeaderTrailing(t) {
  const e = vAS(3),
    {
      children: n
    } = t;
  _jt("TranscriptCard.HeaderTrailing");
  let i;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (i = {
    className: "ui-78zum5 ui-6s0dn4 ui-13a6bvl ui-2lah0s ui-pkkfsy ui-1a6rlst"
  }, e[0] = i) : i = e[0];
  const r = i;
  let s;
  return e[1] !== n ? (s = fAS("div", {
    className: r.className,
    "data-component": "transcript-card-header-trailing",
    style: r.style,
    children: n
  }), e[1] = n, e[2] = s) : s = e[2], s;
}
