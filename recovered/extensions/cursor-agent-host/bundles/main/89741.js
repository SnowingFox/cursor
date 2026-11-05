// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 89741 range:13009340..13012536
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
89741: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function s() {
    }
    function o() {
    }
    function i() {
      this.overflowByte = -1;
    }
    function a(e2, t2) {
      this.iconv = t2;
    }
    function c(e2, t2) {
      void 0 === (e2 = e2 || {}).addBOM && (e2.addBOM = true), this.encoder = t2.iconv.getEncoder("utf-16le", e2);
    }
    function l(e2, t2) {
      this.decoder = null, this.initialBufs = [], this.initialBufsLen = 0, this.options = e2 || {}, this.iconv = t2.iconv;
    }
    function u(e2, t2) {
      var r2 = [], n2 = 0, s2 = 0, o2 = 0;
      e: for (var i2 = 0; i2 < e2.length; i2++) for (var a2 = e2[i2], c2 = 0; c2 < a2.length; c2++) if (r2.push(a2[c2]), 2 === r2.length) {
        if (0 === n2) {
          if (255 === r2[0] && 254 === r2[1]) return "utf-16le";
          if (254 === r2[0] && 255 === r2[1]) return "utf-16be";
        }
        if (0 === r2[0] && 0 !== r2[1] && o2++, 0 !== r2[0] && 0 === r2[1] && s2++, r2.length = 0, ++n2 >= 100) break e;
      }
      return o2 > s2 ? "utf-16be" : o2 < s2 ? "utf-16le" : t2 || "utf-16le";
    }
    t.utf16be = s, s.prototype.encoder = o, s.prototype.decoder = i, s.prototype.bomAware = true, o.prototype.write = function(e2) {
      for (var t2 = n.from(e2, "ucs2"), r2 = 0; r2 < t2.length; r2 += 2) {
        var s2 = t2[r2];
        t2[r2] = t2[r2 + 1], t2[r2 + 1] = s2;
      }
      return t2;
    }, o.prototype.end = function() {
    }, i.prototype.write = function(e2) {
      if (0 == e2.length) return "";
      var t2 = n.alloc(e2.length + 1), r2 = 0, s2 = 0;
      for (-1 !== this.overflowByte && (t2[0] = e2[0], t2[1] = this.overflowByte, r2 = 1, s2 = 2); r2 < e2.length - 1; r2 += 2, s2 += 2) t2[s2] = e2[r2 + 1], t2[s2 + 1] = e2[r2];
      return this.overflowByte = r2 == e2.length - 1 ? e2[e2.length - 1] : -1, t2.slice(0, s2).toString("ucs2");
    }, i.prototype.end = function() {
      this.overflowByte = -1;
    }, t.utf16 = a, a.prototype.encoder = c, a.prototype.decoder = l, c.prototype.write = function(e2) {
      return this.encoder.write(e2);
    }, c.prototype.end = function() {
      return this.encoder.end();
    }, l.prototype.write = function(e2) {
      if (!this.decoder) {
        if (this.initialBufs.push(e2), this.initialBufsLen += e2.length, this.initialBufsLen < 16) return "";
        var t2 = u(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(t2, this.options);
        for (var r2 = "", n2 = 0; n2 < this.initialBufs.length; n2++) r2 += this.decoder.write(this.initialBufs[n2]);
        return this.initialBufs.length = this.initialBufsLen = 0, r2;
      }
      return this.decoder.write(e2);
    }, l.prototype.end = function() {
      if (!this.decoder) {
        var e2 = u(this.initialBufs, this.options.defaultEncoding);
        this.decoder = this.iconv.getDecoder(e2, this.options);
        for (var t2 = "", r2 = 0; r2 < this.initialBufs.length; r2++) t2 += this.decoder.write(this.initialBufs[r2]);
        var n2 = this.decoder.end();
        return n2 && (t2 += n2), this.initialBufs.length = this.initialBufsLen = 0, t2;
      }
      return this.decoder.end();
    };
  }