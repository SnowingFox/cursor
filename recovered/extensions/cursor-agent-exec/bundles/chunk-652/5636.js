// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 5636 range:47035..47998
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5636: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = i2(6706), a2 = i2(7696), o2 = i2(5169), l2 = i2(7394), h2 = i2(4483), c2 = i2(1548), d2 = s2.structuredClone, u2 = s2.ArrayBuffer, p2 = s2.DataView, g2 = Math.min, m2 = u2.prototype, f2 = p2.prototype, b2 = n2(m2.slice), v2 = r2(m2, "resizable", "get"), y2 = r2(m2, "maxByteLength", "get"), w2 = n2(f2.getInt8), x2 = n2(f2.setInt8);
    t2.exports = (c2 || h2) && function(t3, e3, i3) {
      var s3, n3 = l2(t3), r3 = void 0 === e3 ? n3 : a2(e3), m3 = !v2 || !v2(t3);
      if (o2(t3), c2 && (t3 = d2(t3, { transfer: [t3] }), n3 === r3 && (i3 || m3))) return t3;
      if (n3 >= r3 && (!i3 || m3)) s3 = b2(t3, 0, r3);
      else {
        var f3 = i3 && !m3 && y2 ? { maxByteLength: y2(t3) } : void 0;
        s3 = new u2(r3, f3);
        for (var A2 = new p2(t3), _2 = new p2(s3), S2 = g2(r3, n3), E2 = 0; E2 < S2; E2++) x2(_2, E2, w2(A2, E2));
      }
      return c2 || h2(t3), s3;
    };
  }