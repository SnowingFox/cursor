// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8614 range:5265457..5267826
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8614: (t2, e2, r2) => {
    "use strict";
    const { maxNameValuePairSize: n2, maxAttributeValueSize: s2 } = r2(360), { isCTLExcludingHtab: i2 } = r2(6233), { collectASequenceOfCodePointsFast: o2 } = r2(4387), a = r2(2613);
    function u(t3, e3 = {}) {
      if (0 === t3.length) return e3;
      a(";" === t3[0]);
      let r3 = "";
      (t3 = t3.slice(1)).includes(";") ? (r3 = o2(";", t3, { position: 0 }), t3 = t3.slice(r3.length)) : (r3 = t3, t3 = "");
      let n3 = "", i3 = "";
      if (r3.includes("=")) {
        const t4 = { position: 0 };
        n3 = o2("=", r3, t4), i3 = r3.slice(t4.position + 1);
      } else n3 = r3;
      if (n3 = n3.trim(), i3 = i3.trim(), i3.length > s2) return u(t3, e3);
      const c = n3.toLowerCase();
      if ("expires" === c) {
        const t4 = new Date(i3);
        e3.expires = t4;
      } else if ("max-age" === c) {
        const r4 = i3.charCodeAt(0);
        if ((r4 < 48 || r4 > 57) && "-" !== i3[0]) return u(t3, e3);
        if (!/^\d+$/.test(i3)) return u(t3, e3);
        const n4 = Number(i3);
        e3.maxAge = n4;
      } else if ("domain" === c) {
        let t4 = i3;
        "." === t4[0] && (t4 = t4.slice(1)), t4 = t4.toLowerCase(), e3.domain = t4;
      } else if ("path" === c) {
        let t4 = "";
        t4 = 0 === i3.length || "/" !== i3[0] ? "/" : i3, e3.path = t4;
      } else if ("secure" === c) e3.secure = true;
      else if ("httponly" === c) e3.httpOnly = true;
      else if ("samesite" === c) {
        let t4 = "Default";
        const r4 = i3.toLowerCase();
        r4.includes("none") && (t4 = "None"), r4.includes("strict") && (t4 = "Strict"), r4.includes("lax") && (t4 = "Lax"), e3.sameSite = t4;
      } else e3.unparsed ??= [], e3.unparsed.push(`${n3}=${i3}`);
      return u(t3, e3);
    }
    t2.exports = { parseSetCookie: function(t3) {
      if (i2(t3)) return null;
      let e3 = "", r3 = "", s3 = "", a2 = "";
      if (t3.includes(";")) {
        const n3 = { position: 0 };
        e3 = o2(";", t3, n3), r3 = t3.slice(n3.position);
      } else e3 = t3;
      if (e3.includes("=")) {
        const t4 = { position: 0 };
        s3 = o2("=", e3, t4), a2 = e3.slice(t4.position + 1);
      } else a2 = e3;
      return s3 = s3.trim(), a2 = a2.trim(), s3.length + a2.length > n2 ? null : { name: s3, value: a2, ...u(r3) };
    }, parseUnparsedAttributes: u };
  }