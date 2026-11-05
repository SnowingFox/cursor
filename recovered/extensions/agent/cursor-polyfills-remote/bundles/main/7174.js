// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7174 range:131440..131911
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7174: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(4977), a2 = e2(9444), u2 = e2(6042), s2 = e2(8873);
    n2({ target: "Promise", stat: true, forced: e2(6292) }, { race: function(t3) {
      var r3 = this, e3 = a2.f(r3), n3 = e3.reject, c = u2(function() {
        var a3 = i2(r3.resolve);
        s2(t3, function(t4) {
          o2(a3, r3, t4).then(e3.resolve, n3);
        });
      });
      return c.error && n3(c.value), e3.promise;
    } });
  }