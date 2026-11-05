// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 1548 range:11227..11631
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