// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 1548 range:11593..11997
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1548: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9039), r2 = i2(9519), a2 = i2(4215), o2 = s2.structuredClone;
    t2.exports = !!o2 && !n2(function() {
      if ("DENO" === a2 && r2 > 92 || "NODE" === a2 && r2 > 94 || "BROWSER" === a2 && r2 > 97) return false;
      var t3 = new ArrayBuffer(8), e3 = o2(t3, { transfer: [t3] });
      return 0 !== t3.byteLength || 8 !== e3.byteLength;
    });
  }