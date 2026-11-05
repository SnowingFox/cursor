// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 5821 range:113272..113535
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5821: (t2, r2, e2) => {
    var n2 = e2(5691), o2 = e2(4977), i2 = e2(9055), a2 = n2(n2.bind);
    t2.exports = function(t3, r3) {
      return o2(t3), void 0 === r3 ? t3 : i2 ? a2(t3, r3) : function() {
        return t3.apply(r3, arguments);
      };
    };
  }