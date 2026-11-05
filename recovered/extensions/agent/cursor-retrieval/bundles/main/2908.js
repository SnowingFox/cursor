// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 2908 range:578204..581329
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2908: (e2, a2, n2) => {
    "use strict";
    const { kClients: t2 } = n2(8832), s2 = n2(568), { kAgent: o2, kMockAgentSet: r2, kMockAgentGet: i2, kDispatches: l, kIsMockActive: d, kNetConnect: m, kGetNetConnect: c, kOptions: p, kFactory: A } = n2(3192), u = n2(4826), g = n2(5543), { matchValue: T, buildMockOptions: h } = n2(76), { InvalidArgumentError: k, UndiciError: _ } = n2(7902), E = n2(1124), f = n2(4332), C = n2(2347);
    class I {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return this.value;
      }
    }
    e2.exports = class extends E {
      constructor(e3) {
        if (super(e3), this[m] = true, this[d] = true, e3 && e3.agent && "function" != typeof e3.agent.dispatch) throw new k("Argument opts.agent must implement Agent");
        const a3 = e3 && e3.agent ? e3.agent : new s2(e3);
        this[o2] = a3, this[t2] = a3[t2], this[p] = h(e3);
      }
      get(e3) {
        let a3 = this[i2](e3);
        return a3 || (a3 = this[A](e3), this[r2](e3, a3)), a3;
      }
      dispatch(e3, a3) {
        return this.get(e3.origin), this[o2].dispatch(e3, a3);
      }
      async close() {
        await this[o2].close(), this[t2].clear();
      }
      deactivate() {
        this[d] = false;
      }
      activate() {
        this[d] = true;
      }
      enableNetConnect(e3) {
        if ("string" == typeof e3 || "function" == typeof e3 || e3 instanceof RegExp) Array.isArray(this[m]) ? this[m].push(e3) : this[m] = [e3];
        else {
          if (void 0 !== e3) throw new k("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[m] = true;
        }
      }
      disableNetConnect() {
        this[m] = false;
      }
      get isMockActive() {
        return this[d];
      }
      [r2](e3, a3) {
        this[t2].set(e3, new I(a3));
      }
      [A](e3) {
        const a3 = Object.assign({ agent: this }, this[p]);
        return this[p] && 1 === this[p].connections ? new u(e3, a3) : new g(e3, a3);
      }
      [i2](e3) {
        const a3 = this[t2].get(e3);
        if (a3) return a3.deref();
        if ("string" != typeof e3) {
          const a4 = this[A]("http://localhost:9999");
          return this[r2](e3, a4), a4;
        }
        for (const [a4, n3] of Array.from(this[t2])) {
          const t3 = n3.deref();
          if (t3 && "string" != typeof a4 && T(a4, e3)) {
            const a5 = this[A](e3);
            return this[r2](e3, a5), a5[l] = t3[l], a5;
          }
        }
      }
      [c]() {
        return this[m];
      }
      pendingInterceptors() {
        const e3 = this[t2];
        return Array.from(e3.entries()).flatMap(([e4, a3]) => a3.deref()[l].map((a4) => ({ ...a4, origin: e4 }))).filter(({ pending: e4 }) => e4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e3 = new C() } = {}) {
        const a3 = this.pendingInterceptors();
        if (0 === a3.length) return;
        const n3 = new f("interceptor", "interceptors").pluralize(a3.length);
        throw new _(`
${n3.count} ${n3.noun} ${n3.is} pending:

${e3.format(a3)}
`.trim());
      }
    };
  }