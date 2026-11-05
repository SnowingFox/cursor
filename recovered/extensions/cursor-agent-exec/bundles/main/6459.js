// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 6459 range:442018..443461
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6459: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function s(e2, t2) {
      if (!e2) throw new Error("SBCS codec is called without the data.");
      if (!e2.chars || 128 !== e2.chars.length && 256 !== e2.chars.length) throw new Error("Encoding '" + e2.type + "' has incorrect 'chars' (must be of len 128 or 256)");
      if (128 === e2.chars.length) {
        for (var r2 = "", s2 = 0; s2 < 128; s2++) r2 += String.fromCharCode(s2);
        e2.chars = r2 + e2.chars;
      }
      this.decodeBuf = n.from(e2.chars, "ucs2");
      var o2 = n.alloc(65536, t2.defaultCharSingleByte.charCodeAt(0));
      for (s2 = 0; s2 < e2.chars.length; s2++) o2[e2.chars.charCodeAt(s2)] = s2;
      this.encodeBuf = o2;
    }
    function o(e2, t2) {
      this.encodeBuf = t2.encodeBuf;
    }
    function i(e2, t2) {
      this.decodeBuf = t2.decodeBuf;
    }
    t._sbcs = s, s.prototype.encoder = o, s.prototype.decoder = i, o.prototype.write = function(e2) {
      for (var t2 = n.alloc(e2.length), r2 = 0; r2 < e2.length; r2++) t2[r2] = this.encodeBuf[e2.charCodeAt(r2)];
      return t2;
    }, o.prototype.end = function() {
    }, i.prototype.write = function(e2) {
      for (var t2 = this.decodeBuf, r2 = n.alloc(2 * e2.length), s2 = 0, o2 = 0, i2 = 0; i2 < e2.length; i2++) s2 = 2 * e2[i2], r2[o2 = 2 * i2] = t2[s2], r2[o2 + 1] = t2[s2 + 1];
      return r2.toString("ucs2");
    }, i.prototype.end = function() {
    };
  }