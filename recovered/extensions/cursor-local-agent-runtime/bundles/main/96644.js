// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 96644 range:7815002..7818324
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96644: (e, t, r) => {
    "use strict";
    const { isUUID: n } = r(30021), o = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, s = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function i(e2) {
      return true === e2.secure || false !== e2.secure && (!!e2.scheme && !(3 !== e2.scheme.length || "w" !== e2.scheme[0] && "W" !== e2.scheme[0] || "s" !== e2.scheme[1] && "S" !== e2.scheme[1] || "s" !== e2.scheme[2] && "S" !== e2.scheme[2]));
    }
    function a(e2) {
      return e2.host || (e2.error = e2.error || "HTTP URIs must have a host."), e2;
    }
    function l(e2) {
      const t2 = "https" === String(e2.scheme).toLowerCase();
      return e2.port !== (t2 ? 443 : 80) && "" !== e2.port || (e2.port = void 0), e2.path || (e2.path = "/"), e2;
    }
    const c = { scheme: "http", domainHost: true, parse: a, serialize: l }, u = { scheme: "ws", domainHost: true, parse: function(e2) {
      return e2.secure = i(e2), e2.resourceName = (e2.path || "/") + (e2.query ? "?" + e2.query : ""), e2.path = void 0, e2.query = void 0, e2;
    }, serialize: function(e2) {
      if (e2.port !== (i(e2) ? 443 : 80) && "" !== e2.port || (e2.port = void 0), "boolean" == typeof e2.secure && (e2.scheme = e2.secure ? "wss" : "ws", e2.secure = void 0), e2.resourceName) {
        const t2 = e2.resourceName.indexOf("?"), r2 = -1 === t2 ? e2.resourceName : e2.resourceName.slice(0, t2);
        e2.path = r2 && "/" !== r2 ? r2 : void 0, e2.query = -1 === t2 ? void 0 : e2.resourceName.slice(t2 + 1), e2.resourceName = void 0;
      }
      return e2.fragment = void 0, e2;
    } }, d = { http: c, https: { scheme: "https", domainHost: c.domainHost, parse: a, serialize: l }, ws: u, wss: { scheme: "wss", domainHost: u.domainHost, parse: u.parse, serialize: u.serialize }, urn: { scheme: "urn", parse: function(e2, t2) {
      if (!e2.path) return e2.error = "URN can not be parsed", e2;
      const r2 = e2.path.match(o);
      if (r2 && r2[0] === e2.path) {
        const n2 = t2.scheme || e2.scheme || "urn";
        e2.nid = r2[1].toLowerCase(), e2.nss = r2[2];
        const o2 = p(`${n2}:${t2.nid || e2.nid}`);
        e2.path = void 0, o2 && (e2 = o2.parse(e2, t2));
      } else e2.error = e2.error || "URN can not be parsed.";
      return e2;
    }, serialize: function(e2, t2) {
      if (void 0 === e2.nid) throw new Error("URN without nid cannot be serialized");
      const r2 = t2.scheme || e2.scheme || "urn", n2 = e2.nid.toLowerCase(), o2 = p(`${r2}:${t2.nid || n2}`);
      o2 && (e2 = o2.serialize(e2, t2));
      const s2 = e2, i2 = e2.nss;
      return s2.path = `${n2 || t2.nid}:${i2}`, t2.skipEscape = true, s2;
    }, skipNormalize: true }, "urn:uuid": { scheme: "urn:uuid", parse: function(e2, t2) {
      const r2 = e2;
      return r2.uuid = r2.nss, r2.nss = void 0, t2.tolerant || r2.uuid && n(r2.uuid) || (r2.error = r2.error || "UUID is not valid."), r2;
    }, serialize: function(e2) {
      const t2 = e2;
      return t2.nss = (e2.uuid || "").toLowerCase(), t2;
    }, skipNormalize: true } };
    function p(e2) {
      return e2 && (d[e2] || d[e2.toLowerCase()]) || void 0;
    }
    Object.setPrototypeOf(d, null), e.exports = { wsIsSecure: i, SCHEMES: d, isValidSchemeName: function(e2) {
      return -1 !== s.indexOf(e2);
    }, getSchemeHandler: p };
  }