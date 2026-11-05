// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3967 range:1046860..1047535
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3967: (t2) => {
    "use strict";
    const e2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    t2.exports = { getGlobalOrigin: function() {
      return globalThis[e2];
    }, setGlobalOrigin: function(t3) {
      if (void 0 === t3) return void Object.defineProperty(globalThis, e2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const r2 = new URL(t3);
      if ("http:" !== r2.protocol && "https:" !== r2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${r2.protocol}`);
      Object.defineProperty(globalThis, e2, { value: r2, writable: true, enumerable: false, configurable: false });
    } };
  }