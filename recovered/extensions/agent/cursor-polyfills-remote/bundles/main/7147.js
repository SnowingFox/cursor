// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7147 range:130008..131153
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7147: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(3770), a2 = e2(6002), u2 = e2(8616), s2 = e2(939), c = e2(2331), f = e2(8500), h = e2(9475), l = e2(850), p = e2(1942), v = RangeError, d = 1 / 0, g = !p && !h("take", 1), y = !p && !g && l("take", RangeError), w = p || g || y || !(function() {
      try {
        Iterator.prototype.take.call({ next: function() {
          return { done: true };
        } }, 9007199254740992);
      } catch (t3) {
        return t3 instanceof v;
      }
    })(), x = c(function() {
      var t3 = this.iterator;
      if (!this.remaining--) return this.done = true, f(t3, "normal", void 0);
      var r3 = i2(o2(this.next, t3));
      return (this.done = !!r3.done) ? void 0 : r3.value;
    });
    n2({ target: "Iterator", proto: true, real: true, forced: w }, { take: function(t3) {
      var r3;
      i2(this);
      try {
        if ((r3 = s2(u2(+t3))) > 9007199254740991 && r3 !== d) throw new v("The argument should be a safe integer");
      } catch (t4) {
        f(this, "throw", t4);
      }
      return y ? o2(y, this, r3) : new x(a2(this), { remaining: r3 });
    } });
  }