// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 43098 range:1309503..1310472
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
43098: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.assertFloat32 = t.assertUInt32 = t.assertInt32 = t.assert = void 0, t.assert = function(e2, t2) {
      if (!e2) throw new Error(t2);
    };
    t.assertInt32 = function(e2) {
      if ("number" != typeof e2) throw new Error("invalid int 32: " + typeof e2);
      if (!Number.isInteger(e2) || e2 > 2147483647 || e2 < -2147483648) throw new Error("invalid int 32: " + e2);
    }, t.assertUInt32 = function(e2) {
      if ("number" != typeof e2) throw new Error("invalid uint 32: " + typeof e2);
      if (!Number.isInteger(e2) || e2 > 4294967295 || e2 < 0) throw new Error("invalid uint 32: " + e2);
    }, t.assertFloat32 = function(e2) {
      if ("number" != typeof e2) throw new Error("invalid float 32: " + typeof e2);
      if (Number.isFinite(e2) && (e2 > 34028234663852886e22 || e2 < -34028234663852886e22)) throw new Error("invalid float 32: " + e2);
    };
  }