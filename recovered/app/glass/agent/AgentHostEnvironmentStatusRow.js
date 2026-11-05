// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentHostEnvironmentStatusRow.js range:22627044..22627955
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.125Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, index.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var AgentHostEnvironmentStatusRowModule = L({
  "AgentHostEnvironmentStatusRow.js"() {
    "use strict";

    E(), Mt();
  }
});
import { jsx as _$m } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as zK1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function AgentHostEnvironmentStatusRow(t) {
  const e = zK1(7),
    {
      copyToClipboard: n,
      message: i,
      stepGap: r,
      stopShellCommand: s,
      waitSeconds: o
    } = t;
  let a;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (a = [], e[0] = a) : a = e[0];
  let l;
  return e[1] !== n || e[2] !== i || e[3] !== r || e[4] !== s || e[5] !== o ? (l = _$m("div", {
    "data-cloud-optimistic-planning-row": "",
    children: _$m(Bnp, {
      copyToClipboard: n,
      loading: true,
      showSimulatedThinking: true,
      simulatedThinkingMessage: i,
      simulatedThinkingWaitSeconds: o,
      stepGap: r,
      steps: a,
      stopShellCommand: s
    })
  }), e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o, e[6] = l) : l = e[6], l;
}
