// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Store.mjs range:31262318..31263355
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.031Z
$2f = L({ "Store.mjs"() {
  E(), pOl(), j2f = class {
    constructor(t) {
      this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
    }
    subscribe = (t) => (this.listeners.add(t), () => {
      this.listeners.delete(t);
    });
    getSnapshot = () => this.state;
    setState(t) {
      if (this.state === t) return;
      this.state = t, this.updateTick += 1;
      const e = this.updateTick;
      for (const n of this.listeners) {
        if (e !== this.updateTick) return;
        n(t);
      }
    }
    update(t) {
      for (const e in t) if (!Object.is(this.state[e], t[e])) {
        this.setState({ ...this.state, ...t });
        return;
      }
    }
    set(t, e) {
      Object.is(this.state[t], e) || this.setState({ ...this.state, [t]: e });
    }
    notifyAll() {
      const t = { ...this.state };
      this.setState(t);
    }
    use(t, e, n, i) {
      return F2f(this, t, e, n, i);
    }
  };
} });
import * as GXt from "./react-runtime/react/esm-index-production.js";
var mOl, 