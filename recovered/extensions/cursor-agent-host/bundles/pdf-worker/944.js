// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 944 range:8467..8722
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
944: (t2) => {
    var e2 = TypeError;
    t2.exports = function(t3) {
      var i2 = t3 && t3.alphabet;
      if (void 0 === i2 || "base64" === i2 || "base64url" === i2) return i2 || "base64";
      throw new e2("Incorrect `alphabet` option");
    };
  }