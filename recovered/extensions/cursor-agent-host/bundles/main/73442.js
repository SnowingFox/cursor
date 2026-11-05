// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 73442 range:11120823..11122174
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
73442: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.decodeBase64 = n, t.decodeJwt = function(e2) {
      const t2 = n(e2.split(".")[1]);
      return JSON.parse(r.decode(t2));
    };
    const r = new TextDecoder();
    function n(e2) {
      let t2 = 0, r2 = 0, n2 = 0;
      const s = new Uint8Array(Math.floor(e2.length / 4 * 3)), o = (e3) => {
        switch (r2) {
          case 3:
            s[n2++] = t2 | e3, r2 = 0;
            break;
          case 2:
            s[n2++] = t2 | e3 >>> 2, t2 = e3 << 6, r2 = 3;
            break;
          case 1:
            s[n2++] = t2 | e3 >>> 4, t2 = e3 << 4, r2 = 2;
            break;
          default:
            t2 = e3 << 2, r2 = 1;
        }
      };
      for (let t3 = 0; t3 < e2.length; t3++) {
        const r3 = e2.charCodeAt(t3);
        if (r3 >= 65 && r3 <= 90) o(r3 - 65);
        else if (r3 >= 97 && r3 <= 122) o(r3 - 97 + 26);
        else if (r3 >= 48 && r3 <= 57) o(r3 - 48 + 52);
        else if (43 === r3 || 45 === r3) o(62);
        else {
          if (47 !== r3 && 95 !== r3) {
            if (61 === r3) break;
            throw new SyntaxError(`Unexpected base64 character ${e2[t3]}`);
          }
          o(63);
        }
      }
      const i = n2;
      for (; r2 > 0; ) o(0);
      return s.subarray(0, i);
    }
  }