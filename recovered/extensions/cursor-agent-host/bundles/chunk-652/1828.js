// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 1828 range:13438..13824
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1828: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9297), r2 = i2(5397), a2 = i2(9617).indexOf, o2 = i2(421), l2 = s2([].push);
    t2.exports = function(t3, e3) {
      var i3, s3 = r2(t3), h2 = 0, c2 = [];
      for (i3 in s3) !n2(o2, i3) && n2(s3, i3) && l2(c2, i3);
      for (; e3.length > h2; ) n2(s3, i3 = e3[h2++]) && (~a2(c2, i3) || l2(c2, i3));
      return c2;
    };
  }