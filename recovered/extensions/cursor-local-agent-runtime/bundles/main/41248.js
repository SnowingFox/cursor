// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 41248 range:1227539..1237316
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41248: (e, t, r) => {
    "use strict";
    const { normalizeIPv6: n, removeDotSegments: o, recomposeAuthority: s, normalizePercentEncoding: i, normalizePathEncoding: a, serializePathEncoding: l, normalizeQueryFragmentEncoding: c, encodeQuery: u, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: h, nonSimpleDomain: m } = r(30021), { SCHEMES: f, getSchemeHandler: g } = r(96644), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, v = "URI scheme is malformed.";
    function w(e2) {
      const t2 = unescape(String(e2));
      if (!y.test(t2)) throw new TypeError(v);
      return t2;
    }
    function b(e2, t2, r2, n2) {
      const s2 = {};
      return n2 || (e2 = A(_(e2, r2), r2), t2 = A(_(t2, r2), r2)), !(r2 = r2 || {}).tolerant && t2.scheme ? (s2.scheme = t2.scheme, s2.userinfo = t2.userinfo, s2.host = t2.host, s2.port = t2.port, s2.path = o(t2.path || ""), s2.query = t2.query) : (void 0 !== t2.userinfo || void 0 !== t2.host || void 0 !== t2.port ? (s2.userinfo = t2.userinfo, s2.host = t2.host, s2.port = t2.port, s2.path = o(t2.path || ""), s2.query = t2.query) : (t2.path ? ("/" === t2.path[0] ? s2.path = o(t2.path) : (void 0 === e2.userinfo && void 0 === e2.host && void 0 === e2.port || e2.path ? e2.path ? s2.path = e2.path.slice(0, e2.path.lastIndexOf("/") + 1) + t2.path : s2.path = t2.path : s2.path = "/" + t2.path, s2.path = o(s2.path)), s2.query = t2.query) : (s2.path = e2.path, void 0 !== t2.query ? s2.query = t2.query : s2.query = e2.query), s2.userinfo = e2.userinfo, s2.host = e2.host, s2.port = e2.port), s2.scheme = e2.scheme), s2.fragment = t2.fragment, s2;
    }
    function _(e2, t2) {
      const r2 = { host: e2.host, scheme: e2.scheme, userinfo: e2.userinfo, port: e2.port, path: e2.path, query: e2.query, nid: e2.nid, nss: e2.nss, uuid: e2.uuid, fragment: e2.fragment, reference: e2.reference, resourceName: e2.resourceName, secure: e2.secure, error: "" }, n2 = Object.assign({}, t2), a2 = [];
      r2.scheme && (r2.scheme = w(r2.scheme));
      const c2 = g(n2.scheme || r2.scheme);
      c2 && c2.serialize && c2.serialize(r2, n2);
      const p2 = void 0 !== r2.userinfo || void 0 !== r2.host || void 0 !== r2.port, h2 = !n2.skipEscape && void 0 === r2.scheme && !p2;
      void 0 !== r2.path && (n2.skipEscape ? r2.path = i(r2.path) : r2.path = l(r2.path, h2)), "suffix" !== n2.reference && r2.scheme && (r2.scheme = w(r2.scheme), a2.push(r2.scheme, ":"));
      const m2 = s(r2);
      if (void 0 !== m2 && ("suffix" !== n2.reference && a2.push("//"), a2.push(m2), r2.path && "/" !== r2.path[0] && a2.push("/")), void 0 !== r2.path) {
        let e3 = r2.path;
        n2.absolutePath || c2 && c2.absolutePath || (e3 = o(e3)), h2 && (e3 = l(e3, true)), void 0 === m2 && "/" === e3[0] && "/" === e3[1] && (e3 = "/%2F" + e3.slice(2)), a2.push(e3);
      }
      return void 0 !== r2.query && a2.push("?", u(r2.query)), void 0 !== r2.fragment && a2.push("#", d(r2.fragment)), a2.join("");
    }
    const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, x = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, k = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function E(e2) {
      if (void 0 === e2) return false;
      let t2 = e2.indexOf("%");
      for (; -1 !== t2; ) {
        if (t2 + 2 >= e2.length || !/^[\da-f]{2}$/iu.test(e2.slice(t2 + 1, t2 + 3))) return true;
        t2 = e2.indexOf("%", t2 + 3);
      }
      return false;
    }
    function T(e2) {
      return "[" === e2[0] && "]" === e2[e2.length - 1];
    }
    function C(e2, t2, r2, n2) {
      if (!t2.unicodeSupport && (!r2 || !r2.unicodeSupport) && e2.host && !T(e2.host) && (t2.domainHost || r2 && r2.domainHost) && false === n2 && m(e2.host)) try {
        e2.host = new URL("http://" + e2.host).hostname;
      } catch (t3) {
        return e2.error = e2.error || "Host's domain name can not be converted to ASCII: " + t3, true;
      }
      return false;
    }
    function I(e2, t2) {
      const r2 = Object.assign({}, t2), o2 = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 };
      let s2 = false, l2 = false, u2 = false, d2 = false, m2 = false, w2 = false, b2 = false;
      "suffix" === r2.reference && (e2 = r2.scheme ? r2.scheme + ":" + e2 : "//" + e2);
      const _2 = e2.match(x);
      null !== _2 && -1 !== _2[1].indexOf("\\") && (o2.error = "URI authority must not contain a literal backslash.", s2 = true);
      const I2 = e2.match(k);
      if (null !== I2) {
        const e3 = I2[1], t3 = e3.replace(/[\t\n\r]/g, "");
        t3.length >= 2 && ("//" !== t3.slice(0, 2) ? (o2.error = o2.error || "URI authority must not contain a literal backslash.", s2 = true) : e3.length !== t3.length && (o2.error = o2.error || "URI authority introducer must not contain whitespace.", s2 = true));
      }
      const A2 = e2.match(S);
      if (A2) {
        if (o2.scheme = A2[1], o2.userinfo = A2[3], o2.host = A2[4], o2.port = parseInt(A2[5], 10), o2.path = A2[6] || "", o2.query = A2[7], o2.fragment = A2[8], void 0 !== o2.scheme) {
          const e3 = unescape(o2.scheme);
          y.test(e3) ? o2.scheme = e3.toLowerCase() : (o2.error = o2.error || v, w2 = true);
        }
        l2 = (function(e3) {
          const t4 = e3[4];
          return E(e3[3]) || void 0 !== t4 && !T(t4) && E(t4) || E(e3[6]) || E(e3[7]) || E(e3[8]);
        })(A2), l2 && (o2.error = o2.error || "URI contains malformed percent-encoding."), isNaN(o2.port) && (o2.port = A2[5]);
        const t3 = (function(e3, t4) {
          return void 0 !== t4[2] && e3.path && "/" !== e3.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e3.port && (e3.port < 0 || e3.port > 65535) ? "URI port is malformed." : void 0;
        })(o2, A2);
        if (void 0 !== t3 && (o2.error = o2.error || t3, s2 = true), o2.host) {
          if (false === h(o2.host)) {
            const e3 = T(o2.host), t4 = -1 !== o2.host.indexOf("[") || -1 !== o2.host.indexOf("]"), r3 = n(o2.host);
            b2 = r3.isIPV6 || true === r3.isIPVFuture, m2 = t4 && (!e3 || true === r3.error), o2.host = b2 ? r3.host : r3.host.toLowerCase(), m2 && (o2.error = o2.error || "URI host is malformed.", s2 = true);
          } else b2 = true;
        }
        void 0 !== o2.scheme || void 0 !== o2.userinfo || void 0 !== o2.host || void 0 !== o2.port || void 0 !== o2.query || o2.path ? void 0 === o2.scheme ? o2.reference = "relative" : void 0 === o2.fragment ? o2.reference = "absolute" : o2.reference = "uri" : o2.reference = "same-document", r2.reference && "suffix" !== r2.reference && r2.reference !== o2.reference && (o2.error = o2.error || "URI is not a " + r2.reference + " reference.");
        const _3 = g(r2.scheme || o2.scheme);
        if (m2 || (d2 = C(o2, r2, _3, b2)), -1 !== e2.indexOf("%") && void 0 !== o2.host && !m2) {
          let e3 = b2 ? o2.host : i(o2.host, true);
          b2 || (e3 = i(e3.toLowerCase())), o2.host = p(e3, b2);
        }
        (!_3 || _3 && !_3.skipNormalize) && (o2.path && (o2.path = a(o2.path)), o2.query && (o2.query = c(o2.query)), o2.fragment && (o2.fragment = c(o2.fragment))), _3 && _3.parse && (_3.parse(o2, r2), _3 === f.urn && void 0 === o2.nid && (u2 = true));
      } else o2.error = o2.error || "URI can not be parsed.";
      return { parsed: o2, malformedAuthorityOrPort: s2, malformedPercentEncoding: l2, malformedSchemeSpecific: u2, malformedHost: d2, malformedScheme: w2 };
    }
    function A(e2, t2) {
      return I(e2, t2).parsed;
    }
    function P(e2, t2) {
      const { parsed: r2, malformedAuthorityOrPort: n2, malformedPercentEncoding: o2, malformedSchemeSpecific: s2, malformedHost: i2, malformedScheme: a2 } = I(e2, t2);
      return { normalized: n2 || o2 || s2 || i2 || a2 ? e2 : _(r2, t2), malformedAuthorityOrPort: n2, malformedPercentEncoding: o2, malformedSchemeSpecific: s2, malformedHost: i2, malformedScheme: a2 };
    }
    function M(e2, t2) {
      if ("string" != typeof e2 && "object" != typeof e2) return;
      let r2;
      try {
        r2 = "string" == typeof e2 ? e2 : _(e2, t2);
      } catch {
        return;
      }
      const { normalized: n2, malformedAuthorityOrPort: o2, malformedPercentEncoding: s2, malformedSchemeSpecific: i2, malformedHost: a2, malformedScheme: l2 } = P(r2, t2);
      return o2 || s2 || i2 || a2 || l2 ? void 0 : n2;
    }
    const R = { SCHEMES: f, normalize: function(e2, t2) {
      return "string" == typeof e2 ? e2 = (function(e3, t3) {
        return P(e3, t3).normalized;
      })(e2, t2) : "object" == typeof e2 && (e2 = A(_(e2, t2), t2)), e2;
    }, resolve: function(e2, t2, r2) {
      const o2 = r2 ? Object.assign({ scheme: "null" }, r2) : { scheme: "null" }, { parsed: s2, malformedAuthorityOrPort: i2, malformedPercentEncoding: a2, malformedSchemeSpecific: l2, malformedHost: c2, malformedScheme: u2 } = I(e2, o2), { parsed: d2, malformedAuthorityOrPort: p2, malformedPercentEncoding: m2, malformedSchemeSpecific: f2, malformedHost: y2, malformedScheme: v2 } = I(t2, o2);
      if (i2 || p2 || a2 || m2 || l2 || f2 || c2 || y2 || u2 || v2) throw new Error(s2.error || d2.error || "URI is malformed.");
      const w2 = b(s2, d2, o2, true), S2 = g(r2 && r2.scheme || w2.scheme), x2 = w2.host;
      C(w2, r2 || {}, S2, void 0 !== x2 && "" !== x2 && (h(x2) || n(x2).isIPV6));
      const k2 = x2 && -1 !== x2.indexOf("%") && !/\P{ASCII}/u.test(x2);
      if (w2.error && !k2) throw new Error(w2.error);
      return o2.skipEscape = true, _(w2, o2);
    }, resolveComponent: b, equal: function(e2, t2, r2) {
      const n2 = M(e2, r2), o2 = M(t2, r2);
      return void 0 !== n2 && void 0 !== o2 && n2 === o2;
    }, serialize: _, parse: A };
    e.exports = R, e.exports.default = R, e.exports.fastUri = R;
  }