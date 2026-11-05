// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2287 range:56560..57017
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2287: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(4188), i2 = e2(831), a2 = TypeError;
    t2.exports = function(t3, r3) {
      var e3, u2;
      if ("string" === r3 && o2(e3 = t3.toString) && !i2(u2 = n2(e3, t3))) return u2;
      if (o2(e3 = t3.valueOf) && !i2(u2 = n2(e3, t3))) return u2;
      if ("string" !== r3 && o2(e3 = t3.toString) && !i2(u2 = n2(e3, t3))) return u2;
      throw new a2("Can't convert object to primitive value");
    };
  }