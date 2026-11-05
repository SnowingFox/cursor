// @recovered-by cursor-re
// artifact: app/extensions/cursor-always-local/dist/main.js sha256:14fb2d0e360d81a024b4ec605f417e030e19b30b2df99bc45648aa227060534e
// module: 7758 range:4605979..4617055
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
7758: (t2, e2, r2) => {
    "use strict";
    const { kConstruct: n2 } = r2(7945), { urlEquals: s2, fieldValues: i2 } = r2(9442), { kEnumerableProperty: o2, isDisturbed: a } = r2(3589), { kHeadersList: u } = r2(5532), { webidl: c } = r2(8193), { Response: l, cloneResponse: m } = r2(3511), { Request: d } = r2(547), { kState: f, kHeaders: p, kGuard: h, kRealm: g } = r2(7271), { fetching: A } = r2(3914), { urlIsHttpHttpsScheme: _, createDeferredPromise: y, readAllBytes: w } = r2(8116), S = r2(2613), { getGlobalDispatcher: J } = r2(7582);
    class B {
      #d;
      constructor() {
        arguments[0] !== n2 && c.illegalConstructor(), this.#d = arguments[1];
      }
      async match(t3, e3 = {}) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), t3 = c.converters.RequestInfo(t3), e3 = c.converters.CacheQueryOptions(e3);
        const r3 = await this.matchAll(t3, e3);
        if (0 !== r3.length) return r3[0];
      }
      async matchAll(t3 = void 0, e3 = {}) {
        c.brandCheck(this, B), void 0 !== t3 && (t3 = c.converters.RequestInfo(t3)), e3 = c.converters.CacheQueryOptions(e3);
        let r3 = null;
        if (void 0 !== t3) if (t3 instanceof d) {
          if (r3 = t3[f], "GET" !== r3.method && !e3.ignoreMethod) return [];
        } else "string" == typeof t3 && (r3 = new d(t3)[f]);
        const n3 = [];
        if (void 0 === t3) for (const t4 of this.#d) n3.push(t4[1]);
        else {
          const t4 = this.#f(r3, e3);
          for (const e4 of t4) n3.push(e4[1]);
        }
        const s3 = [];
        for (const t4 of n3) {
          const e4 = new l(t4.body?.source ?? null), r4 = e4[f].body;
          e4[f] = t4, e4[f].body = r4, e4[p][u] = t4.headersList, e4[p][h] = "immutable", s3.push(e4);
        }
        return Object.freeze(s3);
      }
      async add(t3) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const e3 = [t3 = c.converters.RequestInfo(t3)], r3 = this.addAll(e3);
        return await r3;
      }
      async addAll(t3) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), t3 = c.converters["sequence<RequestInfo>"](t3);
        const e3 = [], r3 = [];
        for (const e4 of t3) {
          if ("string" == typeof e4) continue;
          const t4 = e4[f];
          if (!_(t4.url) || "GET" !== t4.method) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const n3 = [];
        for (const s4 of t3) {
          const t4 = new d(s4)[f];
          if (!_(t4.url)) throw c.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          t4.initiator = "fetch", t4.destination = "subresource", r3.push(t4);
          const o4 = y();
          n3.push(A({ request: t4, dispatcher: J(), processResponse(t5) {
            if ("error" === t5.type || 206 === t5.status || t5.status < 200 || t5.status > 299) o4.reject(c.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (t5.headersList.contains("vary")) {
              const e4 = i2(t5.headersList.get("vary"));
              for (const t6 of e4) if ("*" === t6) {
                o4.reject(c.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const t7 of n3) t7.abort();
                return;
              }
            }
          }, processResponseEndOfBody(t5) {
            t5.aborted ? o4.reject(new DOMException("aborted", "AbortError")) : o4.resolve(t5);
          } })), e3.push(o4.promise);
        }
        const s3 = Promise.all(e3), o3 = await s3, a2 = [];
        let u2 = 0;
        for (const t4 of o3) {
          const e4 = { type: "put", request: r3[u2], response: t4 };
          a2.push(e4), u2++;
        }
        const l2 = y();
        let m2 = null;
        try {
          this.#p(a2);
        } catch (t4) {
          m2 = t4;
        }
        return queueMicrotask(() => {
          null === m2 ? l2.resolve(void 0) : l2.reject(m2);
        }), l2.promise;
      }
      async put(t3, e3) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), t3 = c.converters.RequestInfo(t3), e3 = c.converters.Response(e3);
        let r3 = null;
        if (r3 = t3 instanceof d ? t3[f] : new d(t3)[f], !_(r3.url) || "GET" !== r3.method) throw c.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const n3 = e3[f];
        if (206 === n3.status) throw c.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (n3.headersList.contains("vary")) {
          const t4 = i2(n3.headersList.get("vary"));
          for (const e4 of t4) if ("*" === e4) throw c.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (n3.body && (a(n3.body.stream) || n3.body.stream.locked)) throw c.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const s3 = m(n3), o3 = y();
        if (null != n3.body) {
          const t4 = n3.body.stream.getReader();
          w(t4).then(o3.resolve, o3.reject);
        } else o3.resolve(void 0);
        const u2 = [], l2 = { type: "put", request: r3, response: s3 };
        u2.push(l2);
        const p2 = await o3.promise;
        null != s3.body && (s3.body.source = p2);
        const h2 = y();
        let g2 = null;
        try {
          this.#p(u2);
        } catch (t4) {
          g2 = t4;
        }
        return queueMicrotask(() => {
          null === g2 ? h2.resolve() : h2.reject(g2);
        }), h2.promise;
      }
      async delete(t3, e3 = {}) {
        c.brandCheck(this, B), c.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), t3 = c.converters.RequestInfo(t3), e3 = c.converters.CacheQueryOptions(e3);
        let r3 = null;
        if (t3 instanceof d) {
          if (r3 = t3[f], "GET" !== r3.method && !e3.ignoreMethod) return false;
        } else S("string" == typeof t3), r3 = new d(t3)[f];
        const n3 = [], s3 = { type: "delete", request: r3, options: e3 };
        n3.push(s3);
        const i3 = y();
        let o3, a2 = null;
        try {
          o3 = this.#p(n3);
        } catch (t4) {
          a2 = t4;
        }
        return queueMicrotask(() => {
          null === a2 ? i3.resolve(!!o3?.length) : i3.reject(a2);
        }), i3.promise;
      }
      async keys(t3 = void 0, e3 = {}) {
        c.brandCheck(this, B), void 0 !== t3 && (t3 = c.converters.RequestInfo(t3)), e3 = c.converters.CacheQueryOptions(e3);
        let r3 = null;
        if (void 0 !== t3) if (t3 instanceof d) {
          if (r3 = t3[f], "GET" !== r3.method && !e3.ignoreMethod) return [];
        } else "string" == typeof t3 && (r3 = new d(t3)[f]);
        const n3 = y(), s3 = [];
        if (void 0 === t3) for (const t4 of this.#d) s3.push(t4[0]);
        else {
          const t4 = this.#f(r3, e3);
          for (const e4 of t4) s3.push(e4[0]);
        }
        return queueMicrotask(() => {
          const t4 = [];
          for (const e4 of s3) {
            const r4 = new d("https://a");
            r4[f] = e4, r4[p][u] = e4.headersList, r4[p][h] = "immutable", r4[g] = e4.client, t4.push(r4);
          }
          n3.resolve(Object.freeze(t4));
        }), n3.promise;
      }
      #p(t3) {
        const e3 = this.#d, r3 = [...e3], n3 = [], s3 = [];
        try {
          for (const r4 of t3) {
            if ("delete" !== r4.type && "put" !== r4.type) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === r4.type && null != r4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#f(r4.request, r4.options, n3).length) throw new DOMException("???", "InvalidStateError");
            let t4;
            if ("delete" === r4.type) {
              if (t4 = this.#f(r4.request, r4.options), 0 === t4.length) return [];
              for (const r5 of t4) {
                const t5 = e3.indexOf(r5);
                S(-1 !== t5), e3.splice(t5, 1);
              }
            } else if ("put" === r4.type) {
              if (null == r4.response) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const s4 = r4.request;
              if (!_(s4.url)) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== s4.method) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != r4.options) throw c.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              t4 = this.#f(r4.request);
              for (const r5 of t4) {
                const t5 = e3.indexOf(r5);
                S(-1 !== t5), e3.splice(t5, 1);
              }
              e3.push([r4.request, r4.response]), n3.push([r4.request, r4.response]);
            }
            s3.push([r4.request, r4.response]);
          }
          return s3;
        } catch (t4) {
          throw this.#d.length = 0, this.#d = r3, t4;
        }
      }
      #f(t3, e3, r3) {
        const n3 = [], s3 = r3 ?? this.#d;
        for (const r4 of s3) {
          const [s4, i3] = r4;
          this.#h(t3, s4, i3, e3) && n3.push(r4);
        }
        return n3;
      }
      #h(t3, e3, r3 = null, n3) {
        const o3 = new URL(t3.url), a2 = new URL(e3.url);
        if (n3?.ignoreSearch && (a2.search = "", o3.search = ""), !s2(o3, a2, true)) return false;
        if (null == r3 || n3?.ignoreVary || !r3.headersList.contains("vary")) return true;
        const u2 = i2(r3.headersList.get("vary"));
        for (const r4 of u2) {
          if ("*" === r4) return false;
          if (e3.headersList.get(r4) !== t3.headersList.get(r4)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(B.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: o2, matchAll: o2, add: o2, addAll: o2, put: o2, delete: o2, keys: o2 });
    const E = [{ key: "ignoreSearch", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: c.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: c.converters.boolean, defaultValue: false }];
    c.converters.CacheQueryOptions = c.dictionaryConverter(E), c.converters.MultiCacheQueryOptions = c.dictionaryConverter([...E, { key: "cacheName", converter: c.converters.DOMString }]), c.converters.Response = c.interfaceConverter(l), c.converters["sequence<RequestInfo>"] = c.sequenceConverter(c.converters.RequestInfo), t2.exports = { Cache: B };
  }