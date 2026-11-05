// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9526 range:6129055..6130949
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (t2, e2) => {
    "use strict";
    Object.defineProperty(e2, "__esModule", { value: true }), e2.protoBase64 = void 0;
    let r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n2 = [];
    for (let t3 = 0; t3 < r2.length; t3++) n2[r2[t3].charCodeAt(0)] = t3;
    n2["-".charCodeAt(0)] = r2.indexOf("+"), n2["_".charCodeAt(0)] = r2.indexOf("/"), e2.protoBase64 = { dec(t3) {
      let e3 = 3 * t3.length / 4;
      "=" == t3[t3.length - 2] ? e3 -= 2 : "=" == t3[t3.length - 1] && (e3 -= 1);
      let r3, s2 = new Uint8Array(e3), i2 = 0, o2 = 0, a = 0;
      for (let e4 = 0; e4 < t3.length; e4++) {
        if (r3 = n2[t3.charCodeAt(e4)], void 0 === r3) switch (t3[e4]) {
          case "=":
            o2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (o2) {
          case 0:
            a = r3, o2 = 1;
            break;
          case 1:
            s2[i2++] = a << 2 | (48 & r3) >> 4, a = r3, o2 = 2;
            break;
          case 2:
            s2[i2++] = (15 & a) << 4 | (60 & r3) >> 2, a = r3, o2 = 3;
            break;
          case 3:
            s2[i2++] = (3 & a) << 6 | r3, o2 = 0;
        }
      }
      if (1 == o2) throw Error("invalid base64 string.");
      return s2.subarray(0, i2);
    }, enc(t3) {
      let e3, n3 = "", s2 = 0, i2 = 0;
      for (let o2 = 0; o2 < t3.length; o2++) switch (e3 = t3[o2], s2) {
        case 0:
          n3 += r2[e3 >> 2], i2 = (3 & e3) << 4, s2 = 1;
          break;
        case 1:
          n3 += r2[i2 | e3 >> 4], i2 = (15 & e3) << 2, s2 = 2;
          break;
        case 2:
          n3 += r2[i2 | e3 >> 6], n3 += r2[63 & e3], s2 = 0;
      }
      return s2 && (n3 += r2[i2], n3 += "=", 1 == s2 && (n3 += "=")), n3;
    } };
  }