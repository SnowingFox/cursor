// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 88868 range:7642199..7643003
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
88868: (e, t, r) => {
    "use strict";
    var n = r(77454), o = Object.prototype.toString;
    e.exports = new n("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(e2) {
      if (null === e2) return true;
      var t2, r2, n2, s, i, a = e2;
      for (i = new Array(a.length), t2 = 0, r2 = a.length; t2 < r2; t2 += 1) {
        if (n2 = a[t2], "[object Object]" !== o.call(n2)) return false;
        if (1 !== (s = Object.keys(n2)).length) return false;
        i[t2] = [s[0], n2[s[0]]];
      }
      return true;
    }, construct: function(e2) {
      if (null === e2) return [];
      var t2, r2, n2, o2, s, i = e2;
      for (s = new Array(i.length), t2 = 0, r2 = i.length; t2 < r2; t2 += 1) n2 = i[t2], o2 = Object.keys(n2), s[t2] = [o2[0], n2[o2[0]]];
      return s;
    } });
  }