// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4752 range:102454..102634
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4752: (t2, r2, e2) => {
    var n2 = e2(831), o2 = Math.floor;
    t2.exports = Number.isInteger || function(t3) {
      return !n2(t3) && isFinite(t3) && o2(t3) === t3;
    };
  }