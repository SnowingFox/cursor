// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 49796 range:1475688..1477412
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
49796: (e, t, r) => {
    "use strict";
    var n;
    try {
      n = r(20181).Buffer;
    } catch (e2) {
    }
    var o = r(77454), s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    e.exports = new o("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      var t2, r2, n2 = 0, o2 = e2.length, i = s;
      for (r2 = 0; r2 < o2; r2++) if (!((t2 = i.indexOf(e2.charAt(r2))) > 64)) {
        if (t2 < 0) return false;
        n2 += 6;
      }
      return n2 % 8 == 0;
    }, construct: function(e2) {
      var t2, r2, o2 = e2.replace(/[\r\n=]/g, ""), i = o2.length, a = s, l = 0, c = [];
      for (t2 = 0; t2 < i; t2++) t2 % 4 == 0 && t2 && (c.push(l >> 16 & 255), c.push(l >> 8 & 255), c.push(255 & l)), l = l << 6 | a.indexOf(o2.charAt(t2));
      return 0 === (r2 = i % 4 * 6) ? (c.push(l >> 16 & 255), c.push(l >> 8 & 255), c.push(255 & l)) : 18 === r2 ? (c.push(l >> 10 & 255), c.push(l >> 2 & 255)) : 12 === r2 && c.push(l >> 4 & 255), n ? n.from ? n.from(c) : new n(c) : c;
    }, predicate: function(e2) {
      return n && n.isBuffer(e2);
    }, represent: function(e2) {
      var t2, r2, n2 = "", o2 = 0, i = e2.length, a = s;
      for (t2 = 0; t2 < i; t2++) t2 % 3 == 0 && t2 && (n2 += a[o2 >> 18 & 63], n2 += a[o2 >> 12 & 63], n2 += a[o2 >> 6 & 63], n2 += a[63 & o2]), o2 = (o2 << 8) + e2[t2];
      return 0 === (r2 = i % 3) ? (n2 += a[o2 >> 18 & 63], n2 += a[o2 >> 12 & 63], n2 += a[o2 >> 6 & 63], n2 += a[63 & o2]) : 2 === r2 ? (n2 += a[o2 >> 10 & 63], n2 += a[o2 >> 4 & 63], n2 += a[o2 << 2 & 63], n2 += a[64]) : 1 === r2 && (n2 += a[o2 >> 2 & 63], n2 += a[o2 << 4 & 63], n2 += a[64], n2 += a[64]), n2;
    } });
  }