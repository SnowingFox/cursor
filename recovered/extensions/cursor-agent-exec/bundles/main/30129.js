// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 30129 range:2879284..2880780
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30129: (e, t, r) => {
    "use strict";
    var n, s = r(20181), o = s.Buffer, i = {};
    for (n in s) s.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (i[n] = s[n]);
    var a = i.Buffer = {};
    for (n in o) o.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = o[n]);
    if (i.Buffer.prototype = o.prototype, a.from && a.from !== Uint8Array.from || (a.from = function(e2, t2, r2) {
      if ("number" == typeof e2) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e2);
      if (e2 && void 0 === e2.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
      return o(e2, t2, r2);
    }), a.alloc || (a.alloc = function(e2, t2, r2) {
      if ("number" != typeof e2) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e2);
      if (e2 < 0 || e2 >= 2 * (1 << 30)) throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
      var n2 = o(e2);
      return t2 && 0 !== t2.length ? "string" == typeof r2 ? n2.fill(t2, r2) : n2.fill(t2) : n2.fill(0), n2;
    }), !i.kStringMaxLength) try {
      i.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch (e2) {
    }
    i.constants || (i.constants = { MAX_LENGTH: i.kMaxLength }, i.kStringMaxLength && (i.constants.MAX_STRING_LENGTH = i.kStringMaxLength)), e.exports = i;
  }