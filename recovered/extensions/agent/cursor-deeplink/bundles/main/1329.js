// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 1329 range:155425..158924
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
1329: (e2, t2, A2) => {
    "use strict";
    const n2 = A2(9792), r2 = A2(4622), { kConnected: o2, kSize: s, kRunning: i, kPending: a, kQueued: c, kBusy: l, kFree: u, kUrl: g, kClose: E, kDestroy: h, kDispatch: d } = A2(8832), I = A2(2721), B = /* @__PURE__ */ Symbol("clients"), Q = /* @__PURE__ */ Symbol("needDrain"), f = /* @__PURE__ */ Symbol("queue"), C = /* @__PURE__ */ Symbol("closed resolve"), p = /* @__PURE__ */ Symbol("onDrain"), m = /* @__PURE__ */ Symbol("onConnect"), y = /* @__PURE__ */ Symbol("onDisconnect"), w = /* @__PURE__ */ Symbol("onConnectionError"), k = /* @__PURE__ */ Symbol("get dispatcher"), b = /* @__PURE__ */ Symbol("add client"), N = /* @__PURE__ */ Symbol("remove client"), T = /* @__PURE__ */ Symbol("stats");
    e2.exports = { PoolBase: class extends n2 {
      constructor() {
        super(), this[f] = new r2(), this[B] = [], this[c] = 0;
        const e3 = this;
        this[p] = function(t3, A3) {
          const n3 = e3[f];
          let r3 = false;
          for (; !r3; ) {
            const t4 = n3.shift();
            if (!t4) break;
            e3[c]--, r3 = !this.dispatch(t4.opts, t4.handler);
          }
          this[Q] = r3, !this[Q] && e3[Q] && (e3[Q] = false, e3.emit("drain", t3, [e3, ...A3])), e3[C] && n3.isEmpty() && Promise.all(e3[B].map((e4) => e4.close())).then(e3[C]);
        }, this[m] = (t3, A3) => {
          e3.emit("connect", t3, [e3, ...A3]);
        }, this[y] = (t3, A3, n3) => {
          e3.emit("disconnect", t3, [e3, ...A3], n3);
        }, this[w] = (t3, A3, n3) => {
          e3.emit("connectionError", t3, [e3, ...A3], n3);
        }, this[T] = new I(this);
      }
      get [l]() {
        return this[Q];
      }
      get [o2]() {
        return this[B].filter((e3) => e3[o2]).length;
      }
      get [u]() {
        return this[B].filter((e3) => e3[o2] && !e3[Q]).length;
      }
      get [a]() {
        let e3 = this[c];
        for (const { [a]: t3 } of this[B]) e3 += t3;
        return e3;
      }
      get [i]() {
        let e3 = 0;
        for (const { [i]: t3 } of this[B]) e3 += t3;
        return e3;
      }
      get [s]() {
        let e3 = this[c];
        for (const { [s]: t3 } of this[B]) e3 += t3;
        return e3;
      }
      get stats() {
        return this[T];
      }
      async [E]() {
        return this[f].isEmpty() ? Promise.all(this[B].map((e3) => e3.close())) : new Promise((e3) => {
          this[C] = e3;
        });
      }
      async [h](e3) {
        for (; ; ) {
          const t3 = this[f].shift();
          if (!t3) break;
          t3.handler.onError(e3);
        }
        return Promise.all(this[B].map((t3) => t3.destroy(e3)));
      }
      [d](e3, t3) {
        const A3 = this[k]();
        return A3 ? A3.dispatch(e3, t3) || (A3[Q] = true, this[Q] = !this[k]()) : (this[Q] = true, this[f].push({ opts: e3, handler: t3 }), this[c]++), !this[Q];
      }
      [b](e3) {
        return e3.on("drain", this[p]).on("connect", this[m]).on("disconnect", this[y]).on("connectionError", this[w]), this[B].push(e3), this[Q] && process.nextTick(() => {
          this[Q] && this[p](e3[g], [this, e3]);
        }), this;
      }
      [N](e3) {
        e3.close(() => {
          const t3 = this[B].indexOf(e3);
          -1 !== t3 && this[B].splice(t3, 1);
        }), this[Q] = this[B].some((e4) => !e4[Q] && true !== e4.closed && true !== e4.destroyed);
      }
    }, kClients: B, kNeedDrain: Q, kAddClient: b, kRemoveClient: N, kGetDispatcher: k };
  }