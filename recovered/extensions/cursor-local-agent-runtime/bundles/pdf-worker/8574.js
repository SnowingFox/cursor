// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 8574 range:73201..73528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8574: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = Error, r2 = s2("".replace), a2 = String(new n2("zxcasd").stack), o2 = /\n\s*at [^:]*:[^\n]*/, l2 = o2.test(a2);
    t2.exports = function(t3, e3) {
      if (l2 && "string" == typeof t3 && !n2.prepareStackTrace) for (; e3--; ) t3 = r2(t3, o2, "");
      return t3;
    };
  }