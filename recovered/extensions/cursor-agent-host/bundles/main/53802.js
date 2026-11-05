// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 53802 range:8582787..8586275
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
53802: (e, t, r) => {
    "use strict";
    const n = r(84220), s = r(42290), { kConnected: o, kSize: i, kRunning: a, kPending: c, kQueued: l, kBusy: u, kFree: d, kUrl: p, kClose: m, kDestroy: h, kDispatch: f } = r(15532), g = r(53661), y = /* @__PURE__ */ Symbol("clients"), w = /* @__PURE__ */ Symbol("needDrain"), v = /* @__PURE__ */ Symbol("queue"), _ = /* @__PURE__ */ Symbol("closed resolve"), A = /* @__PURE__ */ Symbol("onDrain"), S = /* @__PURE__ */ Symbol("onConnect"), b = /* @__PURE__ */ Symbol("onDisconnect"), E = /* @__PURE__ */ Symbol("onConnectionError"), I = /* @__PURE__ */ Symbol("get dispatcher"), C = /* @__PURE__ */ Symbol("add client"), k = /* @__PURE__ */ Symbol("remove client"), x = /* @__PURE__ */ Symbol("stats");
    e.exports = { PoolBase: class extends n {
      constructor() {
        super(), this[v] = new s(), this[y] = [], this[l] = 0;
        const e2 = this;
        this[A] = function(t2, r2) {
          const n2 = e2[v];
          let s2 = false;
          for (; !s2; ) {
            const t3 = n2.shift();
            if (!t3) break;
            e2[l]--, s2 = !this.dispatch(t3.opts, t3.handler);
          }
          this[w] = s2, !this[w] && e2[w] && (e2[w] = false, e2.emit("drain", t2, [e2, ...r2])), e2[_] && n2.isEmpty() && Promise.all(e2[y].map((e3) => e3.close())).then(e2[_]);
        }, this[S] = (t2, r2) => {
          e2.emit("connect", t2, [e2, ...r2]);
        }, this[b] = (t2, r2, n2) => {
          e2.emit("disconnect", t2, [e2, ...r2], n2);
        }, this[E] = (t2, r2, n2) => {
          e2.emit("connectionError", t2, [e2, ...r2], n2);
        }, this[x] = new g(this);
      }
      get [u]() {
        return this[w];
      }
      get [o]() {
        return this[y].filter((e2) => e2[o]).length;
      }
      get [d]() {
        return this[y].filter((e2) => e2[o] && !e2[w]).length;
      }
      get [c]() {
        let e2 = this[l];
        for (const { [c]: t2 } of this[y]) e2 += t2;
        return e2;
      }
      get [a]() {
        let e2 = 0;
        for (const { [a]: t2 } of this[y]) e2 += t2;
        return e2;
      }
      get [i]() {
        let e2 = this[l];
        for (const { [i]: t2 } of this[y]) e2 += t2;
        return e2;
      }
      get stats() {
        return this[x];
      }
      async [m]() {
        return this[v].isEmpty() ? Promise.all(this[y].map((e2) => e2.close())) : new Promise((e2) => {
          this[_] = e2;
        });
      }
      async [h](e2) {
        for (; ; ) {
          const t2 = this[v].shift();
          if (!t2) break;
          t2.handler.onError(e2);
        }
        return Promise.all(this[y].map((t2) => t2.destroy(e2)));
      }
      [f](e2, t2) {
        const r2 = this[I]();
        return r2 ? r2.dispatch(e2, t2) || (r2[w] = true, this[w] = !this[I]()) : (this[w] = true, this[v].push({ opts: e2, handler: t2 }), this[l]++), !this[w];
      }
      [C](e2) {
        return e2.on("drain", this[A]).on("connect", this[S]).on("disconnect", this[b]).on("connectionError", this[E]), this[y].push(e2), this[w] && process.nextTick(() => {
          this[w] && this[A](e2[p], [this, e2]);
        }), this;
      }
      [k](e2) {
        e2.close(() => {
          const t2 = this[y].indexOf(e2);
          -1 !== t2 && this[y].splice(t2, 1);
        }), this[w] = this[y].some((e3) => !e3[w] && true !== e3.closed && true !== e3.destroyed);
      }
    }, kClients: y, kNeedDrain: w, kAddClient: C, kRemoveClient: k, kGetDispatcher: I };
  }