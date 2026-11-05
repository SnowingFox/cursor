// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1304 range:481675..483283
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1304: (t2, e2, r2) => {
    "use strict";
    r2.d(e2, { L: () => a, u: () => u });
    var n2 = r2(6962), s2 = r2(328), i2 = r2(9983), o2 = r2(1097);
    function a(t3) {
      const e3 = (0, n2.$)(t3.next, t3.interceptors), [r3, s3, i3] = c(t3);
      return e3(Object.assign(Object.assign({}, t3.req), { message: (0, o2.S)(t3.req.method.I, t3.req.message), signal: r3 })).then((t4) => (i3(), t4), s3);
    }
    function u(t3) {
      const e3 = (0, n2.$)(t3.next, t3.interceptors), [r3, s3, i3] = c(t3), a2 = Object.assign(Object.assign({}, t3.req), { message: (0, o2.u)(t3.req.method.I, t3.req.message), signal: r3 });
      let u2 = false;
      return r3.addEventListener("abort", function() {
        var e4, r4;
        const n3 = t3.req.message[Symbol.asyncIterator]();
        u2 || null === (e4 = n3.throw) || void 0 === e4 || e4.call(n3, this.reason).catch(() => {
        }), null === (r4 = n3.return) || void 0 === r4 || r4.call(n3).catch(() => {
        });
      }), e3(a2).then((t4) => Object.assign(Object.assign({}, t4), { message: { [Symbol.asyncIterator]() {
        const e4 = t4.message[Symbol.asyncIterator]();
        return { next: () => e4.next().then((t5) => (1 == t5.done && (u2 = true, i3()), t5), s3) };
      } } }), s3);
    }
    function c(t3) {
      const { signal: e3, cleanup: r3 } = (0, i2.p2)(t3.timeoutMs), n3 = (0, i2.Ch)(t3.signal, e3);
      return [n3.signal, function(t4) {
        const o3 = s2.T.from(e3.aborted ? (0, i2.xz)(e3) : t4);
        return n3.abort(o3), r3(), Promise.reject(o3);
      }, function() {
        r3(), n3.abort();
      }];
    }
  }