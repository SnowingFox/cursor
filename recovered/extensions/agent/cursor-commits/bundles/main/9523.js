// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9523 range:704780..705455
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9523: (e2) => {
    "use strict";
    const n2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e2.exports = { getGlobalOrigin: function() {
      return globalThis[n2];
    }, setGlobalOrigin: function(e3) {
      if (void 0 === e3) return void Object.defineProperty(globalThis, n2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const a2 = new URL(e3);
      if ("http:" !== a2.protocol && "https:" !== a2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${a2.protocol}`);
      Object.defineProperty(globalThis, n2, { value: a2, writable: true, enumerable: false, configurable: false });
    } };
  }