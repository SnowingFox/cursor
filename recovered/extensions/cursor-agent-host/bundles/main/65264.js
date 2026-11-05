// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 65264 range:10327459..10328207
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65264: (e, t, r) => {
    "use strict";
    var n = r(77454), s = Object.prototype.hasOwnProperty, o = Object.prototype.toString;
    e.exports = new n("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(e2) {
      if (null === e2) return true;
      var t2, r2, n2, i, a, c = [], l = e2;
      for (t2 = 0, r2 = l.length; t2 < r2; t2 += 1) {
        if (n2 = l[t2], a = false, "[object Object]" !== o.call(n2)) return false;
        for (i in n2) if (s.call(n2, i)) {
          if (a) return false;
          a = true;
        }
        if (!a) return false;
        if (-1 !== c.indexOf(i)) return false;
        c.push(i);
      }
      return true;
    }, construct: function(e2) {
      return null !== e2 ? e2 : [];
    } });
  }