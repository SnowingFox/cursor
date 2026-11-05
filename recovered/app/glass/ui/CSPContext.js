// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: CSPContext.js range:6142680..6143736
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.578Z
rea = L({ "CSPContext.js"() {
  E(), iea = Klh.createContext(void 0), process.env.NODE_ENV !== "production" && (iea.displayName = "CSPContext"), Ylh = { disableStyleElements: false };
} });
import * as f7t from "./react-runtime/react/esm-index-production.js";
import { jsxs as Jjy, jsx as e$y } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Xlh(t) {
  const e = t.maxHeight || "";
  return e.endsWith("px") && parseFloat(e) || 1 / 0;
}
function x2r(t) {
  return slh(t.scrollHeight, t.clientHeight);
}
function Zlh(t) {
  return eJo.getScale(t);
}
function hci(t, e, n) {
  return t / n[e];
}
function A2r(t, e) {
  return znt({ x: hci(t.x, "x", e), y: hci(t.y, "y", e), width: hci(t.width, "x", e), height: hci(t.height, "y", e) });
}
function t$y(t) {
  const { style: e } = t, n = {};
  for (const [i, r] of oea) n[i] = e.getPropertyValue(i), e.setProperty(i, r, "important");
  return () => {
    for (const [i] of oea) {
      const r = n[i];
      r ? e.setProperty(i, r) : e.removeProperty(i);
    }
  };
}
var Qlh, sea, oea, 