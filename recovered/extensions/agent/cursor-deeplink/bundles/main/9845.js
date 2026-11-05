// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9845 range:850760..852283
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9845: (e2, t2, A2) => {
    "use strict";
    var n2, r2 = A2(181), o2 = r2.Buffer, s = {};
    for (n2 in r2) r2.hasOwnProperty(n2) && "SlowBuffer" !== n2 && "Buffer" !== n2 && (s[n2] = r2[n2]);
    var i = s.Buffer = {};
    for (n2 in o2) o2.hasOwnProperty(n2) && "allocUnsafe" !== n2 && "allocUnsafeSlow" !== n2 && (i[n2] = o2[n2]);
    if (s.Buffer.prototype = o2.prototype, i.from && i.from !== Uint8Array.from || (i.from = function(e3, t3, A3) {
      if ("number" == typeof e3) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e3);
      if (e3 && void 0 === e3.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e3);
      return o2(e3, t3, A3);
    }), i.alloc || (i.alloc = function(e3, t3, A3) {
      if ("number" != typeof e3) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e3);
      if (e3 < 0 || e3 >= 2 * (1 << 30)) throw new RangeError('The value "' + e3 + '" is invalid for option "size"');
      var n3 = o2(e3);
      return t3 && 0 !== t3.length ? "string" == typeof A3 ? n3.fill(t3, A3) : n3.fill(t3) : n3.fill(0), n3;
    }), !s.kStringMaxLength) try {
      s.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch (e3) {
    }
    s.constants || (s.constants = { MAX_LENGTH: s.kMaxLength }, s.kStringMaxLength && (s.constants.MAX_STRING_LENGTH = s.kStringMaxLength)), e2.exports = s;
  }