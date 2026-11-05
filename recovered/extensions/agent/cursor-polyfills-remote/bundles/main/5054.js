// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5054 range:105682..106169
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5054: (t2, r2, e2) => {
    var n2 = e2(1025), o2 = e2(831), i2 = e2(9509), a2 = e2(4121);
    t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var t3, r3 = false, e3 = {};
      try {
        (t3 = n2(Object.prototype, "__proto__", "set"))(e3, []), r3 = e3 instanceof Array;
      } catch (t4) {
      }
      return function(e4, n3) {
        return i2(e4), a2(n3), o2(e4) ? (r3 ? t3(e4, n3) : e4.__proto__ = n3, e4) : e4;
      };
    })() : void 0);
  }