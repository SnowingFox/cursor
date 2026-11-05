// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 64387 range:10310855..10316256
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
64387: (e, t, r) => {
    const n = r(42613), { atob: s } = r(20181), { isomorphicDecode: o } = r(98116), i = new TextEncoder(), a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, c = /(\u000A|\u000D|\u0009|\u0020)/, l = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function u(e2, t2 = false) {
      if (!t2) return e2.href;
      const r2 = e2.href, n2 = e2.hash.length;
      return 0 === n2 ? r2 : r2.substring(0, r2.length - n2);
    }
    function d(e2, t2, r2) {
      let n2 = "";
      for (; r2.position < t2.length && e2(t2[r2.position]); ) n2 += t2[r2.position], r2.position++;
      return n2;
    }
    function p(e2, t2, r2) {
      const n2 = t2.indexOf(e2, r2.position), s2 = r2.position;
      return -1 === n2 ? (r2.position = t2.length, t2.slice(s2)) : (r2.position = n2, t2.slice(s2, r2.position));
    }
    function m(e2) {
      return (function(e3) {
        const t2 = [];
        for (let r2 = 0; r2 < e3.length; r2++) {
          const n2 = e3[r2];
          if (37 !== n2) t2.push(n2);
          else if (37 !== n2 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e3[r2 + 1], e3[r2 + 2]))) {
            const n3 = String.fromCharCode(e3[r2 + 1], e3[r2 + 2]), s2 = Number.parseInt(n3, 16);
            t2.push(s2), r2 += 2;
          } else t2.push(37);
        }
        return Uint8Array.from(t2);
      })(i.encode(e2));
    }
    function h(e2) {
      const t2 = { position: 0 }, r2 = p("/", e2 = y(e2, true, true), t2);
      if (0 === r2.length || !a.test(r2)) return "failure";
      if (t2.position > e2.length) return "failure";
      t2.position++;
      let n2 = p(";", e2, t2);
      if (n2 = y(n2, false, true), 0 === n2.length || !a.test(n2)) return "failure";
      const s2 = r2.toLowerCase(), o2 = n2.toLowerCase(), i2 = { type: s2, subtype: o2, parameters: /* @__PURE__ */ new Map(), essence: `${s2}/${o2}` };
      for (; t2.position < e2.length; ) {
        t2.position++, d((e3) => c.test(e3), e2, t2);
        let r3 = d((e3) => ";" !== e3 && "=" !== e3, e2, t2);
        if (r3 = r3.toLowerCase(), t2.position < e2.length) {
          if (";" === e2[t2.position]) continue;
          t2.position++;
        }
        if (t2.position > e2.length) break;
        let n3 = null;
        if ('"' === e2[t2.position]) n3 = f(e2, t2, true), p(";", e2, t2);
        else if (n3 = p(";", e2, t2), n3 = y(n3, false, true), 0 === n3.length) continue;
        0 === r3.length || !a.test(r3) || 0 !== n3.length && !l.test(n3) || i2.parameters.has(r3) || i2.parameters.set(r3, n3);
      }
      return i2;
    }
    function f(e2, t2, r2) {
      const s2 = t2.position;
      let o2 = "";
      for (n('"' === e2[t2.position]), t2.position++; o2 += d((e3) => '"' !== e3 && "\\" !== e3, e2, t2), !(t2.position >= e2.length); ) {
        const r3 = e2[t2.position];
        if (t2.position++, "\\" !== r3) {
          n('"' === r3);
          break;
        }
        if (t2.position >= e2.length) {
          o2 += "\\";
          break;
        }
        o2 += e2[t2.position], t2.position++;
      }
      return r2 ? o2 : e2.slice(s2, t2.position);
    }
    function g(e2) {
      return "\r" === e2 || "\n" === e2 || "	" === e2 || " " === e2;
    }
    function y(e2, t2 = true, r2 = true) {
      let n2 = 0, s2 = e2.length - 1;
      if (t2) for (; n2 < e2.length && g(e2[n2]); n2++) ;
      if (r2) for (; s2 > 0 && g(e2[s2]); s2--) ;
      return e2.slice(n2, s2 + 1);
    }
    function w(e2) {
      return "\r" === e2 || "\n" === e2 || "	" === e2 || "\f" === e2 || " " === e2;
    }
    e.exports = { dataURLProcessor: function(e2) {
      n("data:" === e2.protocol);
      let t2 = u(e2, true);
      t2 = t2.slice(5);
      const r2 = { position: 0 };
      let i2 = p(",", t2, r2);
      const a2 = i2.length;
      if (i2 = (function(e3, t3 = true, r3 = true) {
        let n2 = 0, s2 = e3.length - 1;
        if (t3) for (; n2 < e3.length && w(e3[n2]); n2++) ;
        if (r3) for (; s2 > 0 && w(e3[s2]); s2--) ;
        return e3.slice(n2, s2 + 1);
      })(i2, true, true), r2.position >= t2.length) return "failure";
      r2.position++;
      let c2 = m(t2.slice(a2 + 1));
      if (/;(\u0020){0,}base64$/i.test(i2)) {
        if (c2 = (function(e3) {
          (e3 = e3.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e3 = e3.replace(/=?=$/, ""));
          if (e3.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e3)) return "failure";
          const t3 = s(e3), r3 = new Uint8Array(t3.length);
          for (let e4 = 0; e4 < t3.length; e4++) r3[e4] = t3.charCodeAt(e4);
          return r3;
        })(o(c2)), "failure" === c2) return "failure";
        i2 = i2.slice(0, -6), i2 = i2.replace(/(\u0020)+$/, ""), i2 = i2.slice(0, -1);
      }
      i2.startsWith(";") && (i2 = "text/plain" + i2);
      let l2 = h(i2);
      return "failure" === l2 && (l2 = h("text/plain;charset=US-ASCII")), { mimeType: l2, body: c2 };
    }, URLSerializer: u, collectASequenceOfCodePoints: d, collectASequenceOfCodePointsFast: p, stringPercentDecode: m, parseMIMEType: h, collectAnHTTPQuotedString: f, serializeAMimeType: function(e2) {
      n("failure" !== e2);
      const { parameters: t2, essence: r2 } = e2;
      let s2 = r2;
      for (let [e3, r3] of t2.entries()) s2 += ";", s2 += e3, s2 += "=", a.test(r3) || (r3 = r3.replace(/(\\|")/g, "\\$1"), r3 = '"' + r3, r3 += '"'), s2 += r3;
      return s2;
    } };
  }