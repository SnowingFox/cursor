// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 971 range:20744..22188
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
971: (e, t, r) => {
    "use strict";
    r.d(t, { B8: () => c, OD: () => a, bz: () => l });
    r(36038);
    var n = r(40328), s = r(8032), o = r(39983), i = r(43621);
    function a(e2) {
      var t2;
      let r2;
      if (void 0 !== e2.timeoutMs) {
        const t3 = new Date(Date.now() + e2.timeoutMs);
        r2 = () => t3.getTime() - Date.now();
      } else r2 = () => {
      };
      const n2 = (0, o.p2)(e2.timeoutMs), s2 = (0, o.Ch)(n2.signal, e2.requestSignal, e2.shutdownSignal);
      return Object.assign(Object.assign({}, e2), { signal: s2.signal, timeoutMs: r2, requestHeader: new Headers(e2.requestHeader), responseHeader: new Headers(e2.responseHeader), responseTrailer: new Headers(e2.responseTrailer), abort(e3) {
        n2.cleanup(), s2.abort(e3);
      }, values: null !== (t2 = e2.contextValues) && void 0 !== t2 ? t2 : (0, i.k)() });
    }
    function c(e2, t2, r2) {
      return { kind: t2.kind, service: e2, method: t2, impl: r2 };
    }
    function l(e2, t2) {
      const r2 = { service: e2, methods: {} };
      for (const [o2, i2] of Object.entries(e2.methods)) {
        let a2 = t2[o2];
        if ("function" == typeof a2) a2 = a2.bind(t2);
        else {
          const t3 = `${e2.typeName}.${i2.name} is not implemented`;
          a2 = function() {
            throw new n.T(t3, s.C.Unimplemented);
          };
        }
        r2.methods[o2] = c(e2, i2, a2);
      }
      return r2;
    }
  }