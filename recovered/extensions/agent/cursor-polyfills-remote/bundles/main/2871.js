// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2871 range:64422..64778
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2871: (t2, r2, e2) => {
    var n2 = e2(579), o2 = e2(5063), i2 = Math.abs;
    t2.exports = function(t3, r3, e3, a2) {
      var u2 = +t3, s2 = i2(u2), c = n2(u2);
      if (s2 < a2) return c * o2(s2 / a2 / r3) * a2 * r3;
      var f = (1 + r3 / 2220446049250313e-31) * s2, h = f - (f - s2);
      return h > e3 || h != h ? c * (1 / 0) : c * h;
    };
  }