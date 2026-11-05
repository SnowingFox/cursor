// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9523 range:735263..735938
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9523: (e2) => {
    "use strict";
    const n2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e2.exports = { getGlobalOrigin: function() {
      return globalThis[n2];
    }, setGlobalOrigin: function(e3) {
      if (void 0 === e3) return void Object.defineProperty(globalThis, n2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const t2 = new URL(e3);
      if ("http:" !== t2.protocol && "https:" !== t2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${t2.protocol}`);
      Object.defineProperty(globalThis, n2, { value: t2, writable: true, enumerable: false, configurable: false });
    } };
  }