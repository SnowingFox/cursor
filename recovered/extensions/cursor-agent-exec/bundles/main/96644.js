// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 96644 range:11351644..11354966
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
96644: (e, t, r) => {
    "use strict";
    const { isUUID: n } = r(30021), s = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, o = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function i(e2) {
      return true === e2.secure || false !== e2.secure && (!!e2.scheme && !(3 !== e2.scheme.length || "w" !== e2.scheme[0] && "W" !== e2.scheme[0] || "s" !== e2.scheme[1] && "S" !== e2.scheme[1] || "s" !== e2.scheme[2] && "S" !== e2.scheme[2]));
    }
    function a(e2) {
      return e2.host || (e2.error = e2.error || "HTTP URIs must have a host."), e2;
    }
    function c(e2) {
      const t2 = "https" === String(e2.scheme).toLowerCase();
      return e2.port !== (t2 ? 443 : 80) && "" !== e2.port || (e2.port = void 0), e2.path || (e2.path = "/"), e2;
    }
    const l = { scheme: "http", domainHost: true, parse: a, serialize: c }, u = { scheme: "ws", domainHost: true, parse: function(e2) {
      return e2.secure = i(e2), e2.resourceName = (e2.path || "/") + (e2.query ? "?" + e2.query : ""), e2.path = void 0, e2.query = void 0, e2;
    }, serialize: function(e2) {
      if (e2.port !== (i(e2) ? 443 : 80) && "" !== e2.port || (e2.port = void 0), "boolean" == typeof e2.secure && (e2.scheme = e2.secure ? "wss" : "ws", e2.secure = void 0), e2.resourceName) {
        const t2 = e2.resourceName.indexOf("?"), r2 = -1 === t2 ? e2.resourceName : e2.resourceName.slice(0, t2);
        e2.path = r2 && "/" !== r2 ? r2 : void 0, e2.query = -1 === t2 ? void 0 : e2.resourceName.slice(t2 + 1), e2.resourceName = void 0;
      }
      return e2.fragment = void 0, e2;
    } }, d = { http: l, https: { scheme: "https", domainHost: l.domainHost, parse: a, serialize: c }, ws: u, wss: { scheme: "wss", domainHost: u.domainHost, parse: u.parse, serialize: u.serialize }, urn: { scheme: "urn", parse: function(e2, t2) {
      if (!e2.path) return e2.error = "URN can not be parsed", e2;
      const r2 = e2.path.match(s);
      if (r2 && r2[0] === e2.path) {
        const n2 = t2.scheme || e2.scheme || "urn";
        e2.nid = r2[1].toLowerCase(), e2.nss = r2[2];
        const s2 = p(`${n2}:${t2.nid || e2.nid}`);
        e2.path = void 0, s2 && (e2 = s2.parse(e2, t2));
      } else e2.error = e2.error || "URN can not be parsed.";
      return e2;
    }, serialize: function(e2, t2) {
      if (void 0 === e2.nid) throw new Error("URN without nid cannot be serialized");
      const r2 = t2.scheme || e2.scheme || "urn", n2 = e2.nid.toLowerCase(), s2 = p(`${r2}:${t2.nid || n2}`);
      s2 && (e2 = s2.serialize(e2, t2));
      const o2 = e2, i2 = e2.nss;
      return o2.path = `${n2 || t2.nid}:${i2}`, t2.skipEscape = true, o2;
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
      return -1 !== o.indexOf(e2);
    }, getSchemeHandler: p };
  }