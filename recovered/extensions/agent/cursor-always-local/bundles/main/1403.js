// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1403 range:484420..485529
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1403: (t2, e2, r2) => {
    "use strict";
    const { tokenChars: n2 } = r2(6818);
    t2.exports = { parse: function(t3) {
      const e3 = /* @__PURE__ */ new Set();
      let r3 = -1, s2 = -1, i2 = 0;
      for (; i2 < t3.length; i2++) {
        const o3 = t3.charCodeAt(i2);
        if (-1 === s2 && 1 === n2[o3]) -1 === r3 && (r3 = i2);
        else if (0 === i2 || 32 !== o3 && 9 !== o3) {
          if (44 !== o3) throw new SyntaxError(`Unexpected character at index ${i2}`);
          {
            if (-1 === r3) throw new SyntaxError(`Unexpected character at index ${i2}`);
            -1 === s2 && (s2 = i2);
            const n3 = t3.slice(r3, s2);
            if (e3.has(n3)) throw new SyntaxError(`The "${n3}" subprotocol is duplicated`);
            e3.add(n3), r3 = s2 = -1;
          }
        } else -1 === s2 && -1 !== r3 && (s2 = i2);
      }
      if (-1 === r3 || -1 !== s2) throw new SyntaxError("Unexpected end of input");
      const o2 = t3.slice(r3, i2);
      if (e3.has(o2)) throw new SyntaxError(`The "${o2}" subprotocol is duplicated`);
      return e3.add(o2), e3;
    } };
  }