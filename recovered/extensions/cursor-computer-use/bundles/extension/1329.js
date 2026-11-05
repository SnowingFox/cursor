// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 1329 range:153530..157029
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
1329: (e2, n2, t2) => {
    "use strict";
    const a2 = t2(9792), s2 = t2(4622), { kConnected: o2, kSize: r, kRunning: i, kPending: A, kQueued: c, kBusy: l, kFree: d, kUrl: m, kClose: u, kDestroy: g, kDispatch: p } = t2(8832), E = t2(2721), h = /* @__PURE__ */ Symbol("clients"), T = /* @__PURE__ */ Symbol("needDrain"), k = /* @__PURE__ */ Symbol("queue"), f = /* @__PURE__ */ Symbol("closed resolve"), _ = /* @__PURE__ */ Symbol("onDrain"), I = /* @__PURE__ */ Symbol("onConnect"), C = /* @__PURE__ */ Symbol("onDisconnect"), y = /* @__PURE__ */ Symbol("onConnectionError"), B = /* @__PURE__ */ Symbol("get dispatcher"), Q = /* @__PURE__ */ Symbol("add client"), v = /* @__PURE__ */ Symbol("remove client"), R = /* @__PURE__ */ Symbol("stats");
    e2.exports = { PoolBase: class extends a2 {
      constructor() {
        super(), this[k] = new s2(), this[h] = [], this[c] = 0;
        const e3 = this;
        this[_] = function(n3, t3) {
          const a3 = e3[k];
          let s3 = false;
          for (; !s3; ) {
            const n4 = a3.shift();
            if (!n4) break;
            e3[c]--, s3 = !this.dispatch(n4.opts, n4.handler);
          }
          this[T] = s3, !this[T] && e3[T] && (e3[T] = false, e3.emit("drain", n3, [e3, ...t3])), e3[f] && a3.isEmpty() && Promise.all(e3[h].map((e4) => e4.close())).then(e3[f]);
        }, this[I] = (n3, t3) => {
          e3.emit("connect", n3, [e3, ...t3]);
        }, this[C] = (n3, t3, a3) => {
          e3.emit("disconnect", n3, [e3, ...t3], a3);
        }, this[y] = (n3, t3, a3) => {
          e3.emit("connectionError", n3, [e3, ...t3], a3);
        }, this[R] = new E(this);
      }
      get [l]() {
        return this[T];
      }
      get [o2]() {
        return this[h].filter((e3) => e3[o2]).length;
      }
      get [d]() {
        return this[h].filter((e3) => e3[o2] && !e3[T]).length;
      }
      get [A]() {
        let e3 = this[c];
        for (const { [A]: n3 } of this[h]) e3 += n3;
        return e3;
      }
      get [i]() {
        let e3 = 0;
        for (const { [i]: n3 } of this[h]) e3 += n3;
        return e3;
      }
      get [r]() {
        let e3 = this[c];
        for (const { [r]: n3 } of this[h]) e3 += n3;
        return e3;
      }
      get stats() {
        return this[R];
      }
      async [u]() {
        return this[k].isEmpty() ? Promise.all(this[h].map((e3) => e3.close())) : new Promise((e3) => {
          this[f] = e3;
        });
      }
      async [g](e3) {
        for (; ; ) {
          const n3 = this[k].shift();
          if (!n3) break;
          n3.handler.onError(e3);
        }
        return Promise.all(this[h].map((n3) => n3.destroy(e3)));
      }
      [p](e3, n3) {
        const t3 = this[B]();
        return t3 ? t3.dispatch(e3, n3) || (t3[T] = true, this[T] = !this[B]()) : (this[T] = true, this[k].push({ opts: e3, handler: n3 }), this[c]++), !this[T];
      }
      [Q](e3) {
        return e3.on("drain", this[_]).on("connect", this[I]).on("disconnect", this[C]).on("connectionError", this[y]), this[h].push(e3), this[T] && process.nextTick(() => {
          this[T] && this[_](e3[m], [this, e3]);
        }), this;
      }
      [v](e3) {
        e3.close(() => {
          const n3 = this[h].indexOf(e3);
          -1 !== n3 && this[h].splice(n3, 1);
        }), this[T] = this[h].some((e4) => !e4[T] && true !== e4.closed && true !== e4.destroyed);
      }
    }, kClients: h, kNeedDrain: T, kAddClient: Q, kRemoveClient: v, kGetDispatcher: B };
  }