// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 16818 range:4184243..4186350
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
16818: (e, t, r) => {
    "use strict";
    const { isUtf8: n } = r(20181), { hasBlob: s } = r(78864);
    function o(e2) {
      const t2 = e2.length;
      let r2 = 0;
      for (; r2 < t2; ) if (128 & e2[r2]) if (192 == (224 & e2[r2])) {
        if (r2 + 1 === t2 || 128 != (192 & e2[r2 + 1]) || 192 == (254 & e2[r2])) return false;
        r2 += 2;
      } else if (224 == (240 & e2[r2])) {
        if (r2 + 2 >= t2 || 128 != (192 & e2[r2 + 1]) || 128 != (192 & e2[r2 + 2]) || 224 === e2[r2] && 128 == (224 & e2[r2 + 1]) || 237 === e2[r2] && 160 == (224 & e2[r2 + 1])) return false;
        r2 += 3;
      } else {
        if (240 != (248 & e2[r2])) return false;
        if (r2 + 3 >= t2 || 128 != (192 & e2[r2 + 1]) || 128 != (192 & e2[r2 + 2]) || 128 != (192 & e2[r2 + 3]) || 240 === e2[r2] && 128 == (240 & e2[r2 + 1]) || 244 === e2[r2] && e2[r2 + 1] > 143 || e2[r2] > 244) return false;
        r2 += 4;
      }
      else r2++;
      return true;
    }
    if (e.exports = { isBlob: function(e2) {
      return s && "object" == typeof e2 && "function" == typeof e2.arrayBuffer && "string" == typeof e2.type && "function" == typeof e2.stream && ("Blob" === e2[Symbol.toStringTag] || "File" === e2[Symbol.toStringTag]);
    }, isValidStatusCode: function(e2) {
      return e2 >= 1e3 && e2 <= 1014 && 1004 !== e2 && 1005 !== e2 && 1006 !== e2 || e2 >= 3e3 && e2 <= 4999;
    }, isValidUTF8: o, tokenChars: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0] }, n) e.exports.isValidUTF8 = function(e2) {
      return e2.length < 24 ? o(e2) : n(e2);
    };
    else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
      const t2 = r(26809);
      e.exports.isValidUTF8 = function(e2) {
        return e2.length < 32 ? o(e2) : t2(e2);
      };
    } catch (e2) {
    }
  }