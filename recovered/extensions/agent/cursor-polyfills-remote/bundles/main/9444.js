// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 9444 range:165764..166154
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9444: (t2, r2, e2) => {
    var n2 = e2(4977), o2 = TypeError, i2 = function(t3) {
      var r3, e3;
      this.promise = new t3(function(t4, n3) {
        if (void 0 !== r3 || void 0 !== e3) throw new o2("Bad Promise constructor");
        r3 = t4, e3 = n3;
      }), this.resolve = n2(r3), this.reject = n2(e3);
    };
    t2.exports.f = function(t3) {
      return new i2(t3);
    };
  }