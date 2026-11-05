// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MentionChipImageIcon.js range:15682269..15683162
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.783Z
SSa = L({ "MentionChipImageIcon.js"() {
  "use strict";
  E(), Va(), mf(), GXh(), fd(), qXh = { root: { kVAEAm: "ui-1n2onr6", k1xSpc: "ui-3nfvp2", kGNEyG: "ui-6s0dn4", kjj79g: "ui-l56j7k", kmuXW: "ui-2lah0s", kzqmXN: "ui-1kky2od", kZKoxP: "ui-lup9mm", kXLuUW: "ui-xymvpz", $$css: true } };
} });
import { jsx as jFS } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as $FS } from "./react-runtime/react/esm-compiler-runtime-production.js";
function zXh(t) {
  const e = $FS(5), { status: n } = t;
  let i;
  e[0] !== n ? (i = gn(CP.statusDot, n === "error" && CP.statusDotError, n === "warning" && CP.statusDotWarning, n === "neutral" && CP.statusDotNeutral), e[0] = n, e[1] = i) : i = e[1];
  let r;
  return e[2] !== n || e[3] !== i ? (r = jFS("span", { "aria-hidden": "true", "data-mention-chip-status-dot": n, ...i }), e[2] = n, e[3] = i, e[4] = r) : r = e[4], r;
}
