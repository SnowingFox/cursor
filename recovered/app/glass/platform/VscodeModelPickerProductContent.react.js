// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: VscodeModelPickerProductContent.react.js range:29346521..29347388
// basis: esbuild-wrapper + inferred
// confidence: C
// method: split
// run: glass-platform 2026-11-05T10:20:42.211Z
// wrapper: tPi deps:6 [E, Mt, Hle, v4k, y4k, K2i]
// declarations: x4k, A4k, SCl (segment truncated)
// anchors: (none)
// group: model
// notes: path inferred (no nls/webpack-key evidence); wrapper boundary is esbuild-exact; confidence reflects the inferred path only
tPi = L({ "VscodeModelPickerProductContent.react.js"() {
  "use strict";
  E(), Mt(), Hle(), v4k(), y4k(), K2i(), cYt = "Use Latest Training Model", yCl = 320;
} });
import { memo as Xef, useCallback as Zef, useEffect as T4k, useRef as Qef, useState as E4k } from "./react-runtime/react/esm-index-production.js";
import { jsx as ree, jsxs as I4k } from "./react-runtime/react/esm-jsx-runtime-production.js";
function x4k(t, e) {
  if (!t.startsWith(`${e} `) || /[<>]/.test(t)) return;
  const n = t.slice(e.length + 1).trim();
  return n.length === 0 ? void 0 : { name: e, detail: n };
}
function A4k(t, e, n, i) {
  if (t.length === 0) return "Select model";
  const r = t[0];
  if (r === void 0) return "Select model";
  const s = t.reduce((a, l) => a + (l.count ?? 1), 0), o = n ? Fjt(r, e) : f1n(r, e, i);
  return s <= 1 ? o : `${o} + ${s - 1}`;
}
var SCl, WPn,
