// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3098 range:589721..590700
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3098: (e2, a2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.assertFloat32 = a2.assertUInt32 = a2.assertInt32 = a2.assert = void 0, a2.assert = function(e3, a3) {
      if (!e3) throw new Error(a3);
    };
    a2.assertInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }, a2.assertUInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }, a2.assertFloat32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    };
  }