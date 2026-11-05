// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 30021 range:987858..999945
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
30021: (e) => {
    "use strict";
    const t = RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu), r = RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u), n = RegExp.prototype.test.bind(/^\d*$/u), o = RegExp.prototype.test.bind(/^[\da-f]{2}$/iu), s = RegExp.prototype.test.bind(/^[\da-z\-._~]$/iu), i = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/]$/u), a = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:@/?]$/u), l = RegExp.prototype.test.bind(/^[A-Za-z0-9\-._~!$&'()*+,;=:]$/u), c = new Array(256);
    {
      const e2 = "0123456789ABCDEF";
      for (let t2 = 0; t2 < 256; t2++) c[t2] = "%" + e2[t2 >> 4] + e2[15 & t2];
    }
    function u(e2) {
      return e2 < 2048 ? c[192 | e2 >> 6] + c[128 | 63 & e2] : e2 < 65536 ? c[224 | e2 >> 12] + c[128 | e2 >> 6 & 63] + c[128 | 63 & e2] : c[240 | e2 >> 18] + c[128 | e2 >> 12 & 63] + c[128 | e2 >> 6 & 63] + c[128 | 63 & e2];
    }
    const d = RegExp.prototype.test.bind(/^[\dA-Fa-f]{1,4}$/), p = RegExp.prototype.test.bind(/^[vV][\dA-Fa-f]+\.[A-Za-z\d\-._~!$&'()*+,;=:]+$/), h = RegExp.prototype.test.bind(/^[A-Za-z\d\-._~]$/), m = RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);
    function f(e2) {
      let t2 = -1, r2 = 0, n2 = -1, o2 = 0;
      for (let s2 = 0; s2 < e2.length; s2++) "0" === e2[s2] ? (-1 === n2 && (n2 = s2), o2++, o2 > r2 && (r2 = o2, t2 = n2)) : (n2 = -1, o2 = 0);
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
      let s2 = "";
      const i2 = n2.indexOf("%");
      if (-1 !== i2) {
        const t3 = "%25" === n2.slice(i2, i2 + 3).toLowerCase() ? 3 : 1;
        if (s2 = n2.slice(i2 + t3), !(function(e3) {
          if (0 === e3.length) return false;
          for (let t4 = 0; t4 < e3.length; t4++) if (!h(e3[t4])) {
            if (!("%" === e3[t4] && t4 + 2 < e3.length && o(e3.slice(t4 + 1, t4 + 3)))) return false;
            t4 += 2;
          }
          return true;
        })(s2)) return { host: e2, isIPV6: false, error: true };
        n2 = n2.slice(0, i2);
      }
      const a2 = (function(e3) {
        const t3 = e3.indexOf("::");
        if (-1 !== t3 && -1 !== e3.indexOf("::", t3 + 1)) return;
        const n3 = -1 === t3 ? e3.split(":") : e3.slice(0, t3).split(":"), o2 = -1 === t3 ? [] : e3.slice(t3 + 2).split(":");
        -1 !== t3 && (1 === n3.length && "" === n3[0] && (n3.length = 0), 1 === o2.length && "" === o2[0] && (o2.length = 0));
        const s3 = n3.concat(o2);
        let i3 = 0;
        for (let e4 = 0; e4 < s3.length; e4++) {
          const n4 = s3[e4];
          if ("" === n4) return;
          if (-1 === n4.indexOf(".")) {
            if (!d(n4)) return;
            s3[e4] = parseInt(n4, 16).toString(16), i3++;
          } else {
            if (e4 !== s3.length - 1 || -1 !== t3 && 0 === o2.length || !r(n4)) return;
            i3 += 2;
          }
        }
        if (-1 === t3) {
          if (8 !== i3) return;
          return f(s3);
        }
        if (i3 >= 8) return;
        const a3 = s3.slice(0, n3.length);
        for (let e4 = i3; e4 < 8; e4++) a3.push("0");
        for (let e4 = n3.length; e4 < s3.length; e4++) a3.push(s3[e4]);
        return f(a3);
      })(n2);
      return void 0 === a2 ? { host: e2, isIPV6: false, error: true } : { host: a2 + (s2 ? "%" + s2 : ""), escapedHost: a2 + (s2 ? "%25" + s2 : ""), isIPV6: true };
    }
    const y = { "@": "%40", "/": "%2F", "?": "%3F", "#": "%23", ":": "%3A" }, v = /[@/?#:]/g, w = /[@/?#]/g;
    function b(e2, t2) {
      const r2 = t2 ? w : v;
      return r2.lastIndex = 0, e2.replace(r2, (e3) => y[e3]);
    }
    function _(e2, t2 = false) {
      if (-1 === e2.indexOf("%")) return e2;
      let r2 = "";
      for (let n2 = 0; n2 < e2.length; n2++) {
        if ("%" === e2[n2] && n2 + 2 < e2.length) {
          const i2 = e2.slice(n2 + 1, n2 + 3);
          if (o(i2)) {
            const e3 = i2.toUpperCase(), o2 = String.fromCharCode(parseInt(e3, 16));
            t2 && s(o2) ? r2 += o2 : r2 += "%" + e3, n2 += 2;
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
        const s2 = e2[n2];
        if ("%" === s2 && n2 + 2 < e2.length) {
          const t3 = e2.slice(n2 + 1, n2 + 3);
          if (o(t3)) {
            r2 += "%" + t3.toUpperCase(), n2 += 2;
            continue;
          }
        }
        if (t2(s2)) r2 += s2;
        else {
          const t3 = e2.charCodeAt(n2);
          if (t3 < 128) r2 += c[t3];
          else if (t3 < 55296 || t3 > 57343) r2 += u(t3);
          else if (t3 <= 56319 && n2 + 1 < e2.length) {
            const o2 = e2.charCodeAt(n2 + 1);
            o2 >= 56320 && o2 <= 57343 ? (r2 += u(65536 + (t3 - 55296 << 10) + (o2 - 56320)), n2++) : r2 += u(65533);
          } else r2 += u(65533);
        }
      }
      return r2;
    }
    function x(e2) {
      return S(e2, l);
    }
    function k(e2) {
      return e2 >= 48 && e2 <= 57 || e2 >= 65 && e2 <= 90 || e2 >= 97 && e2 <= 122 || 42 === e2 || 43 === e2 || 45 === e2 || 46 === e2 || 47 === e2 || 64 === e2 || 95 === e2;
    }
    e.exports = { nonSimpleDomain: m, recomposeAuthority: function(e2) {
      const t2 = [];
      if (void 0 !== e2.userinfo && (t2.push(x(e2.userinfo)), t2.push("@")), void 0 !== e2.host) {
        let n2 = e2.host;
        if (!r(n2)) {
          let e3 = g(n2);
          true !== e3.isIPV6 && true !== e3.isIPVFuture && (n2 = _(n2, true), e3 = g(n2)), n2 = true === e3.isIPV6 || true === e3.isIPVFuture ? `[${e3.escapedHost}]` : b(n2, false);
        }
        t2.push(n2);
      }
      if ("number" == typeof e2.port || "string" == typeof e2.port) {
        const r2 = String(e2.port);
        if (!n(r2)) throw new TypeError("URI port is malformed.");
        t2.push(":"), t2.push(r2);
      }
      return t2.length ? t2.join("") : void 0;
    }, reescapeHostDelimiters: b, normalizePercentEncoding: _, normalizePathEncoding: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        if ("%" === n2 && r2 + 2 < e2.length) {
          const n3 = e2.slice(r2 + 1, r2 + 3);
          if (o(n3)) {
            const e3 = n3.toUpperCase(), o2 = String.fromCharCode(parseInt(e3, 16));
            "." !== o2 && s(o2) ? t2 += o2 : t2 += "%" + e3, r2 += 2;
            continue;
          }
        }
        if (i(n2)) t2 += n2;
        else {
          const o2 = e2.charCodeAt(r2);
          if (o2 < 128) t2 += k(o2) ? n2 : c[o2];
          else if (o2 < 55296 || o2 > 57343) t2 += u(o2);
          else if (o2 <= 56319 && r2 + 1 < e2.length) {
            const n3 = e2.charCodeAt(r2 + 1);
            n3 >= 56320 && n3 <= 57343 ? (t2 += u(65536 + (o2 - 55296 << 10) + (n3 - 56320)), r2++) : t2 += u(65533);
          } else t2 += u(65533);
        }
      }
      return t2;
    }, serializePathEncoding: function(e2, t2 = false) {
      let r2 = "", n2 = t2 && "/" !== e2[0];
      for (let t3 = 0; t3 < e2.length; t3++) {
        const s2 = e2[t3];
        if ("%" === s2 && t3 + 2 < e2.length) {
          const n3 = e2.slice(t3 + 1, t3 + 3);
          if (o(n3)) {
            r2 += "%" + n3.toUpperCase(), t3 += 2;
            continue;
          }
        }
        if ("/" === s2 && (n2 = false), !i(s2) || ":" === s2 && n2) {
          const n3 = e2.charCodeAt(t3);
          if (n3 < 128) r2 += c[n3];
          else if (n3 < 55296 || n3 > 57343) r2 += u(n3);
          else if (n3 <= 56319 && t3 + 1 < e2.length) {
            const o2 = e2.charCodeAt(t3 + 1);
            o2 >= 56320 && o2 <= 57343 ? (r2 += u(65536 + (n3 - 55296 << 10) + (o2 - 56320)), t3++) : r2 += u(65533);
          } else r2 += u(65533);
        } else r2 += s2;
      }
      return r2;
    }, normalizeQueryFragmentEncoding: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        const n2 = e2[r2];
        if ("%" === n2 && r2 + 2 < e2.length) {
          const n3 = e2.slice(r2 + 1, r2 + 3);
          if (o(n3)) {
            const e3 = n3.toUpperCase(), o2 = String.fromCharCode(parseInt(e3, 16));
            s(o2) ? t2 += o2 : t2 += "%" + e3, r2 += 2;
            continue;
          }
        }
        if (a(n2)) t2 += n2;
        else {
          const o2 = e2.charCodeAt(r2);
          if (o2 < 128) t2 += k(o2) ? n2 : c[o2];
          else if (o2 < 55296 || o2 > 57343) t2 += u(o2);
          else if (o2 <= 56319 && r2 + 1 < e2.length) {
            const n3 = e2.charCodeAt(r2 + 1);
            n3 >= 56320 && n3 <= 57343 ? (t2 += u(65536 + (o2 - 55296 << 10) + (n3 - 56320)), r2++) : t2 += u(65533);
          } else t2 += u(65533);
        }
      }
      return t2;
    }, encodeUserinfo: x, encodeQuery: function(e2) {
      return S(e2, a);
    }, encodeFragment: function(e2) {
      return S(e2, a);
    }, escapePreservingEscapes: function(e2) {
      let t2 = "";
      for (let r2 = 0; r2 < e2.length; r2++) {
        if ("%" === e2[r2] && r2 + 2 < e2.length) {
          const n2 = e2.slice(r2 + 1, r2 + 3);
          if (o(n2)) {
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
      let n2 = -1, o2 = 0;
      for (; o2 = t2.length; ) {
        if (1 === o2) {
          if ("." === t2) break;
          if ("/" === t2) {
            r2.push("/");
            break;
          }
          r2.push(t2);
          break;
        }
        if (2 === o2) {
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
        } else if (3 === o2 && "/.." === t2) {
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