// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/928.js sha256:1e34f3da2dac0c414cd02b42da502ab9dbc42f1b80782b7c58dc88e4d9ebf8e0
// module: 77353 range:47214..48787
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
77353: (e, t) => {
  "use strict";
  var r = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
  function n(e2, t2) {
    return Object.prototype.hasOwnProperty.call(e2, t2);
  }
  t.assign = function(e2) {
    for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
      var r2 = t2.shift();
      if (r2) {
        if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
        for (var a2 in r2) n(r2, a2) && (e2[a2] = r2[a2]);
      }
    }
    return e2;
  }, t.shrinkBuf = function(e2, t2) {
    return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
  };
  var a = { arraySet: function(e2, t2, r2, n2, a2) {
    if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), a2);
    else for (var i2 = 0; i2 < n2; i2++) e2[a2 + i2] = t2[r2 + i2];
  }, flattenChunks: function(e2) {
    var t2, r2, n2, a2, i2, o;
    for (n2 = 0, t2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
    for (o = new Uint8Array(n2), a2 = 0, t2 = 0, r2 = e2.length; t2 < r2; t2++) i2 = e2[t2], o.set(i2, a2), a2 += i2.length;
    return o;
  } }, i = { arraySet: function(e2, t2, r2, n2, a2) {
    for (var i2 = 0; i2 < n2; i2++) e2[a2 + i2] = t2[r2 + i2];
  }, flattenChunks: function(e2) {
    return [].concat.apply([], e2);
  } };
  t.setTyped = function(e2) {
    e2 ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, a)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, i));
  }, t.setTyped(r);
}