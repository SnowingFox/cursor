// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 76 range:89..6159
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
76: (e2, n2, a2) => {
    "use strict";
    const { MockNotMatchedError: t2 } = a2(1862), { kDispatches: s2, kMockAgent: o2, kOriginalDispatch: r2, kOrigin: i2, kGetNetConnect: A } = a2(3192), { buildURL: l, nop: c } = a2(9361), { STATUS_CODES: m } = a2(8611), { types: { isPromise: d } } = a2(9023);
    function g(e3, n3) {
      return "string" == typeof e3 ? e3 === n3 : e3 instanceof RegExp ? e3.test(n3) : "function" == typeof e3 && true === e3(n3);
    }
    function u(e3) {
      return Object.fromEntries(Object.entries(e3).map(([e4, n3]) => [e4.toLocaleLowerCase(), n3]));
    }
    function E(e3, n3) {
      if (!Array.isArray(e3)) return "function" == typeof e3.get ? e3.get(n3) : u(e3)[n3.toLocaleLowerCase()];
      for (let a3 = 0; a3 < e3.length; a3 += 2) if (e3[a3].toLocaleLowerCase() === n3.toLocaleLowerCase()) return e3[a3 + 1];
    }
    function p(e3) {
      const n3 = e3.slice(), a3 = [];
      for (let e4 = 0; e4 < n3.length; e4 += 2) a3.push([n3[e4], n3[e4 + 1]]);
      return Object.fromEntries(a3);
    }
    function T(e3, n3) {
      if ("function" == typeof e3.headers) return Array.isArray(n3) && (n3 = p(n3)), e3.headers(n3 ? u(n3) : {});
      if (void 0 === e3.headers) return true;
      if ("object" != typeof n3 || "object" != typeof e3.headers) return false;
      for (const [a3, t3] of Object.entries(e3.headers)) {
        if (!g(t3, E(n3, a3))) return false;
      }
      return true;
    }
    function k(e3) {
      if ("string" != typeof e3) return e3;
      const n3 = e3.split("?");
      if (2 !== n3.length) return e3;
      const a3 = new URLSearchParams(n3.pop());
      return a3.sort(), [...n3, a3.toString()].join("?");
    }
    function I(e3) {
      return Buffer.isBuffer(e3) ? e3 : "object" == typeof e3 ? JSON.stringify(e3) : e3.toString();
    }
    function h(e3, n3) {
      const a3 = n3.query ? l(n3.path, n3.query) : n3.path, s3 = "string" == typeof a3 ? k(a3) : a3;
      let o3 = e3.filter(({ consumed: e4 }) => !e4).filter(({ path: e4 }) => g(k(e4), s3));
      if (0 === o3.length) throw new t2(`Mock dispatch not matched for path '${s3}'`);
      if (o3 = o3.filter(({ method: e4 }) => g(e4, n3.method)), 0 === o3.length) throw new t2(`Mock dispatch not matched for method '${n3.method}'`);
      if (o3 = o3.filter(({ body: e4 }) => void 0 === e4 || g(e4, n3.body)), 0 === o3.length) throw new t2(`Mock dispatch not matched for body '${n3.body}'`);
      if (o3 = o3.filter((e4) => T(e4, n3.headers)), 0 === o3.length) throw new t2(`Mock dispatch not matched for headers '${"object" == typeof n3.headers ? JSON.stringify(n3.headers) : n3.headers}'`);
      return o3[0];
    }
    function _(e3, n3) {
      const a3 = e3.findIndex((e4) => !!e4.consumed && (function(e5, { path: n4, method: a4, body: t3, headers: s3 }) {
        const o3 = g(e5.path, n4), r3 = g(e5.method, a4), i3 = void 0 === e5.body || g(e5.body, t3), A2 = T(e5, s3);
        return o3 && r3 && i3 && A2;
      })(e4, n3));
      -1 !== a3 && e3.splice(a3, 1);
    }
    function C(e3) {
      const { path: n3, method: a3, body: t3, headers: s3, query: o3 } = e3;
      return { path: n3, method: a3, body: t3, headers: s3, query: o3 };
    }
    function f(e3) {
      return Object.entries(e3).reduce((e4, [n3, a3]) => [...e4, Buffer.from(`${n3}`), Array.isArray(a3) ? a3.map((e5) => Buffer.from(`${e5}`)) : Buffer.from(`${a3}`)], []);
    }
    function B(e3) {
      return m[e3] || "unknown";
    }
    function Q(e3, n3) {
      const a3 = C(e3), t3 = h(this[s2], a3);
      t3.timesInvoked++, t3.data.callback && (t3.data = { ...t3.data, ...t3.data.callback(e3) });
      const { data: { statusCode: o3, data: r3, headers: i3, trailers: A2, error: l2 }, delay: m2, persist: g2 } = t3, { timesInvoked: u2, times: E2 } = t3;
      if (t3.consumed = !g2 && u2 >= E2, t3.pending = u2 < E2, null !== l2) return _(this[s2], a3), n3.onError(l2), true;
      function T2(t4, s3 = r3) {
        const l3 = Array.isArray(e3.headers) ? p(e3.headers) : e3.headers, m3 = "function" == typeof s3 ? s3({ ...e3, headers: l3 }) : s3;
        if (d(m3)) return void m3.then((e4) => T2(t4, e4));
        const g3 = I(m3), u3 = f(i3), E3 = f(A2);
        n3.abort = c, n3.onHeaders(o3, u3, k2, B(o3)), n3.onData(Buffer.from(g3)), n3.onComplete(E3), _(t4, a3);
      }
      function k2() {
      }
      return "number" == typeof m2 && m2 > 0 ? setTimeout(() => {
        T2(this[s2]);
      }, m2) : T2(this[s2]), true;
    }
    function y(e3, n3) {
      const a3 = new URL(n3);
      return true === e3 || !(!Array.isArray(e3) || !e3.some((e4) => g(e4, a3.host)));
    }
    e2.exports = { getResponseData: I, getMockDispatch: h, addMockDispatch: function(e3, n3, a3) {
      const t3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...n3, pending: true, data: { error: null, ..."function" == typeof a3 ? { callback: a3 } : { ...a3 } } };
      return e3.push(t3), t3;
    }, deleteMockDispatch: _, buildKey: C, generateKeyValues: f, matchValue: g, getResponse: async function(e3) {
      const n3 = [];
      for await (const a3 of e3) n3.push(a3);
      return Buffer.concat(n3).toString("utf8");
    }, getStatusText: B, mockDispatch: Q, buildMockDispatch: function() {
      const e3 = this[o2], n3 = this[i2], a3 = this[r2];
      return function(s3, o3) {
        if (e3.isMockActive) try {
          Q.call(this, s3, o3);
        } catch (r3) {
          if (!(r3 instanceof t2)) throw r3;
          {
            const i3 = e3[A]();
            if (false === i3) throw new t2(`${r3.message}: subsequent request to origin ${n3} was not allowed (net.connect disabled)`);
            if (!y(i3, n3)) throw new t2(`${r3.message}: subsequent request to origin ${n3} was not allowed (net.connect is not enabled for this origin)`);
            a3.call(this, s3, o3);
          }
        }
        else a3.call(this, s3, o3);
      };
    }, checkNetConnect: y, buildMockOptions: function(e3) {
      if (e3) {
        const { agent: n3, ...a3 } = e3;
        return a3;
      }
    }, getHeaderByName: E };
  }