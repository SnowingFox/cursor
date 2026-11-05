// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7582 range:4309615..4310192
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7582: (t2, e2, r2) => {
    "use strict";
    const n2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s2 } = r2(8762), i2 = r2(7132);
    function o2(t3) {
      if (!t3 || "function" != typeof t3.dispatch) throw new s2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, n2, { value: t3, writable: true, enumerable: false, configurable: false });
    }
    function a() {
      return globalThis[n2];
    }
    void 0 === a() && o2(new i2()), t2.exports = { setGlobalDispatcher: o2, getGlobalDispatcher: a };
  }