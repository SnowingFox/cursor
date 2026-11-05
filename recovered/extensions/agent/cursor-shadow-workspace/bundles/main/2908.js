// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 2908 range:302963..306080
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2908: (e2, A2, t2) => {
    "use strict";
    const { kClients: n2 } = t2(8832), r2 = t2(568), { kAgent: o2, kMockAgentSet: s, kMockAgentGet: a, kDispatches: i, kIsMockActive: c, kNetConnect: l, kGetNetConnect: g, kOptions: E, kFactory: u } = t2(3192), d = t2(4826), I = t2(5543), { matchValue: h, buildMockOptions: Q } = t2(76), { InvalidArgumentError: m, UndiciError: C } = t2(7902), B = t2(1124), p = t2(4332), f = t2(2347);
    class y {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return this.value;
      }
    }
    e2.exports = class extends B {
      constructor(e3) {
        if (super(e3), this[l] = true, this[c] = true, e3 && e3.agent && "function" != typeof e3.agent.dispatch) throw new m("Argument opts.agent must implement Agent");
        const A3 = e3 && e3.agent ? e3.agent : new r2(e3);
        this[o2] = A3, this[n2] = A3[n2], this[E] = Q(e3);
      }
      get(e3) {
        let A3 = this[a](e3);
        return A3 || (A3 = this[u](e3), this[s](e3, A3)), A3;
      }
      dispatch(e3, A3) {
        return this.get(e3.origin), this[o2].dispatch(e3, A3);
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
          if (void 0 !== e3) throw new m("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[l] = true;
        }
      }
      disableNetConnect() {
        this[l] = false;
      }
      get isMockActive() {
        return this[c];
      }
      [s](e3, A3) {
        this[n2].set(e3, new y(A3));
      }
      [u](e3) {
        const A3 = Object.assign({ agent: this }, this[E]);
        return this[E] && 1 === this[E].connections ? new d(e3, A3) : new I(e3, A3);
      }
      [a](e3) {
        const A3 = this[n2].get(e3);
        if (A3) return A3.deref();
        if ("string" != typeof e3) {
          const A4 = this[u]("http://localhost:9999");
          return this[s](e3, A4), A4;
        }
        for (const [A4, t3] of Array.from(this[n2])) {
          const n3 = t3.deref();
          if (n3 && "string" != typeof A4 && h(A4, e3)) {
            const A5 = this[u](e3);
            return this[s](e3, A5), A5[i] = n3[i], A5;
          }
        }
      }
      [g]() {
        return this[l];
      }
      pendingInterceptors() {
        const e3 = this[n2];
        return Array.from(e3.entries()).flatMap(([e4, A3]) => A3.deref()[i].map((A4) => ({ ...A4, origin: e4 }))).filter(({ pending: e4 }) => e4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e3 = new f() } = {}) {
        const A3 = this.pendingInterceptors();
        if (0 === A3.length) return;
        const t3 = new p("interceptor", "interceptors").pluralize(A3.length);
        throw new C(`
${t3.count} ${t3.noun} ${t3.is} pending:

${e3.format(A3)}
`.trim());
      }
    };
  }