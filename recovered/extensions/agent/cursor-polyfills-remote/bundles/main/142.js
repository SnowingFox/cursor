// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 142 range:1281..1450
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
142: (t2) => {
    var r2 = Math.ceil, e2 = Math.floor;
    t2.exports = Math.trunc || function(t3) {
      var n2 = +t3;
      return (n2 > 0 ? e2 : r2)(n2);
    };
  }