// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1992 range:194987..195758
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1992: (e2, t2, r2) => {
    e2.exports = s2, s2.sync = function(e3, t3) {
      return o2(n2.statSync(e3), e3, t3);
    };
    var n2 = r2(9896);
    function o2(e3, t3, r3) {
      return !(!e3.isSymbolicLink() && !e3.isFile()) && (function(e4, t4) {
        var r4 = void 0 !== t4.pathExt ? t4.pathExt : process.env.PATHEXT;
        if (!r4) return true;
        if (-1 !== (r4 = r4.split(";")).indexOf("")) return true;
        for (var n3 = 0; n3 < r4.length; n3++) {
          var o3 = r4[n3].toLowerCase();
          if (o3 && e4.substr(-o3.length).toLowerCase() === o3) return true;
        }
        return false;
      })(t3, r3);
    }
    function s2(e3, t3, r3) {
      n2.stat(e3, function(n3, s3) {
        r3(n3, !n3 && o2(s3, e3, t3));
      });
    }
  }