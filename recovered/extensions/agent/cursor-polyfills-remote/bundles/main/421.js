// @recovered-by cursor-re
// artifact: app/extensions/cursor-polyfills-remote/dist/main.js sha256:0999cf8a13fa3160958b9d4467b71182f1d8936a0d2a6ca1a790aa269a98a611
// module: 421 range:2829..5645
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
421: (t2, r2, e2) => {
    e2(3536);
    var n2 = e2(5604), o2 = e2(6881), i2 = String.fromCharCode, a2 = n2("String", "fromCodePoint"), u2 = encodeURIComponent, s2 = parseInt, c = o2("".charAt), f = o2([].push), h = o2("".replace), l = o2("".slice), p = o2(/./.exec), v = "�", d = /^[0-9a-f]+$/i, g = /[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDFFF]/g, y = function(t3, r3) {
      var e3 = l(t3, r3, r3 + 2);
      return p(d, e3) ? s2(e3, 16) : NaN;
    }, w = function(t3) {
      for (var r3 = 0, e3 = 128; e3 > 0 && 0 !== (t3 & e3); e3 >>= 1) r3++;
      return r3;
    }, x = function(t3) {
      var r3 = null, e3 = t3.length;
      switch (e3) {
        case 1:
          r3 = t3[0];
          break;
        case 2:
          r3 = (31 & t3[0]) << 6 | 63 & t3[1];
          break;
        case 3:
          r3 = (15 & t3[0]) << 12 | (63 & t3[1]) << 6 | 63 & t3[2];
          break;
        case 4:
          r3 = (7 & t3[0]) << 18 | (63 & t3[1]) << 12 | (63 & t3[2]) << 6 | 63 & t3[3];
      }
      return null === r3 || r3 > 1114111 || r3 >= 55296 && r3 <= 57343 || r3 < (e3 > 3 ? 65536 : e3 > 2 ? 2048 : e3 > 1 ? 128 : 0) ? null : r3;
    }, m = function(t3) {
      return 2 === t3.length ? t3 : v;
    };
    t2.exports = { decode: function(t3) {
      for (var r3 = t3.length, e3 = "", n3 = 0; n3 < r3; ) {
        var o3 = c(t3, n3);
        if ("%" === o3) {
          if ("%" === c(t3, n3 + 1) || n3 + 3 > r3) {
            e3 += "%", n3++;
            continue;
          }
          var u3 = y(t3, n3 + 1);
          if (u3 != u3) {
            e3 += o3, n3++;
            continue;
          }
          n3 += 2;
          var s3 = w(u3);
          if (0 === s3) o3 = i2(u3);
          else {
            if (1 === s3 || s3 > 4) {
              e3 += v, n3++;
              continue;
            }
            for (var h2 = [u3], l2 = 1; l2 < s3 && !(++n3 + 3 > r3 || "%" !== c(t3, n3)); ) {
              var p2 = y(t3, n3 + 1);
              if (p2 != p2 || p2 > 191 || p2 < 128) break;
              if (1 === l2) {
                if (224 === u3 && p2 < 160) break;
                if (237 === u3 && p2 > 159) break;
                if (240 === u3 && p2 < 144) break;
                if (244 === u3 && p2 > 143) break;
              }
              f(h2, p2), n3 += 2, l2++;
            }
            if (h2.length !== s3) {
              e3 += v;
              continue;
            }
            var d2 = x(h2);
            if (null === d2) {
              for (var g2 = 0; g2 < s3; g2++) e3 += v;
              n3++;
              continue;
            }
            o3 = a2(d2);
          }
        }
        e3 += o3, n3++;
      }
      return e3;
    }, encode: function(t3) {
      try {
        return u2(t3);
      } catch (r3) {
        return u2(h(t3, g, m));
      }
    } };
  }