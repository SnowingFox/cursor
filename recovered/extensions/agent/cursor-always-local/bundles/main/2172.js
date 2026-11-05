// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 2172 range:671514..673067
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2172: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { N: () => a });
    var n2 = r2(8032), s2 = r2(328), i2 = r2(8205), o2 = r2(9983);
    function a(t3) {
      const e3 = /* @__PURE__ */ new Map();
      for (const r3 of t3) e3.set(r3.requestPath, r3);
      return async (t4) => {
        var r3, o3, a2;
        const c = new URL(t4.url).pathname, l = e3.get(c);
        if (!l) throw new s2.T(`RouterHttpClient: no handler registered for ${c}`, n2.C.Unimplemented);
        const m = null !== (r3 = t4.signal) && void 0 !== r3 ? r3 : new AbortController().signal, d = await u(m, l({ body: null !== (o3 = t4.body) && void 0 !== o3 ? o3 : (0, i2.T$)([]), httpVersion: "2.0", method: t4.method, url: t4.url, header: t4.header, signal: m })), f = null !== (a2 = d.body) && void 0 !== a2 ? a2 : (0, i2.T$)([]);
        return { body: (0, i2.Fs)(f, (t5) => ({ [Symbol.asyncIterator]() {
          const e4 = t5[Symbol.asyncIterator](), r4 = { next: () => u(m, e4.next()) };
          return void 0 !== e4.throw && (r4.throw = (t6) => e4.throw(t6)), void 0 !== e4.return && (r4.return = (t6) => e4.return(t6)), r4;
        } })), header: new Headers(d.header), status: d.status, trailer: new Headers(d.trailer) };
      };
    }
    function u(t3, e3) {
      let r3;
      const n3 = new Promise((e4, n4) => {
        const s3 = () => n4((0, o2.xz)(t3));
        if (t3.aborted) return s3();
        t3.addEventListener("abort", s3), r3 = () => t3.removeEventListener("abort", s3);
      });
      return Promise.race([n3, e3]).finally(r3);
    }
  }