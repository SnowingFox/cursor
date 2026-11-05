// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 3631 range:672745..678164
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3631: (e2, a2, n2) => {
    const t2 = n2(2613), { atob: s2 } = n2(181), { isomorphicDecode: o2 } = n2(5728), r2 = new TextEncoder(), i2 = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, l = /(\u000A|\u000D|\u0009|\u0020)/, d = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function m(e3, a3 = false) {
      if (!a3) return e3.href;
      const n3 = e3.href, t3 = e3.hash.length;
      return 0 === t3 ? n3 : n3.substring(0, n3.length - t3);
    }
    function c(e3, a3, n3) {
      let t3 = "";
      for (; n3.position < a3.length && e3(a3[n3.position]); ) t3 += a3[n3.position], n3.position++;
      return t3;
    }
    function p(e3, a3, n3) {
      const t3 = a3.indexOf(e3, n3.position), s3 = n3.position;
      return -1 === t3 ? (n3.position = a3.length, a3.slice(s3)) : (n3.position = t3, a3.slice(s3, n3.position));
    }
    function A(e3) {
      return (function(e4) {
        const a3 = [];
        for (let n3 = 0; n3 < e4.length; n3++) {
          const t3 = e4[n3];
          if (37 !== t3) a3.push(t3);
          else if (37 !== t3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e4[n3 + 1], e4[n3 + 2]))) {
            const t4 = String.fromCharCode(e4[n3 + 1], e4[n3 + 2]), s3 = Number.parseInt(t4, 16);
            a3.push(s3), n3 += 2;
          } else a3.push(37);
        }
        return Uint8Array.from(a3);
      })(r2.encode(e3));
    }
    function u(e3) {
      const a3 = { position: 0 }, n3 = p("/", e3 = h(e3, true, true), a3);
      if (0 === n3.length || !i2.test(n3)) return "failure";
      if (a3.position > e3.length) return "failure";
      a3.position++;
      let t3 = p(";", e3, a3);
      if (t3 = h(t3, false, true), 0 === t3.length || !i2.test(t3)) return "failure";
      const s3 = n3.toLowerCase(), o3 = t3.toLowerCase(), r3 = { type: s3, subtype: o3, parameters: /* @__PURE__ */ new Map(), essence: `${s3}/${o3}` };
      for (; a3.position < e3.length; ) {
        a3.position++, c((e4) => l.test(e4), e3, a3);
        let n4 = c((e4) => ";" !== e4 && "=" !== e4, e3, a3);
        if (n4 = n4.toLowerCase(), a3.position < e3.length) {
          if (";" === e3[a3.position]) continue;
          a3.position++;
        }
        if (a3.position > e3.length) break;
        let t4 = null;
        if ('"' === e3[a3.position]) t4 = g(e3, a3, true), p(";", e3, a3);
        else if (t4 = p(";", e3, a3), t4 = h(t4, false, true), 0 === t4.length) continue;
        0 === n4.length || !i2.test(n4) || 0 !== t4.length && !d.test(t4) || r3.parameters.has(n4) || r3.parameters.set(n4, t4);
      }
      return r3;
    }
    function g(e3, a3, n3) {
      const s3 = a3.position;
      let o3 = "";
      for (t2('"' === e3[a3.position]), a3.position++; o3 += c((e4) => '"' !== e4 && "\\" !== e4, e3, a3), !(a3.position >= e3.length); ) {
        const n4 = e3[a3.position];
        if (a3.position++, "\\" !== n4) {
          t2('"' === n4);
          break;
        }
        if (a3.position >= e3.length) {
          o3 += "\\";
          break;
        }
        o3 += e3[a3.position], a3.position++;
      }
      return n3 ? o3 : e3.slice(s3, a3.position);
    }
    function T(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || " " === e3;
    }
    function h(e3, a3 = true, n3 = true) {
      let t3 = 0, s3 = e3.length - 1;
      if (a3) for (; t3 < e3.length && T(e3[t3]); t3++) ;
      if (n3) for (; s3 > 0 && T(e3[s3]); s3--) ;
      return e3.slice(t3, s3 + 1);
    }
    function k(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || "\f" === e3 || " " === e3;
    }
    e2.exports = { dataURLProcessor: function(e3) {
      t2("data:" === e3.protocol);
      let a3 = m(e3, true);
      a3 = a3.slice(5);
      const n3 = { position: 0 };
      let r3 = p(",", a3, n3);
      const i3 = r3.length;
      if (r3 = (function(e4, a4 = true, n4 = true) {
        let t3 = 0, s3 = e4.length - 1;
        if (a4) for (; t3 < e4.length && k(e4[t3]); t3++) ;
        if (n4) for (; s3 > 0 && k(e4[s3]); s3--) ;
        return e4.slice(t3, s3 + 1);
      })(r3, true, true), n3.position >= a3.length) return "failure";
      n3.position++;
      let l2 = A(a3.slice(i3 + 1));
      if (/;(\u0020){0,}base64$/i.test(r3)) {
        if (l2 = (function(e4) {
          (e4 = e4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e4 = e4.replace(/=?=$/, ""));
          if (e4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e4)) return "failure";
          const a4 = s2(e4), n4 = new Uint8Array(a4.length);
          for (let e5 = 0; e5 < a4.length; e5++) n4[e5] = a4.charCodeAt(e5);
          return n4;
        })(o2(l2)), "failure" === l2) return "failure";
        r3 = r3.slice(0, -6), r3 = r3.replace(/(\u0020)+$/, ""), r3 = r3.slice(0, -1);
      }
      r3.startsWith(";") && (r3 = "text/plain" + r3);
      let d2 = u(r3);
      return "failure" === d2 && (d2 = u("text/plain;charset=US-ASCII")), { mimeType: d2, body: l2 };
    }, URLSerializer: m, collectASequenceOfCodePoints: c, collectASequenceOfCodePointsFast: p, stringPercentDecode: A, parseMIMEType: u, collectAnHTTPQuotedString: g, serializeAMimeType: function(e3) {
      t2("failure" !== e3);
      const { parameters: a3, essence: n3 } = e3;
      let s3 = n3;
      for (let [e4, n4] of a3.entries()) s3 += ";", s3 += e4, s3 += "=", i2.test(n4) || (n4 = n4.replace(/(\\|")/g, "\\$1"), n4 = '"' + n4, n4 += '"'), s3 += n4;
      return s3;
    } };
  }