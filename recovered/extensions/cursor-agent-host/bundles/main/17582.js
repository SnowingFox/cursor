// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 17582 range:4299567..4300131
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
17582: (e, t, r) => {
    "use strict";
    const n = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s } = r(48762), o = r(57132);
    function i(e2) {
      if (!e2 || "function" != typeof e2.dispatch) throw new s("Argument agent must implement Agent");
      Object.defineProperty(globalThis, n, { value: e2, writable: true, enumerable: false, configurable: false });
    }
    function a() {
      return globalThis[n];
    }
    void 0 === a() && i(new o()), e.exports = { setGlobalDispatcher: i, getGlobalDispatcher: a };
  }