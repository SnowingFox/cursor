// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 1421 range:485531..489033
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1421: (t2, e2, r2) => {
    "use strict";
    const n2 = r2(4220), s2 = r2(2290), { kConnected: i2, kSize: o2, kRunning: a, kPending: u, kQueued: c, kBusy: l, kFree: m, kUrl: d, kClose: f, kDestroy: p, kDispatch: h } = r2(5532), g = r2(3661), A = /* @__PURE__ */ Symbol("clients"), _ = /* @__PURE__ */ Symbol("needDrain"), y = /* @__PURE__ */ Symbol("queue"), w = /* @__PURE__ */ Symbol("closed resolve"), S = /* @__PURE__ */ Symbol("onDrain"), J = /* @__PURE__ */ Symbol("onConnect"), B = /* @__PURE__ */ Symbol("onDisconnect"), E = /* @__PURE__ */ Symbol("onConnectionError"), I = /* @__PURE__ */ Symbol("get dispatcher"), C = /* @__PURE__ */ Symbol("add client"), b = /* @__PURE__ */ Symbol("remove client"), k = /* @__PURE__ */ Symbol("stats");
    t2.exports = { PoolBase: class extends n2 {
      constructor() {
        super(), this[y] = new s2(), this[A] = [], this[c] = 0;
        const t3 = this;
        this[S] = function(e3, r3) {
          const n3 = t3[y];
          let s3 = false;
          for (; !s3; ) {
            const e4 = n3.shift();
            if (!e4) break;
            t3[c]--, s3 = !this.dispatch(e4.opts, e4.handler);
          }
          this[_] = s3, !this[_] && t3[_] && (t3[_] = false, t3.emit("drain", e3, [t3, ...r3])), t3[w] && n3.isEmpty() && Promise.all(t3[A].map((t4) => t4.close())).then(t3[w]);
        }, this[J] = (e3, r3) => {
          t3.emit("connect", e3, [t3, ...r3]);
        }, this[B] = (e3, r3, n3) => {
          t3.emit("disconnect", e3, [t3, ...r3], n3);
        }, this[E] = (e3, r3, n3) => {
          t3.emit("connectionError", e3, [t3, ...r3], n3);
        }, this[k] = new g(this);
      }
      get [l]() {
        return this[_];
      }
      get [i2]() {
        return this[A].filter((t3) => t3[i2]).length;
      }
      get [m]() {
        return this[A].filter((t3) => t3[i2] && !t3[_]).length;
      }
      get [u]() {
        let t3 = this[c];
        for (const { [u]: e3 } of this[A]) t3 += e3;
        return t3;
      }
      get [a]() {
        let t3 = 0;
        for (const { [a]: e3 } of this[A]) t3 += e3;
        return t3;
      }
      get [o2]() {
        let t3 = this[c];
        for (const { [o2]: e3 } of this[A]) t3 += e3;
        return t3;
      }
      get stats() {
        return this[k];
      }
      async [f]() {
        return this[y].isEmpty() ? Promise.all(this[A].map((t3) => t3.close())) : new Promise((t3) => {
          this[w] = t3;
        });
      }
      async [p](t3) {
        for (; ; ) {
          const e3 = this[y].shift();
          if (!e3) break;
          e3.handler.onError(t3);
        }
        return Promise.all(this[A].map((e3) => e3.destroy(t3)));
      }
      [h](t3, e3) {
        const r3 = this[I]();
        return r3 ? r3.dispatch(t3, e3) || (r3[_] = true, this[_] = !this[I]()) : (this[_] = true, this[y].push({ opts: t3, handler: e3 }), this[c]++), !this[_];
      }
      [C](t3) {
        return t3.on("drain", this[S]).on("connect", this[J]).on("disconnect", this[B]).on("connectionError", this[E]), this[A].push(t3), this[_] && process.nextTick(() => {
          this[_] && this[S](t3[d], [this, t3]);
        }), this;
      }
      [b](t3) {
        t3.close(() => {
          const e3 = this[A].indexOf(t3);
          -1 !== e3 && this[A].splice(e3, 1);
        }), this[_] = this[A].some((t4) => !t4[_] && true !== t4.closed && true !== t4.destroyed);
      }
    }, kClients: A, kNeedDrain: _, kAddClient: C, kRemoveClient: b, kGetDispatcher: I };
  }