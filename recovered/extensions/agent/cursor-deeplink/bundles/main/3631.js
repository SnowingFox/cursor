// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 3631 range:463434..468846
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3631: (e2, t2, A2) => {
    const n2 = A2(2613), { atob: r2 } = A2(181), { isomorphicDecode: o2 } = A2(5728), s = new TextEncoder(), i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, a = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function l(e3, t3 = false) {
      if (!t3) return e3.href;
      const A3 = e3.href, n3 = e3.hash.length;
      return 0 === n3 ? A3 : A3.substring(0, A3.length - n3);
    }
    function u(e3, t3, A3) {
      let n3 = "";
      for (; A3.position < t3.length && e3(t3[A3.position]); ) n3 += t3[A3.position], A3.position++;
      return n3;
    }
    function g(e3, t3, A3) {
      const n3 = t3.indexOf(e3, A3.position), r3 = A3.position;
      return -1 === n3 ? (A3.position = t3.length, t3.slice(r3)) : (A3.position = n3, t3.slice(r3, A3.position));
    }
    function E(e3) {
      return (function(e4) {
        const t3 = [];
        for (let A3 = 0; A3 < e4.length; A3++) {
          const n3 = e4[A3];
          if (37 !== n3) t3.push(n3);
          else if (37 !== n3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e4[A3 + 1], e4[A3 + 2]))) {
            const n4 = String.fromCharCode(e4[A3 + 1], e4[A3 + 2]), r3 = Number.parseInt(n4, 16);
            t3.push(r3), A3 += 2;
          } else t3.push(37);
        }
        return Uint8Array.from(t3);
      })(s.encode(e3));
    }
    function h(e3) {
      const t3 = { position: 0 }, A3 = g("/", e3 = B(e3, true, true), t3);
      if (0 === A3.length || !i.test(A3)) return "failure";
      if (t3.position > e3.length) return "failure";
      t3.position++;
      let n3 = g(";", e3, t3);
      if (n3 = B(n3, false, true), 0 === n3.length || !i.test(n3)) return "failure";
      const r3 = A3.toLowerCase(), o3 = n3.toLowerCase(), s2 = { type: r3, subtype: o3, parameters: /* @__PURE__ */ new Map(), essence: `${r3}/${o3}` };
      for (; t3.position < e3.length; ) {
        t3.position++, u((e4) => a.test(e4), e3, t3);
        let A4 = u((e4) => ";" !== e4 && "=" !== e4, e3, t3);
        if (A4 = A4.toLowerCase(), t3.position < e3.length) {
          if (";" === e3[t3.position]) continue;
          t3.position++;
        }
        if (t3.position > e3.length) break;
        let n4 = null;
        if ('"' === e3[t3.position]) n4 = d(e3, t3, true), g(";", e3, t3);
        else if (n4 = g(";", e3, t3), n4 = B(n4, false, true), 0 === n4.length) continue;
        0 === A4.length || !i.test(A4) || 0 !== n4.length && !c.test(n4) || s2.parameters.has(A4) || s2.parameters.set(A4, n4);
      }
      return s2;
    }
    function d(e3, t3, A3) {
      const r3 = t3.position;
      let o3 = "";
      for (n2('"' === e3[t3.position]), t3.position++; o3 += u((e4) => '"' !== e4 && "\\" !== e4, e3, t3), !(t3.position >= e3.length); ) {
        const A4 = e3[t3.position];
        if (t3.position++, "\\" !== A4) {
          n2('"' === A4);
          break;
        }
        if (t3.position >= e3.length) {
          o3 += "\\";
          break;
        }
        o3 += e3[t3.position], t3.position++;
      }
      return A3 ? o3 : e3.slice(r3, t3.position);
    }
    function I(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || " " === e3;
    }
    function B(e3, t3 = true, A3 = true) {
      let n3 = 0, r3 = e3.length - 1;
      if (t3) for (; n3 < e3.length && I(e3[n3]); n3++) ;
      if (A3) for (; r3 > 0 && I(e3[r3]); r3--) ;
      return e3.slice(n3, r3 + 1);
    }
    function Q(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || "\f" === e3 || " " === e3;
    }
    e2.exports = { dataURLProcessor: function(e3) {
      n2("data:" === e3.protocol);
      let t3 = l(e3, true);
      t3 = t3.slice(5);
      const A3 = { position: 0 };
      let s2 = g(",", t3, A3);
      const i2 = s2.length;
      if (s2 = (function(e4, t4 = true, A4 = true) {
        let n3 = 0, r3 = e4.length - 1;
        if (t4) for (; n3 < e4.length && Q(e4[n3]); n3++) ;
        if (A4) for (; r3 > 0 && Q(e4[r3]); r3--) ;
        return e4.slice(n3, r3 + 1);
      })(s2, true, true), A3.position >= t3.length) return "failure";
      A3.position++;
      let a2 = E(t3.slice(i2 + 1));
      if (/;(\u0020){0,}base64$/i.test(s2)) {
        if (a2 = (function(e4) {
          (e4 = e4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e4 = e4.replace(/=?=$/, ""));
          if (e4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e4)) return "failure";
          const t4 = r2(e4), A4 = new Uint8Array(t4.length);
          for (let e5 = 0; e5 < t4.length; e5++) A4[e5] = t4.charCodeAt(e5);
          return A4;
        })(o2(a2)), "failure" === a2) return "failure";
        s2 = s2.slice(0, -6), s2 = s2.replace(/(\u0020)+$/, ""), s2 = s2.slice(0, -1);
      }
      s2.startsWith(";") && (s2 = "text/plain" + s2);
      let c2 = h(s2);
      return "failure" === c2 && (c2 = h("text/plain;charset=US-ASCII")), { mimeType: c2, body: a2 };
    }, URLSerializer: l, collectASequenceOfCodePoints: u, collectASequenceOfCodePointsFast: g, stringPercentDecode: E, parseMIMEType: h, collectAnHTTPQuotedString: d, serializeAMimeType: function(e3) {
      n2("failure" !== e3);
      const { parameters: t3, essence: A3 } = e3;
      let r3 = A3;
      for (let [e4, A4] of t3.entries()) r3 += ";", r3 += e4, r3 += "=", i.test(A4) || (A4 = A4.replace(/(\\|")/g, "\\$1"), A4 = '"' + A4, A4 += '"'), r3 += A4;
      return r3;
    } };
  }