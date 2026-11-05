// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptNotification.js range:15662506..15663947
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, cNr, dSa, AO, Hmi, qu, c0e
// wrapper-init: xXh
// hoisted-owner: AgentTranscriptPlacementDecisionCard.js (app-out-vs-workbench-workbench-glass-main-js:2463); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: AXh -> AgentTranscriptPlacementDecisionCard (apply-map AST equivalent)

xXh = L({
  "AgentTranscriptNotification.js"() {
    "use strict";

    E(), cNr(), dSa(), AO(), Hmi(), qu(), c0e(), EXh = {
      button: 0,
      altKey: false,
      ctrlKey: false,
      metaKey: false
    }, IXh = {
      clickable: {
        kkrTdU: "ui-1ypdohk",
        kI3sdo: "ui-1a2a7pz",
        $$css: true
      }
    };
  }
});
import { jsx as x1n, jsxs as vFS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as _FS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function bFS(t, e) {
  switch (t) {
    case "pending":
      return `Waiting for approval to use ${e}`;
    case "allowed":
      return `Allowed use of ${e}`;
    case "denied":
      return `Denied use of ${e}`;
    case "expired":
      return "Approval request expired";
    default:
      return t;
  }
}
function AgentTranscriptPlacementDecisionCard(t) {
  const e = _FS(6),
    {
      state: n,
      machineLabel: i
    } = t;
  let r;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (r = x1n(uh.HeaderLeading, {
    children: x1n(uh.HeaderIcon, {
      color: "secondary",
      children: x1n(zt, {
        "aria-hidden": true,
        name: "device-desktop",
        size: "sm"
      })
    })
  }), e[0] = r) : r = e[0];
  let s;
  e[1] !== i || e[2] !== n ? (s = bFS(n, i), e[1] = i, e[2] = n, e[3] = s) : s = e[3];
  let o;
  return e[4] !== s ? (o = x1n(uh.Root, {
    children: vFS(uh.Header, {
      variant: "flat",
      paddingBottom: true,
      children: [r, x1n(uh.HeaderContent, {
        children: x1n(uh.HeaderTitle, {
          children: s
        })
      })]
    })
  }), e[4] = s, e[5] = o) : o = e[5], o;
}
