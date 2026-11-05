// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 9526 range:705457..707358
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoBase64 = void 0;
    let a2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), t2 = [];
    for (let e3 = 0; e3 < a2.length; e3++) t2[a2[e3].charCodeAt(0)] = e3;
    t2["-".charCodeAt(0)] = a2.indexOf("+"), t2["_".charCodeAt(0)] = a2.indexOf("/"), n2.protoBase64 = { dec(e3) {
      let n3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? n3 -= 2 : "=" == e3[e3.length - 1] && (n3 -= 1);
      let a3, s2 = new Uint8Array(n3), o2 = 0, r2 = 0, i2 = 0;
      for (let n4 = 0; n4 < e3.length; n4++) {
        if (a3 = t2[e3.charCodeAt(n4)], void 0 === a3) switch (e3[n4]) {
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
            i2 = a3, r2 = 1;
            break;
          case 1:
            s2[o2++] = i2 << 2 | (48 & a3) >> 4, i2 = a3, r2 = 2;
            break;
          case 2:
            s2[o2++] = (15 & i2) << 4 | (60 & a3) >> 2, i2 = a3, r2 = 3;
            break;
          case 3:
            s2[o2++] = (3 & i2) << 6 | a3, r2 = 0;
        }
      }
      if (1 == r2) throw Error("invalid base64 string.");
      return s2.subarray(0, o2);
    }, enc(e3) {
      let n3, t3 = "", s2 = 0, o2 = 0;
      for (let r2 = 0; r2 < e3.length; r2++) switch (n3 = e3[r2], s2) {
        case 0:
          t3 += a2[n3 >> 2], o2 = (3 & n3) << 4, s2 = 1;
          break;
        case 1:
          t3 += a2[o2 | n3 >> 4], o2 = (15 & n3) << 2, s2 = 2;
          break;
        case 2:
          t3 += a2[o2 | n3 >> 6], t3 += a2[63 & n3], s2 = 0;
      }
      return s2 && (t3 += a2[o2], t3 += "=", 1 == s2 && (t3 += "=")), t3;
    } };
  }