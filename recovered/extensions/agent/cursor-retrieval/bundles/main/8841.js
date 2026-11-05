// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8841 range:1024732..1028309
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8841: (e2, a2, n2) => {
    "use strict";
    const { kProxy: t2, kClose: s2, kDestroy: o2, kInterceptors: r2 } = n2(8832), { URL: i2 } = n2(7016), l = n2(568), d = n2(4003), m = n2(9792), { InvalidArgumentError: c, RequestAbortedError: p } = n2(7902), A = n2(3991), u = /* @__PURE__ */ Symbol("proxy agent"), g = /* @__PURE__ */ Symbol("proxy client"), T = /* @__PURE__ */ Symbol("proxy headers"), h = /* @__PURE__ */ Symbol("request tls settings"), k = /* @__PURE__ */ Symbol("proxy tls settings"), _ = /* @__PURE__ */ Symbol("connect endpoint function");
    function E(e3, a3) {
      return new d(e3, a3);
    }
    e2.exports = class extends m {
      constructor(e3) {
        if (super(e3), this[t2] = (function(e4) {
          if ("string" == typeof e4 && (e4 = { uri: e4 }), !e4 || !e4.uri) throw new c("Proxy opts.uri is mandatory");
          return { uri: e4.uri, protocol: e4.protocol || "https" };
        })(e3), this[u] = new l(e3), this[r2] = e3.interceptors && e3.interceptors.ProxyAgent && Array.isArray(e3.interceptors.ProxyAgent) ? e3.interceptors.ProxyAgent : [], "string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new c("Proxy opts.uri is mandatory");
        const { clientFactory: a3 = E } = e3;
        if ("function" != typeof a3) throw new c("Proxy opts.clientFactory must be a function.");
        this[h] = e3.requestTls, this[k] = e3.proxyTls, this[T] = e3.headers || {};
        const n3 = new i2(e3.uri), { origin: s3, port: o3, host: d2, username: m2, password: f } = n3;
        if (e3.auth && e3.token) throw new c("opts.auth cannot be used in combination with opts.token");
        e3.auth ? this[T]["proxy-authorization"] = `Basic ${e3.auth}` : e3.token ? this[T]["proxy-authorization"] = e3.token : m2 && f && (this[T]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(m2)}:${decodeURIComponent(f)}`).toString("base64")}`);
        const C = A({ ...e3.proxyTls });
        this[_] = A({ ...e3.requestTls }), this[g] = a3(n3, { connect: C }), this[u] = new l({ ...e3, connect: async (e4, a4) => {
          let n4 = e4.host;
          e4.port || (n4 += ":" + ("https:" === e4.protocol ? 443 : 80));
          try {
            const { socket: t3, statusCode: r3 } = await this[g].connect({ origin: s3, port: o3, path: n4, signal: e4.signal, headers: { ...this[T], host: d2 } });
            if (200 !== r3 && (t3.on("error", () => {
            }).destroy(), a4(new p(`Proxy response (${r3}) !== 200 when HTTP Tunneling`))), "https:" !== e4.protocol) return void a4(null, t3);
            let i3;
            i3 = this[h] ? this[h].servername : e4.servername, this[_]({ ...e4, servername: i3, httpSocket: t3 }, a4);
          } catch (e5) {
            a4(e5);
          }
        } });
      }
      dispatch(e3, a3) {
        const { host: n3 } = new i2(e3.origin), t3 = (function(e4) {
          if (Array.isArray(e4)) {
            const a4 = {};
            for (let n4 = 0; n4 < e4.length; n4 += 2) a4[e4[n4]] = e4[n4 + 1];
            return a4;
          }
          return e4;
        })(e3.headers);
        return (function(e4) {
          const a4 = e4 && Object.keys(e4).find((e5) => "proxy-authorization" === e5.toLowerCase());
          if (a4) throw new c("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(t3), this[u].dispatch({ ...e3, headers: { ...t3, host: n3 } }, a3);
      }
      async [s2]() {
        await this[u].close(), await this[g].close();
      }
      async [o2]() {
        await this[u].destroy(), await this[g].destroy();
      }
    };
  }