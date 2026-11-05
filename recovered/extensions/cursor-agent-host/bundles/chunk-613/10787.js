// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 10787 range:26678..30012
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
10787: (A, e, t) => {
  "use strict";
  const r = t(27110), s = t(50423), { kConnected: o, kSize: n, kRunning: i, kPending: a, kQueued: Q, kBusy: g, kFree: E, kUrl: B, kClose: c, kDestroy: I, kDispatch: C } = t(76992), h = t(33103), l = /* @__PURE__ */ Symbol("clients"), u = /* @__PURE__ */ Symbol("needDrain"), d = /* @__PURE__ */ Symbol("queue"), f = /* @__PURE__ */ Symbol("closed resolve"), w = /* @__PURE__ */ Symbol("onDrain"), y = /* @__PURE__ */ Symbol("onConnect"), D = /* @__PURE__ */ Symbol("onDisconnect"), p = /* @__PURE__ */ Symbol("onConnectionError"), k = /* @__PURE__ */ Symbol("get dispatcher"), R = /* @__PURE__ */ Symbol("add client"), F = /* @__PURE__ */ Symbol("remove client"), m = /* @__PURE__ */ Symbol("stats");
  A.exports = { PoolBase: class extends r {
    constructor(A2) {
      super(A2), this[d] = new s(), this[l] = [], this[Q] = 0;
      const e2 = this;
      this[w] = function(A3, t2) {
        const r2 = e2[d];
        let s2 = false;
        for (; !s2; ) {
          const A4 = r2.shift();
          if (!A4) break;
          e2[Q]--, s2 = !this.dispatch(A4.opts, A4.handler);
        }
        this[u] = s2, !this[u] && e2[u] && (e2[u] = false, e2.emit("drain", A3, [e2, ...t2])), e2[f] && r2.isEmpty() && Promise.all(e2[l].map((A4) => A4.close())).then(e2[f]);
      }, this[y] = (A3, t2) => {
        e2.emit("connect", A3, [e2, ...t2]);
      }, this[D] = (A3, t2, r2) => {
        e2.emit("disconnect", A3, [e2, ...t2], r2);
      }, this[p] = (A3, t2, r2) => {
        e2.emit("connectionError", A3, [e2, ...t2], r2);
      }, this[m] = new h(this);
    }
    get [g]() {
      return this[u];
    }
    get [o]() {
      return this[l].filter((A2) => A2[o]).length;
    }
    get [E]() {
      return this[l].filter((A2) => A2[o] && !A2[u]).length;
    }
    get [a]() {
      let A2 = this[Q];
      for (const { [a]: e2 } of this[l]) A2 += e2;
      return A2;
    }
    get [i]() {
      let A2 = 0;
      for (const { [i]: e2 } of this[l]) A2 += e2;
      return A2;
    }
    get [n]() {
      let A2 = this[Q];
      for (const { [n]: e2 } of this[l]) A2 += e2;
      return A2;
    }
    get stats() {
      return this[m];
    }
    async [c]() {
      this[d].isEmpty() ? await Promise.all(this[l].map((A2) => A2.close())) : await new Promise((A2) => {
        this[f] = A2;
      });
    }
    async [I](A2) {
      for (; ; ) {
        const e2 = this[d].shift();
        if (!e2) break;
        e2.handler.onError(A2);
      }
      await Promise.all(this[l].map((e2) => e2.destroy(A2)));
    }
    [C](A2, e2) {
      const t2 = this[k]();
      return t2 ? t2.dispatch(A2, e2) || (t2[u] = true, this[u] = !this[k]()) : (this[u] = true, this[d].push({ opts: A2, handler: e2 }), this[Q]++), !this[u];
    }
    [R](A2) {
      return A2.on("drain", this[w]).on("connect", this[y]).on("disconnect", this[D]).on("connectionError", this[p]), this[l].push(A2), this[u] && queueMicrotask(() => {
        this[u] && this[w](A2[B], [this, A2]);
      }), this;
    }
    [F](A2) {
      A2.close(() => {
        const e2 = this[l].indexOf(A2);
        -1 !== e2 && this[l].splice(e2, 1);
      }), this[u] = this[l].some((A3) => !A3[u] && true !== A3.closed && true !== A3.destroyed);
    }
  }, kClients: l, kNeedDrain: u, kAddClient: R, kRemoveClient: F, kGetDispatcher: k };
}