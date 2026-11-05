// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 3098 range:114952..115949
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3098: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.assertFloat32 = a10.assertUInt32 = a10.assertInt32 = a10.assert = void 0, a10.assert = function(e11, a11) {
      if (!e11) throw new Error(a11);
    };
    a10.assertInt32 = function(e11) {
      if ("number" != typeof e11) throw new Error("invalid int 32: " + typeof e11);
      if (!Number.isInteger(e11) || e11 > 2147483647 || e11 < -2147483648) throw new Error("invalid int 32: " + e11);
    }, a10.assertUInt32 = function(e11) {
      if ("number" != typeof e11) throw new Error("invalid uint 32: " + typeof e11);
      if (!Number.isInteger(e11) || e11 > 4294967295 || e11 < 0) throw new Error("invalid uint 32: " + e11);
    }, a10.assertFloat32 = function(e11) {
      if ("number" != typeof e11) throw new Error("invalid float 32: " + typeof e11);
      if (Number.isFinite(e11) && (e11 > 34028234663852886e22 || e11 < -34028234663852886e22)) throw new Error("invalid float 32: " + e11);
    };
  }