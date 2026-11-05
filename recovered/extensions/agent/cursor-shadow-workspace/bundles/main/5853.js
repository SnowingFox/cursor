// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 5853 range:475738..477993
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5853: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(4814), r2 = t2(1124), o2 = t2(7902), s = t2(4003), a = t2(4072), i = t2(568), c = t2(9361), { InvalidArgumentError: l } = o2, g = t2(3230), E = t2(3991), u = t2(4826), d = t2(2908), I = t2(5543), h = t2(1862), Q = t2(8841), m = t2(2534), { getGlobalDispatcher: C, setGlobalDispatcher: B } = t2(7362), p = t2(1783), f = t2(1942), y = t2(858);
    let T;
    try {
      t2(6982), T = true;
    } catch {
      T = false;
    }
    function k(e3) {
      return (A3, t3, n3) => {
        if ("function" == typeof t3 && (n3 = t3, t3 = null), !A3 || "string" != typeof A3 && "object" != typeof A3 && !(A3 instanceof URL)) throw new l("invalid url");
        if (null != t3 && "object" != typeof t3) throw new l("invalid opts");
        if (t3 && null != t3.path) {
          if ("string" != typeof t3.path) throw new l("invalid opts.path");
          let e4 = t3.path;
          t3.path.startsWith("/") || (e4 = `/${e4}`), A3 = new URL(c.parseOrigin(A3).origin + e4);
        } else t3 || (t3 = "object" == typeof A3 ? A3 : {}), A3 = c.parseURL(A3);
        const { agent: r3, dispatcher: o3 = C() } = t3;
        if (r3) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e3.call(o3, { ...t3, origin: A3.origin, path: A3.search ? `${A3.pathname}${A3.search}` : A3.pathname, method: t3.method || (t3.body ? "PUT" : "GET") }, n3);
      };
    }
    if (Object.assign(r2.prototype, g), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
      let A3 = null;
      e2.exports.Headers = t2(2932).Headers, t2(1099).Response, t2(2239).Request, t2(1606).FormData, t2(3322).File, t2(5747).FileReader;
      const { setGlobalOrigin: n3, getGlobalOrigin: r3 } = t2(9523);
      0;
      const { CacheStorage: o3 } = t2(6989), { kConstruct: s2 } = t2(2381);
      new o3(s2);
    }
    if (c.nodeMajor >= 16) {
      const { deleteCookie: e3, getCookies: A3, getSetCookies: n3, setCookie: r3 } = t2(4981);
      0;
      const { parseMIMEType: o3, serializeAMimeType: s2 } = t2(3631);
      0;
    }
    if (c.nodeMajor >= 18 && T) {
      const { WebSocket: e3 } = t2(8430);
      0;
    }
    k(g.request), k(g.stream), k(g.pipeline), k(g.connect), k(g.upgrade);
  }