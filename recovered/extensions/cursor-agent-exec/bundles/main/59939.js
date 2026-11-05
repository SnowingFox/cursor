// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 59939 range:4715742..4720975
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
59939: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function s(e2, t2) {
      this.iconv = t2, this.bomAware = true, this.isLE = e2.isLE;
    }
    function o(e2, t2) {
      this.isLE = t2.isLE, this.highSurrogate = 0;
    }
    function i(e2, t2) {
      this.isLE = t2.isLE, this.badChar = t2.iconv.defaultCharUnicode.charCodeAt(0), this.overflow = [];
    }
    function a(e2, t2, r2, n2) {
      if ((r2 < 0 || r2 > 1114111) && (r2 = n2), r2 >= 65536) {
        var s2 = 55296 | (r2 -= 65536) >> 10;
        e2[t2++] = 255 & s2, e2[t2++] = s2 >> 8;
        r2 = 56320 | 1023 & r2;
      }
      return e2[t2++] = 255 & r2, e2[t2++] = r2 >> 8, t2;
    }
    function c(e2, t2) {
      this.iconv = t2;
    }
    function l(e2, t2) {
      void 0 === (e2 = e2 || {}).addBOM && (e2.addBOM = true), this.encoder = t2.iconv.getEncoder(e2.defaultEncoding || "utf-32le", e2);
    }
    function u(e2, t2) {
      this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e2 || {}, this.iconv = t2.iconv;
    }
    function d(e2, t2) {
      var r2 = [], n2 = 0, s2 = 0, o2 = 0, i2 = 0, a2 = 0;
      e: for (var c2 = 0; c2 < e2.length; c2++) for (var l2 = e2[c2], u2 = 0; u2 < l2.length; u2++) if (r2.push(l2[u2]), 4 === r2.length) {
        if (0 === n2) {
          if (255 === r2[0] && 254 === r2[1] && 0 === r2[2] && 0 === r2[3]) return "utf-32le";
          if (0 === r2[0] && 0 === r2[1] && 254 === r2[2] && 255 === r2[3]) return "utf-32be";
        }
        if ((0 !== r2[0] || r2[1] > 16) && o2++, (0 !== r2[3] || r2[2] > 16) && s2++, 0 !== r2[0] || 0 !== r2[1] || 0 === r2[2] && 0 === r2[3] || a2++, 0 === r2[0] && 0 === r2[1] || 0 !== r2[2] || 0 !== r2[3] || i2++, r2.length = 0, ++n2 >= 100) break e;
      }
      return a2 - o2 > i2 - s2 ? "utf-32be" : a2 - o2 < i2 - s2 ? "utf-32le" : t2 || "utf-32le";
    }
    t._utf32 = s, t.utf32le = { type: "_utf32", isLE: true }, t.utf32be = { type: "_utf32", isLE: false }, t.ucs4le = "utf32le", t.ucs4be = "utf32be", s.prototype.encoder = o, s.prototype.decoder = i, o.prototype.write = function(e2) {
      for (var t2 = n.from(e2, "ucs2"), r2 = n.alloc(2 * t2.length), s2 = this.isLE ? r2.writeUInt32LE : r2.writeUInt32BE, o2 = 0, i2 = 0; i2 < t2.length; i2 += 2) {
        var a2 = t2.readUInt16LE(i2), c2 = a2 >= 55296 && a2 < 56320, l2 = a2 >= 56320 && a2 < 57344;
        if (this.highSurrogate) {
          if (!c2 && l2) {
            var u2 = 65536 + (this.highSurrogate - 55296 << 10 | a2 - 56320);
            s2.call(r2, u2, o2), o2 += 4, this.highSurrogate = 0;
            continue;
          }
          s2.call(r2, this.highSurrogate, o2), o2 += 4;
        }
        c2 ? this.highSurrogate = a2 : (s2.call(r2, a2, o2), o2 += 4, this.highSurrogate = 0);
      }
      return o2 < r2.length && (r2 = r2.slice(0, o2)), r2;
    }, o.prototype.end = function() {
      if (this.highSurrogate) {
        var e2 = n.alloc(4);
        return this.isLE ? e2.writeUInt32LE(this.highSurrogate, 0) : e2.writeUInt32BE(this.highSurrogate, 0), this.highSurrogate = 0, e2;
      }
    }, i.prototype.write = function(e2) {
      if (0 === e2.length) return "";
      var t2 = 0, r2 = 0, s2 = n.alloc(e2.length + 4), o2 = 0, i2 = this.isLE, c2 = this.overflow, l2 = this.badChar;
      if (c2.length > 0) {
        for (; t2 < e2.length && c2.length < 4; t2++) c2.push(e2[t2]);
        4 === c2.length && (r2 = i2 ? c2[t2] | c2[t2 + 1] << 8 | c2[t2 + 2] << 16 | c2[t2 + 3] << 24 : c2[t2 + 3] | c2[t2 + 2] << 8 | c2[t2 + 1] << 16 | c2[t2] << 24, c2.length = 0, o2 = a(s2, o2, r2, l2));
      }
      for (; t2 < e2.length - 3; t2 += 4) o2 = a(s2, o2, r2 = i2 ? e2[t2] | e2[t2 + 1] << 8 | e2[t2 + 2] << 16 | e2[t2 + 3] << 24 : e2[t2 + 3] | e2[t2 + 2] << 8 | e2[t2 + 1] << 16 | e2[t2] << 24, l2);
      for (; t2 < e2.length; t2++) c2.push(e2[t2]);
      return s2.slice(0, o2).toString("ucs2");
    }, i.prototype.end = function() {
      this.overflow.length = 0;
    }, t.utf32 = c, t.ucs4 = "utf32", c.prototype.encoder = l, c.prototype.decoder = u, l.prototype.write = function(e2) {
      return this.encoder.write(e2);
    }, l.prototype.end = function() {
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