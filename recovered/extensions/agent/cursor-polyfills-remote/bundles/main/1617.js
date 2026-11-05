// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1617 range:47301..47609
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1617: (t2, r2, e2) => {
    var n2 = e2(9117), o2 = e2(1025), i2 = e2(8689), a2 = n2.ArrayBuffer, u2 = n2.TypeError;
    t2.exports = a2 && o2(a2.prototype, "byteLength", "get") || function(t3) {
      if ("ArrayBuffer" !== i2(t3)) throw new u2("ArrayBuffer expected");
      return t3.byteLength;
    };
  }