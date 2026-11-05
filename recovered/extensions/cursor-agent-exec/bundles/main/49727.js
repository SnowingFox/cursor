// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 49727 range:3560445..3561323
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49727: (e, t, r) => {
    "use strict";
    const n = r(75940), s = r(58334);
    t.define = function(e2, t2, r2) {
      Reflect.defineProperty(e2, t2, { enumerable: false, configurable: true, writable: true, value: r2 });
    }, t.isBuffer = function(e2) {
      return "buffer" === s(e2);
    }, t.isObject = function(e2) {
      return "object" === s(e2);
    }, t.toBuffer = function(e2) {
      return "string" == typeof e2 ? Buffer.from(e2) : e2;
    }, t.toString = function(e2) {
      if (t.isBuffer(e2)) return n(String(e2));
      if ("string" != typeof e2) throw new TypeError("expected input to be a string or buffer");
      return n(e2);
    }, t.arrayify = function(e2) {
      return e2 ? Array.isArray(e2) ? e2 : [e2] : [];
    }, t.startsWith = function(e2, t2, r2) {
      return "number" != typeof r2 && (r2 = t2.length), e2.slice(0, r2) === t2;
    };
  }