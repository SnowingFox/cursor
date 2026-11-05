// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 7362 range:570545..571118
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7362: (e2, n2, t2) => {
    "use strict";
    const a2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: s2 } = t2(7902), o2 = t2(568);
    function r(e3) {
      if (!e3 || "function" != typeof e3.dispatch) throw new s2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, a2, { value: e3, writable: true, enumerable: false, configurable: false });
    }
    function i() {
      return globalThis[a2];
    }
    void 0 === i() && r(new o2()), e2.exports = { setGlobalDispatcher: r, getGlobalDispatcher: i };
  }