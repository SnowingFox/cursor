// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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