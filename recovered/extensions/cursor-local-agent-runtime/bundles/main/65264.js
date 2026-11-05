// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 65264 range:1974836..1975584
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65264: (e, t, r) => {
    "use strict";
    var n = r(77454), o = Object.prototype.hasOwnProperty, s = Object.prototype.toString;
    e.exports = new n("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(e2) {
      if (null === e2) return true;
      var t2, r2, n2, i, a, l = [], c = e2;
      for (t2 = 0, r2 = c.length; t2 < r2; t2 += 1) {
        if (n2 = c[t2], a = false, "[object Object]" !== s.call(n2)) return false;
        for (i in n2) if (o.call(n2, i)) {
          if (a) return false;
          a = true;
        }
        if (!a) return false;
        if (-1 !== l.indexOf(i)) return false;
        l.push(i);
      }
      return true;
    }, construct: function(e2) {
      return null !== e2 ? e2 : [];
    } });
  }