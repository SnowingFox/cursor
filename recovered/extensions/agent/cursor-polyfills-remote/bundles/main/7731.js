// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 7731 range:136689..137255
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7731: (t2, r2, e2) => {
    var n2 = e2(9944), o2 = e2(3770), i2 = e2(5604), a2 = e2(2913);
    t2.exports = function(t3, r3, e3, u2) {
      try {
        var s2 = a2(t3, "return");
        if (s2) return i2("Promise").resolve(n2(s2, t3)).then(function(t4) {
          try {
            r3 !== u2 && o2(t4);
          } catch (t5) {
            return void u2(t5);
          }
          r3(e3);
        }, function(t4) {
          r3 === u2 ? r3(e3) : u2(t4);
        });
      } catch (t4) {
        return u2(r3 === u2 ? e3 : t4);
      }
      r3(e3);
    };
  }