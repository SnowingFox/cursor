// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 53228 range:1709317..1709827
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53228: (e, t, r) => {
    var n = r(15791), o = r(66722).setLogger;
    function s(e2, t2) {
      var r2 = new n(t2);
      return r2.reset(), "function" == typeof Buffer && e2 instanceof Buffer ? r2.feed(e2.toString("binary")) : r2.feed(e2), r2.close(), r2;
    }
    t.detect = function(e2, t2) {
      return s(e2, t2).result;
    }, t.detectAll = function(e2, t2) {
      return s(e2, t2).results;
    }, t.UniversalDetector = n, t.enableDebug = function() {
      o(console.log.bind(console));
    };
  }