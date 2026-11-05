// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 9526 range:890525..892426
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9526: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoBase64 = void 0;
    let r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n2 = [];
    for (let e3 = 0; e3 < r2.length; e3++) n2[r2[e3].charCodeAt(0)] = e3;
    n2["-".charCodeAt(0)] = r2.indexOf("+"), n2["_".charCodeAt(0)] = r2.indexOf("/"), t2.protoBase64 = { dec(e3) {
      let t3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? t3 -= 2 : "=" == e3[e3.length - 1] && (t3 -= 1);
      let r3, o2 = new Uint8Array(t3), s2 = 0, i2 = 0, a2 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        if (r3 = n2[e3.charCodeAt(t4)], void 0 === r3) switch (e3[t4]) {
          case "=":
            i2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (i2) {
          case 0:
            a2 = r3, i2 = 1;
            break;
          case 1:
            o2[s2++] = a2 << 2 | (48 & r3) >> 4, a2 = r3, i2 = 2;
            break;
          case 2:
            o2[s2++] = (15 & a2) << 4 | (60 & r3) >> 2, a2 = r3, i2 = 3;
            break;
          case 3:
            o2[s2++] = (3 & a2) << 6 | r3, i2 = 0;
        }
      }
      if (1 == i2) throw Error("invalid base64 string.");
      return o2.subarray(0, s2);
    }, enc(e3) {
      let t3, n3 = "", o2 = 0, s2 = 0;
      for (let i2 = 0; i2 < e3.length; i2++) switch (t3 = e3[i2], o2) {
        case 0:
          n3 += r2[t3 >> 2], s2 = (3 & t3) << 4, o2 = 1;
          break;
        case 1:
          n3 += r2[s2 | t3 >> 4], s2 = (15 & t3) << 2, o2 = 2;
          break;
        case 2:
          n3 += r2[s2 | t3 >> 6], n3 += r2[63 & t3], o2 = 0;
      }
      return o2 && (n3 += r2[s2], n3 += "=", 1 == o2 && (n3 += "=")), n3;
    } };
  }