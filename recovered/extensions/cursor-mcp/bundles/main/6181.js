// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6181 range:459004..459869
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6181: (e2, t2, r2) => {
    var n2;
    r2(9896);
    function o2(e3, t3, r3) {
      if ("function" == typeof t3 && (r3 = t3, t3 = {}), !r3) {
        if ("function" != typeof Promise) throw new TypeError("callback not provided");
        return new Promise(function(r4, n3) {
          o2(e3, t3 || {}, function(e4, t4) {
            e4 ? n3(e4) : r4(t4);
          });
        });
      }
      n2(e3, t3 || {}, function(e4, n3) {
        e4 && ("EACCES" === e4.code || t3 && t3.ignoreErrors) && (e4 = null, n3 = false), r3(e4, n3);
      });
    }
    n2 = "win32" === process.platform || global.TESTING_WINDOWS ? r2(1992) : r2(6198), e2.exports = o2, o2.sync = function(e3, t3) {
      try {
        return n2.sync(e3, t3 || {});
      } catch (e4) {
        if (t3 && t3.ignoreErrors || "EACCES" === e4.code) return false;
        throw e4;
      }
    };
  }