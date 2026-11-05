// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6351 range:121789..123747
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6351: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9117), i2 = e2(6881), a2 = e2(8489), u2 = e2(7509), s2 = e2(8118), c = e2(8873), f = e2(286), h = e2(4188), l = e2(4318), p = e2(831), v = e2(5234), d = e2(7283), g = e2(3754), y = e2(4166);
    t2.exports = function(t3, r3, e3) {
      var w = -1 !== t3.indexOf("Map"), x = -1 !== t3.indexOf("Weak"), m = w ? "set" : "add", b = o2[t3], S = b && b.prototype, O = b, E = {}, R = function(t4) {
        var r4 = i2(S[t4]);
        u2(S, t4, "add" === t4 ? function(t5) {
          return r4(this, 0 === t5 ? 0 : t5), this;
        } : "delete" === t4 ? function(t5) {
          return !(x && !p(t5)) && r4(this, 0 === t5 ? 0 : t5);
        } : "get" === t4 ? function(t5) {
          return x && !p(t5) ? void 0 : r4(this, 0 === t5 ? 0 : t5);
        } : "has" === t4 ? function(t5) {
          return !(x && !p(t5)) && r4(this, 0 === t5 ? 0 : t5);
        } : function(t5, e4) {
          return r4(this, 0 === t5 ? 0 : t5, e4), this;
        });
      };
      if (a2(t3, !h(b) || !(x || S.forEach && !v(function() {
        new b().entries().next();
      })))) O = e3.getConstructor(r3, t3, w, m), s2.enable();
      else if (a2(t3, true)) {
        var P = new O(), j = P[m](x ? {} : -0, 1) !== P, k = v(function() {
          P.has(1);
        }), I = d(function(t4) {
          new b(t4);
        }), T = !x && v(function() {
          for (var t4 = new b(), r4 = 5; r4--; ) t4[m](r4, r4);
          return !t4.has(-0);
        });
        I || ((O = r3(function(t4, r4) {
          f(t4, S);
          var e4 = y(new b(), t4, O);
          return l(r4) || c(r4, e4[m], { that: e4, AS_ENTRIES: w }), e4;
        })).prototype = S, S.constructor = O), (k || T) && (R("delete"), R("has"), w && R("get")), (T || j) && R(m), x && S.clear && delete S.clear;
      }
      return E[t3] = O, n2({ global: true, constructor: true, forced: O !== b }, E), g(O, t3), x || e3.setStrong(O, t3, w), O;
    };
  }