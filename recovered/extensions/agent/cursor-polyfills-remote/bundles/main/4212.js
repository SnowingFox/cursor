// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4212 range:84347..84925
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4212: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(6744), i2 = e2(2618), a2 = e2(9509), u2 = n2("".charAt), s2 = n2("".charCodeAt), c = n2("".slice), f = function(t3) {
      return function(r3, e3) {
        var n3, f2, h = i2(a2(r3)), l = o2(e3), p = h.length;
        return l < 0 || l >= p ? t3 ? "" : void 0 : (n3 = s2(h, l)) < 55296 || n3 > 56319 || l + 1 === p || (f2 = s2(h, l + 1)) < 56320 || f2 > 57343 ? t3 ? u2(h, l) : n3 : t3 ? c(h, l, l + 2) : f2 - 56320 + (n3 - 55296 << 10) + 65536;
      };
    };
    t2.exports = { codeAt: f(false), charAt: f(true) };
  }