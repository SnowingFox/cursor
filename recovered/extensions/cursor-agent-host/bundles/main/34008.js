// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 34008 range:6601954..6608004
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
34008: (e, t, r) => {
    "use strict";
    const { MockNotMatchedError: n } = r(24546), { kDispatches: s, kMockAgent: o, kOriginalDispatch: i, kOrigin: a, kGetNetConnect: c } = r(51476), { buildURL: l, nop: u } = r(83589), { STATUS_CODES: d } = r(58611), { types: { isPromise: p } } = r(39023);
    function m(e2, t2) {
      return "string" == typeof e2 ? e2 === t2 : e2 instanceof RegExp ? e2.test(t2) : "function" == typeof e2 && true === e2(t2);
    }
    function h(e2) {
      return Object.fromEntries(Object.entries(e2).map(([e3, t2]) => [e3.toLocaleLowerCase(), t2]));
    }
    function f(e2, t2) {
      if (!Array.isArray(e2)) return "function" == typeof e2.get ? e2.get(t2) : h(e2)[t2.toLocaleLowerCase()];
      for (let r2 = 0; r2 < e2.length; r2 += 2) if (e2[r2].toLocaleLowerCase() === t2.toLocaleLowerCase()) return e2[r2 + 1];
    }
    function g(e2) {
      const t2 = e2.slice(), r2 = [];
      for (let e3 = 0; e3 < t2.length; e3 += 2) r2.push([t2[e3], t2[e3 + 1]]);
      return Object.fromEntries(r2);
    }
    function y(e2, t2) {
      if ("function" == typeof e2.headers) return Array.isArray(t2) && (t2 = g(t2)), e2.headers(t2 ? h(t2) : {});
      if (void 0 === e2.headers) return true;
      if ("object" != typeof t2 || "object" != typeof e2.headers) return false;
      for (const [r2, n2] of Object.entries(e2.headers)) {
        if (!m(n2, f(t2, r2))) return false;
      }
      return true;
    }
    function w(e2) {
      if ("string" != typeof e2) return e2;
      const t2 = e2.split("?");
      if (2 !== t2.length) return e2;
      const r2 = new URLSearchParams(t2.pop());
      return r2.sort(), [...t2, r2.toString()].join("?");
    }
    function v(e2) {
      return Buffer.isBuffer(e2) ? e2 : "object" == typeof e2 ? JSON.stringify(e2) : e2.toString();
    }
    function _(e2, t2) {
      const r2 = t2.query ? l(t2.path, t2.query) : t2.path, s2 = "string" == typeof r2 ? w(r2) : r2;
      let o2 = e2.filter(({ consumed: e3 }) => !e3).filter(({ path: e3 }) => m(w(e3), s2));
      if (0 === o2.length) throw new n(`Mock dispatch not matched for path '${s2}'`);
      if (o2 = o2.filter(({ method: e3 }) => m(e3, t2.method)), 0 === o2.length) throw new n(`Mock dispatch not matched for method '${t2.method}'`);
      if (o2 = o2.filter(({ body: e3 }) => void 0 === e3 || m(e3, t2.body)), 0 === o2.length) throw new n(`Mock dispatch not matched for body '${t2.body}'`);
      if (o2 = o2.filter((e3) => y(e3, t2.headers)), 0 === o2.length) throw new n(`Mock dispatch not matched for headers '${"object" == typeof t2.headers ? JSON.stringify(t2.headers) : t2.headers}'`);
      return o2[0];
    }
    function A(e2, t2) {
      const r2 = e2.findIndex((e3) => !!e3.consumed && (function(e4, { path: t3, method: r3, body: n2, headers: s2 }) {
        const o2 = m(e4.path, t3), i2 = m(e4.method, r3), a2 = void 0 === e4.body || m(e4.body, n2), c2 = y(e4, s2);
        return o2 && i2 && a2 && c2;
      })(e3, t2));
      -1 !== r2 && e2.splice(r2, 1);
    }
    function S(e2) {
      const { path: t2, method: r2, body: n2, headers: s2, query: o2 } = e2;
      return { path: t2, method: r2, body: n2, headers: s2, query: o2 };
    }
    function b(e2) {
      return Object.entries(e2).reduce((e3, [t2, r2]) => [...e3, Buffer.from(`${t2}`), Array.isArray(r2) ? r2.map((e4) => Buffer.from(`${e4}`)) : Buffer.from(`${r2}`)], []);
    }
    function E(e2) {
      return d[e2] || "unknown";
    }
    function I(e2, t2) {
      const r2 = S(e2), n2 = _(this[s], r2);
      n2.timesInvoked++, n2.data.callback && (n2.data = { ...n2.data, ...n2.data.callback(e2) });
      const { data: { statusCode: o2, data: i2, headers: a2, trailers: c2, error: l2 }, delay: d2, persist: m2 } = n2, { timesInvoked: h2, times: f2 } = n2;
      if (n2.consumed = !m2 && h2 >= f2, n2.pending = h2 < f2, null !== l2) return A(this[s], r2), t2.onError(l2), true;
      function y2(n3, s2 = i2) {
        const l3 = Array.isArray(e2.headers) ? g(e2.headers) : e2.headers, d3 = "function" == typeof s2 ? s2({ ...e2, headers: l3 }) : s2;
        if (p(d3)) return void d3.then((e3) => y2(n3, e3));
        const m3 = v(d3), h3 = b(a2), f3 = b(c2);
        t2.abort = u, t2.onHeaders(o2, h3, w2, E(o2)), t2.onData(Buffer.from(m3)), t2.onComplete(f3), A(n3, r2);
      }
      function w2() {
      }
      return "number" == typeof d2 && d2 > 0 ? setTimeout(() => {
        y2(this[s]);
      }, d2) : y2(this[s]), true;
    }
    function C(e2, t2) {
      const r2 = new URL(t2);
      return true === e2 || !(!Array.isArray(e2) || !e2.some((e3) => m(e3, r2.host)));
    }
    e.exports = { getResponseData: v, getMockDispatch: _, addMockDispatch: function(e2, t2, r2) {
      const n2 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...t2, pending: true, data: { error: null, ..."function" == typeof r2 ? { callback: r2 } : { ...r2 } } };
      return e2.push(n2), n2;
    }, deleteMockDispatch: A, buildKey: S, generateKeyValues: b, matchValue: m, getResponse: async function(e2) {
      const t2 = [];
      for await (const r2 of e2) t2.push(r2);
      return Buffer.concat(t2).toString("utf8");
    }, getStatusText: E, mockDispatch: I, buildMockDispatch: function() {
      const e2 = this[o], t2 = this[a], r2 = this[i];
      return function(s2, o2) {
        if (e2.isMockActive) try {
          I.call(this, s2, o2);
        } catch (i2) {
          if (!(i2 instanceof n)) throw i2;
          {
            const a2 = e2[c]();
            if (false === a2) throw new n(`${i2.message}: subsequent request to origin ${t2} was not allowed (net.connect disabled)`);
            if (!C(a2, t2)) throw new n(`${i2.message}: subsequent request to origin ${t2} was not allowed (net.connect is not enabled for this origin)`);
            r2.call(this, s2, o2);
          }
        }
        else r2.call(this, s2, o2);
      };
    }, checkNetConnect: C, buildMockOptions: function(e2) {
      if (e2) {
        const { agent: t2, ...r2 } = e2;
        return r2;
      }
    }, getHeaderByName: f };
  }