// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: TooltipHandle.js range:6352137..6353642
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.277Z
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js, TooltipStore.js, createBaseUIEventDetails.js, reason-parts.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
// fragment: esbuild wrapper body + hoisted tail; may include adjacent declarations; not a standalone module
// deps: tslib.es6.js, formatErrorMessage.js, TooltipStore.js, createBaseUIEventDetails.js, reason-parts.js
// path-candidate: none (no nls basename match; path inferred, confidence C)
fGy = L({ "TooltipHandle.js"() {
  E(), zS(), jhh(), VS(), Zb(), oph = class {
    constructor() {
      this.store = new Ina();
    }
    open(t) {
      const e = t ? this.store.context.triggerElements.getById(t) : void 0;
      if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: TooltipHandle.open: No trigger found with id "${t}".` : Oy(81, t));
      this.store.setOpen(true, zd(Uwe, void 0, e));
    }
    close() {
      this.store.setOpen(false, zd(Uwe, void 0, void 0));
    }
    get isOpen() {
      return this.store.select("open");
    }
  };
} });
import { jsx as aph } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { c as vGy } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { createContext as _Gy } from "./react-runtime/react/esm-index-production.js";
function $oe(t) {
  const e = vGy(10), { children: n, delay: i, timeoutMs: r } = t, s = i === void 0 ? lph : i, o = r === void 0 ? 200 : r;
  let a;
  e[0] !== s ? (a = typeof s == "number" ? { open: s, close: lWe } : s, e[0] = s, e[1] = a) : a = e[1];
  const l = a, c = l;
  let u;
  e[2] !== n || e[3] !== l.close || e[4] !== l.open || e[5] !== o ? (u = aph(Rna, { closeDelay: l.close, delay: l.open, timeout: o, children: n }), e[2] = n, e[3] = l.close, e[4] = l.open, e[5] = o, e[6] = u) : u = e[6];
  let d;
  return e[7] !== c || e[8] !== u ? (d = aph(KPr.Provider, { value: c, children: u }), e[7] = c, e[8] = u, e[9] = d) : d = e[9], d;
}
var lph, KPr, 