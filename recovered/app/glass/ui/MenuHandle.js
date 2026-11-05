// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: MenuHandle.js range:14573334..14574710
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.795Z
fSS = L({ "MenuHandle.js"() {
  E(), zS(), VS(), v6h(), I6h = class {
    constructor() {
      this.store = new nma();
    }
    open(t) {
      const e = t ? this.store.context.triggerElements.getById(t) : void 0;
      if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: MenuHandle.open: No trigger found with id "${t}".` : Oy(83, t));
      this.store.setOpen(true, zd("imperative-action", void 0, e));
    }
    close() {
      this.store.setOpen(false, zd("imperative-action", void 0, void 0));
    }
    get isOpen() {
      return this.store.select("open");
    }
  };
} });
import * as G1t from "./react-runtime/react/esm-index-production.js";
import { jsx as lma } from "./react-runtime/react/esm-jsx-runtime-production.js";
function vSS(t) {
  const [e, n] = G1t.useState({ getBoundingClientRect() {
    return DOMRect.fromRect({ width: 0, height: 0, x: 0, y: 0 });
  } }), i = G1t.useRef(null), r = G1t.useRef(null), s = G1t.useRef(null), o = G1t.useRef(null), a = G1t.useRef(true), l = G1t.useRef(null), c = FSt(), u = G1t.useMemo(() => ({ anchor: e, setAnchor: n, actionsRef: s, backdropRef: i, internalBackdropRef: r, positionerRef: o, allowMouseUpTriggerRef: a, initialCursorPointRef: l, rootId: c }), [e, c]);
  return lma(kOr.Provider, { value: u, children: lma(Xhi.Provider, { value: void 0, children: lma(Qhi, { ...t }) }) });
}
