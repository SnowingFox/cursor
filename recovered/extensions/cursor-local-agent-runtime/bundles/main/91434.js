// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 91434 range:7718043..7720168
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91434: (e, t, r) => {
    "use strict";
    r.d(t, { Jt: () => o, W2: () => n });
    class n extends Error {
      constructor(e2) {
        super(e2), this.name = "WriteIterableClosedError";
      }
    }
    function o() {
      const e2 = [], t2 = [];
      let r2, o2 = false, s = () => {
      }, i = () => {
      };
      const a = () => {
        const e3 = new Promise((e4, t3) => {
          s = e4, i = t3;
        });
        return e3.catch(() => {
        }), e3;
      };
      let l = a();
      function c(t3, r3) {
        for (; e2.length > 0; ) {
          const n2 = e2.shift();
          r3 ? n2.reject(r3) : n2.resolve(t3);
        }
      }
      function u(e3) {
        t2.length = 0, i(e3), l = Promise.reject(e3), l.catch(() => {
        });
      }
      return { async write(s2) {
        if (o2) throw r2 ?? new n("WritableIterable is closed");
        const i2 = e2.shift();
        if (i2) {
          if (i2.resolve({ done: false, value: s2 }), e2.length > 0) return;
        } else t2.push(s2);
        const a2 = t2.length + 1;
        for (let e3 = 0; e3 < a2; e3++) await l;
      }, throw(e3) {
        o2 || (o2 = true, r2 = e3, u(e3), c({ done: true, value: void 0 }, e3));
      }, close() {
        o2 || (o2 = true, t2.length = 0, s(), l = Promise.reject(new n("WritableIterable is closed")), l.catch(() => {
        }), c({ done: true, value: void 0 }));
      }, [Symbol.asyncIterator]: () => ({ next() {
        s(), l = a();
        const n2 = t2.shift();
        return void 0 !== n2 ? Promise.resolve({ done: false, value: n2 }) : o2 ? r2 ? Promise.reject(r2) : Promise.resolve({ done: true, value: void 0 }) : new Promise((t3, r3) => {
          e2.push({ resolve: t3, reject: r3 });
        });
      }, throw: (e3) => (o2 = true, r2 = e3, t2.length = 0, u(e3), c({ done: true, value: void 0 }, e3), Promise.resolve({ done: true, value: void 0 })), return: () => (o2 = true, t2.length = 0, s(), l = Promise.reject(new Error("Iterator was closed")), l.catch(() => {
      }), c({ done: true, value: void 0 }), Promise.resolve({ done: true, value: void 0 })) }) };
    }
  }