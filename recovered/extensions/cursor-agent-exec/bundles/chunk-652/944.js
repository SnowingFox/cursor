// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 944 range:8101..8356
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