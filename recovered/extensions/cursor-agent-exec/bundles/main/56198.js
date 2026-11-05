// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 56198 range:4613576..4614289
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56198: (e, t, r) => {
    e.exports = s, s.sync = function(e2, t2) {
      return o(n.statSync(e2), t2);
    };
    var n = r(79896);
    function s(e2, t2, r2) {
      n.stat(e2, function(e3, n2) {
        r2(e3, !e3 && o(n2, t2));
      });
    }
    function o(e2, t2) {
      return e2.isFile() && (function(e3, t3) {
        var r2 = e3.mode, n2 = e3.uid, s2 = e3.gid, o2 = void 0 !== t3.uid ? t3.uid : process.getuid && process.getuid(), i = void 0 !== t3.gid ? t3.gid : process.getgid && process.getgid(), a = parseInt("100", 8), c = parseInt("010", 8), l = parseInt("001", 8), u = a | c;
        return r2 & l || r2 & c && s2 === i || r2 & a && n2 === o2 || r2 & u && 0 === o2;
      })(e2, t2);
    }
  }