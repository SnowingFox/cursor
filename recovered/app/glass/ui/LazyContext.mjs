// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: LazyContext.mjs range:35406195..35406498
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.770Z
KXl = L({ "LazyContext.mjs"() {
  "use client";
  E(), yRs = s_0({ strict: false });
} });
function o_0() {
  if (XXl) return;
  const t = {};
  for (const e in YXl) t[e] = { isEnabled: (n) => YXl[e].some((i) => !!n[i]) };
  $Sv(t), XXl = true;
}
function R1v() {
  return o_0(), rv0();
}
var YXl, XXl, 