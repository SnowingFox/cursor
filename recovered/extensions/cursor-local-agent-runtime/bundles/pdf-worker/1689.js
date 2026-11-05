// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/pdf-worker.js sha256:8ebb471c426cfe288b1343142faa62735cf7c56873f20ba36d31a4b28ebbdaa5
// module: 1689 range:12133..12723
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1689: (t2, e2, i2) => {
    var s2 = i2(6518), n2 = i2(4576), r2 = i2(8745), a2 = i2(7680), o2 = i2(6043), l2 = i2(9306), h2 = i2(1103), c2 = n2.Promise, d2 = false;
    s2({ target: "Promise", stat: true, forced: !c2 || !c2.try || h2(function() {
      c2.try(function(t3) {
        d2 = 8 === t3;
      }, 8);
    }).error || !d2 }, { try: function(t3) {
      var e3 = arguments.length > 1 ? a2(arguments, 1) : [], i3 = o2.f(this), s3 = h2(function() {
        return r2(l2(t3), void 0, e3);
      });
      return (s3.error ? i3.reject : i3.resolve)(s3.value), i3.promise;
    } });
  }