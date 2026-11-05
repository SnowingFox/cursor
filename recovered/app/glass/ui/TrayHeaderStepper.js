// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TrayHeaderStepper.js range:16289499..16290509
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.111Z
$WS = L({ "TrayHeaderStepper.js"() {
  "use strict";
  E(), h$t(), Art(), Q3(), Dwa = { previousButton: { kayTVb: "ui-1g77sc7", $$css: true }, nextButton: { kayTVb: "ui-14yy4lh", $$css: true } };
} });
import { jsx as Urp } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as HWS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function WWS(t) {
  const e = HWS(8), { children: n, size: i, tone: r, truncate: s, title: o } = t, a = i === void 0 ? "default" : i, l = r === void 0 ? "default" : r, c = s === void 0 ? false : s;
  p$t("Tray.HeaderTitle");
  const u = o ?? (c && typeof n == "string" ? n : void 0);
  let d;
  e[0] !== n ? (d = Urp(crp, { children: n }), e[0] = n, e[1] = d) : d = e[1];
  let h;
  return e[2] !== u || e[3] !== a || e[4] !== d || e[5] !== l || e[6] !== c ? (h = Urp(yrp, { component: "tray-header-title", size: a, title: u, tone: l, truncate: c, children: d }), e[2] = u, e[3] = a, e[4] = d, e[5] = l, e[6] = c, e[7] = h) : h = e[7], h;
}
