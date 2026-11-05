// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 456 range:4498..5172
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
456: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9504), a2 = i2(4154), o2 = i2(5169), l2 = r2(1.1.toString), h2 = n2.Uint8Array, c2 = !h2 || !h2.prototype.toHex || !(function() {
      try {
        return "ffffffffffffffff" === new h2([255, 255, 255, 255, 255, 255, 255, 255]).toHex();
      } catch (t3) {
        return false;
      }
    })();
    h2 && s2({ target: "Uint8Array", proto: true, forced: c2 }, { toHex: function() {
      a2(this), o2(this.buffer);
      for (var t3 = "", e3 = 0, i3 = this.length; e3 < i3; e3++) {
        var s3 = l2(this[e3], 16);
        t3 += 1 === s3.length ? "0" + s3 : s3;
      }
      return t3;
    } });
  }