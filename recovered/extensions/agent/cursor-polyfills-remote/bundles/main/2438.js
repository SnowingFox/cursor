// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 2438 range:59774..60772
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2438: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9117), i2 = e2(286), a2 = e2(3770), u2 = e2(4188), s2 = e2(1786), c = e2(997), f = e2(4417), h = e2(5234), l = e2(4418), p = e2(4282), v = e2(2037).IteratorPrototype, d = e2(6893), g = e2(1942), y = "constructor", w = "Iterator", x = p("toStringTag"), m = TypeError, b = o2[w], S = g || !u2(b) || b.prototype !== v || !h(function() {
      b({});
    }), O = function() {
      if (i2(this, v), s2(this) === v) throw new m("Abstract class Iterator not directly constructable");
    }, E = function(t3, r3) {
      d ? c(v, t3, { configurable: true, get: function() {
        return r3;
      }, set: function(r4) {
        if (a2(this), this === v) throw new m("You can't redefine this property");
        l(this, t3) ? this[t3] = r4 : f(this, t3, r4);
      } }) : v[t3] = r3;
    };
    l(v, x) || E(x, w), !S && l(v, y) && v[y] !== Object || E(y, O), O.prototype = v, n2({ global: true, constructor: true, forced: S }, { Iterator: O });
  }