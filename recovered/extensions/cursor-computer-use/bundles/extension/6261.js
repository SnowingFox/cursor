// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 6261 range:516790..519641
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6261: (e2) => {
    "use strict";
    function n2(e3) {
      for (const n3 of e3) {
        const e4 = n3.charCodeAt(0);
        if (e4 <= 32 || e4 > 127 || "(" === n3 || ")" === n3 || ">" === n3 || "<" === n3 || "@" === n3 || "," === n3 || ";" === n3 || ":" === n3 || "\\" === n3 || '"' === n3 || "/" === n3 || "[" === n3 || "]" === n3 || "?" === n3 || "=" === n3 || "{" === n3 || "}" === n3) throw new Error("Invalid cookie name");
      }
    }
    function t2(e3) {
      for (const n3 of e3) {
        const e4 = n3.charCodeAt(0);
        if (e4 < 33 || 34 === e4 || 44 === e4 || 59 === e4 || 92 === e4 || e4 > 126) throw new Error("Invalid header value");
      }
    }
    function a2(e3) {
      for (const n3 of e3) {
        if (n3.charCodeAt(0) < 33 || ";" === n3) throw new Error("Invalid cookie path");
      }
    }
    function s2(e3) {
      "number" == typeof e3 && (e3 = new Date(e3));
      return `${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][e3.getUTCDay()]}, ${e3.getUTCDate().toString().padStart(2, "0")} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][e3.getUTCMonth()]} ${e3.getUTCFullYear()} ${e3.getUTCHours().toString().padStart(2, "0")}:${e3.getUTCMinutes().toString().padStart(2, "0")}:${e3.getUTCSeconds().toString().padStart(2, "0")} GMT`;
    }
    e2.exports = { isCTLExcludingHtab: function(e3) {
      if (0 === e3.length) return false;
      for (const n3 of e3) {
        const e4 = n3.charCodeAt(0);
        if (e4 >= 0 || e4 <= 8 || e4 >= 10 || e4 <= 31 || 127 === e4) return false;
      }
    }, validateCookieName: n2, validateCookiePath: a2, validateCookieValue: t2, toIMFDate: s2, stringify: function(e3) {
      if (0 === e3.name.length) return null;
      n2(e3.name), t2(e3.value);
      const o2 = [`${e3.name}=${e3.value}`];
      e3.name.startsWith("__Secure-") && (e3.secure = true), e3.name.startsWith("__Host-") && (e3.secure = true, e3.domain = null, e3.path = "/"), e3.secure && o2.push("Secure"), e3.httpOnly && o2.push("HttpOnly"), "number" == typeof e3.maxAge && (!(function(e4) {
        if (e4 < 0) throw new Error("Invalid cookie max-age");
      })(e3.maxAge), o2.push(`Max-Age=${e3.maxAge}`)), e3.domain && (!(function(e4) {
        if (e4.startsWith("-") || e4.endsWith(".") || e4.endsWith("-")) throw new Error("Invalid cookie domain");
      })(e3.domain), o2.push(`Domain=${e3.domain}`)), e3.path && (a2(e3.path), o2.push(`Path=${e3.path}`)), e3.expires && "Invalid Date" !== e3.expires.toString() && o2.push(`Expires=${s2(e3.expires)}`), e3.sameSite && o2.push(`SameSite=${e3.sameSite}`);
      for (const n3 of e3.unparsed) {
        if (!n3.includes("=")) throw new Error("Invalid unparsed");
        const [e4, ...t3] = n3.split("=");
        o2.push(`${e4.trim()}=${t3.join("=")}`);
      }
      return o2.join("; ");
    } };
  }