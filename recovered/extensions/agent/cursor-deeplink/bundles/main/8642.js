// @recovered-by cursor-re
// artifact: app/extensions/cursor-deeplink/dist/main.js sha256:2b0091d260814e411af8319789fee5fe8b4b75d7c27c85b905f80c4d53d995f3
// module: 8642 range:781069..792138
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8642: (e2, t2, A2) => {
    "use strict";
    const { kConstruct: n2 } = A2(2381), { urlEquals: r2, fieldValues: o2 } = A2(3006), { kEnumerableProperty: s, isDisturbed: i } = A2(9361), { kHeadersList: a } = A2(8832), { webidl: c } = A2(8005), { Response: l, cloneResponse: u } = A2(1099), { Request: g } = A2(2239), { kState: E, kHeaders: h, kGuard: d, kRealm: I } = A2(5899), { fetching: B } = A2(3406), { urlIsHttpHttpsScheme: Q, createDeferredPromise: f, readAllBytes: C } = A2(5728), p = A2(2613), { getGlobalDispatcher: m } = A2(7362);
    class y {
      #i;
      constructor() {
        arguments[0] !== n2 && c.illegalConstructor(), this.#i = arguments[1];
      }
      async match(e3, t3 = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e3 = c.converters.RequestInfo(e3), t3 = c.converters.CacheQueryOptions(t3);
        const A3 = await this.matchAll(e3, t3);
        if (0 !== A3.length) return A3[0];
      }
      async matchAll(e3 = void 0, t3 = {}) {
        c.brandCheck(this, y), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), t3 = c.converters.CacheQueryOptions(t3);
        let A3 = null;
        if (void 0 !== e3) if (e3 instanceof g) {
          if (A3 = e3[E], "GET" !== A3.method && !t3.ignoreMethod) return [];
        } else "string" == typeof e3 && (A3 = new g(e3)[E]);
        const n3 = [];
        if (void 0 === e3) for (const e4 of this.#i) n3.push(e4[1]);
        else {
          const e4 = this.#a(A3, t3);
          for (const t4 of e4) n3.push(t4[1]);
        }
        const r3 = [];
        for (const e4 of n3) {
          const t4 = new l(e4.body?.source ?? null), A4 = t4[E].body;
          t4[E] = e4, t4[E].body = A4, t4[h][a] = e4.headersList, t4[h][d] = "immutable", r3.push(t4);
        }
        return Object.freeze(r3);
      }
      async add(e3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const t3 = [e3 = c.converters.RequestInfo(e3)], A3 = this.addAll(t3);
        return await A3;
      }
      async addAll(e3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e3 = c.converters["sequence<RequestInfo>"](e3);
        const t3 = [], A3 = [];
        for (const t4 of e3) {
          if ("string" == typeof t4) continue;
          const e4 = t4[E];
          if (!Q(e4.url) || "GET" !== e4.method) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const n3 = [];
        for (const r4 of e3) {
          const e4 = new g(r4)[E];
          if (!Q(e4.url)) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e4.initiator = "fetch", e4.destination = "subresource", A3.push(e4);
          const s3 = f();
          n3.push(B({ request: e4, dispatcher: m(), processResponse(e5) {
            if ("error" === e5.type || 206 === e5.status || e5.status < 200 || e5.status > 299) s3.reject(c.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e5.headersList.contains("vary")) {
              const t4 = o2(e5.headersList.get("vary"));
              for (const e6 of t4) if ("*" === e6) {
                s3.reject(c.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e7 of n3) e7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e5) {
            e5.aborted ? s3.reject(new DOMException("aborted", "AbortError")) : s3.resolve(e5);
          } })), t3.push(s3.promise);
        }
        const r3 = Promise.all(t3), s2 = await r3, i2 = [];
        let a2 = 0;
        for (const e4 of s2) {
          const t4 = { type: "put", request: A3[a2], response: e4 };
          i2.push(t4), a2++;
        }
        const l2 = f();
        let u2 = null;
        try {
          this.#c(i2);
        } catch (e4) {
          u2 = e4;
        }
        return queueMicrotask(() => {
          null === u2 ? l2.resolve(void 0) : l2.reject(u2);
        }), l2.promise;
      }
      async put(e3, t3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e3 = c.converters.RequestInfo(e3), t3 = c.converters.Response(t3);
        let A3 = null;
        if (A3 = e3 instanceof g ? e3[E] : new g(e3)[E], !Q(A3.url) || "GET" !== A3.method) throw c.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const n3 = t3[E];
        if (206 === n3.status) throw c.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (n3.headersList.contains("vary")) {
          const e4 = o2(n3.headersList.get("vary"));
          for (const t4 of e4) if ("*" === t4) throw c.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (n3.body && (i(n3.body.stream) || n3.body.stream.locked)) throw c.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const r3 = u(n3), s2 = f();
        if (null != n3.body) {
          const e4 = n3.body.stream.getReader();
          C(e4).then(s2.resolve, s2.reject);
        } else s2.resolve(void 0);
        const a2 = [], l2 = { type: "put", request: A3, response: r3 };
        a2.push(l2);
        const h2 = await s2.promise;
        null != r3.body && (r3.body.source = h2);
        const d2 = f();
        let I2 = null;
        try {
          this.#c(a2);
        } catch (e4) {
          I2 = e4;
        }
        return queueMicrotask(() => {
          null === I2 ? d2.resolve() : d2.reject(I2);
        }), d2.promise;
      }
      async delete(e3, t3 = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e3 = c.converters.RequestInfo(e3), t3 = c.converters.CacheQueryOptions(t3);
        let A3 = null;
        if (e3 instanceof g) {
          if (A3 = e3[E], "GET" !== A3.method && !t3.ignoreMethod) return false;
        } else p("string" == typeof e3), A3 = new g(e3)[E];
        const n3 = [], r3 = { type: "delete", request: A3, options: t3 };
        n3.push(r3);
        const o3 = f();
        let s2, i2 = null;
        try {
          s2 = this.#c(n3);
        } catch (e4) {
          i2 = e4;
        }
        return queueMicrotask(() => {
          null === i2 ? o3.resolve(!!s2?.length) : o3.reject(i2);
        }), o3.promise;
      }
      async keys(e3 = void 0, t3 = {}) {
        c.brandCheck(this, y), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), t3 = c.converters.CacheQueryOptions(t3);
        let A3 = null;
        if (void 0 !== e3) if (e3 instanceof g) {
          if (A3 = e3[E], "GET" !== A3.method && !t3.ignoreMethod) return [];
        } else "string" == typeof e3 && (A3 = new g(e3)[E]);
        const n3 = f(), r3 = [];
        if (void 0 === e3) for (const e4 of this.#i) r3.push(e4[0]);
        else {
          const e4 = this.#a(A3, t3);
          for (const t4 of e4) r3.push(t4[0]);
        }
        return queueMicrotask(() => {
          const e4 = [];
          for (const t4 of r3) {
            const A4 = new g("https://a");
            A4[E] = t4, A4[h][a] = t4.headersList, A4[h][d] = "immutable", A4[I] = t4.client, e4.push(A4);
          }
          n3.resolve(Object.freeze(e4));
        }), n3.promise;
      }
      #c(e3) {
        const t3 = this.#i, A3 = [...t3], n3 = [], r3 = [];
        try {
          for (const A4 of e3) {
            if ("delete" !== A4.type && "put" !== A4.type) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === A4.type && null != A4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#a(A4.request, A4.options, n3).length) throw new DOMException("???", "InvalidStateError");
            let e4;
            if ("delete" === A4.type) {
              if (e4 = this.#a(A4.request, A4.options), 0 === e4.length) return [];
              for (const A5 of e4) {
                const e5 = t3.indexOf(A5);
                p(-1 !== e5), t3.splice(e5, 1);
              }
            } else if ("put" === A4.type) {
              if (null == A4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const r4 = A4.request;
              if (!Q(r4.url)) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== r4.method) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != A4.options) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e4 = this.#a(A4.request);
              for (const A5 of e4) {
                const e5 = t3.indexOf(A5);
                p(-1 !== e5), t3.splice(e5, 1);
              }
              t3.push([A4.request, A4.response]), n3.push([A4.request, A4.response]);
            }
            r3.push([A4.request, A4.response]);
          }
          return r3;
        } catch (e4) {
          throw this.#i.length = 0, this.#i = A3, e4;
        }
      }
      #a(e3, t3, A3) {
        const n3 = [], r3 = A3 ?? this.#i;
        for (const A4 of r3) {
          const [r4, o3] = A4;
          this.#l(e3, r4, o3, t3) && n3.push(A4);
        }
        return n3;
      }
      #l(e3, t3, A3 = null, n3) {
        const s2 = new URL(e3.url), i2 = new URL(t3.url);
        if (n3?.ignoreSearch && (i2.search = "", s2.search = ""), !r2(s2, i2, true)) return false;
        if (null == A3 || n3?.ignoreVary || !A3.headersList.contains("vary")) return true;
        const a2 = o2(A3.headersList.get("vary"));
        for (const A4 of a2) {
          if ("*" === A4) return false;
          if (t3.headersList.get(A4) !== e3.headersList.get(A4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(y.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: s, matchAll: s, add: s, addAll: s, put: s, delete: s, keys: s });
    const w = [{ key: "ignoreSearch", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: c.converters.boolean, defaultValue: false }];
    c.converters.CacheQueryOptions = c.dictionaryConverter(w), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([...w, { key: "cacheName", converter: c.converters.DOMString }]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), e2.exports = { Cache: y };
  }