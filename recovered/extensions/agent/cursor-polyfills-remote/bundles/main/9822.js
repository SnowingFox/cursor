// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9822 range:171161..171494
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9822: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(3940);
    t2.exports = function(t3) {
      if (o2) {
        try {
          return n2.process.getBuiltinModule(t3);
        } catch (t4) {
        }
        try {
          return Function('return require("' + t3 + '")')();
        } catch (t4) {
        }
      }
    };
  }