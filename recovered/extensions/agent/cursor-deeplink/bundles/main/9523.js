// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9523 range:841604..842279
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9523: (e2) => {
    "use strict";
    const t2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e2.exports = { getGlobalOrigin: function() {
      return globalThis[t2];
    }, setGlobalOrigin: function(e3) {
      if (void 0 === e3) return void Object.defineProperty(globalThis, t2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const A2 = new URL(e3);
      if ("http:" !== A2.protocol && "https:" !== A2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${A2.protocol}`);
      Object.defineProperty(globalThis, t2, { value: A2, writable: true, enumerable: false, configurable: false });
    } };
  }