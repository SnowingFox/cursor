// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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