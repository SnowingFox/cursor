// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1020 range:36634..37928
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1020: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(4977), a2 = e2(3770), u2 = e2(6002), s2 = e2(1829), c = e2(2331), f = e2(8500), h = e2(5234), l = e2(1942), p = e2(9475), v = e2(850), d = !l && h(function() {
      return 1 !== [1].values().flatMap(function() {
        return [1];
      }).find(function() {
        return true;
      });
    }), g = !l && !d && !p("flatMap", function() {
    }), y = !l && !d && !g && v("flatMap", TypeError), w = l || d || g || y, x = c(function() {
      for (var t3, r3, e3 = this.iterator, n3 = this.mapper; ; ) {
        if (r3 = this.inner) try {
          if (!(t3 = a2(o2(r3.next, r3.iterator))).done) return t3.value;
          this.inner = null;
        } catch (t4) {
          f(e3, "throw", t4);
        }
        if (t3 = a2(o2(this.next, e3)), this.done = !!t3.done) return;
        try {
          this.inner = s2(n3(t3.value, this.counter++), false);
        } catch (t4) {
          f(e3, "throw", t4);
        }
      }
    });
    n2({ target: "Iterator", proto: true, real: true, forced: w }, { flatMap: function(t3) {
      a2(this);
      try {
        i2(t3);
      } catch (t4) {
        f(this, "throw", t4);
      }
      return y ? o2(y, this, t3) : new x(u2(this), { mapper: t3, inner: null });
    } });
  }