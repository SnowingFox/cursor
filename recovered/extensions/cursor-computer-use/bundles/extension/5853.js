// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 5853 range:507064..509319
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
5853: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(4814), s2 = t2(1124), o2 = t2(7902), r = t2(4003), i = t2(4072), A = t2(568), c = t2(9361), { InvalidArgumentError: l } = o2, d = t2(3230), m = t2(3991), u = t2(4826), g = t2(2908), p = t2(5543), E = t2(1862), h = t2(8841), T = t2(2534), { getGlobalDispatcher: k, setGlobalDispatcher: f } = t2(7362), _ = t2(1783), I = t2(1942), C = t2(858);
    let y;
    try {
      t2(6982), y = true;
    } catch {
      y = false;
    }
    function B(e3) {
      return (n3, t3, a3) => {
        if ("function" == typeof t3 && (a3 = t3, t3 = null), !n3 || "string" != typeof n3 && "object" != typeof n3 && !(n3 instanceof URL)) throw new l("invalid url");
        if (null != t3 && "object" != typeof t3) throw new l("invalid opts");
        if (t3 && null != t3.path) {
          if ("string" != typeof t3.path) throw new l("invalid opts.path");
          let e4 = t3.path;
          t3.path.startsWith("/") || (e4 = `/${e4}`), n3 = new URL(c.parseOrigin(n3).origin + e4);
        } else t3 || (t3 = "object" == typeof n3 ? n3 : {}), n3 = c.parseURL(n3);
        const { agent: s3, dispatcher: o3 = k() } = t3;
        if (s3) throw new l("unsupported opts.agent. Did you mean opts.client?");
        return e3.call(o3, { ...t3, origin: n3.origin, path: n3.search ? `${n3.pathname}${n3.search}` : n3.pathname, method: t3.method || (t3.body ? "PUT" : "GET") }, a3);
      };
    }
    if (Object.assign(s2.prototype, d), c.nodeMajor > 16 || 16 === c.nodeMajor && c.nodeMinor >= 8) {
      let n3 = null;
      e2.exports.Headers = t2(2932).Headers, t2(1099).Response, t2(2239).Request, t2(1606).FormData, t2(3322).File, t2(5747).FileReader;
      const { setGlobalOrigin: a3, getGlobalOrigin: s3 } = t2(9523);
      0;
      const { CacheStorage: o3 } = t2(6989), { kConstruct: r2 } = t2(2381);
      new o3(r2);
    }
    if (c.nodeMajor >= 16) {
      const { deleteCookie: e3, getCookies: n3, getSetCookies: a3, setCookie: s3 } = t2(4981);
      0;
      const { parseMIMEType: o3, serializeAMimeType: r2 } = t2(3631);
      0;
    }
    if (c.nodeMajor >= 18 && y) {
      const { WebSocket: e3 } = t2(8430);
      0;
    }
    B(d.request), B(d.stream), B(d.pipeline), B(d.connect), B(d.upgrade);
  }