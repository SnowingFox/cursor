// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpImpactConfirmDialog.js range:17079037..17081009
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.219Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, PortalContext.js, Dialog.js, Button.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, PortalContext.js, Dialog.js, Button.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var McpImpactConfirmDialogModule = L({
  "McpImpactConfirmDialog.js"() {
    "use strict";

    E(), pB(), QQ(), P0();
  }
});
import { c as si1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as kvi } from "./react-runtime/react/esm-index-production.js";
function oi1(t) {
  const e = si1(15),
    [n, i] = kvi(null),
    [r, s] = kvi(null);
  let o;
  e[0] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (o = {}, e[0] = o) : o = e[0];
  const [a, l] = kvi(o),
    [c, u] = kvi(null),
    [d, h] = kvi(false);
  let p;
  e[1] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (p = k => {
    const C = Svi(k);
    C !== void 0 && (s(C), l(DEa(C, k.teamMarketplaceConfiguredVariables)), u(null), i(k));
  }, e[1] = p) : p = e[1];
  const g = p;
  let f;
  e[2] === /* @__PURE__ */Symbol.for("react.memo_cache_sentinel") ? (f = () => {
    i(null), s(null), l({}), u(null);
  }, e[2] = f) : f = e[2];
  const _ = f;
  let b;
  e[3] !== n || e[4] !== t || e[5] !== r || e[6] !== a ? (b = async () => {
    if (r === null || n === null) return;
    u(null);
    let k;
    if (Object.keys(a).length === 0) k = {};else {
      const C = NEa({
        schema: r,
        values: a
      });
      if (!C.success) {
        u(C.error);
        return;
      }
      k = C.data ?? {};
    }
    h(true);
    try {
      await t(n, k), _();
    } catch (C) {
      const T = C,
        I = T instanceof Error ? T.message : void 0;
      u(I ?? "Failed to save plugin variables. Please try again.");
    }
    h(false);
  }, e[3] = n, e[4] = t, e[5] = r, e[6] = a, e[7] = b) : b = e[7];
  const y = b;
  let S;
  return e[8] !== c || e[9] !== n || e[10] !== d || e[11] !== y || e[12] !== r || e[13] !== a ? (S = {
    configuringPlugin: n,
    variableSchema: r,
    variableValues: a,
    setVariableValues: l,
    configureError: c,
    isSavingVariables: d,
    startConfigure: g,
    cancelConfigure: _,
    saveConfigure: y
  }, e[8] = c, e[9] = n, e[10] = d, e[11] = y, e[12] = r, e[13] = a, e[14] = S) : S = e[14], S;
}
