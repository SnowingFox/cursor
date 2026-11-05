// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 41230 range:226542..230271
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41230: (A) => {
  "use strict";
  function e(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (t2 < 33 || t2 > 126 || 34 === t2 || 40 === t2 || 41 === t2 || 60 === t2 || 62 === t2 || 64 === t2 || 44 === t2 || 59 === t2 || 58 === t2 || 92 === t2 || 47 === t2 || 91 === t2 || 93 === t2 || 63 === t2 || 61 === t2 || 123 === t2 || 125 === t2) throw new Error("Invalid cookie name");
    }
  }
  function t(A2) {
    let e2 = A2.length, t2 = 0;
    if ('"' === A2[0]) {
      if (1 === e2 || '"' !== A2[e2 - 1]) throw new Error("Invalid cookie value");
      --e2, ++t2;
    }
    for (; t2 < e2; ) {
      const e3 = A2.charCodeAt(t2++);
      if (e3 < 33 || e3 > 126 || 34 === e3 || 44 === e3 || 59 === e3 || 92 === e3) throw new Error("Invalid cookie value");
    }
  }
  function r(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (t2 < 32 || t2 > 126 || 59 === t2) throw new Error("Invalid cookie path");
    }
  }
  function s(A2) {
    return A2 >= 48 && A2 <= 57 || A2 >= 65 && A2 <= 90 || A2 >= 97 && A2 <= 122;
  }
  const o = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], n = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], i = Array(61).fill(0).map((A2, e2) => e2.toString().padStart(2, "0"));
  function a(A2) {
    return "number" == typeof A2 && (A2 = new Date(A2)), `${o[A2.getUTCDay()]}, ${i[A2.getUTCDate()]} ${n[A2.getUTCMonth()]} ${A2.getUTCFullYear()} ${i[A2.getUTCHours()]}:${i[A2.getUTCMinutes()]}:${i[A2.getUTCSeconds()]} GMT`;
  }
  A.exports = { isCTLExcludingHtab: function(A2) {
    for (let e2 = 0; e2 < A2.length; ++e2) {
      const t2 = A2.charCodeAt(e2);
      if (t2 >= 0 && t2 <= 8 || t2 >= 10 && t2 <= 31 || 127 === t2) return true;
    }
    return false;
  }, validateCookieName: e, validateCookiePath: r, validateCookieValue: t, toIMFDate: a, stringify: function(A2) {
    if (0 === A2.name.length) return null;
    e(A2.name), t(A2.value);
    const o2 = [`${A2.name}=${A2.value}`];
    A2.name.startsWith("__Secure-") && (A2.secure = true), A2.name.startsWith("__Host-") && (A2.secure = true, A2.domain = null, A2.path = "/"), A2.secure && o2.push("Secure"), A2.httpOnly && o2.push("HttpOnly"), "number" == typeof A2.maxAge && (!(function(A3) {
      if (A3 < 0) throw new Error("Invalid cookie max-age");
    })(A2.maxAge), o2.push(`Max-Age=${A2.maxAge}`)), A2.domain && (!(function(A3) {
      if (" " === A3) return;
      if (A3.length > 255) throw new Error("Invalid cookie domain");
      let e2 = 0;
      for (let t2 = 0; t2 < A3.length; ++t2) {
        const r2 = A3.charCodeAt(t2);
        if (46 !== r2) {
          if (0 === e2 && !s(r2)) throw new Error("Invalid cookie domain");
          if (!s(r2) && 45 !== r2) throw new Error("Invalid cookie domain");
          if (++e2 > 63) throw new Error("Invalid cookie domain");
        } else {
          if (0 === e2) throw new Error("Invalid cookie domain");
          if (45 === A3.charCodeAt(t2 - 1)) throw new Error("Invalid cookie domain");
          e2 = 0;
        }
      }
      if (0 === e2 || 45 === A3.charCodeAt(A3.length - 1)) throw new Error("Invalid cookie domain");
    })(A2.domain), o2.push(`Domain=${A2.domain}`)), A2.path && (r(A2.path), o2.push(`Path=${A2.path}`)), A2.expires && "Invalid Date" !== A2.expires.toString() && o2.push(`Expires=${a(A2.expires)}`), A2.sameSite && o2.push(`SameSite=${A2.sameSite}`);
    for (const r2 of A2.unparsed) {
      if (!r2.includes("=")) throw new Error("Invalid unparsed");
      const [A3, ...s2] = r2.split("="), n2 = A3.trim(), i2 = s2.join("=");
      e(n2), t(i2), o2.push(`${n2}=${i2}`);
    }
    return o2.join("; ");
  } };
}