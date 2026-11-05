// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 20 range:37..777
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
20: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(4977), a2 = e2(3770), u2 = e2(6002), s2 = e2(2331), c = e2(4412), f = e2(8500), h = e2(9475), l = e2(850), p = e2(1942), v = !p && !h("map", function() {
    }), d = !p && !v && l("map", TypeError), g = p || v || d, y = s2(function() {
      var t3 = this.iterator, r3 = a2(o2(this.next, t3));
      if (!(this.done = !!r3.done)) return c(t3, this.mapper, [r3.value, this.counter++], true);
    });
    n2({ target: "Iterator", proto: true, real: true, forced: g }, { map: function(t3) {
      a2(this);
      try {
        i2(t3);
      } catch (t4) {
        f(this, "throw", t4);
      }
      return d ? o2(d, this, t3) : new y(u2(this), { mapper: t3 });
    } });
  }