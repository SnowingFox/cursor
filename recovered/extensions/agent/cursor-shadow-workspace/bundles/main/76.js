// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 76 range:88..6154
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
76: (e2, A2, t2) => {
    "use strict";
    const { MockNotMatchedError: n2 } = t2(1862), { kDispatches: r2, kMockAgent: o2, kOriginalDispatch: s, kOrigin: a, kGetNetConnect: i } = t2(3192), { buildURL: c, nop: l } = t2(9361), { STATUS_CODES: g } = t2(8611), { types: { isPromise: E } } = t2(9023);
    function u(e3, A3) {
      return "string" == typeof e3 ? e3 === A3 : e3 instanceof RegExp ? e3.test(A3) : "function" == typeof e3 && true === e3(A3);
    }
    function d(e3) {
      return Object.fromEntries(Object.entries(e3).map(([e4, A3]) => [e4.toLocaleLowerCase(), A3]));
    }
    function I(e3, A3) {
      if (!Array.isArray(e3)) return "function" == typeof e3.get ? e3.get(A3) : d(e3)[A3.toLocaleLowerCase()];
      for (let t3 = 0; t3 < e3.length; t3 += 2) if (e3[t3].toLocaleLowerCase() === A3.toLocaleLowerCase()) return e3[t3 + 1];
    }
    function h(e3) {
      const A3 = e3.slice(), t3 = [];
      for (let e4 = 0; e4 < A3.length; e4 += 2) t3.push([A3[e4], A3[e4 + 1]]);
      return Object.fromEntries(t3);
    }
    function Q(e3, A3) {
      if ("function" == typeof e3.headers) return Array.isArray(A3) && (A3 = h(A3)), e3.headers(A3 ? d(A3) : {});
      if (void 0 === e3.headers) return true;
      if ("object" != typeof A3 || "object" != typeof e3.headers) return false;
      for (const [t3, n3] of Object.entries(e3.headers)) {
        if (!u(n3, I(A3, t3))) return false;
      }
      return true;
    }
    function m(e3) {
      if ("string" != typeof e3) return e3;
      const A3 = e3.split("?");
      if (2 !== A3.length) return e3;
      const t3 = new URLSearchParams(A3.pop());
      return t3.sort(), [...A3, t3.toString()].join("?");
    }
    function C(e3) {
      return Buffer.isBuffer(e3) ? e3 : "object" == typeof e3 ? JSON.stringify(e3) : e3.toString();
    }
    function B(e3, A3) {
      const t3 = A3.query ? c(A3.path, A3.query) : A3.path, r3 = "string" == typeof t3 ? m(t3) : t3;
      let o3 = e3.filter(({ consumed: e4 }) => !e4).filter(({ path: e4 }) => u(m(e4), r3));
      if (0 === o3.length) throw new n2(`Mock dispatch not matched for path '${r3}'`);
      if (o3 = o3.filter(({ method: e4 }) => u(e4, A3.method)), 0 === o3.length) throw new n2(`Mock dispatch not matched for method '${A3.method}'`);
      if (o3 = o3.filter(({ body: e4 }) => void 0 === e4 || u(e4, A3.body)), 0 === o3.length) throw new n2(`Mock dispatch not matched for body '${A3.body}'`);
      if (o3 = o3.filter((e4) => Q(e4, A3.headers)), 0 === o3.length) throw new n2(`Mock dispatch not matched for headers '${"object" == typeof A3.headers ? JSON.stringify(A3.headers) : A3.headers}'`);
      return o3[0];
    }
    function p(e3, A3) {
      const t3 = e3.findIndex((e4) => !!e4.consumed && (function(e5, { path: A4, method: t4, body: n3, headers: r3 }) {
        const o3 = u(e5.path, A4), s2 = u(e5.method, t4), a2 = void 0 === e5.body || u(e5.body, n3), i2 = Q(e5, r3);
        return o3 && s2 && a2 && i2;
      })(e4, A3));
      -1 !== t3 && e3.splice(t3, 1);
    }
    function f(e3) {
      const { path: A3, method: t3, body: n3, headers: r3, query: o3 } = e3;
      return { path: A3, method: t3, body: n3, headers: r3, query: o3 };
    }
    function y(e3) {
      return Object.entries(e3).reduce((e4, [A3, t3]) => [...e4, Buffer.from(`${A3}`), Array.isArray(t3) ? t3.map((e5) => Buffer.from(`${e5}`)) : Buffer.from(`${t3}`)], []);
    }
    function T(e3) {
      return g[e3] || "unknown";
    }
    function k(e3, A3) {
      const t3 = f(e3), n3 = B(this[r2], t3);
      n3.timesInvoked++, n3.data.callback && (n3.data = { ...n3.data, ...n3.data.callback(e3) });
      const { data: { statusCode: o3, data: s2, headers: a2, trailers: i2, error: c2 }, delay: g2, persist: u2 } = n3, { timesInvoked: d2, times: I2 } = n3;
      if (n3.consumed = !u2 && d2 >= I2, n3.pending = d2 < I2, null !== c2) return p(this[r2], t3), A3.onError(c2), true;
      function Q2(n4, r3 = s2) {
        const c3 = Array.isArray(e3.headers) ? h(e3.headers) : e3.headers, g3 = "function" == typeof r3 ? r3({ ...e3, headers: c3 }) : r3;
        if (E(g3)) return void g3.then((e4) => Q2(n4, e4));
        const u3 = C(g3), d3 = y(a2), I3 = y(i2);
        A3.abort = l, A3.onHeaders(o3, d3, m2, T(o3)), A3.onData(Buffer.from(u3)), A3.onComplete(I3), p(n4, t3);
      }
      function m2() {
      }
      return "number" == typeof g2 && g2 > 0 ? setTimeout(() => {
        Q2(this[r2]);
      }, g2) : Q2(this[r2]), true;
    }
    function w(e3, A3) {
      const t3 = new URL(A3);
      return true === e3 || !(!Array.isArray(e3) || !e3.some((e4) => u(e4, t3.host)));
    }
    e2.exports = { getResponseData: C, getMockDispatch: B, addMockDispatch: function(e3, A3, t3) {
      const n3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...A3, pending: true, data: { error: null, ..."function" == typeof t3 ? { callback: t3 } : { ...t3 } } };
      return e3.push(n3), n3;
    }, deleteMockDispatch: p, buildKey: f, generateKeyValues: y, matchValue: u, getResponse: async function(e3) {
      const A3 = [];
      for await (const t3 of e3) A3.push(t3);
      return Buffer.concat(A3).toString("utf8");
    }, getStatusText: T, mockDispatch: k, buildMockDispatch: function() {
      const e3 = this[o2], A3 = this[a], t3 = this[s];
      return function(r3, o3) {
        if (e3.isMockActive) try {
          k.call(this, r3, o3);
        } catch (s2) {
          if (!(s2 instanceof n2)) throw s2;
          {
            const a2 = e3[i]();
            if (false === a2) throw new n2(`${s2.message}: subsequent request to origin ${A3} was not allowed (net.connect disabled)`);
            if (!w(a2, A3)) throw new n2(`${s2.message}: subsequent request to origin ${A3} was not allowed (net.connect is not enabled for this origin)`);
            t3.call(this, r3, o3);
          }
        }
        else t3.call(this, r3, o3);
      };
    }, checkNetConnect: w, buildMockOptions: function(e3) {
      if (e3) {
        const { agent: A3, ...t3 } = e3;
        return t3;
      }
    }, getHeaderByName: I };
  }