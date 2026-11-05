// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 2908 range:303141..306266
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
2908: (e2, n2, a2) => {
    "use strict";
    const { kClients: t2 } = a2(8832), s2 = a2(568), { kAgent: o2, kMockAgentSet: r2, kMockAgentGet: i2, kDispatches: A, kIsMockActive: l, kNetConnect: c, kGetNetConnect: m, kOptions: d, kFactory: g } = a2(3192), u = a2(4826), E = a2(5543), { matchValue: p, buildMockOptions: T } = a2(76), { InvalidArgumentError: k, UndiciError: I } = a2(7902), h = a2(1124), _ = a2(4332), C = a2(2347);
    class f {
      constructor(e3) {
        this.value = e3;
      }
      deref() {
        return this.value;
      }
    }
    e2.exports = class extends h {
      constructor(e3) {
        if (super(e3), this[c] = true, this[l] = true, e3 && e3.agent && "function" != typeof e3.agent.dispatch) throw new k("Argument opts.agent must implement Agent");
        const n3 = e3 && e3.agent ? e3.agent : new s2(e3);
        this[o2] = n3, this[t2] = n3[t2], this[d] = T(e3);
      }
      get(e3) {
        let n3 = this[i2](e3);
        return n3 || (n3 = this[g](e3), this[r2](e3, n3)), n3;
      }
      dispatch(e3, n3) {
        return this.get(e3.origin), this[o2].dispatch(e3, n3);
      }
      async close() {
        await this[o2].close(), this[t2].clear();
      }
      deactivate() {
        this[l] = false;
      }
      activate() {
        this[l] = true;
      }
      enableNetConnect(e3) {
        if ("string" == typeof e3 || "function" == typeof e3 || e3 instanceof RegExp) Array.isArray(this[c]) ? this[c].push(e3) : this[c] = [e3];
        else {
          if (void 0 !== e3) throw new k("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[c] = true;
        }
      }
      disableNetConnect() {
        this[c] = false;
      }
      get isMockActive() {
        return this[l];
      }
      [r2](e3, n3) {
        this[t2].set(e3, new f(n3));
      }
      [g](e3) {
        const n3 = Object.assign({ agent: this }, this[d]);
        return this[d] && 1 === this[d].connections ? new u(e3, n3) : new E(e3, n3);
      }
      [i2](e3) {
        const n3 = this[t2].get(e3);
        if (n3) return n3.deref();
        if ("string" != typeof e3) {
          const n4 = this[g]("http://localhost:9999");
          return this[r2](e3, n4), n4;
        }
        for (const [n4, a3] of Array.from(this[t2])) {
          const t3 = a3.deref();
          if (t3 && "string" != typeof n4 && p(n4, e3)) {
            const n5 = this[g](e3);
            return this[r2](e3, n5), n5[A] = t3[A], n5;
          }
        }
      }
      [m]() {
        return this[c];
      }
      pendingInterceptors() {
        const e3 = this[t2];
        return Array.from(e3.entries()).flatMap(([e4, n3]) => n3.deref()[A].map((n4) => ({ ...n4, origin: e4 }))).filter(({ pending: e4 }) => e4);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e3 = new C() } = {}) {
        const n3 = this.pendingInterceptors();
        if (0 === n3.length) return;
        const a3 = new _("interceptor", "interceptors").pluralize(n3.length);
        throw new I(`
${a3.count} ${a3.noun} ${a3.is} pending:

${e3.format(n3)}
`.trim());
      }
    };
  }