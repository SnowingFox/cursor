// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3536 range:76418..77011
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3536: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(6881), i2 = e2(675), a2 = RangeError, u2 = String.fromCharCode, s2 = String.fromCodePoint, c = o2([].join);
    n2({ target: "String", stat: true, arity: 1, forced: !!s2 && 1 !== s2.length }, { fromCodePoint: function(t3) {
      for (var r3, e3 = [], n3 = arguments.length, o3 = 0; n3 > o3; ) {
        if (i2(r3 = +arguments[o3], 1114111) !== r3) throw new a2(r3 + " is not a valid code point");
        e3[o3++] = r3 < 65536 ? u2(r3) : u2(55296 + ((r3 -= 65536) >> 10), r3 % 1024 + 56320);
      }
      return c(e3, "");
    } });
  }