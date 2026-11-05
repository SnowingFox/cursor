// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 41304 range:7660053..7661646
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
41304: (e, t, r) => {
    "use strict";
    r.d(t, { L: () => a, u: () => c });
    var n = r(76962), s = r(40328), o = r(39983), i = r(21097);
    function a(e2) {
      const t2 = (0, n.$)(e2.next, e2.interceptors), [r2, s2, o2] = l(e2);
      return t2(Object.assign(Object.assign({}, e2.req), { message: (0, i.S)(e2.req.method.I, e2.req.message), signal: r2 })).then((e3) => (o2(), e3), s2);
    }
    function c(e2) {
      const t2 = (0, n.$)(e2.next, e2.interceptors), [r2, s2, o2] = l(e2), a2 = Object.assign(Object.assign({}, e2.req), { message: (0, i.u)(e2.req.method.I, e2.req.message), signal: r2 });
      let c2 = false;
      return r2.addEventListener("abort", function() {
        var t3, r3;
        const n2 = e2.req.message[Symbol.asyncIterator]();
        c2 || null === (t3 = n2.throw) || void 0 === t3 || t3.call(n2, this.reason).catch(() => {
        }), null === (r3 = n2.return) || void 0 === r3 || r3.call(n2).catch(() => {
        });
      }), t2(a2).then((e3) => Object.assign(Object.assign({}, e3), { message: { [Symbol.asyncIterator]() {
        const t3 = e3.message[Symbol.asyncIterator]();
        return { next: () => t3.next().then((e4) => (1 == e4.done && (c2 = true, o2()), e4), s2) };
      } } }), s2);
    }
    function l(e2) {
      const { signal: t2, cleanup: r2 } = (0, o.p2)(e2.timeoutMs), n2 = (0, o.Ch)(e2.signal, t2);
      return [n2.signal, function(e3) {
        const i2 = s.T.from(t2.aborted ? (0, o.xz)(t2) : e3);
        return n2.abort(i2), r2(), Promise.reject(i2);
      }, function() {
        r2(), n2.abort();
      }];
    }
  }