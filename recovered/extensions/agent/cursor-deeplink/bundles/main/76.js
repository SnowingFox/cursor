// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 76 range:83..6149
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
76: (e2, t2, A2) => {
    "use strict";
    const { MockNotMatchedError: n2 } = A2(1862), { kDispatches: r2, kMockAgent: o2, kOriginalDispatch: s, kOrigin: i, kGetNetConnect: a } = A2(3192), { buildURL: c, nop: l } = A2(9361), { STATUS_CODES: u } = A2(8611), { types: { isPromise: g } } = A2(9023);
    function E(e3, t3) {
      return "string" == typeof e3 ? e3 === t3 : e3 instanceof RegExp ? e3.test(t3) : "function" == typeof e3 && true === e3(t3);
    }
    function h(e3) {
      return Object.fromEntries(Object.entries(e3).map(([e4, t3]) => [e4.toLocaleLowerCase(), t3]));
    }
    function d(e3, t3) {
      if (!Array.isArray(e3)) return "function" == typeof e3.get ? e3.get(t3) : h(e3)[t3.toLocaleLowerCase()];
      for (let A3 = 0; A3 < e3.length; A3 += 2) if (e3[A3].toLocaleLowerCase() === t3.toLocaleLowerCase()) return e3[A3 + 1];
    }
    function I(e3) {
      const t3 = e3.slice(), A3 = [];
      for (let e4 = 0; e4 < t3.length; e4 += 2) A3.push([t3[e4], t3[e4 + 1]]);
      return Object.fromEntries(A3);
    }
    function B(e3, t3) {
      if ("function" == typeof e3.headers) return Array.isArray(t3) && (t3 = I(t3)), e3.headers(t3 ? h(t3) : {});
      if (void 0 === e3.headers) return true;
      if ("object" != typeof t3 || "object" != typeof e3.headers) return false;
      for (const [A3, n3] of Object.entries(e3.headers)) {
        if (!E(n3, d(t3, A3))) return false;
      }
      return true;
    }
    function Q(e3) {
      if ("string" != typeof e3) return e3;
      const t3 = e3.split("?");
      if (2 !== t3.length) return e3;
      const A3 = new URLSearchParams(t3.pop());
      return A3.sort(), [...t3, A3.toString()].join("?");
    }
    function f(e3) {
      return Buffer.isBuffer(e3) ? e3 : "object" == typeof e3 ? JSON.stringify(e3) : e3.toString();
    }
    function C(e3, t3) {
      const A3 = t3.query ? c(t3.path, t3.query) : t3.path, r3 = "string" == typeof A3 ? Q(A3) : A3;
      let o3 = e3.filter(({ consumed: e4 }) => !e4).filter(({ path: e4 }) => E(Q(e4), r3));
      if (0 === o3.length) throw new n2(`Mock dispatch not matched for path '${r3}'`);
      if (o3 = o3.filter(({ method: e4 }) => E(e4, t3.method)), 0 === o3.length) throw new n2(`Mock dispatch not matched for method '${t3.method}'`);
      if (o3 = o3.filter(({ body: e4 }) => void 0 === e4 || E(e4, t3.body)), 0 === o3.length) throw new n2(`Mock dispatch not matched for body '${t3.body}'`);
      if (o3 = o3.filter((e4) => B(e4, t3.headers)), 0 === o3.length) throw new n2(`Mock dispatch not matched for headers '${"object" == typeof t3.headers ? JSON.stringify(t3.headers) : t3.headers}'`);
      return o3[0];
    }
    function p(e3, t3) {
      const A3 = e3.findIndex((e4) => !!e4.consumed && (function(e5, { path: t4, method: A4, body: n3, headers: r3 }) {
        const o3 = E(e5.path, t4), s2 = E(e5.method, A4), i2 = void 0 === e5.body || E(e5.body, n3), a2 = B(e5, r3);
        return o3 && s2 && i2 && a2;
      })(e4, t3));
      -1 !== A3 && e3.splice(A3, 1);
    }
    function m(e3) {
      const { path: t3, method: A3, body: n3, headers: r3, query: o3 } = e3;
      return { path: t3, method: A3, body: n3, headers: r3, query: o3 };
    }
    function y(e3) {
      return Object.entries(e3).reduce((e4, [t3, A3]) => [...e4, Buffer.from(`${t3}`), Array.isArray(A3) ? A3.map((e5) => Buffer.from(`${e5}`)) : Buffer.from(`${A3}`)], []);
    }
    function w(e3) {
      return u[e3] || "unknown";
    }
    function k(e3, t3) {
      const A3 = m(e3), n3 = C(this[r2], A3);
      n3.timesInvoked++, n3.data.callback && (n3.data = { ...n3.data, ...n3.data.callback(e3) });
      const { data: { statusCode: o3, data: s2, headers: i2, trailers: a2, error: c2 }, delay: u2, persist: E2 } = n3, { timesInvoked: h2, times: d2 } = n3;
      if (n3.consumed = !E2 && h2 >= d2, n3.pending = h2 < d2, null !== c2) return p(this[r2], A3), t3.onError(c2), true;
      function B2(n4, r3 = s2) {
        const c3 = Array.isArray(e3.headers) ? I(e3.headers) : e3.headers, u3 = "function" == typeof r3 ? r3({ ...e3, headers: c3 }) : r3;
        if (g(u3)) return void u3.then((e4) => B2(n4, e4));
        const E3 = f(u3), h3 = y(i2), d3 = y(a2);
        t3.abort = l, t3.onHeaders(o3, h3, Q2, w(o3)), t3.onData(Buffer.from(E3)), t3.onComplete(d3), p(n4, A3);
      }
      function Q2() {
      }
      return "number" == typeof u2 && u2 > 0 ? setTimeout(() => {
        B2(this[r2]);
      }, u2) : B2(this[r2]), true;
    }
    function b(e3, t3) {
      const A3 = new URL(t3);
      return true === e3 || !(!Array.isArray(e3) || !e3.some((e4) => E(e4, A3.host)));
    }
    e2.exports = { getResponseData: f, getMockDispatch: C, addMockDispatch: function(e3, t3, A3) {
      const n3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...t3, pending: true, data: { error: null, ..."function" == typeof A3 ? { callback: A3 } : { ...A3 } } };
      return e3.push(n3), n3;
    }, deleteMockDispatch: p, buildKey: m, generateKeyValues: y, matchValue: E, getResponse: async function(e3) {
      const t3 = [];
      for await (const A3 of e3) t3.push(A3);
      return Buffer.concat(t3).toString("utf8");
    }, getStatusText: w, mockDispatch: k, buildMockDispatch: function() {
      const e3 = this[o2], t3 = this[i], A3 = this[s];
      return function(r3, o3) {
        if (e3.isMockActive) try {
          k.call(this, r3, o3);
        } catch (s2) {
          if (!(s2 instanceof n2)) throw s2;
          {
            const i2 = e3[a]();
            if (false === i2) throw new n2(`${s2.message}: subsequent request to origin ${t3} was not allowed (net.connect disabled)`);
            if (!b(i2, t3)) throw new n2(`${s2.message}: subsequent request to origin ${t3} was not allowed (net.connect is not enabled for this origin)`);
            A3.call(this, r3, o3);
          }
        }
        else A3.call(this, r3, o3);
      };
    }, checkNetConnect: b, buildMockOptions: function(e3) {
      if (e3) {
        const { agent: t3, ...A3 } = e3;
        return A3;
      }
    }, getHeaderByName: d };
  }