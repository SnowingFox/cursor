// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 3098 range:244122..245101
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3098: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.assertFloat32 = t2.assertUInt32 = t2.assertInt32 = t2.assert = void 0, t2.assert = function(e3, t3) {
      if (!e3) throw new Error(t3);
    };
    t2.assertInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }, t2.assertUInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }, t2.assertFloat32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    };
  }