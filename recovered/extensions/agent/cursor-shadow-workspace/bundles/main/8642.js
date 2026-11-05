// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 8642 range:648269..659338
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8642: (e2, A2, t2) => {
    "use strict";
    const { kConstruct: n2 } = t2(2381), { urlEquals: r2, fieldValues: o2 } = t2(3006), { kEnumerableProperty: s, isDisturbed: a } = t2(9361), { kHeadersList: i } = t2(8832), { webidl: c } = t2(8005), { Response: l, cloneResponse: g } = t2(1099), { Request: E } = t2(2239), { kState: u, kHeaders: d, kGuard: I, kRealm: h } = t2(5899), { fetching: Q } = t2(3406), { urlIsHttpHttpsScheme: m, createDeferredPromise: C, readAllBytes: B } = t2(5728), p = t2(2613), { getGlobalDispatcher: f } = t2(7362);
    class y {
      #a;
      constructor() {
        arguments[0] !== n2 && c.illegalConstructor(), this.#a = arguments[1];
      }
      async match(e3, A3 = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e3 = c.converters.RequestInfo(e3), A3 = c.converters.CacheQueryOptions(A3);
        const t3 = await this.matchAll(e3, A3);
        if (0 !== t3.length) return t3[0];
      }
      async matchAll(e3 = void 0, A3 = {}) {
        c.brandCheck(this, y), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), A3 = c.converters.CacheQueryOptions(A3);
        let t3 = null;
        if (void 0 !== e3) if (e3 instanceof E) {
          if (t3 = e3[u], "GET" !== t3.method && !A3.ignoreMethod) return [];
        } else "string" == typeof e3 && (t3 = new E(e3)[u]);
        const n3 = [];
        if (void 0 === e3) for (const e4 of this.#a) n3.push(e4[1]);
        else {
          const e4 = this.#i(t3, A3);
          for (const A4 of e4) n3.push(A4[1]);
        }
        const r3 = [];
        for (const e4 of n3) {
          const A4 = new l(e4.body?.source ?? null), t4 = A4[u].body;
          A4[u] = e4, A4[u].body = t4, A4[d][i] = e4.headersList, A4[d][I] = "immutable", r3.push(A4);
        }
        return Object.freeze(r3);
      }
      async add(e3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const A3 = [e3 = c.converters.RequestInfo(e3)], t3 = this.addAll(A3);
        return await t3;
      }
      async addAll(e3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e3 = c.converters["sequence<RequestInfo>"](e3);
        const A3 = [], t3 = [];
        for (const A4 of e3) {
          if ("string" == typeof A4) continue;
          const e4 = A4[u];
          if (!m(e4.url) || "GET" !== e4.method) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const n3 = [];
        for (const r4 of e3) {
          const e4 = new E(r4)[u];
          if (!m(e4.url)) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e4.initiator = "fetch", e4.destination = "subresource", t3.push(e4);
          const s3 = C();
          n3.push(Q({ request: e4, dispatcher: f(), processResponse(e5) {
            if ("error" === e5.type || 206 === e5.status || e5.status < 200 || e5.status > 299) s3.reject(c.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e5.headersList.contains("vary")) {
              const A4 = o2(e5.headersList.get("vary"));
              for (const e6 of A4) if ("*" === e6) {
                s3.reject(c.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e7 of n3) e7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e5) {
            e5.aborted ? s3.reject(new DOMException("aborted", "AbortError")) : s3.resolve(e5);
          } })), A3.push(s3.promise);
        }
        const r3 = Promise.all(A3), s2 = await r3, a2 = [];
        let i2 = 0;
        for (const e4 of s2) {
          const A4 = { type: "put", request: t3[i2], response: e4 };
          a2.push(A4), i2++;
        }
        const l2 = C();
        let g2 = null;
        try {
          this.#c(a2);
        } catch (e4) {
          g2 = e4;
        }
        return queueMicrotask(() => {
          null === g2 ? l2.resolve(void 0) : l2.reject(g2);
        }), l2.promise;
      }
      async put(e3, A3) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e3 = c.converters.RequestInfo(e3), A3 = c.converters.Response(A3);
        let t3 = null;
        if (t3 = e3 instanceof E ? e3[u] : new E(e3)[u], !m(t3.url) || "GET" !== t3.method) throw c.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const n3 = A3[u];
        if (206 === n3.status) throw c.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (n3.headersList.contains("vary")) {
          const e4 = o2(n3.headersList.get("vary"));
          for (const A4 of e4) if ("*" === A4) throw c.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (n3.body && (a(n3.body.stream) || n3.body.stream.locked)) throw c.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const r3 = g(n3), s2 = C();
        if (null != n3.body) {
          const e4 = n3.body.stream.getReader();
          B(e4).then(s2.resolve, s2.reject);
        } else s2.resolve(void 0);
        const i2 = [], l2 = { type: "put", request: t3, response: r3 };
        i2.push(l2);
        const d2 = await s2.promise;
        null != r3.body && (r3.body.source = d2);
        const I2 = C();
        let h2 = null;
        try {
          this.#c(i2);
        } catch (e4) {
          h2 = e4;
        }
        return queueMicrotask(() => {
          null === h2 ? I2.resolve() : I2.reject(h2);
        }), I2.promise;
      }
      async delete(e3, A3 = {}) {
        c.brandCheck(this, y), c.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e3 = c.converters.RequestInfo(e3), A3 = c.converters.CacheQueryOptions(A3);
        let t3 = null;
        if (e3 instanceof E) {
          if (t3 = e3[u], "GET" !== t3.method && !A3.ignoreMethod) return false;
        } else p("string" == typeof e3), t3 = new E(e3)[u];
        const n3 = [], r3 = { type: "delete", request: t3, options: A3 };
        n3.push(r3);
        const o3 = C();
        let s2, a2 = null;
        try {
          s2 = this.#c(n3);
        } catch (e4) {
          a2 = e4;
        }
        return queueMicrotask(() => {
          null === a2 ? o3.resolve(!!s2?.length) : o3.reject(a2);
        }), o3.promise;
      }
      async keys(e3 = void 0, A3 = {}) {
        c.brandCheck(this, y), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), A3 = c.converters.CacheQueryOptions(A3);
        let t3 = null;
        if (void 0 !== e3) if (e3 instanceof E) {
          if (t3 = e3[u], "GET" !== t3.method && !A3.ignoreMethod) return [];
        } else "string" == typeof e3 && (t3 = new E(e3)[u]);
        const n3 = C(), r3 = [];
        if (void 0 === e3) for (const e4 of this.#a) r3.push(e4[0]);
        else {
          const e4 = this.#i(t3, A3);
          for (const A4 of e4) r3.push(A4[0]);
        }
        return queueMicrotask(() => {
          const e4 = [];
          for (const A4 of r3) {
            const t4 = new E("https://a");
            t4[u] = A4, t4[d][i] = A4.headersList, t4[d][I] = "immutable", t4[h] = A4.client, e4.push(t4);
          }
          n3.resolve(Object.freeze(e4));
        }), n3.promise;
      }
      #c(e3) {
        const A3 = this.#a, t3 = [...A3], n3 = [], r3 = [];
        try {
          for (const t4 of e3) {
            if ("delete" !== t4.type && "put" !== t4.type) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === t4.type && null != t4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#i(t4.request, t4.options, n3).length) throw new DOMException("???", "InvalidStateError");
            let e4;
            if ("delete" === t4.type) {
              if (e4 = this.#i(t4.request, t4.options), 0 === e4.length) return [];
              for (const t5 of e4) {
                const e5 = A3.indexOf(t5);
                p(-1 !== e5), A3.splice(e5, 1);
              }
            } else if ("put" === t4.type) {
              if (null == t4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const r4 = t4.request;
              if (!m(r4.url)) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== r4.method) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != t4.options) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e4 = this.#i(t4.request);
              for (const t5 of e4) {
                const e5 = A3.indexOf(t5);
                p(-1 !== e5), A3.splice(e5, 1);
              }
              A3.push([t4.request, t4.response]), n3.push([t4.request, t4.response]);
            }
            r3.push([t4.request, t4.response]);
          }
          return r3;
        } catch (e4) {
          throw this.#a.length = 0, this.#a = t3, e4;
        }
      }
      #i(e3, A3, t3) {
        const n3 = [], r3 = t3 ?? this.#a;
        for (const t4 of r3) {
          const [r4, o3] = t4;
          this.#l(e3, r4, o3, A3) && n3.push(t4);
        }
        return n3;
      }
      #l(e3, A3, t3 = null, n3) {
        const s2 = new URL(e3.url), a2 = new URL(A3.url);
        if (n3?.ignoreSearch && (a2.search = "", s2.search = ""), !r2(s2, a2, true)) return false;
        if (null == t3 || n3?.ignoreVary || !t3.headersList.contains("vary")) return true;
        const i2 = o2(t3.headersList.get("vary"));
        for (const t4 of i2) {
          if ("*" === t4) return false;
          if (A3.headersList.get(t4) !== e3.headersList.get(t4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(y.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: s, matchAll: s, add: s, addAll: s, put: s, delete: s, keys: s });
    const T = [{ key: "ignoreSearch", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: c.converters.boolean, defaultValue: false }];
    c.converters.CacheQueryOptions = c.dictionaryConverter(T), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([...T, { key: "cacheName", converter: c.converters.DOMString }]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), e2.exports = { Cache: y };
  }