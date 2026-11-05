// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9042 range:159782..160092
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9042: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(4188), i2 = e2(3770), a2 = e2(3174), u2 = e2(4366), s2 = TypeError;
    t2.exports = function(t3, r3) {
      var e3 = arguments.length < 2 ? u2(t3) : r3;
      if (o2(e3)) return i2(n2(e3, t3));
      throw new s2(a2(t3) + " is not iterable");
    };
  }