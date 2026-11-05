// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4987 range:105400..105607
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4987: (t2, r2, e2) => {
    var n2 = e2(831), o2 = e2(3086).get;
    t2.exports = function(t3) {
      if (!n2(t3)) return false;
      var r3 = o2(t3);
      return !!r3 && "RawJSON" === r3.type;
    };
  }