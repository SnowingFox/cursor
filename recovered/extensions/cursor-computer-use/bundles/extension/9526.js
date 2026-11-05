// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 9526 range:735940..737822
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
9526: (e2, n2) => {
    "use strict";
    Object.defineProperty(n2, "__esModule", { value: true }), n2.protoBase64 = void 0;
    let t2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), a2 = [];
    for (let e3 = 0; e3 < t2.length; e3++) a2[t2[e3].charCodeAt(0)] = e3;
    a2["-".charCodeAt(0)] = t2.indexOf("+"), a2["_".charCodeAt(0)] = t2.indexOf("/"), n2.protoBase64 = { dec(e3) {
      let n3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? n3 -= 2 : "=" == e3[e3.length - 1] && (n3 -= 1);
      let t3, s2 = new Uint8Array(n3), o2 = 0, r = 0, i = 0;
      for (let n4 = 0; n4 < e3.length; n4++) {
        if (t3 = a2[e3.charCodeAt(n4)], void 0 === t3) switch (e3[n4]) {
          case "=":
            r = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (r) {
          case 0:
            i = t3, r = 1;
            break;
          case 1:
            s2[o2++] = i << 2 | (48 & t3) >> 4, i = t3, r = 2;
            break;
          case 2:
            s2[o2++] = (15 & i) << 4 | (60 & t3) >> 2, i = t3, r = 3;
            break;
          case 3:
            s2[o2++] = (3 & i) << 6 | t3, r = 0;
        }
      }
      if (1 == r) throw Error("invalid base64 string.");
      return s2.subarray(0, o2);
    }, enc(e3) {
      let n3, a3 = "", s2 = 0, o2 = 0;
      for (let r = 0; r < e3.length; r++) switch (n3 = e3[r], s2) {
        case 0:
          a3 += t2[n3 >> 2], o2 = (3 & n3) << 4, s2 = 1;
          break;
        case 1:
          a3 += t2[o2 | n3 >> 4], o2 = (15 & n3) << 2, s2 = 2;
          break;
        case 2:
          a3 += t2[o2 | n3 >> 6], a3 += t2[63 & n3], s2 = 0;
      }
      return s2 && (a3 += t2[o2], a3 += "=", 1 == s2 && (a3 += "=")), a3;
    } };
  }