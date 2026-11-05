// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver/dist/main.js sha256:677b774c75dfff0de56084737d26169857daed3731cb62a6702840900f439aed
// module: 526 range:136270..138152
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
526: (e2, t2) => {
    Object.defineProperty(t2, "__esModule", { value: true }), t2.protoBase64 = void 0;
    let n2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), r2 = [];
    for (let e3 = 0; e3 < n2.length; e3++) r2[n2[e3].charCodeAt(0)] = e3;
    r2["-".charCodeAt(0)] = n2.indexOf("+"), r2["_".charCodeAt(0)] = n2.indexOf("/"), t2.protoBase64 = { dec(e3) {
      let t3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? t3 -= 2 : "=" == e3[e3.length - 1] && (t3 -= 1);
      let n3, o2 = new Uint8Array(t3), a2 = 0, s2 = 0, i2 = 0;
      for (let t4 = 0; t4 < e3.length; t4++) {
        if (n3 = r2[e3.charCodeAt(t4)], void 0 === n3) switch (e3[t4]) {
          case "=":
            s2 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (s2) {
          case 0:
            i2 = n3, s2 = 1;
            break;
          case 1:
            o2[a2++] = i2 << 2 | (48 & n3) >> 4, i2 = n3, s2 = 2;
            break;
          case 2:
            o2[a2++] = (15 & i2) << 4 | (60 & n3) >> 2, i2 = n3, s2 = 3;
            break;
          case 3:
            o2[a2++] = (3 & i2) << 6 | n3, s2 = 0;
        }
      }
      if (1 == s2) throw Error("invalid base64 string.");
      return o2.subarray(0, a2);
    }, enc(e3) {
      let t3, r3 = "", o2 = 0, a2 = 0;
      for (let s2 = 0; s2 < e3.length; s2++) switch (t3 = e3[s2], o2) {
        case 0:
          r3 += n2[t3 >> 2], a2 = (3 & t3) << 4, o2 = 1;
          break;
        case 1:
          r3 += n2[a2 | t3 >> 4], a2 = (15 & t3) << 2, o2 = 2;
          break;
        case 2:
          r3 += n2[a2 | t3 >> 6], r3 += n2[63 & t3], o2 = 0;
      }
      return o2 && (r3 += n2[a2], r3 += "=", 1 == o2 && (r3 += "=")), r3;
    } };
  }