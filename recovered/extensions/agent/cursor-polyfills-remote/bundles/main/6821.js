// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6821 range:124637..124915
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6821: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(8732), i2 = e2(1617), a2 = n2.DataView;
    t2.exports = function(t3) {
      if (!o2 || 0 !== i2(t3)) return false;
      try {
        return new a2(t3), false;
      } catch (t4) {
        return true;
      }
    };
  }