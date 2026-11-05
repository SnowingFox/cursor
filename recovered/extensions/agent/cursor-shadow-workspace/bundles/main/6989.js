// @recovered-by cursor-re
// artifact: app/extensions/cursor-shadow-workspace/dist/extension.js sha256:19218949e5ecc64e4c1b41e194ba40abfd54a9aeb034a14f90c71485b7f84585
// module: 6989 range:512799..514741
// basis: webpack-id confidence: C
// method: split
// run: ext-agent 2026-11-05T10:20:08.356Z
6989: (e2, A2, t2) => {
    "use strict";
    const { kConstruct: n2 } = t2(2381), { Cache: r2 } = t2(8642), { webidl: o2 } = t2(8005), { kEnumerableProperty: s } = t2(9361);
    class a {
      #A = /* @__PURE__ */ new Map();
      constructor() {
        arguments[0] !== n2 && o2.illegalConstructor();
      }
      async match(e3, A3 = {}) {
        if (o2.brandCheck(this, a), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.match" }), e3 = o2.converters.RequestInfo(e3), null != (A3 = o2.converters.MultiCacheQueryOptions(A3)).cacheName) {
          if (this.#A.has(A3.cacheName)) {
            const t3 = this.#A.get(A3.cacheName), o3 = new r2(n2, t3);
            return await o3.match(e3, A3);
          }
        } else for (const t3 of this.#A.values()) {
          const o3 = new r2(n2, t3), s2 = await o3.match(e3, A3);
          if (void 0 !== s2) return s2;
        }
      }
      async has(e3) {
        return o2.brandCheck(this, a), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.has" }), e3 = o2.converters.DOMString(e3), this.#A.has(e3);
      }
      async open(e3) {
        if (o2.brandCheck(this, a), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.open" }), e3 = o2.converters.DOMString(e3), this.#A.has(e3)) {
          const A4 = this.#A.get(e3);
          return new r2(n2, A4);
        }
        const A3 = [];
        return this.#A.set(e3, A3), new r2(n2, A3);
      }
      async delete(e3) {
        return o2.brandCheck(this, a), o2.argumentLengthCheck(arguments, 1, { header: "CacheStorage.delete" }), e3 = o2.converters.DOMString(e3), this.#A.delete(e3);
      }
      async keys() {
        o2.brandCheck(this, a);
        return [...this.#A.keys()];
      }
    }
    Object.defineProperties(a.prototype, { [Symbol.toStringTag]: { value: "CacheStorage", configurable: true }, match: s, has: s, open: s, delete: s, keys: s }), e2.exports = { CacheStorage: a };
  }