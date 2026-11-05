// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 85055 range:466978..469190
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
85055: (A, e, t) => {
  "use strict";
  const { maxNameValuePairSize: r, maxAttributeValueSize: s } = t(5873), { isCTLExcludingHtab: o } = t(41230), { collectASequenceOfCodePointsFast: n } = t(52603), i = t(56970);
  function a(A2, e2 = {}) {
    if (0 === A2.length) return e2;
    i(";" === A2[0]);
    let t2 = "";
    (A2 = A2.slice(1)).includes(";") ? (t2 = n(";", A2, { position: 0 }), A2 = A2.slice(t2.length)) : (t2 = A2, A2 = "");
    let r2 = "", o2 = "";
    if (t2.includes("=")) {
      const A3 = { position: 0 };
      r2 = n("=", t2, A3), o2 = t2.slice(A3.position + 1);
    } else r2 = t2;
    if (r2 = r2.trim(), o2 = o2.trim(), o2.length > s) return a(A2, e2);
    const Q = r2.toLowerCase();
    if ("expires" === Q) {
      const A3 = new Date(o2);
      e2.expires = A3;
    } else if ("max-age" === Q) {
      const t3 = o2.charCodeAt(0);
      if ((t3 < 48 || t3 > 57) && "-" !== o2[0]) return a(A2, e2);
      if (!/^\d+$/.test(o2)) return a(A2, e2);
      const r3 = Number(o2);
      e2.maxAge = r3;
    } else if ("domain" === Q) {
      let A3 = o2;
      "." === A3[0] && (A3 = A3.slice(1)), A3 = A3.toLowerCase(), e2.domain = A3;
    } else if ("path" === Q) {
      let A3 = "";
      A3 = 0 === o2.length || "/" !== o2[0] ? "/" : o2, e2.path = A3;
    } else if ("secure" === Q) e2.secure = true;
    else if ("httponly" === Q) e2.httpOnly = true;
    else if ("samesite" === Q) {
      const A3 = o2.toLowerCase();
      "none" === A3 ? e2.sameSite = "None" : "strict" === A3 ? e2.sameSite = "Strict" : "lax" === A3 && (e2.sameSite = "Lax");
    } else e2.unparsed ??= [], e2.unparsed.push(`${r2}=${o2}`);
    return a(A2, e2);
  }
  A.exports = { parseSetCookie: function(A2) {
    if (o(A2)) return null;
    let e2 = "", t2 = "", s2 = "", i2 = "";
    if (A2.includes(";")) {
      const r2 = { position: 0 };
      e2 = n(";", A2, r2), t2 = A2.slice(r2.position);
    } else e2 = A2;
    if (e2.includes("=")) {
      const A3 = { position: 0 };
      s2 = n("=", e2, A3), i2 = e2.slice(A3.position + 1);
    } else i2 = e2;
    return s2 = s2.trim(), i2 = i2.trim(), s2.length + i2.length > r ? null : { name: s2, value: i2, ...a(t2) };
  }, parseUnparsedAttributes: a };
}