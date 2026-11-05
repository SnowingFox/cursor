// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: GetUnrepeatedFileNamesTestSection.js range:39155847..39156642
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.700Z
nlC = L({ "GetUnrepeatedFileNamesTestSection.js"() {
  "use strict";
  E(), at(), at(), at(), at(), at(), pi(), fn(), lMn(), IL(), elC(), mk(), IKv = wt('<div><div></div><div><h4>Result:</h4><pre></pre></div><input type=text placeholder="Root Folder (optional)">'), xKv = wt("<div><input type=text>");
} });
import AKv from "./react-runtime/react/esm-index-production.js";
import { jsxs as Vuc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ilC({ count: t }) {
  const [e, n] = AKv.useState(0), i = AKv.useCallback(() => {
    n((r) => r + 1);
  }, []);
  return Vuc("div", { children: [Vuc("div", { children: ["SolidJS count rendered from react: ", t] }), Vuc("button", { onClick: i, type: "button", children: ["React count rendered from react: ", e] })] });
}
var RKv, 