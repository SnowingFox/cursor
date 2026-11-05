// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 19526 range:582982..584822
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
19526: (e, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: true }), t.protoBase64 = void 0;
    let r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), n = [];
    for (let e2 = 0; e2 < r.length; e2++) n[r[e2].charCodeAt(0)] = e2;
    n["-".charCodeAt(0)] = r.indexOf("+"), n["_".charCodeAt(0)] = r.indexOf("/"), t.protoBase64 = { dec(e2) {
      let t2 = 3 * e2.length / 4;
      "=" == e2[e2.length - 2] ? t2 -= 2 : "=" == e2[e2.length - 1] && (t2 -= 1);
      let r2, o = new Uint8Array(t2), s = 0, i = 0, a = 0;
      for (let t3 = 0; t3 < e2.length; t3++) {
        if (r2 = n[e2.charCodeAt(t3)], void 0 === r2) switch (e2[t3]) {
          case "=":
            i = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (i) {
          case 0:
            a = r2, i = 1;
            break;
          case 1:
            o[s++] = a << 2 | (48 & r2) >> 4, a = r2, i = 2;
            break;
          case 2:
            o[s++] = (15 & a) << 4 | (60 & r2) >> 2, a = r2, i = 3;
            break;
          case 3:
            o[s++] = (3 & a) << 6 | r2, i = 0;
        }
      }
      if (1 == i) throw Error("invalid base64 string.");
      return o.subarray(0, s);
    }, enc(e2) {
      let t2, n2 = "", o = 0, s = 0;
      for (let i = 0; i < e2.length; i++) switch (t2 = e2[i], o) {
        case 0:
          n2 += r[t2 >> 2], s = (3 & t2) << 4, o = 1;
          break;
        case 1:
          n2 += r[s | t2 >> 4], s = (15 & t2) << 2, o = 2;
          break;
        case 2:
          n2 += r[s | t2 >> 6], n2 += r[63 & t2], o = 0;
      }
      return o && (n2 += r[s], n2 += "=", 1 == o && (n2 += "=")), n2;
    } };
  }