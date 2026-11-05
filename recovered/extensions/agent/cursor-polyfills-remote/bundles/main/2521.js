// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2521 range:61381..62542
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2521: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(3770), a2 = e2(6002), u2 = e2(8616), s2 = e2(939), c = e2(8500), f = e2(2331), h = e2(9475), l = e2(850), p = e2(1942), v = RangeError, d = 1 / 0, g = !p && !h("drop", 0), y = !p && !g && l("drop", RangeError), w = p || g || y || !(function() {
      try {
        Iterator.prototype.drop.call({ next: function() {
          return { done: true };
        } }, 9007199254740992);
      } catch (t3) {
        return t3 instanceof v;
      }
    })(), x = f(function() {
      for (var t3, r3 = this.iterator, e3 = this.next; this.remaining; ) if (this.remaining--, t3 = i2(o2(e3, r3)), this.done = !!t3.done) return;
      if (t3 = i2(o2(e3, r3)), !(this.done = !!t3.done)) return t3.value;
    });
    n2({ target: "Iterator", proto: true, real: true, forced: w }, { drop: function(t3) {
      var r3;
      i2(this);
      try {
        if ((r3 = s2(u2(+t3))) > 9007199254740991 && r3 !== d) throw new v("The argument should be a safe integer");
      } catch (t4) {
        c(this, "throw", t4);
      }
      return y ? o2(y, this, r3) : new x(a2(this), { remaining: r3 });
    } });
  }