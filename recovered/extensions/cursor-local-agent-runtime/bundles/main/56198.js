// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 56198 range:1772228..1772941
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56198: (e, t, r) => {
    e.exports = o, o.sync = function(e2, t2) {
      return s(n.statSync(e2), t2);
    };
    var n = r(79896);
    function o(e2, t2, r2) {
      n.stat(e2, function(e3, n2) {
        r2(e3, !e3 && s(n2, t2));
      });
    }
    function s(e2, t2) {
      return e2.isFile() && (function(e3, t3) {
        var r2 = e3.mode, n2 = e3.uid, o2 = e3.gid, s2 = void 0 !== t3.uid ? t3.uid : process.getuid && process.getuid(), i = void 0 !== t3.gid ? t3.gid : process.getgid && process.getgid(), a = parseInt("100", 8), l = parseInt("010", 8), c = parseInt("001", 8), u = a | l;
        return r2 & c || r2 & l && o2 === i || r2 & a && n2 === s2 || r2 & u && 0 === s2;
      })(e2, t2);
    }
  }