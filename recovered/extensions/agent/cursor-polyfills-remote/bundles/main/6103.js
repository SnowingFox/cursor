// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6103 range:115188..116584
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6103: (t2) => {
    var r2 = Array, e2 = Math.abs, n2 = Math.pow, o2 = Math.floor, i2 = Math.log, a2 = Math.LN2;
    t2.exports = { pack: function(t3, u2, s2) {
      var c, f, h, l = r2(s2), p = 8 * s2 - u2 - 1, v = (1 << p) - 1, d = v >> 1, g = 23 === u2 ? n2(2, -24) - n2(2, -77) : 0, y = t3 < 0 || 0 === t3 && 1 / t3 < 0 ? 1 : 0, w = 0;
      for ((t3 = e2(t3)) != t3 || t3 === 1 / 0 ? (f = t3 != t3 ? 1 : 0, c = v) : (c = o2(i2(t3) / a2), t3 * (h = n2(2, -c)) < 1 && (c--, h *= 2), (t3 += c + d >= 1 ? g / h : g * n2(2, 1 - d)) * h >= 2 && (c++, h /= 2), c + d >= v ? (f = 0, c = v) : c + d >= 1 ? (f = (t3 * h - 1) * n2(2, u2), c += d) : (f = t3 * n2(2, d - 1) * n2(2, u2), c = 0)); u2 >= 8; ) l[w++] = 255 & f, f /= 256, u2 -= 8;
      for (c = c << u2 | f, p += u2; p > 0; ) l[w++] = 255 & c, c /= 256, p -= 8;
      return l[w - 1] |= 128 * y, l;
    }, unpack: function(t3, r3) {
      var e3, o3 = t3.length, i3 = 8 * o3 - r3 - 1, a3 = (1 << i3) - 1, u2 = a3 >> 1, s2 = i3 - 7, c = o3 - 1, f = t3[c--], h = 127 & f;
      for (f >>= 7; s2 > 0; ) h = 256 * h + t3[c--], s2 -= 8;
      for (e3 = h & (1 << -s2) - 1, h >>= -s2, s2 += r3; s2 > 0; ) e3 = 256 * e3 + t3[c--], s2 -= 8;
      if (0 === h) h = 1 - u2;
      else {
        if (h === a3) return e3 ? NaN : f ? -1 / 0 : 1 / 0;
        e3 += n2(2, r3), h -= u2;
      }
      return (f ? -1 : 1) * e3 * n2(2, h - r3);
    } };
  }