// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 9429 range:79824..80157
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9429: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(6193);
    t2.exports = function(t3) {
      if (n2) {
        try {
          return s2.process.getBuiltinModule(t3);
        } catch (t4) {
        }
        try {
          return Function('return require("' + t3 + '")')();
        } catch (t4) {
        }
      }
    };
  }