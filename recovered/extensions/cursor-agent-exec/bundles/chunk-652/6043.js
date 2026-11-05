// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 6043 range:49434..49824
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6043: (t2, e2, i2) => {
    var s2 = i2(9306), n2 = TypeError, r2 = function(t3) {
      var e3, i3;
      this.promise = new t3(function(t4, s3) {
        if (void 0 !== e3 || void 0 !== i3) throw new n2("Bad Promise constructor");
        e3 = t4, i3 = s3;
      }), this.resolve = s2(e3), this.reject = s2(i3);
    };
    t2.exports.f = function(t3) {
      return new r2(t3);
    };
  }