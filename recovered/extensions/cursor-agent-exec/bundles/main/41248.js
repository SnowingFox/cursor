// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 41248 range:3160797..3170574
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41248: (e, t, r) => {
    "use strict";
    const { normalizeIPv6: n, removeDotSegments: s, recomposeAuthority: o, normalizePercentEncoding: i, normalizePathEncoding: a, serializePathEncoding: c, normalizeQueryFragmentEncoding: l, encodeQuery: u, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: m, nonSimpleDomain: h } = r(30021), { SCHEMES: f, getSchemeHandler: g } = r(96644), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, w = "URI scheme is malformed.";
    function v(e2) {
      const t2 = unescape(String(e2));
      if (!y.test(t2)) throw new TypeError(w);
      return t2;
    }
    function _(e2, t2, r2, n2) {
      const o2 = {};
      return n2 || (e2 = P(b(e2, r2), r2), t2 = P(b(t2, r2), r2)), !(r2 = r2 || {}).tolerant && t2.scheme ? (o2.scheme = t2.scheme, o2.userinfo = t2.userinfo, o2.host = t2.host, o2.port = t2.port, o2.path = s(t2.path || ""), o2.query = t2.query) : (void 0 !== t2.userinfo || void 0 !== t2.host || void 0 !== t2.port ? (o2.userinfo = t2.userinfo, o2.host = t2.host, o2.port = t2.port, o2.path = s(t2.path || ""), o2.query = t2.query) : (t2.path ? ("/" === t2.path[0] ? o2.path = s(t2.path) : (void 0 === e2.userinfo && void 0 === e2.host && void 0 === e2.port || e2.path ? e2.path ? o2.path = e2.path.slice(0, e2.path.lastIndexOf("/") + 1) + t2.path : o2.path = t2.path : o2.path = "/" + t2.path, o2.path = s(o2.path)), o2.query = t2.query) : (o2.path = e2.path, void 0 !== t2.query ? o2.query = t2.query : o2.query = e2.query), o2.userinfo = e2.userinfo, o2.host = e2.host, o2.port = e2.port), o2.scheme = e2.scheme), o2.fragment = t2.fragment, o2;
    }
    function b(e2, t2) {
      const r2 = { host: e2.host, scheme: e2.scheme, userinfo: e2.userinfo, port: e2.port, path: e2.path, query: e2.query, nid: e2.nid, nss: e2.nss, uuid: e2.uuid, fragment: e2.fragment, reference: e2.reference, resourceName: e2.resourceName, secure: e2.secure, error: "" }, n2 = Object.assign({}, t2), a2 = [];
      r2.scheme && (r2.scheme = v(r2.scheme));
      const l2 = g(n2.scheme || r2.scheme);
      l2 && l2.serialize && l2.serialize(r2, n2);
      const p2 = void 0 !== r2.userinfo || void 0 !== r2.host || void 0 !== r2.port, m2 = !n2.skipEscape && void 0 === r2.scheme && !p2;
      void 0 !== r2.path && (n2.skipEscape ? r2.path = i(r2.path) : r2.path = c(r2.path, m2)), "suffix" !== n2.reference && r2.scheme && (r2.scheme = v(r2.scheme), a2.push(r2.scheme, ":"));
      const h2 = o(r2);
      if (void 0 !== h2 && ("suffix" !== n2.reference && a2.push("//"), a2.push(h2), r2.path && "/" !== r2.path[0] && a2.push("/")), void 0 !== r2.path) {
        let e3 = r2.path;
        n2.absolutePath || l2 && l2.absolutePath || (e3 = s(e3)), m2 && (e3 = c(e3, true)), void 0 === h2 && "/" === e3[0] && "/" === e3[1] && (e3 = "/%2F" + e3.slice(2)), a2.push(e3);
      }
      return void 0 !== r2.query && a2.push("?", u(r2.query)), void 0 !== r2.fragment && a2.push("#", d(r2.fragment)), a2.join("");
    }
    const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, k = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, x = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function E(e2) {
      if (void 0 === e2) return false;
      let t2 = e2.indexOf("%");
      for (; -1 !== t2; ) {
        if (t2 + 2 >= e2.length || !/^[\da-f]{2}$/iu.test(e2.slice(t2 + 1, t2 + 3))) return true;
        t2 = e2.indexOf("%", t2 + 3);
      }
      return false;
    }
    function I(e2) {
      return "[" === e2[0] && "]" === e2[e2.length - 1];
    }
    function T(e2, t2, r2, n2) {
      if (!t2.unicodeSupport && (!r2 || !r2.unicodeSupport) && e2.host && !I(e2.host) && (t2.domainHost || r2 && r2.domainHost) && false === n2 && h(e2.host)) try {
        e2.host = new URL("http://" + e2.host).hostname;
      } catch (t3) {
        return e2.error = e2.error || "Host's domain name can not be converted to ASCII: " + t3, true;
      }
      return false;
    }
    function C(e2, t2) {
      const r2 = Object.assign({}, t2), s2 = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 };
      let o2 = false, c2 = false, u2 = false, d2 = false, h2 = false, v2 = false, _2 = false;
      "suffix" === r2.reference && (e2 = r2.scheme ? r2.scheme + ":" + e2 : "//" + e2);
      const b2 = e2.match(k);
      null !== b2 && -1 !== b2[1].indexOf("\\") && (s2.error = "URI authority must not contain a literal backslash.", o2 = true);
      const C2 = e2.match(x);
      if (null !== C2) {
        const e3 = C2[1], t3 = e3.replace(/[\t\n\r]/g, "");
        t3.length >= 2 && ("//" !== t3.slice(0, 2) ? (s2.error = s2.error || "URI authority must not contain a literal backslash.", o2 = true) : e3.length !== t3.length && (s2.error = s2.error || "URI authority introducer must not contain whitespace.", o2 = true));
      }
      const P2 = e2.match(S);
      if (P2) {
        if (s2.scheme = P2[1], s2.userinfo = P2[3], s2.host = P2[4], s2.port = parseInt(P2[5], 10), s2.path = P2[6] || "", s2.query = P2[7], s2.fragment = P2[8], void 0 !== s2.scheme) {
          const e3 = unescape(s2.scheme);
          y.test(e3) ? s2.scheme = e3.toLowerCase() : (s2.error = s2.error || w, v2 = true);
        }
        c2 = (function(e3) {
          const t4 = e3[4];
          return E(e3[3]) || void 0 !== t4 && !I(t4) && E(t4) || E(e3[6]) || E(e3[7]) || E(e3[8]);
        })(P2), c2 && (s2.error = s2.error || "URI contains malformed percent-encoding."), isNaN(s2.port) && (s2.port = P2[5]);
        const t3 = (function(e3, t4) {
          return void 0 !== t4[2] && e3.path && "/" !== e3.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e3.port && (e3.port < 0 || e3.port > 65535) ? "URI port is malformed." : void 0;
        })(s2, P2);
        if (void 0 !== t3 && (s2.error = s2.error || t3, o2 = true), s2.host) {
          if (false === m(s2.host)) {
            const e3 = I(s2.host), t4 = -1 !== s2.host.indexOf("[") || -1 !== s2.host.indexOf("]"), r3 = n(s2.host);
            _2 = r3.isIPV6 || true === r3.isIPVFuture, h2 = t4 && (!e3 || true === r3.error), s2.host = _2 ? r3.host : r3.host.toLowerCase(), h2 && (s2.error = s2.error || "URI host is malformed.", o2 = true);
          } else _2 = true;
        }
        void 0 !== s2.scheme || void 0 !== s2.userinfo || void 0 !== s2.host || void 0 !== s2.port || void 0 !== s2.query || s2.path ? void 0 === s2.scheme ? s2.reference = "relative" : void 0 === s2.fragment ? s2.reference = "absolute" : s2.reference = "uri" : s2.reference = "same-document", r2.reference && "suffix" !== r2.reference && r2.reference !== s2.reference && (s2.error = s2.error || "URI is not a " + r2.reference + " reference.");
        const b3 = g(r2.scheme || s2.scheme);
        if (h2 || (d2 = T(s2, r2, b3, _2)), -1 !== e2.indexOf("%") && void 0 !== s2.host && !h2) {
          let e3 = _2 ? s2.host : i(s2.host, true);
          _2 || (e3 = i(e3.toLowerCase())), s2.host = p(e3, _2);
        }
        (!b3 || b3 && !b3.skipNormalize) && (s2.path && (s2.path = a(s2.path)), s2.query && (s2.query = l(s2.query)), s2.fragment && (s2.fragment = l(s2.fragment))), b3 && b3.parse && (b3.parse(s2, r2), b3 === f.urn && void 0 === s2.nid && (u2 = true));
      } else s2.error = s2.error || "URI can not be parsed.";
      return { parsed: s2, malformedAuthorityOrPort: o2, malformedPercentEncoding: c2, malformedSchemeSpecific: u2, malformedHost: d2, malformedScheme: v2 };
    }
    function P(e2, t2) {
      return C(e2, t2).parsed;
    }
    function A(e2, t2) {
      const { parsed: r2, malformedAuthorityOrPort: n2, malformedPercentEncoding: s2, malformedSchemeSpecific: o2, malformedHost: i2, malformedScheme: a2 } = C(e2, t2);
      return { normalized: n2 || s2 || o2 || i2 || a2 ? e2 : b(r2, t2), malformedAuthorityOrPort: n2, malformedPercentEncoding: s2, malformedSchemeSpecific: o2, malformedHost: i2, malformedScheme: a2 };
    }
    function R(e2, t2) {
      if ("string" != typeof e2 && "object" != typeof e2) return;
      let r2;
      try {
        r2 = "string" == typeof e2 ? e2 : b(e2, t2);
      } catch {
        return;
      }
      const { normalized: n2, malformedAuthorityOrPort: s2, malformedPercentEncoding: o2, malformedSchemeSpecific: i2, malformedHost: a2, malformedScheme: c2 } = A(r2, t2);
      return s2 || o2 || i2 || a2 || c2 ? void 0 : n2;
    }
    const M = { SCHEMES: f, normalize: function(e2, t2) {
      return "string" == typeof e2 ? e2 = (function(e3, t3) {
        return A(e3, t3).normalized;
      })(e2, t2) : "object" == typeof e2 && (e2 = P(b(e2, t2), t2)), e2;
    }, resolve: function(e2, t2, r2) {
      const s2 = r2 ? Object.assign({ scheme: "null" }, r2) : { scheme: "null" }, { parsed: o2, malformedAuthorityOrPort: i2, malformedPercentEncoding: a2, malformedSchemeSpecific: c2, malformedHost: l2, malformedScheme: u2 } = C(e2, s2), { parsed: d2, malformedAuthorityOrPort: p2, malformedPercentEncoding: h2, malformedSchemeSpecific: f2, malformedHost: y2, malformedScheme: w2 } = C(t2, s2);
      if (i2 || p2 || a2 || h2 || c2 || f2 || l2 || y2 || u2 || w2) throw new Error(o2.error || d2.error || "URI is malformed.");
      const v2 = _(o2, d2, s2, true), S2 = g(r2 && r2.scheme || v2.scheme), k2 = v2.host;
      T(v2, r2 || {}, S2, void 0 !== k2 && "" !== k2 && (m(k2) || n(k2).isIPV6));
      const x2 = k2 && -1 !== k2.indexOf("%") && !/\P{ASCII}/u.test(k2);
      if (v2.error && !x2) throw new Error(v2.error);
      return s2.skipEscape = true, b(v2, s2);
    }, resolveComponent: _, equal: function(e2, t2, r2) {
      const n2 = R(e2, r2), s2 = R(t2, r2);
      return void 0 !== n2 && void 0 !== s2 && n2 === s2;
    }, serialize: b, parse: P };
    e.exports = M, e.exports.default = M, e.exports.fastUri = M;
  }