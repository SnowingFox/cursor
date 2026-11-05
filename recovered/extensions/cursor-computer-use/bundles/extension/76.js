// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 76 range:88..6154
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
76: (e2, n2, t2) => {
    "use strict";
    const { MockNotMatchedError: a2 } = t2(1862), { kDispatches: s2, kMockAgent: o2, kOriginalDispatch: r, kOrigin: i, kGetNetConnect: A } = t2(3192), { buildURL: c, nop: l } = t2(9361), { STATUS_CODES: d } = t2(8611), { types: { isPromise: m } } = t2(9023);
    function u(e3, n3) {
      return "string" == typeof e3 ? e3 === n3 : e3 instanceof RegExp ? e3.test(n3) : "function" == typeof e3 && true === e3(n3);
    }
    function g(e3) {
      return Object.fromEntries(Object.entries(e3).map(([e4, n3]) => [e4.toLocaleLowerCase(), n3]));
    }
    function p(e3, n3) {
      if (!Array.isArray(e3)) return "function" == typeof e3.get ? e3.get(n3) : g(e3)[n3.toLocaleLowerCase()];
      for (let t3 = 0; t3 < e3.length; t3 += 2) if (e3[t3].toLocaleLowerCase() === n3.toLocaleLowerCase()) return e3[t3 + 1];
    }
    function E(e3) {
      const n3 = e3.slice(), t3 = [];
      for (let e4 = 0; e4 < n3.length; e4 += 2) t3.push([n3[e4], n3[e4 + 1]]);
      return Object.fromEntries(t3);
    }
    function h(e3, n3) {
      if ("function" == typeof e3.headers) return Array.isArray(n3) && (n3 = E(n3)), e3.headers(n3 ? g(n3) : {});
      if (void 0 === e3.headers) return true;
      if ("object" != typeof n3 || "object" != typeof e3.headers) return false;
      for (const [t3, a3] of Object.entries(e3.headers)) {
        if (!u(a3, p(n3, t3))) return false;
      }
      return true;
    }
    function T(e3) {
      if ("string" != typeof e3) return e3;
      const n3 = e3.split("?");
      if (2 !== n3.length) return e3;
      const t3 = new URLSearchParams(n3.pop());
      return t3.sort(), [...n3, t3.toString()].join("?");
    }
    function k(e3) {
      return Buffer.isBuffer(e3) ? e3 : "object" == typeof e3 ? JSON.stringify(e3) : e3.toString();
    }
    function f(e3, n3) {
      const t3 = n3.query ? c(n3.path, n3.query) : n3.path, s3 = "string" == typeof t3 ? T(t3) : t3;
      let o3 = e3.filter(({ consumed: e4 }) => !e4).filter(({ path: e4 }) => u(T(e4), s3));
      if (0 === o3.length) throw new a2(`Mock dispatch not matched for path '${s3}'`);
      if (o3 = o3.filter(({ method: e4 }) => u(e4, n3.method)), 0 === o3.length) throw new a2(`Mock dispatch not matched for method '${n3.method}'`);
      if (o3 = o3.filter(({ body: e4 }) => void 0 === e4 || u(e4, n3.body)), 0 === o3.length) throw new a2(`Mock dispatch not matched for body '${n3.body}'`);
      if (o3 = o3.filter((e4) => h(e4, n3.headers)), 0 === o3.length) throw new a2(`Mock dispatch not matched for headers '${"object" == typeof n3.headers ? JSON.stringify(n3.headers) : n3.headers}'`);
      return o3[0];
    }
    function _(e3, n3) {
      const t3 = e3.findIndex((e4) => !!e4.consumed && (function(e5, { path: n4, method: t4, body: a3, headers: s3 }) {
        const o3 = u(e5.path, n4), r2 = u(e5.method, t4), i2 = void 0 === e5.body || u(e5.body, a3), A2 = h(e5, s3);
        return o3 && r2 && i2 && A2;
      })(e4, n3));
      -1 !== t3 && e3.splice(t3, 1);
    }
    function I(e3) {
      const { path: n3, method: t3, body: a3, headers: s3, query: o3 } = e3;
      return { path: n3, method: t3, body: a3, headers: s3, query: o3 };
    }
    function C(e3) {
      return Object.entries(e3).reduce((e4, [n3, t3]) => [...e4, Buffer.from(`${n3}`), Array.isArray(t3) ? t3.map((e5) => Buffer.from(`${e5}`)) : Buffer.from(`${t3}`)], []);
    }
    function y(e3) {
      return d[e3] || "unknown";
    }
    function B(e3, n3) {
      const t3 = I(e3), a3 = f(this[s2], t3);
      a3.timesInvoked++, a3.data.callback && (a3.data = { ...a3.data, ...a3.data.callback(e3) });
      const { data: { statusCode: o3, data: r2, headers: i2, trailers: A2, error: c2 }, delay: d2, persist: u2 } = a3, { timesInvoked: g2, times: p2 } = a3;
      if (a3.consumed = !u2 && g2 >= p2, a3.pending = g2 < p2, null !== c2) return _(this[s2], t3), n3.onError(c2), true;
      function h2(a4, s3 = r2) {
        const c3 = Array.isArray(e3.headers) ? E(e3.headers) : e3.headers, d3 = "function" == typeof s3 ? s3({ ...e3, headers: c3 }) : s3;
        if (m(d3)) return void d3.then((e4) => h2(a4, e4));
        const u3 = k(d3), g3 = C(i2), p3 = C(A2);
        n3.abort = l, n3.onHeaders(o3, g3, T2, y(o3)), n3.onData(Buffer.from(u3)), n3.onComplete(p3), _(a4, t3);
      }
      function T2() {
      }
      return "number" == typeof d2 && d2 > 0 ? setTimeout(() => {
        h2(this[s2]);
      }, d2) : h2(this[s2]), true;
    }
    function Q(e3, n3) {
      const t3 = new URL(n3);
      return true === e3 || !(!Array.isArray(e3) || !e3.some((e4) => u(e4, t3.host)));
    }
    e2.exports = { getResponseData: k, getMockDispatch: f, addMockDispatch: function(e3, n3, t3) {
      const a3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...n3, pending: true, data: { error: null, ..."function" == typeof t3 ? { callback: t3 } : { ...t3 } } };
      return e3.push(a3), a3;
    }, deleteMockDispatch: _, buildKey: I, generateKeyValues: C, matchValue: u, getResponse: async function(e3) {
      const n3 = [];
      for await (const t3 of e3) n3.push(t3);
      return Buffer.concat(n3).toString("utf8");
    }, getStatusText: y, mockDispatch: B, buildMockDispatch: function() {
      const e3 = this[o2], n3 = this[i], t3 = this[r];
      return function(s3, o3) {
        if (e3.isMockActive) try {
          B.call(this, s3, o3);
        } catch (r2) {
          if (!(r2 instanceof a2)) throw r2;
          {
            const i2 = e3[A]();
            if (false === i2) throw new a2(`${r2.message}: subsequent request to origin ${n3} was not allowed (net.connect disabled)`);
            if (!Q(i2, n3)) throw new a2(`${r2.message}: subsequent request to origin ${n3} was not allowed (net.connect is not enabled for this origin)`);
            t3.call(this, s3, o3);
          }
        }
        else t3.call(this, s3, o3);
      };
    }, checkNetConnect: Q, buildMockOptions: function(e3) {
      if (e3) {
        const { agent: n3, ...t3 } = e3;
        return t3;
      }
    }, getHeaderByName: p };
  }