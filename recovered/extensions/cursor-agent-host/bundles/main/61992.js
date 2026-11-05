// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 61992 range:9385370..9386129
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61992: (e, t, r) => {
    e.exports = o, o.sync = function(e2, t2) {
      return s(n.statSync(e2), e2, t2);
    };
    var n = r(79896);
    function s(e2, t2, r2) {
      return !(!e2.isSymbolicLink() && !e2.isFile()) && (function(e3, t3) {
        var r3 = void 0 !== t3.pathExt ? t3.pathExt : process.env.PATHEXT;
        if (!r3) return true;
        if (-1 !== (r3 = r3.split(";")).indexOf("")) return true;
        for (var n2 = 0; n2 < r3.length; n2++) {
          var s2 = r3[n2].toLowerCase();
          if (s2 && e3.substr(-s2.length).toLowerCase() === s2) return true;
        }
        return false;
      })(t2, r2);
    }
    function o(e2, t2, r2) {
      n.stat(e2, function(n2, o2) {
        r2(n2, !n2 && s(o2, e2, t2));
      });
    }
  }