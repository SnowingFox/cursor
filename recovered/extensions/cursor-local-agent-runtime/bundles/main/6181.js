// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 6181 range:50687..51540
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6181: (e, t, r) => {
    var n;
    r(79896);
    function o(e2, t2, r2) {
      if ("function" == typeof t2 && (r2 = t2, t2 = {}), !r2) {
        if ("function" != typeof Promise) throw new TypeError("callback not provided");
        return new Promise(function(r3, n2) {
          o(e2, t2 || {}, function(e3, t3) {
            e3 ? n2(e3) : r3(t3);
          });
        });
      }
      n(e2, t2 || {}, function(e3, n2) {
        e3 && ("EACCES" === e3.code || t2 && t2.ignoreErrors) && (e3 = null, n2 = false), r2(e3, n2);
      });
    }
    n = "win32" === process.platform || global.TESTING_WINDOWS ? r(61992) : r(56198), e.exports = o, o.sync = function(e2, t2) {
      try {
        return n.sync(e2, t2 || {});
      } catch (e3) {
        if (t2 && t2.ignoreErrors || "EACCES" === e3.code) return false;
        throw e3;
      }
    };
  }