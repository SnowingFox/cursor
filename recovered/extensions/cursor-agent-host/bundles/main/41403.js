// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41403 range:7661945..7663025
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41403: (e, t, r) => {
    "use strict";
    const { tokenChars: n } = r(16818);
    e.exports = { parse: function(e2) {
      const t2 = /* @__PURE__ */ new Set();
      let r2 = -1, s = -1, o = 0;
      for (; o < e2.length; o++) {
        const i2 = e2.charCodeAt(o);
        if (-1 === s && 1 === n[i2]) -1 === r2 && (r2 = o);
        else if (0 === o || 32 !== i2 && 9 !== i2) {
          if (44 !== i2) throw new SyntaxError(`Unexpected character at index ${o}`);
          {
            if (-1 === r2) throw new SyntaxError(`Unexpected character at index ${o}`);
            -1 === s && (s = o);
            const n2 = e2.slice(r2, s);
            if (t2.has(n2)) throw new SyntaxError(`The "${n2}" subprotocol is duplicated`);
            t2.add(n2), r2 = s = -1;
          }
        } else -1 === s && -1 !== r2 && (s = o);
      }
      if (-1 === r2 || -1 !== s) throw new SyntaxError("Unexpected end of input");
      const i = e2.slice(r2, o);
      if (t2.has(i)) throw new SyntaxError(`The "${i}" subprotocol is duplicated`);
      return t2.add(i), t2;
    } };
  }