// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9059 range:160304..160708
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9059: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(5234), i2 = e2(3008), a2 = e2(1078), u2 = n2.structuredClone;
    t2.exports = !!u2 && !o2(function() {
      if ("DENO" === a2 && i2 > 92 || "NODE" === a2 && i2 > 94 || "BROWSER" === a2 && i2 > 97) return false;
      var t3 = new ArrayBuffer(8), r3 = u2(t3, { transfer: [t3] });
      return 0 !== t3.byteLength || 8 !== r3.byteLength;
    });
  }