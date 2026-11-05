// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 58614 range:9176667..9179023
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
58614: (e, t, r) => {
    "use strict";
    const { maxNameValuePairSize: n, maxAttributeValueSize: s } = r(40360), { isCTLExcludingHtab: o } = r(56233), { collectASequenceOfCodePointsFast: i } = r(64387), a = r(42613);
    function c(e2, t2 = {}) {
      if (0 === e2.length) return t2;
      a(";" === e2[0]);
      let r2 = "";
      (e2 = e2.slice(1)).includes(";") ? (r2 = i(";", e2, { position: 0 }), e2 = e2.slice(r2.length)) : (r2 = e2, e2 = "");
      let n2 = "", o2 = "";
      if (r2.includes("=")) {
        const e3 = { position: 0 };
        n2 = i("=", r2, e3), o2 = r2.slice(e3.position + 1);
      } else n2 = r2;
      if (n2 = n2.trim(), o2 = o2.trim(), o2.length > s) return c(e2, t2);
      const l = n2.toLowerCase();
      if ("expires" === l) {
        const e3 = new Date(o2);
        t2.expires = e3;
      } else if ("max-age" === l) {
        const r3 = o2.charCodeAt(0);
        if ((r3 < 48 || r3 > 57) && "-" !== o2[0]) return c(e2, t2);
        if (!/^\d+$/.test(o2)) return c(e2, t2);
        const n3 = Number(o2);
        t2.maxAge = n3;
      } else if ("domain" === l) {
        let e3 = o2;
        "." === e3[0] && (e3 = e3.slice(1)), e3 = e3.toLowerCase(), t2.domain = e3;
      } else if ("path" === l) {
        let e3 = "";
        e3 = 0 === o2.length || "/" !== o2[0] ? "/" : o2, t2.path = e3;
      } else if ("secure" === l) t2.secure = true;
      else if ("httponly" === l) t2.httpOnly = true;
      else if ("samesite" === l) {
        let e3 = "Default";
        const r3 = o2.toLowerCase();
        r3.includes("none") && (e3 = "None"), r3.includes("strict") && (e3 = "Strict"), r3.includes("lax") && (e3 = "Lax"), t2.sameSite = e3;
      } else t2.unparsed ??= [], t2.unparsed.push(`${n2}=${o2}`);
      return c(e2, t2);
    }
    e.exports = { parseSetCookie: function(e2) {
      if (o(e2)) return null;
      let t2 = "", r2 = "", s2 = "", a2 = "";
      if (e2.includes(";")) {
        const n2 = { position: 0 };
        t2 = i(";", e2, n2), r2 = e2.slice(n2.position);
      } else t2 = e2;
      if (t2.includes("=")) {
        const e3 = { position: 0 };
        s2 = i("=", t2, e3), a2 = t2.slice(e3.position + 1);
      } else a2 = t2;
      return s2 = s2.trim(), a2 = a2.trim(), s2.length + a2.length > n ? null : { name: s2, value: a2, ...c(r2) };
    }, parseUnparsedAttributes: c };
  }