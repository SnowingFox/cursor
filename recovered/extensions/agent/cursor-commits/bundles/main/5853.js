// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 5853 range:476220..478477
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5853: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(4814), s2 = a2(1124), o2 = a2(7902), r2 = a2(4003), i2 = a2(4072), A = a2(568), l = a2(9361), { InvalidArgumentError: c } = o2, m = a2(3230), d = a2(3991), g = a2(4826), u = a2(2908), E = a2(5543), p = a2(1862), T = a2(8841), k = a2(2534), { getGlobalDispatcher: I, setGlobalDispatcher: h } = a2(7362), _ = a2(1783), C = a2(1942), f = a2(858);
    let B;
    try {
      a2(6982), B = true;
    } catch {
      B = false;
    }
    function Q(e3) {
      return (n3, a3, t3) => {
        if ("function" == typeof a3 && (t3 = a3, a3 = null), !n3 || "string" != typeof n3 && "object" != typeof n3 && !(n3 instanceof URL)) throw new c("invalid url");
        if (null != a3 && "object" != typeof a3) throw new c("invalid opts");
        if (a3 && null != a3.path) {
          if ("string" != typeof a3.path) throw new c("invalid opts.path");
          let e4 = a3.path;
          a3.path.startsWith("/") || (e4 = `/${e4}`), n3 = new URL(l.parseOrigin(n3).origin + e4);
        } else a3 || (a3 = "object" == typeof n3 ? n3 : {}), n3 = l.parseURL(n3);
        const { agent: s3, dispatcher: o3 = I() } = a3;
        if (s3) throw new c("unsupported opts.agent. Did you mean opts.client?");
        return e3.call(o3, { ...a3, origin: n3.origin, path: n3.search ? `${n3.pathname}${n3.search}` : n3.pathname, method: a3.method || (a3.body ? "PUT" : "GET") }, t3);
      };
    }
    if (Object.assign(s2.prototype, m), l.nodeMajor > 16 || 16 === l.nodeMajor && l.nodeMinor >= 8) {
      let n3 = null;
      e2.exports.Headers = a2(2932).Headers, a2(1099).Response, a2(2239).Request, a2(1606).FormData, a2(3322).File, a2(5747).FileReader;
      const { setGlobalOrigin: t3, getGlobalOrigin: s3 } = a2(9523);
      0;
      const { CacheStorage: o3 } = a2(6989), { kConstruct: r3 } = a2(2381);
      new o3(r3);
    }
    if (l.nodeMajor >= 16) {
      const { deleteCookie: e3, getCookies: n3, getSetCookies: t3, setCookie: s3 } = a2(4981);
      0;
      const { parseMIMEType: o3, serializeAMimeType: r3 } = a2(3631);
      0;
    }
    if (l.nodeMajor >= 18 && B) {
      const { WebSocket: e3 } = a2(8430);
      0;
    }
    Q(m.request), Q(m.stream), Q(m.pipeline), Q(m.connect), Q(m.upgrade);
  }