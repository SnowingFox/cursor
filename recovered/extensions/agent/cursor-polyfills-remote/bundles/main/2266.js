// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2266 range:55724..56558
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2266: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(4977), a2 = e2(3770), u2 = e2(6002), s2 = e2(2331), c = e2(4412), f = e2(1942), h = e2(8500), l = e2(9475), p = e2(850), v = !f && !l("filter", function() {
    }), d = !f && !v && p("filter", TypeError), g = f || v || d, y = s2(function() {
      for (var t3, r3, e3 = this.iterator, n3 = this.predicate, i3 = this.next; ; ) {
        if (t3 = a2(o2(i3, e3)), this.done = !!t3.done) return;
        if (r3 = t3.value, c(e3, n3, [r3, this.counter++], true)) return r3;
      }
    });
    n2({ target: "Iterator", proto: true, real: true, forced: g }, { filter: function(t3) {
      a2(this);
      try {
        i2(t3);
      } catch (t4) {
        h(this, "throw", t4);
      }
      return d ? o2(d, this, t3) : new y(u2(this), { predicate: t3 });
    } });
  }