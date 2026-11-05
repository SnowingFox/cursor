// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 579 range:31639..31787
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
579: (t2) => {
    t2.exports = Math.sign || function(t3) {
      var r2 = +t3;
      return 0 === r2 || r2 != r2 ? r2 : r2 < 0 ? -1 : 1;
    };
  }