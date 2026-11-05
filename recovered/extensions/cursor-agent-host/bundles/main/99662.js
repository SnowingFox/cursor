// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 99662 range:15137446..15141061
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
99662: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function s(e2, t2) {
      this.enc = e2.encodingName, this.bomAware = e2.bomAware, "base64" === this.enc ? this.encoder = c : "utf8" === this.enc ? this.encoder = d : "cesu8" === this.enc && (this.enc = "utf8", this.encoder = l, "💩" !== n.from("eda0bdedb2a9", "hex").toString() && (this.decoder = u, this.defaultCharUnicode = t2.defaultCharUnicode));
    }
    e.exports = { utf8: { type: "_internal", bomAware: true }, cesu8: { type: "_internal", bomAware: true }, unicode11utf8: "utf8", ucs2: { type: "_internal", bomAware: true }, utf16le: "ucs2", binary: { type: "_internal" }, base64: { type: "_internal" }, hex: { type: "_internal" }, _internal: s }, s.prototype.encoder = a, s.prototype.decoder = i;
    var o = r(13193).StringDecoder;
    function i(e2, t2) {
      this.decoder = new o(t2.enc);
    }
    function a(e2, t2) {
      this.enc = t2.enc;
    }
    function c(e2, t2) {
      this.prevStr = "";
    }
    function l(e2, t2) {
    }
    function u(e2, t2) {
      this.acc = 0, this.contBytes = 0, this.accBytes = 0, this.defaultCharUnicode = t2.defaultCharUnicode;
    }
    function d(e2, t2) {
      this.highSurrogate = "";
    }
    i.prototype.write = function(e2) {
      return n.isBuffer(e2) || (e2 = n.from(e2)), this.decoder.write(e2);
    }, i.prototype.end = function() {
      return this.decoder.end();
    }, a.prototype.write = function(e2) {
      return n.from(e2, this.enc);
    }, a.prototype.end = function() {
    }, c.prototype.write = function(e2) {
      var t2 = (e2 = this.prevStr + e2).length - e2.length % 4;
      return this.prevStr = e2.slice(t2), e2 = e2.slice(0, t2), n.from(e2, "base64");
    }, c.prototype.end = function() {
      return n.from(this.prevStr, "base64");
    }, l.prototype.write = function(e2) {
      for (var t2 = n.alloc(3 * e2.length), r2 = 0, s2 = 0; s2 < e2.length; s2++) {
        var o2 = e2.charCodeAt(s2);
        o2 < 128 ? t2[r2++] = o2 : o2 < 2048 ? (t2[r2++] = 192 + (o2 >>> 6), t2[r2++] = 128 + (63 & o2)) : (t2[r2++] = 224 + (o2 >>> 12), t2[r2++] = 128 + (o2 >>> 6 & 63), t2[r2++] = 128 + (63 & o2));
      }
      return t2.slice(0, r2);
    }, l.prototype.end = function() {
    }, u.prototype.write = function(e2) {
      for (var t2 = this.acc, r2 = this.contBytes, n2 = this.accBytes, s2 = "", o2 = 0; o2 < e2.length; o2++) {
        var i2 = e2[o2];
        128 != (192 & i2) ? (r2 > 0 && (s2 += this.defaultCharUnicode, r2 = 0), i2 < 128 ? s2 += String.fromCharCode(i2) : i2 < 224 ? (t2 = 31 & i2, r2 = 1, n2 = 1) : i2 < 240 ? (t2 = 15 & i2, r2 = 2, n2 = 1) : s2 += this.defaultCharUnicode) : r2 > 0 ? (t2 = t2 << 6 | 63 & i2, n2++, 0 === --r2 && (s2 += 2 === n2 && t2 < 128 && t2 > 0 || 3 === n2 && t2 < 2048 ? this.defaultCharUnicode : String.fromCharCode(t2))) : s2 += this.defaultCharUnicode;
      }
      return this.acc = t2, this.contBytes = r2, this.accBytes = n2, s2;
    }, u.prototype.end = function() {
      var e2 = 0;
      return this.contBytes > 0 && (e2 += this.defaultCharUnicode), e2;
    }, d.prototype.write = function(e2) {
      if (this.highSurrogate && (e2 = this.highSurrogate + e2, this.highSurrogate = ""), e2.length > 0) {
        var t2 = e2.charCodeAt(e2.length - 1);
        t2 >= 55296 && t2 < 56320 && (this.highSurrogate = e2[e2.length - 1], e2 = e2.slice(0, e2.length - 1));
      }
      return n.from(e2, this.enc);
    }, d.prototype.end = function() {
      if (this.highSurrogate) {
        var e2 = this.highSurrogate;
        return this.highSurrogate = "", n.from(e2, this.enc);
      }
    };
  }