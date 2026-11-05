// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 7362 range:539219..539792
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7362: (e2, A2, t2) => {
    "use strict";
    const n2 = /* @__PURE__ */ Symbol.for("undici.globalDispatcher.1"), { InvalidArgumentError: r2 } = t2(7902), o2 = t2(568);
    function s(e3) {
      if (!e3 || "function" != typeof e3.dispatch) throw new r2("Argument agent must implement Agent");
      Object.defineProperty(globalThis, n2, { value: e3, writable: true, enumerable: false, configurable: false });
    }
    function a() {
      return globalThis[n2];
    }
    void 0 === a() && s(new o2()), e2.exports = { setGlobalDispatcher: s, getGlobalDispatcher: a };
  }