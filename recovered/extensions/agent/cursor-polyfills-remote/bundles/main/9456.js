// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9456 range:166318..167316
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9456: (t2, r2, e2) => {
    var n2 = e2(6893), o2 = e2(6881), i2 = e2(9944), a2 = e2(5234), u2 = e2(7137), s2 = e2(156), c = e2(4416), f = e2(3628), h = e2(7568), l = Object.assign, p = Object.defineProperty, v = o2([].concat);
    t2.exports = !l || a2(function() {
      if (n2 && 1 !== l({ b: 1 }, l(p({}, "a", { enumerable: true, get: function() {
        p(this, "b", { value: 3, enumerable: false });
      } }), { b: 2 })).b) return true;
      var t3 = {}, r3 = {}, e3 = /* @__PURE__ */ Symbol("assign detection"), o3 = "abcdefghijklmnopqrst";
      return t3[e3] = 7, o3.split("").forEach(function(t4) {
        r3[t4] = t4;
      }), 7 !== l({}, t3)[e3] || u2(l({}, r3)).join("") !== o3;
    }) ? function(t3, r3) {
      for (var e3 = f(t3), o3 = arguments.length, a3 = 1, l2 = s2.f, p2 = c.f; o3 > a3; ) for (var d, g = h(arguments[a3++]), y = l2 ? v(u2(g), l2(g)) : u2(g), w = y.length, x = 0; w > x; ) d = y[x++], n2 && !i2(p2, g, d) || (e3[d] = g[d]);
      return e3;
    } : l;
  }