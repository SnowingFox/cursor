// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptApprovalStack.js range:15634526..15636434
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, gmi
// wrapper-init: G5S -> agentTranscriptApprovalStackModuleInit
// hoisted-owner: AgentTranscriptEnter.js (app-out-vs-workbench-workbench-glass-main-js:2455); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: G5S -> agentTranscriptApprovalStackModuleInit; i4r -> AgentTranscriptEnter (apply-map AST equivalent)

var agentTranscriptApprovalStackModuleInit = L({
  "AgentTranscriptApprovalStack.js"() {
    "use strict";

    E(), gmi();
  }
});
import { jsx as oXh, Fragment as q5S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as z5S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as aXh, useRef as V5S, useLayoutEffect as K5S } from "./react-runtime/react/esm-index-production.js";
function Y5S(t) {
  const e = t.closest("[data-reveal-ready]");
  return e === null ? true : e.getAttribute("data-reveal-ready") === "true";
}
function AgentTranscriptEnter(t) {
  const e = z5S(12),
    {
      enter: n,
      onEntered: i,
      children: r
    } = t,
    [s] = aXh(n),
    [o, a] = aXh(false),
    l = V5S(null);
  let c, u;
  if (e[0] !== s ? (c = () => {
    if (!s) return;
    const f = l.current;
    if (f === null) return;
    const _ = () => Y5S(f) ? (a(true), true) : false;
    if (_()) return;
    const b = f.closest("[data-reveal-ready]");
    if (b === null) {
      a(true);
      return;
    }
    const y = new MutationObserver(() => {
      _() && y.disconnect();
    });
    return y.observe(b, {
      attributes: true,
      attributeFilter: ["data-reveal-ready"]
    }), () => {
      y.disconnect();
    };
  }, u = [s], e[0] = s, e[1] = c, e[2] = u) : (c = e[1], u = e[2]), K5S(c, u), !s) {
    let f;
    return e[3] !== r ? (f = oXh(q5S, {
      children: r
    }), e[3] = r, e[4] = f) : f = e[4], f;
  }
  let d;
  e[5] !== i ? (d = f => {
    f.target === f.currentTarget && i?.();
  }, e[5] = i, e[6] = d) : d = e[6];
  let h;
  e[7] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (h = {
    0: {
      className: "ui-g01cxk"
    },
    1: {
      className: "ui-1xbrt40 ui-1aquc0h ui-1shwlz2 ui-rmiu4m ui-1u6ievf"
    }
  }, e[7] = h) : h = e[7];
  const p = h[!!o << 0];
  let g;
  return e[8] !== r || e[9] !== d || e[10] !== p ? (g = oXh("div", {
    ref: l,
    onAnimationStart: d,
    ...p,
    children: r
  }), e[8] = r, e[9] = d, e[10] = p, e[11] = g) : g = e[11], g;
}
