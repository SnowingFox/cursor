// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 39796 range:3123742..3125253
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
39796: (e, t, r) => {
    "use strict";
    const { EMPTY_BUFFER: n } = r(78864), s = Buffer[Symbol.species];
    function o(e2, t2, r2, n2, s2) {
      for (let o2 = 0; o2 < s2; o2++) r2[n2 + o2] = e2[o2] ^ t2[3 & o2];
    }
    function i(e2, t2) {
      for (let r2 = 0; r2 < e2.length; r2++) e2[r2] ^= t2[3 & r2];
    }
    if (e.exports = { concat: function(e2, t2) {
      if (0 === e2.length) return n;
      if (1 === e2.length) return e2[0];
      const r2 = Buffer.allocUnsafe(t2);
      let o2 = 0;
      for (let t3 = 0; t3 < e2.length; t3++) {
        const n2 = e2[t3];
        r2.set(n2, o2), o2 += n2.length;
      }
      return o2 < t2 ? new s(r2.buffer, r2.byteOffset, o2) : r2;
    }, mask: o, toArrayBuffer: function(e2) {
      return e2.length === e2.buffer.byteLength ? e2.buffer : e2.buffer.slice(e2.byteOffset, e2.byteOffset + e2.length);
    }, toBuffer: function e2(t2) {
      if (e2.readOnly = true, Buffer.isBuffer(t2)) return t2;
      let r2;
      return t2 instanceof ArrayBuffer ? r2 = new s(t2) : ArrayBuffer.isView(t2) ? r2 = new s(t2.buffer, t2.byteOffset, t2.byteLength) : (r2 = Buffer.from(t2), e2.readOnly = false), r2;
    }, unmask: i }, !process.env.WS_NO_BUFFER_UTIL) try {
      const t2 = r(1962);
      e.exports.mask = function(e2, r2, n2, s2, i2) {
        i2 < 48 ? o(e2, r2, n2, s2, i2) : t2.mask(e2, r2, n2, s2, i2);
      }, e.exports.unmask = function(e2, r2) {
        e2.length < 32 ? i(e2, r2) : t2.unmask(e2, r2);
      };
    } catch (e2) {
    }
  }