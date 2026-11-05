// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 4250 range:692227..694599
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4250: (e2, a2, n2) => {
    "use strict";
    const { maxNameValuePairSize: t2, maxAttributeValueSize: s2 } = n2(1404), { isCTLExcludingHtab: o2 } = n2(6261), { collectASequenceOfCodePointsFast: r2 } = n2(3631), i2 = n2(2613);
    function l(e3, a3 = {}) {
      if (0 === e3.length) return a3;
      i2(";" === e3[0]);
      let n3 = "";
      (e3 = e3.slice(1)).includes(";") ? (n3 = r2(";", e3, { position: 0 }), e3 = e3.slice(n3.length)) : (n3 = e3, e3 = "");
      let t3 = "", o3 = "";
      if (n3.includes("=")) {
        const e4 = { position: 0 };
        t3 = r2("=", n3, e4), o3 = n3.slice(e4.position + 1);
      } else t3 = n3;
      if (t3 = t3.trim(), o3 = o3.trim(), o3.length > s2) return l(e3, a3);
      const d = t3.toLowerCase();
      if ("expires" === d) {
        const e4 = new Date(o3);
        a3.expires = e4;
      } else if ("max-age" === d) {
        const n4 = o3.charCodeAt(0);
        if ((n4 < 48 || n4 > 57) && "-" !== o3[0]) return l(e3, a3);
        if (!/^\d+$/.test(o3)) return l(e3, a3);
        const t4 = Number(o3);
        a3.maxAge = t4;
      } else if ("domain" === d) {
        let e4 = o3;
        "." === e4[0] && (e4 = e4.slice(1)), e4 = e4.toLowerCase(), a3.domain = e4;
      } else if ("path" === d) {
        let e4 = "";
        e4 = 0 === o3.length || "/" !== o3[0] ? "/" : o3, a3.path = e4;
      } else if ("secure" === d) a3.secure = true;
      else if ("httponly" === d) a3.httpOnly = true;
      else if ("samesite" === d) {
        let e4 = "Default";
        const n4 = o3.toLowerCase();
        n4.includes("none") && (e4 = "None"), n4.includes("strict") && (e4 = "Strict"), n4.includes("lax") && (e4 = "Lax"), a3.sameSite = e4;
      } else a3.unparsed ??= [], a3.unparsed.push(`${t3}=${o3}`);
      return l(e3, a3);
    }
    e2.exports = { parseSetCookie: function(e3) {
      if (o2(e3)) return null;
      let a3 = "", n3 = "", s3 = "", i3 = "";
      if (e3.includes(";")) {
        const t3 = { position: 0 };
        a3 = r2(";", e3, t3), n3 = e3.slice(t3.position);
      } else a3 = e3;
      if (a3.includes("=")) {
        const e4 = { position: 0 };
        s3 = r2("=", a3, e4), i3 = a3.slice(e4.position + 1);
      } else i3 = a3;
      return s3 = s3.trim(), i3 = i3.trim(), s3.length + i3.length > t2 ? null : { name: s3, value: i3, ...l(n3) };
    }, parseUnparsedAttributes: l };
  }