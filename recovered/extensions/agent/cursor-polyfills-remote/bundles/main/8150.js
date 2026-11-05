// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8150 range:140514..140870
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8150: (t2, r2, e2) => {
    var n2 = e2(3628), o2 = e2(675), i2 = e2(9389);
    t2.exports = [].fill || function(t3) {
      for (var r3 = n2(this), e3 = i2(r3), a2 = arguments.length, u2 = o2(a2 > 1 ? arguments[1] : void 0, e3), s2 = a2 > 2 ? arguments[2] : void 0, c = void 0 === s2 ? e3 : o2(s2, e3); c > u2; ) r3[u2++] = t3;
      return r3;
    };
  }