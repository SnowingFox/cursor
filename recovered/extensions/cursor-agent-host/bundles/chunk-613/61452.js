// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 61452 range:332829..339002
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
61452: (A, e, t) => {
  "use strict";
  const { MockNotMatchedError: r } = t(33078), { kDispatches: s, kMockAgent: o, kOriginalDispatch: n, kOrigin: i, kGetNetConnect: a } = t(53304), { buildURL: Q } = t(55201), { STATUS_CODES: g } = t(37067), { types: { isPromise: E } } = t(57975);
  function B(A2, e2) {
    return "string" == typeof A2 ? A2 === e2 : A2 instanceof RegExp ? A2.test(e2) : "function" == typeof A2 && true === A2(e2);
  }
  function c(A2) {
    return Object.fromEntries(Object.entries(A2).map(([A3, e2]) => [A3.toLocaleLowerCase(), e2]));
  }
  function I(A2, e2) {
    if (!Array.isArray(A2)) return "function" == typeof A2.get ? A2.get(e2) : c(A2)[e2.toLocaleLowerCase()];
    for (let t2 = 0; t2 < A2.length; t2 += 2) if (A2[t2].toLocaleLowerCase() === e2.toLocaleLowerCase()) return A2[t2 + 1];
  }
  function C(A2) {
    const e2 = A2.slice(), t2 = [];
    for (let A3 = 0; A3 < e2.length; A3 += 2) t2.push([e2[A3], e2[A3 + 1]]);
    return Object.fromEntries(t2);
  }
  function h(A2, e2) {
    if ("function" == typeof A2.headers) return Array.isArray(e2) && (e2 = C(e2)), A2.headers(e2 ? c(e2) : {});
    if (void 0 === A2.headers) return true;
    if ("object" != typeof e2 || "object" != typeof A2.headers) return false;
    for (const [t2, r2] of Object.entries(A2.headers)) {
      if (!B(r2, I(e2, t2))) return false;
    }
    return true;
  }
  function l(A2) {
    if ("string" != typeof A2) return A2;
    const e2 = A2.split("?");
    if (2 !== e2.length) return A2;
    const t2 = new URLSearchParams(e2.pop());
    return t2.sort(), [...e2, t2.toString()].join("?");
  }
  function u(A2) {
    return Buffer.isBuffer(A2) || A2 instanceof Uint8Array || A2 instanceof ArrayBuffer ? A2 : "object" == typeof A2 ? JSON.stringify(A2) : A2.toString();
  }
  function d(A2, e2) {
    const t2 = e2.query ? Q(e2.path, e2.query) : e2.path, s2 = "string" == typeof t2 ? l(t2) : t2;
    let o2 = A2.filter(({ consumed: A3 }) => !A3).filter(({ path: A3 }) => B(l(A3), s2));
    if (0 === o2.length) throw new r(`Mock dispatch not matched for path '${s2}'`);
    if (o2 = o2.filter(({ method: A3 }) => B(A3, e2.method)), 0 === o2.length) throw new r(`Mock dispatch not matched for method '${e2.method}' on path '${s2}'`);
    if (o2 = o2.filter(({ body: A3 }) => void 0 === A3 || B(A3, e2.body)), 0 === o2.length) throw new r(`Mock dispatch not matched for body '${e2.body}' on path '${s2}'`);
    if (o2 = o2.filter((A3) => h(A3, e2.headers)), 0 === o2.length) {
      const A3 = "object" == typeof e2.headers ? JSON.stringify(e2.headers) : e2.headers;
      throw new r(`Mock dispatch not matched for headers '${A3}' on path '${s2}'`);
    }
    return o2[0];
  }
  function f(A2, e2) {
    const t2 = A2.findIndex((A3) => !!A3.consumed && (function(A4, { path: e3, method: t3, body: r2, headers: s2 }) {
      const o2 = B(A4.path, e3), n2 = B(A4.method, t3), i2 = void 0 === A4.body || B(A4.body, r2), a2 = h(A4, s2);
      return o2 && n2 && i2 && a2;
    })(A3, e2));
    -1 !== t2 && A2.splice(t2, 1);
  }
  function w(A2) {
    const { path: e2, method: t2, body: r2, headers: s2, query: o2 } = A2;
    return { path: e2, method: t2, body: r2, headers: s2, query: o2 };
  }
  function y(A2) {
    const e2 = Object.keys(A2), t2 = [];
    for (let r2 = 0; r2 < e2.length; ++r2) {
      const s2 = e2[r2], o2 = A2[s2], n2 = Buffer.from(`${s2}`);
      if (Array.isArray(o2)) for (let A3 = 0; A3 < o2.length; ++A3) t2.push(n2, Buffer.from(`${o2[A3]}`));
      else t2.push(n2, Buffer.from(`${o2}`));
    }
    return t2;
  }
  function D(A2) {
    return g[A2] || "unknown";
  }
  function p(A2, e2) {
    const t2 = w(A2), r2 = d(this[s], t2);
    r2.timesInvoked++, r2.data.callback && (r2.data = { ...r2.data, ...r2.data.callback(A2) });
    const { data: { statusCode: o2, data: n2, headers: i2, trailers: a2, error: Q2 }, delay: g2, persist: B2 } = r2, { timesInvoked: c2, times: I2 } = r2;
    if (r2.consumed = !B2 && c2 >= I2, r2.pending = c2 < I2, null !== Q2) return f(this[s], t2), e2.onError(Q2), true;
    function h2(r3, s2 = n2) {
      const Q3 = Array.isArray(A2.headers) ? C(A2.headers) : A2.headers, g3 = "function" == typeof s2 ? s2({ ...A2, headers: Q3 }) : s2;
      if (E(g3)) return void g3.then((A3) => h2(r3, A3));
      const B3 = u(g3), c3 = y(i2), I3 = y(a2);
      e2.onConnect?.((A3) => e2.onError(A3), null), e2.onHeaders?.(o2, c3, l2, D(o2)), e2.onData?.(Buffer.from(B3)), e2.onComplete?.(I3), f(r3, t2);
    }
    function l2() {
    }
    return "number" == typeof g2 && g2 > 0 ? setTimeout(() => {
      h2(this[s]);
    }, g2) : h2(this[s]), true;
  }
  function k(A2, e2) {
    const t2 = new URL(e2);
    return true === A2 || !(!Array.isArray(A2) || !A2.some((A3) => B(A3, t2.host)));
  }
  A.exports = { getResponseData: u, getMockDispatch: d, addMockDispatch: function(A2, e2, t2) {
    const r2 = { timesInvoked: 0, times: 1, persist: false, consumed: false, ...e2, pending: true, data: { error: null, ..."function" == typeof t2 ? { callback: t2 } : { ...t2 } } };
    return A2.push(r2), r2;
  }, deleteMockDispatch: f, buildKey: w, generateKeyValues: y, matchValue: B, getResponse: async function(A2) {
    const e2 = [];
    for await (const t2 of A2) e2.push(t2);
    return Buffer.concat(e2).toString("utf8");
  }, getStatusText: D, mockDispatch: p, buildMockDispatch: function() {
    const A2 = this[o], e2 = this[i], t2 = this[n];
    return function(s2, o2) {
      if (A2.isMockActive) try {
        p.call(this, s2, o2);
      } catch (n2) {
        if (!(n2 instanceof r)) throw n2;
        {
          const i2 = A2[a]();
          if (false === i2) throw new r(`${n2.message}: subsequent request to origin ${e2} was not allowed (net.connect disabled)`);
          if (!k(i2, e2)) throw new r(`${n2.message}: subsequent request to origin ${e2} was not allowed (net.connect is not enabled for this origin)`);
          t2.call(this, s2, o2);
        }
      }
      else t2.call(this, s2, o2);
    };
  }, checkNetConnect: k, buildMockOptions: function(A2) {
    if (A2) {
      const { agent: e2, ...t2 } = A2;
      return t2;
    }
  }, getHeaderByName: I, buildHeadersFromArray: C };
}