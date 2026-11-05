// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: McpConfigureDialog.js range:22847174..22848465
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.215Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, McpServerConfigMenu.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, McpServerConfigMenu.js
// path-candidate: none (no nls basename match; path inferred, confidence C)

var McpConfigureDialogModule = L({
  "McpConfigureDialog.js"() {
    "use strict";

    E(), MK1();
  }
});
import { jsxs as wWm, Fragment as IQ1, jsx as Xes } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as xQ1 } from "./react-runtime/react/esm-compiler-runtime-production.js";
function AQ1(t) {
  return `${t} will be removed from your Cursor account, not just this window. Grok Bot and cloud agents will lose it too until you reinstall it.`;
}
function McpConfigureDialog(t) {
  const e = xQ1(10),
    {
      plugin: n,
      onConfirm: i,
      onCancel: r
    } = t,
    s = n !== null;
  let o;
  e[0] !== r ? (o = c => {
    c || r();
  }, e[0] = r, e[1] = o) : o = e[1];
  let a;
  e[2] !== r || e[3] !== i || e[4] !== n ? (a = n !== null && wWm(IQ1, {
    children: [Xes(Xr.Header, {
      title: `Uninstall ${n.displayName}?`,
      description: AQ1(n.displayName)
    }), wWm(Xr.Footer, {
      children: [Xes(An, {
        variant: "text",
        size: "lg",
        onClick: r,
        children: "Cancel"
      }), Xes(An, {
        variant: "outline",
        size: "lg",
        onClick: i,
        children: "Uninstall"
      })]
    })]
  }), e[2] = r, e[3] = i, e[4] = n, e[5] = a) : a = e[5];
  let l;
  return e[6] !== s || e[7] !== o || e[8] !== a ? (l = Xes(Xr, {
    open: s,
    onOpenChange: o,
    size: "md",
    "aria-label": "Uninstall plugin confirmation",
    children: a
  }), e[6] = s, e[7] = o, e[8] = a, e[9] = l) : l = e[9], l;
}
