// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4387 range:1149272..1154686
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4387: (t2, e2, r2) => {
    const n2 = r2(2613), { atob: s2 } = r2(181), { isomorphicDecode: i2 } = r2(8116), o2 = new TextEncoder(), a = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/, u = /(\u000A|\u000D|\u0009|\u0020)/, c = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
    function l(t3, e3 = false) {
      if (!e3) return t3.href;
      const r3 = t3.href, n3 = t3.hash.length;
      return 0 === n3 ? r3 : r3.substring(0, r3.length - n3);
    }
    function m(t3, e3, r3) {
      let n3 = "";
      for (; r3.position < e3.length && t3(e3[r3.position]); ) n3 += e3[r3.position], r3.position++;
      return n3;
    }
    function d(t3, e3, r3) {
      const n3 = e3.indexOf(t3, r3.position), s3 = r3.position;
      return -1 === n3 ? (r3.position = e3.length, e3.slice(s3)) : (r3.position = n3, e3.slice(s3, r3.position));
    }
    function f(t3) {
      return (function(t4) {
        const e3 = [];
        for (let r3 = 0; r3 < t4.length; r3++) {
          const n3 = t4[r3];
          if (37 !== n3) e3.push(n3);
          else if (37 !== n3 || /^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(t4[r3 + 1], t4[r3 + 2]))) {
            const n4 = String.fromCharCode(t4[r3 + 1], t4[r3 + 2]), s3 = Number.parseInt(n4, 16);
            e3.push(s3), r3 += 2;
          } else e3.push(37);
        }
        return Uint8Array.from(e3);
      })(o2.encode(t3));
    }
    function p(t3) {
      const e3 = { position: 0 }, r3 = d("/", t3 = A(t3, true, true), e3);
      if (0 === r3.length || !a.test(r3)) return "failure";
      if (e3.position > t3.length) return "failure";
      e3.position++;
      let n3 = d(";", t3, e3);
      if (n3 = A(n3, false, true), 0 === n3.length || !a.test(n3)) return "failure";
      const s3 = r3.toLowerCase(), i3 = n3.toLowerCase(), o3 = { type: s3, subtype: i3, parameters: /* @__PURE__ */ new Map(), essence: `${s3}/${i3}` };
      for (; e3.position < t3.length; ) {
        e3.position++, m((t4) => u.test(t4), t3, e3);
        let r4 = m((t4) => ";" !== t4 && "=" !== t4, t3, e3);
        if (r4 = r4.toLowerCase(), e3.position < t3.length) {
          if (";" === t3[e3.position]) continue;
          e3.position++;
        }
        if (e3.position > t3.length) break;
        let n4 = null;
        if ('"' === t3[e3.position]) n4 = h(t3, e3, true), d(";", t3, e3);
        else if (n4 = d(";", t3, e3), n4 = A(n4, false, true), 0 === n4.length) continue;
        0 === r4.length || !a.test(r4) || 0 !== n4.length && !c.test(n4) || o3.parameters.has(r4) || o3.parameters.set(r4, n4);
      }
      return o3;
    }
    function h(t3, e3, r3) {
      const s3 = e3.position;
      let i3 = "";
      for (n2('"' === t3[e3.position]), e3.position++; i3 += m((t4) => '"' !== t4 && "\\" !== t4, t3, e3), !(e3.position >= t3.length); ) {
        const r4 = t3[e3.position];
        if (e3.position++, "\\" !== r4) {
          n2('"' === r4);
          break;
        }
        if (e3.position >= t3.length) {
          i3 += "\\";
          break;
        }
        i3 += t3[e3.position], e3.position++;
      }
      return r3 ? i3 : t3.slice(s3, e3.position);
    }
    function g(t3) {
      return "\r" === t3 || "\n" === t3 || "	" === t3 || " " === t3;
    }
    function A(t3, e3 = true, r3 = true) {
      let n3 = 0, s3 = t3.length - 1;
      if (e3) for (; n3 < t3.length && g(t3[n3]); n3++) ;
      if (r3) for (; s3 > 0 && g(t3[s3]); s3--) ;
      return t3.slice(n3, s3 + 1);
    }
    function _(t3) {
      return "\r" === t3 || "\n" === t3 || "	" === t3 || "\f" === t3 || " " === t3;
    }
    t2.exports = { dataURLProcessor: function(t3) {
      n2("data:" === t3.protocol);
      let e3 = l(t3, true);
      e3 = e3.slice(5);
      const r3 = { position: 0 };
      let o3 = d(",", e3, r3);
      const a2 = o3.length;
      if (o3 = (function(t4, e4 = true, r4 = true) {
        let n3 = 0, s3 = t4.length - 1;
        if (e4) for (; n3 < t4.length && _(t4[n3]); n3++) ;
        if (r4) for (; s3 > 0 && _(t4[s3]); s3--) ;
        return t4.slice(n3, s3 + 1);
      })(o3, true, true), r3.position >= e3.length) return "failure";
      r3.position++;
      let u2 = f(e3.slice(a2 + 1));
      if (/;(\u0020){0,}base64$/i.test(o3)) {
        if (u2 = (function(t4) {
          (t4 = t4.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "")).length % 4 == 0 && (t4 = t4.replace(/=?=$/, ""));
          if (t4.length % 4 == 1) return "failure";
          if (/[^+/0-9A-Za-z]/.test(t4)) return "failure";
          const e4 = s2(t4), r4 = new Uint8Array(e4.length);
          for (let t5 = 0; t5 < e4.length; t5++) r4[t5] = e4.charCodeAt(t5);
          return r4;
        })(i2(u2)), "failure" === u2) return "failure";
        o3 = o3.slice(0, -6), o3 = o3.replace(/(\u0020)+$/, ""), o3 = o3.slice(0, -1);
      }
      o3.startsWith(";") && (o3 = "text/plain" + o3);
      let c2 = p(o3);
      return "failure" === c2 && (c2 = p("text/plain;charset=US-ASCII")), { mimeType: c2, body: u2 };
    }, URLSerializer: l, collectASequenceOfCodePoints: m, collectASequenceOfCodePointsFast: d, stringPercentDecode: f, parseMIMEType: p, collectAnHTTPQuotedString: h, serializeAMimeType: function(t3) {
      n2("failure" !== t3);
      const { parameters: e3, essence: r3 } = t3;
      let s3 = r3;
      for (let [t4, r4] of e3.entries()) s3 += ";", s3 += t4, s3 += "=", a.test(r4) || (r4 = r4.replace(/(\\|")/g, "\\$1"), r4 = '"' + r4, r4 += '"'), s3 += r4;
      return s3;
    } };
  }