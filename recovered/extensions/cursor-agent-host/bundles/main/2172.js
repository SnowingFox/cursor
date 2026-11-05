// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 2172 range:118648..120186
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2172: (e, t, r) => {
    "use strict";
    r.d(t, { N: () => a });
    var n = r(8032), s = r(40328), o = r(78205), i = r(39983);
    function a(e2) {
      const t2 = /* @__PURE__ */ new Map();
      for (const r2 of e2) t2.set(r2.requestPath, r2);
      return async (e3) => {
        var r2, i2, a2;
        const l = new URL(e3.url).pathname, u = t2.get(l);
        if (!u) throw new s.T(`RouterHttpClient: no handler registered for ${l}`, n.C.Unimplemented);
        const d = null !== (r2 = e3.signal) && void 0 !== r2 ? r2 : new AbortController().signal, p = await c(d, u({ body: null !== (i2 = e3.body) && void 0 !== i2 ? i2 : (0, o.T$)([]), httpVersion: "2.0", method: e3.method, url: e3.url, header: e3.header, signal: d })), m = null !== (a2 = p.body) && void 0 !== a2 ? a2 : (0, o.T$)([]);
        return { body: (0, o.Fs)(m, (e4) => ({ [Symbol.asyncIterator]() {
          const t3 = e4[Symbol.asyncIterator](), r3 = { next: () => c(d, t3.next()) };
          return void 0 !== t3.throw && (r3.throw = (e5) => t3.throw(e5)), void 0 !== t3.return && (r3.return = (e5) => t3.return(e5)), r3;
        } })), header: new Headers(p.header), status: p.status, trailer: new Headers(p.trailer) };
      };
    }
    function c(e2, t2) {
      let r2;
      const n2 = new Promise((t3, n3) => {
        const s2 = () => n3((0, i.xz)(e2));
        if (e2.aborted) return s2();
        e2.addEventListener("abort", s2), r2 = () => e2.removeEventListener("abort", s2);
      });
      return Promise.race([n2, t2]).finally(r2);
    }
  }