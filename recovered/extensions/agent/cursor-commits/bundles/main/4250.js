// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 4250 range:386472..388844
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4250: (e2, n2, a2) => {
    "use strict";
    const { maxNameValuePairSize: t2, maxAttributeValueSize: s2 } = a2(1404), { isCTLExcludingHtab: o2 } = a2(6261), { collectASequenceOfCodePointsFast: r2 } = a2(3631), i2 = a2(2613);
    function A(e3, n3 = {}) {
      if (0 === e3.length) return n3;
      i2(";" === e3[0]);
      let a3 = "";
      (e3 = e3.slice(1)).includes(";") ? (a3 = r2(";", e3, { position: 0 }), e3 = e3.slice(a3.length)) : (a3 = e3, e3 = "");
      let t3 = "", o3 = "";
      if (a3.includes("=")) {
        const e4 = { position: 0 };
        t3 = r2("=", a3, e4), o3 = a3.slice(e4.position + 1);
      } else t3 = a3;
      if (t3 = t3.trim(), o3 = o3.trim(), o3.length > s2) return A(e3, n3);
      const l = t3.toLowerCase();
      if ("expires" === l) {
        const e4 = new Date(o3);
        n3.expires = e4;
      } else if ("max-age" === l) {
        const a4 = o3.charCodeAt(0);
        if ((a4 < 48 || a4 > 57) && "-" !== o3[0]) return A(e3, n3);
        if (!/^\d+$/.test(o3)) return A(e3, n3);
        const t4 = Number(o3);
        n3.maxAge = t4;
      } else if ("domain" === l) {
        let e4 = o3;
        "." === e4[0] && (e4 = e4.slice(1)), e4 = e4.toLowerCase(), n3.domain = e4;
      } else if ("path" === l) {
        let e4 = "";
        e4 = 0 === o3.length || "/" !== o3[0] ? "/" : o3, n3.path = e4;
      } else if ("secure" === l) n3.secure = true;
      else if ("httponly" === l) n3.httpOnly = true;
      else if ("samesite" === l) {
        let e4 = "Default";
        const a4 = o3.toLowerCase();
        a4.includes("none") && (e4 = "None"), a4.includes("strict") && (e4 = "Strict"), a4.includes("lax") && (e4 = "Lax"), n3.sameSite = e4;
      } else n3.unparsed ??= [], n3.unparsed.push(`${t3}=${o3}`);
      return A(e3, n3);
    }
    e2.exports = { parseSetCookie: function(e3) {
      if (o2(e3)) return null;
      let n3 = "", a3 = "", s3 = "", i3 = "";
      if (e3.includes(";")) {
        const t3 = { position: 0 };
        n3 = r2(";", e3, t3), a3 = e3.slice(t3.position);
      } else n3 = e3;
      if (n3.includes("=")) {
        const e4 = { position: 0 };
        s3 = r2("=", n3, e4), i3 = n3.slice(e4.position + 1);
      } else i3 = n3;
      return s3 = s3.trim(), i3 = i3.trim(), s3.length + i3.length > t2 ? null : { name: s3, value: i3, ...A(a3) };
    }, parseUnparsedAttributes: A };
  }