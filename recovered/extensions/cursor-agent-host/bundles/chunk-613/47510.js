// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 47510 range:247864..248916
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
47510: (A, e, t) => {
  "use strict";
  const r = t(78474);
  class s extends r {
    dispatch() {
      throw new Error("not implemented");
    }
    close() {
      throw new Error("not implemented");
    }
    destroy() {
      throw new Error("not implemented");
    }
    compose(...A2) {
      const e2 = Array.isArray(A2[0]) ? A2[0] : A2;
      let t2 = this.dispatch.bind(this);
      for (const A3 of e2) if (null != A3) {
        if ("function" != typeof A3) throw new TypeError("invalid interceptor, expected function received " + typeof A3);
        if (t2 = A3(t2), null == t2 || "function" != typeof t2 || 2 !== t2.length) throw new TypeError("invalid interceptor");
      }
      return new o(this, t2);
    }
  }
  class o extends s {
    #M = null;
    #I = null;
    constructor(A2, e2) {
      super(), this.#M = A2, this.#I = e2;
    }
    dispatch(...A2) {
      this.#I(...A2);
    }
    close(...A2) {
      return this.#M.close(...A2);
    }
    destroy(...A2) {
      return this.#M.destroy(...A2);
    }
  }
  A.exports = s;
}