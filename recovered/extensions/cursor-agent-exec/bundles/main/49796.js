// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 49796 range:3562288..3564012
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
    var s = r(77454), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    e.exports = new s("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(e2) {
      if (null === e2) return false;
      var t2, r2, n2 = 0, s2 = e2.length, i = o;
      for (r2 = 0; r2 < s2; r2++) if (!((t2 = i.indexOf(e2.charAt(r2))) > 64)) {
        if (t2 < 0) return false;
        n2 += 6;
      }
      return n2 % 8 == 0;
    }, construct: function(e2) {
      var t2, r2, s2 = e2.replace(/[\r\n=]/g, ""), i = s2.length, a = o, c = 0, l = [];
      for (t2 = 0; t2 < i; t2++) t2 % 4 == 0 && t2 && (l.push(c >> 16 & 255), l.push(c >> 8 & 255), l.push(255 & c)), c = c << 6 | a.indexOf(s2.charAt(t2));
      return 0 === (r2 = i % 4 * 6) ? (l.push(c >> 16 & 255), l.push(c >> 8 & 255), l.push(255 & c)) : 18 === r2 ? (l.push(c >> 10 & 255), l.push(c >> 2 & 255)) : 12 === r2 && l.push(c >> 4 & 255), n ? n.from ? n.from(l) : new n(l) : l;
    }, predicate: function(e2) {
      return n && n.isBuffer(e2);
    }, represent: function(e2) {
      var t2, r2, n2 = "", s2 = 0, i = e2.length, a = o;
      for (t2 = 0; t2 < i; t2++) t2 % 3 == 0 && t2 && (n2 += a[s2 >> 18 & 63], n2 += a[s2 >> 12 & 63], n2 += a[s2 >> 6 & 63], n2 += a[63 & s2]), s2 = (s2 << 8) + e2[t2];
      return 0 === (r2 = i % 3) ? (n2 += a[s2 >> 18 & 63], n2 += a[s2 >> 12 & 63], n2 += a[s2 >> 6 & 63], n2 += a[63 & s2]) : 2 === r2 ? (n2 += a[s2 >> 10 & 63], n2 += a[s2 >> 4 & 63], n2 += a[s2 << 2 & 63], n2 += a[64]) : 1 === r2 && (n2 += a[s2 >> 2 & 63], n2 += a[s2 << 4 & 63], n2 += a[64], n2 += a[64]), n2;
    } });
  }