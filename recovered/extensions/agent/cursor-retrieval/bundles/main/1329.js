// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 1329 range:164249..167754
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1329: (e2, a2, n2) => {
    "use strict";
    const t2 = n2(9792), s2 = n2(4622), { kConnected: o2, kSize: r2, kRunning: i2, kPending: l, kQueued: d, kBusy: m, kFree: c, kUrl: p, kClose: A, kDestroy: u, kDispatch: g } = n2(8832), T = n2(2721), h = /* @__PURE__ */ Symbol("clients"), k = /* @__PURE__ */ Symbol("needDrain"), _ = /* @__PURE__ */ Symbol("queue"), E = /* @__PURE__ */ Symbol("closed resolve"), f = /* @__PURE__ */ Symbol("onDrain"), C = /* @__PURE__ */ Symbol("onConnect"), I = /* @__PURE__ */ Symbol("onDisconnect"), v = /* @__PURE__ */ Symbol("onConnectionError"), y = /* @__PURE__ */ Symbol("get dispatcher"), S = /* @__PURE__ */ Symbol("add client"), R = /* @__PURE__ */ Symbol("remove client"), N = /* @__PURE__ */ Symbol("stats");
    e2.exports = { PoolBase: class extends t2 {
      constructor() {
        super(), this[_] = new s2(), this[h] = [], this[d] = 0;
        const e3 = this;
        this[f] = function(a3, n3) {
          const t3 = e3[_];
          let s3 = false;
          for (; !s3; ) {
            const a4 = t3.shift();
            if (!a4) break;
            e3[d]--, s3 = !this.dispatch(a4.opts, a4.handler);
          }
          this[k] = s3, !this[k] && e3[k] && (e3[k] = false, e3.emit("drain", a3, [e3, ...n3])), e3[E] && t3.isEmpty() && Promise.all(e3[h].map((e4) => e4.close())).then(e3[E]);
        }, this[C] = (a3, n3) => {
          e3.emit("connect", a3, [e3, ...n3]);
        }, this[I] = (a3, n3, t3) => {
          e3.emit("disconnect", a3, [e3, ...n3], t3);
        }, this[v] = (a3, n3, t3) => {
          e3.emit("connectionError", a3, [e3, ...n3], t3);
        }, this[N] = new T(this);
      }
      get [m]() {
        return this[k];
      }
      get [o2]() {
        return this[h].filter((e3) => e3[o2]).length;
      }
      get [c]() {
        return this[h].filter((e3) => e3[o2] && !e3[k]).length;
      }
      get [l]() {
        let e3 = this[d];
        for (const { [l]: a3 } of this[h]) e3 += a3;
        return e3;
      }
      get [i2]() {
        let e3 = 0;
        for (const { [i2]: a3 } of this[h]) e3 += a3;
        return e3;
      }
      get [r2]() {
        let e3 = this[d];
        for (const { [r2]: a3 } of this[h]) e3 += a3;
        return e3;
      }
      get stats() {
        return this[N];
      }
      async [A]() {
        return this[_].isEmpty() ? Promise.all(this[h].map((e3) => e3.close())) : new Promise((e3) => {
          this[E] = e3;
        });
      }
      async [u](e3) {
        for (; ; ) {
          const a3 = this[_].shift();
          if (!a3) break;
          a3.handler.onError(e3);
        }
        return Promise.all(this[h].map((a3) => a3.destroy(e3)));
      }
      [g](e3, a3) {
        const n3 = this[y]();
        return n3 ? n3.dispatch(e3, a3) || (n3[k] = true, this[k] = !this[y]()) : (this[k] = true, this[_].push({ opts: e3, handler: a3 }), this[d]++), !this[k];
      }
      [S](e3) {
        return e3.on("drain", this[f]).on("connect", this[C]).on("disconnect", this[I]).on("connectionError", this[v]), this[h].push(e3), this[k] && process.nextTick(() => {
          this[k] && this[f](e3[p], [this, e3]);
        }), this;
      }
      [R](e3) {
        e3.close(() => {
          const a3 = this[h].indexOf(e3);
          -1 !== a3 && this[h].splice(a3, 1);
        }), this[k] = this[h].some((e4) => !e4[k] && true !== e4.closed && true !== e4.destroyed);
      }
    }, kClients: h, kNeedDrain: k, kAddClient: S, kRemoveClient: R, kGetDispatcher: y };
  }