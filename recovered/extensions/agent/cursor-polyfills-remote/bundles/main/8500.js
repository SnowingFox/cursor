// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8500 range:147838..148287
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8500: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(3770), i2 = e2(2913);
    t2.exports = function(t3, r3, e3) {
      var a2, u2;
      o2(t3);
      try {
        if (!(a2 = i2(t3, "return"))) {
          if ("throw" === r3) throw e3;
          return e3;
        }
        a2 = n2(a2, t3);
      } catch (t4) {
        u2 = true, a2 = t4;
      }
      if ("throw" === r3) throw e3;
      if (u2) throw a2;
      return o2(a2), e3;
    };
  }