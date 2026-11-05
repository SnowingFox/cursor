// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7509 range:135136..135734
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7509: (t2, r2, e2) => {
    var n2 = e2(4188), o2 = e2(4466), i2 = e2(4530), a2 = e2(4798);
    t2.exports = function(t3, r3, e3, u2) {
      u2 || (u2 = {});
      var s2 = u2.enumerable, c = void 0 !== u2.name ? u2.name : r3;
      if (n2(e3) && i2(e3, c, u2), u2.global) s2 ? t3[r3] = e3 : a2(r3, e3);
      else {
        try {
          u2.unsafe ? t3[r3] && (s2 = true) : delete t3[r3];
        } catch (t4) {
        }
        s2 ? t3[r3] = e3 : o2.f(t3, r3, { value: e3, enumerable: false, configurable: !u2.nonConfigurable, writable: !u2.nonWritable });
      }
      return t3;
    };
  }