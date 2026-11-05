// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 30021 range:4888788..4900875
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30021: (e) => {
    "use strict";
    const t = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^\d*$/u), s = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), o = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), a = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), c = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), l = new Array(256);
    {
      const e2 = "0123456789ABCDEF";
      for (let t2 = 0; t2 < 256; t2++) l[t2] = "%" + e2[t2 >> 4] + e2[15 & t2];
    }
    function u(e2) {
      return e2 < 2048 ? l[192 | e2 >> 6] + l[128 | 63 & e2] : e2 < 65536 ? l[224 | e2 >> 12] + l[128 | e2 >> 6 & 63] + l[128 | 63 & e2] : l[240 | e2 >> 18] + l[128 | e2 >> 12 & 63] + l[128 | e2 >> 6 & 63] + l[128 | 63 & e2];
    }
    const d = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), p = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), m = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), h = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function f(e2) {
      let t2 = -1, r2 = 0, n2 = -1, s2 = 0;
      for (let o2 = 0; o2 < e2.length; o2++) "0" === e2[o2] ? (-1 === n2 && (n2 = o2), s2++, s2 > r2 && (r2 = s2, t2 = n2)) : (n2 = -1, s2 = 0);
      if (r2 < 2) return e2.join(":");
      return e2.slice(0, t2).join(":") + "::" + e2.slice(t2 + r2).join(":");
    }
    function g(e2) {
      const t2 = "[" === e2[0] && "]" === e2[e2.length - 1];
      if (("[" === e2[0] || "]" === e2[e2.length - 1]) && !t2) return { host: e2, isIPV6: false, error: true };
      let n2 = t2 ? e2.slice(1, -1) : e2;
      if (t2 && p(n2)) return n2 = n2.toLowerCase(), { host: `[${n2}]`, escapedHost: n2, isIPV6: false, isIPVFuture: true };
      if ((function(e3, t3) {
        let r2 = 0;
        for (let n3 = 0; n3 < e3.length; n3++) e3[n3] === t3 && r2++;
        return r2;
      })(n2, ":") < 2) return { host: e2, isIPV6: false, error: t2 };
      let o2 = "";
      const i2 = n2.indexOf("%");
      if (-1 !== i2) {
        const t3 = "%25" === n2.slice(i2, i2 + 3).toLowerCase() ? 3 : 1;
        if (o2 = n2.slice(i2 + t3), !(function(e3) {
          if (0 === e3.length) return false;
          for (let t4 = 0; t4 < e3.length; t4++) if (!m(e3[t4])) {
            if (!("%" === e3[t4] && t4 + 2 < e3.length && s(e3.slice(t4 + 1, t4 + 3)))) return false;
            t4 += 2;
          }
          return true;
        })(o2)) return { host: e2, isIPV6: false, error: true };
        n2 = n2.slice(0, i2);
      }
      const a2 = (function(e3) {
        const t3 = e3.indexOf("::");
        if (-1 !== t3 && -1 !== e3.indexOf("::", t3 + 1)) return;
        const n3 = -1 === t3 ? e3.split(":") : e3.slice(0, t3).split(":"), s2 = -1 === t3 ? [] : e3.slice(t3 + 2).split(":");
        -1 !== t3 && (1 === n3.length && "" === n3[0] && (n3.length = 0), 1 === s2.length && "" === s2[0] && (s2.length = 0));
        const o3 = n3.concat(s2);
        let i3 = 0;
        for (let e4 = 0; e4 < o3.length; e4++) {
          const n4 = o3[e4];
          if ("" === n4) return;
          if (-1 === n4.indexOf(".")) {
            if (!d(n4)) return;
            o3[e4] = parseInt(n4, 16).toString(16), i3++;
          } else {
            if (e4 !== o3.length - 1 || -1 !== t3 && 0 === s2.length || !r(n4)) return;
            i3 += 2;
          }
        }
        if (-1 === t3) {
          if (8 !== i3) return;
          return f(o3);
        }
        if (i3 >= 8) return;
        const a3 = o3.slice(0, n3.length);
        for (let e4 = i3; e4 < 8; e4++) a3.push("0");
        for (let e4 = n3.length; e4 < o3.length; e4++) a3.push(o3[e4]);
        return f(a3);
      })(n2);
      return void 0 === a2 ? { host: e2, isIPV6: false, error: true } : { host: a2 + (o2 ? "%" + o2 : ""), escapedHost: a2 + (o2 ? "%25" + o2 : ""), isIPV6: true };
    }
    const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, w = /[@/?#:]/g, v = /[@/?#]/g;
    function _(e2, t2) {
      const r2 = t2 ? v : w;
      return r2.lastIndex = 0, e2.replace(r2, (e3) => y[e3]);
    }
    function A(e2, t2 = false) {
      if (-1 === e2.indexOf("%")) return e2;
      let r2 = "";
      for (let n2 = 0; n2 < e2.length; n2++) {
        if ("%" === e2[n2] && n2 + 2 < e2.length) {
          const i2 = e2.slice(n2 + 1, n2 + 3);
          if (s(i2)) {
            const e3 = i2.toUpperCase(), s2 = String.fromCharCode(parseInt(e3, 16));
            t2 && o(s2) ? r2 += s2 : r2 += "%" + e3, n2 += 2;
            continue;
          }
        }
        r2 += e2[n2];
      }
      return r2;
    }
    function S(e2, t2) {
      let r2 = "";
      for (let n2 = 0; n2 < e2.length; n2++) {
        const o2 = e2[n2];
        if ("%" === o2 && n2 + 2 < e2.length) {
          const t3 = e2.slice(n2 + 1, n2 + 3);
          if (s(t3)) {
            r2 += "%" + t3.toUpperCase(), n2 += 2;
            continue;
          }
        }
        if (t2(o2)) r2 += o2;
        else {
          const t3 = e2.charCodeAt(n2);
          if (t3 < 128) r2 += l[t3];
          else if (t3 < 55296 || t3 > 57343) r2 += u(t3);
          else if (t3 <= 56319 && n2 + 1 < e2.length) {
            const s2 = e2.charCodeAt(n2 + 1);
            s2 >= 56320 && s2 <= 57343 ? (r2 += u(65536 + (t3 - 55296 << 10) + (s2 - 56320)), n2++) : r2 += u(65533);
          } else r2 += u(65533);
        }
      }
      return r2;
    }
    function b(e2) {
      return S(e2, c);
    }
    function E(e2) {
      return e2 >= 48 && e2 <= 57 || e2 >= 65 && e2 <= 90 || e2 >= 97 && e2 <= 122 || 42 === e2 || 43 === e2 || 45 === e2 || 46 === e2 || 47 === e2 || 64 === e2 || 95 === e2;
    }
    e.exports = { nonSimpleDomain: h, recomposeAuthority: function(e2) {
      const t2 = [];
      if (void 0 !== e2.userinfo && (t2.push(b(e2.userinfo)), t2.push("@")), void 0 !== e2.host) {
        let n2 = e2.host;
        if (!r(n2)) {
          let e3 = g(n2);
          true !== e3.isIPV6 && true !== e3.isIPVFuture && (n2 = A(n2, true), e3 = g(n2)), n2 = true === e3.isIPV6 || true === e3.isIPVFuture ? `[${e3.escapedHost}]` : _(n2, false);
        }
        t2.push(n2);
      }
      if ("number" == typeof e2.port || "string" == typeof e2.port) {
        const r2 = String(e2.port);
        if (!n(r2)) throw new TypeError("URI port is malformed.");
        t2.push(":"), t2.push(r2);
      }
      return t2.length ? t2.join("") : void 0;
    }, reescapeHostDelimiters: _, normalizePercentEncoding: A, normalizePathEncoding: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        if ("%" === n2 && r2 + 2 < e2.length) {
          const n3 = e2.slice(r2 + 1, r2 + 3);
          if (s(n3)) {
            const e3 = n3.toUpperCase(), s2 = String.fromCharCode(parseInt(e3, 16));
            "." !== s2 && o(s2) ? t2 += s2 : t2 += "%" + e3, r2 += 2;
            continue;
          }
        }
        if (i(n2)) t2 += n2;
        else {
          const s2 = e2.charCodeAt(r2);
          if (s2 < 128) t2 += E(s2) ? n2 : l[s2];
          else if (s2 < 55296 || s2 > 57343) t2 += u(s2);
          else if (s2 <= 56319 && r2 + 1 < e2.length) {
            const n3 = e2.charCodeAt(r2 + 1);
            n3 >= 56320 && n3 <= 57343 ? (t2 += u(65536 + (s2 - 55296 << 10) + (n3 - 56320)), r2++) : t2 += u(65533);
          } else t2 += u(65533);
        }
      }
      return t2;
    }, serializePathEncoding: function(e2, t2 = false) {
      let r2 = "", n2 = t2 && "/" !== e2[0];
      for (let t3 = 0; t3 < e2.length; t3++) {
        const o2 = e2[t3];
        if ("%" === o2 && t3 + 2 < e2.length) {
          const n3 = e2.slice(t3 + 1, t3 + 3);
          if (s(n3)) {
            r2 += "%" + n3.toUpperCase(), t3 += 2;
            continue;
          }
        }
        if ("/" === o2 && (n2 = false), !i(o2) || ":" === o2 && n2) {
          const n3 = e2.charCodeAt(t3);
          if (n3 < 128) r2 += l[n3];
          else if (n3 < 55296 || n3 > 57343) r2 += u(n3);
          else if (n3 <= 56319 && t3 + 1 < e2.length) {
            const s2 = e2.charCodeAt(t3 + 1);
            s2 >= 56320 && s2 <= 57343 ? (r2 += u(65536 + (n3 - 55296 << 10) + (s2 - 56320)), t3++) : r2 += u(65533);
          } else r2 += u(65533);
        } else r2 += o2;
      }
      return r2;
    }, normalizeQueryFragmentEncoding: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        if ("%" === n2 && r2 + 2 < e2.length) {
          const n3 = e2.slice(r2 + 1, r2 + 3);
          if (s(n3)) {
            const e3 = n3.toUpperCase(), s2 = String.fromCharCode(parseInt(e3, 16));
            o(s2) ? t2 += s2 : t2 += "%" + e3, r2 += 2;
            continue;
          }
        }
        if (a(n2)) t2 += n2;
        else {
          const s2 = e2.charCodeAt(r2);
          if (s2 < 128) t2 += E(s2) ? n2 : l[s2];
          else if (s2 < 55296 || s2 > 57343) t2 += u(s2);
          else if (s2 <= 56319 && r2 + 1 < e2.length) {
            const n3 = e2.charCodeAt(r2 + 1);
            n3 >= 56320 && n3 <= 57343 ? (t2 += u(65536 + (s2 - 55296 << 10) + (n3 - 56320)), r2++) : t2 += u(65533);
          } else t2 += u(65533);
        }
      }
      return t2;
    }, encodeUserinfo: b, encodeQuery: function(e2) {
      return S(e2, a);
    }, encodeFragment: function(e2) {
      return S(e2, a);
    }, escapePreservingEscapes: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        if ("%" === e2[r2] && r2 + 2 < e2.length) {
          const n2 = e2.slice(r2 + 1, r2 + 3);
          if (s(n2)) {
            t2 += "%" + n2.toUpperCase(), r2 += 2;
            continue;
          }
        }
        t2 += escape(e2[r2]);
      }
      return t2;
    }, removeDotSegments: function(e2) {
      let t2 = e2;
      const r2 = [];
      let n2 = -1, s2 = 0;
      for (; s2 = t2.length; ) {
        if (1 === s2) {
          if ("." === t2) break;
          if ("/" === t2) {
            r2.push("/");
            break;
          }
          r2.push(t2);
          break;
        }
        if (2 === s2) {
          if ("." === t2[0]) {
            if ("." === t2[1]) break;
            if ("/" === t2[1]) {
              t2 = t2.slice(2);
              continue;
            }
          } else if ("/" === t2[0] && ("." === t2[1] || "/" === t2[1])) {
            r2.push("/");
            break;
          }
        } else if (3 === s2 && "/.." === t2) {
          0 !== r2.length && r2.pop(), r2.push("/");
          break;
        }
        if ("." === t2[0]) {
          if ("." === t2[1]) {
            if ("/" === t2[2]) {
              t2 = t2.slice(3);
              continue;
            }
          } else if ("/" === t2[1]) {
            t2 = t2.slice(2);
            continue;
          }
        } else if ("/" === t2[0] && "." === t2[1]) {
          if ("/" === t2[2]) {
            t2 = t2.slice(2);
            continue;
          }
          if ("." === t2[2] && "/" === t2[3]) {
            t2 = t2.slice(3), 0 !== r2.length && r2.pop();
            continue;
          }
        }
        if (-1 === (n2 = t2.indexOf("/", 1))) {
          r2.push(t2);
          break;
        }
        r2.push(t2.slice(0, n2)), t2 = t2.slice(n2);
      }
      return r2.join("");
    }, isIPv4: r, isUUID: t, normalizeIPv6: g, stringArrayToHexStripped: function(e2) {
      let t2 = "", r2 = 0, n2 = 0;
      for (n2 = 0; n2 < e2.length; n2++) if (r2 = e2[n2].charCodeAt(0), 48 !== r2) {
        if (!(r2 >= 48 && r2 <= 57 || r2 >= 65 && r2 <= 70 || r2 >= 97 && r2 <= 102)) return "";
        t2 += e2[n2];
        break;
      }
      for (n2 += 1; n2 < e2.length; n2++) {
        if (r2 = e2[n2].charCodeAt(0), !(r2 >= 48 && r2 <= 57 || r2 >= 65 && r2 <= 70 || r2 >= 97 && r2 <= 102)) return "";
        t2 += e2[n2];
      }
      return t2;
    } };
  }