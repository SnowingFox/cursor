// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9523 range:703739..704414
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9523: (e2) => {
    "use strict";
    const A2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e2.exports = { getGlobalOrigin: function() {
      return globalThis[A2];
    }, setGlobalOrigin: function(e3) {
      if (void 0 === e3) return void Object.defineProperty(globalThis, A2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const t2 = new URL(e3);
      if ("http:" !== t2.protocol && "https:" !== t2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${t2.protocol}`);
      Object.defineProperty(globalThis, A2, { value: t2, writable: true, enumerable: false, configurable: false });
    } };
  }