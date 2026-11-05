// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5528 range:109492..110136
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5528: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9944), i2 = e2(4977), a2 = e2(9444), u2 = e2(6042), s2 = e2(8873);
    n2({ target: "Promise", stat: true, forced: e2(6292) }, { all: function(t3) {
      var r3 = this, e3 = a2.f(r3), n3 = e3.resolve, c = e3.reject, f = u2(function() {
        var e4 = i2(r3.resolve), a3 = [], u3 = 0, f2 = 1;
        s2(t3, function(t4) {
          var i3 = u3++, s3 = false;
          f2++, o2(e4, r3, t4).then(function(t5) {
            s3 || (s3 = true, a3[i3] = t5, --f2 || n3(a3));
          }, c);
        }), --f2 || n3(a3);
      });
      return f.error && c(f.value), e3.promise;
    } });
  }