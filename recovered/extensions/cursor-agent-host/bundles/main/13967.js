// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 13967 range:3969940..3970605
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
13967: (e) => {
    "use strict";
    const t = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e.exports = { getGlobalOrigin: function() {
      return globalThis[t];
    }, setGlobalOrigin: function(e2) {
      if (void 0 === e2) return void Object.defineProperty(globalThis, t, { value: void 0, writable: true, enumerable: false, configurable: false });
      const r = new URL(e2);
      if ("http:" !== r.protocol && "https:" !== r.protocol) throw new TypeError(`Only http & https urls are allowed, received ${r.protocol}`);
      Object.defineProperty(globalThis, t, { value: r, writable: true, enumerable: false, configurable: false });
    } };
  }