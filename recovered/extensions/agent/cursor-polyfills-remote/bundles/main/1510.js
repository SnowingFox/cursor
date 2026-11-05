// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 1510 range:40248..40561
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1510: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(9646), i2 = e2(5234), a2 = Array.fromAsync;
    n2({ target: "Array", stat: true, forced: !a2 || i2(function() {
      var t3 = 0;
      return a2.call(function() {
        return t3++, [];
      }, { length: 0 }), 1 !== t3;
    }) }, { fromAsync: o2 });
  }