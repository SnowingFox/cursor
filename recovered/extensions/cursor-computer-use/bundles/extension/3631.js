// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 3631 range:371203..376615
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3631: (e2, n2, t2) => {
    const a2 = t2(2613), { atob: s2 } = t2(181), { isomorphicDecode: o2 } = t2(5728), r = new TextEncoder(), i = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, A = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function l(e3, n3 = false) {
      if (!n3) return e3.href;
      const t3 = e3.href, a3 = e3.hash.length;
      return 0 === a3 ? t3 : t3.substring(0, t3.length - a3);
    }
    function d(e3, n3, t3) {
      let a3 = "";
      for (; t3.position < n3.length && e3(n3[t3.position]); ) a3 += n3[t3.position], t3.position++;
      return a3;
    }
    function m(e3, n3, t3) {
      const a3 = n3.indexOf(e3, t3.position), s3 = t3.position;
      return -1 === a3 ? (t3.position = n3.length, n3.slice(s3)) : (t3.position = a3, n3.slice(s3, t3.position));
    }
    function u(e3) {
      return (function(e4) {
        const n3 = [];
        for (let t3 = 0; t3 < e4.length; t3++) {
          const a3 = e4[t3];
          if (37 !== a3) n3.push(a3);
          else if (37 !== a3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(e4[t3 + 1], e4[t3 + 2]))) {
            const a4 = String.fromCharCode(e4[t3 + 1], e4[t3 + 2]), s3 = Number.parseInt(a4, 16);
            n3.push(s3), t3 += 2;
          } else n3.push(37);
        }
        return Uint8Array.from(n3);
      })(r.encode(e3));
    }
    function g(e3) {
      const n3 = { position: 0 }, t3 = m("/", e3 = h(e3, true, true), n3);
      if (0 === t3.length || !i.test(t3)) return "failure";
      if (n3.position > e3.length) return "failure";
      n3.position++;
      let a3 = m(";", e3, n3);
      if (a3 = h(a3, false, true), 0 === a3.length || !i.test(a3)) return "failure";
      const s3 = t3.toLowerCase(), o3 = a3.toLowerCase(), r2 = { type: s3, subtype: o3, parameters: /* @__PURE__ */ new Map(), essence: `${s3}/${o3}` };
      for (; n3.position < e3.length; ) {
        n3.position++, d((e4) => A.test(e4), e3, n3);
        let t4 = d((e4) => ";" !== e4 && "=" !== e4, e3, n3);
        if (t4 = t4.toLowerCase(), n3.position < e3.length) {
          if (";" === e3[n3.position]) continue;
          n3.position++;
        }
        if (n3.position > e3.length) break;
        let a4 = null;
        if ('"' === e3[n3.position]) a4 = p(e3, n3, true), m(";", e3, n3);
        else if (a4 = m(";", e3, n3), a4 = h(a4, false, true), 0 === a4.length) continue;
        0 === t4.length || !i.test(t4) || 0 !== a4.length && !c.test(a4) || r2.parameters.has(t4) || r2.parameters.set(t4, a4);
      }
      return r2;
    }
    function p(e3, n3, t3) {
      const s3 = n3.position;
      let o3 = "";
      for (a2('"' === e3[n3.position]), n3.position++; o3 += d((e4) => '"' !== e4 && "\\" !== e4, e3, n3), !(n3.position >= e3.length); ) {
        const t4 = e3[n3.position];
        if (n3.position++, "\\" !== t4) {
          a2('"' === t4);
          break;
        }
        if (n3.position >= e3.length) {
          o3 += "\\";
          break;
        }
        o3 += e3[n3.position], n3.position++;
      }
      return t3 ? o3 : e3.slice(s3, n3.position);
    }
    function E(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || " " === e3;
    }
    function h(e3, n3 = true, t3 = true) {
      let a3 = 0, s3 = e3.length - 1;
      if (n3) for (; a3 < e3.length && E(e3[a3]); a3++) ;
      if (t3) for (; s3 > 0 && E(e3[s3]); s3--) ;
      return e3.slice(a3, s3 + 1);
    }
    function T(e3) {
      return "\r" === e3 || "\n" === e3 || "	" === e3 || "\f" === e3 || " " === e3;
    }
    e2.exports = { dataURLProcessor: function(e3) {
      a2("data:" === e3.protocol);
      let n3 = l(e3, true);
      n3 = n3.slice(5);
      const t3 = { position: 0 };
      let r2 = m(",", n3, t3);
      const i2 = r2.length;
      if (r2 = (function(e4, n4 = true, t4 = true) {
        let a3 = 0, s3 = e4.length - 1;
        if (n4) for (; a3 < e4.length && T(e4[a3]); a3++) ;
        if (t4) for (; s3 > 0 && T(e4[s3]); s3--) ;
        return e4.slice(a3, s3 + 1);
      })(r2, true, true), t3.position >= n3.length) return "failure";
      t3.position++;
      let A2 = u(n3.slice(i2 + 1));
      if (/;(\u0020){0,}base64$/i.test(r2)) {
        if (A2 = (function(e4) {
          (e4 = e4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (e4 = e4.replace(/=?=$/, ""));
          if (e4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(e4)) return "failure";
          const n4 = s2(e4), t4 = new Uint8Array(n4.length);
          for (let e5 = 0; e5 < n4.length; e5++) t4[e5] = n4.charCodeAt(e5);
          return t4;
        })(o2(A2)), "failure" === A2) return "failure";
        r2 = r2.slice(0, -6), r2 = r2.replace(/(\u0020)+$/, ""), r2 = r2.slice(0, -1);
      }
      r2.startsWith(";") && (r2 = "text/plain" + r2);
      let c2 = g(r2);
      return "failure" === c2 && (c2 = g("text/plain;charset=US-ASCII")), { mimeType: c2, body: A2 };
    }, URLSerializer: l, collectASequenceOfCodePoints: d, collectASequenceOfCodePointsFast: m, stringPercentDecode: u, parseMIMEType: g, collectAnHTTPQuotedString: p, serializeAMimeType: function(e3) {
      a2("failure" !== e3);
      const { parameters: n3, essence: t3 } = e3;
      let s3 = t3;
      for (let [e4, t4] of n3.entries()) s3 += ";", s3 += e4, s3 += "=", i.test(t4) || (t4 = t4.replace(/(\\|")/g, "\\$1"), t4 = '"' + t4, t4 += '"'), s3 += t4;
      return s3;
    } };
  }