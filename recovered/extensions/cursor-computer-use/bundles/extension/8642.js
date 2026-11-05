// @recovered-by cursor-re
// artifact: app/extensions/cursor-computer-use/dist/extension.js sha256:2e37990c917916e7e5b3d1524e03cf61b1cf38ddc56b1e51014a1275aa4568a6
// module: 8642 range:679689..690758
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
8642: (e2, n2, t2) => {
    "use strict";
    const { kConstruct: a2 } = t2(2381), { urlEquals: s2, fieldValues: o2 } = t2(3006), { kEnumerableProperty: r, isDisturbed: i } = t2(9361), { kHeadersList: A } = t2(8832), { webidl: c } = t2(8005), { Response: l, cloneResponse: d } = t2(1099), { Request: m } = t2(2239), { kState: u, kHeaders: g, kGuard: p, kRealm: E } = t2(5899), { fetching: h } = t2(3406), { urlIsHttpHttpsScheme: T, createDeferredPromise: k, readAllBytes: f } = t2(5728), _ = t2(2613), { getGlobalDispatcher: I } = t2(7362);
    class C {
      #i;
      constructor() {
        arguments[0] !== a2 && c.illegalConstructor(), this.#i = arguments[1];
      }
      async match(e3, n3 = {}) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e3 = c.converters.RequestInfo(e3), n3 = c.converters.CacheQueryOptions(n3);
        const t3 = await this.matchAll(e3, n3);
        if (0 !== t3.length) return t3[0];
      }
      async matchAll(e3 = void 0, n3 = {}) {
        c.brandCheck(this, C), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), n3 = c.converters.CacheQueryOptions(n3);
        let t3 = null;
        if (void 0 !== e3) if (e3 instanceof m) {
          if (t3 = e3[u], "GET" !== t3.method && !n3.ignoreMethod) return [];
        } else "string" == typeof e3 && (t3 = new m(e3)[u]);
        const a3 = [];
        if (void 0 === e3) for (const e4 of this.#i) a3.push(e4[1]);
        else {
          const e4 = this.#A(t3, n3);
          for (const n4 of e4) a3.push(n4[1]);
        }
        const s3 = [];
        for (const e4 of a3) {
          const n4 = new l(e4.body?.source ?? null), t4 = n4[u].body;
          n4[u] = e4, n4[u].body = t4, n4[g][A] = e4.headersList, n4[g][p] = "immutable", s3.push(n4);
        }
        return Object.freeze(s3);
      }
      async add(e3) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const n3 = [e3 = c.converters.RequestInfo(e3)], t3 = this.addAll(n3);
        return await t3;
      }
      async addAll(e3) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e3 = c.converters["sequence<RequestInfo>"](e3);
        const n3 = [], t3 = [];
        for (const n4 of e3) {
          if ("string" == typeof n4) continue;
          const e4 = n4[u];
          if (!T(e4.url) || "GET" !== e4.method) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const a3 = [];
        for (const s4 of e3) {
          const e4 = new m(s4)[u];
          if (!T(e4.url)) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e4.initiator = "fetch", e4.destination = "subresource", t3.push(e4);
          const r3 = k();
          a3.push(h({ request: e4, dispatcher: I(), processResponse(e5) {
            if ("error" === e5.type || 206 === e5.status || e5.status < 200 || e5.status > 299) r3.reject(c.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e5.headersList.contains("vary")) {
              const n4 = o2(e5.headersList.get("vary"));
              for (const e6 of n4) if ("*" === e6) {
                r3.reject(c.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e7 of a3) e7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e5) {
            e5.aborted ? r3.reject(new DOMException("aborted", "AbortError")) : r3.resolve(e5);
          } })), n3.push(r3.promise);
        }
        const s3 = Promise.all(n3), r2 = await s3, i2 = [];
        let A2 = 0;
        for (const e4 of r2) {
          const n4 = { type: "put", request: t3[A2], response: e4 };
          i2.push(n4), A2++;
        }
        const l2 = k();
        let d2 = null;
        try {
          this.#c(i2);
        } catch (e4) {
          d2 = e4;
        }
        return queueMicrotask(() => {
          null === d2 ? l2.resolve(void 0) : l2.reject(d2);
        }), l2.promise;
      }
      async put(e3, n3) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e3 = c.converters.RequestInfo(e3), n3 = c.converters.Response(n3);
        let t3 = null;
        if (t3 = e3 instanceof m ? e3[u] : new m(e3)[u], !T(t3.url) || "GET" !== t3.method) throw c.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const a3 = n3[u];
        if (206 === a3.status) throw c.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (a3.headersList.contains("vary")) {
          const e4 = o2(a3.headersList.get("vary"));
          for (const n4 of e4) if ("*" === n4) throw c.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (a3.body && (i(a3.body.stream) || a3.body.stream.locked)) throw c.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const s3 = d(a3), r2 = k();
        if (null != a3.body) {
          const e4 = a3.body.stream.getReader();
          f(e4).then(r2.resolve, r2.reject);
        } else r2.resolve(void 0);
        const A2 = [], l2 = { type: "put", request: t3, response: s3 };
        A2.push(l2);
        const g2 = await r2.promise;
        null != s3.body && (s3.body.source = g2);
        const p2 = k();
        let E2 = null;
        try {
          this.#c(A2);
        } catch (e4) {
          E2 = e4;
        }
        return queueMicrotask(() => {
          null === E2 ? p2.resolve() : p2.reject(E2);
        }), p2.promise;
      }
      async delete(e3, n3 = {}) {
        c.brandCheck(this, C), c.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e3 = c.converters.RequestInfo(e3), n3 = c.converters.CacheQueryOptions(n3);
        let t3 = null;
        if (e3 instanceof m) {
          if (t3 = e3[u], "GET" !== t3.method && !n3.ignoreMethod) return false;
        } else _("string" == typeof e3), t3 = new m(e3)[u];
        const a3 = [], s3 = { type: "delete", request: t3, options: n3 };
        a3.push(s3);
        const o3 = k();
        let r2, i2 = null;
        try {
          r2 = this.#c(a3);
        } catch (e4) {
          i2 = e4;
        }
        return queueMicrotask(() => {
          null === i2 ? o3.resolve(!!r2?.length) : o3.reject(i2);
        }), o3.promise;
      }
      async keys(e3 = void 0, n3 = {}) {
        c.brandCheck(this, C), void 0 !== e3 && (e3 = c.converters.RequestInfo(e3)), n3 = c.converters.CacheQueryOptions(n3);
        let t3 = null;
        if (void 0 !== e3) if (e3 instanceof m) {
          if (t3 = e3[u], "GET" !== t3.method && !n3.ignoreMethod) return [];
        } else "string" == typeof e3 && (t3 = new m(e3)[u]);
        const a3 = k(), s3 = [];
        if (void 0 === e3) for (const e4 of this.#i) s3.push(e4[0]);
        else {
          const e4 = this.#A(t3, n3);
          for (const n4 of e4) s3.push(n4[0]);
        }
        return queueMicrotask(() => {
          const e4 = [];
          for (const n4 of s3) {
            const t4 = new m("https://a");
            t4[u] = n4, t4[g][A] = n4.headersList, t4[g][p] = "immutable", t4[E] = n4.client, e4.push(t4);
          }
          a3.resolve(Object.freeze(e4));
        }), a3.promise;
      }
      #c(e3) {
        const n3 = this.#i, t3 = [...n3], a3 = [], s3 = [];
        try {
          for (const t4 of e3) {
            if ("delete" !== t4.type && "put" !== t4.type) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === t4.type && null != t4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#A(t4.request, t4.options, a3).length) throw new DOMException("???", "InvalidStateError");
            let e4;
            if ("delete" === t4.type) {
              if (e4 = this.#A(t4.request, t4.options), 0 === e4.length) return [];
              for (const t5 of e4) {
                const e5 = n3.indexOf(t5);
                _(-1 !== e5), n3.splice(e5, 1);
              }
            } else if ("put" === t4.type) {
              if (null == t4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const s4 = t4.request;
              if (!T(s4.url)) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== s4.method) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != t4.options) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e4 = this.#A(t4.request);
              for (const t5 of e4) {
                const e5 = n3.indexOf(t5);
                _(-1 !== e5), n3.splice(e5, 1);
              }
              n3.push([t4.request, t4.response]), a3.push([t4.request, t4.response]);
            }
            s3.push([t4.request, t4.response]);
          }
          return s3;
        } catch (e4) {
          throw this.#i.length = 0, this.#i = t3, e4;
        }
      }
      #A(e3, n3, t3) {
        const a3 = [], s3 = t3 ?? this.#i;
        for (const t4 of s3) {
          const [s4, o3] = t4;
          this.#l(e3, s4, o3, n3) && a3.push(t4);
        }
        return a3;
      }
      #l(e3, n3, t3 = null, a3) {
        const r2 = new URL(e3.url), i2 = new URL(n3.url);
        if (a3?.ignoreSearch && (i2.search = "", r2.search = ""), !s2(r2, i2, true)) return false;
        if (null == t3 || a3?.ignoreVary || !t3.headersList.contains("vary")) return true;
        const A2 = o2(t3.headersList.get("vary"));
        for (const t4 of A2) {
          if ("*" === t4) return false;
          if (n3.headersList.get(t4) !== e3.headersList.get(t4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(C.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: r, matchAll: r, add: r, addAll: r, put: r, delete: r, keys: r });
    const y = [{ key: "ignoreSearch", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: c.converters.boolean, defaultValue: false }];
    c.converters.CacheQueryOptions = c.dictionaryConverter(y), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([...y, { key: "cacheName", converter: c.converters.DOMString }]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), e2.exports = { Cache: C };
  }