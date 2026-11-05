// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 4561 range:96576..97752
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4561: (t2, r2, e2) => {
    var n2 = e2(6881), o2 = e2(4418), i2 = SyntaxError, a2 = parseInt, u2 = String.fromCharCode, s2 = n2("".charAt), c = n2("".slice), f = n2(/./.exec), h = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": "\n", "\\r": "\r", "\\t": "	" }, l = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
    t2.exports = function(t3, r3) {
      for (var e3 = true, n3 = ""; r3 < t3.length; ) {
        var v = s2(t3, r3);
        if ("\\" === v) {
          var d = c(t3, r3, r3 + 2);
          if (o2(h, d)) n3 += h[d], r3 += 2;
          else {
            if ("\\u" !== d) throw new i2('Unknown escape sequence: "' + d + '"');
            var g = c(t3, r3 += 2, r3 + 4);
            if (!f(l, g)) throw new i2("Bad Unicode escape at: " + r3);
            n3 += u2(a2(g, 16)), r3 += 4;
          }
        } else {
          if ('"' === v) {
            e3 = false, r3++;
            break;
          }
          if (f(p, v)) throw new i2("Bad control character in string literal at: " + r3);
          n3 += v, r3++;
        }
      }
      if (e3) throw new i2("Unterminated string at: " + r3);
      return { value: n3, end: r3 };
    };
  }