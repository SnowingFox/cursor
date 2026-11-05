// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6818 range:3755663..3757783
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6818: (t2, e2, r2) => {
    "use strict";
    const { isUtf8: n2 } = r2(181), { hasBlob: s2 } = r2(8864);
    function i2(t3) {
      const e3 = t3.length;
      let r3 = 0;
      for (; r3 < e3; ) if (128 & t3[r3]) if (192 == (224 & t3[r3])) {
        if (r3 + 1 === e3 || 128 != (192 & t3[r3 + 1]) || 192 == (254 & t3[r3])) return false;
        r3 += 2;
      } else if (224 == (240 & t3[r3])) {
        if (r3 + 2 >= e3 || 128 != (192 & t3[r3 + 1]) || 128 != (192 & t3[r3 + 2]) || 224 === t3[r3] && 128 == (224 & t3[r3 + 1]) || 237 === t3[r3] && 160 == (224 & t3[r3 + 1])) return false;
        r3 += 3;
      } else {
        if (240 != (248 & t3[r3])) return false;
        if (r3 + 3 >= e3 || 128 != (192 & t3[r3 + 1]) || 128 != (192 & t3[r3 + 2]) || 128 != (192 & t3[r3 + 3]) || 240 === t3[r3] && 128 == (240 & t3[r3 + 1]) || 244 === t3[r3] && t3[r3 + 1] > 143 || t3[r3] > 244) return false;
        r3 += 4;
      }
      else r3++;
      return true;
    }
    if (t2.exports = { isBlob: function(t3) {
      return s2 && "object" == typeof t3 && "function" == typeof t3.arrayBuffer && "string" == typeof t3.type && "function" == typeof t3.stream && ("Blob" === t3[Symbol.toStringTag] || "File" === t3[Symbol.toStringTag]);
    }, isValidStatusCode: function(t3) {
      return t3 >= 1e3 && t3 <= 1014 && 1004 !== t3 && 1005 !== t3 && 1006 !== t3 || t3 >= 3e3 && t3 <= 4999;
    }, isValidUTF8: i2, tokenChars: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0] }, n2) t2.exports.isValidUTF8 = function(t3) {
      return t3.length < 24 ? i2(t3) : n2(t3);
    };
    else if (!process.env.WS_NO_UTF_8_VALIDATE) try {
      const e3 = r2(6809);
      t2.exports.isValidUTF8 = function(t3) {
        return t3.length < 32 ? i2(t3) : e3(t3);
      };
    } catch (t3) {
    }
  }