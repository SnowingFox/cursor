// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8841 range:810126..813698
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8841: (e2, t2, A2) => {
    "use strict";
    const { kProxy: n2, kClose: r2, kDestroy: o2, kInterceptors: s } = A2(8832), { URL: i } = A2(7016), a = A2(568), c = A2(4003), l = A2(9792), { InvalidArgumentError: u, RequestAbortedError: g } = A2(7902), E = A2(3991), h = /* @__PURE__ */ Symbol("proxy agent"), d = /* @__PURE__ */ Symbol("proxy client"), I = /* @__PURE__ */ Symbol("proxy headers"), B = /* @__PURE__ */ Symbol("request tls settings"), Q = /* @__PURE__ */ Symbol("proxy tls settings"), f = /* @__PURE__ */ Symbol("connect endpoint function");
    function C(e3, t3) {
      return new c(e3, t3);
    }
    e2.exports = class extends l {
      constructor(e3) {
        if (super(e3), this[n2] = (function(e4) {
          if ("string" == typeof e4 && (e4 = { uri: e4 }), !e4 || !e4.uri) throw new u("Proxy opts.uri is mandatory");
          return { uri: e4.uri, protocol: e4.protocol || "https" };
        })(e3), this[h] = new a(e3), this[s] = e3.interceptors && e3.interceptors.ProxyAgent && Array.isArray(e3.interceptors.ProxyAgent) ? e3.interceptors.ProxyAgent : [], "string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new u("Proxy opts.uri is mandatory");
        const { clientFactory: t3 = C } = e3;
        if ("function" != typeof t3) throw new u("Proxy opts.clientFactory must be a function.");
        this[B] = e3.requestTls, this[Q] = e3.proxyTls, this[I] = e3.headers || {};
        const A3 = new i(e3.uri), { origin: r3, port: o3, host: c2, username: l2, password: p } = A3;
        if (e3.auth && e3.token) throw new u("opts.auth cannot be used in combination with opts.token");
        e3.auth ? this[I]["proxy-authorization"] = `Basic ${e3.auth}` : e3.token ? this[I]["proxy-authorization"] = e3.token : l2 && p && (this[I]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l2)}:${decodeURIComponent(p)}`).toString("base64")}`);
        const m = E({ ...e3.proxyTls });
        this[f] = E({ ...e3.requestTls }), this[d] = t3(A3, { connect: m }), this[h] = new a({ ...e3, connect: async (e4, t4) => {
          let A4 = e4.host;
          e4.port || (A4 += ":" + ("https:" === e4.protocol ? 443 : 80));
          try {
            const { socket: n3, statusCode: s2 } = await this[d].connect({ origin: r3, port: o3, path: A4, signal: e4.signal, headers: { ...this[I], host: c2 } });
            if (200 !== s2 && (n3.on("error", () => {
            }).destroy(), t4(new g(`Proxy response (${s2}) !== 200 when HTTP Tunneling`))), "https:" !== e4.protocol) return void t4(null, n3);
            let i2;
            i2 = this[B] ? this[B].servername : e4.servername, this[f]({ ...e4, servername: i2, httpSocket: n3 }, t4);
          } catch (e5) {
            t4(e5);
          }
        } });
      }
      dispatch(e3, t3) {
        const { host: A3 } = new i(e3.origin), n3 = (function(e4) {
          if (Array.isArray(e4)) {
            const t4 = {};
            for (let A4 = 0; A4 < e4.length; A4 += 2) t4[e4[A4]] = e4[A4 + 1];
            return t4;
          }
          return e4;
        })(e3.headers);
        return (function(e4) {
          const t4 = e4 && Object.keys(e4).find((e5) => "proxy-authorization" === e5.toLowerCase());
          if (t4) throw new u("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(n3), this[h].dispatch({ ...e3, headers: { ...n3, host: A3 } }, t3);
      }
      async [r2]() {
        await this[h].close(), await this[d].close();
      }
      async [o2]() {
        await this[h].destroy(), await this[d].destroy();
      }
    };
  }