// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4361 range:91696..91996
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4361: (t2, r2, e2) => {
    var n2 = e2(2937), o2 = e2(7173), i2 = e2(9800), a2 = e2(5558);
    t2.exports = function(t3) {
      var r3 = n2(this), e3 = a2(t3);
      return !(o2(r3) > e3.size) && false !== i2(r3, function(t4) {
        if (!e3.includes(t4)) return false;
      }, true);
    };
  }