// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4188 range:84084..84345
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4188: (t2) => {
    var r2 = "object" == typeof document && document.all;
    t2.exports = void 0 === r2 && void 0 !== r2 ? function(t3) {
      return "function" == typeof t3 || t3 === r2;
    } : function(t3) {
      return "function" == typeof t3;
    };
  }