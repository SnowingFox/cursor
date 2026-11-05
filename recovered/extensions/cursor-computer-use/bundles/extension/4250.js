// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 4250 range:393596..395961
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
4250: (e2, n2, t2) => {
    "use strict";
    const { maxNameValuePairSize: a2, maxAttributeValueSize: s2 } = t2(1404), { isCTLExcludingHtab: o2 } = t2(6261), { collectASequenceOfCodePointsFast: r } = t2(3631), i = t2(2613);
    function A(e3, n3 = {}) {
      if (0 === e3.length) return n3;
      i(";" === e3[0]);
      let t3 = "";
      (e3 = e3.slice(1)).includes(";") ? (t3 = r(";", e3, { position: 0 }), e3 = e3.slice(t3.length)) : (t3 = e3, e3 = "");
      let a3 = "", o3 = "";
      if (t3.includes("=")) {
        const e4 = { position: 0 };
        a3 = r("=", t3, e4), o3 = t3.slice(e4.position + 1);
      } else a3 = t3;
      if (a3 = a3.trim(), o3 = o3.trim(), o3.length > s2) return A(e3, n3);
      const c = a3.toLowerCase();
      if ("expires" === c) {
        const e4 = new Date(o3);
        n3.expires = e4;
      } else if ("max-age" === c) {
        const t4 = o3.charCodeAt(0);
        if ((t4 < 48 || t4 > 57) && "-" !== o3[0]) return A(e3, n3);
        if (!/^\d+$/.test(o3)) return A(e3, n3);
        const a4 = Number(o3);
        n3.maxAge = a4;
      } else if ("domain" === c) {
        let e4 = o3;
        "." === e4[0] && (e4 = e4.slice(1)), e4 = e4.toLowerCase(), n3.domain = e4;
      } else if ("path" === c) {
        let e4 = "";
        e4 = 0 === o3.length || "/" !== o3[0] ? "/" : o3, n3.path = e4;
      } else if ("secure" === c) n3.secure = true;
      else if ("httponly" === c) n3.httpOnly = true;
      else if ("samesite" === c) {
        let e4 = "Default";
        const t4 = o3.toLowerCase();
        t4.includes("none") && (e4 = "None"), t4.includes("strict") && (e4 = "Strict"), t4.includes("lax") && (e4 = "Lax"), n3.sameSite = e4;
      } else n3.unparsed ??= [], n3.unparsed.push(`${a3}=${o3}`);
      return A(e3, n3);
    }
    e2.exports = { parseSetCookie: function(e3) {
      if (o2(e3)) return null;
      let n3 = "", t3 = "", s3 = "", i2 = "";
      if (e3.includes(";")) {
        const a3 = { position: 0 };
        n3 = r(";", e3, a3), t3 = e3.slice(a3.position);
      } else n3 = e3;
      if (n3.includes("=")) {
        const e4 = { position: 0 };
        s3 = r("=", n3, e4), i2 = n3.slice(e4.position + 1);
      } else i2 = n3;
      return s3 = s3.trim(), i2 = i2.trim(), s3.length + i2.length > a2 ? null : { name: s3, value: i2, ...A(t3) };
    }, parseUnparsedAttributes: A };
  }