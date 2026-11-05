// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpServerIconImage.js range:15450105..15450729
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.231Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, MCPIcon.js, google-favicon-fallback.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, MCPIcon.js, google-favicon-fallback.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
var G3S = L({ "McpServerIconImage.js"() {
  "use strict";
  E(), uya(), S6r();
} });
import { c as q3S } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useSyncExternalStore as z3S } from "./react-runtime/react/esm-index-production.js";
function cKh(t) {
  const e = q3S(6), { mcpServerIconStore: n } = uR();
  let i;
  e[0] !== n || e[1] !== t ? (i = (a) => t && n ? n.subscribe(t, a) : uKh, e[0] = n, e[1] = t, e[2] = i) : i = e[2];
  const r = i;
  let s;
  return e[3] !== n || e[4] !== t ? (s = () => t ? n?.getIcon(t) : void 0, e[3] = n, e[4] = t, e[5] = s) : s = e[5], z3S(r, s);
}
var uKh, 