// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 69133 range:10741648..10745211
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
69133: (e, t, r) => {
    "use strict";
    const { kProxy: n, kClose: s, kDestroy: o, kInterceptors: i } = r(15532), { URL: a } = r(87016), c = r(57132), l = r(26215), u = r(84220), { InvalidArgumentError: d, RequestAbortedError: p } = r(48762), m = r(4003), h = /* @__PURE__ */ Symbol("proxy agent"), f = /* @__PURE__ */ Symbol("proxy client"), g = /* @__PURE__ */ Symbol("proxy headers"), y = /* @__PURE__ */ Symbol("request tls settings"), w = /* @__PURE__ */ Symbol("proxy tls settings"), v = /* @__PURE__ */ Symbol("connect endpoint function");
    function _(e2, t2) {
      return new l(e2, t2);
    }
    e.exports = class extends u {
      constructor(e2) {
        if (super(e2), this[n] = (function(e3) {
          if ("string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new d("Proxy opts.uri is mandatory");
          return { uri: e3.uri, protocol: e3.protocol || "https" };
        })(e2), this[h] = new c(e2), this[i] = e2.interceptors && e2.interceptors.ProxyAgent && Array.isArray(e2.interceptors.ProxyAgent) ? e2.interceptors.ProxyAgent : [], "string" == typeof e2 && (e2 = { uri: e2 }), !e2 || !e2.uri) throw new d("Proxy opts.uri is mandatory");
        const { clientFactory: t2 = _ } = e2;
        if ("function" != typeof t2) throw new d("Proxy opts.clientFactory must be a function.");
        this[y] = e2.requestTls, this[w] = e2.proxyTls, this[g] = e2.headers || {};
        const r2 = new a(e2.uri), { origin: s2, port: o2, host: l2, username: u2, password: A } = r2;
        if (e2.auth && e2.token) throw new d("opts.auth cannot be used in combination with opts.token");
        e2.auth ? this[g]["proxy-authorization"] = `Basic ${e2.auth}` : e2.token ? this[g]["proxy-authorization"] = e2.token : u2 && A && (this[g]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(u2)}:${decodeURIComponent(A)}`).toString("base64")}`);
        const S = m({ ...e2.proxyTls });
        this[v] = m({ ...e2.requestTls }), this[f] = t2(r2, { connect: S }), this[h] = new c({ ...e2, connect: async (e3, t3) => {
          let r3 = e3.host;
          e3.port || (r3 += ":" + ("https:" === e3.protocol ? 443 : 80));
          try {
            const { socket: n2, statusCode: i2 } = await this[f].connect({ origin: s2, port: o2, path: r3, signal: e3.signal, headers: { ...this[g], host: l2 } });
            if (200 !== i2 && (n2.on("error", () => {
            }).destroy(), t3(new p(`Proxy response (${i2}) !== 200 when HTTP Tunneling`))), "https:" !== e3.protocol) return void t3(null, n2);
            let a2;
            a2 = this[y] ? this[y].servername : e3.servername, this[v]({ ...e3, servername: a2, httpSocket: n2 }, t3);
          } catch (e4) {
            t3(e4);
          }
        } });
      }
      dispatch(e2, t2) {
        const { host: r2 } = new a(e2.origin), n2 = (function(e3) {
          if (Array.isArray(e3)) {
            const t3 = {};
            for (let r3 = 0; r3 < e3.length; r3 += 2) t3[e3[r3]] = e3[r3 + 1];
            return t3;
          }
          return e3;
        })(e2.headers);
        return (function(e3) {
          const t3 = e3 && Object.keys(e3).find((e4) => "proxy-authorization" === e4.toLowerCase());
          if (t3) throw new d("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(n2), this[h].dispatch({ ...e2, headers: { ...n2, host: r2 } }, t2);
      }
      async [s]() {
        await this[h].close(), await this[f].close();
      }
      async [o]() {
        await this[h].destroy(), await this[f].destroy();
      }
    };
  }