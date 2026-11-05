// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 4549 range:34290..34725
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