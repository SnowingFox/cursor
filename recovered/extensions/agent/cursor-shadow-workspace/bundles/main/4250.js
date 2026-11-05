// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 4250 range:386175..388540
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4250: (e2, A2, t2) => {
    "use strict";
    const { maxNameValuePairSize: n2, maxAttributeValueSize: r2 } = t2(1404), { isCTLExcludingHtab: o2 } = t2(6261), { collectASequenceOfCodePointsFast: s } = t2(3631), a = t2(2613);
    function i(e3, A3 = {}) {
      if (0 === e3.length) return A3;
      a(";" === e3[0]);
      let t3 = "";
      (e3 = e3.slice(1)).includes(";") ? (t3 = s(";", e3, { position: 0 }), e3 = e3.slice(t3.length)) : (t3 = e3, e3 = "");
      let n3 = "", o3 = "";
      if (t3.includes("=")) {
        const e4 = { position: 0 };
        n3 = s("=", t3, e4), o3 = t3.slice(e4.position + 1);
      } else n3 = t3;
      if (n3 = n3.trim(), o3 = o3.trim(), o3.length > r2) return i(e3, A3);
      const c = n3.toLowerCase();
      if ("expires" === c) {
        const e4 = new Date(o3);
        A3.expires = e4;
      } else if ("max-age" === c) {
        const t4 = o3.charCodeAt(0);
        if ((t4 < 48 || t4 > 57) && "-" !== o3[0]) return i(e3, A3);
        if (!/^\d+$/.test(o3)) return i(e3, A3);
        const n4 = Number(o3);
        A3.maxAge = n4;
      } else if ("domain" === c) {
        let e4 = o3;
        "." === e4[0] && (e4 = e4.slice(1)), e4 = e4.toLowerCase(), A3.domain = e4;
      } else if ("path" === c) {
        let e4 = "";
        e4 = 0 === o3.length || "/" !== o3[0] ? "/" : o3, A3.path = e4;
      } else if ("secure" === c) A3.secure = true;
      else if ("httponly" === c) A3.httpOnly = true;
      else if ("samesite" === c) {
        let e4 = "Default";
        const t4 = o3.toLowerCase();
        t4.includes("none") && (e4 = "None"), t4.includes("strict") && (e4 = "Strict"), t4.includes("lax") && (e4 = "Lax"), A3.sameSite = e4;
      } else A3.unparsed ??= [], A3.unparsed.push(`${n3}=${o3}`);
      return i(e3, A3);
    }
    e2.exports = { parseSetCookie: function(e3) {
      if (o2(e3)) return null;
      let A3 = "", t3 = "", r3 = "", a2 = "";
      if (e3.includes(";")) {
        const n3 = { position: 0 };
        A3 = s(";", e3, n3), t3 = e3.slice(n3.position);
      } else A3 = e3;
      if (A3.includes("=")) {
        const e4 = { position: 0 };
        r3 = s("=", A3, e4), a2 = A3.slice(e4.position + 1);
      } else a2 = A3;
      return r3 = r3.trim(), a2 = a2.trim(), r3.length + a2.length > n2 ? null : { name: r3, value: a2, ...i(t3) };
    }, parseUnparsedAttributes: i };
  }