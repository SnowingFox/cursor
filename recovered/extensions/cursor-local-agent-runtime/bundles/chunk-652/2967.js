// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 2967 range:21042..21528
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2967: (t2, e2, i2) => {
    var s2 = i2(6706), n2 = i2(34), r2 = i2(7750), a2 = i2(3506);
    t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var t3, e3 = false, i3 = {};
      try {
        (t3 = s2(Object.prototype, "__proto__", "set"))(i3, []), e3 = i3 instanceof Array;
      } catch (t4) {
      }
      return function(i4, s3) {
        return r2(i4), a2(s3), n2(i4) ? (e3 ? t3(i4, s3) : i4.__proto__ = s3, i4) : i4;
      };
    })() : void 0);
  }