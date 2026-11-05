// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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