// @recovered-by cursor-re
// artifact: app/extensions/cursor-local-agent-runtime/dist/main.js sha256:be87ea0ed3ac86375ab8e5f92c4261df0ccfc61ff24b07420f9c88a78ae2cfd0
// module: 65716 range:1982652..1985229
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
65716: (e, t, r) => {
    "use strict";
    r.d(t, { MU: () => a, PH: () => s, TJ: () => c, cb: () => i, wj: () => l, xb: () => o });
    var n = r(97357);
    function o(e2, t2, r2) {
      const { max: o2 = 4 } = r2 ?? {}, s2 = (0, n.from)(e2).pipe((0, n.map)((e3) => (0, n.defer)(() => (0, n.from)(t2(e3)).pipe((0, n.map)((t3) => ({ k: e3, v: t3 }))))), (0, n.mergeAll)(o2), (0, n.reduce)((e3, t3) => (e3.set(t3.k, t3.v), e3), /* @__PURE__ */ new Map()));
      return (0, n.firstValueFrom)(s2);
    }
    async function s(e2, t2, r2) {
      const { max: o2 = 4 } = r2 ?? {}, s2 = (0, n.from)(e2.map((e3, t3) => t3)).pipe((0, n.map)((r3) => (0, n.defer)(() => (0, n.from)(t2(e2[r3])).pipe((0, n.map)((e3) => ({ idx: r3, v: e3 }))))), (0, n.mergeAll)(o2), (0, n.reduce)((e3, t3) => (e3[t3.idx] = t3.v, e3), []));
      return (0, n.firstValueFrom)(s2);
    }
    function i(e2) {
      return new Promise((t2) => {
        setTimeout(t2, e2);
      });
    }
    class a extends Error {
      constructor(e2) {
        super(e2), this.name = "TimeoutError";
      }
    }
    function l(e2, t2, r2) {
      return (0, n.firstValueFrom)((0, n.from)(e2).pipe((0, n.timeout)({ first: t2, with: () => (0, n.throwError)(() => new a(r2 ?? `Promise timed out after ${t2}ms`)) })));
    }
    class c {
      constructor(e2) {
        this.opQueue = new n.Subject(), this.nextOperation = 1;
        const { max: t2 = 4 } = e2 ?? {};
        this.opResultStream = this.opQueue.pipe((0, n.mergeAll)(t2), (0, n.share)()), this.dispose = this.opResultStream.subscribe();
      }
      enqueue(e2) {
        const t2 = this.nextOperation++, r2 = (0, n.defer)(() => (0, n.from)(e2()).pipe((0, n.map)((e3) => ({ id: t2, result: e3 })), (0, n.catchError)((e3) => (0, n.of)({ id: t2, error: e3 })))), o2 = (0, n.firstValueFrom)(this.opResultStream.pipe((0, n.filter)((e3) => e3.id === t2))).then((e3) => e3.error ? Promise.reject(e3.error) : Promise.resolve(e3.result));
        return this.opQueue.next(r2), o2;
      }
      enqueueList(e2, t2) {
        return 0 === e2.length ? Promise.resolve(/* @__PURE__ */ new Map()) : (0, n.firstValueFrom)((0, n.from)(e2).pipe((0, n.mergeMap)((e3) => this.enqueue(() => t2(e3)).then((t3) => ({ key: e3, value: t3 }))), (0, n.reduce)((e3, t3) => (e3.set(t3.key, t3.value), e3), /* @__PURE__ */ new Map())));
      }
      close() {
        this.opQueue.complete();
        const e2 = (0, n.lastValueFrom)(this.opResultStream.pipe((0, n.materialize)(), (0, n.map)(() => {
        })));
        return this.dispose.unsubscribe(), e2;
      }
    }
  }