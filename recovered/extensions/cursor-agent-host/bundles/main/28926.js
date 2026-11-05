// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 28926 range:4869446..4871999
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
28926: (e, t, r) => {
    "use strict";
    r.d(t, { JC: () => d, SW: () => u, sO: () => l });
    var n = r(36038), s = r(22083), o = r(96367), i = r(10278), a = r(40328), c = r(8032);
    function l(e2) {
      var t2, r2, n2;
      null != e2 || (e2 = {});
      const s2 = e2.acceptCompression ? [...e2.acceptCompression] : [], o2 = null !== (t2 = e2.requireConnectProtocolHeader) && void 0 !== t2 && t2, a2 = null !== (r2 = e2.maxTimeoutMs) && void 0 !== r2 ? r2 : Number.MAX_SAFE_INTEGER;
      return Object.assign(Object.assign({ acceptCompression: s2 }, (0, i.NL)(e2.readMaxBytes, e2.writeMaxBytes, e2.compressMinBytes)), { jsonOptions: e2.jsonOptions, binaryOptions: e2.binaryOptions, maxTimeoutMs: a2, shutdownSignal: e2.shutdownSignal, requireConnectProtocolHeader: o2, interceptors: null !== (n2 = e2.interceptors) && void 0 !== n2 ? n2 : [] });
    }
    function u(e2, t2) {
      return Object.entries(e2.methods).map(([, e3]) => d(e3, t2));
    }
    function d(e2, t2) {
      return (function(e3) {
        if (0 == e3.length) throw new a.T("at least one protocol is required", c.C.Internal);
        const t3 = e3[0].service, r2 = e3[0].method, i2 = e3[0].requestPath;
        if (e3.some((e4) => e4.service !== t3 || e4.method !== r2)) throw new a.T("cannot negotiate protocol for different RPCs", c.C.Internal);
        if (e3.some((e4) => e4.requestPath !== i2)) throw new a.T("cannot negotiate protocol for different requestPaths", c.C.Internal);
        async function l2(t4) {
          var o2;
          if (r2.kind == n.MethodKind.BiDiStreaming && t4.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, s.kF), { header: new Headers({ Connection: "close" }) });
          const i3 = null !== (o2 = t4.header.get("Content-Type")) && void 0 !== o2 ? o2 : "", a2 = e3.filter((e4) => e4.allowedMethods.includes(t4.method));
          if (0 == a2.length) return s.nZ;
          if (1 == a2.length && "" === i3) {
            return (0, a2[0])(t4);
          }
          const c2 = a2.filter((e4) => e4.supportedContentType(i3));
          if (0 == c2.length) return s._L;
          return (0, c2[0])(t4);
        }
        return Object.assign(l2, { service: t3, method: r2, requestPath: i2, supportedContentType: (0, o.Y)(...e3.map((e4) => e4.supportedContentType)), protocolNames: e3.flatMap((e4) => e4.protocolNames).filter((e4, t4, r3) => r3.indexOf(e4) === t4), allowedMethods: e3.flatMap((e4) => e4.allowedMethods).filter((e4, t4, r3) => r3.indexOf(e4) === t4) });
      })(t2.map((t3) => t3(e2)));
    }
  }