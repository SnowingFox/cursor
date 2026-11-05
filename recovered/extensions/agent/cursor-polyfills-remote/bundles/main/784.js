// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 784 range:33000..33424
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
784: (t2, r2, e2) => {
    var n2 = e2(5613), o2 = e2(5604), i2 = e2(9445), a2 = e2(2618), u2 = e2(6301), s2 = o2("URL");
    n2({ target: "URL", stat: true, forced: !u2 }, { parse: function(t3) {
      var r3 = i2(arguments.length, 1), e3 = a2(t3), n3 = r3 < 2 || void 0 === arguments[1] ? void 0 : a2(arguments[1]);
      try {
        return new s2(e3, n3);
      } catch (t4) {
        return null;
      }
    } });
  }