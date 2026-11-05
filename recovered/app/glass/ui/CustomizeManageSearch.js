// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CustomizeManageSearch.js range:22797463..22797894
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.594Z
var UZ1 = L({ "CustomizeManageSearch.js"() {
  "use strict";
  E(), Mt(), Hot(), iCi(), Wes(), Ges(), HHm(), NZa();
} });
function jZ1(t) {
  const e = ["all"];
  return t.has("user") && e.push("user"), t.has("project") && e.push("project"), (t.has("team") || t.has("dashboard")) && e.push("team"), t.has("plugin") && e.push("plugin"), e.map((n) => ({ value: n, label: oWm[n], icon: sWm[n] }));
}
var tWm, nWm, iWm, rWm, sWm, oWm, 