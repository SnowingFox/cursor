// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-exec/dist/main.js sha256:8d20326bd54948353115113c2d4716cf781d593610fd4d8acebcc37a3170da8e
// module: 91434 range:11234301..11236426
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91434: (e, t, r) => {
    "use strict";
    r.d(t, { Jt: () => s, W2: () => n });
    class n extends Error {
      constructor(e2) {
        super(e2), this.name = "WriteIterableClosedError";
      }
    }
    function s() {
      const e2 = [], t2 = [];
      let r2, s2 = false, o = () => {
      }, i = () => {
      };
      const a = () => {
        const e3 = new Promise((e4, t3) => {
          o = e4, i = t3;
        });
        return e3.catch(() => {
        }), e3;
      };
      let c = a();
      function l(t3, r3) {
        for (; e2.length > 0; ) {
          const n2 = e2.shift();
          r3 ? n2.reject(r3) : n2.resolve(t3);
        }
      }
      function u(e3) {
        t2.length = 0, i(e3), c = Promise.reject(e3), c.catch(() => {
        });
      }
      return { async write(o2) {
        if (s2) throw r2 ?? new n("WritableIterable is closed");
        const i2 = e2.shift();
        if (i2) {
          if (i2.resolve({ done: false, value: o2 }), e2.length > 0) return;
        } else t2.push(o2);
        const a2 = t2.length + 1;
        for (let e3 = 0; e3 < a2; e3++) await c;
      }, throw(e3) {
        s2 || (s2 = true, r2 = e3, u(e3), l({ done: true, value: void 0 }, e3));
      }, close() {
        s2 || (s2 = true, t2.length = 0, o(), c = Promise.reject(new n("WritableIterable is closed")), c.catch(() => {
        }), l({ done: true, value: void 0 }));
      }, [Symbol.asyncIterator]: () => ({ next() {
        o(), c = a();
        const n2 = t2.shift();
        return void 0 !== n2 ? Promise.resolve({ done: false, value: n2 }) : s2 ? r2 ? Promise.reject(r2) : Promise.resolve({ done: true, value: void 0 }) : new Promise((t3, r3) => {
          e2.push({ resolve: t3, reject: r3 });
        });
      }, throw: (e3) => (s2 = true, r2 = e3, t2.length = 0, u(e3), l({ done: true, value: void 0 }, e3), Promise.resolve({ done: true, value: void 0 })), return: () => (s2 = true, t2.length = 0, o(), c = Promise.reject(new Error("Iterator was closed")), c.catch(() => {
      }), l({ done: true, value: void 0 }), Promise.resolve({ done: true, value: void 0 })) }) };
    }
  }