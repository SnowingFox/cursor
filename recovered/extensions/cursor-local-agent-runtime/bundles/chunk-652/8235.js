// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 8235 range:64154..65356
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8235: (t2, e2, i2) => {
    var s2 = i2(9504), n2 = i2(9297), r2 = SyntaxError, a2 = parseInt, o2 = String.fromCharCode, l2 = s2("".charAt), h2 = s2("".slice), c2 = s2(/./.exec), d2 = { '\\"': '"', "\\\\": "\\", "\\/": "/", "\\b": "\b", "\\f": "\f", "\\n": "\n", "\\r": "\r", "\\t": "	" }, u2 = /^[\da-f]{4}$/i, p2 = /^[\u0000-\u001F]$/;
    t2.exports = function(t3, e3) {
      for (var i3 = true, s3 = ""; e3 < t3.length; ) {
        var g2 = l2(t3, e3);
        if ("\\" === g2) {
          var m2 = h2(t3, e3, e3 + 2);
          if (n2(d2, m2)) s3 += d2[m2], e3 += 2;
          else {
            if ("\\u" !== m2) throw new r2('Unknown escape sequence: "' + m2 + '"');
            var f2 = h2(t3, e3 += 2, e3 + 4);
            if (!c2(u2, f2)) throw new r2("Bad Unicode escape at: " + e3);
            s3 += o2(a2(f2, 16)), e3 += 4;
          }
        } else {
          if ('"' === g2) {
            i3 = false, e3++;
            break;
          }
          if (c2(p2, g2)) throw new r2("Bad control character in string literal at: " + e3);
          s3 += g2, e3++;
        }
      }
      if (i3) throw new r2("Unterminated string at: " + e3);
      return { value: s3, end: e3 };
    };
  }