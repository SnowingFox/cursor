// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: AgentTranscriptConnectScmCard.js range:15571298..15573154
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split+rename
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, u0e, H1t, P0, Rkt
// wrapper-init: xYh
// hoisted-owner: CollapsibleContent.js (app-out-vs-workbench-workbench-glass-main-js:2443); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: k1n -> CollapsibleContent (apply-map AST equivalent)

xYh = L({
  "AgentTranscriptConnectScmCard.js"() {
    "use strict";

    E(), u0e(), H1t(), P0(), Rkt(), IYh = "Connect GitHub so the agent can review pull requests and access your repositories.";
  }
});
import { jsx as AYh } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as FOS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function CollapsibleContent(t) {
  const e = FOS(25);
  let n, i, r, s, o;
  e[0] !== t ? ({
    collapsed: o,
    className: i,
    style: s,
    children: n,
    ...r
  } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r, e[4] = s, e[5] = o) : (n = e[1], i = e[2], r = e[3], s = e[4], o = e[5]);
  const a = o === void 0 ? false : o;
  let l, c, u;
  if (e[6] !== i || e[7] !== a) {
    c = {
      0: {
        className: "ui-rvj5dj ui-1tu4anv ui-pv8u57 ui-1qn9uv2 ui-4wkmsb ui-g3p6pi ui-ptf4uz"
      },
      1: {
        className: "ui-rvj5dj ui-pv8u57 ui-1qn9uv2 ui-4wkmsb ui-g3p6pi ui-ptf4uz ui-ihq33y"
      }
    }[!!a << 0];
    let f;
    e[11] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (f = {
      className: "ui-6ikm8r ui-10wlt62 ui-2lwn1j"
    }, e[11] = f) : f = e[11], l = f, u = ri("ui-collapsible-content-view", c.className, i), e[6] = i, e[7] = a, e[8] = l, e[9] = c, e[10] = u;
  } else l = e[8], c = e[9], u = e[10];
  let d;
  e[12] !== c.style || e[13] !== s ? (d = {
    ...c.style,
    ...s
  }, e[12] = c.style, e[13] = s, e[14] = d) : d = e[14];
  const h = a || void 0;
  let p;
  e[15] !== n || e[16] !== l.className || e[17] !== l.style ? (p = AYh("div", {
    className: l.className,
    style: l.style,
    children: n
  }), e[15] = n, e[16] = l.className, e[17] = l.style, e[18] = p) : p = e[18];
  let g;
  return e[19] !== r || e[20] !== u || e[21] !== d || e[22] !== h || e[23] !== p ? (g = AYh("div", {
    className: u,
    style: d,
    "data-collapsed": h,
    ...r,
    children: p
  }), e[19] = r, e[20] = u, e[21] = d, e[22] = h, e[23] = p, e[24] = g) : g = e[24], g;
}
