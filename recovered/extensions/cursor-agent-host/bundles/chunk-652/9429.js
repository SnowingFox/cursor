// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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