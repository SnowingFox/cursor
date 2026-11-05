// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/613.js sha256:3017f51377845a64c3fc427ffb8a975c2b8989063b347c1bb0f27a1e27e28141
// module: 91947 range:490070..501010
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
91947: (A, e, t) => {
  "use strict";
  const { kConstruct: r } = t(71716), { urlEquals: s, getFieldValues: o } = t(13709), { kEnumerableProperty: n, isDisturbed: i } = t(55201), { webidl: a } = t(43290), { Response: Q, cloneResponse: g, fromInnerResponse: E } = t(54768), { Request: B, fromInnerRequest: c } = t(78078), { kState: I } = t(15978), { fetching: C } = t(75319), { urlIsHttpHttpsScheme: h, createDeferredPromise: l, readAllBytes: u } = t(48215), d = t(56970);
  class f {
    #gA;
    constructor() {
      arguments[0] !== r && a.illegalConstructor(), a.util.markAsUncloneable(this), this.#gA = arguments[1];
    }
    async match(A2, e2 = {}) {
      a.brandCheck(this, f);
      const t2 = "Cache.match";
      a.argumentLengthCheck(arguments, 1, t2), A2 = a.converters.RequestInfo(A2, t2, "request"), e2 = a.converters.CacheQueryOptions(e2, t2, "options");
      const r2 = this.#EA(A2, e2, 1);
      if (0 !== r2.length) return r2[0];
    }
    async matchAll(A2 = void 0, e2 = {}) {
      a.brandCheck(this, f);
      const t2 = "Cache.matchAll";
      return void 0 !== A2 && (A2 = a.converters.RequestInfo(A2, t2, "request")), e2 = a.converters.CacheQueryOptions(e2, t2, "options"), this.#EA(A2, e2);
    }
    async add(A2) {
      a.brandCheck(this, f);
      const e2 = "Cache.add";
      a.argumentLengthCheck(arguments, 1, e2);
      const t2 = [A2 = a.converters.RequestInfo(A2, e2, "request")], r2 = this.addAll(t2);
      return await r2;
    }
    async addAll(A2) {
      a.brandCheck(this, f);
      const e2 = "Cache.addAll";
      a.argumentLengthCheck(arguments, 1, e2);
      const t2 = [], r2 = [];
      for (let t3 of A2) {
        if (void 0 === t3) throw a.errors.conversionFailed({ prefix: e2, argument: "Argument 1", types: ["undefined is not allowed"] });
        if (t3 = a.converters.RequestInfo(t3), "string" == typeof t3) continue;
        const A3 = t3[I];
        if (!h(A3.url) || "GET" !== A3.method) throw a.errors.exception({ header: e2, message: "Expected http/s scheme when method is not GET." });
      }
      const s2 = [];
      for (const n3 of A2) {
        const A3 = new B(n3)[I];
        if (!h(A3.url)) throw a.errors.exception({ header: e2, message: "Expected http/s scheme." });
        A3.initiator = "fetch", A3.destination = "subresource", r2.push(A3);
        const i3 = l();
        s2.push(C({ request: A3, processResponse(A4) {
          if ("error" === A4.type || 206 === A4.status || A4.status < 200 || A4.status > 299) i3.reject(a.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
          else if (A4.headersList.contains("vary")) {
            const e3 = o(A4.headersList.get("vary"));
            for (const A5 of e3) if ("*" === A5) {
              i3.reject(a.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
              for (const A6 of s2) A6.abort();
              return;
            }
          }
        }, processResponseEndOfBody(A4) {
          A4.aborted ? i3.reject(new DOMException("aborted", "AbortError")) : i3.resolve(A4);
        } })), t2.push(i3.promise);
      }
      const n2 = Promise.all(t2), i2 = await n2, Q2 = [];
      let g2 = 0;
      for (const A3 of i2) {
        const e3 = { type: "put", request: r2[g2], response: A3 };
        Q2.push(e3), g2++;
      }
      const E2 = l();
      let c2 = null;
      try {
        this.#BA(Q2);
      } catch (A3) {
        c2 = A3;
      }
      return queueMicrotask(() => {
        null === c2 ? E2.resolve(void 0) : E2.reject(c2);
      }), E2.promise;
    }
    async put(A2, e2) {
      a.brandCheck(this, f);
      const t2 = "Cache.put";
      a.argumentLengthCheck(arguments, 2, t2), A2 = a.converters.RequestInfo(A2, t2, "request"), e2 = a.converters.Response(e2, t2, "response");
      let r2 = null;
      if (r2 = A2 instanceof B ? A2[I] : new B(A2)[I], !h(r2.url) || "GET" !== r2.method) throw a.errors.exception({ header: t2, message: "Expected an http/s scheme when method is not GET" });
      const s2 = e2[I];
      if (206 === s2.status) throw a.errors.exception({ header: t2, message: "Got 206 status" });
      if (s2.headersList.contains("vary")) {
        const A3 = o(s2.headersList.get("vary"));
        for (const e3 of A3) if ("*" === e3) throw a.errors.exception({ header: t2, message: "Got * vary field value" });
      }
      if (s2.body && (i(s2.body.stream) || s2.body.stream.locked)) throw a.errors.exception({ header: t2, message: "Response body is locked or disturbed" });
      const n2 = g(s2), Q2 = l();
      if (null != s2.body) {
        const A3 = s2.body.stream.getReader();
        u(A3).then(Q2.resolve, Q2.reject);
      } else Q2.resolve(void 0);
      const E2 = [], c2 = { type: "put", request: r2, response: n2 };
      E2.push(c2);
      const C2 = await Q2.promise;
      null != n2.body && (n2.body.source = C2);
      const d2 = l();
      let w2 = null;
      try {
        this.#BA(E2);
      } catch (A3) {
        w2 = A3;
      }
      return queueMicrotask(() => {
        null === w2 ? d2.resolve() : d2.reject(w2);
      }), d2.promise;
    }
    async delete(A2, e2 = {}) {
      a.brandCheck(this, f);
      const t2 = "Cache.delete";
      a.argumentLengthCheck(arguments, 1, t2), A2 = a.converters.RequestInfo(A2, t2, "request"), e2 = a.converters.CacheQueryOptions(e2, t2, "options");
      let r2 = null;
      if (A2 instanceof B) {
        if (r2 = A2[I], "GET" !== r2.method && !e2.ignoreMethod) return false;
      } else d("string" == typeof A2), r2 = new B(A2)[I];
      const s2 = [], o2 = { type: "delete", request: r2, options: e2 };
      s2.push(o2);
      const n2 = l();
      let i2, Q2 = null;
      try {
        i2 = this.#BA(s2);
      } catch (A3) {
        Q2 = A3;
      }
      return queueMicrotask(() => {
        null === Q2 ? n2.resolve(!!i2?.length) : n2.reject(Q2);
      }), n2.promise;
    }
    async keys(A2 = void 0, e2 = {}) {
      a.brandCheck(this, f);
      const t2 = "Cache.keys";
      void 0 !== A2 && (A2 = a.converters.RequestInfo(A2, t2, "request")), e2 = a.converters.CacheQueryOptions(e2, t2, "options");
      let r2 = null;
      if (void 0 !== A2) if (A2 instanceof B) {
        if (r2 = A2[I], "GET" !== r2.method && !e2.ignoreMethod) return [];
      } else "string" == typeof A2 && (r2 = new B(A2)[I]);
      const s2 = l(), o2 = [];
      if (void 0 === A2) for (const A3 of this.#gA) o2.push(A3[0]);
      else {
        const A3 = this.#cA(r2, e2);
        for (const e3 of A3) o2.push(e3[0]);
      }
      return queueMicrotask(() => {
        const A3 = [];
        for (const e3 of o2) {
          const t3 = c(e3, new AbortController().signal, "immutable");
          A3.push(t3);
        }
        s2.resolve(Object.freeze(A3));
      }), s2.promise;
    }
    #BA(A2) {
      const e2 = this.#gA, t2 = [...e2], r2 = [], s2 = [];
      try {
        for (const t3 of A2) {
          if ("delete" !== t3.type && "put" !== t3.type) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
          if ("delete" === t3.type && null != t3.response) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
          if (this.#cA(t3.request, t3.options, r2).length) throw new DOMException("???", "InvalidStateError");
          let A3;
          if ("delete" === t3.type) {
            if (A3 = this.#cA(t3.request, t3.options), 0 === A3.length) return [];
            for (const t4 of A3) {
              const A4 = e2.indexOf(t4);
              d(-1 !== A4), e2.splice(A4, 1);
            }
          } else if ("put" === t3.type) {
            if (null == t3.response) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
            const s3 = t3.request;
            if (!h(s3.url)) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
            if ("GET" !== s3.method) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
            if (null != t3.options) throw a.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
            A3 = this.#cA(t3.request);
            for (const t4 of A3) {
              const A4 = e2.indexOf(t4);
              d(-1 !== A4), e2.splice(A4, 1);
            }
            e2.push([t3.request, t3.response]), r2.push([t3.request, t3.response]);
          }
          s2.push([t3.request, t3.response]);
        }
        return s2;
      } catch (A3) {
        throw this.#gA.length = 0, this.#gA = t2, A3;
      }
    }
    #cA(A2, e2, t2) {
      const r2 = [], s2 = t2 ?? this.#gA;
      for (const t3 of s2) {
        const [s3, o2] = t3;
        this.#IA(A2, s3, o2, e2) && r2.push(t3);
      }
      return r2;
    }
    #IA(A2, e2, t2 = null, r2) {
      const n2 = new URL(A2.url), i2 = new URL(e2.url);
      if (r2?.ignoreSearch && (i2.search = "", n2.search = ""), !s(n2, i2, true)) return false;
      if (null == t2 || r2?.ignoreVary || !t2.headersList.contains("vary")) return true;
      const a2 = o(t2.headersList.get("vary"));
      for (const t3 of a2) {
        if ("*" === t3) return false;
        if (e2.headersList.get(t3) !== A2.headersList.get(t3)) return false;
      }
      return true;
    }
    #EA(A2, e2, t2 = 1 / 0) {
      let r2 = null;
      if (void 0 !== A2) if (A2 instanceof B) {
        if (r2 = A2[I], "GET" !== r2.method && !e2.ignoreMethod) return [];
      } else "string" == typeof A2 && (r2 = new B(A2)[I]);
      const s2 = [];
      if (void 0 === A2) for (const A3 of this.#gA) s2.push(A3[1]);
      else {
        const A3 = this.#cA(r2, e2);
        for (const e3 of A3) s2.push(e3[1]);
      }
      const o2 = [];
      for (const A3 of s2) {
        const e3 = E(A3, "immutable");
        if (o2.push(e3.clone()), o2.length >= t2) break;
      }
      return Object.freeze(o2);
    }
  }
  Object.defineProperties(f.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: n, matchAll: n, add: n, addAll: n, put: n, delete: n, keys: n });
  const w = [{ key: "ignoreSearch", converter: a.converters.boolean, defaultValue: () => false }, { key: "ignoreMethod", converter: a.converters.boolean, defaultValue: () => false }, { key: "ignoreVary", converter: a.converters.boolean, defaultValue: () => false }];
  a.converters.CacheQueryOptions = a.dictionaryConverter(w), a.converters.MultiCacheQueryOptions = a.dictionaryConverter([...w, { key: "cacheName", converter: a.converters.DOMString }]), a.converters.Response = a.interfaceConverter(Q), a.converters["sequence<RequestInfo>"] = a.sequenceConverter(a.converters.RequestInfo), A.exports = { Cache: f };
}