// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 7362 range:650741..651314
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7362: (e2, t2, A2) => {
    "use strict";
    const n2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: r2 } = A2(7902), o2 = A2(568);
    function s(e3) {
      if (!e3 || "function" != typeof e3.dispatch) throw new r2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, n2, { value: e3, writable: true, enumerable: false, configurable: false });
    }
    function i() {
      return globalThis[n2];
    }
    void 0 === i() && s(new o2()), e2.exports = { setGlobalDispatcher: s, getGlobalDispatcher: i };
  }