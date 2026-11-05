// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 15680 range:4028780..4031883
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
15680: (e, t, r) => {
    "use strict";
    const { kClients: n } = r(15532), s = r(57132), { kAgent: o, kMockAgentSet: i, kMockAgentGet: a, kDispatches: c, kIsMockActive: l, kNetConnect: u, kGetNetConnect: d, kOptions: p, kFactory: m } = r(51476), h = r(47254), f = r(48843), { matchValue: g, buildMockOptions: y } = r(34008), { InvalidArgumentError: w, UndiciError: v } = r(48762), _ = r(74088), A = r(65288), S = r(93279);
    class b {
      constructor(e2) {
        this.value = e2;
      }
      deref() {
        return this.value;
      }
    }
    e.exports = class extends _ {
      constructor(e2) {
        if (super(e2), this[u] = true, this[l] = true, e2 && e2.agent && "function" != typeof e2.agent.dispatch) throw new w("Argument opts.agent must implement Agent");
        const t2 = e2 && e2.agent ? e2.agent : new s(e2);
        this[o] = t2, this[n] = t2[n], this[p] = y(e2);
      }
      get(e2) {
        let t2 = this[a](e2);
        return t2 || (t2 = this[m](e2), this[i](e2, t2)), t2;
      }
      dispatch(e2, t2) {
        return this.get(e2.origin), this[o].dispatch(e2, t2);
      }
      async close() {
        await this[o].close(), this[n].clear();
      }
      deactivate() {
        this[l] = false;
      }
      activate() {
        this[l] = true;
      }
      enableNetConnect(e2) {
        if ("string" == typeof e2 || "function" == typeof e2 || e2 instanceof RegExp) Array.isArray(this[u]) ? this[u].push(e2) : this[u] = [e2];
        else {
          if (void 0 !== e2) throw new w("Unsupported matcher. Must be one of String|Function|RegExp.");
          this[u] = true;
        }
      }
      disableNetConnect() {
        this[u] = false;
      }
      get isMockActive() {
        return this[l];
      }
      [i](e2, t2) {
        this[n].set(e2, new b(t2));
      }
      [m](e2) {
        const t2 = Object.assign({ agent: this }, this[p]);
        return this[p] && 1 === this[p].connections ? new h(e2, t2) : new f(e2, t2);
      }
      [a](e2) {
        const t2 = this[n].get(e2);
        if (t2) return t2.deref();
        if ("string" != typeof e2) {
          const t3 = this[m]("http://localhost:9999");
          return this[i](e2, t3), t3;
        }
        for (const [t3, r2] of Array.from(this[n])) {
          const n2 = r2.deref();
          if (n2 && "string" != typeof t3 && g(t3, e2)) {
            const t4 = this[m](e2);
            return this[i](e2, t4), t4[c] = n2[c], t4;
          }
        }
      }
      [d]() {
        return this[u];
      }
      pendingInterceptors() {
        const e2 = this[n];
        return Array.from(e2.entries()).flatMap(([e3, t2]) => t2.deref()[c].map((t3) => ({ ...t3, origin: e3 }))).filter(({ pending: e3 }) => e3);
      }
      assertNoPendingInterceptors({ pendingInterceptorsFormatter: e2 = new S() } = {}) {
        const t2 = this.pendingInterceptors();
        if (0 === t2.length) return;
        const r2 = new A("interceptor", "interceptors").pluralize(t2.length);
        throw new v(`
${r2.count} ${r2.noun} ${r2.is} pending:

${e2.format(t2)}
`.trim());
      }
    };
  }