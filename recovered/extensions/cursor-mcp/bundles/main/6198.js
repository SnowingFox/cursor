// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6198 range:459871..460601
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6198: (e2, t2, r2) => {
    e2.exports = o2, o2.sync = function(e3, t3) {
      return s2(n2.statSync(e3), t3);
    };
    var n2 = r2(9896);
    function o2(e3, t3, r3) {
      n2.stat(e3, function(e4, n3) {
        r3(e4, !e4 && s2(n3, t3));
      });
    }
    function s2(e3, t3) {
      return e3.isFile() && (function(e4, t4) {
        var r3 = e4.mode, n3 = e4.uid, o3 = e4.gid, s3 = void 0 !== t4.uid ? t4.uid : process.getuid && process.getuid(), i2 = void 0 !== t4.gid ? t4.gid : process.getgid && process.getgid(), a2 = parseInt("100", 8), c = parseInt("010", 8), u = parseInt("001", 8), l = a2 | c;
        return r3 & u || r3 & c && o3 === i2 || r3 & a2 && n3 === s3 || r3 & l && 0 === s3;
      })(e3, t3);
    }
  }