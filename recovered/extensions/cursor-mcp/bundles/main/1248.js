// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 1248 range:152779..162576
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1248: (e2, t2, r2) => {
    "use strict";
    const { normalizeIPv6: n2, removeDotSegments: o2, recomposeAuthority: s2, normalizePercentEncoding: i2, normalizePathEncoding: a2, serializePathEncoding: c, normalizeQueryFragmentEncoding: u, encodeQuery: l, encodeFragment: d, reescapeHostDelimiters: p, isIPv4: f, nonSimpleDomain: h } = r2(21), { SCHEMES: m, getSchemeHandler: g } = r2(6644), y = /^[A-Za-z][A-Za-z0-9+.-]*$/u, _ = "URI scheme is malformed.";
    function v(e3) {
      const t3 = unescape(String(e3));
      if (!y.test(t3)) throw new TypeError(_);
      return t3;
    }
    function w(e3, t3, r3, n3) {
      const s3 = {};
      return n3 || (e3 = I(b(e3, r3), r3), t3 = I(b(t3, r3), r3)), !(r3 = r3 || {}).tolerant && t3.scheme ? (s3.scheme = t3.scheme, s3.userinfo = t3.userinfo, s3.host = t3.host, s3.port = t3.port, s3.path = o2(t3.path || ""), s3.query = t3.query) : (void 0 !== t3.userinfo || void 0 !== t3.host || void 0 !== t3.port ? (s3.userinfo = t3.userinfo, s3.host = t3.host, s3.port = t3.port, s3.path = o2(t3.path || ""), s3.query = t3.query) : (t3.path ? ("/" === t3.path[0] ? s3.path = o2(t3.path) : (void 0 === e3.userinfo && void 0 === e3.host && void 0 === e3.port || e3.path ? e3.path ? s3.path = e3.path.slice(0, e3.path.lastIndexOf("/") + 1) + t3.path : s3.path = t3.path : s3.path = "/" + t3.path, s3.path = o2(s3.path)), s3.query = t3.query) : (s3.path = e3.path, void 0 !== t3.query ? s3.query = t3.query : s3.query = e3.query), s3.userinfo = e3.userinfo, s3.host = e3.host, s3.port = e3.port), s3.scheme = e3.scheme), s3.fragment = t3.fragment, s3;
    }
    function b(e3, t3) {
      const r3 = { host: e3.host, scheme: e3.scheme, userinfo: e3.userinfo, port: e3.port, path: e3.path, query: e3.query, nid: e3.nid, nss: e3.nss, uuid: e3.uuid, fragment: e3.fragment, reference: e3.reference, resourceName: e3.resourceName, secure: e3.secure, error: "" }, n3 = Object.assign({}, t3), a3 = [];
      r3.scheme && (r3.scheme = v(r3.scheme));
      const u2 = g(n3.scheme || r3.scheme);
      u2 && u2.serialize && u2.serialize(r3, n3);
      const p2 = void 0 !== r3.userinfo || void 0 !== r3.host || void 0 !== r3.port, f2 = !n3.skipEscape && void 0 === r3.scheme && !p2;
      void 0 !== r3.path && (n3.skipEscape ? r3.path = i2(r3.path) : r3.path = c(r3.path, f2)), "suffix" !== n3.reference && r3.scheme && (r3.scheme = v(r3.scheme), a3.push(r3.scheme, ":"));
      const h2 = s2(r3);
      if (void 0 !== h2 && ("suffix" !== n3.reference && a3.push("//"), a3.push(h2), r3.path && "/" !== r3.path[0] && a3.push("/")), void 0 !== r3.path) {
        let e4 = r3.path;
        n3.absolutePath || u2 && u2.absolutePath || (e4 = o2(e4)), f2 && (e4 = c(e4, true)), void 0 === h2 && "/" === e4[0] && "/" === e4[1] && (e4 = "/%2F" + e4.slice(2)), a3.push(e4);
      }
      return void 0 !== r3.query && a3.push("?", l(r3.query)), void 0 !== r3.fragment && a3.push("#", d(r3.fragment)), a3.join("");
    }
    const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u, k = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/, E = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
    function x(e3) {
      if (void 0 === e3) return false;
      let t3 = e3.indexOf("%");
      for (; -1 !== t3; ) {
        if (t3 + 2 >= e3.length || !/^[\da-f]{2}$/iu.test(e3.slice(t3 + 1, t3 + 3))) return true;
        t3 = e3.indexOf("%", t3 + 3);
      }
      return false;
    }
    function T(e3) {
      return "[" === e3[0] && "]" === e3[e3.length - 1];
    }
    function O(e3, t3, r3, n3) {
      if (!t3.unicodeSupport && (!r3 || !r3.unicodeSupport) && e3.host && !T(e3.host) && (t3.domainHost || r3 && r3.domainHost) && false === n3 && h(e3.host)) try {
        e3.host = new URL("http://" + e3.host).hostname;
      } catch (t4) {
        return e3.error = e3.error || "Host's domain name can not be converted to ASCII: " + t4, true;
      }
      return false;
    }
    function P(e3, t3) {
      const r3 = Object.assign({}, t3), o3 = { scheme: void 0, userinfo: void 0, host: "", port: void 0, path: "", query: void 0, fragment: void 0 };
      let s3 = false, c2 = false, l2 = false, d2 = false, h2 = false, v2 = false, w2 = false;
      "suffix" === r3.reference && (e3 = r3.scheme ? r3.scheme + ":" + e3 : "//" + e3);
      const b2 = e3.match(k);
      null !== b2 && -1 !== b2[1].indexOf("\\") && (o3.error = "URI authority must not contain a literal backslash.", s3 = true);
      const P2 = e3.match(E);
      if (null !== P2) {
        const e4 = P2[1], t4 = e4.replace(/[\t\n\r]/g, "");
        t4.length >= 2 && ("//" !== t4.slice(0, 2) ? (o3.error = o3.error || "URI authority must not contain a literal backslash.", s3 = true) : e4.length !== t4.length && (o3.error = o3.error || "URI authority introducer must not contain whitespace.", s3 = true));
      }
      const I2 = e3.match(S);
      if (I2) {
        if (o3.scheme = I2[1], o3.userinfo = I2[3], o3.host = I2[4], o3.port = parseInt(I2[5], 10), o3.path = I2[6] || "", o3.query = I2[7], o3.fragment = I2[8], void 0 !== o3.scheme) {
          const e4 = unescape(o3.scheme);
          y.test(e4) ? o3.scheme = e4.toLowerCase() : (o3.error = o3.error || _, v2 = true);
        }
        c2 = (function(e4) {
          const t5 = e4[4];
          return x(e4[3]) || void 0 !== t5 && !T(t5) && x(t5) || x(e4[6]) || x(e4[7]) || x(e4[8]);
        })(I2), c2 && (o3.error = o3.error || "URI contains malformed percent-encoding."), isNaN(o3.port) && (o3.port = I2[5]);
        const t4 = (function(e4, t5) {
          return void 0 !== t5[2] && e4.path && "/" !== e4.path[0] ? 'URI path must start with "/" when authority is present.' : "number" == typeof e4.port && (e4.port < 0 || e4.port > 65535) ? "URI port is malformed." : void 0;
        })(o3, I2);
        if (void 0 !== t4 && (o3.error = o3.error || t4, s3 = true), o3.host) {
          if (false === f(o3.host)) {
            const e4 = T(o3.host), t5 = -1 !== o3.host.indexOf("[") || -1 !== o3.host.indexOf("]"), r4 = n2(o3.host);
            w2 = r4.isIPV6 || true === r4.isIPVFuture, h2 = t5 && (!e4 || true === r4.error), o3.host = w2 ? r4.host : r4.host.toLowerCase(), h2 && (o3.error = o3.error || "URI host is malformed.", s3 = true);
          } else w2 = true;
        }
        void 0 !== o3.scheme || void 0 !== o3.userinfo || void 0 !== o3.host || void 0 !== o3.port || void 0 !== o3.query || o3.path ? void 0 === o3.scheme ? o3.reference = "relative" : void 0 === o3.fragment ? o3.reference = "absolute" : o3.reference = "uri" : o3.reference = "same-document", r3.reference && "suffix" !== r3.reference && r3.reference !== o3.reference && (o3.error = o3.error || "URI is not a " + r3.reference + " reference.");
        const b3 = g(r3.scheme || o3.scheme);
        if (h2 || (d2 = O(o3, r3, b3, w2)), -1 !== e3.indexOf("%") && void 0 !== o3.host && !h2) {
          let e4 = w2 ? o3.host : i2(o3.host, true);
          w2 || (e4 = i2(e4.toLowerCase())), o3.host = p(e4, w2);
        }
        (!b3 || b3 && !b3.skipNormalize) && (o3.path && (o3.path = a2(o3.path)), o3.query && (o3.query = u(o3.query)), o3.fragment && (o3.fragment = u(o3.fragment))), b3 && b3.parse && (b3.parse(o3, r3), b3 === m.urn && void 0 === o3.nid && (l2 = true));
      } else o3.error = o3.error || "URI can not be parsed.";
      return { parsed: o3, malformedAuthorityOrPort: s3, malformedPercentEncoding: c2, malformedSchemeSpecific: l2, malformedHost: d2, malformedScheme: v2 };
    }
    function I(e3, t3) {
      return P(e3, t3).parsed;
    }
    function C(e3, t3) {
      const { parsed: r3, malformedAuthorityOrPort: n3, malformedPercentEncoding: o3, malformedSchemeSpecific: s3, malformedHost: i3, malformedScheme: a3 } = P(e3, t3);
      return { normalized: n3 || o3 || s3 || i3 || a3 ? e3 : b(r3, t3), malformedAuthorityOrPort: n3, malformedPercentEncoding: o3, malformedSchemeSpecific: s3, malformedHost: i3, malformedScheme: a3 };
    }
    function A(e3, t3) {
      if ("string" != typeof e3 && "object" != typeof e3) return;
      let r3;
      try {
        r3 = "string" == typeof e3 ? e3 : b(e3, t3);
      } catch {
        return;
      }
      const { normalized: n3, malformedAuthorityOrPort: o3, malformedPercentEncoding: s3, malformedSchemeSpecific: i3, malformedHost: a3, malformedScheme: c2 } = C(r3, t3);
      return o3 || s3 || i3 || a3 || c2 ? void 0 : n3;
    }
    const $ = { SCHEMES: m, normalize: function(e3, t3) {
      return "string" == typeof e3 ? e3 = (function(e4, t4) {
        return C(e4, t4).normalized;
      })(e3, t3) : "object" == typeof e3 && (e3 = I(b(e3, t3), t3)), e3;
    }, resolve: function(e3, t3, r3) {
      const o3 = r3 ? Object.assign({ scheme: "null" }, r3) : { scheme: "null" }, { parsed: s3, malformedAuthorityOrPort: i3, malformedPercentEncoding: a3, malformedSchemeSpecific: c2, malformedHost: u2, malformedScheme: l2 } = P(e3, o3), { parsed: d2, malformedAuthorityOrPort: p2, malformedPercentEncoding: h2, malformedSchemeSpecific: m2, malformedHost: y2, malformedScheme: _2 } = P(t3, o3);
      if (i3 || p2 || a3 || h2 || c2 || m2 || u2 || y2 || l2 || _2) throw new Error(s3.error || d2.error || "URI is malformed.");
      const v2 = w(s3, d2, o3, true), S2 = g(r3 && r3.scheme || v2.scheme), k2 = v2.host;
      O(v2, r3 || {}, S2, void 0 !== k2 && "" !== k2 && (f(k2) || n2(k2).isIPV6));
      const E2 = k2 && -1 !== k2.indexOf("%") && !/\P{ASCII}/u.test(k2);
      if (v2.error && !E2) throw new Error(v2.error);
      return o3.skipEscape = true, b(v2, o3);
    }, resolveComponent: w, equal: function(e3, t3, r3) {
      const n3 = A(e3, r3), o3 = A(t3, r3);
      return void 0 !== n3 && void 0 !== o3 && n3 === o3;
    }, serialize: b, parse: I };
    e2.exports = $, e2.exports.default = $, e2.exports.fastUri = $;
  }