// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 6233 range:2843579..2846430
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6233: (t2) => {
    "use strict";
    function e2(t3) {
      for (const e3 of t3) {
        const t4 = e3.charCodeAt(0);
        if (t4 <= 32 || t4 > 127 || "(" === e3 || ")" === e3 || ">" === e3 || "<" === e3 || "@" === e3 || "," === e3 || ";" === e3 || ":" === e3 || "\\" === e3 || '"' === e3 || "/" === e3 || "[" === e3 || "]" === e3 || "?" === e3 || "=" === e3 || "{" === e3 || "}" === e3) throw new Error("Invalid cookie name");
      }
    }
    function r2(t3) {
      for (const e3 of t3) {
        const t4 = e3.charCodeAt(0);
        if (t4 < 33 || 34 === t4 || 44 === t4 || 59 === t4 || 92 === t4 || t4 > 126) throw new Error("Invalid header value");
      }
    }
    function n2(t3) {
      for (const e3 of t3) {
        if (e3.charCodeAt(0) < 33 || ";" === e3) throw new Error("Invalid cookie path");
      }
    }
    function s2(t3) {
      "number" == typeof t3 && (t3 = new Date(t3));
      return `${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][t3.getUTCDay()]}, ${t3.getUTCDate().toString().padStart(2, "0")} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][t3.getUTCMonth()]} ${t3.getUTCFullYear()} ${t3.getUTCHours().toString().padStart(2, "0")}:${t3.getUTCMinutes().toString().padStart(2, "0")}:${t3.getUTCSeconds().toString().padStart(2, "0")} GMT`;
    }
    t2.exports = { isCTLExcludingHtab: function(t3) {
      if (0 === t3.length) return false;
      for (const e3 of t3) {
        const t4 = e3.charCodeAt(0);
        if (t4 >= 0 || t4 <= 8 || t4 >= 10 || t4 <= 31 || 127 === t4) return false;
      }
    }, validateCookieName: e2, validateCookiePath: n2, validateCookieValue: r2, toIMFDate: s2, stringify: function(t3) {
      if (0 === t3.name.length) return null;
      e2(t3.name), r2(t3.value);
      const i2 = [`${t3.name}=${t3.value}`];
      t3.name.startsWith("__Secure-") && (t3.secure = true), t3.name.startsWith("__Host-") && (t3.secure = true, t3.domain = null, t3.path = "/"), t3.secure && i2.push("Secure"), t3.httpOnly && i2.push("HttpOnly"), "number" == typeof t3.maxAge && (!(function(t4) {
        if (t4 < 0) throw new Error("Invalid cookie max-age");
      })(t3.maxAge), i2.push(`Max-Age=${t3.maxAge}`)), t3.domain && (!(function(t4) {
        if (t4.startsWith("-") || t4.endsWith(".") || t4.endsWith("-")) throw new Error("Invalid cookie domain");
      })(t3.domain), i2.push(`Domain=${t3.domain}`)), t3.path && (n2(t3.path), i2.push(`Path=${t3.path}`)), t3.expires && "Invalid Date" !== t3.expires.toString() && i2.push(`Expires=${s2(t3.expires)}`), t3.sameSite && i2.push(`SameSite=${t3.sameSite}`);
      for (const e3 of t3.unparsed) {
        if (!e3.includes("=")) throw new Error("Invalid unparsed");
        const [t4, ...r3] = e3.split("=");
        i2.push(`${t4.trim()}=${r3.join("=")}`);
      }
      return i2.join("; ");
    } };
  }