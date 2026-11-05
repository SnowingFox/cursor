// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 3881 range:153612..155857
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
3881: (e, t, r) => {
    "use strict";
    const n = r(6602), s = r(74088), o = r(48762), i = r(26215), a = r(14220), c = r(57132), l = r(83589), { InvalidArgumentError: u } = o, d = r(99826), p = r(4003), m = r(47254), h = r(15680), f = r(48843), g = r(24546), y = r(69133), w = r(2090), { getGlobalDispatcher: v, setGlobalDispatcher: _ } = r(17582), A = r(43651), S = r(77378), b = r(31878);
    let E;
    try {
      r(76982), E = true;
    } catch {
      E = false;
    }
    function I(e2) {
      return (t2, r2, n2) => {
        if ("function" == typeof r2 && (n2 = r2, r2 = null), !t2 || "string" != typeof t2 && "object" != typeof t2 && !(t2 instanceof URL)) throw new u("invalid url");
        if (null != r2 && "object" != typeof r2) throw new u("invalid opts");
        if (r2 && null != r2.path) {
          if ("string" != typeof r2.path) throw new u("invalid opts.path");
          let e3 = r2.path;
          r2.path.startsWith("/") || (e3 = `/${e3}`), t2 = new URL(l.parseOrigin(t2).origin + e3);
        } else r2 || (r2 = "object" == typeof t2 ? t2 : {}), t2 = l.parseURL(t2);
        const { agent: s2, dispatcher: o2 = v() } = r2;
        if (s2) throw new u("unsupported opts.agent. Did you mean opts.client?");
        return e2.call(o2, { ...r2, origin: t2.origin, path: t2.search ? `${t2.pathname}${t2.search}` : t2.pathname, method: r2.method || (r2.body ? "PUT" : "GET") }, n2);
      };
    }
    if (Object.assign(s.prototype, d), l.nodeMajor > 16 || 16 === l.nodeMajor && l.nodeMinor >= 8) {
      let t2 = null;
      e.exports.Headers = r(72848).Headers, r(53511).Response, r(30547).Request, r(66522).FormData, r(18142).File, r(47167).FileReader;
      const { setGlobalOrigin: n2, getGlobalOrigin: s2 } = r(13967);
      0;
      const { CacheStorage: o2 } = r(95857), { kConstruct: i2 } = r(17945);
      new o2(i2);
    }
    if (l.nodeMajor >= 16) {
      const { deleteCookie: e2, getCookies: t2, getSetCookies: n2, setCookie: s2 } = r(95905);
      0;
      const { parseMIMEType: o2, serializeAMimeType: i2 } = r(64387);
      0;
    }
    if (l.nodeMajor >= 18 && E) {
      const { WebSocket: e2 } = r(23850);
      0;
    }
    I(d.request), I(d.stream), I(d.pipeline), I(d.connect), I(d.upgrade);
  }