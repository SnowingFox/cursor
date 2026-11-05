// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayStep.js range:16320847..16322045
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.125Z
var nsp = L({ "TrayStep.js"() {
  "use strict";
  E(), Va(), mf(), Zkt(), _fi(), h$t(), bfi(), qu();
} });
import { jsx as TGS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { useRef as isp, useState as EGS, useLayoutEffect as IGS, Children as xGS, isValidElement as AGS } from "./react-runtime/react/esm-index-production.js";
function RGS({ children: t }) {
  dkn("Tray.Steps");
  const { currentStepIndex: e } = hkn("Tray.Steps"), n = isp(null), i = isp(false), [r, s] = EGS({ index: e, direction: "idle" });
  if (r.index !== e) {
    const c = n.current;
    i.current = c?.contains(c.ownerDocument.activeElement) ?? false, s({ index: e, direction: e > r.index ? "forward" : "back" });
  }
  IGS(() => {
    i.current && (i.current = false, Lwa(n.current)?.focus());
  });
  const a = xGS.toArray(t).filter((c) => AGS(c) && c.type === tsp).find((c) => c.props.stepIndex === r.index);
  if (a === void 0) return null;
  const l = gn(FBr.slide, r.direction === "forward" ? FBr.forward : r.direction === "back" ? FBr.back : null);
  return TGS("div", { ref: n, className: l.className, "data-component": "tray-steps-slide", style: l.style, children: a }, r.index);
}
var FBr, 