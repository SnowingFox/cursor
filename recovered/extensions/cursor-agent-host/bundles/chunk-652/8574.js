// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 8574 range:72834..73161
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8574: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = Error, r2 = s2("".replace), a2 = String(new n2("zxcasd").stack), o2 = /\n\s*at [^:]*:[^\n]*/, l2 = o2.test(a2);
    t2.exports = function(t3, e3) {
      if (l2 && "string" == typeof t3 && !n2.prepareStackTrace) for (; e3--; ) t3 = r2(t3, o2, "");
      return t3;
    };
  }