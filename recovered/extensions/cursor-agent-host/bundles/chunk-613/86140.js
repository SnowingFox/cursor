// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 86140 range:474253..476991
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
86140: (A, e, t) => {
  "use strict";
  const { kClients: r } = t(76992), s = t(16618), { kAgent: o, kMockAgentSet: n, kMockAgentGet: i, kDispatches: a, kIsMockActive: Q, kNetConnect: g, kGetNetConnect: E, kOptions: B, kFactory: c } = t(53304), I = t(8026), C = t(76599), { matchValue: h, buildMockOptions: l } = t(61452), { InvalidArgumentError: u, UndiciError: d } = t(38238), f = t(47510), w = t(20060), y = t(94651);
  A.exports = class extends f {
    constructor(A2) {
      if (super(A2), this[g] = true, this[Q] = true, A2?.agent && "function" != typeof A2.agent.dispatch) throw new u("Argument opts.agent must implement Agent");
      const e2 = A2?.agent ? A2.agent : new s(A2);
      this[o] = e2, this[r] = e2[r], this[B] = l(A2);
    }
    get(A2) {
      let e2 = this[i](A2);
      return e2 || (e2 = this[c](A2), this[n](A2, e2)), e2;
    }
    dispatch(A2, e2) {
      return this.get(A2.origin), this[o].dispatch(A2, e2);
    }
    async close() {
      await this[o].close(), this[r].clear();
    }
    deactivate() {
      this[Q] = false;
    }
    activate() {
      this[Q] = true;
    }
    enableNetConnect(A2) {
      if ("string" == typeof A2 || "function" == typeof A2 || A2 instanceof RegExp) Array.isArray(this[g]) ? this[g].push(A2) : this[g] = [A2];
      else {
        if (void 0 !== A2) throw new u("Unsupported matcher. Must be one of String|Function|RegExp.");
        this[g] = true;
      }
    }
    disableNetConnect() {
      this[g] = false;
    }
    get isMockActive() {
      return this[Q];
    }
    [n](A2, e2) {
      this[r].set(A2, e2);
    }
    [c](A2) {
      const e2 = Object.assign({ agent: this }, this[B]);
      return this[B] && 1 === this[B].connections ? new I(A2, e2) : new C(A2, e2);
    }
    [i](A2) {
      const e2 = this[r].get(A2);
      if (e2) return e2;
      if ("string" != typeof A2) {
        const e3 = this[c]("http://localhost:9999");
        return this[n](A2, e3), e3;
      }
      for (const [e3, t2] of Array.from(this[r])) if (t2 && "string" != typeof e3 && h(e3, A2)) {
        const e4 = this[c](A2);
        return this[n](A2, e4), e4[a] = t2[a], e4;
      }
    }
    [E]() {
      return this[g];
    }
    pendingInterceptors() {
      const A2 = this[r];
      return Array.from(A2.entries()).flatMap(([A3, e2]) => e2[a].map((e3) => ({ ...e3, origin: A3 }))).filter(({ pending: A3 }) => A3);
    }
    assertNoPendingInterceptors({ pendingInterceptorsFormatter: A2 = new y() } = {}) {
      const e2 = this.pendingInterceptors();
      if (0 === e2.length) return;
      const t2 = new w("interceptor", "interceptors").pluralize(e2.length);
      throw new d(`
${t2.count} ${t2.noun} ${t2.is} pending:

${A2.format(e2)}
`.trim());
    }
  };
}