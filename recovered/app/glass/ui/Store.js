// @recovered-by cursor-re
// artifact: app/out/vs/workbench/workbench.glass.main.js sha256:6eb88cb60fce5bf5df2ee401f797d5e160b0bcb5d85c25e57d2576b467edce81
// module: Store.js range:5948436..5949702
// basis: inferred
// confidence: C
// method: split
// run: main 2026-11-05T10:03:46.030Z
sQo = L({ "Store.js"() {
  E(), TW(), Rsh = Object.defineProperty, Psh = (t, e, n) => e in t ? Rsh(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n, rQo = (t, e, n) => Psh(t, typeof e != "symbol" ? e + "" : e, n), nRr = class {
    constructor(t) {
      rQo(this, "subscribe", (e) => (this.listeners.add(e), () => {
        this.listeners.delete(e);
      })), rQo(this, "getSnapshot", () => this.state), this.state = t, this.listeners = /* @__PURE__ */ new Set(), this.updateTick = 0;
    }
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
      return Ic(this, t, e, n, i);
    }
  };
} });
import * as F8t from "./react-runtime/react/esm-index-production.js";
var B8t, 