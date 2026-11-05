// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 9526 range:704416..706298
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (e2, A2) => {
    "use strict";
    Object.defineProperty(A2, "__esModule", { value: true }), A2.protoBase64 = void 0;
    let t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n2 = [];
    for (let e3 = 0; e3 < t2.length; e3++) n2[t2[e3].charCodeAt(0)] = e3;
    n2["-".charCodeAt(0)] = t2.indexOf("+"), n2["_".charCodeAt(0)] = t2.indexOf("/"), A2.protoBase64 = { dec(e3) {
      let A3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? A3 -= 2 : "=" == e3[e3.length - 1] && (A3 -= 1);
      let t3, r2 = new Uint8Array(A3), o2 = 0, s = 0, a = 0;
      for (let A4 = 0; A4 < e3.length; A4++) {
        if (t3 = n2[e3.charCodeAt(A4)], void 0 === t3) switch (e3[A4]) {
          case "=":
            s = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (s) {
          case 0:
            a = t3, s = 1;
            break;
          case 1:
            r2[o2++] = a << 2 | (48 & t3) >> 4, a = t3, s = 2;
            break;
          case 2:
            r2[o2++] = (15 & a) << 4 | (60 & t3) >> 2, a = t3, s = 3;
            break;
          case 3:
            r2[o2++] = (3 & a) << 6 | t3, s = 0;
        }
      }
      if (1 == s) throw Error("invalid base64 string.");
      return r2.subarray(0, o2);
    }, enc(e3) {
      let A3, n3 = "", r2 = 0, o2 = 0;
      for (let s = 0; s < e3.length; s++) switch (A3 = e3[s], r2) {
        case 0:
          n3 += t2[A3 >> 2], o2 = (3 & A3) << 4, r2 = 1;
          break;
        case 1:
          n3 += t2[o2 | A3 >> 4], o2 = (15 & A3) << 2, r2 = 2;
          break;
        case 2:
          n3 += t2[o2 | A3 >> 6], n3 += t2[63 & A3], r2 = 0;
      }
      return r2 && (n3 += t2[o2], n3 += "=", 1 == r2 && (n3 += "=")), n3;
    } };
  }