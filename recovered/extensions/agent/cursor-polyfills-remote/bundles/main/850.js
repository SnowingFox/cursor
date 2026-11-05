// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 850 range:33912..34346
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
850: (t2, r2, e2) => {
    var n2 = e2(9117);
    t2.exports = function(t3, r3) {
      var e3 = n2.Iterator, o2 = e3 && e3.prototype, i2 = o2 && o2[t3], a2 = false;
      if (i2) try {
        i2.call({ next: function() {
          return { done: true };
        }, return: function() {
          a2 = true;
        } }, -1);
      } catch (t4) {
        t4 instanceof r3 || (a2 = false);
      }
      if (!a2) return i2;
    };
  }