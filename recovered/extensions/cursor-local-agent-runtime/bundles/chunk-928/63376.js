// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 63376 range:21144..23725
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
63376: (e, t, r) => {
  "use strict";
  var n = r(77353), a = true, i = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (e2) {
    a = false;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (e2) {
    i = false;
  }
  for (var o = new n.Buf8(256), s = 0; s < 256; s++) o[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;
  function f(e2, t2) {
    if (t2 < 65534 && (e2.subarray && i || !e2.subarray && a)) return String.fromCharCode.apply(null, n.shrinkBuf(e2, t2));
    for (var r2 = "", o2 = 0; o2 < t2; o2++) r2 += String.fromCharCode(e2[o2]);
    return r2;
  }
  o[254] = o[254] = 1, t.string2buf = function(e2) {
    var t2, r2, a2, i2, o2, s2 = e2.length, f2 = 0;
    for (i2 = 0; i2 < s2; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < s2 && 56320 == (64512 & (a2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (a2 - 56320), i2++), f2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
    for (t2 = new n.Buf8(f2), o2 = 0, i2 = 0; o2 < f2; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < s2 && 56320 == (64512 & (a2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (a2 - 56320), i2++), r2 < 128 ? t2[o2++] = r2 : r2 < 2048 ? (t2[o2++] = 192 | r2 >>> 6, t2[o2++] = 128 | 63 & r2) : r2 < 65536 ? (t2[o2++] = 224 | r2 >>> 12, t2[o2++] = 128 | r2 >>> 6 & 63, t2[o2++] = 128 | 63 & r2) : (t2[o2++] = 240 | r2 >>> 18, t2[o2++] = 128 | r2 >>> 12 & 63, t2[o2++] = 128 | r2 >>> 6 & 63, t2[o2++] = 128 | 63 & r2);
    return t2;
  }, t.buf2binstring = function(e2) {
    return f(e2, e2.length);
  }, t.binstring2buf = function(e2) {
    for (var t2 = new n.Buf8(e2.length), r2 = 0, a2 = t2.length; r2 < a2; r2++) t2[r2] = e2.charCodeAt(r2);
    return t2;
  }, t.buf2string = function(e2, t2) {
    var r2, n2, a2, i2, s2 = t2 || e2.length, l = new Array(2 * s2);
    for (n2 = 0, r2 = 0; r2 < s2; ) if ((a2 = e2[r2++]) < 128) l[n2++] = a2;
    else if ((i2 = o[a2]) > 4) l[n2++] = 65533, r2 += i2 - 1;
    else {
      for (a2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; i2 > 1 && r2 < s2; ) a2 = a2 << 6 | 63 & e2[r2++], i2--;
      i2 > 1 ? l[n2++] = 65533 : a2 < 65536 ? l[n2++] = a2 : (a2 -= 65536, l[n2++] = 55296 | a2 >> 10 & 1023, l[n2++] = 56320 | 1023 & a2);
    }
    return f(l, n2);
  }, t.utf8border = function(e2, t2) {
    var r2;
    for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; r2 >= 0 && 128 == (192 & e2[r2]); ) r2--;
    return r2 < 0 || 0 === r2 ? t2 : r2 + o[e2[r2]] > t2 ? r2 : t2;
  };
}