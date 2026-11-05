// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 61992 range:1917061..1917820
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61992: (e, t, r) => {
    e.exports = s, s.sync = function(e2, t2) {
      return o(n.statSync(e2), e2, t2);
    };
    var n = r(79896);
    function o(e2, t2, r2) {
      return !(!e2.isSymbolicLink() && !e2.isFile()) && (function(e3, t3) {
        var r3 = void 0 !== t3.pathExt ? t3.pathExt : process.env.PATHEXT;
        if (!r3) return true;
        if (-1 !== (r3 = r3.split(";")).indexOf("")) return true;
        for (var n2 = 0; n2 < r3.length; n2++) {
          var o2 = r3[n2].toLowerCase();
          if (o2 && e3.substr(-o2.length).toLowerCase() === o2) return true;
        }
        return false;
      })(t2, r2);
    }
    function s(e2, t2, r2) {
      n.stat(e2, function(n2, s2) {
        r2(n2, !n2 && o(s2, e2, t2));
      });
    }
  }