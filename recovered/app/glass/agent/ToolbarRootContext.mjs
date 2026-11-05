// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: ToolbarRootContext.mjs range:31335869..31336638
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.277Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.mjs
// anchors: displayName=ToolbarRootContext
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.mjs
// anchors: displayName=ToolbarRootContext
// path-candidate: none (no nls basename match; path inferred, confidence C)
Dgw = L({ "ToolbarRootContext.mjs"() {
  "use client";
  E(), vKe(), FOl = eMf.createContext(void 0), process.env.NODE_ENV !== "production" && (FOl.displayName = "ToolbarRootContext");
} });
import * as u1s from "./react-runtime/react/esm-index-production.js";
import { jsx as Ngw } from "./react-runtime/react/esm-jsx-runtime-production.js";
function Lgw() {
  const [t, e] = u1s.useState(0), n = TR(() => (e((r) => r + 1), () => {
    e((r) => Math.max(0, r - 1));
  }));
  return { context: u1s.useMemo(() => ({ register: n }), [n]), hasClosePart: t > 0 };
}
function Ogw(t) {
  const { value: e, children: n } = t;
  return Ngw(d1s.Provider, { value: e, children: n });
}
function Fgw() {
  const t = u1s.useContext(d1s);
  pC(() => t?.register(), [t]);
}
var d1s, 