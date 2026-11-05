// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Dialog.types.js range:11513927..11514646
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.602Z
Lda = L({ "Dialog.types.js"() {
  "use strict";
  E(), gLr = 300, Nda = "cubic-bezier(0.165, 0.84, 0.44, 1)";
} });
import { c as zhS } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as VhS, useContext as KhS, useId as YhS } from "./react-runtime/react/esm-index-production.js";
function dhi(t) {
  const e = KhS(hhi);
  if (!e) throw new Error(`${t} must be used within Dialog`);
  return e;
}
function L3h() {
  return dhi("useDialogContext");
}
function XhS() {
  const t = zhS(3), e = YhS(), n = `${e}-title`, i = `${e}-description`;
  let r;
  return t[0] !== n || t[1] !== i ? (r = { titleId: n, descriptionId: i }, t[0] = n, t[1] = i, t[2] = r) : r = t[2], r;
}
var hhi, 