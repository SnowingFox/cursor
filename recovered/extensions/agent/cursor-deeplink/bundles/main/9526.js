// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 9526 range:842281..844163
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (e2, t2) => {
    "use strict";
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoBase64 = void 0;
    let A2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n2 = [];
    for (let e3 = 0; e3 < A2.length; e3++) n2[A2[e3].charCodeAt(0)] = e3;
    n2["-".charCodeAt(0)] = A2.indexOf("+"), n2["_".charCodeAt(0)] = A2.indexOf("/"), t2.protoBase64 = { dec(e3) {
      let t3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? t3 -= 2 : "=" == e3[e3.length - 1] && (t3 -= 1);
      let A3, r2 = new Uint8Array(t3), o2 = 0, s = 0, i = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        if (A3 = n2[e3.charCodeAt(t4)], void 0 === A3) switch (e3[t4]) {
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
            i = A3, s = 1;
            break;
          case 1:
            r2[o2++] = i << 2 | (48 & A3) >> 4, i = A3, s = 2;
            break;
          case 2:
            r2[o2++] = (15 & i) << 4 | (60 & A3) >> 2, i = A3, s = 3;
            break;
          case 3:
            r2[o2++] = (3 & i) << 6 | A3, s = 0;
        }
      }
      if (1 == s) throw Error("invalid base64 string.");
      return r2.subarray(0, o2);
    }, enc(e3) {
      let t3, n3 = "", r2 = 0, o2 = 0;
      for (let s = 0; s < e3.length; s++) switch (t3 = e3[s], r2) {
        case 0:
          n3 += A2[t3 >> 2], o2 = (3 & t3) << 4, r2 = 1;
          break;
        case 1:
          n3 += A2[o2 | t3 >> 4], o2 = (15 & t3) << 2, r2 = 2;
          break;
        case 2:
          n3 += A2[o2 | t3 >> 6], n3 += A2[63 & t3], r2 = 0;
      }
      return r2 && (n3 += A2[o2], n3 += "=", 1 == r2 && (n3 += "=")), n3;
    } };
  }