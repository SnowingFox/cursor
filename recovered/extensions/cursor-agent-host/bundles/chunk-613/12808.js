// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 12808 range:30014..30657
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
12808: (A) => {
  "use strict";
  const e = /* @__PURE__ */ Symbol.for("undici.globalOrigin.1");
  A.exports = { getGlobalOrigin: function() {
    return globalThis[e];
  }, setGlobalOrigin: function(A2) {
    if (void 0 === A2) return void Object.defineProperty(globalThis, e, { value: void 0, writable: true, enumerable: false, configurable: false });
    const t = new URL(A2);
    if ("http:" !== t.protocol && "https:" !== t.protocol) throw new TypeError(`Only http & https urls are allowed, received ${t.protocol}`);
    Object.defineProperty(globalThis, e, { value: t, writable: true, enumerable: false, configurable: false });
  } };
}