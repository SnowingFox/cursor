// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 5854 range:48931..49175
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5854: (t2, e2, i2) => {
    var s2 = i2(2777), n2 = TypeError;
    t2.exports = function(t3) {
      var e3 = s2(t3, "number");
      if ("number" == typeof e3) throw new n2("Can't convert number to bigint");
      return BigInt(e3);
    };
  }