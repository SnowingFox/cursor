// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3098 range:314658..315637
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3098: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.assertFloat32 = n2.assertUInt32 = n2.assertInt32 = n2.assert = void 0, n2.assert = function(e3, n3) {
      if (!e3) throw new Error(n3);
    };
    n2.assertInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid int 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 2147483647 || e3 < -2147483648) throw new Error("invalid int 32: " + e3);
    }, n2.assertUInt32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid uint 32: " + typeof e3);
      if (!Number.isInteger(e3) || e3 > 4294967295 || e3 < 0) throw new Error("invalid uint 32: " + e3);
    }, n2.assertFloat32 = function(e3) {
      if ("number" != typeof e3) throw new Error("invalid float 32: " + typeof e3);
      if (Number.isFinite(e3) && (e3 > 34028234663852886e22 || e3 < -34028234663852886e22)) throw new Error("invalid float 32: " + e3);
    };
  }