// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Field.js range:14641354..14641993
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.664Z
e5r = L({ "Field.js"() {
  "use strict";
  E(), Yvn(), S1S(), x1S(), I1S(), h4h(), w1S(), T1S(), k1S(), qma = M1S(void 0), zUt = { Root: L1S, Label: Oma, Description: Bma, Error: Fma, Control: QOr, Validity: jma, Item: Hma };
} });
function t5r(t) {
  if (!(YQ() ? t.metaKey : t.ctrlKey) || t.shiftKey || t.altKey) return false;
  switch (t.key.toLowerCase()) {
    case "a":
      return t.preventDefault(), t.nativeEvent.stopImmediatePropagation(), t.currentTarget.select(), true;
    case "c":
    case "v":
    case "x":
    case "z":
      return t.nativeEvent.stopImmediatePropagation(), true;
    default:
      return false;
  }
}
