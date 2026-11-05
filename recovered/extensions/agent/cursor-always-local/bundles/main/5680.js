// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 5680 range:1283924..1287049
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
5680: (t2, e2, r2) => {
    "use strict";
    const { kClients: n2 } = r2(5532), s2 = r2(7132), { kAgent: i2, kMockAgentSet: o2, kMockAgentGet: a, kDispatches: u, kIsMockActive: c, kNetConnect: l, kGetNetConnect: m, kOptions: d, kFactory: f } = r2(1476), p = r2(7254), h = r2(8843), { matchValue: g, buildMockOptions: A } = r2(4008), { InvalidArgumentError: _, UndiciError: y } = r2(8762), w = r2(4088), S = r2(5288), J = r2(3279);
    class B {
      constructor(t3) {
        this.value = t3;
      }
      deref() {
        return this.value;
      }
    }
    t2.exports = class extends w {
      constructor(t3) {
        if (super(t3), this[l] = true, this[c] = true, t3 && t3.agent && "function" != typeof t3.agent.dispatch) throw new _("Argument opts.agent must implement Agent");
        const e3 = t3 && t3.agent ? t3.agent : new s2(t3);
        this[i2] = e3, this[n2] = e3[n2], this[d] = A(t3);
      }
      get(t3) {
        let e3 = this[a](t3);
        return e3 || (e3 = this[f](t3), this[o2](t3, e3)), e3;
      }
      dispatch(t3, e3) {
        return this.get(t3.origin), this[i2].dispatch(t3, e3);
      }
      async close() {
        await this[i2].close(), this[n2].clear();
      }
      deactivate() {
        this[c] = false;
      }
      activate() {
        this[c] = true;
      }
      enableNetConnect(t3) {
        if ("string" == typeof t3 || "function" == typeof t3 || t3 instanceof RegExp) Array.isArray(this[l]) ? this[l].push(t3) : this[l] = [t3];
        else {
          if (void 0 !== t3) throw new _("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[l] = true;
        }
      }
      disableNetConnect() {
        this[l] = false;
      }
      get isMockActive() {
        return this[c];
      }
      [o2](t3, e3) {
        this[n2].set(t3, new B(e3));
      }
      [f](t3) {
        const e3 = Object.assign({ agent: this }, this[d]);
        return this[d] && 1 === this[d].connections ? new p(t3, e3) : new h(t3, e3);
      }
      [a](t3) {
        const e3 = this[n2].get(t3);
        if (e3) return e3.deref();
        if ("string" != typeof t3) {
          const e4 = this[f]("http://localhost:9999");
          return this[o2](t3, e4), e4;
        }
        for (const [e4, r3] of Array.from(this[n2])) {
          const n3 = r3.deref();
          if (n3 && "string" != typeof e4 && g(e4, t3)) {
            const e5 = this[f](t3);
            return this[o2](t3, e5), e5[u] = n3[u], e5;
          }
        }
      }
      [m]() {
        return this[l];
      }
      pendingInterceptors() {
        const t3 = this[n2];
        return Array.from(t3.entries()).flatMap(([t4, e3]) => e3.deref()[u].map((e4) => ({ ...e4, origin: t4 }))).filter(({ pending: t4 }) => t4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: t3 = new J() } = {}) {
        const e3 = this.pendingInterceptors();
        if (0 === e3.length) return;
        const r3 = new S("interceptor", "interceptors").pluralize(e3.length);
        throw new y(`
${r3.count} ${r3.noun} ${r3.is} pending:

${t3.format(e3)}
`.trim());
      }
    };
  }