// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
// module: 4226 range:30811..31157
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4226: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(3463), a2 = i2(4154), o2 = i2(5169), l2 = i2(2303);
    n2.Uint8Array && s2({ target: "Uint8Array", proto: true }, { setFromHex: function(t3) {
      a2(this), r2(t3), o2(this.buffer);
      var e3 = l2(t3, this).read;
      return { read: e3, written: e3 / 2 };
    } });
  }