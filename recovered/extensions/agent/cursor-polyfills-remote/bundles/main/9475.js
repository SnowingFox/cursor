// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9475 range:167318..167566
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9475: (t2) => {
    t2.exports = function(t3, r2) {
      var e2 = "function" == typeof Iterator && Iterator.prototype[t3];
      if (e2) try {
        e2.call({ next: null }, r2).next();
      } catch (t4) {
        return true;
      }
    };
  }