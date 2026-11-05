// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 8440 range:24104..26676
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8440: (A, e, t) => {
  "use strict";
  const r = t(27110), { kClose: s, kDestroy: o, kClosed: n, kDestroyed: i, kDispatch: a, kNoProxyAgent: Q, kHttpProxyAgent: g, kHttpsProxyAgent: E } = t(76992), B = t(31939), c = t(16618), I = { "http:": 80, "https:": 443 };
  let C = false;
  A.exports = class extends r {
    #A = null;
    #e = null;
    #t = null;
    constructor(A2 = {}) {
      super(), this.#t = A2, C || (C = true, process.emitWarning("EnvHttpProxyAgent is experimental, expect them to change at any time.", { code: "UNDICI-EHPA" }));
      const { httpProxy: e2, httpsProxy: t2, noProxy: r2, ...s2 } = A2;
      this[Q] = new c(s2);
      const o2 = e2 ?? process.env.http_proxy ?? process.env.HTTP_PROXY;
      this[g] = o2 ? new B({ ...s2, uri: o2 }) : this[Q];
      const n2 = t2 ?? process.env.https_proxy ?? process.env.HTTPS_PROXY;
      this[E] = n2 ? new B({ ...s2, uri: n2 }) : this[g], this.#r();
    }
    [a](A2, e2) {
      const t2 = new URL(A2.origin);
      return this.#s(t2).dispatch(A2, e2);
    }
    async [s]() {
      await this[Q].close(), this[g][n] || await this[g].close(), this[E][n] || await this[E].close();
    }
    async [o](A2) {
      await this[Q].destroy(A2), this[g][i] || await this[g].destroy(A2), this[E][i] || await this[E].destroy(A2);
    }
    #s(A2) {
      let { protocol: e2, host: t2, port: r2 } = A2;
      return t2 = t2.replace(/:\d*$/, "").toLowerCase(), r2 = Number.parseInt(r2, 10) || I[e2] || 0, this.#o(t2, r2) ? "https:" === e2 ? this[E] : this[g] : this[Q];
    }
    #o(A2, e2) {
      if (this.#n && this.#r(), 0 === this.#e.length) return true;
      if ("*" === this.#A) return false;
      for (let t2 = 0; t2 < this.#e.length; t2++) {
        const r2 = this.#e[t2];
        if (!r2.port || r2.port === e2) {
          if (/^[.*]/.test(r2.hostname)) {
            if (A2.endsWith(r2.hostname.replace(/^\*/, ""))) return false;
          } else if (A2 === r2.hostname) return false;
        }
      }
      return true;
    }
    #r() {
      const A2 = this.#t.noProxy ?? this.#i, e2 = A2.split(/[,\s]/), t2 = [];
      for (let A3 = 0; A3 < e2.length; A3++) {
        const r2 = e2[A3];
        if (!r2) continue;
        const s2 = r2.match(/^(.+):(\d+)$/);
        t2.push({ hostname: (s2 ? s2[1] : r2).toLowerCase(), port: s2 ? Number.parseInt(s2[2], 10) : 0 });
      }
      this.#A = A2, this.#e = t2;
    }
    get #n() {
      return void 0 === this.#t.noProxy && this.#A !== this.#i;
    }
    get #i() {
      return process.env.no_proxy ?? process.env.NO_PROXY ?? "";
    }
  };
}