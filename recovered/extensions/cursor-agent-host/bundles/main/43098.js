// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 43098 range:7748033..7749002
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