// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 52603 range:287427..294117
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
52603: (A, e, t) => {
  "use strict";
  const r = t(56970), s = new TextEncoder(), o = /^[!#$%&'*+\-.^_|~A-Za-z0-9]+$/, n = /[\u000A\u000D\u0009\u0020]/, i = /[\u0009\u000A\u000C\u000D\u0020]/g, a = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function Q(A2, e2 = false) {
    if (!e2) return A2.href;
    const t2 = A2.href, r2 = A2.hash.length, s2 = 0 === r2 ? t2 : t2.substring(0, t2.length - r2);
    return !r2 && t2.endsWith("#") ? s2.slice(0, -1) : s2;
  }
  function g(A2, e2, t2) {
    let r2 = "";
    for (; t2.position < e2.length && A2(e2[t2.position]); ) r2 += e2[t2.position], t2.position++;
    return r2;
  }
  function E(A2, e2, t2) {
    const r2 = e2.indexOf(A2, t2.position), s2 = t2.position;
    return -1 === r2 ? (t2.position = e2.length, e2.slice(s2)) : (t2.position = r2, e2.slice(s2, t2.position));
  }
  function B(A2) {
    return (function(A3) {
      const e2 = A3.length, t2 = new Uint8Array(e2);
      let r2 = 0;
      for (let s2 = 0; s2 < e2; ++s2) {
        const e3 = A3[s2];
        37 !== e3 ? t2[r2++] = e3 : 37 !== e3 || c(A3[s2 + 1]) && c(A3[s2 + 2]) ? (t2[r2++] = I(A3[s2 + 1]) << 4 | I(A3[s2 + 2]), s2 += 2) : t2[r2++] = 37;
      }
      return e2 === r2 ? t2 : t2.subarray(0, r2);
    })(s.encode(A2));
  }
  function c(A2) {
    return A2 >= 48 && A2 <= 57 || A2 >= 65 && A2 <= 70 || A2 >= 97 && A2 <= 102;
  }
  function I(A2) {
    return A2 >= 48 && A2 <= 57 ? A2 - 48 : (223 & A2) - 55;
  }
  function C(A2) {
    const e2 = { position: 0 }, t2 = E("/", A2 = u(A2, true, true), e2);
    if (0 === t2.length || !o.test(t2)) return "failure";
    if (e2.position > A2.length) return "failure";
    e2.position++;
    let r2 = E(";", A2, e2);
    if (r2 = u(r2, false, true), 0 === r2.length || !o.test(r2)) return "failure";
    const s2 = t2.toLowerCase(), i2 = r2.toLowerCase(), Q2 = { type: s2, subtype: i2, parameters: /* @__PURE__ */ new Map(), essence: `${s2}/${i2}` };
    for (; e2.position < A2.length; ) {
      e2.position++, g((A3) => n.test(A3), A2, e2);
      let t3 = g((A3) => ";" !== A3 && "=" !== A3, A2, e2);
      if (t3 = t3.toLowerCase(), e2.position < A2.length) {
        if (";" === A2[e2.position]) continue;
        e2.position++;
      }
      if (e2.position > A2.length) break;
      let r3 = null;
      if ('"' === A2[e2.position]) r3 = h(A2, e2, true), E(";", A2, e2);
      else if (r3 = E(";", A2, e2), r3 = u(r3, false, true), 0 === r3.length) continue;
      0 === t3.length || !o.test(t3) || 0 !== r3.length && !a.test(r3) || Q2.parameters.has(t3) || Q2.parameters.set(t3, r3);
    }
    return Q2;
  }
  function h(A2, e2, t2) {
    const s2 = e2.position;
    let o2 = "";
    for (r('"' === A2[e2.position]), e2.position++; o2 += g((A3) => '"' !== A3 && "\\" !== A3, A2, e2), !(e2.position >= A2.length); ) {
      const t3 = A2[e2.position];
      if (e2.position++, "\\" !== t3) {
        r('"' === t3);
        break;
      }
      if (e2.position >= A2.length) {
        o2 += "\\";
        break;
      }
      o2 += A2[e2.position], e2.position++;
    }
    return t2 ? o2 : A2.slice(s2, e2.position);
  }
  function l(A2) {
    return 13 === A2 || 10 === A2 || 9 === A2 || 32 === A2;
  }
  function u(A2, e2 = true, t2 = true) {
    return f(A2, e2, t2, l);
  }
  function d(A2) {
    return 13 === A2 || 10 === A2 || 9 === A2 || 12 === A2 || 32 === A2;
  }
  function f(A2, e2, t2, r2) {
    let s2 = 0, o2 = A2.length - 1;
    if (e2) for (; s2 < A2.length && r2(A2.charCodeAt(s2)); ) s2++;
    if (t2) for (; o2 > 0 && r2(A2.charCodeAt(o2)); ) o2--;
    return 0 === s2 && o2 === A2.length - 1 ? A2 : A2.slice(s2, o2 + 1);
  }
  function w(A2) {
    const e2 = A2.length;
    if (65535 > e2) return String.fromCharCode.apply(null, A2);
    let t2 = "", r2 = 0, s2 = 65535;
    for (; r2 < e2; ) r2 + s2 > e2 && (s2 = e2 - r2), t2 += String.fromCharCode.apply(null, A2.subarray(r2, r2 += s2));
    return t2;
  }
  A.exports = { dataURLProcessor: function(A2) {
    r("data:" === A2.protocol);
    let e2 = Q(A2, true);
    e2 = e2.slice(5);
    const t2 = { position: 0 };
    let s2 = E(",", e2, t2);
    const o2 = s2.length;
    if (s2 = (function(A3, e3 = true, t3 = true) {
      return f(A3, e3, t3, d);
    })(s2, true, true), t2.position >= e2.length) return "failure";
    t2.position++;
    let n2 = B(e2.slice(o2 + 1));
    if (/;(\u0020){0,}base64$/i.test(s2)) {
      if (n2 = (function(A3) {
        let e3 = (A3 = A3.replace(i, "")).length;
        e3 % 4 == 0 && 61 === A3.charCodeAt(e3 - 1) && (--e3, 61 === A3.charCodeAt(e3 - 1) && --e3);
        if (e3 % 4 == 1) return "failure";
        if (/[^+/0-9A-Za-z]/.test(A3.length === e3 ? A3 : A3.substring(0, e3))) return "failure";
        const t3 = Buffer.from(A3, "base64");
        return new Uint8Array(t3.buffer, t3.byteOffset, t3.byteLength);
      })(w(n2)), "failure" === n2) return "failure";
      s2 = s2.slice(0, -6), s2 = s2.replace(/(\u0020)+$/, ""), s2 = s2.slice(0, -1);
    }
    s2.startsWith(";") && (s2 = "text/plain" + s2);
    let a2 = C(s2);
    return "failure" === a2 && (a2 = C("text/plain;charset=US-ASCII")), { mimeType: a2, body: n2 };
  }, URLSerializer: Q, collectASequenceOfCodePoints: g, collectASequenceOfCodePointsFast: E, stringPercentDecode: B, parseMIMEType: C, collectAnHTTPQuotedString: h, serializeAMimeType: function(A2) {
    r("failure" !== A2);
    const { parameters: e2, essence: t2 } = A2;
    let s2 = t2;
    for (let [A3, t3] of e2.entries()) s2 += ";", s2 += A3, s2 += "=", o.test(t3) || (t3 = t3.replace(/(\\|")/g, "\\$1"), t3 = '"' + t3, t3 += '"'), s2 += t3;
    return s2;
  }, removeChars: f, removeHTTPWhitespace: u, minimizeSupportedMimeType: function(A2) {
    switch (A2.essence) {
      case "application/ecmascript":
      case "application/javascript":
      case "application/x-ecmascript":
      case "application/x-javascript":
      case "text/ecmascript":
      case "text/javascript":
      case "text/javascript1.0":
      case "text/javascript1.1":
      case "text/javascript1.2":
      case "text/javascript1.3":
      case "text/javascript1.4":
      case "text/javascript1.5":
      case "text/jscript":
      case "text/livescript":
      case "text/x-ecmascript":
      case "text/x-javascript":
        return "text/javascript";
      case "application/json":
      case "text/json":
        return "application/json";
      case "image/svg+xml":
        return "image/svg+xml";
      case "text/xml":
      case "application/xml":
        return "application/xml";
    }
    return A2.subtype.endsWith("+json") ? "application/json" : A2.subtype.endsWith("+xml") ? "application/xml" : "";
  }, HTTP_TOKEN_CODEPOINTS: o, isomorphicDecode: w };
}