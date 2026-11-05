// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: EndOfTurnSummary.js range:15149328..15150051
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.653Z
SRS = L({ "EndOfTurnSummary.js"() {
  "use strict";
  E(), smi(), AO(), Qva(), hL(), SWe(), u0e(), P0(), fd(), Lz(), kWh = { collapsedSafetyCap: { kskxy: "ui-19aweqf", $$css: true } }, wWh = { root: { kMwMTN: "ui-4b2ntj ui-xs50az", $$css: true } }, CWh = 5;
} });
import { jsx as kRS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as wRS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function IFr(t) {
  const e = wRS(3), { message: n, details: i } = t, r = n ?? "Planning next moves";
  let s;
  return e[0] !== i || e[1] !== r ? (s = kRS(zY, { action: r, details: i, shimmerDetails: false, expandable: false, loading: true }), e[0] = i, e[1] = r, e[2] = s) : s = e[2], s;
}
