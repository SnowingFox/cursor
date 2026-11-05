// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 290 range:2178..2697
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
290: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(831), i2 = e2(6032), a2 = e2(2913), u2 = e2(2287), s2 = e2(4282), c = TypeError, f = s2("toPrimitive");
    t2.exports = function(t3, r3) {
      if (!o2(t3) || i2(t3)) return t3;
      var e3, s3 = a2(t3, f);
      if (s3) {
        if (void 0 === r3 && (r3 = "default"), e3 = n2(s3, t3, r3), !o2(e3) || i2(e3)) return e3;
        throw new c("Can't convert object to primitive value");
      }
      return void 0 === r3 && (r3 = "number"), u2(t3, r3);
    };
  }