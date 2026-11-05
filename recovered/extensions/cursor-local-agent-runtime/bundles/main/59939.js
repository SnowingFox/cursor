// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 59939 range:1861316..1866549
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59939: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function o(e2, t2) {
      this.iconv = t2, this.bomAware = true, this.isLE = e2.isLE;
    }
    function s(e2, t2) {
      this.isLE = t2.isLE, this.highSurrogate = 0;
    }
    function i(e2, t2) {
      this.isLE = t2.isLE, this.badChar = t2.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
    }
    function a(e2, t2, r2, n2) {
      if ((r2 < 0 || r2 > 1114111) && (r2 = n2), r2 >= 65536) {
        var o2 = 55296 | (r2 -= 65536) >> 10;
        e2[t2++] = 255 & o2, e2[t2++] = o2 >> 8;
        r2 = 56320 | 1023 & r2;
      }
      return e2[t2++] = 255 & r2, e2[t2++] = r2 >> 8, t2;
    }
    function l(e2, t2) {
      this.iconv = t2;
    }
    function c(e2, t2) {
      void 0 === (e2 = e2 || {}).addBOM && (e2.addBOM = true), this.encoder = t2.iconv.getEncoder(e2.defaultEncoding || "utf-32le", e2);
    }
    function u(e2, t2) {
      this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e2 || {}, this.iconv = t2.iconv;
    }
    function d(e2, t2) {
      var r2 = [], n2 = 0, o2 = 0, s2 = 0, i2 = 0, a2 = 0;
      e: for (var l2 = 0; l2 < e2.length; l2++) for (var c2 = e2[l2], u2 = 0; u2 < c2.length; u2++) if (r2.push(c2[u2]), 4 === r2.length) {
        if (0 === n2) {
          if (255 === r2[0] && 254 === r2[1] && 0 === r2[2] && 0 === r2[3]) return "utf-32le";
          if (0 === r2[0] && 0 === r2[1] && 254 === r2[2] && 255 === r2[3]) return "utf-32be";
        }
        if ((0 !== r2[0] || r2[1] > 16) && s2++, (0 !== r2[3] || r2[2] > 16) && o2++, 0 !== r2[0] || 0 !== r2[1] || 0 === r2[2] && 0 === r2[3] || a2++, 0 === r2[0] && 0 === r2[1] || 0 !== r2[2] || 0 !== r2[3] || i2++, r2.length = 0, ++n2 >= 100) break e;
      }
      return a2 - s2 > i2 - o2 ? "utf-32be" : a2 - s2 < i2 - o2 ? "utf-32le" : t2 || "utf-32le";
    }
    t._utf32 = o, t.utf32le = { type: "_utf32", isLE: true }, t.utf32be = { type: "_utf32", isLE: false }, t.ucs4le = "utf32le", t.ucs4be = "utf32be", o.prototype.encoder = s, o.prototype.decoder = i, s.prototype.write = function(e2) {
      for (var t2 = n.from(e2, "ucs2"), r2 = n.alloc(2 * t2.length), o2 = this.isLE ? r2.writeUInt32LE : r2.writeUInt32BE, s2 = 0, i2 = 0; i2 < t2.length; i2 += 2) {
        var a2 = t2.readUInt16LE(i2), l2 = a2 >= 55296 && a2 < 56320, c2 = a2 >= 56320 && a2 < 57344;
        if (this.highSurrogate) {
          if (!l2 && c2) {
            var u2 = 65536 + (this.highSurrogate - 55296 << 10 | a2 - 56320);
            o2.call(r2, u2, s2), s2 += 4, this.highSurrogate = 0;
            continue;
          }
          o2.call(r2, this.highSurrogate, s2), s2 += 4;
        }
        l2 ? this.highSurrogate = a2 : (o2.call(r2, a2, s2), s2 += 4, this.highSurrogate = 0);
      }
      return s2 < r2.length && (r2 = r2.slice(0, s2)), r2;
    }, s.prototype.end = function() {
      if (this.highSurrogate) {
        var e2 = n.alloc(4);
        return this.isLE ? e2.writeUInt32LE(this.highSurrogate, 0) : e2.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, e2;
      }
    }, i.prototype.write = function(e2) {
      if (0 === e2.length) return "";
      var t2 = 0, r2 = 0, o2 = n.alloc(e2.length + 4), s2 = 0, i2 = this.isLE, l2 = this.overflow, c2 = this.badChar;
      if (l2.length > 0) {
        for (; t2 < e2.length && l2.length < 4; t2++) l2.push(e2[t2]);
        4 === l2.length && (r2 = i2 ? l2[t2] | l2[t2 + 1] << 8 | l2[t2 + 2] << 16 | l2[t2 + 3] << 24 : l2[t2 + 3] | l2[t2 + 2] << 8 | l2[t2 + 1] << 16 | l2[t2] << 24, l2.length = 0, s2 = a(o2, s2, r2, c2));
      }
      for (; t2 < e2.length - 3; t2 += 4) s2 = a(o2, s2, r2 = i2 ? e2[t2] | e2[t2 + 1] << 8 | e2[t2 + 2] << 16 | e2[t2 + 3] << 24 : e2[t2 + 3] | e2[t2 + 2] << 8 | e2[t2 + 1] << 16 | e2[t2] << 24, c2);
      for (; t2 < e2.length; t2++) l2.push(e2[t2]);
      return o2.slice(0, s2).toString("ucs2");
    }, i.prototype.end = function() {
      this.overflow.length = 0;
    }, t.utf32 = l, t.ucs4 = "utf32", l.prototype.encoder = c, l.prototype.decoder = u, c.prototype.write = function(e2) {
      return this.encoder.write(e2);
    }, c.prototype.end = function() {
      return this.encoder.end();
    }, u.prototype.write = function(e2) {
      if (!this.decoder) {
        if (this.initialBufs.push(e2), this.initialBufsLen += e2.length, this.initialBufsLen < 32) return "";
        var t2 = d(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(t2, this.options);
        for (var r2 = "", n2 = 0; n2 < this.initialBufs.length; n2++) r2 += this.decoder.write(this.initialBufs[n2]);
        return this.initialBufs.length = this.initialBufsLen = 0, r2;
      }
      return this.decoder.write(e2);
    }, u.prototype.end = function() {
      if (!this.decoder) {
        var e2 = d(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(e2, this.options);
        for (var t2 = "", r2 = 0; r2 < this.initialBufs.length; r2++) t2 += this.decoder.write(this.initialBufs[r2]);
        var n2 = this.decoder.end();
        return n2 && (t2 += n2), this.initialBufs.length = this.initialBufsLen = 0, t2;
      }
      return this.decoder.end();
    };
  }