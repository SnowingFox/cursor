// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: OrchestrationCard.js range:17219751..17220505
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.839Z
var qs1 = L({ "OrchestrationCard.js"() {
  "use strict";
  E(), Jci(), Hs1(), dy(), Lz(), fd();
} });
function Bgp(t) {
  return t.accent !== void 0 ? zs1(t.accent.tone) : Ugp(t.id);
}
function zs1(t) {
  switch (t) {
    case "cyan":
      return "blue";
    case "magenta":
      return "purple";
    case "yellow":
    case "red":
    case "brand":
      return "orange";
    case "accent":
    case "blue":
    case "default":
    case "green":
    case "orange":
    case "purple":
      return t;
  }
}
function Ugp(t) {
  switch (t) {
    case "building":
      return "blue";
    case "testing":
      return "purple";
    case "reviewing":
      return "orange";
    case "done":
      return "green";
    default:
      return "default";
  }
}
