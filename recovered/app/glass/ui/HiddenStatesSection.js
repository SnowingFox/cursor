// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: HiddenStatesSection.js range:39158042..39159561
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.714Z
llC = L({ "HiddenStatesSection.js"() {
  "use strict";
  E(), at(), at(), at(), gs(), vo(), IL(), mk(), MKv = wt("<div><div><h3>Out of Autocompletes");
} });
function clC() {
  const { showHover: t, hideHover: e } = L6();
  return Ee(pk, { title: "Hover", get children() {
    return [(() => {
      var n = DKv();
      return n.addEventListener("mouseleave", () => {
        e();
      }), n.addEventListener("mouseenter", (i) => {
        t({ content: "This is a hover message!", target: i.currentTarget, position: { hoverPosition: Bu.BELOW }, appearance: { showPointer: true } });
      }), n.style.setProperty("padding", "8px 16px"), n.style.setProperty("background", "var(--vscode-button-background)"), n.style.setProperty("color", "var(--vscode-button-foreground)"), n.style.setProperty("cursor", "pointer"), n.style.setProperty("border-radius", "4px"), n;
    })(), (() => {
      var n = NKv();
      return n.addEventListener("mouseleave", () => {
        e();
      }), n.addEventListener("mouseenter", (i) => {
        t({ content: "This is a hover message!", target: i.currentTarget, position: { hoverPosition: Bu.BELOW }, persistence: { sticky: true }, appearance: { showPointer: true } });
      }), n.style.setProperty("padding", "8px 16px"), n.style.setProperty("background", "var(--vscode-button-background)"), n.style.setProperty("color", "var(--vscode-button-foreground)"), n.style.setProperty("cursor", "pointer"), n.style.setProperty("border-radius", "4px"), n;
    })()];
  } });
}
var DKv, NKv, 