// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2197 range:54259..54439
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2197: (t2) => {
    var r2 = TypeError;
    t2.exports = function(t3) {
      if (t3 > 9007199254740991) throw new r2("Maximum allowed index exceeded");
      return t3;
    };
  }