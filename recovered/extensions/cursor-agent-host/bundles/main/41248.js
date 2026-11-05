// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41248 range:7640805..7650582
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
      return n2 || (e2 = T(A(e2, r2), r2), t2 = T(A(t2, r2), r2)), !(r2 = r2 || {}).tolerant && t2.scheme ? (o2.scheme = t2.scheme, o2.userinfo = t2.userinfo, o2.host = t2.host, o2.port = t2.port, o2.path = s(t2.path || ""), o2.query = t2.query) : (void 0 !== t2.userinfo || void 0 !== t2.host || void 0 !== t2.port ? (o2.userinfo = t2.userinfo, o2.host = t2.host, o2.port = t2.port, o2.path = s(t2.path || ""), o2.query = t2.query) : (t2.path ? ("/" === t2.path[0] ? o2.path = s(t2.path) : (void 0 === e2.userinfo && void 0 === e2.host && void 0 === e2.port || e2.path ? e2.path ? o2.path = e2.path.slice(0, e2.path.lastIndexOf("/") + 1) + t2.path : o2.path = t2.path : o2.path = "/" + t2.path, o2.path = s(o2.path)), o2.query = t2.query) : (o2.path = e2.path, void 0 !== t2.query ? o2.query = t2.query : o2.query = e2.query), o2.userinfo = e2.userinfo, o2.host = e2.host, o2.port = e2.port), o2.scheme = e2.scheme), o2.fragment = t2.fragment, o2;
    }
    function A(e2, t2) {
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
    const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, b = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function I(e2) {
      if (void 0 === e2) return false;
      let t2 = e2.indexOf("%");
      for (; -1 !== t2; ) {
        if (t2 + 2 >= e2.length || !/^[\da-f]{2}$/iu.test(e2.slice(t2 + 1, t2 + 3))) return true;
        t2 = e2.indexOf("%", t2 + 3);
      }
      return false;
    }
    function C(e2) {
      return "[" === e2[0] && "]" === e2[e2.length - 1];
    }
    function k(e2, t2, r2, n2) {
      if (!t2.unicodeSupport && (!r2 || !r2.unicodeSupport) && e2.host && !C(e2.host) && (t2.domainHost || r2 && r2.domainHost) && false === n2 && h(e2.host)) try {
        e2.host = new URL("http://" + e2.host).hostname;
      } catch (t3) {
        return e2.error = e2.error || "Host's domain name can not be converted to ASCII: " + t3, true;
      }
      return false;
    }
    function x(e2, t2) {
      const r2 = Object.assign({}, t2), s2 = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 };
      let o2 = false, c2 = false, u2 = false, d2 = false, h2 = false, v2 = false, _2 = false;
      "suffix" === r2.reference && (e2 = r2.scheme ? r2.scheme + ":" + e2 : "//" + e2);
      const A2 = e2.match(b);
      null !== A2 && -1 !== A2[1].indexOf("\\") && (s2.error = "URI authority must not contain a literal backslash.", o2 = true);
      const x2 = e2.match(E);
      if (null !== x2) {
        const e3 = x2[1], t3 = e3.replace(/[\t\n\r]/g, "");
        t3.length >= 2 && ("//" !== t3.slice(0, 2) ? (s2.error = s2.error || "URI authority must not contain a literal backslash.", o2 = true) : e3.length !== t3.length && (s2.error = s2.error || "URI authority introducer must not contain whitespace.", o2 = true));
      }
      const T2 = e2.match(S);
      if (T2) {
        if (s2.scheme = T2[1], s2.userinfo = T2[3], s2.host = T2[4], s2.port = parseInt(T2[5], 10), s2.path = T2[6] || "", s2.query = T2[7], s2.fragment = T2[8], void 0 !== s2.scheme) {
          const e3 = unescape(s2.scheme);
          y.test(e3) ? s2.scheme = e3.toLowerCase() : (s2.error = s2.error || w, v2 = true);
        }
        c2 = (function(e3) {
          const t4 = e3[4];
          return I(e3[3]) || void 0 !== t4 && !C(t4) && I(t4) || I(e3[6]) || I(e3[7]) || I(e3[8]);
        })(T2), c2 && (s2.error = s2.error || "URI contains malformed percent-encoding."), isNaN(s2.port) && (s2.port = T2[5]);
        const t3 = (function(e3, t4) {
          return void 0 !== t4[2] && e3.path && "/" !== e3.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e3.port && (e3.port < 0 || e3.port > 65535) ? "URI port is malformed." : void 0;
        })(s2, T2);
        if (void 0 !== t3 && (s2.error = s2.error || t3, o2 = true), s2.host) {
          if (false === m(s2.host)) {
            const e3 = C(s2.host), t4 = -1 !== s2.host.indexOf("[") || -1 !== s2.host.indexOf("]"), r3 = n(s2.host);
            _2 = r3.isIPV6 || true === r3.isIPVFuture, h2 = t4 && (!e3 || true === r3.error), s2.host = _2 ? r3.host : r3.host.toLowerCase(), h2 && (s2.error = s2.error || "URI host is malformed.", o2 = true);
          } else _2 = true;
        }
        void 0 !== s2.scheme || void 0 !== s2.userinfo || void 0 !== s2.host || void 0 !== s2.port || void 0 !== s2.query || s2.path ? void 0 === s2.scheme ? s2.reference = "relative" : void 0 === s2.fragment ? s2.reference = "absolute" : s2.reference = "uri" : s2.reference = "same-document", r2.reference && "suffix" !== r2.reference && r2.reference !== s2.reference && (s2.error = s2.error || "URI is not a " + r2.reference + " reference.");
        const A3 = g(r2.scheme || s2.scheme);
        if (h2 || (d2 = k(s2, r2, A3, _2)), -1 !== e2.indexOf("%") && void 0 !== s2.host && !h2) {
          let e3 = _2 ? s2.host : i(s2.host, true);
          _2 || (e3 = i(e3.toLowerCase())), s2.host = p(e3, _2);
        }
        (!A3 || A3 && !A3.skipNormalize) && (s2.path && (s2.path = a(s2.path)), s2.query && (s2.query = l(s2.query)), s2.fragment && (s2.fragment = l(s2.fragment))), A3 && A3.parse && (A3.parse(s2, r2), A3 === f.urn && void 0 === s2.nid && (u2 = true));
      } else s2.error = s2.error || "URI can not be parsed.";
      return { parsed: s2, malformedAuthorityOrPort: o2, malformedPercentEncoding: c2, malformedSchemeSpecific: u2, malformedHost: d2, malformedScheme: v2 };
    }
    function T(e2, t2) {
      return x(e2, t2).parsed;
    }
    function R(e2, t2) {
      const { parsed: r2, malformedAuthorityOrPort: n2, malformedPercentEncoding: s2, malformedSchemeSpecific: o2, malformedHost: i2, malformedScheme: a2 } = x(e2, t2);
      return { normalized: n2 || s2 || o2 || i2 || a2 ? e2 : A(r2, t2), malformedAuthorityOrPort: n2, malformedPercentEncoding: s2, malformedSchemeSpecific: o2, malformedHost: i2, malformedScheme: a2 };
    }
    function B(e2, t2) {
      if ("string" != typeof e2 && "object" != typeof e2) return;
      let r2;
      try {
        r2 = "string" == typeof e2 ? e2 : A(e2, t2);
      } catch {
        return;
      }
      const { normalized: n2, malformedAuthorityOrPort: s2, malformedPercentEncoding: o2, malformedSchemeSpecific: i2, malformedHost: a2, malformedScheme: c2 } = R(r2, t2);
      return s2 || o2 || i2 || a2 || c2 ? void 0 : n2;
    }
    const P = { SCHEMES: f, normalize: function(e2, t2) {
      return "string" == typeof e2 ? e2 = (function(e3, t3) {
        return R(e3, t3).normalized;
      })(e2, t2) : "object" == typeof e2 && (e2 = T(A(e2, t2), t2)), e2;
    }, resolve: function(e2, t2, r2) {
      const s2 = r2 ? Object.assign({ scheme: "null" }, r2) : { scheme: "null" }, { parsed: o2, malformedAuthorityOrPort: i2, malformedPercentEncoding: a2, malformedSchemeSpecific: c2, malformedHost: l2, malformedScheme: u2 } = x(e2, s2), { parsed: d2, malformedAuthorityOrPort: p2, malformedPercentEncoding: h2, malformedSchemeSpecific: f2, malformedHost: y2, malformedScheme: w2 } = x(t2, s2);
      if (i2 || p2 || a2 || h2 || c2 || f2 || l2 || y2 || u2 || w2) throw new Error(o2.error || d2.error || "URI is malformed.");
      const v2 = _(o2, d2, s2, true), S2 = g(r2 && r2.scheme || v2.scheme), b2 = v2.host;
      k(v2, r2 || {}, S2, void 0 !== b2 && "" !== b2 && (m(b2) || n(b2).isIPV6));
      const E2 = b2 && -1 !== b2.indexOf("%") && !/\P{ASCII}/u.test(b2);
      if (v2.error && !E2) throw new Error(v2.error);
      return s2.skipEscape = true, A(v2, s2);
    }, resolveComponent: _, equal: function(e2, t2, r2) {
      const n2 = B(e2, r2), s2 = B(t2, r2);
      return void 0 !== n2 && void 0 !== s2 && n2 === s2;
    }, serialize: A, parse: T };
    e.exports = P, e.exports.default = P, e.exports.fastUri = P;
  }