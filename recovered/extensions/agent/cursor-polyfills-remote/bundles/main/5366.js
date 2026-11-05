// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5366 range:107931..108262
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5366: (t2, r2, e2) => {
    var n2 = e2(8500);
    t2.exports = function(t3, r3, e3) {
      for (var o2 = t3.length - 1; o2 >= 0; o2--) if (void 0 !== t3[o2]) try {
        e3 = n2(t3[o2].iterator, r3, e3);
      } catch (t4) {
        r3 = "throw", e3 = t4;
      }
      if ("throw" === r3) throw e3;
      return e3;
    };
  }