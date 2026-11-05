// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8841 range:676791..680368
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8841: (e2, n2, a2) => {
    "use strict";
    const { kProxy: t2, kClose: s2, kDestroy: o2, kInterceptors: r2 } = a2(8832), { URL: i2 } = a2(7016), A = a2(568), l = a2(4003), c = a2(9792), { InvalidArgumentError: m, RequestAbortedError: d } = a2(7902), g = a2(3991), u = /* @__PURE__ */ Symbol("proxy agent"), E = /* @__PURE__ */ Symbol("proxy client"), p = /* @__PURE__ */ Symbol("proxy headers"), T = /* @__PURE__ */ Symbol("request tls settings"), k = /* @__PURE__ */ Symbol("proxy tls settings"), I = /* @__PURE__ */ Symbol("connect endpoint function");
    function h(e3, n3) {
      return new l(e3, n3);
    }
    e2.exports = class extends c {
      constructor(e3) {
        if (super(e3), this[t2] = (function(e4) {
          if ("string" == typeof e4 && (e4 = { uri: e4 }), !e4 || !e4.uri) throw new m("Proxy opts.uri is mandatory");
          return { uri: e4.uri, protocol: e4.protocol || "https" };
        })(e3), this[u] = new A(e3), this[r2] = e3.interceptors && e3.interceptors.ProxyAgent && Array.isArray(e3.interceptors.ProxyAgent) ? e3.interceptors.ProxyAgent : [], "string" == typeof e3 && (e3 = { uri: e3 }), !e3 || !e3.uri) throw new m("Proxy opts.uri is mandatory");
        const { clientFactory: n3 = h } = e3;
        if ("function" != typeof n3) throw new m("Proxy opts.clientFactory must be a function.");
        this[T] = e3.requestTls, this[k] = e3.proxyTls, this[p] = e3.headers || {};
        const a3 = new i2(e3.uri), { origin: s3, port: o3, host: l2, username: c2, password: _ } = a3;
        if (e3.auth && e3.token) throw new m("opts.auth cannot be used in combination with opts.token");
        e3.auth ? this[p]["proxy-authorization"] = `Basic ${e3.auth}` : e3.token ? this[p]["proxy-authorization"] = e3.token : c2 && _ && (this[p]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(c2)}:${decodeURIComponent(_)}`).toString("base64")}`);
        const C = g({ ...e3.proxyTls });
        this[I] = g({ ...e3.requestTls }), this[E] = n3(a3, { connect: C }), this[u] = new A({ ...e3, connect: async (e4, n4) => {
          let a4 = e4.host;
          e4.port || (a4 += ":" + ("https:" === e4.protocol ? 443 : 80));
          try {
            const { socket: t3, statusCode: r3 } = await this[E].connect({ origin: s3, port: o3, path: a4, signal: e4.signal, headers: { ...this[p], host: l2 } });
            if (200 !== r3 && (t3.on("error", () => {
            }).destroy(), n4(new d(`Proxy response (${r3}) !== 200 when HTTP Tunneling`))), "https:" !== e4.protocol) return void n4(null, t3);
            let i3;
            i3 = this[T] ? this[T].servername : e4.servername, this[I]({ ...e4, servername: i3, httpSocket: t3 }, n4);
          } catch (e5) {
            n4(e5);
          }
        } });
      }
      dispatch(e3, n3) {
        const { host: a3 } = new i2(e3.origin), t3 = (function(e4) {
          if (Array.isArray(e4)) {
            const n4 = {};
            for (let a4 = 0; a4 < e4.length; a4 += 2) n4[e4[a4]] = e4[a4 + 1];
            return n4;
          }
          return e4;
        })(e3.headers);
        return (function(e4) {
          const n4 = e4 && Object.keys(e4).find((e5) => "proxy-authorization" === e5.toLowerCase());
          if (n4) throw new m("Proxy-Authorization should be sent in ProxyAgent constructor");
        })(t3), this[u].dispatch({ ...e3, headers: { ...t3, host: a3 } }, n3);
      }
      async [s2]() {
        await this[u].close(), await this[E].close();
      }
      async [o2]() {
        await this[u].destroy(), await this[E].destroy();
      }
    };
  }