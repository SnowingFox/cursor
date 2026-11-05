// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7113 range:129293..129860
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7113: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(2618), i2 = e2(3770), a2 = e2(4318), u2 = e2(8873), s2 = e2(8500), c = e2(6881), f = e2(1942), h = c([].join), l = c([].push);
    n2({ target: "Iterator", proto: true, real: true, forced: f }, { join: function(t3) {
      var r3;
      i2(this);
      try {
        r3 = void 0 === t3 ? "," : o2(t3);
      } catch (t4) {
        s2(this, "throw", t4);
      }
      var e3 = [];
      return u2(this, function(t4) {
        l(e3, a2(t4) ? "" : o2(t4));
      }, { IS_ITERATOR: true }), h(e3, r3);
    } });
  }