// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolCallDialog.js range:15440135..15442358
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-composer 2026-11-05T10:19:48.876Z
// deps: E, Va, uae, QQ, f2
// wrapper-init: JVh
// hoisted-owner: McpToolCallCodeSurface.js (app-out-vs-workbench-workbench-glass-main-js:2398); trailing declarations ownership inferred from segment adjacency
// path: null (no unique nls candidate; inferred only)
// renamed: none

JVh = L({ "ToolCallDialog.js"() {
  "use strict";
  E(), Va(), uae(), QQ(), f2(), QVh = { body: { kLKAdn: "ui-1t8xvyj", $$css: true } };
} });
import { jsx as Cmi, jsxs as D3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as eKh } from "./react-runtime/react/esm-compiler-runtime-production.js";
function N3S(t) {
  const e = eKh(11), { text: n, menu: i } = t;
  let r;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (r = { className: "ui-1n2onr6 ui-1ua6jya ui-178xt8z ui-13fuv20 ui-1aeic0j ui-s1s249 ui-32b0ac ui-141kqco ui-so031l ui-1q0q8m5 ui-17fyfba ui-e0pwq ui-19ypqd9 ui-1arpupx ui-1m7fhj7 ui-b3r6kr" }, e[0] = r) : r = e[0];
  const s = r.className;
  let o;
  e[1] !== i ? (o = i ? Cmi("div", { className: "ui-10l6tqk ui-1jgjl8u ui-1s3hisn ui-1vjfegm ui-1ua6jya ui-1e1y6u3 ui-19aaqeu", children: i }) : null, e[1] = i, e[2] = o) : o = e[2];
  const a = i ? Tmi.codeWithMenu : null;
  let l;
  e[3] !== a ? (l = ar({ rootClass: "agent-transcript-mcp-tool-call__code", stylexStyles: [Tmi.code, Tmi.codeInset, a] }), e[3] = a, e[4] = l) : l = e[4];
  let c;
  e[5] !== l.className || e[6] !== n ? (c = Cmi(xg, { direction: "vertical", scrollbarVisibility: "hover", allowScrollChaining: true, maxHeight: lya, children: Cmi("pre", { className: l.className, children: n }) }), e[5] = l.className, e[6] = n, e[7] = c) : c = e[7];
  let u;
  return e[8] !== o || e[9] !== c ? (u = D3S("div", { className: s, children: [o, c] }), e[8] = o, e[9] = c, e[10] = u) : u = e[10], u;
}
function L3S(t) {
  const e = eKh(3), { json: n } = t;
  let i;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (i = ar({ rootClass: "agent-transcript-mcp-tool-call__code", stylexStyles: Tmi.code }), e[0] = i) : i = e[0];
  let r;
  return e[1] !== n ? (r = Cmi(xg, { direction: "vertical", scrollbarVisibility: "hover", allowScrollChaining: true, maxHeight: lya, children: Cmi("pre", { className: i.className, children: n }) }), e[1] = n, e[2] = r) : r = e[2], r;
}
function tKh(t) {
  if (!t || typeof t != "object" || Array.isArray(t) || Object.keys(t).length === 0) return "";
  try {
    return JSON.stringify(t, null, 2);
  } catch {
    return "";
  }
}
var lya, Tmi, 