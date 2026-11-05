// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 30129 range:1001797..1003293
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30129: (e, t, r) => {
    "use strict";
    var n, o = r(20181), s = o.Buffer, i = {};
    for (n in o) o.hasOwnProperty(n) && "SlowBuffer" !== n && "Buffer" !== n && (i[n] = o[n]);
    var a = i.Buffer = {};
    for (n in s) s.hasOwnProperty(n) && "allocUnsafe" !== n && "allocUnsafeSlow" !== n && (a[n] = s[n]);
    if (i.Buffer.prototype = s.prototype, a.from && a.from !== Uint8Array.from || (a.from = function(e2, t2, r2) {
      if ("number" == typeof e2) throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof e2);
      if (e2 && void 0 === e2.length) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e2);
      return s(e2, t2, r2);
    }), a.alloc || (a.alloc = function(e2, t2, r2) {
      if ("number" != typeof e2) throw new TypeError('The "size" argument must be of type number. Received type ' + typeof e2);
      if (e2 < 0 || e2 >= 2 * (1 << 30)) throw new RangeError('The value "' + e2 + '" is invalid for option "size"');
      var n2 = s(e2);
      return t2 && 0 !== t2.length ? "string" == typeof r2 ? n2.fill(t2, r2) : n2.fill(t2) : n2.fill(0), n2;
    }), !i.kStringMaxLength) try {
      i.kStringMaxLength = process.binding("buffer").kStringMaxLength;
    } catch (e2) {
    }
    i.constants || (i.constants = { MAX_LENGTH: i.kMaxLength }, i.kStringMaxLength && (i.constants.MAX_STRING_LENGTH = i.kStringMaxLength)), e.exports = i;
  }