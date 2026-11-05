// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 4549 range:33924..34359
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4549: (t2, e2, i2) => {
    var s2 = i2(4576);
    t2.exports = function(t3, e3) {
      var i3 = s2.Iterator, n2 = i3 && i3.prototype, r2 = n2 && n2[t3], a2 = false;
      if (r2) try {
        r2.call({ next: function() {
          return { done: true };
        }, return: function() {
          a2 = true;
        } }, -1);
      } catch (t4) {
        t4 instanceof e3 || (a2 = false);
      }
      if (!a2) return r2;
    };
  }