// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9688 range:168966..169560
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9688: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(3628), a2 = e2(4578), u2 = e2(2037).IteratorPrototype, s2 = e2(2331), c = e2(1829), f = e2(1942) || (function() {
      try {
        Iterator.from({ return: null }).return();
      } catch (t3) {
        return true;
      }
    })(), h = s2(function() {
      return o2(this.next, this.iterator);
    }, true);
    n2({ target: "Iterator", stat: true, forced: f }, { from: function(t3) {
      var r3 = c("string" == typeof t3 ? i2(t3) : t3, true);
      return a2(u2, r3.iterator) ? r3.iterator : new h(r3);
    } });
  }