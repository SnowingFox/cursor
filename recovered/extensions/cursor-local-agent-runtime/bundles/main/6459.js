// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 6459 range:58599..60042
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6459: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function o(e2, t2) {
      if (!e2) throw new Error("SBCS codec is called without the data.");
      if (!e2.chars || 128 !== e2.chars.length && 256 !== e2.chars.length) throw new Error("Encoding '" + e2.type + "' has incorrect 'chars' (must be of len 128 or 256)");
      if (128 === e2.chars.length) {
        for (var r2 = "", o2 = 0; o2 < 128; o2++) r2 += String.fromCharCode(o2);
        e2.chars = r2 + e2.chars;
      }
      this.decodeBuf = n.from(e2.chars, "ucs2");
      var s2 = n.alloc(65536, t2.defaultCharSingleByte.charCodeAt(0));
      for (o2 = 0; o2 < e2.chars.length; o2++) s2[e2.chars.charCodeAt(o2)] = o2;
      this.encodeBuf = s2;
    }
    function s(e2, t2) {
      this.encodeBuf = t2.encodeBuf;
    }
    function i(e2, t2) {
      this.decodeBuf = t2.decodeBuf;
    }
    t._sbcs = o, o.prototype.encoder = s, o.prototype.decoder = i, s.prototype.write = function(e2) {
      for (var t2 = n.alloc(e2.length), r2 = 0; r2 < e2.length; r2++) t2[r2] = this.encodeBuf[e2.charCodeAt(r2)];
      return t2;
    }, s.prototype.end = function() {
    }, i.prototype.write = function(e2) {
      for (var t2 = this.decodeBuf, r2 = n.alloc(2 * e2.length), o2 = 0, s2 = 0, i2 = 0; i2 < e2.length; i2++) o2 = 2 * e2[i2], r2[s2 = 2 * i2] = t2[o2], r2[s2 + 1] = t2[o2 + 1];
      return r2.toString("ucs2");
    }, i.prototype.end = function() {
    };
  }