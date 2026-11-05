// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 2908 range:307154..310271
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
2908: (e2, n2, t2) => {
    "use strict";
    const { kClients: a2 } = t2(8832), s2 = t2(568), { kAgent: o2, kMockAgentSet: r, kMockAgentGet: i, kDispatches: A, kIsMockActive: c, kNetConnect: l, kGetNetConnect: d, kOptions: m, kFactory: u } = t2(3192), g = t2(4826), p = t2(5543), { matchValue: E, buildMockOptions: h } = t2(76), { InvalidArgumentError: T, UndiciError: k } = t2(7902), f = t2(1124), _ = t2(4332), I = t2(2347);
    class C {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return this.value;
      }
    }
    e2.exports = class extends f {
      constructor(e3) {
        if (super(e3), this[l] = true, this[c] = true, e3 && e3.agent && "function" != typeof e3.agent.dispatch) throw new T("Argument opts.agent must implement Agent");
        const n3 = e3 && e3.agent ? e3.agent : new s2(e3);
        this[o2] = n3, this[a2] = n3[a2], this[m] = h(e3);
      }
      get(e3) {
        let n3 = this[i](e3);
        return n3 || (n3 = this[u](e3), this[r](e3, n3)), n3;
      }
      dispatch(e3, n3) {
        return this.get(e3.origin), this[o2].dispatch(e3, n3);
      }
      async close() {
        await this[o2].close(), this[a2].clear();
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
          if (void 0 !== e3) throw new T("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[l] = true;
        }
      }
      disableNetConnect() {
        this[l] = false;
      }
      get isMockActive() {
        return this[c];
      }
      [r](e3, n3) {
        this[a2].set(e3, new C(n3));
      }
      [u](e3) {
        const n3 = Object.assign({ agent: this }, this[m]);
        return this[m] && 1 === this[m].connections ? new g(e3, n3) : new p(e3, n3);
      }
      [i](e3) {
        const n3 = this[a2].get(e3);
        if (n3) return n3.deref();
        if ("string" != typeof e3) {
          const n4 = this[u]("http://localhost:9999");
          return this[r](e3, n4), n4;
        }
        for (const [n4, t3] of Array.from(this[a2])) {
          const a3 = t3.deref();
          if (a3 && "string" != typeof n4 && E(n4, e3)) {
            const n5 = this[u](e3);
            return this[r](e3, n5), n5[A] = a3[A], n5;
          }
        }
      }
      [d]() {
        return this[l];
      }
      pendingInterceptors() {
        const e3 = this[a2];
        return Array.from(e3.entries()).flatMap(([e4, n3]) => n3.deref()[A].map((n4) => ({ ...n4, origin: e4 }))).filter(({ pending: e4 }) => e4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e3 = new I() } = {}) {
        const n3 = this.pendingInterceptors();
        if (0 === n3.length) return;
        const t3 = new _("interceptor", "interceptors").pluralize(n3.length);
        throw new k(`
${t3.count} ${t3.noun} ${t3.is} pending:

${e3.format(n3)}
`.trim());
      }
    };
  }