// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: InitializeResponse.js range:651434..651728
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.733Z
Myy = L({ "InitializeResponse.js"() {
  "use strict";
  E();
} });
function Dyy(t, e, n) {
  let i = `${t}|${e}`;
  if (!n) return i;
  for (const r of Object.keys(n)) {
    if (TJu.has(r)) return;
    CJu.has(r) ? i += `|${r}=true` : i += `|${r}=${n[r]}`;
  }
  return i;
}
var A6t, CJu, TJu, 