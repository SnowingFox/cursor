// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 5853 range:782615..784872
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5853: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(4814), s2 = n2(1124), o2 = n2(7902), r2 = n2(4003), i2 = n2(4072), l = n2(568), d = n2(9361), { InvalidArgumentError: m } = o2, c = n2(3230), p = n2(3991), A = n2(4826), u = n2(2908), g = n2(5543), T = n2(1862), h = n2(8841), k = n2(2534), { getGlobalDispatcher: _, setGlobalDispatcher: E } = n2(7362), f = n2(1783), C = n2(1942), I = n2(858);
    let v;
    try {
      n2(6982), v = true;
    } catch {
      v = false;
    }
    function y(e3) {
      return (a3, n3, t3) => {
        if ("function" == typeof n3 && (t3 = n3, n3 = null), !a3 || "string" != typeof a3 && "object" != typeof a3 && !(a3 instanceof URL)) throw new m("invalid url");
        if (null != n3 && "object" != typeof n3) throw new m("invalid opts");
        if (n3 && null != n3.path) {
          if ("string" != typeof n3.path) throw new m("invalid opts.path");
          let e4 = n3.path;
          n3.path.startsWith("/") || (e4 = `/${e4}`), a3 = new URL(d.parseOrigin(a3).origin + e4);
        } else n3 || (n3 = "object" == typeof a3 ? a3 : {}), a3 = d.parseURL(a3);
        const { agent: s3, dispatcher: o3 = _() } = n3;
        if (s3) throw new m("unsupported opts.agent. Did you mean opts.client?");
        return e3.call(o3, { ...n3, origin: a3.origin, path: a3.search ? `${a3.pathname}${a3.search}` : a3.pathname, method: n3.method || (n3.body ? "PUT" : "GET") }, t3);
      };
    }
    if (Object.assign(s2.prototype, c), d.nodeMajor > 16 || 16 === d.nodeMajor && d.nodeMinor >= 8) {
      let a3 = null;
      e2.exports.Headers = n2(2932).Headers, n2(1099).Response, n2(2239).Request, n2(1606).FormData, n2(3322).File, n2(5747).FileReader;
      const { setGlobalOrigin: t3, getGlobalOrigin: s3 } = n2(9523);
      0;
      const { CacheStorage: o3 } = n2(6989), { kConstruct: r3 } = n2(2381);
      new o3(r3);
    }
    if (d.nodeMajor >= 16) {
      const { deleteCookie: e3, getCookies: a3, getSetCookies: t3, setCookie: s3 } = n2(4981);
      0;
      const { parseMIMEType: o3, serializeAMimeType: r3 } = n2(3631);
      0;
    }
    if (d.nodeMajor >= 18 && v) {
      const { WebSocket: e3 } = n2(8430);
      0;
    }
    y(c.request), y(c.stream), y(c.pipeline), y(c.connect), y(c.upgrade);
  }