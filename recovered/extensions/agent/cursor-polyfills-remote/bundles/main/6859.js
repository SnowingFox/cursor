// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6859 range:124917..125910
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6859: (t2, r2, e2) => {
    var n2 = e2(5821), o2 = e2(9944), i2 = e2(3628), a2 = e2(4412), u2 = e2(8146), s2 = e2(866), c = e2(9389), f = e2(4417), h = e2(4224), l = e2(9042), p = e2(4366), v = e2(8500), d = e2(2197), g = Array;
    t2.exports = function(t3) {
      var r3 = s2(this), e3 = arguments.length, y = e3 > 1 ? arguments[1] : void 0, w = void 0 !== y;
      w && (y = n2(y, e3 > 2 ? arguments[2] : void 0));
      var x, m, b, S, O, E, R = i2(t3), P = p(R), j = 0;
      if (!P || this === g && u2(P)) for (x = c(R), m = r3 ? new this(x) : g(x); x > j; j++) E = w ? y(R[j], j) : R[j], f(m, j, E);
      else for (m = r3 ? new this() : [], O = (S = l(R, P)).next; !(b = o2(O, S)).done; j++) {
        try {
          d(j);
        } catch (t4) {
          v(S, "throw", t4);
        }
        E = w ? a2(S, y, [b.value, j], true) : b.value;
        try {
          f(m, j, E);
        } catch (t4) {
          v(S, "throw", t4);
        }
      }
      return h(m, j), m;
    };
  }