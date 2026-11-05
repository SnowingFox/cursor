// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 56233 range:8712738..8715566
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
56233: (e) => {
    "use strict";
    function t(e2) {
      for (const t2 of e2) {
        const e3 = t2.charCodeAt(0);
        if (e3 <= 32 || e3 > 127 || "(" === t2 || ")" === t2 || ">" === t2 || "<" === t2 || "@" === t2 || "," === t2 || ";" === t2 || ":" === t2 || "\\" === t2 || '"' === t2 || "/" === t2 || "[" === t2 || "]" === t2 || "?" === t2 || "=" === t2 || "{" === t2 || "}" === t2) throw new Error("Invalid cookie name");
      }
    }
    function r(e2) {
      for (const t2 of e2) {
        const e3 = t2.charCodeAt(0);
        if (e3 < 33 || 34 === e3 || 44 === e3 || 59 === e3 || 92 === e3 || e3 > 126) throw new Error("Invalid header value");
      }
    }
    function n(e2) {
      for (const t2 of e2) {
        if (t2.charCodeAt(0) < 33 || ";" === t2) throw new Error("Invalid cookie path");
      }
    }
    function s(e2) {
      "number" == typeof e2 && (e2 = new Date(e2));
      return `${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e2.getUTCDay()]}, ${e2.getUTCDate().toString().padStart(2, "0")} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e2.getUTCMonth()]} ${e2.getUTCFullYear()} ${e2.getUTCHours().toString().padStart(2, "0")}:${e2.getUTCMinutes().toString().padStart(2, "0")}:${e2.getUTCSeconds().toString().padStart(2, "0")} GMT`;
    }
    e.exports = { isCTLExcludingHtab: function(e2) {
      if (0 === e2.length) return false;
      for (const t2 of e2) {
        const e3 = t2.charCodeAt(0);
        if (e3 >= 0 || e3 <= 8 || e3 >= 10 || e3 <= 31 || 127 === e3) return false;
      }
    }, validateCookieName: t, validateCookiePath: n, validateCookieValue: r, toIMFDate: s, stringify: function(e2) {
      if (0 === e2.name.length) return null;
      t(e2.name), r(e2.value);
      const o = [`${e2.name}=${e2.value}`];
      e2.name.startsWith("__Secure-") && (e2.secure = true), e2.name.startsWith("__Host-") && (e2.secure = true, e2.domain = null, e2.path = "/"), e2.secure && o.push("Secure"), e2.httpOnly && o.push("HttpOnly"), "number" == typeof e2.maxAge && (!(function(e3) {
        if (e3 < 0) throw new Error("Invalid cookie max-age");
      })(e2.maxAge), o.push(`Max-Age=${e2.maxAge}`)), e2.domain && (!(function(e3) {
        if (e3.startsWith("-") || e3.endsWith(".") || e3.endsWith("-")) throw new Error("Invalid cookie domain");
      })(e2.domain), o.push(`Domain=${e2.domain}`)), e2.path && (n(e2.path), o.push(`Path=${e2.path}`)), e2.expires && "Invalid Date" !== e2.expires.toString() && o.push(`Expires=${s(e2.expires)}`), e2.sameSite && o.push(`SameSite=${e2.sameSite}`);
      for (const t2 of e2.unparsed) {
        if (!t2.includes("=")) throw new Error("Invalid unparsed");
        const [e3, ...r2] = t2.split("=");
        o.push(`${e3.trim()}=${r2.join("=")}`);
      }
      return o.join("; ");
    } };
  }