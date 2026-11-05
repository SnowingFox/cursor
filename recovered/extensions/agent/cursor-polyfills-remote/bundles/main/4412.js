// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4412 range:92448..92685
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4412: (t2, r2, e2) => {
    var n2 = e2(3770), o2 = e2(8500);
    t2.exports = function(t3, r3, e3, i2) {
      try {
        return i2 ? r3(n2(e3)[0], e3[1]) : r3(e3);
      } catch (r4) {
        o2(t3, "throw", r4);
      }
    };
  }