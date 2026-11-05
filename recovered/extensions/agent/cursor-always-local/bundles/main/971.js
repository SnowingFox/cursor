// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 971 range:372594..374052
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
971: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { B8: () => u, OD: () => a, bz: () => c });
    r2(6038);
    var n2 = r2(328), s2 = r2(8032), i2 = r2(9983), o2 = r2(3621);
    function a(t3) {
      var e3;
      let r3;
      if (void 0 !== t3.timeoutMs) {
        const e4 = new Date(Date.now() + t3.timeoutMs);
        r3 = () => e4.getTime() - Date.now();
      } else r3 = () => {
      };
      const n3 = (0, i2.p2)(t3.timeoutMs), s3 = (0, i2.Ch)(n3.signal, t3.requestSignal, t3.shutdownSignal);
      return Object.assign(Object.assign({}, t3), { signal: s3.signal, timeoutMs: r3, requestHeader: new Headers(t3.requestHeader), responseHeader: new Headers(t3.responseHeader), responseTrailer: new Headers(t3.responseTrailer), abort(t4) {
        n3.cleanup(), s3.abort(t4);
      }, values: null !== (e3 = t3.contextValues) && void 0 !== e3 ? e3 : (0, o2.k)() });
    }
    function u(t3, e3, r3) {
      return { kind: e3.kind, service: t3, method: e3, impl: r3 };
    }
    function c(t3, e3) {
      const r3 = { service: t3, methods: {} };
      for (const [i3, o3] of Object.entries(t3.methods)) {
        let a2 = e3[i3];
        if ("function" == typeof a2) a2 = a2.bind(e3);
        else {
          const e4 = `${t3.typeName}.${o3.name} is not implemented`;
          a2 = function() {
            throw new n2.T(e4, s2.C.Unimplemented);
          };
        }
        r3.methods[i3] = u(t3, o3, a2);
      }
      return r3;
    }
  }