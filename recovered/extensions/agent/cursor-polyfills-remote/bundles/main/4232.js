// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4232 range:85509..86157
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4232: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(4417), i2 = e2(5604), a2 = e2(6881), u2 = e2(4977), s2 = e2(9509), c = e2(2344), f = e2(8873), h = e2(2197), l = e2(5234), p = Object.groupBy, v = i2("Object", "create"), d = a2([].push);
    n2({ target: "Object", stat: true, forced: !p || l(function() {
      return 1 !== p("ab", function(t3) {
        return t3;
      }).a.length;
    }) }, { groupBy: function(t3, r3) {
      s2(t3), u2(r3);
      var e3 = v(null), n3 = 0;
      return f(t3, function(t4) {
        h(n3);
        var i3 = c(r3(t4, n3++));
        i3 in e3 ? d(e3[i3], t4) : o2(e3, i3, [t4]);
      }), e3;
    } });
  }