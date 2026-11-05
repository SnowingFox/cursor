// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 9526 range:1055359..1057260
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (e2, a2) => {
    "use strict";
    Object.defineProperty(a2, "__esModule", { value: true }), a2.protoBase64 = void 0;
    let n2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), t2 = [];
    for (let e3 = 0; e3 < n2.length; e3++) t2[n2[e3].charCodeAt(0)] = e3;
    t2["-".charCodeAt(0)] = n2.indexOf("+"), t2["_".charCodeAt(0)] = n2.indexOf("/"), a2.protoBase64 = { dec(e3) {
      let a3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? a3 -= 2 : "=" == e3[e3.length - 1] && (a3 -= 1);
      let n3, s2 = new Uint8Array(a3), o2 = 0, r2 = 0, i2 = 0;
      for (let a4 = 0; a4 < e3.length; a4++) {
        if (n3 = t2[e3.charCodeAt(a4)], void 0 === n3) switch (e3[a4]) {
          case "=":
            r2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (r2) {
          case 0:
            i2 = n3, r2 = 1;
            break;
          case 1:
            s2[o2++] = i2 << 2 | (48 & n3) >> 4, i2 = n3, r2 = 2;
            break;
          case 2:
            s2[o2++] = (15 & i2) << 4 | (60 & n3) >> 2, i2 = n3, r2 = 3;
            break;
          case 3:
            s2[o2++] = (3 & i2) << 6 | n3, r2 = 0;
        }
      }
      if (1 == r2) throw Error("invalid base64 string.");
      return s2.subarray(0, o2);
    }, enc(e3) {
      let a3, t3 = "", s2 = 0, o2 = 0;
      for (let r2 = 0; r2 < e3.length; r2++) switch (a3 = e3[r2], s2) {
        case 0:
          t3 += n2[a3 >> 2], o2 = (3 & a3) << 4, s2 = 1;
          break;
        case 1:
          t3 += n2[o2 | a3 >> 4], o2 = (15 & a3) << 2, s2 = 2;
          break;
        case 2:
          t3 += n2[o2 | a3 >> 6], t3 += n2[63 & a3], s2 = 0;
      }
      return s2 && (t3 += n2[o2], t3 += "=", 1 == s2 && (t3 += "=")), t3;
    } };
  }