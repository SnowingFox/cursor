// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 9133 range:6050450..6054025
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
9133: (t2, e2, r2) => {
    "use strict";
    const { kProxy: n2, kClose: s2, kDestroy: i2, kInterceptors: o2 } = r2(5532), { URL: a } = r2(7016), u = r2(7132), c = r2(6215), l = r2(4220), { InvalidArgumentError: m, RequestAbortedError: d } = r2(8762), f = r2(4003), p = /* @__PURE__ */ Symbol("proxy agent"), h = /* @__PURE__ */ Symbol("proxy client"), g = /* @__PURE__ */ Symbol("proxy headers"), A = /* @__PURE__ */ Symbol("request tls settings"), _ = /* @__PURE__ */ Symbol("proxy tls settings"), y = /* @__PURE__ */ Symbol("connect endpoint function");
    function w(t3, e3) {
      return new c(t3, e3);
    }
    t2.exports = class extends l {
      constructor(t3) {
        if (super(t3), this[n2] = (function(t4) {
          if ("string" == typeof t4 && (t4 = { uri: t4 }), !t4 || !t4.uri) throw new m("Proxy opts.uri is mandatory");
          return { uri: t4.uri, protocol: t4.protocol || "https" };
        })(t3), this[p] = new u(t3), this[o2] = t3.interceptors && t3.interceptors.ProxyAgent && Array.isArray(t3.interceptors.ProxyAgent) ? t3.interceptors.ProxyAgent : [], "string" == typeof t3 && (t3 = { uri: t3 }), !t3 || !t3.uri) throw new m("Proxy opts.uri is mandatory");
        const { clientFactory: e3 = w } = t3;
        if ("function" != typeof e3) throw new m("Proxy opts.clientFactory must be a function.");
        this[A] = t3.requestTls, this[_] = t3.proxyTls, this[g] = t3.headers || {};
        const r3 = new a(t3.uri), { origin: s3, port: i3, host: c2, username: l2, password: S } = r3;
        if (t3.auth && t3.token) throw new m("opts.auth cannot be used in combination with opts.token");
        t3.auth ? this[g]["proxy-authorization"] = `Basic ${t3.auth}` : t3.token ? this[g]["proxy-authorization"] = t3.token : l2 && S && (this[g]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(l2)}:${decodeURIComponent(S)}`).toString("base64")}`);
        const J = f({ ...t3.proxyTls });
        this[y] = f({ ...t3.requestTls }), this[h] = e3(r3, { connect: J }), this[p] = new u({ ...t3, connect: async (t4, e4) => {
          let r4 = t4.host;
          t4.port || (r4 += ":" + ("https:" === t4.protocol ? 443 : 80));
          try {
            const { socket: n3, statusCode: o3 } = await this[h].connect({ origin: s3, port: i3, path: r4, signal: t4.signal, headers: { ...this[g], host: c2 } });
            if (200 !== o3 && (n3.on("error", () => {
            }).destroy(), e4(new d(`Proxy response (${o3}) !== 200 when HTTP Tunneling`))), "https:" !== t4.protocol) return void e4(null, n3);
            let a2;
            a2 = this[A] ? this[A].servername : t4.servername, this[y]({ ...t4, servername: a2, httpSocket: n3 }, e4);
          } catch (t5) {
            e4(t5);
          }
        } });
      }
      dispatch(t3, e3) {
        const { host: r3 } = new a(t3.origin), n3 = (function(t4) {
          if (Array.isArray(t4)) {
            const e4 = {};
            for (let r4 = 0; r4 < t4.length; r4 += 2) e4[t4[r4]] = t4[r4 + 1];
            return e4;
          }
          return t4;
        })(t3.headers);
        return (function(t4) {
          const e4 = t4 && Object.keys(t4).find((t5) => "proxy-authorization" === t5.toLowerCase());
          if (e4) throw new m("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(n3), this[p].dispatch({ ...t3, headers: { ...n3, host: r3 } }, e3);
      }
      async [s2]() {
        await this[p].close(), await this[h].close();
      }
      async [i2]() {
        await this[p].destroy(), await this[h].destroy();
      }
    };
  }