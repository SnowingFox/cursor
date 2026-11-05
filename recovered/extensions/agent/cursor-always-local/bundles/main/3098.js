// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3098 range:914268..915247
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3098: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.assertFloat32 = e2.assertUInt32 = e2.assertInt32 = e2.assert = void 0, e2.assert = function(t3, e3) {
      if (!t3) throw new Error(e3);
    };
    e2.assertInt32 = function(t3) {
      if ("number" != typeof t3) throw new Error("invalid int 32: " + typeof t3);
      if (!Number.isInteger(t3) || t3 > 2147483647 || t3 < -2147483648) throw new Error("invalid int 32: " + t3);
    }, e2.assertUInt32 = function(t3) {
      if ("number" != typeof t3) throw new Error("invalid uint 32: " + typeof t3);
      if (!Number.isInteger(t3) || t3 > 4294967295 || t3 < 0) throw new Error("invalid uint 32: " + t3);
    }, e2.assertFloat32 = function(t3) {
      if ("number" != typeof t3) throw new Error("invalid float 32: " + typeof t3);
      if (Number.isFinite(t3) && (t3 > 34028234663852886e22 || t3 < -34028234663852886e22)) throw new Error("invalid float 32: " + t3);
    };
  }