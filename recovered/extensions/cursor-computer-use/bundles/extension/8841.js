// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8841 range:707352..710924
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8841: (e2, n2, t2) => {
    "use strict";
    const { kProxy: a2, kClose: s2, kDestroy: o2, kInterceptors: r } = t2(8832), { URL: i } = t2(7016), A = t2(568), c = t2(4003), l = t2(9792), { InvalidArgumentError: d, RequestAbortedError: m } = t2(7902), u = t2(3991), g = /* @__PURE__ */ Symbol("proxy agent"), p = /* @__PURE__ */ Symbol("proxy client"), E = /* @__PURE__ */ Symbol("proxy headers"), h = /* @__PURE__ */ Symbol("request tls settings"), T = /* @__PURE__ */ Symbol("proxy tls settings"), k = /* @__PURE__ */ Symbol("connect endpoint function");
    function f(e3, n3) {
      return new c(e3, n3);
    }
    e2.exports = class extends l {
      constructor(e3) {
        if (super(e3), this[a2] = (function(e4) {
          if ("string" == typeof e4 && (e4 = { uri: e4 }), !e4 || !e4.uri) throw new d("Proxy opts.uri is mandatory");
          return { uri: e4.uri, protocol: e4.protocol || "https" };
        })(e3), this[g] = new A(e3), this[r] = e3.interceptors && e3.interceptors.ProxyAgent && Array.isArray(e3.interceptors.ProxyAgent) ? e3.interceptors.ProxyAgent : [], "string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new d("Proxy opts.uri is mandatory");
        const { clientFactory: n3 = f } = e3;
        if ("function" != typeof n3) throw new d("Proxy opts.clientFactory must be a function.");
        this[h] = e3.requestTls, this[T] = e3.proxyTls, this[E] = e3.headers || {};
        const t3 = new i(e3.uri), { origin: s3, port: o3, host: c2, username: l2, password: _ } = t3;
        if (e3.auth && e3.token) throw new d("opts.auth cannot be used in combination with opts.token");
        e3.auth ? this[E]["proxy-authorization"] = `Basic ${e3.auth}` : e3.token ? this[E]["proxy-authorization"] = e3.token : l2 && _ && (this[E]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l2)}:${decodeURIComponent(_)}`).toString("base64")}`);
        const I = u({ ...e3.proxyTls });
        this[k] = u({ ...e3.requestTls }), this[p] = n3(t3, { connect: I }), this[g] = new A({ ...e3, connect: async (e4, n4) => {
          let t4 = e4.host;
          e4.port || (t4 += ":" + ("https:" === e4.protocol ? 443 : 80));
          try {
            const { socket: a3, statusCode: r2 } = await this[p].connect({ origin: s3, port: o3, path: t4, signal: e4.signal, headers: { ...this[E], host: c2 } });
            if (200 !== r2 && (a3.on("error", () => {
            }).destroy(), n4(new m(`Proxy response (${r2}) !== 200 when HTTP Tunneling`))), "https:" !== e4.protocol) return void n4(null, a3);
            let i2;
            i2 = this[h] ? this[h].servername : e4.servername, this[k]({ ...e4, servername: i2, httpSocket: a3 }, n4);
          } catch (e5) {
            n4(e5);
          }
        } });
      }
      dispatch(e3, n3) {
        const { host: t3 } = new i(e3.origin), a3 = (function(e4) {
          if (Array.isArray(e4)) {
            const n4 = {};
            for (let t4 = 0; t4 < e4.length; t4 += 2) n4[e4[t4]] = e4[t4 + 1];
            return n4;
          }
          return e4;
        })(e3.headers);
        return (function(e4) {
          const n4 = e4 && Object.keys(e4).find((e5) => "proxy-authorization" === e5.toLowerCase());
          if (n4) throw new d("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(a3), this[g].dispatch({ ...e3, headers: { ...a3, host: t3 } }, n3);
      }
      async [s2]() {
        await this[g].close(), await this[p].close();
      }
      async [o2]() {
        await this[g].destroy(), await this[p].destroy();
      }
    };
  }