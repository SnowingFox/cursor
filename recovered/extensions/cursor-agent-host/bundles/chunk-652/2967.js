// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/652.js sha256:0b20f97c0854ab9f5c13e68965898b9ade0d57e8819bd8341d5e749d4e83812c
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