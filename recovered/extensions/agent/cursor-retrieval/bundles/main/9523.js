// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9523 range:1054682..1055357
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9523: (e2) => {
    "use strict";
    const a2 = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
    e2.exports = { getGlobalOrigin: function() {
      return globalThis[a2];
    }, setGlobalOrigin: function(e3) {
      if (void 0 === e3) return void Object.defineProperty(globalThis, a2, { value: void 0, writable: true, enumerable: false, configurable: false });
      const n2 = new URL(e3);
      if ("http:" !== n2.protocol && "https:" !== n2.protocol) throw new TypeError(`Only http & https urls are allowed, received ${n2.protocol}`);
      Object.defineProperty(globalThis, a2, { value: n2, writable: true, enumerable: false, configurable: false });
    } };
  }