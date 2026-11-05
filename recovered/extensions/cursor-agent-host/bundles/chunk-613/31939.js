// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 31939 range:188850..193870
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
31939: (A, e, t) => {
  "use strict";
  const { kProxy: r, kClose: s, kDestroy: o, kDispatch: n, kInterceptors: i } = t(76992), { URL: a } = t(73136), Q = t(16618), g = t(3817), E = t(27110), { InvalidArgumentError: B, RequestAbortedError: c, SecureProxyConnectionError: I } = t(38238), C = t(60039), h = t(90996), l = /* @__PURE__ */ Symbol("proxy agent"), u = /* @__PURE__ */ Symbol("proxy client"), d = /* @__PURE__ */ Symbol("proxy headers"), f = /* @__PURE__ */ Symbol("request tls settings"), w = /* @__PURE__ */ Symbol("proxy tls settings"), y = /* @__PURE__ */ Symbol("connect endpoint function"), D = /* @__PURE__ */ Symbol("tunnel proxy");
  function p(A2, e2) {
    return new g(A2, e2);
  }
  const k = () => {
  };
  function R(A2, e2) {
    return 1 === e2.connections ? new h(A2, e2) : new g(A2, e2);
  }
  class F extends E {
    #l;
    constructor(A2, { headers: e2 = {}, connect: t2, factory: r2 }) {
      if (super(), !A2) throw new B("Proxy URL is mandatory");
      this[d] = e2, this.#l = r2 ? r2(A2, { connect: t2 }) : new h(A2, { connect: t2 });
    }
    [n](A2, e2) {
      const t2 = e2.onHeaders;
      e2.onHeaders = function(A3, r3, s3) {
        407 !== A3 ? t2 && t2.call(this, A3, r3, s3) : "function" == typeof e2.onError && e2.onError(new B("Proxy Authentication Required (407)"));
      };
      const { origin: r2, path: s2 = "/", headers: o2 = {} } = A2;
      if (A2.path = r2 + s2, !("host" in o2) && !("Host" in o2)) {
        const { host: A3 } = new a(r2);
        o2.host = A3;
      }
      return A2.headers = { ...this[d], ...o2 }, this.#l[n](A2, e2);
    }
    async [s]() {
      return this.#l.close();
    }
    async [o](A2) {
      return this.#l.destroy(A2);
    }
  }
  A.exports = class extends E {
    constructor(A2) {
      if (super(), !A2 || "object" == typeof A2 && !(A2 instanceof a) && !A2.uri) throw new B("Proxy uri is mandatory");
      const { clientFactory: e2 = p } = A2;
      if ("function" != typeof e2) throw new B("Proxy opts.clientFactory must be a function.");
      const { proxyTunnel: t2 = true } = A2, s2 = this.#u(A2), { href: o2, origin: n2, port: g2, protocol: E2, username: h2, password: m, hostname: b } = s2;
      if (this[r] = { uri: o2, protocol: E2 }, this[i] = A2.interceptors?.ProxyAgent && Array.isArray(A2.interceptors.ProxyAgent) ? A2.interceptors.ProxyAgent : [], this[f] = A2.requestTls, this[w] = A2.proxyTls, this[d] = A2.headers || {}, this[D] = t2, A2.auth && A2.token) throw new B("opts.auth cannot be used in combination with opts.token");
      A2.auth ? this[d]["proxy-authorization"] = `Basic ${A2.auth}` : A2.token ? this[d]["proxy-authorization"] = A2.token : h2 && m && (this[d]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(h2)}:${decodeURIComponent(m)}`).toString("base64")}`);
      const N = C({ ...A2.proxyTls });
      this[y] = C({ ...A2.requestTls });
      const S = A2.factory || R;
      this[u] = e2(s2, { connect: N }), this[l] = new Q({ ...A2, factory: (A3, e3) => {
        const { protocol: t3 } = new a(A3);
        return this[D] || "http:" !== t3 || "http:" !== this[r].protocol ? S(A3, e3) : new F(this[r].uri, { headers: this[d], connect: N, factory: S });
      }, connect: async (A3, e3) => {
        let t3 = A3.host;
        A3.port || (t3 += `:${/* @__PURE__ */ (function(A4) {
          return "https:" === A4 ? 443 : 80;
        })(A3.protocol)}`);
        try {
          const { socket: r2, statusCode: s3 } = await this[u].connect({ origin: n2, port: g2, path: t3, signal: A3.signal, headers: { ...this[d], host: A3.host }, servername: this[w]?.servername || b });
          if (200 !== s3 && (r2.on("error", k).destroy(), e3(new c(`Proxy response (${s3}) !== 200 when HTTP Tunneling`))), "https:" !== A3.protocol) return void e3(null, r2);
          let o3;
          o3 = this[f] ? this[f].servername : A3.servername, this[y]({ ...A3, servername: o3, httpSocket: r2 }, e3);
        } catch (A4) {
          "ERR_TLS_CERT_ALTNAME_INVALID" === A4.code ? e3(new I(A4)) : e3(A4);
        }
      } });
    }
    dispatch(A2, e2) {
      const t2 = (function(A3) {
        if (Array.isArray(A3)) {
          const e3 = {};
          for (let t3 = 0; t3 < A3.length; t3 += 2) e3[A3[t3]] = A3[t3 + 1];
          return e3;
        }
        return A3;
      })(A2.headers);
      if ((function(A3) {
        const e3 = A3 && Object.keys(A3).find((A4) => "proxy-authorization" === A4.toLowerCase());
        if (e3) throw new B("Proxy-Authorization should be sent in ProxyAgent constructor");
      })(t2), t2 && !("host" in t2) && !("Host" in t2)) {
        const { host: e3 } = new a(A2.origin);
        t2.host = e3;
      }
      return this[l].dispatch({ ...A2, headers: t2 }, e2);
    }
    #u(A2) {
      return "string" == typeof A2 ? new a(A2) : A2 instanceof a ? A2 : new a(A2.uri);
    }
    async [s]() {
      await this[l].close(), await this[u].close();
    }
    async [o]() {
      await this[l].destroy(), await this[u].destroy();
    }
  };
}