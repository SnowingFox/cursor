// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 5213 range:46228..46800
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5213: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(5370), a2 = i2(9143), o2 = n2.Uint8Array, l2 = !o2 || !o2.fromBase64 || !(function() {
      try {
        return void o2.fromBase64("a");
      } catch (t3) {
      }
      try {
        o2.fromBase64("", null);
      } catch (t3) {
        return true;
      }
    })();
    o2 && s2({ target: "Uint8Array", stat: true, forced: l2 }, { fromBase64: function(t3) {
      var e3 = a2(t3, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
      return r2(o2, e3.bytes);
    } });
  }