// @recovered-by cursor-re
// artifact: app/extensions/cursor-agent-host/dist/main.js sha256:9d478dff35f72f6b3ed85b33f2c4a15c12b41b4e3d42247ecc8ce4981e9308bb
// module: 57758 range:8771187..8782245
// basis: webpack-id confidence: C
// method: split
// run: ext-p0 2026-11-05T10:07:22.069Z
57758: (e, t, r) => {
    "use strict";
    const { kConstruct: n } = r(17945), { urlEquals: s, fieldValues: o } = r(79442), { kEnumerableProperty: i, isDisturbed: a } = r(83589), { kHeadersList: c } = r(15532), { webidl: l } = r(18193), { Response: u, cloneResponse: d } = r(53511), { Request: p } = r(30547), { kState: m, kHeaders: h, kGuard: f, kRealm: g } = r(77271), { fetching: y } = r(93914), { urlIsHttpHttpsScheme: w, createDeferredPromise: v, readAllBytes: _ } = r(98116), A = r(42613), { getGlobalDispatcher: S } = r(17582);
    class b {
      #Q;
      constructor() {
        arguments[0] !== n && l.illegalConstructor(), this.#Q = arguments[1];
      }
      async match(e2, t2 = {}) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, { header: "Cache.match" }), e2 = l.converters.RequestInfo(e2), t2 = l.converters.CacheQueryOptions(t2);
        const r2 = await this.matchAll(e2, t2);
        if (0 !== r2.length) return r2[0];
      }
      async matchAll(e2 = void 0, t2 = {}) {
        l.brandCheck(this, b), void 0 !== e2 && (e2 = l.converters.RequestInfo(e2)), t2 = l.converters.CacheQueryOptions(t2);
        let r2 = null;
        if (void 0 !== e2) if (e2 instanceof p) {
          if (r2 = e2[m], "GET" !== r2.method && !t2.ignoreMethod) return [];
        } else "string" == typeof e2 && (r2 = new p(e2)[m]);
        const n2 = [];
        if (void 0 === e2) for (const e3 of this.#Q) n2.push(e3[1]);
        else {
          const e3 = this.#j(r2, t2);
          for (const t3 of e3) n2.push(t3[1]);
        }
        const s2 = [];
        for (const e3 of n2) {
          const t3 = new u(e3.body?.source ?? null), r3 = t3[m].body;
          t3[m] = e3, t3[m].body = r3, t3[h][c] = e3.headersList, t3[h][f] = "immutable", s2.push(t3);
        }
        return Object.freeze(s2);
      }
      async add(e2) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, { header: "Cache.add" });
        const t2 = [e2 = l.converters.RequestInfo(e2)], r2 = this.addAll(t2);
        return await r2;
      }
      async addAll(e2) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, { header: "Cache.addAll" }), e2 = l.converters["sequence<RequestInfo>"](e2);
        const t2 = [], r2 = [];
        for (const t3 of e2) {
          if ("string" == typeof t3) continue;
          const e3 = t3[m];
          if (!w(e3.url) || "GET" !== e3.method) throw l.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme when method is not GET." });
        }
        const n2 = [];
        for (const s3 of e2) {
          const e3 = new p(s3)[m];
          if (!w(e3.url)) throw l.errors.exception({ header: "Cache.addAll", message: "Expected http/s scheme." });
          e3.initiator = "fetch", e3.destination = "subresource", r2.push(e3);
          const i3 = v();
          n2.push(y({ request: e3, dispatcher: S(), processResponse(e4) {
            if ("error" === e4.type || 206 === e4.status || e4.status < 200 || e4.status > 299) i3.reject(l.errors.exception({ header: "Cache.addAll", message: "Received an invalid status code or the request failed." }));
            else if (e4.headersList.contains("vary")) {
              const t3 = o(e4.headersList.get("vary"));
              for (const e5 of t3) if ("*" === e5) {
                i3.reject(l.errors.exception({ header: "Cache.addAll", message: "invalid vary field value" }));
                for (const e6 of n2) e6.abort();
                return;
              }
            }
          }, processResponseEndOfBody(e4) {
            e4.aborted ? i3.reject(new DOMException("aborted", "AbortError")) : i3.resolve(e4);
          } })), t2.push(i3.promise);
        }
        const s2 = Promise.all(t2), i2 = await s2, a2 = [];
        let c2 = 0;
        for (const e3 of i2) {
          const t3 = { type: "put", request: r2[c2], response: e3 };
          a2.push(t3), c2++;
        }
        const u2 = v();
        let d2 = null;
        try {
          this.#G(a2);
        } catch (e3) {
          d2 = e3;
        }
        return queueMicrotask(() => {
          null === d2 ? u2.resolve(void 0) : u2.reject(d2);
        }), u2.promise;
      }
      async put(e2, t2) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 2, { header: "Cache.put" }), e2 = l.converters.RequestInfo(e2), t2 = l.converters.Response(t2);
        let r2 = null;
        if (r2 = e2 instanceof p ? e2[m] : new p(e2)[m], !w(r2.url) || "GET" !== r2.method) throw l.errors.exception({ header: "Cache.put", message: "Expected an http/s scheme when method is not GET" });
        const n2 = t2[m];
        if (206 === n2.status) throw l.errors.exception({ header: "Cache.put", message: "Got 206 status" });
        if (n2.headersList.contains("vary")) {
          const e3 = o(n2.headersList.get("vary"));
          for (const t3 of e3) if ("*" === t3) throw l.errors.exception({ header: "Cache.put", message: "Got * vary field value" });
        }
        if (n2.body && (a(n2.body.stream) || n2.body.stream.locked)) throw l.errors.exception({ header: "Cache.put", message: "Response body is locked or disturbed" });
        const s2 = d(n2), i2 = v();
        if (null != n2.body) {
          const e3 = n2.body.stream.getReader();
          _(e3).then(i2.resolve, i2.reject);
        } else i2.resolve(void 0);
        const c2 = [], u2 = { type: "put", request: r2, response: s2 };
        c2.push(u2);
        const h2 = await i2.promise;
        null != s2.body && (s2.body.source = h2);
        const f2 = v();
        let g2 = null;
        try {
          this.#G(c2);
        } catch (e3) {
          g2 = e3;
        }
        return queueMicrotask(() => {
          null === g2 ? f2.resolve() : f2.reject(g2);
        }), f2.promise;
      }
      async delete(e2, t2 = {}) {
        l.brandCheck(this, b), l.argumentLengthCheck(arguments, 1, { header: "Cache.delete" }), e2 = l.converters.RequestInfo(e2), t2 = l.converters.CacheQueryOptions(t2);
        let r2 = null;
        if (e2 instanceof p) {
          if (r2 = e2[m], "GET" !== r2.method && !t2.ignoreMethod) return false;
        } else A("string" == typeof e2), r2 = new p(e2)[m];
        const n2 = [], s2 = { type: "delete", request: r2, options: t2 };
        n2.push(s2);
        const o2 = v();
        let i2, a2 = null;
        try {
          i2 = this.#G(n2);
        } catch (e3) {
          a2 = e3;
        }
        return queueMicrotask(() => {
          null === a2 ? o2.resolve(!!i2?.length) : o2.reject(a2);
        }), o2.promise;
      }
      async keys(e2 = void 0, t2 = {}) {
        l.brandCheck(this, b), void 0 !== e2 && (e2 = l.converters.RequestInfo(e2)), t2 = l.converters.CacheQueryOptions(t2);
        let r2 = null;
        if (void 0 !== e2) if (e2 instanceof p) {
          if (r2 = e2[m], "GET" !== r2.method && !t2.ignoreMethod) return [];
        } else "string" == typeof e2 && (r2 = new p(e2)[m]);
        const n2 = v(), s2 = [];
        if (void 0 === e2) for (const e3 of this.#Q) s2.push(e3[0]);
        else {
          const e3 = this.#j(r2, t2);
          for (const t3 of e3) s2.push(t3[0]);
        }
        return queueMicrotask(() => {
          const e3 = [];
          for (const t3 of s2) {
            const r3 = new p("https://a");
            r3[m] = t3, r3[h][c] = t3.headersList, r3[h][f] = "immutable", r3[g] = t3.client, e3.push(r3);
          }
          n2.resolve(Object.freeze(e3));
        }), n2.promise;
      }
      #G(e2) {
        const t2 = this.#Q, r2 = [...t2], n2 = [], s2 = [];
        try {
          for (const r3 of e2) {
            if ("delete" !== r3.type && "put" !== r3.type) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: 'operation type does not match "delete" or "put"' });
            if ("delete" === r3.type && null != r3.response) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "delete operation should not have an associated response" });
            if (this.#j(r3.request, r3.options, n2).length) throw new DOMException("???", "InvalidStateError");
            let e3;
            if ("delete" === r3.type) {
              if (e3 = this.#j(r3.request, r3.options), 0 === e3.length) return [];
              for (const r4 of e3) {
                const e4 = t2.indexOf(r4);
                A(-1 !== e4), t2.splice(e4, 1);
              }
            } else if ("put" === r3.type) {
              if (null == r3.response) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "put operation should have an associated response" });
              const s3 = r3.request;
              if (!w(s3.url)) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "expected http or https scheme" });
              if ("GET" !== s3.method) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "not get method" });
              if (null != r3.options) throw l.errors.exception({ header: "Cache.#batchCacheOperations", message: "options must not be defined" });
              e3 = this.#j(r3.request);
              for (const r4 of e3) {
                const e4 = t2.indexOf(r4);
                A(-1 !== e4), t2.splice(e4, 1);
              }
              t2.push([r3.request, r3.response]), n2.push([r3.request, r3.response]);
            }
            s2.push([r3.request, r3.response]);
          }
          return s2;
        } catch (e3) {
          throw this.#Q.length = 0, this.#Q = r2, e3;
        }
      }
      #j(e2, t2, r2) {
        const n2 = [], s2 = r2 ?? this.#Q;
        for (const r3 of s2) {
          const [s3, o2] = r3;
          this.#H(e2, s3, o2, t2) && n2.push(r3);
        }
        return n2;
      }
      #H(e2, t2, r2 = null, n2) {
        const i2 = new URL(e2.url), a2 = new URL(t2.url);
        if (n2?.ignoreSearch && (a2.search = "", i2.search = ""), !s(i2, a2, true)) return false;
        if (null == r2 || n2?.ignoreVary || !r2.headersList.contains("vary")) return true;
        const c2 = o(r2.headersList.get("vary"));
        for (const r3 of c2) {
          if ("*" === r3) return false;
          if (t2.headersList.get(r3) !== e2.headersList.get(r3)) return false;
        }
        return true;
      }
    }
    Object.defineProperties(b.prototype, { [Symbol.toStringTag]: { value: "Cache", configurable: true }, match: i, matchAll: i, add: i, addAll: i, put: i, delete: i, keys: i });
    const E = [{ key: "ignoreSearch", converter: l.converters.boolean, defaultValue: false }, { key: "ignoreMethod", converter: l.converters.boolean, defaultValue: false }, { key: "ignoreVary", converter: l.converters.boolean, defaultValue: false }];
    l.converters.CacheQueryOptions = l.dictionaryConverter(E), l.converters.MultiCacheQueryOptions = l.dictionaryConverter([...E, { key: "cacheName", converter: l.converters.DOMString }]), l.converters.Response = l.interfaceConverter(u), l.converters["sequence<RequestInfo>"] = l.sequenceConverter(l.converters.RequestInfo), e.exports = { Cache: b };
  }