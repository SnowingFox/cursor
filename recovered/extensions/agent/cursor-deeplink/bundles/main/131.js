// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 131 range:6151..8799
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
131: (e2, t2, A2) => {
    "use strict";
    var n2 = A2(5636).Buffer, r2 = A2(8366), o2 = 128;
    function s(e3) {
      if (n2.isBuffer(e3)) return e3;
      if ("string" == typeof e3) return n2.from(e3, "base64");
      throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
    }
    function i(e3, t3, A3) {
      for (var n3 = 0; t3 + n3 < A3 && 0 === e3[t3 + n3]; ) ++n3;
      return e3[t3 + n3] >= o2 && --n3, n3;
    }
    e2.exports = { derToJose: function(e3, t3) {
      e3 = s(e3);
      var A3 = r2(t3), o3 = A3 + 1, i2 = e3.length, a = 0;
      if (48 !== e3[a++]) throw new Error('Could not find expected "seq"');
      var c = e3[a++];
      if (129 === c && (c = e3[a++]), i2 - a < c) throw new Error('"seq" specified length of "' + c + '", only "' + (i2 - a) + '" remaining');
      if (2 !== e3[a++]) throw new Error('Could not find expected "int" for "r"');
      var l = e3[a++];
      if (i2 - a - 2 < l) throw new Error('"r" specified length of "' + l + '", only "' + (i2 - a - 2) + '" available');
      if (o3 < l) throw new Error('"r" specified length of "' + l + '", max of "' + o3 + '" is acceptable');
      var u = a;
      if (a += l, 2 !== e3[a++]) throw new Error('Could not find expected "int" for "s"');
      var g = e3[a++];
      if (i2 - a !== g) throw new Error('"s" specified length of "' + g + '", expected "' + (i2 - a) + '"');
      if (o3 < g) throw new Error('"s" specified length of "' + g + '", max of "' + o3 + '" is acceptable');
      var E = a;
      if ((a += g) !== i2) throw new Error('Expected to consume entire buffer, but "' + (i2 - a) + '" bytes remain');
      var h = A3 - l, d = A3 - g, I = n2.allocUnsafe(h + l + d + g);
      for (a = 0; a < h; ++a) I[a] = 0;
      e3.copy(I, a, u + Math.max(-h, 0), u + l);
      for (var B = a = A3; a < B + d; ++a) I[a] = 0;
      return e3.copy(I, a, E + Math.max(-d, 0), E + g), I = (I = I.toString("base64")).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }, joseToDer: function(e3, t3) {
      e3 = s(e3);
      var A3 = r2(t3), a = e3.length;
      if (a !== 2 * A3) throw new TypeError('"' + t3 + '" signatures must be "' + 2 * A3 + '" bytes, saw "' + a + '"');
      var c = i(e3, 0, A3), l = i(e3, A3, e3.length), u = A3 - c, g = A3 - l, E = 2 + u + 1 + 1 + g, h = E < o2, d = n2.allocUnsafe((h ? 2 : 3) + E), I = 0;
      return d[I++] = 48, h ? d[I++] = E : (d[I++] = 129, d[I++] = 255 & E), d[I++] = 2, d[I++] = u, c < 0 ? (d[I++] = 0, I += e3.copy(d, I, 0, A3)) : I += e3.copy(d, I, c, A3), d[I++] = 2, d[I++] = g, l < 0 ? (d[I++] = 0, e3.copy(d, I, A3)) : e3.copy(d, I, A3 + l), d;
    } };
  }