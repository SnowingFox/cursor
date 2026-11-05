// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 1181 range:9465..10734
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1181: (t2, e2, i2) => {
    var s2, n2, r2, a2 = i2(8622), o2 = i2(4576), l2 = i2(34), h2 = i2(6699), c2 = i2(9297), d2 = i2(7629), u2 = i2(6119), p2 = i2(421), g2 = "Object already initialized", m2 = o2.TypeError, f2 = o2.WeakMap;
    if (a2 || d2.state) {
      var b2 = d2.state || (d2.state = new f2());
      b2.get = b2.get, b2.has = b2.has, b2.set = b2.set, s2 = function(t3, e3) {
        if (b2.has(t3)) throw new m2(g2);
        return e3.facade = t3, b2.set(t3, e3), e3;
      }, n2 = function(t3) {
        return b2.get(t3) || {};
      }, r2 = function(t3) {
        return b2.has(t3);
      };
    } else {
      var v2 = u2("state");
      p2[v2] = true, s2 = function(t3, e3) {
        if (c2(t3, v2)) throw new m2(g2);
        return e3.facade = t3, h2(t3, v2, e3), e3;
      }, n2 = function(t3) {
        return c2(t3, v2) ? t3[v2] : {};
      }, r2 = function(t3) {
        return c2(t3, v2);
      };
    }
    t2.exports = { set: s2, get: n2, has: r2, enforce: function(t3) {
      return r2(t3) ? n2(t3) : s2(t3, {});
    }, getterFor: function(t3) {
      return function(e3) {
        var i3;
        if (!l2(e3) || (i3 = n2(e3)).type !== t3) throw new m2("Incompatible receiver, " + t3 + " required");
        return i3;
      };
    } };
  }