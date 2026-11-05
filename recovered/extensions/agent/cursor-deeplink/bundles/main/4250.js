// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 4250 range:489521..491886
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4250: (e2, t2, A2) => {
    "use strict";
    const { maxNameValuePairSize: n2, maxAttributeValueSize: r2 } = A2(1404), { isCTLExcludingHtab: o2 } = A2(6261), { collectASequenceOfCodePointsFast: s } = A2(3631), i = A2(2613);
    function a(e3, t3 = {}) {
      if (0 === e3.length) return t3;
      i(";" === e3[0]);
      let A3 = "";
      (e3 = e3.slice(1)).includes(";") ? (A3 = s(";", e3, { position: 0 }), e3 = e3.slice(A3.length)) : (A3 = e3, e3 = "");
      let n3 = "", o3 = "";
      if (A3.includes("=")) {
        const e4 = { position: 0 };
        n3 = s("=", A3, e4), o3 = A3.slice(e4.position + 1);
      } else n3 = A3;
      if (n3 = n3.trim(), o3 = o3.trim(), o3.length > r2) return a(e3, t3);
      const c = n3.toLowerCase();
      if ("expires" === c) {
        const e4 = new Date(o3);
        t3.expires = e4;
      } else if ("max-age" === c) {
        const A4 = o3.charCodeAt(0);
        if ((A4 < 48 || A4 > 57) && "-" !== o3[0]) return a(e3, t3);
        if (!/^\d+$/.test(o3)) return a(e3, t3);
        const n4 = Number(o3);
        t3.maxAge = n4;
      } else if ("domain" === c) {
        let e4 = o3;
        "." === e4[0] && (e4 = e4.slice(1)), e4 = e4.toLowerCase(), t3.domain = e4;
      } else if ("path" === c) {
        let e4 = "";
        e4 = 0 === o3.length || "/" !== o3[0] ? "/" : o3, t3.path = e4;
      } else if ("secure" === c) t3.secure = true;
      else if ("httponly" === c) t3.httpOnly = true;
      else if ("samesite" === c) {
        let e4 = "Default";
        const A4 = o3.toLowerCase();
        A4.includes("none") && (e4 = "None"), A4.includes("strict") && (e4 = "Strict"), A4.includes("lax") && (e4 = "Lax"), t3.sameSite = e4;
      } else t3.unparsed ??= [], t3.unparsed.push(`${n3}=${o3}`);
      return a(e3, t3);
    }
    e2.exports = { parseSetCookie: function(e3) {
      if (o2(e3)) return null;
      let t3 = "", A3 = "", r3 = "", i2 = "";
      if (e3.includes(";")) {
        const n3 = { position: 0 };
        t3 = s(";", e3, n3), A3 = e3.slice(n3.position);
      } else t3 = e3;
      if (t3.includes("=")) {
        const e4 = { position: 0 };
        r3 = s("=", t3, e4), i2 = t3.slice(e4.position + 1);
      } else i2 = t3;
      return r3 = r3.trim(), i2 = i2.trim(), r3.length + i2.length > n2 ? null : { name: r3, value: i2, ...a(A3) };
    }, parseUnparsedAttributes: a };
  }