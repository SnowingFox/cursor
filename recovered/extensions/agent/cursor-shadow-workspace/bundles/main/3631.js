// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 3631 range:367012..372424
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3631: (e2, A2, t2) => {
    const n2 = t2(2613), { atob: r2 } = t2(181), { isomorphicDecode: o2 } = t2(5728), s = new TextEncoder(), a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, i = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function l(e3, A3 = false) {
      if (!A3) return e3.href;
      const t3 = e3.href, n3 = e3.hash.length;
      return 0 === n3 ? t3 : t3.substring(0, t3.length - n3);
    }
    function g(e3, A3, t3) {
      let n3 = "";
      for (; t3.position < A3.length && e3(A3[t3.position]); ) n3 += A3[t3.position], t3.position++;
      return n3;
    }
    function E(e3, A3, t3) {
      const n3 = A3.indexOf(e3, t3.position), r3 = t3.position;
      return -1 === n3 ? (t3.position = A3.length, A3.slice(r3)) : (t3.position = n3, A3.slice(r3, t3.position));
    }
    function u(e3) {
      return (function(e4) {
        const A3 = [];
        for (let t3 = 0; t3 < e4.length; t3++) {
          const n3 = e4[t3];
          if (37 !== n3) A3.push(n3);
          else if (37 !== n3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e4[t3 + 1], e4[t3 + 2]))) {
            const n4 = String.fromCharCode(e4[t3 + 1], e4[t3 + 2]), r3 = Number.parseInt(n4, 16);
            A3.push(r3), t3 += 2;
          } else A3.push(37);
        }
        return Uint8Array.from(A3);
      })(s.encode(e3));
    }
    function d(e3) {
      const A3 = { position: 0 }, t3 = E("/", e3 = Q(e3, true, true), A3);
      if (0 === t3.length || !a.test(t3)) return "failure";
      if (A3.position > e3.length) return "failure";
      A3.position++;
      let n3 = E(";", e3, A3);
      if (n3 = Q(n3, false, true), 0 === n3.length || !a.test(n3)) return "failure";
      const r3 = t3.toLowerCase(), o3 = n3.toLowerCase(), s2 = { type: r3, subtype: o3, parameters: /* @__PURE__ */ new Map(), essence: `${r3}/${o3}` };
      for (; A3.position < e3.length; ) {
        A3.position++, g((e4) => i.test(e4), e3, A3);
        let t4 = g((e4) => ";" !== e4 && "=" !== e4, e3, A3);
        if (t4 = t4.toLowerCase(), A3.position < e3.length) {
          if (";" === e3[A3.position]) continue;
          A3.position++;
        }
        if (A3.position > e3.length) break;
        let n4 = null;
        if ('"' === e3[A3.position]) n4 = I(e3, A3, true), E(";", e3, A3);
        else if (n4 = E(";", e3, A3), n4 = Q(n4, false, true), 0 === n4.length) continue;
        0 === t4.length || !a.test(t4) || 0 !== n4.length && !c.test(n4) || s2.parameters.has(t4) || s2.parameters.set(t4, n4);
      }
      return s2;
    }
    function I(e3, A3, t3) {
      const r3 = A3.position;
      let o3 = "";
      for (n2('"' === e3[A3.position]), A3.position++; o3 += g((e4) => '"' !== e4 && "\\" !== e4, e3, A3), !(A3.position >= e3.length); ) {
        const t4 = e3[A3.position];
        if (A3.position++, "\\" !== t4) {
          n2('"' === t4);
          break;
        }
        if (A3.position >= e3.length) {
          o3 += "\\";
          break;
        }
        o3 += e3[A3.position], A3.position++;
      }
      return t3 ? o3 : e3.slice(r3, A3.position);
    }
    function h(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || " " === e3;
    }
    function Q(e3, A3 = true, t3 = true) {
      let n3 = 0, r3 = e3.length - 1;
      if (A3) for (; n3 < e3.length && h(e3[n3]); n3++) ;
      if (t3) for (; r3 > 0 && h(e3[r3]); r3--) ;
      return e3.slice(n3, r3 + 1);
    }
    function m(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || "\f" === e3 || " " === e3;
    }
    e2.exports = { dataURLProcessor: function(e3) {
      n2("data:" === e3.protocol);
      let A3 = l(e3, true);
      A3 = A3.slice(5);
      const t3 = { position: 0 };
      let s2 = E(",", A3, t3);
      const a2 = s2.length;
      if (s2 = (function(e4, A4 = true, t4 = true) {
        let n3 = 0, r3 = e4.length - 1;
        if (A4) for (; n3 < e4.length && m(e4[n3]); n3++) ;
        if (t4) for (; r3 > 0 && m(e4[r3]); r3--) ;
        return e4.slice(n3, r3 + 1);
      })(s2, true, true), t3.position >= A3.length) return "failure";
      t3.position++;
      let i2 = u(A3.slice(a2 + 1));
      if (/;(\u0020){0,}base64$/i.test(s2)) {
        if (i2 = (function(e4) {
          (e4 = e4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e4 = e4.replace(/=?=$/, ""));
          if (e4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e4)) return "failure";
          const A4 = r2(e4), t4 = new Uint8Array(A4.length);
          for (let e5 = 0; e5 < A4.length; e5++) t4[e5] = A4.charCodeAt(e5);
          return t4;
        })(o2(i2)), "failure" === i2) return "failure";
        s2 = s2.slice(0, -6), s2 = s2.replace(/(\u0020)+$/, ""), s2 = s2.slice(0, -1);
      }
      s2.startsWith(";") && (s2 = "text/plain" + s2);
      let c2 = d(s2);
      return "failure" === c2 && (c2 = d("text/plain;charset=US-ASCII")), { mimeType: c2, body: i2 };
    }, URLSerializer: l, collectASequenceOfCodePoints: g, collectASequenceOfCodePointsFast: E, stringPercentDecode: u, parseMIMEType: d, collectAnHTTPQuotedString: I, serializeAMimeType: function(e3) {
      n2("failure" !== e3);
      const { parameters: A3, essence: t3 } = e3;
      let r3 = t3;
      for (let [e4, t4] of A3.entries()) r3 += ";", r3 += e4, r3 += "=", a.test(t4) || (t4 = t4.replace(/(\\|")/g, "\\$1"), t4 = '"' + t4, t4 += '"'), r3 += t4;
      return r3;
    } };
  }