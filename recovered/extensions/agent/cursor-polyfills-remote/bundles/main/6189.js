// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 6189 range:116825..117480
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6189: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(6881), i2 = e2(4977), a2 = e2(9509), u2 = e2(8873), s2 = e2(2197), c = e2(8093), f = e2(1942), h = e2(5234), l = c.Map, p = c.has, v = c.get, d = c.set, g = o2([].push), y = f || h(function() {
      return 1 !== l.groupBy("ab", function(t3) {
        return t3;
      }).get("a").length;
    });
    n2({ target: "Map", stat: true, forced: f || y }, { groupBy: function(t3, r3) {
      a2(t3), i2(r3);
      var e3 = new l(), n3 = 0;
      return u2(t3, function(t4) {
        s2(n3);
        var o3 = r3(t4, n3++);
        p(e3, o3) ? g(v(e3, o3), t4) : d(e3, o3, [t4]);
      }), e3;
    } });
  }