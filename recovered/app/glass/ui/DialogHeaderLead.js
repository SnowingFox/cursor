// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: DialogHeaderLead.js range:11523232..11523930
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.618Z
var G3h = L({ "DialogHeaderLead.js"() {
  "use strict";
  E(), EFe(), qu();
} });
import { jsx as cpS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as upS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as dpS, useContext as hpS } from "./react-runtime/react/esm-index-production.js";
function ppS(t) {
  const e = upS(5), { selectable: n, children: i } = t;
  let r;
  e[0] !== n ? (r = { selectable: n }, e[0] = n, e[1] = r) : r = e[1];
  let s;
  return e[2] !== i || e[3] !== r ? (s = cpS(Bda.Provider, { value: r, children: i }), e[2] = i, e[3] = r, e[4] = s) : s = e[4], s;
}
function mpS() {
  return hpS(Bda);
}
var Bda, 