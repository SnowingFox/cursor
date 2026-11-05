// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 5854 range:48565..48809
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5854: (t2, e2, i2) => {
    var s2 = i2(2777), n2 = TypeError;
    t2.exports = function(t3) {
      var e3 = s2(t3, "number");
      if ("number" == typeof e3) throw new n2("Can't convert number to bigint");
      return BigInt(e3);
    };
  }