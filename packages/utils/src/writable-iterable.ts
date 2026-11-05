// @ts-nocheck - TODO(recovered): recovered minified artifact; type-level signatures unavailable offline (documented exception, see REPORT.md)
// @recovered-by cursor-re
// artifact: .vendor/cursor-sdk-1.3.1/dist/esm/305.js sha256:54d5fa4cf215825eafb00493b51c809c66436b8598c487bd6b63e2be18968ff2
// module: "../utils/dist/writable-iterable.js" range:1325220..1326738
// basis: webpack-key
// confidence: B
// method: split+rewire
// run: w1-sdk-runtime 2026-11-05T10:06:18.348Z
// status: extracted from minified webpack module; identifiers mangled in artifact
class n extends Error {
  constructor(e) {
    super(e), this.name = "WriteIterableClosedError";
  }
}
class o {
  constructor(e, t) {
    this.writable = e, this.map = t, this.closed = !1;
  }
  async write(e) {
    if (this.closed) throw new n("WritableIterable is closed");
    const t = this.map(e);
    await this.writable.write(t);
  }
  close() {
    this.closed || (this.closed = !0);
  }
}
function s() {
  const e = [];
  let t,
    r,
    o,
    s,
    i = !1;
  function a(n, o) {
    i = !0, void 0 !== o && (s = o), c(o);
    let a = t;
    for (t = void 0, r = void 0; void 0 !== a;) {
      const e = a.next;
      a.reject(o ?? n), a = e;
    }
    for (; e.length > 0;) {
      const t = e.shift();
      void 0 !== o ? t.reject(o) : t.resolve({
        done: !0,
        value: void 0
      });
    }
  }
  function c(e) {
    const t = o;
    void 0 !== t && (o = void 0, void 0 !== e ? t.reject(e) : t.resolve());
  }
  return {
    write(a) {
      if (i) return Promise.reject(s ?? new n("WritableIterable is closed"));
      const c = e.shift();
      return void 0 !== c ? (c.resolve({
        done: !1,
        value: a
      }), e.length > 0 ? Promise.resolve() : new Promise((e, t) => {
        o = {
          value: a,
          resolve: e,
          reject: t
        };
      })) : new Promise((e, n) => {
        const o = {
          value: a,
          resolve: e,
          reject: n
        };
        void 0 === r ? t = o : r.next = o, r = o;
      });
    },
    throw(e) {
      i || a(e, e);
    },
    close() {
      i || a(new n("WritableIterable is closed"));
    },
    [Symbol.asyncIterator]: () => ({
      next() {
        c();
        const n = t;
        return void 0 !== n ? (t = n.next, n.next = void 0, void 0 === t && (r = void 0), o = n, Promise.resolve({
          done: !1,
          value: n.value
        })) : i ? void 0 !== s ? Promise.reject(s) : Promise.resolve({
          done: !0,
          value: void 0
        }) : new Promise((t, r) => {
          e.push({
            resolve: t,
            reject: r
          });
        });
      },
      throw: e => (a(e, e), Promise.resolve({
        done: !0,
        value: void 0
      })),
      return: () => (a(new Error("Iterator was closed")), Promise.resolve({
        done: !0,
        value: void 0
      }))
    })
  };
}
export { o as F8, s as Jt, n as W2 };
