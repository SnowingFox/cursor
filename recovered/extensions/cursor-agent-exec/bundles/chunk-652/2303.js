// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 2303 range:14569..15225
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2303: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = s2.Uint8Array, a2 = s2.SyntaxError, o2 = s2.parseInt, l2 = Math.min, h2 = /[^\da-f]/i, c2 = n2(h2.exec), d2 = n2("".slice);
    t2.exports = function(t3, e3) {
      var i3 = t3.length;
      if (i3 % 2 != 0) throw new a2("String should be an even number of characters");
      for (var s3 = e3 ? l2(e3.length, i3 / 2) : i3 / 2, n3 = e3 || new r2(s3), u2 = 0, p2 = 0; p2 < s3; ) {
        var g2 = d2(t3, u2, u2 += 2);
        if (c2(h2, g2)) throw new a2("String should only contain hex characters");
        n3[p2++] = o2(g2, 16);
      }
      return { bytes: n3, read: u2 };
    };
  }