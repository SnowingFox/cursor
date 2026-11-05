// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 1329 range:149339..152838
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1329: (e2, A2, t2) => {
    "use strict";
    const n2 = t2(9792), r2 = t2(4622), { kConnected: o2, kSize: s, kRunning: a, kPending: i, kQueued: c, kBusy: l, kFree: g, kUrl: E, kClose: u, kDestroy: d, kDispatch: I } = t2(8832), h = t2(2721), Q = /* @__PURE__ */ Symbol("clients"), m = /* @__PURE__ */ Symbol("needDrain"), C = /* @__PURE__ */ Symbol("queue"), B = /* @__PURE__ */ Symbol("closed resolve"), p = /* @__PURE__ */ Symbol("onDrain"), f = /* @__PURE__ */ Symbol("onConnect"), y = /* @__PURE__ */ Symbol("onDisconnect"), T = /* @__PURE__ */ Symbol("onConnectionError"), k = /* @__PURE__ */ Symbol("get dispatcher"), w = /* @__PURE__ */ Symbol("add client"), N = /* @__PURE__ */ Symbol("remove client"), D = /* @__PURE__ */ Symbol("stats");
    e2.exports = { PoolBase: class extends n2 {
      constructor() {
        super(), this[C] = new r2(), this[Q] = [], this[c] = 0;
        const e3 = this;
        this[p] = function(A3, t3) {
          const n3 = e3[C];
          let r3 = false;
          for (; !r3; ) {
            const A4 = n3.shift();
            if (!A4) break;
            e3[c]--, r3 = !this.dispatch(A4.opts, A4.handler);
          }
          this[m] = r3, !this[m] && e3[m] && (e3[m] = false, e3.emit("drain", A3, [e3, ...t3])), e3[B] && n3.isEmpty() && Promise.all(e3[Q].map((e4) => e4.close())).then(e3[B]);
        }, this[f] = (A3, t3) => {
          e3.emit("connect", A3, [e3, ...t3]);
        }, this[y] = (A3, t3, n3) => {
          e3.emit("disconnect", A3, [e3, ...t3], n3);
        }, this[T] = (A3, t3, n3) => {
          e3.emit("connectionError", A3, [e3, ...t3], n3);
        }, this[D] = new h(this);
      }
      get [l]() {
        return this[m];
      }
      get [o2]() {
        return this[Q].filter((e3) => e3[o2]).length;
      }
      get [g]() {
        return this[Q].filter((e3) => e3[o2] && !e3[m]).length;
      }
      get [i]() {
        let e3 = this[c];
        for (const { [i]: A3 } of this[Q]) e3 += A3;
        return e3;
      }
      get [a]() {
        let e3 = 0;
        for (const { [a]: A3 } of this[Q]) e3 += A3;
        return e3;
      }
      get [s]() {
        let e3 = this[c];
        for (const { [s]: A3 } of this[Q]) e3 += A3;
        return e3;
      }
      get stats() {
        return this[D];
      }
      async [u]() {
        return this[C].isEmpty() ? Promise.all(this[Q].map((e3) => e3.close())) : new Promise((e3) => {
          this[B] = e3;
        });
      }
      async [d](e3) {
        for (; ; ) {
          const A3 = this[C].shift();
          if (!A3) break;
          A3.handler.onError(e3);
        }
        return Promise.all(this[Q].map((A3) => A3.destroy(e3)));
      }
      [I](e3, A3) {
        const t3 = this[k]();
        return t3 ? t3.dispatch(e3, A3) || (t3[m] = true, this[m] = !this[k]()) : (this[m] = true, this[C].push({ opts: e3, handler: A3 }), this[c]++), !this[m];
      }
      [w](e3) {
        return e3.on("drain", this[p]).on("connect", this[f]).on("disconnect", this[y]).on("connectionError", this[T]), this[Q].push(e3), this[m] && process.nextTick(() => {
          this[m] && this[p](e3[E], [this, e3]);
        }), this;
      }
      [N](e3) {
        e3.close(() => {
          const A3 = this[Q].indexOf(e3);
          -1 !== A3 && this[Q].splice(A3, 1);
        }), this[m] = this[Q].some((e4) => !e4[m] && true !== e4.closed && true !== e4.destroyed);
      }
    }, kClients: Q, kNeedDrain: m, kAddClient: w, kRemoveClient: N, kGetDispatcher: k };
  }