// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8841 range:675839..679411
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8841: (e2, A2, t2) => {
    "use strict";
    const { kProxy: n2, kClose: r2, kDestroy: o2, kInterceptors: s } = t2(8832), { URL: a } = t2(7016), i = t2(568), c = t2(4003), l = t2(9792), { InvalidArgumentError: g, RequestAbortedError: E } = t2(7902), u = t2(3991), d = /* @__PURE__ */ Symbol("proxy agent"), I = /* @__PURE__ */ Symbol("proxy client"), h = /* @__PURE__ */ Symbol("proxy headers"), Q = /* @__PURE__ */ Symbol("request tls settings"), m = /* @__PURE__ */ Symbol("proxy tls settings"), C = /* @__PURE__ */ Symbol("connect endpoint function");
    function B(e3, A3) {
      return new c(e3, A3);
    }
    e2.exports = class extends l {
      constructor(e3) {
        if (super(e3), this[n2] = (function(e4) {
          if ("string" == typeof e4 && (e4 = { uri: e4 }), !e4 || !e4.uri) throw new g("Proxy opts.uri is mandatory");
          return { uri: e4.uri, protocol: e4.protocol || "https" };
        })(e3), this[d] = new i(e3), this[s] = e3.interceptors && e3.interceptors.ProxyAgent && Array.isArray(e3.interceptors.ProxyAgent) ? e3.interceptors.ProxyAgent : [], "string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new g("Proxy opts.uri is mandatory");
        const { clientFactory: A3 = B } = e3;
        if ("function" != typeof A3) throw new g("Proxy opts.clientFactory must be a function.");
        this[Q] = e3.requestTls, this[m] = e3.proxyTls, this[h] = e3.headers || {};
        const t3 = new a(e3.uri), { origin: r3, port: o3, host: c2, username: l2, password: p } = t3;
        if (e3.auth && e3.token) throw new g("opts.auth cannot be used in combination with opts.token");
        e3.auth ? this[h]["proxy-authorization"] = `Basic ${e3.auth}` : e3.token ? this[h]["proxy-authorization"] = e3.token : l2 && p && (this[h]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l2)}:${decodeURIComponent(p)}`).toString("base64")}`);
        const f = u({ ...e3.proxyTls });
        this[C] = u({ ...e3.requestTls }), this[I] = A3(t3, { connect: f }), this[d] = new i({ ...e3, connect: async (e4, A4) => {
          let t4 = e4.host;
          e4.port || (t4 += ":" + ("https:" === e4.protocol ? 443 : 80));
          try {
            const { socket: n3, statusCode: s2 } = await this[I].connect({ origin: r3, port: o3, path: t4, signal: e4.signal, headers: { ...this[h], host: c2 } });
            if (200 !== s2 && (n3.on("error", () => {
            }).destroy(), A4(new E(`Proxy response (${s2}) !== 200 when HTTP Tunneling`))), "https:" !== e4.protocol) return void A4(null, n3);
            let a2;
            a2 = this[Q] ? this[Q].servername : e4.servername, this[C]({ ...e4, servername: a2, httpSocket: n3 }, A4);
          } catch (e5) {
            A4(e5);
          }
        } });
      }
      dispatch(e3, A3) {
        const { host: t3 } = new a(e3.origin), n3 = (function(e4) {
          if (Array.isArray(e4)) {
            const A4 = {};
            for (let t4 = 0; t4 < e4.length; t4 += 2) A4[e4[t4]] = e4[t4 + 1];
            return A4;
          }
          return e4;
        })(e3.headers);
        return (function(e4) {
          const A4 = e4 && Object.keys(e4).find((e5) => "proxy-authorization" === e5.toLowerCase());
          if (A4) throw new g("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(n3), this[d].dispatch({ ...e3, headers: { ...n3, host: t3 } }, A3);
      }
      async [r2]() {
        await this[d].close(), await this[I].close();
      }
      async [o2]() {
        await this[d].destroy(), await this[I].destroy();
      }
    };
  }