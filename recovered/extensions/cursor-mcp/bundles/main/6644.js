// @recovered-by cursor-re
// artifact: app/extensions/cursor-mcp/dist/main.js sha256:097aeef3cf1f927e9bc6c0d23972c432bbcae8dc0ea353a5b6308dd59620fb49
// module: 6644 range:487897..491233
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
6644: (e2, t2, r2) => {
    "use strict";
    const { isUUID: n2 } = r2(21), o2 = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu, s2 = ["http", "https", "ws", "wss", "urn", "urn:uuid"];
    function i2(e3) {
      return true === e3.secure || false !== e3.secure && (!!e3.scheme && !(3 !== e3.scheme.length || "w" !== e3.scheme[0] && "W" !== e3.scheme[0] || "s" !== e3.scheme[1] && "S" !== e3.scheme[1] || "s" !== e3.scheme[2] && "S" !== e3.scheme[2]));
    }
    function a2(e3) {
      return e3.host || (e3.error = e3.error || "HTTP URIs must have a host."), e3;
    }
    function c(e3) {
      const t3 = "https" === String(e3.scheme).toLowerCase();
      return e3.port !== (t3 ? 443 : 80) && "" !== e3.port || (e3.port = void 0), e3.path || (e3.path = "/"), e3;
    }
    const u = { scheme: "http", domainHost: true, parse: a2, serialize: c }, l = { scheme: "ws", domainHost: true, parse: function(e3) {
      return e3.secure = i2(e3), e3.resourceName = (e3.path || "/") + (e3.query ? "?" + e3.query : ""), e3.path = void 0, e3.query = void 0, e3;
    }, serialize: function(e3) {
      if (e3.port !== (i2(e3) ? 443 : 80) && "" !== e3.port || (e3.port = void 0), "boolean" == typeof e3.secure && (e3.scheme = e3.secure ? "wss" : "ws", e3.secure = void 0), e3.resourceName) {
        const t3 = e3.resourceName.indexOf("?"), r3 = -1 === t3 ? e3.resourceName : e3.resourceName.slice(0, t3);
        e3.path = r3 && "/" !== r3 ? r3 : void 0, e3.query = -1 === t3 ? void 0 : e3.resourceName.slice(t3 + 1), e3.resourceName = void 0;
      }
      return e3.fragment = void 0, e3;
    } }, d = { http: u, https: { scheme: "https", domainHost: u.domainHost, parse: a2, serialize: c }, ws: l, wss: { scheme: "wss", domainHost: l.domainHost, parse: l.parse, serialize: l.serialize }, urn: { scheme: "urn", parse: function(e3, t3) {
      if (!e3.path) return e3.error = "URN can not be parsed", e3;
      const r3 = e3.path.match(o2);
      if (r3 && r3[0] === e3.path) {
        const n3 = t3.scheme || e3.scheme || "urn";
        e3.nid = r3[1].toLowerCase(), e3.nss = r3[2];
        const o3 = p(`${n3}:${t3.nid || e3.nid}`);
        e3.path = void 0, o3 && (e3 = o3.parse(e3, t3));
      } else e3.error = e3.error || "URN can not be parsed.";
      return e3;
    }, serialize: function(e3, t3) {
      if (void 0 === e3.nid) throw new Error("URN without nid cannot be serialized");
      const r3 = t3.scheme || e3.scheme || "urn", n3 = e3.nid.toLowerCase(), o3 = p(`${r3}:${t3.nid || n3}`);
      o3 && (e3 = o3.serialize(e3, t3));
      const s3 = e3, i3 = e3.nss;
      return s3.path = `${n3 || t3.nid}:${i3}`, t3.skipEscape = true, s3;
    }, skipNormalize: true }, "urn:uuid": { scheme: "urn:uuid", parse: function(e3, t3) {
      const r3 = e3;
      return r3.uuid = r3.nss, r3.nss = void 0, t3.tolerant || r3.uuid && n2(r3.uuid) || (r3.error = r3.error || "UUID is not valid."), r3;
    }, serialize: function(e3) {
      const t3 = e3;
      return t3.nss = (e3.uuid || "").toLowerCase(), t3;
    }, skipNormalize: true } };
    function p(e3) {
      return e3 && (d[e3] || d[e3.toLowerCase()]) || void 0;
    }
    Object.setPrototypeOf(d, null), e2.exports = { wsIsSecure: i2, SCHEMES: d, isValidSchemeName: function(e3) {
      return -1 !== s2.indexOf(e3);
    }, getSchemeHandler: p };
  }