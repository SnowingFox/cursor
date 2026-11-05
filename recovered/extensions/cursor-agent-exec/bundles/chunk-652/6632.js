// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 6632 range:51876..52720
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6632: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(9143), a2 = i2(4154), o2 = n2.Uint8Array, l2 = !o2 || !o2.prototype.setFromBase64 || !(function() {
      var t3 = new o2([255, 255, 255, 255, 255]);
      try {
        return void t3.setFromBase64("", null);
      } catch (t4) {
      }
      try {
        return void t3.setFromBase64("a");
      } catch (t4) {
      }
      try {
        t3.setFromBase64("MjYyZg===");
      } catch (e3) {
        return 50 === t3[0] && 54 === t3[1] && 50 === t3[2] && 255 === t3[3] && 255 === t3[4];
      }
    })();
    o2 && s2({ target: "Uint8Array", proto: true, forced: l2 }, { setFromBase64: function(t3) {
      a2(this);
      var e3 = r2(t3, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
      return { read: e3.read, written: e3.written };
    } });
  }