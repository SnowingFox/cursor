// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 7362 range:539924..540503
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7362: (e2, n2, a2) => {
    "use strict";
    const t2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s2 } = a2(7902), o2 = a2(568);
    function r2(e3) {
      if (!e3 || "function" != typeof e3.dispatch) throw new s2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, t2, { value: e3, writable: true, enumerable: false, configurable: false });
    }
    function i2() {
      return globalThis[t2];
    }
    void 0 === i2() && r2(new o2()), e2.exports = { setGlobalDispatcher: r2, getGlobalDispatcher: i2 };
  }