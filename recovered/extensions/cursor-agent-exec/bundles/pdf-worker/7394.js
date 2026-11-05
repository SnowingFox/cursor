// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 7394 range:56691..56999
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
7394: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(6706), r2 = i2(2195), a2 = s2.ArrayBuffer, o2 = s2.TypeError;
    t2.exports = a2 && n2(a2.prototype, "byteLength", "get") || function(t3) {
      if ("ArrayBuffer" !== r2(t3)) throw new o2("ArrayBuffer expected");
      return t3.byteLength;
    };
  }