// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3086 range:66711..67940
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3086: (t2, r2, e2) => {
    var n2, o2, i2, a2 = e2(5945), u2 = e2(9117), s2 = e2(831), c = e2(8088), f = e2(4418), h = e2(2694), l = e2(168), p = e2(7588), v = "Object already initialized", d = u2.TypeError, g = u2.WeakMap;
    if (a2 || h.state) {
      var y = h.state || (h.state = new g());
      y.get = y.get, y.has = y.has, y.set = y.set, n2 = function(t3, r3) {
        if (y.has(t3)) throw new d(v);
        return r3.facade = t3, y.set(t3, r3), r3;
      }, o2 = function(t3) {
        return y.get(t3) || {};
      }, i2 = function(t3) {
        return y.has(t3);
      };
    } else {
      var w = l("state");
      p[w] = true, n2 = function(t3, r3) {
        if (f(t3, w)) throw new d(v);
        return r3.facade = t3, c(t3, w, r3), r3;
      }, o2 = function(t3) {
        return f(t3, w) ? t3[w] : {};
      }, i2 = function(t3) {
        return f(t3, w);
      };
    }
    t2.exports = { set: n2, get: o2, has: i2, enforce: function(t3) {
      return i2(t3) ? o2(t3) : n2(t3, {});
    }, getterFor: function(t3) {
      return function(r3) {
        var e3;
        if (!s2(r3) || (e3 = o2(r3)).type !== t3) throw new d("Incompatible receiver, " + t3 + " required");
        return e3;
      };
    } };
  }