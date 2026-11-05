// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 88868 range:11145516..11146320
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88868: (e, t, r) => {
    "use strict";
    var n = r(77454), s = Object.prototype.toString;
    e.exports = new n("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(e2) {
      if (null === e2) return true;
      var t2, r2, n2, o, i, a = e2;
      for (i = new Array(a.length), t2 = 0, r2 = a.length; t2 < r2; t2 += 1) {
        if (n2 = a[t2], "[object Object]" !== s.call(n2)) return false;
        if (1 !== (o = Object.keys(n2)).length) return false;
        i[t2] = [o[0], n2[o[0]]];
      }
      return true;
    }, construct: function(e2) {
      if (null === e2) return [];
      var t2, r2, n2, s2, o, i = e2;
      for (o = new Array(i.length), t2 = 0, r2 = i.length; t2 < r2; t2 += 1) n2 = i[t2], s2 = Object.keys(n2), o[t2] = [s2[0], n2[s2[0]]];
      return o;
    } });
  }