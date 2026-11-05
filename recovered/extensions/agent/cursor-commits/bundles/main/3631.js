// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 3631 range:367266..372685
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3631: (e2, n2, a2) => {
    const t2 = a2(2613), { atob: s2 } = a2(181), { isomorphicDecode: o2 } = a2(5728), r2 = new TextEncoder(), i2 = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, A = /(\u000A|\u000D|\u0009|\u0020)/, l = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function c(e3, n3 = false) {
      if (!n3) return e3.href;
      const a3 = e3.href, t3 = e3.hash.length;
      return 0 === t3 ? a3 : a3.substring(0, a3.length - t3);
    }
    function m(e3, n3, a3) {
      let t3 = "";
      for (; a3.position < n3.length && e3(n3[a3.position]); ) t3 += n3[a3.position], a3.position++;
      return t3;
    }
    function d(e3, n3, a3) {
      const t3 = n3.indexOf(e3, a3.position), s3 = a3.position;
      return -1 === t3 ? (a3.position = n3.length, n3.slice(s3)) : (a3.position = t3, n3.slice(s3, a3.position));
    }
    function g(e3) {
      return (function(e4) {
        const n3 = [];
        for (let a3 = 0; a3 < e4.length; a3++) {
          const t3 = e4[a3];
          if (37 !== t3) n3.push(t3);
          else if (37 !== t3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e4[a3 + 1], e4[a3 + 2]))) {
            const t4 = String.fromCharCode(e4[a3 + 1], e4[a3 + 2]), s3 = Number.parseInt(t4, 16);
            n3.push(s3), a3 += 2;
          } else n3.push(37);
        }
        return Uint8Array.from(n3);
      })(r2.encode(e3));
    }
    function u(e3) {
      const n3 = { position: 0 }, a3 = d("/", e3 = T(e3, true, true), n3);
      if (0 === a3.length || !i2.test(a3)) return "failure";
      if (n3.position > e3.length) return "failure";
      n3.position++;
      let t3 = d(";", e3, n3);
      if (t3 = T(t3, false, true), 0 === t3.length || !i2.test(t3)) return "failure";
      const s3 = a3.toLowerCase(), o3 = t3.toLowerCase(), r3 = { type: s3, subtype: o3, parameters: /* @__PURE__ */ new Map(), essence: `${s3}/${o3}` };
      for (; n3.position < e3.length; ) {
        n3.position++, m((e4) => A.test(e4), e3, n3);
        let a4 = m((e4) => ";" !== e4 && "=" !== e4, e3, n3);
        if (a4 = a4.toLowerCase(), n3.position < e3.length) {
          if (";" === e3[n3.position]) continue;
          n3.position++;
        }
        if (n3.position > e3.length) break;
        let t4 = null;
        if ('"' === e3[n3.position]) t4 = E(e3, n3, true), d(";", e3, n3);
        else if (t4 = d(";", e3, n3), t4 = T(t4, false, true), 0 === t4.length) continue;
        0 === a4.length || !i2.test(a4) || 0 !== t4.length && !l.test(t4) || r3.parameters.has(a4) || r3.parameters.set(a4, t4);
      }
      return r3;
    }
    function E(e3, n3, a3) {
      const s3 = n3.position;
      let o3 = "";
      for (t2('"' === e3[n3.position]), n3.position++; o3 += m((e4) => '"' !== e4 && "\\" !== e4, e3, n3), !(n3.position >= e3.length); ) {
        const a4 = e3[n3.position];
        if (n3.position++, "\\" !== a4) {
          t2('"' === a4);
          break;
        }
        if (n3.position >= e3.length) {
          o3 += "\\";
          break;
        }
        o3 += e3[n3.position], n3.position++;
      }
      return a3 ? o3 : e3.slice(s3, n3.position);
    }
    function p(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || " " === e3;
    }
    function T(e3, n3 = true, a3 = true) {
      let t3 = 0, s3 = e3.length - 1;
      if (n3) for (; t3 < e3.length && p(e3[t3]); t3++) ;
      if (a3) for (; s3 > 0 && p(e3[s3]); s3--) ;
      return e3.slice(t3, s3 + 1);
    }
    function k(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || "\f" === e3 || " " === e3;
    }
    e2.exports = { dataURLProcessor: function(e3) {
      t2("data:" === e3.protocol);
      let n3 = c(e3, true);
      n3 = n3.slice(5);
      const a3 = { position: 0 };
      let r3 = d(",", n3, a3);
      const i3 = r3.length;
      if (r3 = (function(e4, n4 = true, a4 = true) {
        let t3 = 0, s3 = e4.length - 1;
        if (n4) for (; t3 < e4.length && k(e4[t3]); t3++) ;
        if (a4) for (; s3 > 0 && k(e4[s3]); s3--) ;
        return e4.slice(t3, s3 + 1);
      })(r3, true, true), a3.position >= n3.length) return "failure";
      a3.position++;
      let A2 = g(n3.slice(i3 + 1));
      if (/;(\u0020){0,}base64$/i.test(r3)) {
        if (A2 = (function(e4) {
          (e4 = e4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e4 = e4.replace(/=?=$/, ""));
          if (e4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e4)) return "failure";
          const n4 = s2(e4), a4 = new Uint8Array(n4.length);
          for (let e5 = 0; e5 < n4.length; e5++) a4[e5] = n4.charCodeAt(e5);
          return a4;
        })(o2(A2)), "failure" === A2) return "failure";
        r3 = r3.slice(0, -6), r3 = r3.replace(/(\u0020)+$/, ""), r3 = r3.slice(0, -1);
      }
      r3.startsWith(";") && (r3 = "text/plain" + r3);
      let l2 = u(r3);
      return "failure" === l2 && (l2 = u("text/plain;charset=US-ASCII")), { mimeType: l2, body: A2 };
    }, URLSerializer: c, collectASequenceOfCodePoints: m, collectASequenceOfCodePointsFast: d, stringPercentDecode: g, parseMIMEType: u, collectAnHTTPQuotedString: E, serializeAMimeType: function(e3) {
      t2("failure" !== e3);
      const { parameters: n3, essence: a3 } = e3;
      let s3 = a3;
      for (let [e4, a4] of n3.entries()) s3 += ";", s3 += e4, s3 += "=", i2.test(a4) || (a4 = a4.replace(/(\\|")/g, "\\$1"), a4 = '"' + a4, a4 += '"'), s3 += a4;
      return s3;
    } };
  }