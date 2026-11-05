// @recovered-by cursor-re
// artifact: app/extensions/cursor-resolver-helper/dist/main.js sha256:0eb6078f0829c93d9374e39385fef22eabf7657a05c3cdf5bf316d9dbcf5ad0e
// module: 526 range:136270..138152
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
526: (e2, a2) => {
    Object.defineProperty(a2, "__esModule", { value: true }), a2.protoBase64 = void 0;
    let n2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), o2 = [];
    for (let e3 = 0; e3 < n2.length; e3++) o2[n2[e3].charCodeAt(0)] = e3;
    o2["-".charCodeAt(0)] = n2.indexOf("+"), o2["_".charCodeAt(0)] = n2.indexOf("/"), a2.protoBase64 = { dec(e3) {
      let a3 = 3 * e3.length / 4;
      "=" == e3[e3.length - 2] ? a3 -= 2 : "=" == e3[e3.length - 1] && (a3 -= 1);
      let n3, s2 = new Uint8Array(a3), t2 = 0, r2 = 0, i2 = 0;
      for (let a4 = 0; a4 < e3.length; a4++) {
        if (n3 = o2[e3.charCodeAt(a4)], void 0 === n3) switch (e3[a4]) {
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
            s2[t2++] = i2 << 2 | (48 & n3) >> 4, i2 = n3, r2 = 2;
            break;
          case 2:
            s2[t2++] = (15 & i2) << 4 | (60 & n3) >> 2, i2 = n3, r2 = 3;
            break;
          case 3:
            s2[t2++] = (3 & i2) << 6 | n3, r2 = 0;
        }
      }
      if (1 == r2) throw Error("invalid base64 string.");
      return s2.subarray(0, t2);
    }, enc(e3) {
      let a3, o3 = "", s2 = 0, t2 = 0;
      for (let r2 = 0; r2 < e3.length; r2++) switch (a3 = e3[r2], s2) {
        case 0:
          o3 += n2[a3 >> 2], t2 = (3 & a3) << 4, s2 = 1;
          break;
        case 1:
          o3 += n2[t2 | a3 >> 4], t2 = (15 & a3) << 2, s2 = 2;
          break;
        case 2:
          o3 += n2[t2 | a3 >> 6], o3 += n2[63 & a3], s2 = 0;
      }
      return s2 && (o3 += n2[t2], o3 += "=", 1 == s2 && (o3 += "=")), o3;
    } };
  }