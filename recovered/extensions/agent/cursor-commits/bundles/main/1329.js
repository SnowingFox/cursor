// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 1329 range:149387..152892
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1329: (e2, n2, a2) => {
    "use strict";
    const t2 = a2(9792), s2 = a2(4622), { kConnected: o2, kSize: r2, kRunning: i2, kPending: A, kQueued: l, kBusy: c, kFree: m, kUrl: d, kClose: g, kDestroy: u, kDispatch: E } = a2(8832), p = a2(2721), T = /* @__PURE__ */ Symbol("clients"), k = /* @__PURE__ */ Symbol("needDrain"), I = /* @__PURE__ */ Symbol("queue"), h = /* @__PURE__ */ Symbol("closed resolve"), _ = /* @__PURE__ */ Symbol("onDrain"), C = /* @__PURE__ */ Symbol("onConnect"), f = /* @__PURE__ */ Symbol("onDisconnect"), B = /* @__PURE__ */ Symbol("onConnectionError"), Q = /* @__PURE__ */ Symbol("get dispatcher"), y = /* @__PURE__ */ Symbol("add client"), R = /* @__PURE__ */ Symbol("remove client"), N = /* @__PURE__ */ Symbol("stats");
    e2.exports = { PoolBase: class extends t2 {
      constructor() {
        super(), this[I] = new s2(), this[T] = [], this[l] = 0;
        const e3 = this;
        this[_] = function(n3, a3) {
          const t3 = e3[I];
          let s3 = false;
          for (; !s3; ) {
            const n4 = t3.shift();
            if (!n4) break;
            e3[l]--, s3 = !this.dispatch(n4.opts, n4.handler);
          }
          this[k] = s3, !this[k] && e3[k] && (e3[k] = false, e3.emit("drain", n3, [e3, ...a3])), e3[h] && t3.isEmpty() && Promise.all(e3[T].map((e4) => e4.close())).then(e3[h]);
        }, this[C] = (n3, a3) => {
          e3.emit("connect", n3, [e3, ...a3]);
        }, this[f] = (n3, a3, t3) => {
          e3.emit("disconnect", n3, [e3, ...a3], t3);
        }, this[B] = (n3, a3, t3) => {
          e3.emit("connectionError", n3, [e3, ...a3], t3);
        }, this[N] = new p(this);
      }
      get [c]() {
        return this[k];
      }
      get [o2]() {
        return this[T].filter((e3) => e3[o2]).length;
      }
      get [m]() {
        return this[T].filter((e3) => e3[o2] && !e3[k]).length;
      }
      get [A]() {
        let e3 = this[l];
        for (const { [A]: n3 } of this[T]) e3 += n3;
        return e3;
      }
      get [i2]() {
        let e3 = 0;
        for (const { [i2]: n3 } of this[T]) e3 += n3;
        return e3;
      }
      get [r2]() {
        let e3 = this[l];
        for (const { [r2]: n3 } of this[T]) e3 += n3;
        return e3;
      }
      get stats() {
        return this[N];
      }
      async [g]() {
        return this[I].isEmpty() ? Promise.all(this[T].map((e3) => e3.close())) : new Promise((e3) => {
          this[h] = e3;
        });
      }
      async [u](e3) {
        for (; ; ) {
          const n3 = this[I].shift();
          if (!n3) break;
          n3.handler.onError(e3);
        }
        return Promise.all(this[T].map((n3) => n3.destroy(e3)));
      }
      [E](e3, n3) {
        const a3 = this[Q]();
        return a3 ? a3.dispatch(e3, n3) || (a3[k] = true, this[k] = !this[Q]()) : (this[k] = true, this[I].push({ opts: e3, handler: n3 }), this[l]++), !this[k];
      }
      [y](e3) {
        return e3.on("drain", this[_]).on("connect", this[C]).on("disconnect", this[f]).on("connectionError", this[B]), this[T].push(e3), this[k] && process.nextTick(() => {
          this[k] && this[_](e3[d], [this, e3]);
        }), this;
      }
      [R](e3) {
        e3.close(() => {
          const n3 = this[T].indexOf(e3);
          -1 !== n3 && this[T].splice(n3, 1);
        }), this[k] = this[T].some((e4) => !e4[k] && true !== e4.closed && true !== e4.destroyed);
      }
    }, kClients: T, kNeedDrain: k, kAddClient: y, kRemoveClient: R, kGetDispatcher: Q };
  }