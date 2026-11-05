// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 7362 range:860885..861464
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7362: (e2, a2, n2) => {
    "use strict";
    const t2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s2 } = n2(7902), o2 = n2(568);
    function r2(e3) {
      if (!e3 || "function" != typeof e3.dispatch) throw new s2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, t2, { value: e3, writable: true, enumerable: false, configurable: false });
    }
    function i2() {
      return globalThis[t2];
    }
    void 0 === i2() && r2(new o2()), e2.exports = { setGlobalDispatcher: r2, getGlobalDispatcher: i2 };
  }