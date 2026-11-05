// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 3881 range:1011783..1014040
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
3881: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(6602), s2 = r2(4088), i2 = r2(8762), o2 = r2(6215), a = r2(1839), u = r2(7132), c = r2(3589), { InvalidArgumentError: l } = i2, m = r2(9826), d = r2(4003), f = r2(7254), p = r2(5680), h = r2(8843), g = r2(4546), A = r2(9133), _ = r2(2090), { getGlobalDispatcher: y, setGlobalDispatcher: w } = r2(7582), S = r2(3651), J = r2(7378), B = r2(1878);
    let E;
    try {
      r2(6982), E = true;
    } catch {
      E = false;
    }
    function I(t3) {
      return (e3, r3, n3) => {
        if ("function" == typeof r3 && (n3 = r3, r3 = null), !e3 || "string" != typeof e3 && "object" != typeof e3 && !(e3 instanceof URL)) throw new l("invalid url");
        if (null != r3 && "object" != typeof r3) throw new l("invalid opts");
        if (r3 && null != r3.path) {
          if ("string" != typeof r3.path) throw new l("invalid opts.path");
          let t4 = r3.path;
          r3.path.startsWith("/") || (t4 = `/${t4}`), e3 = new URL(c.parseOrigin(e3).origin + t4);
        } else r3 || (r3 = "object" == typeof e3 ? e3 : {}), e3 = c.parseURL(e3);
        const { agent: s3, dispatcher: i3 = y() } = r3;
        if (s3) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return t3.call(i3, { ...r3, origin: e3.origin, path: e3.search ? `${e3.pathname}${e3.search}` : e3.pathname, method: r3.method || (r3.body ? "PUT" : "GET") }, n3);
      };
    }
    if (Object.assign(s2.prototype, m), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
      let e3 = null;
      t2.exports.Headers = r2(2848).Headers, r2(3511).Response, r2(547).Request, r2(6522).FormData, r2(8142).File, r2(7167).FileReader;
      const { setGlobalOrigin: n3, getGlobalOrigin: s3 } = r2(3967);
      0;
      const { CacheStorage: i3 } = r2(5857), { kConstruct: o3 } = r2(7945);
      new i3(o3);
    }
    if (c.nodeMajor >= 16) {
      const { deleteCookie: t3, getCookies: e3, getSetCookies: n3, setCookie: s3 } = r2(5905);
      0;
      const { parseMIMEType: i3, serializeAMimeType: o3 } = r2(4387);
      0;
    }
    if (c.nodeMajor >= 18 && E) {
      const { WebSocket: t3 } = r2(3850);
      0;
    }
    I(m.request), I(m.stream), I(m.pipeline), I(m.connect), I(m.upgrade);
  }