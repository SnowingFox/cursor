// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6032 range:114664..114953
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6032: (t2, r2, e2) => {
    var n2 = e2(5604), o2 = e2(4188), i2 = e2(4578), a2 = e2(9809), u2 = Object;
    t2.exports = a2 ? function(t3) {
      return "symbol" == typeof t3;
    } : function(t3) {
      var r3 = n2("Symbol");
      return o2(r3) && i2(r3.prototype, u2(t3));
    };
  }