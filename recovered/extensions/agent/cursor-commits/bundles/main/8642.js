// @recovered-by cursor-re
// artifact: app/extensions/cursor-commits/dist/main.js sha256:093f8518d2bba92ce25a152b40a9e7490ef35d5b45f1477f49078295148101b9
// module: 8642 range:649178..660257
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8642: (e2, n2, a2) => {
    "use strict";
    const { kConstruct: t2 } = a2(2381), { urlEquals: s2, fieldValues: o2 } = a2(3006), { kEnumerableProperty: r2, isDisturbed: i2 } = a2(9361), { kHeadersList: A } = a2(8832), { webidl: l } = a2(8005), { Response: c, cloneResponse: m } = a2(1099), { Request: d } = a2(2239), { kState: g, kHeaders: u, kGuard: E, kRealm: p } = a2(5899), { fetching: T } = a2(3406), { urlIsHttpHttpsScheme: k, createDeferredPromise: I, readAllBytes: h } = a2(5728), _ = a2(2613), { getGlobalDispatcher: C } = a2(7362);
    class f {
      #i;
      constructor() {
        arguments[0] !== t2 && l.illegalConstructor(), this.#i = arguments[1];
      }
      async match(e3, n3 = {}) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e3 = l.converters.RequestInfo(e3), n3 = l.converters.CacheQueryOptions(n3);
        const a3 = await this.matchAll(e3, n3);
        if (0 !== a3.length) return a3[0];
      }
      async matchAll(e3 = void 0, n3 = {}) {
        l.brandCheck(this, f), void 0 !== e3 && (e3 = l.converters.RequestInfo(e3)), n3 = l.converters.CacheQueryOptions(n3);
        let a3 = null;
        if (void 0 !== e3) if (e3 instanceof d) {
          if (a3 = e3[g], "GET" !== a3.method && !n3.ignoreMethod) return [];
        } else "string" == typeof e3 && (a3 = new d(e3)[g]);
        const t3 = [];
        if (void 0 === e3) for (const e4 of this.#i) t3.push(e4[1]);
        else {
          const e4 = this.#A(a3, n3);
          for (const n4 of e4) t3.push(n4[1]);
        }
        const s3 = [];
        for (const e4 of t3) {
          const n4 = new c(e4.body?.source ?? null), a4 = n4[g].body;
          n4[g] = e4, n4[g].body = a4, n4[u][A] = e4.headersList, n4[u][E] = "immutable", s3.push(n4);
        }
        return Object.freeze(s3);
      }
      async add(e3) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const n3 = [e3 = l.converters.RequestInfo(e3)], a3 = this.addAll(n3);
        return await a3;
      }
      async addAll(e3) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e3 = l.converters["sequence<RequestInfo>"](e3);
        const n3 = [], a3 = [];
        for (const n4 of e3) {
          if ("string" == typeof n4) continue;
          const e4 = n4[g];
          if (!k(e4.url) || "GET" !== e4.method) throw l.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const t3 = [];
        for (const s4 of e3) {
          const e4 = new d(s4)[g];
          if (!k(e4.url)) throw l.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e4.initiator = "fetch", e4.destination = "subresource", a3.push(e4);
          const r4 = I();
          t3.push(T({ request: e4, dispatcher: C(), processResponse(e5) {
            if ("error" === e5.type || 206 === e5.status || e5.status < 200 || e5.status > 299) r4.reject(l.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e5.headersList.contains("vary")) {
              const n4 = o2(e5.headersList.get("vary"));
              for (const e6 of n4) if ("*" === e6) {
                r4.reject(l.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e7 of t3) e7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e5) {
            e5.aborted ? r4.reject(new DOMException("aborted", "AbortError")) : r4.resolve(e5);
          } })), n3.push(r4.promise);
        }
        const s3 = Promise.all(n3), r3 = await s3, i3 = [];
        let A2 = 0;
        for (const e4 of r3) {
          const n4 = { type: "put", request: a3[A2], response: e4 };
          i3.push(n4), A2++;
        }
        const c2 = I();
        let m2 = null;
        try {
          this.#l(i3);
        } catch (e4) {
          m2 = e4;
        }
        return queueMicrotask(() => {
          null === m2 ? c2.resolve(void 0) : c2.reject(m2);
        }), c2.promise;
      }
      async put(e3, n3) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e3 = l.converters.RequestInfo(e3), n3 = l.converters.Response(n3);
        let a3 = null;
        if (a3 = e3 instanceof d ? e3[g] : new d(e3)[g], !k(a3.url) || "GET" !== a3.method) throw l.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const t3 = n3[g];
        if (206 === t3.status) throw l.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (t3.headersList.contains("vary")) {
          const e4 = o2(t3.headersList.get("vary"));
          for (const n4 of e4) if ("*" === n4) throw l.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (t3.body && (i2(t3.body.stream) || t3.body.stream.locked)) throw l.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const s3 = m(t3), r3 = I();
        if (null != t3.body) {
          const e4 = t3.body.stream.getReader();
          h(e4).then(r3.resolve, r3.reject);
        } else r3.resolve(void 0);
        const A2 = [], c2 = { type: "put", request: a3, response: s3 };
        A2.push(c2);
        const u2 = await r3.promise;
        null != s3.body && (s3.body.source = u2);
        const E2 = I();
        let p2 = null;
        try {
          this.#l(A2);
        } catch (e4) {
          p2 = e4;
        }
        return queueMicrotask(() => {
          null === p2 ? E2.resolve() : E2.reject(p2);
        }), E2.promise;
      }
      async delete(e3, n3 = {}) {
        l.brandCheck(this, f), l.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e3 = l.converters.RequestInfo(e3), n3 = l.converters.CacheQueryOptions(n3);
        let a3 = null;
        if (e3 instanceof d) {
          if (a3 = e3[g], "GET" !== a3.method && !n3.ignoreMethod) return false;
        } else _("string" == typeof e3), a3 = new d(e3)[g];
        const t3 = [], s3 = { type: "delete", request: a3, options: n3 };
        t3.push(s3);
        const o3 = I();
        let r3, i3 = null;
        try {
          r3 = this.#l(t3);
        } catch (e4) {
          i3 = e4;
        }
        return queueMicrotask(() => {
          null === i3 ? o3.resolve(!!r3?.length) : o3.reject(i3);
        }), o3.promise;
      }
      async keys(e3 = void 0, n3 = {}) {
        l.brandCheck(this, f), void 0 !== e3 && (e3 = l.converters.RequestInfo(e3)), n3 = l.converters.CacheQueryOptions(n3);
        let a3 = null;
        if (void 0 !== e3) if (e3 instanceof d) {
          if (a3 = e3[g], "GET" !== a3.method && !n3.ignoreMethod) return [];
        } else "string" == typeof e3 && (a3 = new d(e3)[g]);
        const t3 = I(), s3 = [];
        if (void 0 === e3) for (const e4 of this.#i) s3.push(e4[0]);
        else {
          const e4 = this.#A(a3, n3);
          for (const n4 of e4) s3.push(n4[0]);
        }
        return queueMicrotask(() => {
          const e4 = [];
          for (const n4 of s3) {
            const a4 = new d("https://a");
            a4[g] = n4, a4[u][A] = n4.headersList, a4[u][E] = "immutable", a4[p] = n4.client, e4.push(a4);
          }
          t3.resolve(Object.freeze(e4));
        }), t3.promise;
      }
      #l(e3) {
        const n3 = this.#i, a3 = [...n3], t3 = [], s3 = [];
        try {
          for (const a4 of e3) {
            if ("delete" !== a4.type && "put" !== a4.type) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === a4.type && null != a4.response) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#A(a4.request, a4.options, t3).length) throw new DOMException("???", "InvalidStateError");
            let e4;
            if ("delete" === a4.type) {
              if (e4 = this.#A(a4.request, a4.options), 0 === e4.length) return [];
              for (const a5 of e4) {
                const e5 = n3.indexOf(a5);
                _(-1 !== e5), n3.splice(e5, 1);
              }
            } else if ("put" === a4.type) {
              if (null == a4.response) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const s4 = a4.request;
              if (!k(s4.url)) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== s4.method) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != a4.options) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e4 = this.#A(a4.request);
              for (const a5 of e4) {
                const e5 = n3.indexOf(a5);
                _(-1 !== e5), n3.splice(e5, 1);
              }
              n3.push([a4.request, a4.response]), t3.push([a4.request, a4.response]);
            }
            s3.push([a4.request, a4.response]);
          }
          return s3;
        } catch (e4) {
          throw this.#i.length = 0, this.#i = a3, e4;
        }
      }
      #A(e3, n3, a3) {
        const t3 = [], s3 = a3 ?? this.#i;
        for (const a4 of s3) {
          const [s4, o3] = a4;
          this.#c(e3, s4, o3, n3) && t3.push(a4);
        }
        return t3;
      }
      #c(e3, n3, a3 = null, t3) {
        const r3 = new URL(e3.url), i3 = new URL(n3.url);
        if (t3?.ignoreSearch && (i3.search = "", r3.search = ""), !s2(r3, i3, true)) return false;
        if (null == a3 || t3?.ignoreVary || !a3.headersList.contains("vary")) return true;
        const A2 = o2(a3.headersList.get("vary"));
        for (const a4 of A2) {
          if ("*" === a4) return false;
          if (n3.headersList.get(a4) !== e3.headersList.get(a4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(f.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: r2, matchAll: r2, add: r2, addAll: r2, put: r2, delete: r2, keys: r2 });
    const B = [{ key: "ignoreSearch", converter: l.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: l.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: l.converters.boolean, defaultValue: false }];
    l.converters.CacheQueryOptions = l.dictionaryConverter(B), l.converters.MultiCacheQueryOptions = l.dictionaryConverter([...B, { key: "cacheName", converter: l.converters.DOMString }]), l.converters.Response = l.interfaceConverter(c), l.converters["sequence<RequestInfo>"] = l.sequenceConverter(l.converters.RequestInfo), e2.exports = { Cache: f };
  }