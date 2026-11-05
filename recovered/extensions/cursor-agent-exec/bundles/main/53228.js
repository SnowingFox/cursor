// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 53228 range:4550600..4551110
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