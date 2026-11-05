// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3442 range:931076..932450
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3442: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.decodeBase64 = n2, e2.decodeJwt = function(t3) {
      const e3 = n2(t3.split(".")[1]);
      return JSON.parse(r2.decode(e3));
    };
    const r2 = new TextDecoder();
    function n2(t3) {
      let e3 = 0, r3 = 0, n3 = 0;
      const s2 = new Uint8Array(Math.floor(t3.length / 4 * 3)), i2 = (t4) => {
        switch (r3) {
          case 3:
            s2[n3++] = e3 | t4, r3 = 0;
            break;
          case 2:
            s2[n3++] = e3 | t4 >>> 2, e3 = t4 << 6, r3 = 3;
            break;
          case 1:
            s2[n3++] = e3 | t4 >>> 4, e3 = t4 << 4, r3 = 2;
            break;
          default:
            e3 = t4 << 2, r3 = 1;
        }
      };
      for (let e4 = 0; e4 < t3.length; e4++) {
        const r4 = t3.charCodeAt(e4);
        if (r4 >= 65 && r4 <= 90) i2(r4 - 65);
        else if (r4 >= 97 && r4 <= 122) i2(r4 - 97 + 26);
        else if (r4 >= 48 && r4 <= 57) i2(r4 - 48 + 52);
        else if (43 === r4 || 45 === r4) i2(62);
        else {
          if (47 !== r4 && 95 !== r4) {
            if (61 === r4) break;
            throw new SyntaxError(`Unexpected base64 character ${t3[e4]}`);
          }
          i2(63);
        }
      }
      const o2 = n3;
      for (; r3 > 0; ) i2(0);
      return s2.subarray(0, o2);
    }
  }