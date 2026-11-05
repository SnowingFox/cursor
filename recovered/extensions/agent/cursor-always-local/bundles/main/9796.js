// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9796 range:6211375..6212904
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9796: (t2, e2, r2) => {
    "use strict";
    const { EMPTY_BUFFER: n2 } = r2(8864), s2 = Buffer[Symbol.species];
    function i2(t3, e3, r3, n3, s3) {
      for (let i3 = 0; i3 < s3; i3++) r3[n3 + i3] = t3[i3] ^ e3[3 & i3];
    }
    function o2(t3, e3) {
      for (let r3 = 0; r3 < t3.length; r3++) t3[r3] ^= e3[3 & r3];
    }
    if (t2.exports = { concat: function(t3, e3) {
      if (0 === t3.length) return n2;
      if (1 === t3.length) return t3[0];
      const r3 = Buffer.allocUnsafe(e3);
      let i3 = 0;
      for (let e4 = 0; e4 < t3.length; e4++) {
        const n3 = t3[e4];
        r3.set(n3, i3), i3 += n3.length;
      }
      return i3 < e3 ? new s2(r3.buffer, r3.byteOffset, i3) : r3;
    }, mask: i2, toArrayBuffer: function(t3) {
      return t3.length === t3.buffer.byteLength ? t3.buffer : t3.buffer.slice(t3.byteOffset, t3.byteOffset + t3.length);
    }, toBuffer: function t3(e3) {
      if (t3.readOnly = true, Buffer.isBuffer(e3)) return e3;
      let r3;
      return e3 instanceof ArrayBuffer ? r3 = new s2(e3) : ArrayBuffer.isView(e3) ? r3 = new s2(e3.buffer, e3.byteOffset, e3.byteLength) : (r3 = Buffer.from(e3), t3.readOnly = false), r3;
    }, unmask: o2 }, !process.env.WS_NO_BUFFER_UTIL) try {
      const e3 = r2(1962);
      t2.exports.mask = function(t3, r3, n3, s3, o3) {
        o3 < 48 ? i2(t3, r3, n3, s3, o3) : e3.mask(t3, r3, n3, s3, o3);
      }, t2.exports.unmask = function(t3, r3) {
        t3.length < 32 ? o2(t3, r3) : e3.unmask(t3, r3);
      };
    } catch (t3) {
    }
  }