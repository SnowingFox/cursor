// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2175 range:53918..54257
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2175: (t2, r2, e2) => {
    var n2 = e2(4752), o2 = e2(8500), i2 = RangeError, a2 = TypeError, u2 = "Chunk size must be an integer in [1, 2^32-1]";
    t2.exports = function(t3, r3) {
      return "number" == typeof t3 && n2(t3) ? 0 === t3 || t3 >>> 0 !== t3 ? o2(r3, "throw", new i2(u2)) : void 0 : o2(r3, "throw", new a2(u2));
    };
  }