// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 5853 range:583410..585665
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5853: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(4814), r2 = A2(1124), o2 = A2(7902), s = A2(4003), i = A2(4072), a = A2(568), c = A2(9361), { InvalidArgumentError: l } = o2, u = A2(3230), g = A2(3991), E = A2(4826), h = A2(2908), d = A2(5543), I = A2(1862), B = A2(8841), Q = A2(2534), { getGlobalDispatcher: f, setGlobalDispatcher: C } = A2(7362), p = A2(1783), m = A2(1942), y = A2(858);
    let w;
    try {
      A2(6982), w = true;
    } catch {
      w = false;
    }
    function k(e3) {
      return (t3, A3, n3) => {
        if ("function" == typeof A3 && (n3 = A3, A3 = null), !t3 || "string" != typeof t3 && "object" != typeof t3 && !(t3 instanceof URL)) throw new l("invalid url");
        if (null != A3 && "object" != typeof A3) throw new l("invalid opts");
        if (A3 && null != A3.path) {
          if ("string" != typeof A3.path) throw new l("invalid opts.path");
          let e4 = A3.path;
          A3.path.startsWith("/") || (e4 = `/${e4}`), t3 = new URL(c.parseOrigin(t3).origin + e4);
        } else A3 || (A3 = "object" == typeof t3 ? t3 : {}), t3 = c.parseURL(t3);
        const { agent: r3, dispatcher: o3 = f() } = A3;
        if (r3) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e3.call(o3, { ...A3, origin: t3.origin, path: t3.search ? `${t3.pathname}${t3.search}` : t3.pathname, method: A3.method || (A3.body ? "PUT" : "GET") }, n3);
      };
    }
    if (Object.assign(r2.prototype, u), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
      let t3 = null;
      e2.exports.Headers = A2(2932).Headers, A2(1099).Response, A2(2239).Request, A2(1606).FormData, A2(3322).File, A2(5747).FileReader;
      const { setGlobalOrigin: n3, getGlobalOrigin: r3 } = A2(9523);
      0;
      const { CacheStorage: o3 } = A2(6989), { kConstruct: s2 } = A2(2381);
      new o3(s2);
    }
    if (c.nodeMajor >= 16) {
      const { deleteCookie: e3, getCookies: t3, getSetCookies: n3, setCookie: r3 } = A2(4981);
      0;
      const { parseMIMEType: o3, serializeAMimeType: s2 } = A2(3631);
      0;
    }
    if (c.nodeMajor >= 18 && w) {
      const { WebSocket: e3 } = A2(8430);
      0;
    }
    k(u.request), k(u.stream), k(u.pipeline), k(u.connect), k(u.upgrade);
  }