// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpServerIcon.js range:15451413..15452398
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.224Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, MCPIcon.js, McpServerIconImage.js, use-mcp-server-icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, MCPIcon.js, McpServerIconImage.js, use-mcp-server-icon.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
var mKh = L({ "McpServerIcon.js"() {
  "use strict";
  E(), uya(), G3S(), dKh();
} });
import { jsx as K3S } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as Y3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
function gKh(t) {
  const e = Y3S(8), { size: n, radius: i, children: r } = t;
  let s;
  e[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (s = { className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-2lah0s ui-9f619 ui-b3r6kr ui-f1vpex ui-mkeg23 ui-1y0btm7 ui-16sux1g ui-1wd3ewq" }, e[0] = s) : s = e[0];
  const o = s, a = `${n}px`, l = `${n}px`, c = typeof i == "number" ? `${i}px` : i;
  let u;
  e[1] !== a || e[2] !== l || e[3] !== c ? (u = { ...o.style, width: a, height: l, borderRadius: c }, e[1] = a, e[2] = l, e[3] = c, e[4] = u) : u = e[4];
  let d;
  return e[5] !== r || e[6] !== u ? (d = K3S("span", { className: o.className, style: u, children: r }), e[5] = r, e[6] = u, e[7] = d) : d = e[7], d;
}
var hya, 