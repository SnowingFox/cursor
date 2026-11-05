// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 9928 range:86578..86944
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9928: (t2, e2, i2) => {
    var s2 = i2(6198), n2 = i2(1291), r2 = RangeError;
    t2.exports = function(t3, e3, i3, a2) {
      var o2 = s2(t3), l2 = n2(i3), h2 = l2 < 0 ? o2 + l2 : l2;
      if (h2 >= o2 || h2 < 0) throw new r2("Incorrect index");
      for (var c2 = new e3(o2), d2 = 0; d2 < o2; d2++) c2[d2] = d2 === h2 ? a2 : t3[d2];
      return c2;
    };
  }