// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53228 range:8572980..8573490
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53228: (e, t, r) => {
    var n = r(15791), s = r(66722).setLogger;
    function o(e2, t2) {
      var r2 = new n(t2);
      return r2.reset(), "function" == typeof Buffer && e2 instanceof Buffer ? r2.feed(e2.toString("binary")) : r2.feed(e2), r2.close(), r2;
    }
    t.detect = function(e2, t2) {
      return o(e2, t2).result;
    }, t.detectAll = function(e2, t2) {
      return o(e2, t2).results;
    }, t.UniversalDetector = n, t.enableDebug = function() {
      s(console.log.bind(console));
    };
  }