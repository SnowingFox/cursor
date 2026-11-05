// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 49727 range:1473845..1474723
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49727: (e, t, r) => {
    "use strict";
    const n = r(75940), o = r(58334);
    t.define = function(e2, t2, r2) {
      Reflect.defineProperty(e2, t2, { enumerable: false, configurable: true, writable: true, value: r2 });
    }, t.isBuffer = function(e2) {
      return "buffer" === o(e2);
    }, t.isObject = function(e2) {
      return "object" === o(e2);
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