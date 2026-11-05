// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 21 range:971..13084
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
21: (e2) => {
    "use strict";
    const t2 = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r2 = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n2 = RegExp.prototype.test.bind(/^\d*$/u), o2 = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), s2 = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i2 = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), a2 = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), u = new Array(256);
    {
      const e3 = "0123456789ABCDEF";
      for (let t3 = 0; t3 < 256; t3++) u[t3] = "%" + e3[t3 >> 4] + e3[15 & t3];
    }
    function l(e3) {
      return e3 < 2048 ? u[192 | e3 >> 6] + u[128 | 63 & e3] : e3 < 65536 ? u[224 | e3 >> 12] + u[128 | e3 >> 6 & 63] + u[128 | 63 & e3] : u[240 | e3 >> 18] + u[128 | e3 >> 12 & 63] + u[128 | e3 >> 6 & 63] + u[128 | 63 & e3];
    }
    const d = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), p = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), f = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), h = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function m(e3) {
      let t3 = -1, r3 = 0, n3 = -1, o3 = 0;
      for (let s3 = 0; s3 < e3.length; s3++) "0" === e3[s3] ? (-1 === n3 && (n3 = s3), o3++, o3 > r3 && (r3 = o3, t3 = n3)) : (n3 = -1, o3 = 0);
      if (r3 < 2) return e3.join(":");
      return e3.slice(0, t3).join(":") + "::" + e3.slice(t3 + r3).join(":");
    }
    function g(e3) {
      const t3 = "[" === e3[0] && "]" === e3[e3.length - 1];
      if (("[" === e3[0] || "]" === e3[e3.length - 1]) && !t3) return { host: e3, isIPV6: false, error: true };
      let n3 = t3 ? e3.slice(1, -1) : e3;
      if (t3 && p(n3)) return n3 = n3.toLowerCase(), { host: `[${n3}]`, escapedHost: n3, isIPV6: false, isIPVFuture: true };
      if ((function(e4, t4) {
        let r3 = 0;
        for (let n4 = 0; n4 < e4.length; n4++) e4[n4] === t4 && r3++;
        return r3;
      })(n3, ":") < 2) return { host: e3, isIPV6: false, error: t3 };
      let s3 = "";
      const i3 = n3.indexOf("%");
      if (-1 !== i3) {
        const t4 = "%25" === n3.slice(i3, i3 + 3).toLowerCase() ? 3 : 1;
        if (s3 = n3.slice(i3 + t4), !(function(e4) {
          if (0 === e4.length) return false;
          for (let t5 = 0; t5 < e4.length; t5++) if (!f(e4[t5])) {
            if (!("%" === e4[t5] && t5 + 2 < e4.length && o2(e4.slice(t5 + 1, t5 + 3)))) return false;
            t5 += 2;
          }
          return true;
        })(s3)) return { host: e3, isIPV6: false, error: true };
        n3 = n3.slice(0, i3);
      }
      const a3 = (function(e4) {
        const t4 = e4.indexOf("::");
        if (-1 !== t4 && -1 !== e4.indexOf("::", t4 + 1)) return;
        const n4 = -1 === t4 ? e4.split(":") : e4.slice(0, t4).split(":"), o3 = -1 === t4 ? [] : e4.slice(t4 + 2).split(":");
        -1 !== t4 && (1 === n4.length && "" === n4[0] && (n4.length = 0), 1 === o3.length && "" === o3[0] && (o3.length = 0));
        const s4 = n4.concat(o3);
        let i4 = 0;
        for (let e5 = 0; e5 < s4.length; e5++) {
          const n5 = s4[e5];
          if ("" === n5) return;
          if (-1 === n5.indexOf(".")) {
            if (!d(n5)) return;
            s4[e5] = parseInt(n5, 16).toString(16), i4++;
          } else {
            if (e5 !== s4.length - 1 || -1 !== t4 && 0 === o3.length || !r2(n5)) return;
            i4 += 2;
          }
        }
        if (-1 === t4) {
          if (8 !== i4) return;
          return m(s4);
        }
        if (i4 >= 8) return;
        const a4 = s4.slice(0, n4.length);
        for (let e5 = i4; e5 < 8; e5++) a4.push("0");
        for (let e5 = n4.length; e5 < s4.length; e5++) a4.push(s4[e5]);
        return m(a4);
      })(n3);
      return void 0 === a3 ? { host: e3, isIPV6: false, error: true } : { host: a3 + (s3 ? "%" + s3 : ""), escapedHost: a3 + (s3 ? "%25" + s3 : ""), isIPV6: true };
    }
    const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, _ = /[@/?#:]/g, v = /[@/?#]/g;
    function w(e3, t3) {
      const r3 = t3 ? v : _;
      return r3.lastIndex = 0, e3.replace(r3, (e4) => y[e4]);
    }
    function b(e3, t3 = false) {
      if (-1 === e3.indexOf("%")) return e3;
      let r3 = "";
      for (let n3 = 0; n3 < e3.length; n3++) {
        if ("%" === e3[n3] && n3 + 2 < e3.length) {
          const i3 = e3.slice(n3 + 1, n3 + 3);
          if (o2(i3)) {
            const e4 = i3.toUpperCase(), o3 = String.fromCharCode(parseInt(e4, 16));
            t3 && s2(o3) ? r3 += o3 : r3 += "%" + e4, n3 += 2;
            continue;
          }
        }
        r3 += e3[n3];
      }
      return r3;
    }
    function S(e3, t3) {
      let r3 = "";
      for (let n3 = 0; n3 < e3.length; n3++) {
        const s3 = e3[n3];
        if ("%" === s3 && n3 + 2 < e3.length) {
          const t4 = e3.slice(n3 + 1, n3 + 3);
          if (o2(t4)) {
            r3 += "%" + t4.toUpperCase(), n3 += 2;
            continue;
          }
        }
        if (t3(s3)) r3 += s3;
        else {
          const t4 = e3.charCodeAt(n3);
          if (t4 < 128) r3 += u[t4];
          else if (t4 < 55296 || t4 > 57343) r3 += l(t4);
          else if (t4 <= 56319 && n3 + 1 < e3.length) {
            const o3 = e3.charCodeAt(n3 + 1);
            o3 >= 56320 && o3 <= 57343 ? (r3 += l(65536 + (t4 - 55296 << 10) + (o3 - 56320)), n3++) : r3 += l(65533);
          } else r3 += l(65533);
        }
      }
      return r3;
    }
    function k(e3) {
      return S(e3, c);
    }
    function E(e3) {
      return e3 >= 48 && e3 <= 57 || e3 >= 65 && e3 <= 90 || e3 >= 97 && e3 <= 122 || 42 === e3 || 43 === e3 || 45 === e3 || 46 === e3 || 47 === e3 || 64 === e3 || 95 === e3;
    }
    e2.exports = { nonSimpleDomain: h, recomposeAuthority: function(e3) {
      const t3 = [];
      if (void 0 !== e3.userinfo && (t3.push(k(e3.userinfo)), t3.push("@")), void 0 !== e3.host) {
        let n3 = e3.host;
        if (!r2(n3)) {
          let e4 = g(n3);
          true !== e4.isIPV6 && true !== e4.isIPVFuture && (n3 = b(n3, true), e4 = g(n3)), n3 = true === e4.isIPV6 || true === e4.isIPVFuture ? `[${e4.escapedHost}]` : w(n3, false);
        }
        t3.push(n3);
      }
      if ("number" == typeof e3.port || "string" == typeof e3.port) {
        const r3 = String(e3.port);
        if (!n2(r3)) throw new TypeError("URI port is malformed.");
        t3.push(":"), t3.push(r3);
      }
      return t3.length ? t3.join("") : void 0;
    }, reescapeHostDelimiters: w, normalizePercentEncoding: b, normalizePathEncoding: function(e3) {
      let t3 = "";
      for (let r3 = 0; r3 < e3.length; r3++) {
        const n3 = e3[r3];
        if ("%" === n3 && r3 + 2 < e3.length) {
          const n4 = e3.slice(r3 + 1, r3 + 3);
          if (o2(n4)) {
            const e4 = n4.toUpperCase(), o3 = String.fromCharCode(parseInt(e4, 16));
            "." !== o3 && s2(o3) ? t3 += o3 : t3 += "%" + e4, r3 += 2;
            continue;
          }
        }
        if (i2(n3)) t3 += n3;
        else {
          const o3 = e3.charCodeAt(r3);
          if (o3 < 128) t3 += E(o3) ? n3 : u[o3];
          else if (o3 < 55296 || o3 > 57343) t3 += l(o3);
          else if (o3 <= 56319 && r3 + 1 < e3.length) {
            const n4 = e3.charCodeAt(r3 + 1);
            n4 >= 56320 && n4 <= 57343 ? (t3 += l(65536 + (o3 - 55296 << 10) + (n4 - 56320)), r3++) : t3 += l(65533);
          } else t3 += l(65533);
        }
      }
      return t3;
    }, serializePathEncoding: function(e3, t3 = false) {
      let r3 = "", n3 = t3 && "/" !== e3[0];
      for (let t4 = 0; t4 < e3.length; t4++) {
        const s3 = e3[t4];
        if ("%" === s3 && t4 + 2 < e3.length) {
          const n4 = e3.slice(t4 + 1, t4 + 3);
          if (o2(n4)) {
            r3 += "%" + n4.toUpperCase(), t4 += 2;
            continue;
          }
        }
        if ("/" === s3 && (n3 = false), !i2(s3) || ":" === s3 && n3) {
          const n4 = e3.charCodeAt(t4);
          if (n4 < 128) r3 += u[n4];
          else if (n4 < 55296 || n4 > 57343) r3 += l(n4);
          else if (n4 <= 56319 && t4 + 1 < e3.length) {
            const o3 = e3.charCodeAt(t4 + 1);
            o3 >= 56320 && o3 <= 57343 ? (r3 += l(65536 + (n4 - 55296 << 10) + (o3 - 56320)), t4++) : r3 += l(65533);
          } else r3 += l(65533);
        } else r3 += s3;
      }
      return r3;
    }, normalizeQueryFragmentEncoding: function(e3) {
      let t3 = "";
      for (let r3 = 0; r3 < e3.length; r3++) {
        const n3 = e3[r3];
        if ("%" === n3 && r3 + 2 < e3.length) {
          const n4 = e3.slice(r3 + 1, r3 + 3);
          if (o2(n4)) {
            const e4 = n4.toUpperCase(), o3 = String.fromCharCode(parseInt(e4, 16));
            s2(o3) ? t3 += o3 : t3 += "%" + e4, r3 += 2;
            continue;
          }
        }
        if (a2(n3)) t3 += n3;
        else {
          const o3 = e3.charCodeAt(r3);
          if (o3 < 128) t3 += E(o3) ? n3 : u[o3];
          else if (o3 < 55296 || o3 > 57343) t3 += l(o3);
          else if (o3 <= 56319 && r3 + 1 < e3.length) {
            const n4 = e3.charCodeAt(r3 + 1);
            n4 >= 56320 && n4 <= 57343 ? (t3 += l(65536 + (o3 - 55296 << 10) + (n4 - 56320)), r3++) : t3 += l(65533);
          } else t3 += l(65533);
        }
      }
      return t3;
    }, encodeUserinfo: k, encodeQuery: function(e3) {
      return S(e3, a2);
    }, encodeFragment: function(e3) {
      return S(e3, a2);
    }, escapePreservingEscapes: function(e3) {
      let t3 = "";
      for (let r3 = 0; r3 < e3.length; r3++) {
        if ("%" === e3[r3] && r3 + 2 < e3.length) {
          const n3 = e3.slice(r3 + 1, r3 + 3);
          if (o2(n3)) {
            t3 += "%" + n3.toUpperCase(), r3 += 2;
            continue;
          }
        }
        t3 += escape(e3[r3]);
      }
      return t3;
    }, removeDotSegments: function(e3) {
      let t3 = e3;
      const r3 = [];
      let n3 = -1, o3 = 0;
      for (; o3 = t3.length; ) {
        if (1 === o3) {
          if ("." === t3) break;
          if ("/" === t3) {
            r3.push("/");
            break;
          }
          r3.push(t3);
          break;
        }
        if (2 === o3) {
          if ("." === t3[0]) {
            if ("." === t3[1]) break;
            if ("/" === t3[1]) {
              t3 = t3.slice(2);
              continue;
            }
          } else if ("/" === t3[0] && ("." === t3[1] || "/" === t3[1])) {
            r3.push("/");
            break;
          }
        } else if (3 === o3 && "/.." === t3) {
          0 !== r3.length && r3.pop(), r3.push("/");
          break;
        }
        if ("." === t3[0]) {
          if ("." === t3[1]) {
            if ("/" === t3[2]) {
              t3 = t3.slice(3);
              continue;
            }
          } else if ("/" === t3[1]) {
            t3 = t3.slice(2);
            continue;
          }
        } else if ("/" === t3[0] && "." === t3[1]) {
          if ("/" === t3[2]) {
            t3 = t3.slice(2);
            continue;
          }
          if ("." === t3[2] && "/" === t3[3]) {
            t3 = t3.slice(3), 0 !== r3.length && r3.pop();
            continue;
          }
        }
        if (-1 === (n3 = t3.indexOf("/", 1))) {
          r3.push(t3);
          break;
        }
        r3.push(t3.slice(0, n3)), t3 = t3.slice(n3);
      }
      return r3.join("");
    }, isIPv4: r2, isUUID: t2, normalizeIPv6: g, stringArrayToHexStripped: function(e3) {
      let t3 = "", r3 = 0, n3 = 0;
      for (n3 = 0; n3 < e3.length; n3++) if (r3 = e3[n3].charCodeAt(0), 48 !== r3) {
        if (!(r3 >= 48 && r3 <= 57 || r3 >= 65 && r3 <= 70 || r3 >= 97 && r3 <= 102)) return "";
        t3 += e3[n3];
        break;
      }
      for (n3 += 1; n3 < e3.length; n3++) {
        if (r3 = e3[n3].charCodeAt(0), !(r3 >= 48 && r3 <= 57 || r3 >= 65 && r3 <= 70 || r3 >= 97 && r3 <= 102)) return "";
        t3 += e3[n3];
      }
      return t3;
    } };
  }