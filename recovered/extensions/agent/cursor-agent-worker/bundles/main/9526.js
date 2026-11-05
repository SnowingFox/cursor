// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-worker/dist/main.js sha256:d5af94b4e40f694b81a675a0fb00fa8d060306ca064a011e953218d005b613d5
// module: 9526 range:357674..359671
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9526: (e10, a10) => {
    Object.defineProperty(a10, "__esModule", { value: true }), a10.protoBase64 = void 0;
    let n10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), s10 = [];
    for (let e11 = 0; e11 < n10.length; e11++) s10[n10[e11].charCodeAt(0)] = e11;
    s10["-".charCodeAt(0)] = n10.indexOf("+"), s10["_".charCodeAt(0)] = n10.indexOf("/"), a10.protoBase64 = { dec(e11) {
      let a11 = 3 * e11.length / 4;
      "=" == e11[e11.length - 2] ? a11 -= 2 : "=" == e11[e11.length - 1] && (a11 -= 1);
      let n11, o10 = new Uint8Array(a11), r10 = 0, t10 = 0, i10 = 0;
      for (let a12 = 0; a12 < e11.length; a12++) {
        if (n11 = s10[e11.charCodeAt(a12)], void 0 === n11) switch (e11[a12]) {
          case "=":
            t10 = 0;
          case "\n":
          case "\r":
          case "	":
          case " ":
            continue;
          default:
            throw Error("invalid base64 string.");
        }
        switch (t10) {
          case 0:
            i10 = n11, t10 = 1;
            break;
          case 1:
            o10[r10++] = i10 << 2 | (48 & n11) >> 4, i10 = n11, t10 = 2;
            break;
          case 2:
            o10[r10++] = (15 & i10) << 4 | (60 & n11) >> 2, i10 = n11, t10 = 3;
            break;
          case 3:
            o10[r10++] = (3 & i10) << 6 | n11, t10 = 0;
        }
      }
      if (1 == t10) throw Error("invalid base64 string.");
      return o10.subarray(0, r10);
    }, enc(e11) {
      let a11, s11 = "", o10 = 0, r10 = 0;
      for (let t10 = 0; t10 < e11.length; t10++) switch (a11 = e11[t10], o10) {
        case 0:
          s11 += n10[a11 >> 2], r10 = (3 & a11) << 4, o10 = 1;
          break;
        case 1:
          s11 += n10[r10 | a11 >> 4], r10 = (15 & a11) << 2, o10 = 2;
          break;
        case 2:
          s11 += n10[r10 | a11 >> 6], s11 += n10[63 & a11], o10 = 0;
      }
      return o10 && (s11 += n10[r10], s11 += "=", 1 == o10 && (s11 += "=")), s11;
    } };
  }