// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 684 range:7153..7400
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
684: (t2) => {
    t2.exports = function(t3, e2) {
      var i2 = "function" == typeof Iterator && Iterator.prototype[t3];
      if (i2) try {
        i2.call({ next: null }, e2).next();
      } catch (t4) {
        return true;
      }
    };
  }