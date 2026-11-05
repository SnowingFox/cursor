// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MCPIcon.js range:15448051..15448639
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.217Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// renamed: none (fragment not parseable as a program; rename map kept in scripts/recover/glass/p1-agent/maps)
var uya = L({ "MCPIcon.js"() {
  "use strict";
  E();
} });
function $3S(t) {
  if (t.startsWith("https://www.google.com/s2/favicons?")) try {
    const e = new URL(t);
    if (e.hostname !== "www.google.com" || e.pathname !== "/s2/favicons") return;
    const n = e.searchParams.get("sz");
    if (!n) return;
    const i = Number(n);
    return Number.isFinite(i) ? i : void 0;
  } catch {
    return;
  }
}
function Emi(t) {
  if (!t.src) return false;
  const e = $3S(t.src);
  return e === void 0 || e < oKh ? false : t.naturalWidth <= dya && t.naturalHeight <= dya;
}
var oKh, dya, 