// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 91434 range:13725747..13728251
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91434: (e, t, r) => {
    "use strict";
    r.d(t, { F8: () => s, Jt: () => o, W2: () => n });
    class n extends Error {
      constructor(e2) {
        super(e2), this.name = "WriteIterableClosedError";
      }
    }
    class s {
      constructor(e2, t2) {
        this.writable = e2, this.map = t2, this.closed = false;
      }
      async write(e2) {
        if (this.closed) throw new n("WritableIterable is closed");
        const t2 = this.map(e2);
        await this.writable.write(t2);
      }
      close() {
        this.closed || (this.closed = true);
      }
    }
    function o() {
      const e2 = [], t2 = [];
      let r2, s2 = false, o2 = () => {
      }, i = () => {
      };
      const a = () => {
        const e3 = new Promise((e4, t3) => {
          o2 = e4, i = t3;
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
      return { async write(o3) {
        if (s2) throw r2 ?? new n("WritableIterable is closed");
        const i2 = e2.shift();
        if (i2) {
          if (i2.resolve({ done: false, value: o3 }), e2.length > 0) return;
        } else t2.push(o3);
        const a2 = t2.length + 1;
        for (let e3 = 0; e3 < a2; e3++) await c;
      }, throw(e3) {
        s2 || (s2 = true, r2 = e3, u(e3), l({ done: true, value: void 0 }, e3));
      }, close() {
        s2 || (s2 = true, t2.length = 0, o2(), c = Promise.reject(new n("WritableIterable is closed")), c.catch(() => {
        }), l({ done: true, value: void 0 }));
      }, [Symbol.asyncIterator]: () => ({ next() {
        o2(), c = a();
        const n2 = t2.shift();
        return void 0 !== n2 ? Promise.resolve({ done: false, value: n2 }) : s2 ? r2 ? Promise.reject(r2) : Promise.resolve({ done: true, value: void 0 }) : new Promise((t3, r3) => {
          e2.push({ resolve: t3, reject: r3 });
        });
      }, throw: (e3) => (s2 = true, r2 = e3, t2.length = 0, u(e3), l({ done: true, value: void 0 }, e3), Promise.resolve({ done: true, value: void 0 })), return: () => (s2 = true, t2.length = 0, o2(), c = Promise.reject(new Error("Iterator was closed")), c.catch(() => {
      }), l({ done: true, value: void 0 }), Promise.resolve({ done: true, value: void 0 })) }) };
    }
  }