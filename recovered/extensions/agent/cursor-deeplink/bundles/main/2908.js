// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 2908 range:394753..397870
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2908: (e2, t2, A2) => {
    "use strict";
    const { kClients: n2 } = A2(8832), r2 = A2(568), { kAgent: o2, kMockAgentSet: s, kMockAgentGet: i, kDispatches: a, kIsMockActive: c, kNetConnect: l, kGetNetConnect: u, kOptions: g, kFactory: E } = A2(3192), h = A2(4826), d = A2(5543), { matchValue: I, buildMockOptions: B } = A2(76), { InvalidArgumentError: Q, UndiciError: f } = A2(7902), C = A2(1124), p = A2(4332), m = A2(2347);
    class y {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return this.value;
      }
    }
    e2.exports = class extends C {
      constructor(e3) {
        if (super(e3), this[l] = true, this[c] = true, e3 && e3.agent && "function" != typeof e3.agent.dispatch) throw new Q("Argument opts.agent must implement Agent");
        const t3 = e3 && e3.agent ? e3.agent : new r2(e3);
        this[o2] = t3, this[n2] = t3[n2], this[g] = B(e3);
      }
      get(e3) {
        let t3 = this[i](e3);
        return t3 || (t3 = this[E](e3), this[s](e3, t3)), t3;
      }
      dispatch(e3, t3) {
        return this.get(e3.origin), this[o2].dispatch(e3, t3);
      }
      async close() {
        await this[o2].close(), this[n2].clear();
      }
      deactivate() {
        this[c] = false;
      }
      activate() {
        this[c] = true;
      }
      enableNetConnect(e3) {
        if ("string" == typeof e3 || "function" == typeof e3 || e3 instanceof RegExp) Array.isArray(this[l]) ? this[l].push(e3) : this[l] = [e3];
        else {
          if (void 0 !== e3) throw new Q("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[l] = true;
        }
      }
      disableNetConnect() {
        this[l] = false;
      }
      get isMockActive() {
        return this[c];
      }
      [s](e3, t3) {
        this[n2].set(e3, new y(t3));
      }
      [E](e3) {
        const t3 = Object.assign({ agent: this }, this[g]);
        return this[g] && 1 === this[g].connections ? new h(e3, t3) : new d(e3, t3);
      }
      [i](e3) {
        const t3 = this[n2].get(e3);
        if (t3) return t3.deref();
        if ("string" != typeof e3) {
          const t4 = this[E]("http://localhost:9999");
          return this[s](e3, t4), t4;
        }
        for (const [t4, A3] of Array.from(this[n2])) {
          const n3 = A3.deref();
          if (n3 && "string" != typeof t4 && I(t4, e3)) {
            const t5 = this[E](e3);
            return this[s](e3, t5), t5[a] = n3[a], t5;
          }
        }
      }
      [u]() {
        return this[l];
      }
      pendingInterceptors() {
        const e3 = this[n2];
        return Array.from(e3.entries()).flatMap(([e4, t3]) => t3.deref()[a].map((t4) => ({ ...t4, origin: e4 }))).filter(({ pending: e4 }) => e4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e3 = new m() } = {}) {
        const t3 = this.pendingInterceptors();
        if (0 === t3.length) return;
        const A3 = new p("interceptor", "interceptors").pluralize(t3.length);
        throw new f(`
${A3.count} ${A3.noun} ${A3.is} pending:

${e3.format(t3)}
`.trim());
      }
    };
  }