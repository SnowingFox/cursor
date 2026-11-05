// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 8926 range:5422966..5425532
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8926: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { JC: () => m, SW: () => l, sO: () => c });
    var n2 = r2(6038), s2 = r2(2083), i2 = r2(6367), o2 = r2(278), a = r2(328), u = r2(8032);
    function c(t3) {
      var e3, r3, n3;
      null != t3 || (t3 = {});
      const s3 = t3.acceptCompression ? [...t3.acceptCompression] : [], i3 = null !== (e3 = t3.requireConnectProtocolHeader) && void 0 !== e3 && e3, a2 = null !== (r3 = t3.maxTimeoutMs) && void 0 !== r3 ? r3 : Number.MAX_SAFE_INTEGER;
      return Object.assign(Object.assign({ acceptCompression: s3 }, (0, o2.NL)(t3.readMaxBytes, t3.writeMaxBytes, t3.compressMinBytes)), { jsonOptions: t3.jsonOptions, binaryOptions: t3.binaryOptions, maxTimeoutMs: a2, shutdownSignal: t3.shutdownSignal, requireConnectProtocolHeader: i3, interceptors: null !== (n3 = t3.interceptors) && void 0 !== n3 ? n3 : [] });
    }
    function l(t3, e3) {
      return Object.entries(t3.methods).map(([, t4]) => m(t4, e3));
    }
    function m(t3, e3) {
      return (function(t4) {
        if (0 == t4.length) throw new a.T("at least one protocol is required", u.C.Internal);
        const e4 = t4[0].service, r3 = t4[0].method, o3 = t4[0].requestPath;
        if (t4.some((t5) => t5.service !== e4 || t5.method !== r3)) throw new a.T("cannot negotiate protocol for different RPCs", u.C.Internal);
        if (t4.some((t5) => t5.requestPath !== o3)) throw new a.T("cannot negotiate protocol for different requestPaths", u.C.Internal);
        async function c2(e5) {
          var i3;
          if (r3.kind == n2.MethodKind.BiDiStreaming && e5.httpVersion.startsWith("1.")) return Object.assign(Object.assign({}, s2.kF), { header: new Headers({ Connection: "close" }) });
          const o4 = null !== (i3 = e5.header.get("Content-Type")) && void 0 !== i3 ? i3 : "", a2 = t4.filter((t5) => t5.allowedMethods.includes(e5.method));
          if (0 == a2.length) return s2.nZ;
          if (1 == a2.length && "" === o4) {
            return (0, a2[0])(e5);
          }
          const u2 = a2.filter((t5) => t5.supportedContentType(o4));
          if (0 == u2.length) return s2._L;
          return (0, u2[0])(e5);
        }
        return Object.assign(c2, { service: e4, method: r3, requestPath: o3, supportedContentType: (0, i2.Y)(...t4.map((t5) => t5.supportedContentType)), protocolNames: t4.flatMap((t5) => t5.protocolNames).filter((t5, e5, r4) => r4.indexOf(t5) === e5), allowedMethods: t4.flatMap((t5) => t5.allowedMethods).filter((t5, e5, r4) => r4.indexOf(t5) === e5) });
      })(e3.map((e4) => e4(t3)));
    }
  }