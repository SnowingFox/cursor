// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 3701 range:77185..77617
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3701: (t2, r2, e2) => {
    var n2 = e2(8689), o2 = e2(380), i2 = e2(5629).f, a2 = e2(7825), u2 = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t2.exports.f = function(t3) {
      return u2 && "Window" === n2(t3) ? (function(t4) {
        try {
          return i2(t4);
        } catch (t5) {
          return a2(u2);
        }
      })(t3) : i2(o2(t3));
    };
  }