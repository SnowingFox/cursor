// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptSentMessageActions.js range:15961625..15963233
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Uep, AO, oka, tka, fd, BW, Q3, R7t
// wrapper-init: I8S
// hoisted-owner: CursorIcon.js (app-out-vs-workbench-workbench-glass-main-js:2558); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: P9r -> CursorIcon (apply-map AST equivalent)

I8S = L({
  "AgentTranscriptSentMessageActions.js"() {
    "use strict";

    E(), Uep(), AO(), oka(), tka(), fd(), BW(), Q3(), R7t(), Qep = 20;
  }
});
import { jsx as Jep } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as x8S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function CursorIcon(t) {
  const e = x8S(9);
  let n, i, r;
  e[0] !== t ? ({
    size: i,
    title: r,
    ...n
  } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
  const s = i === void 0 ? 24 : i,
    o = r === void 0 ? "Cursor" : r;
  let a;
  e[4] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (a = Jep("path", {
    fill: "currentColor",
    d: "M48.0226 13.2547L25.6601 0.311786C24.942 -0.103929 24.0559 -0.103929 23.3378 0.311786L0.976347 13.2547C0.372691 13.6041 0 14.2503 0 14.9502V41.0498C0 41.7496 0.372691 42.3958 0.976347 42.7453L23.3389 55.6882C24.057 56.1039 24.943 56.1039 25.6611 55.6882L48.0237 42.7453C48.6273 42.3958 49 41.7496 49 41.0498V14.9502C49 14.2503 48.6273 13.6041 48.0237 13.2547H48.0226ZM46.6179 15.9964L25.0302 53.4802C24.8842 53.7328 24.4989 53.6296 24.4989 53.337V28.793C24.4989 28.3026 24.2375 27.849 23.8134 27.6027L2.61094 15.3312C2.35898 15.1849 2.46186 14.7987 2.75372 14.7987H45.9292C46.5423 14.7987 46.9255 15.4649 46.619 15.9974L46.6179 15.9964Z"
  }), e[4] = a) : a = e[4];
  let l;
  return e[5] !== n || e[6] !== s || e[7] !== o ? (l = Jep("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 49 56",
    width: s,
    height: s,
    role: "img",
    "aria-label": o,
    ...n,
    children: a
  }), e[5] = n, e[6] = s, e[7] = o, e[8] = l) : l = e[8], l;
}
