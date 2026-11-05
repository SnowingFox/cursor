// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 6187 range:593014..594895
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6187: (e2, t2) => {
    var A2 = Math.pow(2, 8) - 1, n2 = Math.pow(2, 16) - 1, r2 = Math.pow(2, 32) - 1, o2 = Math.pow(2, 7) - 1, s = Math.pow(2, 15) - 1, i = Math.pow(2, 31) - 1;
    t2.getPointerArray = function(e3) {
      var t3 = e3 - 1;
      if (t3 <= A2) return Uint8Array;
      if (t3 <= n2) return Uint16Array;
      if (t3 <= r2) return Uint32Array;
      throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.");
    }, t2.getSignedPointerArray = function(e3) {
      var t3 = e3 - 1;
      return t3 <= o2 ? Int8Array : t3 <= s ? Int16Array : t3 <= i ? Int32Array : Float64Array;
    }, t2.getNumberType = function(e3) {
      return e3 === (0 | e3) ? -1 === Math.sign(e3) ? e3 <= 127 && e3 >= -128 ? Int8Array : e3 <= 32767 && e3 >= -32768 ? Int16Array : Int32Array : e3 <= 255 ? Uint8Array : e3 <= 65535 ? Uint16Array : Uint32Array : Float64Array;
    };
    var a = { Uint8Array: 1, Int8Array: 2, Uint16Array: 3, Int16Array: 4, Uint32Array: 5, Int32Array: 6, Float32Array: 7, Float64Array: 8 };
    t2.getMinimalRepresentation = function(e3, A3) {
      var n3, r3, o3, s2, i2, c = null, l = 0;
      for (s2 = 0, i2 = e3.length; s2 < i2; s2++) o3 = A3 ? A3(e3[s2]) : e3[s2], r3 = t2.getNumberType(o3), (n3 = a[r3.name]) > l && (l = n3, c = r3);
      return c;
    }, t2.isTypedArray = function(e3) {
      return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView(e3);
    }, t2.concat = function() {
      var e3, t3, A3, n3 = 0;
      for (e3 = 0, A3 = arguments.length; e3 < A3; e3++) n3 += arguments[e3].length;
      var r3 = new arguments[0].constructor(n3);
      for (e3 = 0, t3 = 0; e3 < A3; e3++) r3.set(arguments[e3], t3), t3 += arguments[e3].length;
      return r3;
    }, t2.indices = function(e3) {
      for (var A3 = new (t2.getPointerArray(e3))(e3), n3 = 0; n3 < e3; n3++) A3[n3] = n3;
      return A3;
    };
  }