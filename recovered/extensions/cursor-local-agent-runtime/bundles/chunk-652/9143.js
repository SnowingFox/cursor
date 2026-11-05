// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/652.js sha256:5daf2e14541adb7b825c0f72547c4fb6891a4bf16d03b1cdb2fdb3b113ad96a2
// module: 9143 range:75494..78364
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9143: (t2, e2, i2) => {
    var s2 = i2(4576), n2 = i2(9504), r2 = i2(3972), a2 = i2(3463), o2 = i2(9297), l2 = i2(2804), h2 = i2(944), c2 = i2(5169), d2 = l2.c2i, u2 = l2.c2iUrl, p2 = s2.SyntaxError, g2 = s2.TypeError, m2 = n2("".charAt), f2 = function(t3, e3) {
      for (var i3 = t3.length; e3 < i3; e3++) {
        var s3 = m2(t3, e3);
        if (" " !== s3 && "	" !== s3 && "\n" !== s3 && "\f" !== s3 && "\r" !== s3) break;
      }
      return e3;
    }, b2 = function(t3, e3, i3) {
      var s3 = t3.length;
      s3 < 4 && (t3 += 2 === s3 ? "AA" : "A");
      var n3 = (e3[m2(t3, 0)] << 18) + (e3[m2(t3, 1)] << 12) + (e3[m2(t3, 2)] << 6) + e3[m2(t3, 3)], r3 = [n3 >> 16 & 255, n3 >> 8 & 255, 255 & n3];
      if (2 === s3) {
        if (i3 && 0 !== r3[1]) throw new p2("Extra bits");
        return [r3[0]];
      }
      if (3 === s3) {
        if (i3 && 0 !== r3[2]) throw new p2("Extra bits");
        return [r3[0], r3[1]];
      }
      return r3;
    }, v2 = function(t3, e3, i3) {
      for (var s3 = e3.length, n3 = 0; n3 < s3; n3++) t3[i3 + n3] = e3[n3];
      return i3 + s3;
    };
    t2.exports = function(t3, e3, i3, s3) {
      a2(t3), r2(e3);
      var n3 = "base64" === h2(e3) ? d2 : u2, l3 = e3 ? e3.lastChunkHandling : void 0;
      if (void 0 === l3 && (l3 = "loose"), "loose" !== l3 && "strict" !== l3 && "stop-before-partial" !== l3) throw new g2("Incorrect `lastChunkHandling` option");
      i3 && c2(i3.buffer);
      var y2 = t3.length, w2 = i3 || [], x2 = 0, A2 = 0, _2 = "", S2 = 0;
      if (s3) for (; ; ) {
        if ((S2 = f2(t3, S2)) === y2) {
          if (_2.length > 0) {
            if ("stop-before-partial" === l3) break;
            if ("loose" !== l3) throw new p2("Missing padding");
            if (1 === _2.length) throw new p2("Malformed padding: exactly one additional character");
            x2 = v2(w2, b2(_2, n3, false), x2);
          }
          A2 = y2;
          break;
        }
        var E2 = m2(t3, S2);
        if (++S2, "=" === E2) {
          if (_2.length < 2) throw new p2("Padding is too early");
          if (S2 = f2(t3, S2), 2 === _2.length) {
            if (S2 === y2) {
              if ("stop-before-partial" === l3) break;
              throw new p2("Malformed padding: only one =");
            }
            "=" === m2(t3, S2) && (++S2, S2 = f2(t3, S2));
          }
          if (S2 < y2) throw new p2("Unexpected character after padding");
          x2 = v2(w2, b2(_2, n3, "strict" === l3), x2), A2 = y2;
          break;
        }
        if (!o2(n3, E2)) throw new p2("Unexpected character");
        var C2 = s3 - x2;
        if (1 === C2 && 2 === _2.length || 2 === C2 && 3 === _2.length) break;
        if (4 === (_2 += E2).length && (x2 = v2(w2, b2(_2, n3, false), x2), _2 = "", A2 = S2, x2 === s3)) break;
      }
      return { bytes: w2, read: A2, written: x2 };
    };
  }