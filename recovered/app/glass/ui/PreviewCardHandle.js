// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: PreviewCardHandle.js range:6315468..6316453
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:45.893Z
xWy = L({ "PreviewCardHandle.js"() {
  E(), zS(), uhh(), VS(), Zb(), Ihh = class {
    constructor() {
      this.store = new hna();
    }
    open(t) {
      const e = t ? this.store.context.triggerElements.getById(t) : void 0;
      if (t && !e) throw new Error(process.env.NODE_ENV !== "production" ? `Base UI: PreviewCardHandle.open: No trigger found with id "${t}".` : Oy(88, t));
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
import { c as AWy } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as RWy, useLayoutEffect as PWy } from "./react-runtime/react/esm-index-production.js";
function ro(t) {
  const e = AWy(3), n = RWy(t);
  let i, r;
  return e[0] !== t ? (i = () => {
    n.current = t;
  }, r = [t], e[0] = t, e[1] = i, e[2] = r) : (i = e[1], r = e[2]), PWy(i, r), n;
}
