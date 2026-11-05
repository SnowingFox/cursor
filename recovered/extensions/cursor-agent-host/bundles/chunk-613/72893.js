// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 72893 range:393074..398143
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
72893: (A, e, t) => {
  "use strict";
  const { isUSVString: r, bufferToLowerCasedHeaderName: s } = t(55201), { utf8DecodeBytes: o } = t(48215), { HTTP_TOKEN_CODEPOINTS: n, isomorphicDecode: i } = t(52603), { isFileLike: a } = t(90165), { makeEntry: Q } = t(41445), g = t(56970), { File: E } = t(4573), B = globalThis.File ?? E, c = Buffer.from('form-data; name="'), I = Buffer.from("; filename"), C = Buffer.from("--"), h = Buffer.from("--\r\n");
  function l(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) if (-128 & A2.charCodeAt(e2)) return false;
    return true;
  }
  function u(A2, e2) {
    let t2 = null, r2 = null, o2 = null, a2 = null;
    for (; ; ) {
      if (13 === A2[e2.position] && 10 === A2[e2.position + 1]) return null === t2 ? "failure" : { name: t2, filename: r2, contentType: o2, encoding: a2 };
      let Q2 = f((A3) => 10 !== A3 && 13 !== A3 && 58 !== A3, A2, e2);
      if (Q2 = w(Q2, true, true, (A3) => 9 === A3 || 32 === A3), !n.test(Q2.toString())) return "failure";
      if (58 !== A2[e2.position]) return "failure";
      switch (e2.position++, f((A3) => 32 === A3 || 9 === A3, A2, e2), s(Q2)) {
        case "content-disposition":
          if (t2 = r2 = null, !y(A2, c, e2)) return "failure";
          if (e2.position += 17, t2 = d(A2, e2), null === t2) return "failure";
          if (y(A2, I, e2)) {
            let t3 = e2.position + I.length;
            if (42 === A2[t3] && (e2.position += 1, t3 += 1), 61 !== A2[t3] || 34 !== A2[t3 + 1]) return "failure";
            if (e2.position += 12, r2 = d(A2, e2), null === r2) return "failure";
          }
          break;
        case "content-type": {
          let t3 = f((A3) => 10 !== A3 && 13 !== A3, A2, e2);
          t3 = w(t3, false, true, (A3) => 9 === A3 || 32 === A3), o2 = i(t3);
          break;
        }
        case "content-transfer-encoding": {
          let t3 = f((A3) => 10 !== A3 && 13 !== A3, A2, e2);
          t3 = w(t3, false, true, (A3) => 9 === A3 || 32 === A3), a2 = i(t3);
          break;
        }
        default:
          f((A3) => 10 !== A3 && 13 !== A3, A2, e2);
      }
      if (13 !== A2[e2.position] && 10 !== A2[e2.position + 1]) return "failure";
      e2.position += 2;
    }
  }
  function d(A2, e2) {
    g(34 === A2[e2.position - 1]);
    let t2 = f((A3) => 10 !== A3 && 13 !== A3 && 34 !== A3, A2, e2);
    return 34 !== A2[e2.position] ? null : (e2.position++, t2 = new TextDecoder().decode(t2).replace(/%0A/gi, "\n").replace(/%0D/gi, "\r").replace(/%22/g, '"'), t2);
  }
  function f(A2, e2, t2) {
    let r2 = t2.position;
    for (; r2 < e2.length && A2(e2[r2]); ) ++r2;
    return e2.subarray(t2.position, t2.position = r2);
  }
  function w(A2, e2, t2, r2) {
    let s2 = 0, o2 = A2.length - 1;
    if (e2) for (; s2 < A2.length && r2(A2[s2]); ) s2++;
    if (t2) for (; o2 > 0 && r2(A2[o2]); ) o2--;
    return 0 === s2 && o2 === A2.length - 1 ? A2 : A2.subarray(s2, o2 + 1);
  }
  function y(A2, e2, t2) {
    if (A2.length < e2.length) return false;
    for (let r2 = 0; r2 < e2.length; r2++) if (e2[r2] !== A2[t2.position + r2]) return false;
    return true;
  }
  A.exports = { multipartFormDataParser: function(A2, e2) {
    g("failure" !== e2 && "multipart/form-data" === e2.essence);
    const t2 = e2.parameters.get("boundary");
    if (void 0 === t2) return "failure";
    const s2 = Buffer.from(`--${t2}`, "utf8"), n2 = [], i2 = { position: 0 };
    for (; 13 === A2[i2.position] && 10 === A2[i2.position + 1]; ) i2.position += 2;
    let E2 = A2.length;
    for (; 10 === A2[E2 - 1] && 13 === A2[E2 - 2]; ) E2 -= 2;
    for (E2 !== A2.length && (A2 = A2.subarray(0, E2)); ; ) {
      if (!A2.subarray(i2.position, i2.position + s2.length).equals(s2)) return "failure";
      if (i2.position += s2.length, i2.position === A2.length - 2 && y(A2, C, i2) || i2.position === A2.length - 4 && y(A2, h, i2)) return n2;
      if (13 !== A2[i2.position] || 10 !== A2[i2.position + 1]) return "failure";
      i2.position += 2;
      const e3 = u(A2, i2);
      if ("failure" === e3) return "failure";
      let t3, E3, { name: c2, filename: I2, contentType: d2, encoding: f2 } = e3;
      i2.position += 2;
      {
        const e4 = A2.indexOf(s2.subarray(2), i2.position);
        if (-1 === e4) return "failure";
        t3 = A2.subarray(i2.position, e4 - 4), i2.position += t3.length, "base64" === f2 && (t3 = Buffer.from(t3.toString(), "base64"));
      }
      if (13 !== A2[i2.position] || 10 !== A2[i2.position + 1]) return "failure";
      i2.position += 2, null !== I2 ? (d2 ??= "text/plain", l(d2) || (d2 = ""), E3 = new B([t3], I2, { type: d2 })) : E3 = o(Buffer.from(t3)), g(r(c2)), g("string" == typeof E3 && r(E3) || a(E3)), n2.push(Q(c2, E3, I2));
    }
  }, validateBoundary: function(A2) {
    const e2 = A2.length;
    if (e2 < 27 || e2 > 70) return false;
    for (let t2 = 0; t2 < e2; ++t2) {
      const e3 = A2.charCodeAt(t2);
      if (!(e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 || 39 === e3 || 45 === e3 || 95 === e3)) return false;
    }
    return true;
  } };
}