// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 4008 range:1051113..1057183
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
4008: (t2, e2, r2) => {
    "use strict";
    const { MockNotMatchedError: n2 } = r2(4546), { kDispatches: s2, kMockAgent: i2, kOriginalDispatch: o2, kOrigin: a, kGetNetConnect: u } = r2(1476), { buildURL: c, nop: l } = r2(3589), { STATUS_CODES: m } = r2(8611), { types: { isPromise: d } } = r2(9023);
    function f(t3, e3) {
      return "string" == typeof t3 ? t3 === e3 : t3 instanceof RegExp ? t3.test(e3) : "function" == typeof t3 && true === t3(e3);
    }
    function p(t3) {
      return Object.fromEntries(Object.entries(t3).map(([t4, e3]) => [t4.toLocaleLowerCase(), e3]));
    }
    function h(t3, e3) {
      if (!Array.isArray(t3)) return "function" == typeof t3.get ? t3.get(e3) : p(t3)[e3.toLocaleLowerCase()];
      for (let r3 = 0; r3 < t3.length; r3 += 2) if (t3[r3].toLocaleLowerCase() === e3.toLocaleLowerCase()) return t3[r3 + 1];
    }
    function g(t3) {
      const e3 = t3.slice(), r3 = [];
      for (let t4 = 0; t4 < e3.length; t4 += 2) r3.push([e3[t4], e3[t4 + 1]]);
      return Object.fromEntries(r3);
    }
    function A(t3, e3) {
      if ("function" == typeof t3.headers) return Array.isArray(e3) && (e3 = g(e3)), t3.headers(e3 ? p(e3) : {});
      if (void 0 === t3.headers) return true;
      if ("object" != typeof e3 || "object" != typeof t3.headers) return false;
      for (const [r3, n3] of Object.entries(t3.headers)) {
        if (!f(n3, h(e3, r3))) return false;
      }
      return true;
    }
    function _(t3) {
      if ("string" != typeof t3) return t3;
      const e3 = t3.split("?");
      if (2 !== e3.length) return t3;
      const r3 = new URLSearchParams(e3.pop());
      return r3.sort(), [...e3, r3.toString()].join("?");
    }
    function y(t3) {
      return Buffer.isBuffer(t3) ? t3 : "object" == typeof t3 ? JSON.stringify(t3) : t3.toString();
    }
    function w(t3, e3) {
      const r3 = e3.query ? c(e3.path, e3.query) : e3.path, s3 = "string" == typeof r3 ? _(r3) : r3;
      let i3 = t3.filter(({ consumed: t4 }) => !t4).filter(({ path: t4 }) => f(_(t4), s3));
      if (0 === i3.length) throw new n2(`Mock dispatch not matched for path '${s3}'`);
      if (i3 = i3.filter(({ method: t4 }) => f(t4, e3.method)), 0 === i3.length) throw new n2(`Mock dispatch not matched for method '${e3.method}'`);
      if (i3 = i3.filter(({ body: t4 }) => void 0 === t4 || f(t4, e3.body)), 0 === i3.length) throw new n2(`Mock dispatch not matched for body '${e3.body}'`);
      if (i3 = i3.filter((t4) => A(t4, e3.headers)), 0 === i3.length) throw new n2(`Mock dispatch not matched for headers '${"object" == typeof e3.headers ? JSON.stringify(e3.headers) : e3.headers}'`);
      return i3[0];
    }
    function S(t3, e3) {
      const r3 = t3.findIndex((t4) => !!t4.consumed && (function(t5, { path: e4, method: r4, body: n3, headers: s3 }) {
        const i3 = f(t5.path, e4), o3 = f(t5.method, r4), a2 = void 0 === t5.body || f(t5.body, n3), u2 = A(t5, s3);
        return i3 && o3 && a2 && u2;
      })(t4, e3));
      -1 !== r3 && t3.splice(r3, 1);
    }
    function J(t3) {
      const { path: e3, method: r3, body: n3, headers: s3, query: i3 } = t3;
      return { path: e3, method: r3, body: n3, headers: s3, query: i3 };
    }
    function B(t3) {
      return Object.entries(t3).reduce((t4, [e3, r3]) => [...t4, Buffer.from(`${e3}`), Array.isArray(r3) ? r3.map((t5) => Buffer.from(`${t5}`)) : Buffer.from(`${r3}`)], []);
    }
    function E(t3) {
      return m[t3] || "unknown";
    }
    function I(t3, e3) {
      const r3 = J(t3), n3 = w(this[s2], r3);
      n3.timesInvoked++, n3.data.callback && (n3.data = { ...n3.data, ...n3.data.callback(t3) });
      const { data: { statusCode: i3, data: o3, headers: a2, trailers: u2, error: c2 }, delay: m2, persist: f2 } = n3, { timesInvoked: p2, times: h2 } = n3;
      if (n3.consumed = !f2 && p2 >= h2, n3.pending = p2 < h2, null !== c2) return S(this[s2], r3), e3.onError(c2), true;
      function A2(n4, s3 = o3) {
        const c3 = Array.isArray(t3.headers) ? g(t3.headers) : t3.headers, m3 = "function" == typeof s3 ? s3({ ...t3, headers: c3 }) : s3;
        if (d(m3)) return void m3.then((t4) => A2(n4, t4));
        const f3 = y(m3), p3 = B(a2), h3 = B(u2);
        e3.abort = l, e3.onHeaders(i3, p3, _2, E(i3)), e3.onData(Buffer.from(f3)), e3.onComplete(h3), S(n4, r3);
      }
      function _2() {
      }
      return "number" == typeof m2 && m2 > 0 ? setTimeout(() => {
        A2(this[s2]);
      }, m2) : A2(this[s2]), true;
    }
    function C(t3, e3) {
      const r3 = new URL(e3);
      return true === t3 || !(!Array.isArray(t3) || !t3.some((t4) => f(t4, r3.host)));
    }
    t2.exports = { getResponseData: y, getMockDispatch: w, addMockDispatch: function(t3, e3, r3) {
      const n3 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...e3, pending: true, data: { error: null, ..."function" == typeof r3 ? { callback: r3 } : { ...r3 } } };
      return t3.push(n3), n3;
    }, deleteMockDispatch: S, buildKey: J, generateKeyValues: B, matchValue: f, getResponse: async function(t3) {
      const e3 = [];
      for await (const r3 of t3) e3.push(r3);
      return Buffer.concat(e3).toString("utf8");
    }, getStatusText: E, mockDispatch: I, buildMockDispatch: function() {
      const t3 = this[i2], e3 = this[a], r3 = this[o2];
      return function(s3, i3) {
        if (t3.isMockActive) try {
          I.call(this, s3, i3);
        } catch (o3) {
          if (!(o3 instanceof n2)) throw o3;
          {
            const a2 = t3[u]();
            if (false === a2) throw new n2(`${o3.message}: subsequent request to origin ${e3} was not allowed (net.connect disabled)`);
            if (!C(a2, e3)) throw new n2(`${o3.message}: subsequent request to origin ${e3} was not allowed (net.connect is not enabled for this origin)`);
            r3.call(this, s3, i3);
          }
        }
        else r3.call(this, s3, i3);
      };
    }, checkNetConnect: C, buildMockOptions: function(t3) {
      if (t3) {
        const { agent: e3, ...r3 } = t3;
        return r3;
      }
    }, getHeaderByName: h };
  }