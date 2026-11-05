// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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