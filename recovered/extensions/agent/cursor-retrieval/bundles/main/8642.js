// @recovered-by cursor-re
// artifact: app/extensions/cursor-retrieval/dist/main.js sha256:50c717cc16d67dfb571db8461d6630caeb8e421ad0090d156086d1a3d53b1b2b
// module: 8642 range:993742..1004821
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
8642: (e2, a2, n2) => {
    "use strict";
    const { kConstruct: t2 } = n2(2381), { urlEquals: s2, fieldValues: o2 } = n2(3006), { kEnumerableProperty: r2, isDisturbed: i2 } = n2(9361), { kHeadersList: l } = n2(8832), { webidl: d } = n2(8005), { Response: m, cloneResponse: c } = n2(1099), { Request: p } = n2(2239), { kState: A, kHeaders: u, kGuard: g, kRealm: T } = n2(5899), { fetching: h } = n2(3406), { urlIsHttpHttpsScheme: k, createDeferredPromise: _, readAllBytes: E } = n2(5728), f = n2(2613), { getGlobalDispatcher: C } = n2(7362);
    class I {
      #i;
      constructor() {
        arguments[0] !== t2 && d.illegalConstructor(), this.#i = arguments[1];
      }
      async match(e3, a3 = {}) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e3 = d.converters.RequestInfo(e3), a3 = d.converters.CacheQueryOptions(a3);
        const n3 = await this.matchAll(e3, a3);
        if (0 !== n3.length) return n3[0];
      }
      async matchAll(e3 = void 0, a3 = {}) {
        d.brandCheck(this, I), void 0 !== e3 && (e3 = d.converters.RequestInfo(e3)), a3 = d.converters.CacheQueryOptions(a3);
        let n3 = null;
        if (void 0 !== e3) if (e3 instanceof p) {
          if (n3 = e3[A], "GET" !== n3.method && !a3.ignoreMethod) return [];
        } else "string" == typeof e3 && (n3 = new p(e3)[A]);
        const t3 = [];
        if (void 0 === e3) for (const e4 of this.#i) t3.push(e4[1]);
        else {
          const e4 = this.#l(n3, a3);
          for (const a4 of e4) t3.push(a4[1]);
        }
        const s3 = [];
        for (const e4 of t3) {
          const a4 = new m(e4.body?.source ?? null), n4 = a4[A].body;
          a4[A] = e4, a4[A].body = n4, a4[u][l] = e4.headersList, a4[u][g] = "immutable", s3.push(a4);
        }
        return Object.freeze(s3);
      }
      async add(e3) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const a3 = [e3 = d.converters.RequestInfo(e3)], n3 = this.addAll(a3);
        return await n3;
      }
      async addAll(e3) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e3 = d.converters["sequence<RequestInfo>"](e3);
        const a3 = [], n3 = [];
        for (const a4 of e3) {
          if ("string" == typeof a4) continue;
          const e4 = a4[A];
          if (!k(e4.url) || "GET" !== e4.method) throw d.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const t3 = [];
        for (const s4 of e3) {
          const e4 = new p(s4)[A];
          if (!k(e4.url)) throw d.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e4.initiator = "fetch", e4.destination = "subresource", n3.push(e4);
          const r4 = _();
          t3.push(h({ request: e4, dispatcher: C(), processResponse(e5) {
            if ("error" === e5.type || 206 === e5.status || e5.status < 200 || e5.status > 299) r4.reject(d.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e5.headersList.contains("vary")) {
              const a4 = o2(e5.headersList.get("vary"));
              for (const e6 of a4) if ("*" === e6) {
                r4.reject(d.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e7 of t3) e7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e5) {
            e5.aborted ? r4.reject(new DOMException("aborted", "AbortError")) : r4.resolve(e5);
          } })), a3.push(r4.promise);
        }
        const s3 = Promise.all(a3), r3 = await s3, i3 = [];
        let l2 = 0;
        for (const e4 of r3) {
          const a4 = { type: "put", request: n3[l2], response: e4 };
          i3.push(a4), l2++;
        }
        const m2 = _();
        let c2 = null;
        try {
          this.#d(i3);
        } catch (e4) {
          c2 = e4;
        }
        return queueMicrotask(() => {
          null === c2 ? m2.resolve(void 0) : m2.reject(c2);
        }), m2.promise;
      }
      async put(e3, a3) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e3 = d.converters.RequestInfo(e3), a3 = d.converters.Response(a3);
        let n3 = null;
        if (n3 = e3 instanceof p ? e3[A] : new p(e3)[A], !k(n3.url) || "GET" !== n3.method) throw d.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const t3 = a3[A];
        if (206 === t3.status) throw d.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (t3.headersList.contains("vary")) {
          const e4 = o2(t3.headersList.get("vary"));
          for (const a4 of e4) if ("*" === a4) throw d.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (t3.body && (i2(t3.body.stream) || t3.body.stream.locked)) throw d.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const s3 = c(t3), r3 = _();
        if (null != t3.body) {
          const e4 = t3.body.stream.getReader();
          E(e4).then(r3.resolve, r3.reject);
        } else r3.resolve(void 0);
        const l2 = [], m2 = { type: "put", request: n3, response: s3 };
        l2.push(m2);
        const u2 = await r3.promise;
        null != s3.body && (s3.body.source = u2);
        const g2 = _();
        let T2 = null;
        try {
          this.#d(l2);
        } catch (e4) {
          T2 = e4;
        }
        return queueMicrotask(() => {
          null === T2 ? g2.resolve() : g2.reject(T2);
        }), g2.promise;
      }
      async delete(e3, a3 = {}) {
        d.brandCheck(this, I), d.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e3 = d.converters.RequestInfo(e3), a3 = d.converters.CacheQueryOptions(a3);
        let n3 = null;
        if (e3 instanceof p) {
          if (n3 = e3[A], "GET" !== n3.method && !a3.ignoreMethod) return false;
        } else f("string" == typeof e3), n3 = new p(e3)[A];
        const t3 = [], s3 = { type: "delete", request: n3, options: a3 };
        t3.push(s3);
        const o3 = _();
        let r3, i3 = null;
        try {
          r3 = this.#d(t3);
        } catch (e4) {
          i3 = e4;
        }
        return queueMicrotask(() => {
          null === i3 ? o3.resolve(!!r3?.length) : o3.reject(i3);
        }), o3.promise;
      }
      async keys(e3 = void 0, a3 = {}) {
        d.brandCheck(this, I), void 0 !== e3 && (e3 = d.converters.RequestInfo(e3)), a3 = d.converters.CacheQueryOptions(a3);
        let n3 = null;
        if (void 0 !== e3) if (e3 instanceof p) {
          if (n3 = e3[A], "GET" !== n3.method && !a3.ignoreMethod) return [];
        } else "string" == typeof e3 && (n3 = new p(e3)[A]);
        const t3 = _(), s3 = [];
        if (void 0 === e3) for (const e4 of this.#i) s3.push(e4[0]);
        else {
          const e4 = this.#l(n3, a3);
          for (const a4 of e4) s3.push(a4[0]);
        }
        return queueMicrotask(() => {
          const e4 = [];
          for (const a4 of s3) {
            const n4 = new p("https://a");
            n4[A] = a4, n4[u][l] = a4.headersList, n4[u][g] = "immutable", n4[T] = a4.client, e4.push(n4);
          }
          t3.resolve(Object.freeze(e4));
        }), t3.promise;
      }
      #d(e3) {
        const a3 = this.#i, n3 = [...a3], t3 = [], s3 = [];
        try {
          for (const n4 of e3) {
            if ("delete" !== n4.type && "put" !== n4.type) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === n4.type && null != n4.response) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#l(n4.request, n4.options, t3).length) throw new DOMException("???", "InvalidStateError");
            let e4;
            if ("delete" === n4.type) {
              if (e4 = this.#l(n4.request, n4.options), 0 === e4.length) return [];
              for (const n5 of e4) {
                const e5 = a3.indexOf(n5);
                f(-1 !== e5), a3.splice(e5, 1);
              }
            } else if ("put" === n4.type) {
              if (null == n4.response) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const s4 = n4.request;
              if (!k(s4.url)) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== s4.method) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != n4.options) throw d.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e4 = this.#l(n4.request);
              for (const n5 of e4) {
                const e5 = a3.indexOf(n5);
                f(-1 !== e5), a3.splice(e5, 1);
              }
              a3.push([n4.request, n4.response]), t3.push([n4.request, n4.response]);
            }
            s3.push([n4.request, n4.response]);
          }
          return s3;
        } catch (e4) {
          throw this.#i.length = 0, this.#i = n3, e4;
        }
      }
      #l(e3, a3, n3) {
        const t3 = [], s3 = n3 ?? this.#i;
        for (const n4 of s3) {
          const [s4, o3] = n4;
          this.#m(e3, s4, o3, a3) && t3.push(n4);
        }
        return t3;
      }
      #m(e3, a3, n3 = null, t3) {
        const r3 = new URL(e3.url), i3 = new URL(a3.url);
        if (t3?.ignoreSearch && (i3.search = "", r3.search = ""), !s2(r3, i3, true)) return false;
        if (null == n3 || t3?.ignoreVary || !n3.headersList.contains("vary")) return true;
        const l2 = o2(n3.headersList.get("vary"));
        for (const n4 of l2) {
          if ("*" === n4) return false;
          if (a3.headersList.get(n4) !== e3.headersList.get(n4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(I.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: r2, matchAll: r2, add: r2, addAll: r2, put: r2, delete: r2, keys: r2 });
    const v = [{ key: "ignoreSearch", converter: d.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: d.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: d.converters.boolean, defaultValue: false }];
    d.converters.CacheQueryOptions = d.dictionaryConverter(v), d.converters.MultiCacheQueryOptions = d.dictionaryConverter([...v, { key: "cacheName", converter: d.converters.DOMString }]), d.converters.Response = d.interfaceConverter(m), d.converters["sequence<RequestInfo>"] = d.sequenceConverter(d.converters.RequestInfo), e2.exports = { Cache: I };
  }