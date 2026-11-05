// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 8704 range:154344..155237
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8704: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(3770), i2 = e2(4752), a2 = e2(8873), u2 = e2(8500), s2 = e2(9416), c = e2(1942), f = RangeError, h = TypeError, l = 1 / 0, p = "skippedElements should be a positive safe integer";
    n2({ target: "Iterator", proto: true, real: true, forced: c }, { includes: function(t3) {
      o2(this);
      var r3, e3 = arguments.length > 1 ? arguments[1] : void 0, n3 = 0;
      try {
        if (void 0 === e3) r3 = 0;
        else {
          if (e3 !== l && e3 !== -1 / 0 && !i2(e3)) throw new h(p);
          r3 = e3;
        }
        if (r3 < 0 || r3 !== l && r3 > 9007199254740991) throw new f(p);
      } catch (t4) {
        u2(this, "throw", t4);
      }
      return a2(this, function(e4, o3) {
        if (n3 < r3) n3++;
        else if (s2(e4, t3)) return o3();
      }, { IS_ITERATOR: true, INTERRUPTED: true }).stopped;
    } });
  }