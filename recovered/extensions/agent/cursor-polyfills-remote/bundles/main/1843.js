// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1843 range:51148..51526
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1843: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(4418), i2 = e2(380), a2 = e2(1458).indexOf, u2 = e2(7588), s2 = n2([].push);
    t2.exports = function(t3, r3) {
      var e3, n3 = i2(t3), c = 0, f = [];
      for (e3 in n3) !o2(u2, e3) && o2(n3, e3) && s2(f, e3);
      for (; r3.length > c; ) o2(n3, e3 = r3[c++]) && (~a2(f, e3) || s2(f, e3));
      return f;
    };
  }