// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4786 range:103391..104257
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4786: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(8873), i2 = e2(4977), a2 = e2(3770), u2 = e2(6002), s2 = e2(8500), c = e2(850), f = e2(646), h = e2(5234), l = TypeError, p = h(function() {
      [].keys().reduce(function() {
      }, void 0);
    }), v = !p && c("reduce", l);
    n2({ target: "Iterator", proto: true, real: true, forced: p || v }, { reduce: function(t3) {
      a2(this);
      try {
        i2(t3);
      } catch (t4) {
        s2(this, "throw", t4);
      }
      var r3 = arguments.length < 2, e3 = r3 ? void 0 : arguments[1];
      if (v) return f(v, this, r3 ? [t3] : [t3, e3]);
      var n3 = u2(this), c2 = 0;
      if (o2(n3, function(n4) {
        r3 ? (r3 = false, e3 = n4) : e3 = t3(e3, n4, c2), c2++;
      }, { IS_RECORD: true }), r3) throw new l("Reduce of empty iterator with no initial value");
      return e3;
    } });
  }