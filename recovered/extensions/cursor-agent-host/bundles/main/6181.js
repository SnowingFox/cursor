// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 6181 range:451058..451911
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6181: (e, t, r) => {
    var n;
    r(79896);
    function s(e2, t2, r2) {
      if ("function" == typeof t2 && (r2 = t2, t2 = {}), !r2) {
        if ("function" != typeof Promise) throw new TypeError("callback not provided");
        return new Promise(function(r3, n2) {
          s(e2, t2 || {}, function(e3, t3) {
            e3 ? n2(e3) : r3(t3);
          });
        });
      }
      n(e2, t2 || {}, function(e3, n2) {
        e3 && ("EACCES" === e3.code || t2 && t2.ignoreErrors) && (e3 = null, n2 = false), r2(e3, n2);
      });
    }
    n = "win32" === process.platform || global.TESTING_WINDOWS ? r(61992) : r(56198), e.exports = s, s.sync = function(e2, t2) {
      try {
        return n.sync(e2, t2 || {});
      } catch (e3) {
        if (t2 && t2.ignoreErrors || "EACCES" === e3.code) return false;
        throw e3;
      }
    };
  }