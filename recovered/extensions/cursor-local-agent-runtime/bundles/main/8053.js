// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 8053 range:262532..267347
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8053: (e, t, r) => {
    "use strict";
    var n = r(30129).Buffer;
    function o(e2, t2) {
      this.iconv = t2;
    }
    t.utf7 = o, t.unicode11utf7 = "utf7", o.prototype.encoder = i, o.prototype.decoder = a, o.prototype.bomAware = true;
    var s = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;
    function i(e2, t2) {
      this.iconv = t2.iconv;
    }
    function a(e2, t2) {
      this.iconv = t2.iconv, this.inBase64 = false, this.base64Accum = "";
    }
    i.prototype.write = function(e2) {
      return n.from(e2.replace(s, function(e3) {
        return "+" + ("+" === e3 ? "" : this.iconv.encode(e3, "utf16-be").toString("base64").replace(/=+$/, "")) + "-";
      }.bind(this)));
    }, i.prototype.end = function() {
    };
    for (var l = /[A-Za-z0-9\/+]/, c = [], u = 0; u < 256; u++) c[u] = l.test(String.fromCharCode(u));
    var d = "+".charCodeAt(0), p = "-".charCodeAt(0), h = "&".charCodeAt(0);
    function m(e2, t2) {
      this.iconv = t2;
    }
    function f(e2, t2) {
      this.iconv = t2.iconv, this.inBase64 = false, this.base64Accum = n.alloc(6), this.base64AccumIdx = 0;
    }
    function g(e2, t2) {
      this.iconv = t2.iconv, this.inBase64 = false, this.base64Accum = "";
    }
    a.prototype.write = function(e2) {
      for (var t2 = "", r2 = 0, o2 = this.inBase64, s2 = this.base64Accum, i2 = 0; i2 < e2.length; i2++) if (o2) {
        if (!c[e2[i2]]) {
          if (i2 == r2 && e2[i2] == p) t2 += "+";
          else {
            var a2 = s2 + this.iconv.decode(e2.slice(r2, i2), "ascii");
            t2 += this.iconv.decode(n.from(a2, "base64"), "utf16-be");
          }
          e2[i2] != p && i2--, r2 = i2 + 1, o2 = false, s2 = "";
        }
      } else e2[i2] == d && (t2 += this.iconv.decode(e2.slice(r2, i2), "ascii"), r2 = i2 + 1, o2 = true);
      if (o2) {
        var l2 = (a2 = s2 + this.iconv.decode(e2.slice(r2), "ascii")).length - a2.length % 8;
        s2 = a2.slice(l2), a2 = a2.slice(0, l2), t2 += this.iconv.decode(n.from(a2, "base64"), "utf16-be");
      } else t2 += this.iconv.decode(e2.slice(r2), "ascii");
      return this.inBase64 = o2, this.base64Accum = s2, t2;
    }, a.prototype.end = function() {
      var e2 = "";
      return this.inBase64 && this.base64Accum.length > 0 && (e2 = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = false, this.base64Accum = "", e2;
    }, t.utf7imap = m, m.prototype.encoder = f, m.prototype.decoder = g, m.prototype.bomAware = true, f.prototype.write = function(e2) {
      for (var t2 = this.inBase64, r2 = this.base64Accum, o2 = this.base64AccumIdx, s2 = n.alloc(5 * e2.length + 10), i2 = 0, a2 = 0; a2 < e2.length; a2++) {
        var l2 = e2.charCodeAt(a2);
        l2 >= 32 && l2 <= 126 ? (t2 && (o2 > 0 && (i2 += s2.write(r2.slice(0, o2).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), i2), o2 = 0), s2[i2++] = p, t2 = false), t2 || (s2[i2++] = l2, l2 === h && (s2[i2++] = p))) : (t2 || (s2[i2++] = h, t2 = true), t2 && (r2[o2++] = l2 >> 8, r2[o2++] = 255 & l2, o2 == r2.length && (i2 += s2.write(r2.toString("base64").replace(/\//g, ","), i2), o2 = 0)));
      }
      return this.inBase64 = t2, this.base64AccumIdx = o2, s2.slice(0, i2);
    }, f.prototype.end = function() {
      var e2 = n.alloc(10), t2 = 0;
      return this.inBase64 && (this.base64AccumIdx > 0 && (t2 += e2.write(this.base64Accum.slice(0, this.base64AccumIdx).toString("base64").replace(/\//g, ",").replace(/=+$/, ""), t2), this.base64AccumIdx = 0), e2[t2++] = p, this.inBase64 = false), e2.slice(0, t2);
    };
    var y = c.slice();
    y[",".charCodeAt(0)] = true, g.prototype.write = function(e2) {
      for (var t2 = "", r2 = 0, o2 = this.inBase64, s2 = this.base64Accum, i2 = 0; i2 < e2.length; i2++) if (o2) {
        if (!y[e2[i2]]) {
          if (i2 == r2 && e2[i2] == p) t2 += "&";
          else {
            var a2 = s2 + this.iconv.decode(e2.slice(r2, i2), "ascii").replace(/,/g, "/");
            t2 += this.iconv.decode(n.from(a2, "base64"), "utf16-be");
          }
          e2[i2] != p && i2--, r2 = i2 + 1, o2 = false, s2 = "";
        }
      } else e2[i2] == h && (t2 += this.iconv.decode(e2.slice(r2, i2), "ascii"), r2 = i2 + 1, o2 = true);
      if (o2) {
        var l2 = (a2 = s2 + this.iconv.decode(e2.slice(r2), "ascii").replace(/,/g, "/")).length - a2.length % 8;
        s2 = a2.slice(l2), a2 = a2.slice(0, l2), t2 += this.iconv.decode(n.from(a2, "base64"), "utf16-be");
      } else t2 += this.iconv.decode(e2.slice(r2), "ascii");
      return this.inBase64 = o2, this.base64Accum = s2, t2;
    }, g.prototype.end = function() {
      var e2 = "";
      return this.inBase64 && this.base64Accum.length > 0 && (e2 = this.iconv.decode(n.from(this.base64Accum, "base64"), "utf16-be")), this.inBase64 = false, this.base64Accum = "", e2;
    };
  }