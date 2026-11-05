// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 76 range:210..6280
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
76: (e2, a2, n2) => {
    "use strict";
    const { MockNotMatchedError: t2 } = n2(1862), { kDispatches: s2, kMockAgent: o2, kOriginalDispatch: r2, kOrigin: i2, kGetNetConnect: l } = n2(3192), { buildURL: d, nop: m } = n2(9361), { STATUS_CODES: c } = n2(8611), { types: { isPromise: p } } = n2(9023);
    function A(e3, a3) {
      return "string" == typeof e3 ? e3 === a3 : e3 instanceof RegExp ? e3.test(a3) : "function" == typeof e3 && true === e3(a3);
    }
    function u(e3) {
      return Object.fromEntries(Object.entries(e3).map(([e4, a3]) => [e4.toLocaleLowerCase(), a3]));
    }
    function g(e3, a3) {
      if (!Array.isArray(e3)) return "function" == typeof e3.get ? e3.get(a3) : u(e3)[a3.toLocaleLowerCase()];
      for (let n3 = 0; n3 < e3.length; n3 += 2) if (e3[n3].toLocaleLowerCase() === a3.toLocaleLowerCase()) return e3[n3 + 1];
    }
    function T(e3) {
      const a3 = e3.slice(), n3 = [];
      for (let e4 = 0; e4 < a3.length; e4 += 2) n3.push([a3[e4], a3[e4 + 1]]);
      return Object.fromEntries(n3);
    }
    function h(e3, a3) {
      if ("function" == typeof e3.headers) return Array.isArray(a3) && (a3 = T(a3)), e3.headers(a3 ? u(a3) : {});
      if (void 0 === e3.headers) return true;
      if ("object" != typeof a3 || "object" != typeof e3.headers) return false;
      for (const [n3, t3] of Object.entries(e3.headers)) {
        if (!A(t3, g(a3, n3))) return false;
      }
      return true;
    }
    function k(e3) {
      if ("string" != typeof e3) return e3;
      const a3 = e3.split("?");
      if (2 !== a3.length) return e3;
      const n3 = new URLSearchParams(a3.pop());
      return n3.sort(), [...a3, n3.toString()].join("?");
    }
    function _(e3) {
      return Buffer.isBuffer(e3) ? e3 : "object" == typeof e3 ? JSON.stringify(e3) : e3.toString();
    }
    function E(e3, a3) {
      const n3 = a3.query ? d(a3.path, a3.query) : a3.path, s3 = "string" == typeof n3 ? k(n3) : n3;
      let o3 = e3.filter(({ consumed: e4 }) => !e4).filter(({ path: e4 }) => A(k(e4), s3));
      if (0 === o3.length) throw new t2(`Mock dispatch not matched for path '${s3}'`);
      if (o3 = o3.filter(({ method: e4 }) => A(e4, a3.method)), 0 === o3.length) throw new t2(`Mock dispatch not matched for method '${a3.method}'`);
      if (o3 = o3.filter(({ body: e4 }) => void 0 === e4 || A(e4, a3.body)), 0 === o3.length) throw new t2(`Mock dispatch not matched for body '${a3.body}'`);
      if (o3 = o3.filter((e4) => h(e4, a3.headers)), 0 === o3.length) throw new t2(`Mock dispatch not matched for headers '${"object" == typeof a3.headers ? JSON.stringify(a3.headers) : a3.headers}'`);
      return o3[0];
    }
    function f(e3, a3) {
      const n3 = e3.findIndex((e4) => !!e4.consumed && (function(e5, { path: a4, method: n4, body: t3, headers: s3 }) {
        const o3 = A(e5.path, a4), r3 = A(e5.method, n4), i3 = void 0 === e5.body || A(e5.body, t3), l2 = h(e5, s3);
        return o3 && r3 && i3 && l2;
      })(e4, a3));
      -1 !== n3 && e3.splice(n3, 1);
    }
    function C(e3) {
      const { path: a3, method: n3, body: t3, headers: s3, query: o3 } = e3;
      return { path: a3, method: n3, body: t3, headers: s3, query: o3 };
    }
    function I(e3) {
      return Object.entries(e3).reduce((e4, [a3, n3]) => [...e4, Buffer.from(`${a3}`), Array.isArray(n3) ? n3.map((e5) => Buffer.from(`${e5}`)) : Buffer.from(`${n3}`)], []);
    }
    function v(e3) {
      return c[e3] || "unknown";
    }
    function y(e3, a3) {
      const n3 = C(e3), t3 = E(this[s2], n3);
      t3.timesInvoked++, t3.data.callback && (t3.data = { ...t3.data, ...t3.data.callback(e3) });
      const { data: { statusCode: o3, data: r3, headers: i3, trailers: l2, error: d2 }, delay: c2, persist: A2 } = t3, { timesInvoked: u2, times: g2 } = t3;
      if (t3.consumed = !A2 && u2 >= g2, t3.pending = u2 < g2, null !== d2) return f(this[s2], n3), a3.onError(d2), true;
      function h2(t4, s3 = r3) {
        const d3 = Array.isArray(e3.headers) ? T(e3.headers) : e3.headers, c3 = "function" == typeof s3 ? s3({ ...e3, headers: d3 }) : s3;
        if (p(c3)) return void c3.then((e4) => h2(t4, e4));
        const A3 = _(c3), u3 = I(i3), g3 = I(l2);
        a3.abort = m, a3.onHeaders(o3, u3, k2, v(o3)), a3.onData(Buffer.from(A3)), a3.onComplete(g3), f(t4, n3);
      }
      function k2() {
      }
      return "number" == typeof c2 && c2 > 0 ? setTimeout(() => {
        h2(this[s2]);
      }, c2) : h2(this[s2]), true;
    }
    function S(e3, a3) {
      const n3 = new URL(a3);
      return true === e3 || !(!Array.isArray(e3) || !e3.some((e4) => A(e4, n3.host)));
    }
    e2.exports = { getResponseData: _, getMockDispatch: E, addMockDispatch: function(e3, a3, n3) {
      const t3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...a3, pending: true, data: { error: null, ..."function" == typeof n3 ? { callback: n3 } : { ...n3 } } };
      return e3.push(t3), t3;
    }, deleteMockDispatch: f, buildKey: C, generateKeyValues: I, matchValue: A, getResponse: async function(e3) {
      const a3 = [];
      for await (const n3 of e3) a3.push(n3);
      return Buffer.concat(a3).toString("utf8");
    }, getStatusText: v, mockDispatch: y, buildMockDispatch: function() {
      const e3 = this[o2], a3 = this[i2], n3 = this[r2];
      return function(s3, o3) {
        if (e3.isMockActive) try {
          y.call(this, s3, o3);
        } catch (r3) {
          if (!(r3 instanceof t2)) throw r3;
          {
            const i3 = e3[l]();
            if (false === i3) throw new t2(`${r3.message}: subsequent request to origin ${a3} was not allowed (net.connect disabled)`);
            if (!S(i3, a3)) throw new t2(`${r3.message}: subsequent request to origin ${a3} was not allowed (net.connect is not enabled for this origin)`);
            n3.call(this, s3, o3);
          }
        }
        else n3.call(this, s3, o3);
      };
    }, checkNetConnect: S, buildMockOptions: function(e3) {
      if (e3) {
        const { agent: a3, ...n3 } = e3;
        return n3;
      }
    }, getHeaderByName: g };
  }