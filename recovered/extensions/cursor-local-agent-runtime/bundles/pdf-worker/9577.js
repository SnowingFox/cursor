// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 9577 range:84860..85550
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9577: (t2, e2, i2) => {
    var s2 = i2(9928), n2 = i2(4644), r2 = i2(1108), a2 = i2(1291), o2 = i2(5854), l2 = n2.aTypedArray, h2 = n2.getTypedArrayConstructor, c2 = n2.exportTypedArrayMethod, d2 = (function() {
      try {
        new Int8Array(1).with(2, { valueOf: function() {
          throw 8;
        } });
      } catch (t3) {
        return 8 === t3;
      }
    })(), u2 = d2 && (function() {
      try {
        new Int8Array(1).with(-0.5, 1);
      } catch (t3) {
        return true;
      }
    })();
    c2("with", { with: function(t3, e3) {
      var i3 = l2(this), n3 = a2(t3), c3 = r2(i3) ? o2(e3) : +e3;
      return s2(i3, h2(i3), n3, c3);
    } }.with, !d2 || u2);
  }